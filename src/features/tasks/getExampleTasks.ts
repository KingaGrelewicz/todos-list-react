import axios from "axios";
import { Task } from "./types";

export const getExampleTasks = (): Promise<Task[]> =>
  axios
    .get<Task[]>("/todos-list-react/exampleTasks.json")
    .then((response) => response.data);
