import { useReducer } from 'react';
import PlayGround from './PlayGround';
import PlayGround2 from './PlayGround2';

const reducerAction = (_state, action) => {
  if (action.type === 'setState') {
    return action.newValue;
  }
  throw Error('Unknown action.');
};

function App() {
  const [curState, dispatch] = useReducer(reducerAction, 0);

  const useState = () => {
    const setState = (newValue: number) => {
      dispatch({ type: 'setState', newValue });
    };

    return [curState, setState];
  };

  const [number, setNumber] = useState();

  return (
    <div>
      <h1 className="test">hihi</h1>
      <h1>{number}</h1>
      <button onClick={() => setNumber(100)}></button>
      <PlayGround />
      <PlayGround2 />
    </div>
  );
}

export default App;
