import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'; 
import Home from './Components/Home';
import Products from './Components/Products';
import SignIn from './Components/SignIn';

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
          
          </Routes>

        {/* </BrowserRouter> */}

        
      </main>
    
    </>
  );
}

export default App;
