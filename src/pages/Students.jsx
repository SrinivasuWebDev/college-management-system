import { useState, useEffect } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

function Students() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetch('/data/students.json')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    ));
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div>
      <h3 className='text-shadow'>Student Management</h3>
      <StudentForm 
        addStudent={addStudent} 
        updateStudent={updateStudent} 
        editingStudent={editingStudent}
      />
      <StudentList 
        students={students} 
        onEdit={handleEdit} 
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default Students;
