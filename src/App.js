import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, StyledList } from "./styled";


export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <StyledList>
          <StyledNavLink exact to="/zadania">Zadania</StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink exact to="/autor">O autorze</StyledNavLink>
        </StyledList>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);