import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 61a403b4374cb7c9ad8c0f223e4737b85387ee38c8aa8c8e972402ae15fa8b39'
  }
});
