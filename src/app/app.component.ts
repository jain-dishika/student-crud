import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { StudentComponent } from './Components/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, StudentComponent, RouterModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentCrud';
  renderGlobal! : boolean;
  // alert! : boolean; 
  handleInput(alertValue: boolean) {
    if(alertValue){
      alert("Please fill correct input data");
    }
    else{
      this.renderGlobal = alertValue
    }
  }
  rendering(render : boolean){
    this.renderGlobal = render;
  }
}
