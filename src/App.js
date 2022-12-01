import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes/app.routes';

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {AppRoutes()}
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
