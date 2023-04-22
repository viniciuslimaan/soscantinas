import { BrowserRouter, Routes as AllRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route path="/" element={<Home />} />
      </AllRoutes>
    </BrowserRouter>
  );
}
