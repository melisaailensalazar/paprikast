import "./App.css";
import Router from "./router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/useContext";

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
