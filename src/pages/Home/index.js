import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingFilmes() {
      const response = await api.get("movie/now_playing?", {
        params: {
          api_key: "f662cbc19721ae47aa6569b03517d367",
          laguage: "PT-BR",
          page: 1,
        },
      });

      setLoading(false);
      setFilmes(response.data.results.slice(0, 10));
    }

    loadingFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes ...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="listFilmes">
        {filmes.map((r) => {
          return (
            <article>
              <strong> {r.title} </strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${r.poster_path}`}
                alt="filmeTitle"
              />
              <Link to={`/detalhes/${r.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
