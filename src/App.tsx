import { Routes, Route} from 'react-router-dom';
import Upload from './pages/Upload'
import GraphDisplay from "./pages/GraphDisplay"

function App() {

  return (
    <div>      
        <Upload />
        <Routes>
            <Route path='/' element={<Upload />}/>
            <Route path='/graphdisplay' element={<GraphDisplay />}/>
        </Routes>
    </div>

  );
}

export default App
