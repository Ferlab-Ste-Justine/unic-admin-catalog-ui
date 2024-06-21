import { useDispatch, useSelector } from 'react-redux';
import ButtonUsage from './components/ButtonUsage';
import { increment, selectCount } from './store/Counter/CounterSlice';
import { AppDispatch } from './store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector(selectCount);
  return (
    <>
      <h3 className="hello">Hello world {value}</h3>
      <ButtonUsage label="Login" onClick={() => dispatch(increment())} />
    </>
  );
};

export default App;
