import './App.css';
/*import Movies from './components/Movies';
import Banner from './components/Banner';
import Details from './components/Details'; */
//Above imports are commented as we will use HomePage and DetailsPage import now --> Modified the code
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage'; 
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
        <DetailsPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
