import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public myData !: any;
  UserList : any[] = [];
  localItem: string = '';
  constructor() { 
    // if (typeof localStorage !== 'undefined') {
    //   // Use localStorage here
    //   const storedData = localStorage.getItem('key');
    //   this.localItem = localStorage.getItem('UserList')!;
    //   if (this.localItem == null) {
    //     this.UserList = [];
    //   } else {
    //     this.UserList = JSON.parse(this.localItem);
    //   }
    // } else {
    //   console.error('localStorage is not available in this environment.');
    // }
  }
  addData(data : any){
    console.log("Service", data);
    this.UserList.push(data);
    // localStorage.setItem("UserList", JSON.stringify(this.UserList))
    console.log("this is my list",this.UserList);
  }
  deleteData(index : number){
    this.UserList.splice(index, 1);
    // localStorage.setItem("UserList", JSON.stringify(this.UserList))
  }
  updateFormVal(index : number, data : any){
    console.log("Updated Data", data);
    this.UserList[index] = data;
  }
}
