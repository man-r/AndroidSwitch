var androidswitch = {
	createEvent: function(successCallback, errorCallback) {
		cordova.exec(
			successCallback,
			errorCallback,
			'AndroidSwitch',
			'switchLocation'
		);
	}
}

module.exports = androidswitch;