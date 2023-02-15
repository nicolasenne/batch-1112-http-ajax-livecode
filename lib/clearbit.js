import { apiKey } from "./pk";
// TODO

// #1 "Listen" o que o formulário enviar 
// #2 evento.preventDefault()
// #3 Fetch API
// #4 Read JSON and display

const form = document.getElementById('clearbitForm');
const button = document.getElementById('clearbitSubmit');
const email = document.getElementById('clearbitEmail');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userBio = document.getElementById('userBio');
const userLocation = document.getElementById('userLocation');

const userDetail = (data) => {
  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userBio.innerText = data.bio;
  userLocation.innerText = data.location;
};


const callApi = (email) => {
  fetch(`https://person.clearbit.com/v1/people/email/${email}`, {
    headers: { Authorization: apiKey }
  })
  .then(response => response.json())
  .then((data) => {
    userDetail(data);
  })
};


const userInfo = (event) => {
  event.preventDefault();
  const inputEmail = email.value;
  callApi(inputEmail);
};

form.addEventListener('submit', userInfo)
