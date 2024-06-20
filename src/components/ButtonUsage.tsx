import React from 'react';
import Button from '@mui/material/Button';

interface IButtonUsageProps {
  label: string;
  onClick: () => void;
}

const ButtonUsage = ({
  label,
  onClick,
}: IButtonUsageProps): React.ReactElement => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      size="small"
    >
      {label}
    </Button>
  );
};

export default ButtonUsage;
