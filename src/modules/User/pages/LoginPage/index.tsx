import { Button, Link, Paper, Stack, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

const LoginPage = () => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Login
      </Typography>
      <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,300px)' }}>
        <FormContainer>
          <Stack gap={2}>
            <TextFieldElement name="username" label="Username" required />
            <TextFieldElement name="password" label="Password" required />
            <Button type="submit" variant="contained" sx={{ alignSelf: 'center' }} fullWidth>
              SIGN IN
            </Button>
          </Stack>
        </FormContainer>
      </Paper>
      <Typography>
        Don't have an account yet? <Link href="/register">Sign Up</Link>
      </Typography>
    </>
  );
};

export default LoginPage;
