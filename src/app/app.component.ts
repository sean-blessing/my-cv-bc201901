import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'my-cv';
  fullName: string = "Bob Marley";
  phone: string = "444-444-4444";
  email: string = "bob@bigdoobie.com";
  
}
