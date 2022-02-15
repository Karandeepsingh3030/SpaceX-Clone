import './App.css';
import Content from './Components/Content';
import Filter from './Components/Filter';
import Footer from './Components/Footer';

function App() {
  return (<>
  <h1 className='title'>SpaceX Launch Programs</h1>
  <div className='container'>
   <Filter />
   <Content />
   <Footer />
  </div>
  </>
  );
}

export default App;
