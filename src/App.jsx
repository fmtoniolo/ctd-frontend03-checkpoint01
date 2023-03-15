import Card from "./components/Card";
import Form from "./components/Form";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="form-container">
        <Form />
      </div>
      <div className="card-container">
        <Card />
      </div>
    </>
  );
};

export default App;
