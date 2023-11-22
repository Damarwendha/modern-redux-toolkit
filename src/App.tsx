import { FC } from 'react';
import { Provider } from 'react-redux';
import UserSliceKonsumer from './features/users/UserSliceKonsumer';
import store from './store';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <Provider store={store}>
      <UserSliceKonsumer />
    </Provider>
  );
};
