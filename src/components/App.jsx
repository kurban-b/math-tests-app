import { Switch, Route, Redirect } from "react-router-dom";
import StartForm from "./StartForm";
import Main from "./Main";
import Header from "./Header";
import { useSelector } from "react-redux";
import ResultsBlock from "./ResultsBlock";

function App() {
  const name = useSelector((state) => state.name);

  if (name.length === 0) {
    return (
      <div className="container">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path={"/"} exact>
              <StartForm />
            </Route>
            <Redirect to={"/"} />
          </Switch>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path={"/"} exact>
            <Main />
          </Route>
          <Route path={"/result"} exact>
            <ResultsBlock />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
