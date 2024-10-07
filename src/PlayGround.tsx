import { css } from '@emotion/react';
import { useReducer } from 'react';

const reducerAction = (state, action) => {
  if (action.type === 'setState') {
    return action.newValue;
  }
  throw Error('Unknown action.');
};

const styles = css({
  color: 'red',
});

const wrapper = css({
  margin: '20px 20px',
});

const PlayGround = () => {
  const [curState, dispatch] = useReducer(reducerAction, 0);

  const useState = () => {
    const setState = (newValue: number) => {
      dispatch({ type: 'setState', newValue });
    };

    return [curState, setState];
  };

  const [number, setNumber] = useState();

  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div css={wrapper}>
      <h1>p1입니다.</h1>
      <h1>{number}</h1>
      <button onClick={increase}>버튼입니다.</button>
      <button css={styles}>Click me</button>
    </div>
  );
};

export default PlayGround;
