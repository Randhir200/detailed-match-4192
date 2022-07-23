import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AllRoutes from './routes/AllRoutes';
function App() {
  return (
    <div style={{position:"relative"}} className="App">
      <Signup /> 
      <Signin/>    
    </div>
  );
}

export default App;
