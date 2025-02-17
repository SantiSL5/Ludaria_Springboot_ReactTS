import { AppDispatch } from '../store';

export const saveUser = (user: string) => {
  return (dispatch: AppDispatch) => {

    dispatch({
      type: 'SAVE_USER',
      payload: user,
    });
  };
};