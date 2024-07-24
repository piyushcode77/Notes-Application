import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TextNote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  private notes: TextNote[] = [];

  getNotes(): Observable<TextNote[]> {
    return of(this.notes); // Ensure this.notes is of type TextNote[]
  }

  addNote(note: TextNote): void {
    this.notes.push(note);
  }
}
