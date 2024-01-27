import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/aboutme/AboutMe';
import EmployeeInfo from './components/employeeinformation/EmployeeInfo';
import Employee from './components/employeeinformation/Employee';
import DisplayTotals from './components/Presidents/DisplayTotals';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Employee />
      <DisplayTotals />
      <Footer />
    </div>
  );
}

export default App
