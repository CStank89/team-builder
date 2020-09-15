import React, { useState } from 'react'


const friendsList = [
    { friendName: 'Allison', email: 'al@al.com', role: 'backend'},
    { friendName: 'Scott',  email: 'scott@sc.com', role:'frontend'},
    { friendName: 'Steven', email: 'steven@st.com', role:'fullstack'},
  ]
  
  const initialFormValues = {
    friendName: '',
    email: '',
    role:'',
  }
  
  function Form() {
    const [friends, setFriends] = useState(friendsList)
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const change = evt => {
      // change code
      const { name, value } = evt.target
      setFormValues({ ...formValues, [name]: value }) 
    }
    const submit = evt => {
      evt.preventDefault()
      const newFriend = {
        friendName: formValues.friendName.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim()
      }
      setFriends([...friends, newFriend])
      setFormValues(initialFormValues)
    }
    return (
      <div className='container'>
        {
          friends.map((friend, idx) => {
            return <div key={idx}>{friend.friendName}s email is {friend.email} and works as a {friend.role}</div>
          })
        }
        
        <form onSubmit={submit}>
          <input 
          name='friendName' 
          type="text" 
          value={formValues.friendName} 
          onChange={change}
          placeholder='friends name' />
          <input 
          name='email' 
          type="text" 
          value={formValues.email} 
          onChange={change}
          placeholder='please type friends email' />
            <input 
          name='role' 
          type="text" 
          value={formValues.role} 
          onChange={change}
          placeholder='please specify a role' />
          
          <button>submit</button>
        </form>
      </div>
    )
  
  }



export default Form
