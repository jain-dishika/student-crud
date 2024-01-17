import { Component, Input, OnInit,inject, TemplateRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from '../../services/form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { error, log } from 'console';
import { Store } from '@ngrx/store';
import { getUsers } from '../../redux/user.selector';
import { userModel } from '../../redux/user.model';
import { Observable } from 'rxjs';
import { LOAD_USER } from '../../redux/user.action';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, ReactiveFormsModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  private modalService = inject(NgbModal);
  public formService = inject(FormService); 
  private apiService = inject(ApiService); 
  private store = inject(Store);

  userData$: Observable<userModel[]> = this.store.select(state => state.userList);

  index !: number;
  updateUser !: any;
  closeResult = '';
  userList !: userModel[];
  // @Input() data! : any;

  constructor(public dataService : DataService){
    console.log(dataService.UserList);
  }
  ngOnInit(): void { 
    // this.store.dispatch({ type: LOAD_USER });
    // this.apiService.getAllUsers().subscribe(user => this.userList = user);

    // console.log(this.userList);
    
    this.store.select(getUsers).subscribe(item => {
      // this.userList = item;
      console.log(item);
    })
    this.apiService.getAllUsers().subscribe({
      next : (data: any)=>{
        this.dataService.UserList = [...data];
      },
      error : error=>{
        console.log(error);
      }
    })
  }
  onDelete(id : number, index : number){
    if(confirm("Do you want to delete the user")) {
      this.apiService.deleteUser(id).subscribe({
        next : () =>{
          console.log("Data Successfully Deleted");
          this.dataService.deleteData(index);
        },
        error : error =>{
          console.log(error);
        }
      })
    }
  }
	open(content: TemplateRef<any>, index : any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.index = index;
    this.formService.consoleVal(this.index);
	}
  save(index : number, id : number){
    this.updateUser = this.formService.studentForm.value;
    this.apiService.updateUser(this.updateUser, id).subscribe({
      next : () =>{
        console.log("User Updated");
        this.formService.resetValue();
        this.dataService.updateFormVal(index, this.updateUser);
      },
      error(err) {
        console.log(err);
      },
    })
  }
  resetValue(){
    this.formService.resetValue();
  }
}
