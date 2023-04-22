import './App.css';
import Footer from '../src/Components/Footer/index';
import Navbar from '../src/Components/Navbar/index';
import NavigationRoutes from './Routes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavigationRoutes />
      <Footer />
    </div>
  );
}

export default App;
