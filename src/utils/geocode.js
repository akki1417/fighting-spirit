const request = require('request');

const geocode = (address, callback) => {
    const add = encodeURIComponent(address);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${add}&key=6e5bc6c3c16f410ebc436e86bdf89127`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('We are not able to reach the servers', undefined);
        } else if (body.results.length === 0) {
            callback('Please enter a valid address', undefined);
        } else {
            callback(undefined, {
                address: body.results[0].formatted,
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng
            });
        }
    });
};

module.exports = geocode;