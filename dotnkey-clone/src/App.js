import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
