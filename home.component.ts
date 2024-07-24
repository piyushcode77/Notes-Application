import { Component , OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromRoot from '../../store/reducers';
import { TextNote } from '../../models/note.model';
import * as TextNoteActions from '../../store/actions/text-note.actions';
import { AppState } from '../../store/reducers';
import { selectTextNotes } from 'src/app/store/selectors/text-note.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  textNotes$: Observable<TextNote[]>;

  

  constructor(private store: Store<AppState>) {
    
    
    this.textNotes$ = this.store.pipe(
      select(selectTextNotes),
      tap(notes => console.log('Text Notes from Store:', notes)) // Log notes received from the store
    );
  }

ngOnInit(): void {
  console.log('HomeComponent initialized');
  this.store.dispatch({ type: '[Text Note] Load Text Notes' });
}
}
