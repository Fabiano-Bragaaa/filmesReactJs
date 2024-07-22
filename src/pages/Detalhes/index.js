import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import "./styles.css";

export function Detalhes() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  function salvarFilme() {
    const filmeList = localStorage.getItem("@filmes");

    let saveFilme = JSON.parse(filmeList) || [];

    const hasFilme = saveFilme.some(
      (filmeExist) => filmeExist.id === details.id
    );

    if (hasFilme) {
      toast.warn("filme já está na lista");
      return;
    }

    saveFilme.push(details);
    localStorage.setItem("@filmes", JSON.stringify(saveFilme));
    toast.success("filme salvo!");
  }

  useEffect(() => {
    async function loadingDetais() {
      const response = await api
        .get(`movie/${id}`, {
          params: {
            api_key: "f662cbc19721ae47aa6569b03517d367",
            laguage: "pt-BR",
          },
        })
        .then((r) => {
          setDetails(r.data);
          setLoading(false);
        })
        .catch(() => {
          navigation("/", { replace: true });
          return;
        });
    }

    loadingDetais();
  }, [navigation, id]);

  if (loading) {
    return (
      <div className="details">
        <h2>Carregando detalhes ...</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <h1>{details.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        alt="filme detalhes"
      />

      <h3>Sinopse</h3>
      <span> {details.overview} </span>

      <strong>Avaliação: {details.vote_average} / 10</strong>

      <div className="buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${details.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
