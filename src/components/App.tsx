import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { useEffect } from 'react';

import Home from '../pages/Home/Home';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { RestrictedRegisterRoute } from './RestricterRegisterRoute';
import { useAppDispatch } from '../hooks/authHook';
import { currentUser } from '../redux/operations';
import { useCustomSelector } from '../redux/selectors';

function App() {
  const { getIsRefreshing: isRefreshing, getToken: token } = useCustomSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);

  return (
    !isRefreshing && (
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
    )
  );
}

export default App;
