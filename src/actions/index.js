import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};
export const fetchComments = () => {
	const res = axios.get('http://jsonplaceholder.typicode.com/comments');
	console.log('testing')
	
  return {
    type: FETCH_COMMENTS,
    payload: res
  };
};
