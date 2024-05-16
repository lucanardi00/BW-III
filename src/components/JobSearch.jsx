import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobSearch = () => {
  const params = useParams();
  const [allWork, setAllWork] = useState([]);
  const work = params.searchWork;

  console.log("all work", allWork);
  useEffect(() => {
    const fetchAllSearchWork = async () => {
      try {
        const response = await fetch(
          `https://strive-benchmark.herokuapp.com/api/jobs?search=${work}`
        );
        if (response.ok) {
          const data = await response.json();
          setAllWork(data);
        } else {
          console.log("error");
          throw new Error("Errore nella ricerca dei lavori 😥");
        }
      } catch (error) {
        console.log(
          "Errore nell'aggiornamento della ricerca dei lavori",
          error
        );
      }
    };
    fetchAllSearchWork();
  }, []);
  return <div>JobSearch</div>;
};

export default JobSearch;
