import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Contact = new Contact("", "", "", "");

  constructor() { }

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
