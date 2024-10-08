import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import apiRequest from "../../lib/apiRequest";
import { useAuth } from "../../store/hooks/useAuth";

function Login() {

  const updateUser = useAuth()

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target)
    const username = formData.get('username') 
    // const email = formData.get('email') 
    const password = formData.get('password') 

    try {
      const res = await apiRequest.post("/auth/login", {
        username, password
      })

      // console.log(res.data)
      updateUser(res.data)
      navigate("/")
    } catch(err) {
      console.log(err)
      setError(err.response.data.msg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="loginnn">
      <div className="formmmContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <p>{error}</p>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgggContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;