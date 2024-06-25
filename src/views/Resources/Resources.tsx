import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from '../../store/Counter/CounterSlice';
import ButtonUsage from '../../components/ButtonUsage';

const Resources = (): React.ReactElement => {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

  return (
    <>
      <h3>Resources {value}</h3>
      <ButtonUsage label="Login" onClick={() => dispatch(increment())} />
    </>
  );
};

export default Resources;
