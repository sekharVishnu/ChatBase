import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Add from '../img/addAvatar.png'
import { useState } from 'react'

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch {
      setError(true);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display name' />
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input style={{display: 'none'}} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add}/>
            <span>Add an Avatar</span>
          </label>
          <button>SignUp</button>
          {
            error && <span>Something went wrong!</span>
          }
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
}

export default Register