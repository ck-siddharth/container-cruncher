import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Company from './components/Companies';
import CardShop from './components/CardShop';
import TryNow from './components/TryNow';
import Team from './components/Team';
import Work from './components/Work'
import Images from './components/Manage';
import Form from './components/Form';
import Data from './components/Data';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/Header';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
     <Banner/>
     <Company/>
     <CardShop/>
     <TryNow/>
     <Team/>
     <Work/>
     <Images/>
     <Form/>
     <Data/>
     <Footer/>
    </div>
  );
}

export default App;
