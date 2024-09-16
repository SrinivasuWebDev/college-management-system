import { useState, useEffect } from 'react';

function CourseForm({ addCourse, updateCourse, editingCourse }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    if (editingCourse) {
      setName(editingCourse.name);
      setCode(editingCourse.code);
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      updateCourse({ ...editingCourse, name, code });
    } else {
      addCourse({ name, code });
    }
    setName('');
    setCode('');
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
        <label className="form-label">Code</label>
        <input
          type="text"
          className="form-control"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingCourse ? 'Update Course' : 'Add Course'}
      </button>
    </form>
  );
}

export default CourseForm;
