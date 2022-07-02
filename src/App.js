import { useEffect, useRef, useState } from "react";
import defaultAxios from "axios";
import "./App.css";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => setState({ ...state, loading: false, data }))
      .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);
  return { ...state, refetch };
};

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(data);
  return (
    <div className="App">
      <button onClick={refetch}>Refetch</button>
      <h3>{loading ? "Loading..." : "Finished"}</h3>
      {data && (
        <ul>
          {data.data.data.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
