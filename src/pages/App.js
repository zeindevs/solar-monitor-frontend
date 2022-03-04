import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "../store/store";
import "./App.css";
import Device from "./dashboard/device/Device";
import DeviceMonitor from "./dashboard/device/DeviceMonitor";
import Home from "./dashboard/Home";
import Users from "./dashboard/users/Users";
import Login from "./form/Login";
import Register from "./form/Register";

function App() {
  const { auth } = store.getState((state) => state.auth);

  function PrivateRoute({ children }) {
    return auth?.isLoggedIn ? children : <Navigate to="/login" />;
  }

  function HashAuth({ children }) {
    return !auth?.isLoggedIn ? children : <Navigate to="/" />;
  }

  const RootRouter = () => {
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <HashAuth>
              <Login />
            </HashAuth>
          }
        />
        <Route
          path="/register"
          element={
            <HashAuth>
              <Register />
            </HashAuth>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/devices"
          element={
            <PrivateRoute>
              <Device />
            </PrivateRoute>
          }
        />
        <Route
          path="/devices/:id"
          element={
            <PrivateRoute>
              <DeviceMonitor />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
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
