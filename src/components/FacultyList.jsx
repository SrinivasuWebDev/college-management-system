
function FacultyList({ faculty, onEdit, onDelete }) {
  return (
    <div>
      <h3 className="mt-4">Faculty List</h3>
      <ul className="list-group">
        {faculty.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.name}</strong> - {item.department}
            <div className="float-end">
              <button 
                className="btn btn-secondary btn-sm ms-2" 
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger btn-sm ms-2" 
                onClick={() => onDelete(item.id)}
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

export default FacultyList;
