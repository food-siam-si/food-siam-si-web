import { Button, Link, Paper, Stack, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Navigate } from 'react-router-dom';
import { Link as RRDLink } from 'react-router-dom';

import { useUser } from '../../context/userContext';
import useLoginForm from './useLoginForm';

const LoginPage = () => {
  const { methods, onSubmit } = useLoginForm();
  const { user } = useUser();

  if (user) return <Navigate to="/" />;

  return (
    <>
      <Typography variant="h4" color="primary">
        Login
      </Typography>
      <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,300px)' }}>
        <FormContainer formContext={methods} handleSubmit={onSubmit}>
          <Stack gap={2}>
            <TextFieldElement name="email" label="Email" required />
            <TextFieldElement name="password" label="Password" type="password" required />
            <Button type="submit" variant="contained" sx={{ alignSelf: 'center' }} fullWidth>
              SIGN IN
            </Button>
          </Stack>
        </FormContainer>
      </Paper>
      <Typography color="text.primary">
        Don't have an account yet?{' '}
        <Link to="/register" component={RRDLink}>
          Sign Up
        </Link>
      </Typography>
    </>
  );
};

export default LoginPage;
