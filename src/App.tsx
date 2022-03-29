import { Provider } from 'react-redux';
import Navigator from './Navigator';
import { store } from './store/ReduxStore';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
