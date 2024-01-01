import { takeLatest, call, put, delay, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";

function* fetchExampleTaskHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield put(console.error("ups, coś poszło nie tak"));
    }
}

function* saveTasksInLocalStorageHandler() {
    const { tasks } = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTaskHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}