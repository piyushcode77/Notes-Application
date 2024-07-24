// src/app/store/selectors/text-note.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TextNoteState } from '../reducers/text-note.reducer';
import { AppState } from '../reducers';


// export const selectTextNoteState = createFeatureSelector<TextNoteState>('textNotes');

// export const selectAllTextNotes = createSelector(
//   selectTextNoteState,
//   (state: TextNoteState) => state.notes
// );

export const selectTextNotes = (state: AppState) => state.textNotes.notes;
