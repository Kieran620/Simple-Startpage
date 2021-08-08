import './App.css';
import { LeftLinkContainer, RightLinkContainer } from './components/LinkContainer';
import Searchbar from './components/Searchbar';
import Time from './components/Time';
import Image from './images/cherry-blossomdarker.jpg'

function App() {
  return (
   <div className='App'>
     <div className='top'>
      <Time />
      <Searchbar />
     </div>
     <div className='mid'>
       <LeftLinkContainer />
       <img className="cherry-blossom" src={Image} width='500' height='750'/>
       <RightLinkContainer />
     </div>
   </div>
  );
}

export default App;
