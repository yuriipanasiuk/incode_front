import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';

import Home from '../pages/Home/Home';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAppDispatch } from '../hooks/authHook';
import { currentUser } from '../redux/operations';
import { useCustomSelector } from '../redux/selectors';
import { NotFound } from './NotFound/NotFound';

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
          <Route path="/" element={<RestrictedRoute component={Register} redirectTo="/home" />} />
          <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  );
}

export default App;
