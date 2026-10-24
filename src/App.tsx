import './index.scss';
import { Button } from './components';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Components</h1>
      </header>
      <div className="app__body">
        <div>
          <p>THIS IS TO TEST THEME CHANGE</p>
          <Button>Primary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='text'>Text</Button>
          <Button asChild variant='text'><a href='https://google.com'>Google</a></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
