import { Injectable } from '@angular/core';

import {AngularFireList,AngularFireDatabase} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  lists:AngularFireList<any>;
  constructor(private firedb:AngularFireDatabase) { }

  getdata()
  {
    this.lists=this.firedb.list('/lists');
    console.log(this.lists);
    return this.lists;
  }

  insertdata(type:any,date:any,amount:any,note:any,catego:any)
  {
    this.lists=this.firedb.list('/lists');

    this.lists.push({
      Amount:amount,
      Note:note,
      Date:date,
      Category:catego,
      Type:type
    });
  }

  removedata($key:string)
  {
    this.lists.remove($key);
  }
}
