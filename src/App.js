import { Fragment } from 'react';
import Counter from './components/Counter';

export function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}
