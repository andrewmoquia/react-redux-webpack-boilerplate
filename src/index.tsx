import ReactDOM from 'react-dom';
import RegisterServiceWorker from './swRegistraion';

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById('root')
);

RegisterServiceWorker();
