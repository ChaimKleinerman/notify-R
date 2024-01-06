import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routs from './features/global/router/Routs';
import { Wrapper } from './features/components-style/global';
  
function App() {

  return (
    <>
    <ToastContainer/>
    <Wrapper>
   

    <Routs/>
    </Wrapper>
    </>
  )
}

export default App