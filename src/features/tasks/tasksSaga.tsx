import { takeLatest, call, put, delay, select, takeEvery } from "redux-saga/effects";
import { 
    fetchExampleTasks, 
    fetchExampleTasksFailure, 
    fetchExampleTasksStart, 
    fetchExampleTasksSuccess, 
    selectTasks,  
} from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";
import { Task } from "./types";

function* fetchExampleTaskHandler(): Generator<any, void, Task[]> {
    try {
        yield put(fetchExampleTasksStart());
        yield delay(1000);
        const exampleTasks: Task[] = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksFailure("Ups, coś poszlo nie tak😢 Odśwież stronę i spróbuj jeszcze raz"));
    }
}

function* saveTasksInLocalStorageHandler(): Generator<any, void, Task[]> {
    const tasks: Task[] = yield select(selectTasks);
    
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTaskHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}