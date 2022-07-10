import AboutMe from "../../components/aboutMe/AboutMe";
import Header from "../../components/header/Header";
import Proyects from "../../components/proyects/Proyects";
import Knowledges from "../../components/skills/Knowledges";
import Networks from '../../components/networks/Networks'

export default function Index ()  {
  return (
    <>
      <Header />
      <AboutMe />
      <Proyects />
      <Knowledges />
      <Networks />
    </>
  );
};
