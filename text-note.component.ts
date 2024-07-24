import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { TextNote } from '../../models/note.model';
import * as TextNoteActions from '../../store/actions/text-note.actions';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.sass']
})
export class TextNoteComponent {
  @Input() noteType: string = 'text';

  title: string = '';
  content: string = '';
  documentType: string = '';
  imageFile: File | null = null;
  pdfFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = '';
  pdfFileName: string = '';
  pdfPreview: boolean = false;


  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    console.log('Note Type:', this.noteType);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      if (file.type.startsWith('image/')) {
        this.imageFile = file;
        const reader = new FileReader();
        reader.onload = e => this.imagePreview = reader.result;
        reader.readAsDataURL(file);
      } else if (file.type === 'application/pdf') {
        this.pdfFile = file;
        this.pdfFileName = file.name;
        this.pdfPreview = true;

      }
    }
  }

  onSubmit(): void {
    let newNote: TextNote;
    if (this.noteType === 'text' || this.noteType === 'article') {
      newNote = {
        id: uuid(),
        title: this.title,
        content: this.content
      };
    } else if (this.noteType === 'picture') {
      newNote = {
        id: uuid(),
        title: this.title,
        content: this.content,
        imageFile: this.imageFile // or handle file upload as needed
      };
    } else if (this.noteType === 'document') {
      newNote = {
        id: uuid(),
        title: this.title,
        content: this.documentType,
        pdfFile: this.pdfFile // or handle file upload as needed
      };
    }  else if (this.noteType === 'Meeting') {
      newNote = {
        id: uuid(),
        title: this.title,
        content: this.documentType,
        imageFile: this.imageFile // or handle file upload as needed
      };
    } 
    else {
      return;
    }

    console.log('New Note:', newNote); // Log the new note

    this.store.dispatch(TextNoteActions.addTextNote({ note: newNote }));

    this.router.navigate(['/']);
  }
}
