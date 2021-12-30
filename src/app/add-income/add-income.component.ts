import { Component, OnInit } from '@angular/core';
import {CategoryComponent} from '../category/Category.Component';
import {FormBuilder,ReactiveFormsModule,FormsModule} from '@angular/forms'
import {DataService} from '../data.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css'],
  providers:[FormBuilder,DataService]
})
export class AddIncomeComponent implements OnInit {
  bars:any=true;
  bars2:any=true;
  checkoutform;
  dat:any;
  constructor(private formbuilder:FormBuilder,private dataservice:DataService,private router:Router,private route:ActivatedRoute) {
    this.checkoutform=this.formbuilder.group({
      amount:'',
      date:'',
      note:""
    });
    console.log(this.route.snapshot.params.token,"idd");
  }

  ngOnInit(): void {
  }

  set_category(categ){
    console.log(categ);
    console.log();
    this.dataservice.insertdata(this.route.snapshot.params.token,this.dat.date,this.dat.amount,this.dat.note,categ);
    this.checkoutform.reset();
    this.router.navigate(['/home']);
  }
onSubmit(data)
{
  if(this.route.snapshot.params.token=="addIncome")
  this.bars=false;
  else
  this.bars2=false;
  this.dat=data;
}
}
