import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../screens/login";
import Success from "../screens/success";
import App from "../App";
import About from "../screens/about";
import DataTable from "./datatable";
import EditionScroller from "./editionScroller";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="success" element={<Success />} />
      <Route path="about" element={<About />} />
      <Route path="datatable" element={<DataTable />} />
      <Route path="editionScroller" element={<EditionScroller />} />
    </>
  )
);

export default router;
