import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home/Home';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { RestrictedRegisterRoute } from './RestricterRegisterRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<PrivateRoute component={Home} redirectTo="/login" />} />
        <Route
          path="/"
          element={<RestrictedRegisterRoute component={Register} redirectTo="/login" />}
        />
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/home" />} />
      </Routes>
    </>
  );
}

export default App;
