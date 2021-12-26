import { useDispatch } from 'react-redux';
import { add, remove } from './actions/counterAction';
import './App.css';
import Counter from './Counter';

function App() {
  const dispatch = useDispatch()

  function handelAdd()
  {
     dispatch(add(2))
  }
  return (
    <div className="App">
      <button onClick={handelAdd}>Add</button>
      <button onClick={() => dispatch(remove(1))}>Remove</button>
      <Counter/>
    </div>
  );
}

export default App;
