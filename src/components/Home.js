import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Header from "./Header";
import NavList from "./NavList";
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
  const [Content, setContent] = useState(HomeContent);

  useEffect(() => {
    // switch (page) {
    //   case ROUTE.home:
    //     setContent(HomeContent);
    //     break;
    //   case ROUTE.php:
    //     setContent(PhpProjects);
    //     break;
    //   case ROUTE.staticPages:
    //     setContent(StaticWebPages);
    //     break;
    //   case ROUTE.reactPages:
    //     setContent(ReactProjects);
    //     break;
    //   case ROUTE.educational:
    //     setContent(EducationalProjects);
    //     break;
    //   case ROUTE.personalProjects:
    //     setContent(PersonalProjects);
    //     break;
    //   case ROUTE.clientProjects:
    //     setContent(ClientProjects);
    //     break;
    //   case ROUTE.contact:
    //     setContent(Contact);
    //     break;
    //   case ROUTE.bio:
    //     setContent(Bio);
    //     break;
    //   case ROUTE.Resume:
    //     setContent(Resume);
    //     break
    //   default:
    //     setContent(HomeContent);
    //     break;
    // }
  }, [page]);

  function displayComponent(page) {
    switch (page) {
      case ROUTE.home:
        return <HomeContent/>;
      case ROUTE.php:
        return <PhpProjects/>;
      case ROUTE.staticPages:
        return <StaticWebPages/>;
      case ROUTE.reactPages:
        return <ReactProjects/>;
      case ROUTE.educational:
        return <EducationalProjects/>;
      case ROUTE.personalProjects:
        return <PersonalProjects/>;
      case ROUTE.clientProjects:
        return <ClientProjects/>;
      case ROUTE.contact:
        return <Contact/>;
      case ROUTE.bio:
        return <Bio/>;
      case ROUTE.Resume:
        return <Resume/>;
      default:
        return <HomeContent/>;
    }
  }

  return (
    <div className="home">
      <Header/>
      <NavList
        setContent={changeContent}
      />
      {displayComponent(page)}
      <Footer/>
    </div>
  );
}

export default Home;
