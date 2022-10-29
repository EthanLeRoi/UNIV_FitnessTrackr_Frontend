
import React from 'react';
// import {Link} from 'react-router-dom';

const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;
  
  console.log(user)
  
  return (
    <div>
      <div>
        <h1>Messages from other users!</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.routine;
            
            if (userID !== fromUserID) {
              return (
                <div key={message._id}>
                  <p>From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Routine Reference: {title}</p>
                </div>
              )
            }
          })    
        }
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            
            if (userID === fromUserID) {
              return (
                <div key={message._id}>{message.content}</div>
              )
            }
          })    
        }
      </div>
    </div>
  )
}

export default Profile;