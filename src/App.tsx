import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/index";
import { StyledNavLink, StyledNav, StyledList } from "./styled";

export const App: React.FC = () => (
  <HashRouter>
    <nav>
      <StyledNav>
        <StyledList>
          <StyledNavLink exact to="/zadania">
            Zadania
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink exact to="/autor">
            O autorze
          </StyledNavLink>
        </StyledList>
      </StyledNav>
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
