import axios from 'axios'
import { render } from 'react-dom'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitRequest = axios.get('https://api.github.com/users/ICode4U')
console.log(gitRequest);
gitRequest.then(gitRequest => {
  console.log(gitRequest.data)
});


gitRequest.catch(gitProblem => console.log(gitProblem))
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
function GitComponent(props) {
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
// 
render(
  <GitComponent  gitImage={gitRequest[1][0]} />userName=''   screenName=''  userLocation='' githubAdd='' githubPage='' usersFollowers='' userFollowings='' usersBio=''  />
  ,document.querySelector('.cards')
)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
