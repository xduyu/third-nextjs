"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [taskList, setTaskList] = useState<{title: string, about: string}[]>([])
  useEffect(() => {
    async function getTasks() {
      const res = await fetch('/api/todo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTaskList(data.tasks)
    }
    getTasks()
  }, [])
  return (
    <>
    <div className="">
      <ul>
        {taskList ? (<>
                {taskList?.map((el, key) => {
          return (
            <li key={key}>
              <h1>{el.title}</h1>
              <h1>{el.about}</h1>
            </li>
          )
        })}
        </>) : (<>
        NO
        </>)}
      </ul>
    </div>
    </>
  );
}