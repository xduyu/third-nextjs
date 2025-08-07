"use client"
import React, { useState } from 'react'

export default function Page() {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('')
  const [newTaskAbout, setNewTaskAbout] = useState<string>('')

  function createTask(title: string, about: string) {
    console.log(title, about)
    fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, about})
    })
  }

  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.target.value)}
        placeholder="Task title"
      />
      <input
        type="text"
        value={newTaskAbout}
        onChange={e => setNewTaskAbout(e.target.value)}
        placeholder="Task about"
      />
      <button onClick={() => createTask(newTaskTitle, newTaskAbout)}>Create</button>
    </div>
  )
}
