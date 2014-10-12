var androidswitch = {
	createEvent: function(successCallback, errorCallback) {
		console.log("androidswitch");
		cordova.exec(
			successCallback,
			errorCallback,
			'AndroidSwitch',
			'switchLocation', // with this action name
            [{}]
		);
	}
}

module.exports = androidswitch;