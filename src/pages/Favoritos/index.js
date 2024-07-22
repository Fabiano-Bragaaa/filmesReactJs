import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Favoritos() {
  const [save, setSave] = useState([]);

  function handleDelete(id) {
    const filterFilme = save.filter((r) => {
      return r.id !== id;
    });

    setSave(filterFilme);
    localStorage.setItem("@filmes", JSON.stringify(filterFilme));
    toast.success("Filme removido com sucesso!");
  }

  useEffect(() => {
    const myList = localStorage.getItem("@filmes");
    setSave(JSON.parse(myList) || []);
  }, []);

  return (
    <div className="myFilmes">
      {save.length === 0 ? (
        <h1>Opa, sem filmes favoritados</h1>
      ) : (
        <h1>Meus Filmes</h1>
      )}
      <ul>
        {save.map((r) => {
          return (
            <li key={r.id}>
              <span>{r.title}</span>
              <div>
                <Link to={`/detalhes/${r.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(r.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
