var androidSwitch = {
	createEvent: function(successCallback, errorCallback) {
		cordova.exec(
			successCallback,
			errorCallback,
			'AndroidSwitch',
			'switchLocation'
		);
	}
}