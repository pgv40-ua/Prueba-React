import { useState } from "react";
import "./Prueba.css";

export function Prueba() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="spurs">
      <h1>Likes {likes}</h1>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        Dar Like
      </button>
      <button
        onClick={() => {
          setLikes(likes - likes);
        }}
      >
        Restablecer
      </button>
    </div>
  );
}
