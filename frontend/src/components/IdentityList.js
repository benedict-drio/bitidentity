import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IdentityList = () => {
	const [identities, setIdentities] = useState([]);

	useEffect(() => {
		const fetchIdentities = async () => {
			const response = await axios.get('http://localhost:3000/api/identities');
			setIdentities(response.data);
		};
		fetchIdentities();
	}, []);

	return (
		<ul>
			{identities.map((identity) => (
				<li key={identity.id}>{identity.data}</li>
			))}
		</ul>
	);
};

export default IdentityList;