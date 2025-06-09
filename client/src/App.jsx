
import Home from './components/home/Home';
import { Route,Routes } from 'react-router-dom';
import Electronics from './components/mainsection/electronics/Electronics';
import Jwellery from './components/mainsection/jwellery/Jwellery';
import PageNotFound from './components/pagenotfound/PageNotFound';
import MensCloths from './components/mainsection/mensclothing/MensCloths';
import WomenCloth from './components/mainsection/womensclothing/WomenCloths';


function App() {

  return (
    <>
    {/* <Electronics/> */}
    {/* <Jwellery/> */}
    {/* <MensCloths/> */}
    <WomenCloth/>
    <Routes>
      <Route path={"/"} element={<Home/>}/> 
      <Route path={"*"} element={<PageNotFound/>}/>    
    </Routes>
    </>
  )
}

export default App
