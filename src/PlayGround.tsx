import { css } from '@emotion/react';

const styles = css({
  color: 'red',
});
const PlayGround = () => {
  return (
    <>
      <h1>p1입니다.</h1>
      <button css={styles}>Click me</button>
    </>
  );
};

export default PlayGround;
