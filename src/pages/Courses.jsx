import { useState, useEffect } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    fetch('/data/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const addCourse = (newCourse) => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
  };

  const updateCourse = (updatedCourse) => {
    setCourses(courses.map(course =>
      course.id === updatedCourse.id ? updatedCourse : course
    ));
    setEditingCourse(null);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  return (
    <div>
      <h3 className='text-shadow'>Course Management</h3>
      <CourseForm 
        addCourse={addCourse} 
        updateCourse={updateCourse} 
        editingCourse={editingCourse}
      />
      <CourseList 
        courses={courses} 
        onEdit={handleEdit} 
        onDelete={deleteCourse}
      />
    </div>
  );
}

export default Courses;
