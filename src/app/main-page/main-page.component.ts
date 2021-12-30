import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {DataService} from '../data.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers:[DatePipe],
})
export class MainPageComponent implements OnInit {
myDate=new Date();
test:string;
balance:any;
spent:any;
expensedata:any[];
i:any;
  constructor(private datepipe:DatePipe,private dataservice:DataService) {
  this.test = this.datepipe.transform(this.myDate, 'MMMM');
  this.get_balance();


 }

  ngOnInit(): void {
  }
  get_balance(){
    this.spent=0;
    this.balance=0;
    this.dataservice.getdata().snapshotChanges().subscribe(
        item=>{
          this.expensedata=[];
          item.forEach(element=>{
            var x=element.payload.toJSON();

            x['key']=element.key;
            this.expensedata.push(x);
          })

        });

        console.log(this.expensedata);
         setTimeout(() =>{ for(this.i=0;this.i<this.expensedata.length;this.i++)
         {
           if(this.expensedata[this.i].Type=="addIncome")
           this.balance+=this.expensedata[this.i].Amount;
           else
           this.spent+=this.expensedata[this.i].Amount;
         }
         this.balance=this.balance-this.spent},4000);


  }

}
