import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn';
import SignUpForm from './components/SignUpForm';
import LandingPage from './components/LandingPage';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App p-36">
      <div>
        <LandingPage/>
      </div>
      <div>
        <SignUpForm/>
      </div>
      <div>
        <LogIn/>
      </div>
      <div>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
