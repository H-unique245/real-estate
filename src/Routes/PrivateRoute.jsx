import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
  const { user } = useSelector((store) => store.auth);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute
