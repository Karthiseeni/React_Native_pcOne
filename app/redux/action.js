export const MOBILE_NUMBER = 'MOBILE_NUMBER'

export const setMobileNumber = mobileNumber => dispatch => {
    dispatch({
        type: MOBILE_NUMBER,
        payload: mobileNumber
    });
}