import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const AddFriend = () => {
	const {push} = useHistory()
	const [form, setForm] = useState({
		name: '',
		age: '',
		email: ''
	})

	const handleChange = (e) =>{
	
		setForm({
			...form,
			[e.target.name]:e.target.value
		})
	}
	
 const handleSubmit = (e)=>{
	 e.preventDefault()
	 const token = localStorage.getItem('token')
	 axios.post('http://localhost:9000/api/friends',form, {
		 headers:{
		 authorization: token
	 }})
		 .then(res=>{
			 push('/friends')
		 })
		 .catch(err=>{
			console.log(err)
		 })
	 
 }
	

	return(
	<div>
 		<h2>AddFriend</h2>
		 <form onSubmit={handleSubmit}>
			 <div>
				 <label htmlFor="name">Name:</label>
				 <input id='name' onChange={handleChange} name='name'/>
			 </div>

			 <div>
				 <label htmlFor="age">Age:</label>
				 <input id='age' onChange={handleChange} name='age' />
			 </div>
			 <div>
				 <label htmlFor="email">Email:</label>
				 <input id='email' onChange={handleChange} name='email' />
			 </div>
			 <button>Submit</button>
		 </form>

	</div>

	)
};


  export default AddFriend;