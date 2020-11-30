import { call, put} from "redux-saga/effects";
import { receiveApiData} from '../actions';
import { fetchData } from "../api/list";

function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData,'Passing Data To API(action.payload)list.js API');//Umamaheswar is ths data to Pass InTo API (list.js API)
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}
export default getApiData;


