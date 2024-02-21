import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import  Auth from './components/Auth'

export default function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}
