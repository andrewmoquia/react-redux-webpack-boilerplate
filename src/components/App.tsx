import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { increment, decrement } from '../redux/reducers/counter';
import '../../sass/index.scss';

export default function App() {
   //Get count value in the redux store
   const count = useSelector((state: RootState) => state.counter.value);

   //Access function to increment or decrement count value in the store
   const dispatch = useDispatch();

   return (
      <div className="container">
         <h1>Hello World!</h1>
         <p>{count}</p>
         <button onClick={() => dispatch(increment())}>Increment Value</button>
         <button onClick={() => dispatch(decrement())}>Decrement Value</button>
      </div>
   );
}
