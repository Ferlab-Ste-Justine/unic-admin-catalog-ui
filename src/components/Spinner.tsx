import { FunctionComponent } from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

import style from './Spinner.module.css';

type SpinnerProps = CircularProgressProps & {
  className?: string;
};

const defaultClassName = style.spinner;

const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  const { className = defaultClassName, size } = props;
  return (
    <div className={className}>
      <CircularProgress size={size} />
    </div>
  );
};

export default Spinner;
