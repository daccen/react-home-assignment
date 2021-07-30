import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import RegistrationPage from "./pages/RegistrationPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import BlogPage from "./pages/BlogPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";

import * as ROUTES from "./constants/routeConstants";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Route path={ROUTES.COURSES} component={CoursePage} exact />
          <Route path={ROUTES.COURSES_ID} component={CourseDetailPage} />
          <Route path={ROUTES.REGISTRATION} component={RegistrationPage} />
          <Route path={ROUTES.PHOTO_GALLERY} component={PhotoGalleryPage} />
          <Route path={ROUTES.BLOG} component={BlogPage} />
          <Route path={ROUTES.HELP} component={HelpPage} />
          <Route path={ROUTES.CONTACT_US} component={ContactUsPage} />
          <Route path={ROUTES.HOME} component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
