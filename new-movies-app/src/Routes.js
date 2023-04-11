import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import SubmissionForm from "./SubmissionForm";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Movies />} />
      <Route exact path="/submission" element={<SubmissionForm />} />
    </Routes>
  );
}

export default AppRoutes;
