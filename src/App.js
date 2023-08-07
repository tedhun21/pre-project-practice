import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

const Button = styled.button`
  background-color: #60dafb;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  margin: 15px;

  box-shadow: 5px 3px 3px black;
  &:hover {
    background-color: #4b8796;
  }
  &:active {
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>0</div>
        <ButtonWrapper>
          <Button>+</Button>
          <Button>-</Button>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
