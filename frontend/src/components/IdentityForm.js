import React, { useState } from 'react';

const IdentityForm = () => {
	const [identity, setIdentity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
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