import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;


constructor() {
    this.name = 'Doe';
    this.firstName = 'John',
    this.age = 25,
    this.quote = '',
    this.photo = 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

hiddenAge: boolean = true;

  masquer() {
this.hiddenAge = !this.hiddenAge
  }
}
