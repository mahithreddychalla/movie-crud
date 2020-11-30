import { DATA_INIT, DATA_LOADED,INDATA_LOADED} from '../constants';
export const requestApiData = () => ({ type: DATA_INIT});
export const receiveApiData = data => ({ type: DATA_LOADED, data });
export const reciveInputData = payload=>({ type: INDATA_LOADED, payload});