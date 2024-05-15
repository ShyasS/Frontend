
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const shippingInfo = window.localStorage.getItem('shippingInfo');

    
    if (shippingInfo !== null) {
        return children;
    } else {
        return <Navigate to="/" />;
    }

   
}
