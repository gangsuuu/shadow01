import '../src/styles/abstracts/main.css';
import Home from './components/Home/Home';
import { useWindowSize } from '../src/hooks/resize'



const App = () => {
  const {width, height} = useWindowSize()

  return(
    <div>
      <Home></Home>
    </div>
  )
};

export default App;
