//  const KEY_API = `c70ac1a23ae822ab5b2881638ada5783`

// ключ доступу API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzBhYzFhMjNhZTgyMmFiNWIyODgxNjM4YWRhNTc4MyIsIm5iZiI6MTcyNTgwMzkyOS43OTY2ODQsInN1YiI6IjY2ZGQ0Mjc2NDBmYmMxMDk4YjM4YmM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AogiLxF9hRcysuu6kIwDOAuDHe3_CtKxQojeepuj4HE


const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization: "Bearer api_read_access_token",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
