import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            localStorage.clear()
            navigate("/")
        }, 1000)
    })
    return (
        <div>
            anda akan logout..
        </div>
    )
}
