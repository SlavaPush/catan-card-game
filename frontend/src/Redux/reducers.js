import { STATE_UPDATE, ERROR } from "./actionTypes";
import produce from "immer";

const initialState = {
  loading: true,
  img: null,
  error: null,
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case STATE_UPDATE: {
      return produce(state, draft => {
        draft.loading = false;
        draft.img = payload;
        draft.error = null;
      });
    }
    case ERROR: {
      return produce(state, draft => {
        draft.loading = false;
        draft.img = null;
        draft.error = payload;
      });
    }
    default:
      return state;
  }
}

// return produce(state, draft => {
//   draft.push('example')
// })
