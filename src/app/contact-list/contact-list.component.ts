import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacts } from '../models/contacts';
import { ContactsService } from '../contacts/contacts.service';
@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts: Contacts[] = []

  constructor(private contactsService: ContactsService){}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts
    })
  }

  deleteContact(id: number){
    this.contactsService.deleteContact(id).subscribe({
      next: () => {
        console.log(`${id} was removed!`)
        this.contacts = this.contacts.filter(c => c.id_no !== id)
      },
      error: (err) => {
        console.error('Delete failed:', err)
        alert('Failed to delete contact')
      }
    })
  }

}
