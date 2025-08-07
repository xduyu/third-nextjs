"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUserData] = useState<{name: string}[]>([])
  useEffect(() => {
    async function getUsersData() {
      const res = await fetch('/api/users', {
        method: 'GET'
      })
      const data = await res.json()
      setUserData(data.users)
    }
    getUsersData()
  }, [])
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ul>
        {users?.map((el, key) => {
          return (
            <li key={key}>
              name: {el.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
