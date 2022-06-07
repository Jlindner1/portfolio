import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "react-dropdown/style.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Bio from "./pages/Bio";
import HomeContent from "./pages/HomeContent";
import Contact from "./pages/Contact";
import ClientProjects from "./pages/ClientProjects";
import ReactProjects from "./pages/ReactProjects";
import EducationalProjects from "./pages/EducationalProjects";
import PhpProjects from "./pages/PhpProjects";
import Resume from "./pages/Resume";
import StaticWebPages from "./pages/StaticWebPages";
import PersonalProjects from './pages/PersonalProjects';
import Footer from "./Footer";
import {ROUTE} from '../utils/Routes';

const Home = ({changeContent, page}) => {
  const [content, setContent] = useState(HomeContent());

  useEffect(() => {
    switch (page) {
      case ROUTE.home:
        setContent(HomeContent());
        break;
      case ROUTE.php:
        setContent(PhpProjects());
        break;
      case ROUTE.staticPages:
        setContent(StaticWebPages());
        break;
      case ROUTE.reactPages:
        setContent(ReactProjects());
        break;
      case ROUTE.educational:
        setContent(EducationalProjects());
        break;
      case ROUTE.personalProjects:
        setContent(PersonalProjects());
        break;
      case ROUTE.clientProjects:
        setContent(ClientProjects());
        break;
      case ROUTE.contact:
        setContent(Contact());
        break;
      case ROUTE.bio:
        setContent(Bio());
        break;
      case ROUTE.Resume:
        setContent(Resume());
        break
      default:
        setContent(HomeContent());
        break;
    }
  }, [page]);

  return (
    <div className="home">
      <Header/>
      <MainContent
        content={content}
        setContent={changeContent}
      />
      <Footer/>
    </div>
  );
}

export default Home;
