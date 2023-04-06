import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes/app.routes';
// import useFormApis from './Components/Helper/form.hooks';
// import { useEffect } from 'react';


function App(props) {
  // const { createForm } = useFormApis();
  // useEffect(() => {
  //   createForm({
  //     name: "Form 3",
  //     description: "Desc",
  //     user: "6414d0bf2fdd39855faa410d"
  //   })
  // })
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
