import api from '../../services';
import authSlice from '../slices/authSlice';

export const fetchSignup = (data) => async (dispatch) => {
  dispatch(authSlice.actions.fetching);
  try {
    dispatch(authSlice.actions.fetchSuccess('data'));
  } catch (e) {
    dispatch(authSlice.actions.fetchFailure(e.message));
  }
};
