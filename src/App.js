import './App.css';
import Footer from '../src/Components/Footer/index';
import Navbar from '../src/Components/Navbar/index';
import NavigationRoutes from './Routes';
import HomePage from './Pages/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NavigationRoutes /> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
