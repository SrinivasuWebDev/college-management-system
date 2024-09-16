
function CourseList({ courses, onEdit, onDelete }) {
  return (
    <div>
      <h3 className="mt-4">Course List</h3>
      <ul className="list-group">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item">
            <strong>{course.name}</strong> - {course.code}
            <div className="float-end">
              <button 
                className="btn btn-secondary btn-sm ms-2" 
                onClick={() => onEdit(course)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger btn-sm ms-2" 
                onClick={() => onDelete(course.id)}
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

export default CourseList;
