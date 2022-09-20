import axios from 'axios';

const AUTH_KEY = 'AIzaSyAZ8Jo8lOzLw1rQbQLpe6dEBF84QAT2Yvo';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${AUTH_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
