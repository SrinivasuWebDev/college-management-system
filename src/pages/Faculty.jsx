import { useState, useEffect } from 'react';
import FacultyForm from '../components/FacultyForm';
import FacultyList from '../components/FacultyList';

function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [editingFaculty, setEditingFaculty] = useState(null);

  useEffect(() => {
    fetch('/data/faculty.json')
      .then((response) => response.json())
      .then((data) => setFaculty(data));
  }, []);

  const addFaculty = (newFaculty) => {
    setFaculty([...faculty, { id: faculty.length + 1, ...newFaculty }]);
  };

  const updateFaculty = (updatedFaculty) => {
    setFaculty(faculty.map(item =>
      item.id === updatedFaculty.id ? updatedFaculty : item
    ));
    setEditingFaculty(null);
  };

  const deleteFaculty = (id) => {
    setFaculty(faculty.filter(item => item.id !== id));
  };

  const handleEdit = (facultyItem) => {
    setEditingFaculty(facultyItem);
  };

  return (
    <div>
      <h3 className='text-shadow'>Faculty Management</h3>
      <FacultyForm 
        addFaculty={addFaculty} 
        updateFaculty={updateFaculty} 
        editingFaculty={editingFaculty}
      />
      <FacultyList 
        faculty={faculty} 
        onEdit={handleEdit} 
        onDelete={deleteFaculty}
      />
    </div>
  );
}

export default Faculty;
