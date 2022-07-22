import React from 'react'

function Login({setUsername}) {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let {username} = Object.fromEntries(new FormData(e.target))
        setUsername(username)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"/>
        <input type="submit" />
    </form>
  )
}

export default Login