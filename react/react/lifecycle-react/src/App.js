import logo from './logo.svg';
import './App.css';
import Constructor1 from './components/Mounting/Constructor1';
import DerivedFromProps from './components/Mounting/DerivedFromProps';
import DidMount from './components/Mounting/DidMount';
import GetDerived from './components/Update/GetDerived';
import Render from './components/Update/Render';

function App() {
  return (
    <div className="App">
     {/* <Constructor1 />
     <DerivedFromProps favCol='blue' />
     <DidMount />
     <GetDerived favCol='blue' />
     */
     }
     <Render />
   </div>
  );
}

export default App;
