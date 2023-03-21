import React, { useEffect } from 'react'
import { TaskList } from 'components/TaskList'

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://week-7-backend.onrender.com/tasks')
      .then(res => res.json())
      .then(data => setTaskList(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div>
      <TaskList />
    </div>
  )
}
