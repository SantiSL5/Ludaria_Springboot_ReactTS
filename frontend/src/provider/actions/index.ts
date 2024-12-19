import { AppDispatch } from '../store';

export const saveUser = (user: string) => {
  return (dispatch: AppDispatch) => {
    console.log(user);

    dispatch({
      type: 'SAVE_USER',
      payload: user,
    });
  };
};