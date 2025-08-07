"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const params = useParams() as {username: string}
    
    const { username } = params
    const [user, setUser] = useState<{name: string, email?: string} | null>(null)
    useEffect(() => {
        async function getUserData() {
            const res = await fetch(`/api/users/${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok){
                const data = await res.json()
                setUser(data.user)
            } else {
                setUser(null)
            }
        }
        getUserData()
    }, [username])
    if(!user){
        return (<>user not found</>)
    }
    return (
    <div>
        name: {user.name} <br />
        email: {user.email}
    </div>
  )
}
