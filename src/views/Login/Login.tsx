import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one numeric digit')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
});

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, defaultValues },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'wer', password: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // call api with submitted data
  };

  return (
    <Grid
      alignContent="center"
      container
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <Grid item>
        <Box
          sx={{
            my: 8,
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
