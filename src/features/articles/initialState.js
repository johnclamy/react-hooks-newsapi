import FETCH_STATUS from '../../app/helper/fetchStatus';

const initialState = {
  articles: [],
  status: FETCH_STATUS.status[0],
  error: FETCH_STATUS.error,
};

export default initialState;
