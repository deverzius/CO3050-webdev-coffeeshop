import {
  Body,
  Footer,
  Admin,
  Contact,
  Home,
  Member,
  Menu,
  News,
  Order
} from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useAppContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import './App.css'
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { Defaultlayout } from './pages/DefaultLayout';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/admin/*' element={<Admin />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/home' element={<Home />} />
            <Route path='/member' element={<Member />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/news' element={<News />} />
            <Route path='/order' element={<Order />} />
            <Route path='/shop' element={<Defaultlayout />} />
          </Routes>
        </Body>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
