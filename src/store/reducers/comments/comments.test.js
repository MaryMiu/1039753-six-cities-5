import ActionType from "./../../constants";
import {comments} from './comments';
import {reviews} from '../../../mock/for-test';
import {commentAdaptToClient} from "../../../utils";

it(`Reducer should update comments by load comments`, () => {
  expect(comments({
    comments: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: reviews.map(commentAdaptToClient),
  })).toEqual({
    comments: reviews.map(commentAdaptToClient)
  });
});
