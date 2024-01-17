import { Routes } from '@angular/router';
import { StudentComponent } from './Components/student/student.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"UserList",
        component:StudentComponent
    },
];
