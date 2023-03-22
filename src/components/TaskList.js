/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatRelative } from 'date-fns';

export const TaskList = ({ loading, taskList, setTasklist }) => {
  if (loading) {
    return <h1>Loading in progress</h1>
  }
  const onTaskCheckChange = (task) => {
    // eslint-disable-next-line no-shadow
    setTasklist(taskList => taskList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return { singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }))
  }
  return (
    <section>
      {taskList.map((task) => (
        <div key={task._id}>
          <h4>{task.description}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      )).reverse()}
    </section>
  )
}