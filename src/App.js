import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { GameGrid } from './GameGrid/GameGrid';

const App = () => {
  return (
    <Provider store={store}>
      <GameGrid />
    </Provider>
  );
};

export default App;
