import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
person : User;  // je déclare une propriété person de type user

  // name: string;  //propriété unitaire
  // firstName: string;
  // age: number;
  // quote: string;
  // photo: string;


constructor() {
  this.person = new User('Doe', 'John', 25, 'je suis là!') //this car propriété du composant
    // this.name = 'Doe';
    // this.firstName = 'John',
    // this.age = 25,
    // this.quote = '',
    // this.photo = 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

hiddenAge: boolean = true;

  masquer() {
this.hiddenAge = !this.hiddenAge
  }
}
