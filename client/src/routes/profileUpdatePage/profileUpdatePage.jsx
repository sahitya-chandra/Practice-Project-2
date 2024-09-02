import { useRecoilValue } from "recoil"
import { currentUserAtom } from "../../store/atom/atom"
import { useAuth } from "../../store/hooks/useAuth"
import "./profileUpdatePage.scss"
import React, { useState } from 'react'
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom"

function ProfileUpdatePage() {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const updateUser = useAuth()
  const currentUser = useRecoilValue(currentUserAtom)

  const handleSubmit = async (e) => {
    setError("")
    e.preventDefault()
    const formData = new FormData(e.target)

    const {username, email, password} = Object.fromEntries(formData)

    try {

      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password
      })

      updateUser(res.data)
      navigate("/profile")

    } catch (err) {
      console.log(err)
      setError(err.response.data.msg)
    }

  }


  return (
    <div className="profileUpdatePage">
      <div className="fomContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="ittem">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="ittem">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="ittem">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideeContainer">
        <img src={ "/noavatar.jpg"} alt="" className="avatar" />
        {/* <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        /> */}
      </div>
    </div>
  )
}

export default ProfileUpdatePage