import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../redux/user.model';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }
  getAllUsers(): Observable<userModel[]>{
    return this.http.get<userModel[]>(`http://localhost:8047/users/`);
  }
  createUser(user : any){
    return this.http.post(`http://localhost:8047/users/entry`, user);
  }
  deleteUser(id : number){
    return this.http.delete(`http://localhost:8047/users/`+ id);
  }
  updateUser(user : any, id : number){
    return this.http.put(`http://localhost:8047/users/${id}`, user);
  }
}
