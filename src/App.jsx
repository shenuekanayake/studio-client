import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Nav from "./components/layouts/nav/Nav";
import Home from "./routes/home";
import Portfolio from "./components/portfolio/Portfolio";
import Register from './routes/register';
import Login from './routes/login';
import Profile from './routes/profile/profile';
import JobSection from './routes/job-section';
import Gallery from './routes/gallery';
import About from './routes/about';
import Contact from './routes/contact';
import Chat from './components/layouts/chat/Chat';
import { useEffect, useState } from 'react';
import EventEmitter from './utils/EventEmitter';


function App() {
  var [showChat, setShowChat] = useState(false);

  

  useEffect(() => {
      // const onCloseLogPannel = () => {
      //     setShowChat(!showChat);
      // }
      var listner = EventEmitter.addListener("ShowChat", (p) => setShowChat(p.show));
      
      return () => {
        listner.remove();
      }
  }, []);
  return (
    <Router>
      <div className="App">
        
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/jobs' element={<JobSection />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
          
          {showChat&&(<Chat />)}

          <Footer/>
      </div>
    </Router>
  );
}

export default App;
