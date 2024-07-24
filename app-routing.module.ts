import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TextNoteComponent } from './components/text-note/text-note.component';
import { NoteContainerComponent } from './components/note-container/note-container.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'text-note', component: TextNoteComponent },
  { path: 'note-container', component: NoteContainerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
