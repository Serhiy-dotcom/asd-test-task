import "./App.css";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
