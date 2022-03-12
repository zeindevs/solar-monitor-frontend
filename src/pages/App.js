import { connect } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import store from "../store/store";
import "./App.css";
import Device from "./dashboard/device/Device";
import DeviceMonitor from "./dashboard/device/DeviceMonitor";
import Devices from "./dashboard/device/Devices";
import Home from "./dashboard/Home";
// import Users from "./dashboard/users/Users";
import Login from "./form/Login";
// import Register from "./form/Register";

function App() {
  const { auth } = store.getState((state) => state.auth);

  function PrivateRoute({ children }) {
    return auth?.isLoggedIn ? children : <Navigate to="/login" />;
  }

  function PrivateOutlet() {
    return auth?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  }

  function HashAuth({ children }) {
    return !auth?.isLoggedIn ? children : <Navigate to="/" />;
  }

  const RootRouter = () => {
    return (
      <Routes>
        <Route
          path="login"
          element={
            <HashAuth>
              <Login />
            </HashAuth>
          }
        />
        {/* <Route
          path="register"
          element={
            <HashAuth>
              <Register />
            </HashAuth>
          }
        /> */}
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="" element={<Home />} />
          <Route
            path="devices"
            element={
              <PrivateRoute>
                <Devices />
              </PrivateRoute>
            }
          >
            <Route path="" element={<Device />} />
            <Route path=":id" element={<DeviceMonitor />} />
          </Route>
        </Route>
        {/* <Route
          path="users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  const auth = state.auth;
  return {
    auth,
  };
}

export default connect(mapStateToProps)(App);
