const axios = require('axios');

const getLugarLatLng = async direccion => {
	const encodedUrl = encodeURI(direccion);

	const response = await axios.get(`https://geocode.xyz/${ encodedUrl }?json=1`);

	if (response.data.hasOwnProperty('error')) {
		throw new Error(response.data.error.description);
	}

	const data = response.data;

	return {
		direccion: data.standard.city,
		lat: data.latt,
		lng: data.longt
	}

}

module.exports = {
	getLugarLatLng
}