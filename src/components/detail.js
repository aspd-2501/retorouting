import { useParams } from "react-router-dom";
import Mascota from "./mascota";
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");

export default function Detail() {
  const [mascotas, setMascotas] = useState([]);
  const { mascotaId } = useParams();

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotas(data);
      });
  }, []);

  // Busca la mascota cuyo id coincida con mascotaId
  const mascota = mascotas.find(
    (mascota) => mascota.id === parseInt(mascotaId)
  );

  return (
    <div>
      {mascota ? (
        <div>
          <h1>{mascota.nombre}</h1>
          <Card.Img
            style={{ height: "25rem", width: "30rem" }}
            variant="top"
            src={mascota.foto}
          />
            <p>{mascota.raza}</p>
        </div>
      ) : (
        <p>No se encontró la mascota.</p>
      )}
    </div>
  );
}
