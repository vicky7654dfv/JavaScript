import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import StackVertical from './components/StackVertical';
import FormEx from './components/FormEx';
import LoginForm from './components/LoginForm';
import Button1 from './components/Button1';
import NavbarEx from './components/NavbarEx';
//import Login from './components/Login';
import CardEx2 from './components/CardEx2';
import UncontrolledExample from './components/UncontrolledExample';
function App() {
  return (
    <div className="App">
    {/* 
     <Example1 />
    <Example2 /> 
    <StackVertical />
    <FormEx />
    <LoginForm />
    <Button1 />
    <NavbarEx />
    <Login />
    <CardEx2 />
    */}
    <UncontrolledExample />
    </div>
  );
}

export default App;
