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
    const parseTitle = (title) => title.replaceAll(' ', '').toLowerCase()
    const PROYECT = ProyectList.proyects.find(
      (item) => parseTitle(item.title).includes(proyectName)
    );
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(PROYECT);
      }, 2000)
      
    })
    .then(setProyect)
    .finally( () => setIsLoading(false));
  }, [proyectName]);

  return ( isLoading ? <Loader /> : <ProyectsDetails {...proyect} />
    
  );
}
