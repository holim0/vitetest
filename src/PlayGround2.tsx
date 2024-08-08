import { styled } from 'styled-components';

const Button = styled.button<{ $fontSize?: number; $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
  font-size: ${(props) => props.$fontSize}px;
`;

const PlayGround2 = () => {
  return (
    <div>
      <h1>p2입니다.</h1>
      <Button $fontSize={40}>Normal</Button>
    </div>
  );
};

export default PlayGround2;
