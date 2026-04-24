import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'; 
import Home from './Components/Home';
import Products from './Components/Products';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';

// import { Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Header />

      <main>
        {/* <BrowserRouter> */}

          <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/yourCart' element={<Cart />} />
          
          </Routes>

        {/* </BrowserRouter> */}

        
      </main>
    
    </>
  );
}

export default App;
