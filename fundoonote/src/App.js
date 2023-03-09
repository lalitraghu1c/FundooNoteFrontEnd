import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Header from './Components/Header/Header';
import TakeNote1 from './Components/TakeNote1/TakeNote1';
import TakeNote2 from './Components/TakeNote2/TakeNote2';
import TakeNote3 from './Components/TakeNote3/TakeNote3';
import DashBoard from './Pages/DashBoard/DashBoard';
import Router1 from './Router/Router1';
import MiniDrawer from './Components/Drawer/Drawer';

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Header />
      <TakeNote1 />
      <TakeNote2 />
      <TakeNote3 /> */}
      {/* <DashBoard /> */}
      <Router1 />
      {/* <MiniDrawer /> */}
    </div>
  );
}

export default App;