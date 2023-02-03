
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsitesList';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState} from 'react';
import {CreatedElement} from './components/Misc';
import {CreatedElement2} from './components/Misc';
import {New_Button} from './components/Misc';
import {New_Button2} from './components/Misc';
import  My_Form  from './components/My_Form';
import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes, Route} from  'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';


const test2 = (name) =>{
  
  return name;
}

const basicBtn = {
  border:'solid 2px purple',
  color: 'blue',
  backgroundColor:'yellow'
}

const test3 = 'this is a test';

function App() {
  const [name, setName] = useState('Jeremy');
  return (
    <div className="App">
            <Button style={basicBtn} >This is my New button</Button>
            <Button style={{color:'blue', backgroundColor:'red'}} >This is my New button</Button>
            <Button className='primary' color="info" onClick={() => setName('Jade')}>This is my New button</Button>
            <CreatedElement person={{ name: {name}, imageId: '1bX5QH6'}} test={test2({name})} testx={name}  />
            <CreatedElement2 props={name}  />
            <CreatedElement2 props={name}  />
            <New_Button buttonName='Jeremys Button'/>
            
            
            <New_Button2 />
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='directory' element={<CampsiteDirectoryPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route 
                path='directory/:campsiteId'
                element={<CampsiteDetailPage />}
              />
            </Routes>
            <My_Form />
            <Footer />
    </div>
  )
}

export default App;
