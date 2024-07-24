// src/app/store/actions/text-note.actions.ts
import { createAction, props } from '@ngrx/store';
import { TextNote } from '../../models/note.model';

export const addTextNote = createAction(
  '[TextNote] Add Note',
  props<{ note: TextNote }>()
);

export const loadTextNotes = createAction('[TextNote] Load Text Notes');

export const loadTextNotesSuccess = createAction(
  '[TextNote] Load Text Notes Success',
  props<{ notes: TextNote[] }>()
);


