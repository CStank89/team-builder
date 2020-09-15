import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const friendsList = [
  { friendName: 'Allison', favHobbie: 'Baking' },
  { friendName: 'Scott',  favHobbie: 'Bodybuilding'},
  { friendName: 'Steven', favHobbie: 'Powerlifting' },
]

const initialFormValues = {
  friendName: '',
  friendType: '',
}

function SimpleForm() {
  const [friends, setFriends] = useState(friendsList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = evt => {
    // change code
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value }) // name will be either petName or petValue
  }
  const submit = evt => {
    // submit code
    evt.preventDefault()
    const newFriend = {
      petName: formValues.friendName.trim(),
      petType: formValues.favHobbies.trim(),
    }
    // setPets(pets.concat(newPet))
    setFriends([...friends, newFriend])
    setFormValues(initialFormValues)
  }
  return (
    <div className='container'>
      <h1>Simple Form</h1>

      {
        friends.map((friend, idx) => {
          return <div key={idx}>{friend.friendName}s favorite hobby is {friend.favHobbie}</div>
        })
      }

      <form onSubmit={submit}>
        <input 
        name='friendName' 
        type="text" 
        value={formValues.friendName} 
        onChange={change} />
        <input 
        name='favHobbie' 
        type="text" 
        value={formValues.favHobbie} 
        onChange={change} />
        <button>submit</button>
      </form>
    </div>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
)