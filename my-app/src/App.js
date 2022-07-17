import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import AsideLeft from './components/section/AsideLeft';
import AsideRight from './components/section/AsideRight';
import Section2 from './components/Section2';
import Msg from './components/Msg';

function App() {
  return (
   <>
   <Header />
   <Section />
   <AsideLeft />
   <AsideRight />
   <Section2 />
   <Msg />
   </>
  );
}

export default App;
