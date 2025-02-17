export const saveUser = (title: any) =>
    (dispatch: any) => {

        dispatch({
            type: 'SAVE_USER',
            payload: title
        })
    }
