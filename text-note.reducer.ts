// src/app/store/reducers/text-note.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { addTextNote, loadTextNotesSuccess } from '../actions/text-note.actions';
import { TextNote } from '../../models/note.model';
import * as TextNoteActions from '../actions/text-note.actions';


export interface TextNoteState {
  notes: TextNote[];
}

export const initialState: TextNoteState = {
  notes: []
};

const _textNoteReducer = createReducer(
  initialState,
  on(TextNoteActions.addTextNote, (state, { note }) => {
    const updatedState = { ...state, notes: [...state.notes, note] };
    console.log('State after addTextNote:', updatedState); // Log the updated state
    return updatedState;
  }),
  on(TextNoteActions.loadTextNotesSuccess, (state, { notes }) => ({ 
    ...state, notes }))
);

export function textNoteReducer(state: TextNoteState | undefined, action: Action ) {
  return _textNoteReducer(state, action);
}
