import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private dataService : DataService) {
    
  }
  // index !: number;
  UserList = JSON.stringify(this.dataService.UserList);
  studentForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth : new FormControl(null, Validators.required)
  })
  consoleVal(index : number){
    console.log("here data is present"+  " " +  this.dataService.UserList[index].name + " " +index);
    this.studentForm.controls.name.setValue(this.dataService.UserList[index]?.name);
    this.studentForm.controls.email.setValue(this.dataService.UserList[index]?.email);
    this.studentForm.controls.dateOfBirth.setValue(this.dataService.UserList[index]?.dateOfBirth);
  }
  resetValue(){
    this.studentForm.controls.name.setValue('');
    this.studentForm.controls.email.setValue('');
    this.studentForm.controls.dateOfBirth.setValue(null);
  }
}
