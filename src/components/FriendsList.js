import React, {useState, useEffect} from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

const FriendList = () => {
	const [friends, setFriends] = useState([])
	
	useEffect(()=>{
		const token = localStorage.getItem('token')
		axiosWithAuth().get('/friends')
		.then(res=>{
			setFriends(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
	}, [])

	return(
		<div>
			<h2>FriendList</h2>
			<ul>
				{
					friends.map(friend=>{
						return(
							<li className="friend_list" key= {friend.id}>{friend.name} -  {friend.age} - {friend.email}</li>
						)
					})
				}
			</ul>

		</div>

	)
  };
  

  export default FriendList;