import { useEffect } from "react";
import { useLista } from "../../context";
import styles from "./styles.module.css";

const mockup = [
  {
    id: 0,
    title: "Tarefa 1",
    categoria: "Categoria 1",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  },
  {
    id: 1,
    title: "Tarefa 2",
    categoria: "Categoria 2",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  },
  {
    id: 2,
    title: "Tarefa 3",
    categoria: "Categoria 3",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  }
];

const Card = () => {
  const { lista, setLista } = useLista();

  const deleteTask = id =>  {
    setLista(curr => curr.filter(item => item.id !== id))
  };

  const editTask = () => {
    return console.log("edit");
  };

  useEffect(() => {
    setLista(mockup);
  }, []);

  return (
    <div>
      <h1 className={styles.cardsContainerTitle}>Minhas Tarefas</h1>
      <ul>
        {lista.map(({id, title, categoria, data, descricao}, index) => {
          return (
            <li key={index} className={styles.cardBox}>
              <div className={styles.cardBoxLeft}>
                <h2>{title}</h2>
                <h4>{categoria}</h4>
                <p>{descricao}</p>
              </div>
              <div className={styles.cardBoxRight}>
                <h4>{data}</h4>
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteTask(id)}
                >
                  Delete
                </button>
                <button className={styles.editBtn} onClick={editTask}>
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
