import { useState, useEffect } from 'react';

function FacultyForm({ addFaculty, updateFaculty, editingFaculty }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    if (editingFaculty) {
      setName(editingFaculty.name);
      setDepartment(editingFaculty.department);
    }
  }, [editingFaculty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFaculty) {
      updateFaculty({ ...editingFaculty, name, department });
    } else {
      addFaculty({ name, department });
    }
    setName('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Department</label>
        <input
          type="text"
          className="form-control"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingFaculty ? 'Update Faculty' : 'Add Faculty'}
      </button>
    </form>
  );
}

export default FacultyForm;
