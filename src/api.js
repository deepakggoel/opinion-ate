import axios from 'axios';

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/7GiDG0ej8eidZvRh74YBlf6CATQYcJxh',
});

 const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
   },
};

export default api;
