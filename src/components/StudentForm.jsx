import  { useState, useEffect } from 'react';

function StudentForm({ addStudent, updateStudent, editingStudent }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setCourse(editingStudent.course);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      name,
      course,
      collegeId: editingStudent ? editingStudent.collegeId : generateCollegeId(),
    };
    if (editingStudent) {
      updateStudent({ ...editingStudent, ...student });
    } else {
      addStudent(student);
    }
    // Clear form fields
    setName('');
    setCourse('');
  };

  // Generate a new College ID pattern
  const generateCollegeId = () => {
    const year = '19'; // Assuming fixed year part
    const department = 'A41'; // Assuming fixed department part
    const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${year}${department}A${randomNumber}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-floating">
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Name of the student'
        />
        <label htmlFor="name" className="form-label">Name</label>
      </div>
      <div className="mb-3 form-floating">
        <input
          type="text"
          id="course"
          className="form-control "
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          placeholder='Course'
        />
        <label htmlFor="course" className="form-label">Course</label>
      </div>
      <button type="submit" className="btn btn-primary">
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;
