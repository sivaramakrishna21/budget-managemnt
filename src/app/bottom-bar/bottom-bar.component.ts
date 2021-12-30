import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';



@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {
  expensedata:any[];
bal:any;
  constructor(private dataservice:DataService) {
    this.dataservice.getdata().snapshotChanges().subscribe(
        item=>{
          this.expensedata=[];
          item.forEach(element=>{
            var x=element.payload.toJSON();

            x['key']=element.key;
            this.expensedata.push(x);
          })

        });
        
       }

  ngOnInit(): void {
  }
onDelete(key:string)
{
  this.dataservice.removedata(key);
}
}
