/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get(' https://api.github.com/users/LittleBoGeek')
.then( (gH)=> {
console.log() (gH.data)
})
.catch ( err => {
console.log('error:', err)
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
myFunc(gh.data).document.appendChild(cards);


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function myFunc (obj){
  let div = createElement('div');
  div.classList.add('card');
  cards.appendChild('div');

  let img = createElement('img');
  img.classList.add('card img ')
  let cardInfo = createElement('div');
  cardInfo.classList.add('card-info');
  let h3 = createElement('h3');
  h3.classList.add('name');
  h3.textContent = `${username}`
  let pOne = createElement('p');
  let pTwo = createElement('p');
  let pThree = createElement('p');
  let pFour = createElement('p');
  let pFive= createElement('p');
  let pSix = createElement('p');
  pOne.classList.add('username')
  pOne.textContent = `${username}`;
  pTwo.textContent = `Location:${location}`;
  pThree.textContent=`Profile:${profile}`;
  pFour.textContent =`Followers:${followers}`;
  pFive.textContent =`Following:${following}`;
  pSix.textContent = `Bio:${bio}`;
  return obj;
}
