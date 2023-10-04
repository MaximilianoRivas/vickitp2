import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from'../pages/Home/Home';
import Character from '../pages/Characters/Characters';
import Contact from '../pages/Contact/Contact';

export default function Router(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route path='/characters' element={<Character/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

    )
}
