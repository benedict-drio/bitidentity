import React, { useState } from 'react';
import axios from 'axios';

const IdentityForm = () => {
	const [identity, setIdentity] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:3000/api/identities', { identity });
		setIdentity(''); // Clear input field
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={identity}
				onChange={(e) => setIdentity(e.target.value)}
				placeholder="Enter identity"
			/>
			<button type="submit">Create Identity</button>
		</form>
	);
};

export default IdentityForm;