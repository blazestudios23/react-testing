import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the corect type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the corect payload', () => {
    const COMMENT_TEXT = 'New Comment';
    const action = saveComment(COMMENT_TEXT);

    expect(action.payload).toEqual(COMMENT_TEXT);
  });
});
