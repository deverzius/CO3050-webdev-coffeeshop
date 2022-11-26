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
import { publicRoutes } from './routes';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Body>
          <Routes>
            {
              publicRoutes.map((routes, id) => {
                const Page = routes.component;
                const Layout = routes.layout ? routes.layout : Fragment;
                return (
                  <Route 
                    path={routes.path} 
                    element={
                      <Layout>
                        <Page/>
                      </Layout>
                    }

                  />
                )})
            }
          </Routes>
        </Body>
      </Router>
    </div>
  );
}

export default App;
