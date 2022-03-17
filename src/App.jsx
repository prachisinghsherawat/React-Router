import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { ProductDetails} from "./Components/ProductDetails";
import { Empty} from "./Components/Empty"

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
       < Route path="/" />
       < Route path="/products" element= {<Products/>} />
       < Route path="/products/:id" element= {<ProductDetails/>}/>
       < Route path= "*" element={<Empty/>}/>
      </Routes>

    </div>
  );
}

export default App;
