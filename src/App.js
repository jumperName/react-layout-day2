import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Service from './Service';

function App() {
  return (
    <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/service" element={<Service/>} />
    </Routes>
    
  );
}

export default App;
