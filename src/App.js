import {
  Header,
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


function App() {
  return (

    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/member' element={<Member />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/news' element={<News />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
