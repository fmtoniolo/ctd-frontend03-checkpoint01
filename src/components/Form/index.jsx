import styles from "./styles.module.css";

const Form = () => {
  return (
    <div className={styles.formBox}>
      <p className={styles.boxTitle}>Cadastrar Tarefa</p>

      <form className={styles.form}>
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
