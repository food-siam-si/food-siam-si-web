import { Button, Link, Paper, Stack, Typography } from '@mui/material';
import { FormContainer, RadioButtonGroup, TextFieldElement } from 'react-hook-form-mui';

import { UserType } from '../../api/dto';
import useSignUpForm from './useSignUpForm';

const SignUpPage = () => {
  const { onSubmit, methods } = useSignUpForm();

  return (
    <>
      <Typography variant="h4" color="primary">
        Register
      </Typography>
      <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,350px)' }}>
        <FormContainer formContext={methods} handleSubmit={onSubmit}>
          <Stack gap={2}>
            <RadioButtonGroup
              label="Account Type"
              name="userType"
              options={[
                {
                  id: UserType.Customer,
                  label: 'Customer',
                },
                {
                  id: UserType.Owner,
                  label: 'Restaurant Owner',
                },
              ]}
              row
            />
            <TextFieldElement name="email" label="Email" required />
            <TextFieldElement name="username" label="Username" required />
            <TextFieldElement name="password" label="Password" required type="password" />
            <TextFieldElement name="confirmPassword" label="Confirm Password" required type="password" />
            <Button type="submit" variant="contained" sx={{ alignSelf: 'center' }} fullWidth>
              Sign Up
            </Button>
          </Stack>
        </FormContainer>
      </Paper>
      <Typography>
        Already have an account? <Link href="/login">Sign In</Link>
      </Typography>
    </>
  );
};

export default SignUpPage;
