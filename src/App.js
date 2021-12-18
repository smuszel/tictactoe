import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { GameGrid } from './GameGrid/GameGrid';
import { GamePanel } from './GamePanel/GamePanel';

const App = () => {
  return (
    <Provider store={store}>
      <GamePanel></GamePanel>
      <GameGrid />
    </Provider>
  );
};

export default App;
