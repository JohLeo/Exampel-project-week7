import React from 'react';

export const taskList = ({ loading, taskList, setTasklist }) => {
  if (loading) {
    return <h1>Loading in progress</h1>
  }
  const onTaskCheckChange = (task) => {
    setTasklist(taskList => taskList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return { singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }))
  }
  return <div> Task list </div>
}