const baseUrl = 'https://api.github.com/users';

export const getUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(); 
  });