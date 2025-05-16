
import Card from "./components/Card";

function App() {
  let name = ["vivo", "Samsung", "Apple", "Nokia"];
  let Price = ["12000", "50000", "100000", "20000"];

  return (
    <>
    <Card name={name} Price={Price} />
    </>
  );
}

export default App;
