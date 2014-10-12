var androidswitch = {
	createEvent: function(successCallback, errorCallback) {
		console.log("androidswitch");
		cordova.exec(
			successCallback,
			errorCallback,
			'AndroidSwitch',
			'switchLocation'
		);
	}
}

module.exports = androidswitch;