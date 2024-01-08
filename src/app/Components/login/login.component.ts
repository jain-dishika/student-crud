import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  showAlert: boolean = false; 
  @Output() alertMessage : EventEmitter<boolean> = new EventEmitter();
  @Output() renderGlobal : EventEmitter<boolean> = new EventEmitter();
  @Output() details : EventEmitter<object> = new EventEmitter();

  studentForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    date : new FormControl('', Validators.required)
  })
  ngOnInit(): void {
      
  }
  onSubmit(){
    // if(!this.studentForm.valid) {
    //   this.showAlert = true;
    //   this.alertMessage.emit(this.showAlert);
    // }
    // else{
    //   this.renderGlobal.emit(state);
    // }
    // console.log(this.studentForm.value);
  }
  onButtonClick(state : boolean){
    if(!this.studentForm.valid) {
      this.showAlert = true;
      this.alertMessage.emit(this.showAlert);
    }
    else{
      this.renderGlobal.emit(state);
      this.details.emit(this.studentForm)
    }
  }
}
