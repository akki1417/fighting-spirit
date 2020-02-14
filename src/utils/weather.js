const request = require('request');

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/40d6dc4d2fce297310a0705056f0398a/' + latitude + ',' + longitude + '?units=si';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.apparentTemperature + ' degrees out. Today it will be highest as ' + body.daily.data[0].temperatureHigh + ' degree and lowest as ' + body.daily.data[0].temperatureLow + ' degree .There is a ' + body.currently.precipProbability + ' % chance of precipitation');
        }
    })
};

module.exports = weather;