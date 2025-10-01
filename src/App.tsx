import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Upload from './pages/Upload'
// import GraphDisplay from './pages/GraphDisplay'

function App() {

  return (
    <div>
      <Upload />
      <BrowserRouter>
        <Routes>
          <Route path='upload' element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App
