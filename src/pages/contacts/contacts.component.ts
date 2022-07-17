import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  contact1: Contact = {
    id: '321654987',
    firstName: 'Tal',
    lastName: 'Shliki',
    email: 'talshliki@gmail.com',
    birthday: new Date(),
    phone: '911',
    age: 10,
    address: {
      country: 'Israel',
      street: 'Amir Gilboa',
      houseNumber: 5,
      zip: 555654,
    },
  };

  constructor() {
    this.contacts = [this.contact1];
  }

  ngOnInit(): void {}
}
