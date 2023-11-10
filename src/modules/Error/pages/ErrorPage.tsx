import { Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  return (
    <Paper sx={{ m: 2, p: 2, textAlign: 'center' }}>
      <Typography variant="h5" color="primary">
        There's something wrong
      </Typography>
      <img src="./siamsi.svg" style={{ width: '100px', height: '100px', margin: '20px' }} />
      <Typography variant="h4" color="primary">
        {location.pathname.slice(1)}
      </Typography>
    </Paper>
  );
};

export default ErrorPage;
