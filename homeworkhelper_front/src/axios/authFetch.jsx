import axios from 'axios';

const authFetch = axios.create({
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Content-Type': 'application/json', 'accept': '*/*',
	},
},
);

export default authFetch;
