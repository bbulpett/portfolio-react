// import ReactDOM from 'react-dom';
import { render } from 'react-static-generator';
import routes from './routes';

import './theme/globalStyle';

render(
  routes, 
  document.getElementById('root')
);
