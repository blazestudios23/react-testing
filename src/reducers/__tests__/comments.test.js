import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const COMMENT_TEXT = 'New Comment';
  const action = {
    type: SAVE_COMMENT,
    payload: COMMENT_TEXT,
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([COMMENT_TEXT]);

});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'none' });
  expect(newState).toEqual([]);
});
