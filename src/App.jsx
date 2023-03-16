import Card from "./components/Card";
import Form from "./components/Form";
import "./app.css";
import { ListaProvider } from "./context";

const App = () => {
  return (
    <ListaProvider>
      <div className="form-container">
        <Form />
      </div>
      <div className="card-container">
        <Card />
      </div>
    </ListaProvider>
  );
};

export default App;
