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
} from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

      <Body />

      <Footer />
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/member' element={<Home />} />
        <Route path='/menu' element={<Home />} />
        <Route path='/news' element={<Home />} />
        <Route path='/order' element={<Home />} />
      </Router>
    </div>
  );
}

export default App;
