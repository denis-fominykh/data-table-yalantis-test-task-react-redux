import axios from 'axios';
import { AppDispatchType } from '../types/TAppDispatch';
import { getUsers } from '../actions';

const _apiBase = 'https://yalantis-react-school-api.yalantis.com/api';

export const getItems = () => (dispatch: AppDispatchType): void => {
  axios
    .get(`${_apiBase}/task0/users`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(getUsers(response.data));
      } else {
        console.log('Response status:', response.status);
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
