import logo from './logo.svg';
import './App.css';
import ReactCourse from './components/ReactCourse';
import ModerElectronics from './components/ModernElectronics';
import ModernElectronis from './components/ModernElectonis';
import WIFI from './components/WIFI';
import RegisterForm from './components/RegisterForm';
import ContactForm from './components/ContactForm';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div className="App">
      {/* 
      <ReactCourse />
      <ModerElectronics />f
      <ModernElectronis />
      <WIFI />
      <RegisterForm />
      <ContactForm />
      */}
      <FeedbackForm />

    </div>
  )
}

export default App;
