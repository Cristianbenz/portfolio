import AboutMe from "../../components/aboutMe/AboutMe";
import Header from "../../components/header/Header";
import Proyects from "../../components/proyects/Proyects";
import Skills from '../../components/skills/Skills'
import Networks from '../../components/networks/Networks'

export default function Index ()  {
  return (
    <>
      <Header />
      <AboutMe />
      <Proyects />
      <Skills />
      <Networks />

    </>
  );
};
