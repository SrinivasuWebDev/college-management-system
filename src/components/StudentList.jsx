
function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h3 className="mt-4">Student List</h3>
      <ul className="list-group">
        {students.map((student) => (
          <li key={student.collegeId} className="list-group-item">
            <strong>{student.name}</strong> - {student.course} - <em>{student.collegeId}</em> {/* Display College ID */}
            <div className="float-end">
              <button 
                className="btn btn-secondary btn-sm ms-2" 
                onClick={() => onEdit(student)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger btn-sm ms-2" 
                onClick={() => onDelete(student.collegeId)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
