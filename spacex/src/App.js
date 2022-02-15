import './App.css';
import Content from './Components/Content';
import Filter from './Components/Filter';

function App() {
  return (<>
  <h1 className='title'>SpaceX Launch Programs</h1>
  <div className='container'>
   <Filter />
   <Content />
  </div>
  </>
  );
}

export default App;
