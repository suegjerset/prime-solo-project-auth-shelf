import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

//watcher saga
function* watcherSaga(){
    yield takeLatest('EDIT_ITEM', editItem);
};//end watcherSaga

//generators
function* editItem(action){
    console.log('------>in editItem', action.payload);
    try{
        const response = yield axios.put(`/api/shelf/${action.payload.id}`, {url: action.payload.url, description: action.payload.description} );
        // yield put({});
    }catch(err){
        console.log(err);
    };//end try
};//end editItem

export default watcherSaga;