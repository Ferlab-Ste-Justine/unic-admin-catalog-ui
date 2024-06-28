import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { LoginApi } from '../../services/Login/login';
import { REDIRECT_URI_KEY } from '../../utils/constants';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one numeric digit')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, defaultValues },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);

  const onSubmit: SubmitHandler<FormData> = async (values: FormData) => {
    const { error } = await LoginApi.login(values.email, values.password);
    if (error) setErrorMessage(error.message);
    else {
      const goToUrl = `${window.location.origin}${query.get(REDIRECT_URI_KEY)}`;
      navigate(goToUrl);
    }
  };

  return (
    <Grid alignContent="center" container justifyContent="center" sx={{ height: '100vh' }}>
      <Grid item>
        <Box
          sx={{
            mt: 0,
            mb: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'white',
              border: '0.5px solid #01617E',
            }}
          >
            <img src="ferlab-favicon.png" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2, mt: 4 }}>
                {errorMessage}
              </Alert>
            )}
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register('email')}
              defaultValue={defaultValues?.email || ''}
              error={!!errors.email && touchedFields.email}
              helperText={errors.email?.message}
              autoFocus
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              defaultValue={defaultValues?.password || ''}
              {...register('password')}
              error={!!errors.password && touchedFields.password}
              helperText={errors.password?.message}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
