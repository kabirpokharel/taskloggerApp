// import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../constants/actionConstant';
// import axiosInstance from '../../helpers/axiosInstance';

// export default (form) => async (dispatch) => {
//   dispatch({
//     type: LOGIN_LOADING,
//   });
//   const result = await axiosInstance.post(`/login`, form).catch((err) => {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: err.response.data.data?.message || 'Something went wrong, try again',
//     });
//   });
//   if (result?.data) {
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: result.data,
//     });
//   }
// };
