import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const styles = css({
  color: 'red',
});

const wrapper = css({
  margin: '20px 20px',
});

const PlayGround3 = () => {
  const [number, _setNumber] = useState(() => 1000);
  console.log('render');

  return (
    <div css={wrapper}>
      <h1>{number}</h1>
      <h1>p3입니다.</h1>3<button css={styles}>Click me</button>
    </div>
  );
};

export default PlayGround3;
