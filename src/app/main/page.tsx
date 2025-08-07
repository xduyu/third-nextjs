"use client"
import React, { useEffect, useState } from 'react'
import Header from '../auth/dashboard/me/components/Header'

function Page() {
  const [count, setCount] = useState(0)
  useEffect(() =>{
    async function getMessage() {
      const res = await fetch('/api/hello?name=User')
      const data = await res.json()
      console.log(data.message)
    }
    getMessage()
  },[])
  useEffect(() => {
    console.log(`conut now: ${count}`)
  }, [count])
  return (
    <div>
      <Header></Header>
      <button onClick={() => {setCount(count-1)}}>-1</button>
      <div className=""><span>{count}</span></div>
      <button onClick={() => {setCount(count+1)}}>+1</button>
    </div>
  )
}

export default Page