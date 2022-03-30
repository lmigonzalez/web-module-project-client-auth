import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Login = () => {
	const {push} = useHistory()
const [cred, setCred] = useState({
	username: '',
	password:''
})

const handleChange = (e) =>{
	setCred({
		...cred, 
		[e.target.name]: e.target.value
	})
}

const handleSubmit = (e)=>{
e.preventDefault()
axios.post('http://localhost:9000/api/login', cred)
.then(res =>{
	localStorage.setItem('token', res.data.token)
	push('/friends')
})
.catch(err=>{
	console.log(err)
})
}

	return (
	  <div>
		<h1>Login</h1>
		<form onSubmit={handleSubmit}>
		  <div>
			<label htmlFor="username">USername</label>
			<input id="username" onChange={handleChange} name = "username"/>
		  </div>
  
		  <div>
			<label htmlFor="password">Password</label>
			<input id="password" type="password" onChange={handleChange} name ="password"/>
		  </div>
		  <button>Submit</button>
		</form>
	  </div>
	);
  };

  export default Login;