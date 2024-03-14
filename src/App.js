import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <>

    <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/Cart' exact element={<Cart />} />
      <Route path='/Contact' exact element={<Contact />} />
      <Route path='/About' exact element={<About />} />
          
           
    </Routes>
    </Provider>
    </>
    
  );
}

export default App;
