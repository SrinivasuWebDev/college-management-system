
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/" element={<Students />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
