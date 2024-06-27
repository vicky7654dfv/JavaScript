import logo from './logo.svg';
import './App.css';
import Controlled1 from './components/Controlled1';
import Dropdown from './components/Dropdown';
import CheckBox from './components/CheckBox';
import MultipleForm from './components/MultipleForm';
import FormValidation from './components/FormValidation';
import Uncontrolled from './components/Uncontrolled';
import Formwithcss from './components/FormwithCss';
import Example1 from './components/SemanticUI/Example1';

function App() {
  return (
    <div className="App">
    { /* <Controlled1 />
    <Dropdown />
    <CheckBox />
    <MultipleForm />
    <FormValidation />
    <Uncontrolled />
    <Formwithcss />
    */}
    <Example1 />
    </div>
  );
}

export default App;
