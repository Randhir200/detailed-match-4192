import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product';
import AllRoutes from './routes/AllRoutes';
function App() {
  return (
    <div style={{position:"relative"}} className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
