import React from 'react';
// import { useHistory } from 'react-router-dom';

export default function PostComponent(user) {

    console.log(user.user[0].id)
    return(
        <div>
            <h1>Post Component {user}</h1>
            {/* <button onClick={this.handleClick} >handleClick</button> */}
        </div>
    )
}