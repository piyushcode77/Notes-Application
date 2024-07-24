// src/app/store/effects/text-note.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotesserviceService } from '../../services/notesservice.service';
import { loadTextNotes, loadTextNotesSuccess } from '../actions/text-note.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TextNote } from 'src/app/models/note.model';
import * as TextNoteActions from '../actions/text-note.actions';
import { of } from 'rxjs';


@Injectable()
export class TextNoteEffects {
    constructor(private actions$: Actions) {}

    loadTextNotes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TextNoteActions.loadTextNotes),
            mergeMap(() =>
                of([{ id: '1', title: 'Sample Text Note', content: 'This is a sample text note.' }]).pipe(
                    map(notes => TextNoteActions.loadTextNotesSuccess({ notes })),
                    catchError(() => of({ type: '[Text Note] Load Text Notes Failed' }))
                )
            )
        )
    );
}
