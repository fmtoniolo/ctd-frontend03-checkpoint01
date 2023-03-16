import React, { useRef } from "react";
import { useLista } from "../../context";
import getFormData from "../../utils/getFormData";
import styles from "./styles.module.css";

const Form = () => {
  const form = useRef(null);
  const { lista, setLista } = useLista();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = getFormData(form);
    setLista((curr) => [...curr, formData]);

    form.current?.reset();
  }

  return (
    <div className={styles.formBox}>
      <p className={styles.boxTitle}>Cadastrar Tarefa</p>

      <form className={styles.form} onSubmit={handleSubmit} ref={form}>
        <input name="id" value={lista.length} onChange={() => console.log(lista.length)} hidden />
        <input type="text" name="title" placeholder="Título" />
        <select name="categoria">
          <option value="">Categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="lazer">Lazer</option>
          <option value="prioridade">Prioridade</option>
          <option value="outros">Outros</option>
        </select>

        <input type="date" name="data" placeholder="Data" />

        <textarea placeholder="Descrição" name="descricao" />

        <button className={styles.button} type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Form;
