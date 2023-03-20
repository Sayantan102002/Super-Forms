import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes/app.routes';


function App(props) {
  console.log(process.env.REACT_APP_mode);
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {AppRoutes()}
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
