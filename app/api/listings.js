import client from './client';

const getListings = () => client.get('/listings');

const addListings = (listing) => {
	// content -type
	//json to server  - content type is {application/jsoon}
	//files/images - content type is{multipart/form-data}

	const data = new FormData();
	data.append('title', listing.title);
	//data.append('price', listing.title);

	// if (listings.location)
	// 	data.append('location', JSON.stringify(listing.location));

	return client.post('/listings', data);
};

export default {
	getListings,
	addListings,
};
