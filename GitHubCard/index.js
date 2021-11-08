<<<<<<< Updated upstream
import axios from 'axios';
=======
>>>>>>> Stashed changes

import { render } from 'react-dom';
import axios from 'axios';
import react, { useState } from 'react';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const gitHubData = axios.get("https://api.github.com/users/ICode4U");




 

// //console.log(gitHubData);
// //gitHubData.then(gitHubData => (toString))
// // gitHubData.catch(error => console.log(error));

  

const gitRequest = axios.get('https://api.github.com/users/ICode4U');



  gitRequest.then(gitRequest => {
    return gitRequest.toString;
  });
  gitRequest.catch(gitProblem => console.log(gitProblem));

//gitRequest.finally(gitRequest => userData => {
  //gitRequest.prototype.toString(Response)
  //return userData;
//});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
<<<<<<< Updated upstream
// function GitComponent(props) {
//   return (
//     <div className="card">
//     <img src={props.gitImage} />
//     <div className="card-info">
//       <h3 className="name">{props.userName}</h3>
//       <p className="username">{props.screenName}</p>
//       <p>Location: {props.usersLocation}</p>
//       <p>Profile:
//         <a href={props.githubAdd}>{props.githubPage}</a>
//       </p>
//       <p>Followers: {props.usersFollowers}</p>
//       <p>Following: {props.usersFollowing}</p>
//       <p>Bio: {props.usersBio}</p>
//     </div>
//   </div>
//   )
// }
=======
export function GitComponent(props) {
  
  const userData = useState(gitRequest)
  
  return (
    <div className="card">
    <img src={props.gitImage} />
    <div className="card-info">
      <h3 className="name">{props.userName}</h3>
      <p className="username">{props.screenName}</p>
      <p>Location: {props.usersLocation}</p>
      <p>Profile:
        <a href={props.githubAdd}>{props.githubPage}</a>
      </p>
      <p>Followers: {props.usersFollowers}</p>
      <p>Following: {props.usersFollowing}</p>
      <p>Bio: {props.usersBio}</p>
    </div>
  </div>
  )
}
>>>>>>> Stashed changes
// 
// render(
//   <GitComponent  gitImage='' userName=''   screenName=''  userLocation='' githubAdd='' githubPage='' usersFollowers='' userFollowings='' usersBio=''/>
//   , document.querySelector('.cards')
// )
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
