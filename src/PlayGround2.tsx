import { useState } from 'react';
import { styled } from 'styled-components';
import { produce } from 'immer';

const Button = styled.button<{ $fontSize?: number; $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
  font-size: ${(props) => props.$fontSize}px;
`;

const PlayGround2 = () => {
  const [data, setData] = useState({
    a: {
      b: {
        c: 1,
      },
    },
  });

  const handleClick = () => {
    console.log(
      produce((draft) => {
        draft.a.b.c = 100;
      })
    );
    // setData(
    //   produce((draft) => {
    //     draft.a.b.c = 100;
    //   })
    // );
    setData((baseState) => {
      console.log(baseState);
      return (baseState.a.b.c = 100);
    });
  };

  return (
    <div>
      <h1>p2입니다.</h1>
      <Button $fontSize={40}>Normal</Button>
      <Button onClick={handleClick}>onChange</Button>
      <h1>{data?.a?.b?.c}</h1>
    </div>
  );
};

export default PlayGround2;
