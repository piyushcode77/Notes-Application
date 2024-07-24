import { Component } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.sass']
})
export class NoteContainerComponent {
  selectedNoteType: string = 'text';

  selectNoteType(noteType: string): void {
    this.selectedNoteType = noteType;
  }

}
