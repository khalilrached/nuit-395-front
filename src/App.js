// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout";
import NotFound from "./components/404/404";
import PowerBIDashboards from "./components/PowerBIDashboards/PowerBIDashboards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div>Loading..</div>} /> */}
        <Route
          path=""
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route
            index={true}
            element={
              <div>
                <PowerBIDashboards />
              </div>
            }
          />
        </Route>

        <Route
          path="404"
          element={
            true ? (
              <MainLayout>
                <NotFound />
              </MainLayout>
            ) : (
              <NotFound />
            )
          }
        />

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
