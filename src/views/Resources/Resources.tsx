import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from '../../store/Counter/CounterSlice';
import ButtonUsage from '../../components/ButtonUsage';
import { LoginApi } from '../../services/Login/login';

const Resources = (): React.ReactElement => {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

  return (
    <>
      <h3>Resources {value}</h3>
      <ButtonUsage label="Login" onClick={() => dispatch(increment())} />
      <ButtonUsage label="analysts" onClick={() => LoginApi.analysts()} />
      <ButtonUsage label="test" onClick={() => LoginApi.test()} />
      <ButtonUsage label="logout" onClick={() => LoginApi.logout()} />
    </>
  );
};

export default Resources;
