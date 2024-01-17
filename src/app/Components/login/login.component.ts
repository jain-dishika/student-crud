import { Component, OnInit, Output, EventEmitter, Input,inject } from '@angular/core';
import {  FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { FormService } from '../../services/form.service';
import { RouterLink, Router} from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { postUser } from '../../redux/user.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public formService = inject(FormService);
  public apiService = inject(ApiService);
  private router = inject(Router);
  private store = inject(Store);
  showAlert: boolean = false; 
  user !: any;
  date !: any;
  @Output() alertMessage : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {   }
  constructor(private dataService : DataService){ }
  onSubmit(){
    console.log(this.formService.studentForm.value);
    if(!this.formService.studentForm.valid) {
      this.showAlert = true;
      alert("Please fill correct input data");
      // this.alertMessage.emit(this.showAlert);
    }
    else{
      this.user = this.formService.studentForm.value;
      this.apiService.createUser(this.user).subscribe(()=>{
        console.log("this.user", this.user);
          this.dataService.addData(this.formService.studentForm.value);
      })
      // this.store.dispatch(postUser({userInput : this.user}))
      this.router.navigate(['/UserList']);
  }
  }
}
