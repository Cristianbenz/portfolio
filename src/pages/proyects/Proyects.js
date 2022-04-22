import ProyectList from "../../assets/proyects.json";
import ProyectsDetails from "../../components/proyectsDetails/proyectsDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

export default function Proyects() {
  const [isLoading, setIsLoading] = useState(true)
  const [proyect, setProyect] = useState({});
  const { proyectName } = useParams();
  useEffect(() => {
    setIsLoading(true)
    new Promise((resolve) => {
      const PROYECT = ProyectList.proyects.find(
        (item) => item.title.replaceAll(' ', '').toLowerCase() === proyectName
      );
      resolve(PROYECT);
    })
    .then((response) => setProyect(response))
    .finally( () => setIsLoading(false));
  }, []);

  return ( isLoading ? <Loader /> : <ProyectsDetails images={proyect.images} title={proyect.title} description={proyect.description} github={proyect.github} webLink={proyect.weblink}
  />
    
  );
}
