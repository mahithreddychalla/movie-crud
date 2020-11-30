import { takeLatest } from 'redux-saga/effects';
import getApiData from './list';
import { DATA_INIT} from '../constants';

export default function* mySaga() {
    yield takeLatest(DATA_INIT,getApiData);

    }