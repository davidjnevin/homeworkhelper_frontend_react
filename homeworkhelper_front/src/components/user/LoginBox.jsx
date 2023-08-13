import { useState } from 'react';
import axios from 'axios';
import unauthFetch from '../../axios/unauthFetch';

const url = '/users/login';
const LoginBox = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(email, password);
		try {
			const { data } = await unauthFetch.post(url, {
				email: email,
				password: password,
			}, {});
			console.log(data);
		}
		catch (error) {
			console.error(error.response);
		}
	};

	return (
		<section>
			<h2 className='text-center'>Welcome</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						email
					</label>
					<input
						type='email'
						className='form-input'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						password
					</label>
					<input
						type='password'
						className='form-input'
						id='name'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					login
				</button>
			</form>
		</section>
	);
};
export default LoginBox;

