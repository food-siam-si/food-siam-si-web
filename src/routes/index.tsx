import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTING_PROPS } from './constants';

const Routing = () => {
  return (
    <Routes>
      {ROUTING_PROPS.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
