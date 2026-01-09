import { Injectable } from '@angular/core';
import { Contacts } from '../models/contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = 'http://localhost:3001'
  private contacts: Contacts[] = []

  constructor(private http: HttpClient){}

  getContacts(): Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this.apiUrl + "/contacts")
  }

  deleteContact(id: number): Observable<void> {
    console.log(`Deleting contact with ID: ${id}`)
    return this.http.delete<void>(`${this.apiUrl}/contacts/${id}`)
  }
}
