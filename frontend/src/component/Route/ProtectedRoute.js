import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';


// const ProtectedRoute = ({component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {!loading  && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (!isAuthenticated) {
//               return <Navigate to="/login" />;
//             }

//             // if (isAdmin === true && user.role !== "admin") {
//             //   return <Navigate to="/login" />;
//             // }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

const ProtectedRoute = ({ children, isAdmin }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    return (
        <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> : isAdmin ? user.role !== "admin" ? <Navigate to="/login" /> : children : children
            )}
        </>
    );
};

export default ProtectedRoute;