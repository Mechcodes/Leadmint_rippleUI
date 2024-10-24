import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Analytics from "./pages/Analytics.jsx";
import Sidebar from "./pages/SideBar.jsx";
import Notification from "./pages/Notifications.jsx";
import Users from "./pages/Users.jsx";
import Transactions from "./pages/Tansactions.jsx";


const LayoutWithSidebar = ({ children }) => (
  <div className="flex flex-row min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1">{children}</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />


        <Route
          path="/home"
          element={
            <LayoutWithSidebar>
              <Home />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/analytics"
          element={
            <LayoutWithSidebar>
              <Analytics />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/notifications"
          element={
            <LayoutWithSidebar>
              <Notification />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/users"
          element={
            <LayoutWithSidebar>
              <Users />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/transactions"
          element={
            <LayoutWithSidebar>
              <Transactions />
            </LayoutWithSidebar>
          }
        />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
