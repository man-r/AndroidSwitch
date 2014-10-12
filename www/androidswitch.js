var androidswitch = {
	createEvent: function(successCallback, errorCallback) {
		console.log("androidswitch");
		cordova.exec(
			successCallback,
			errorCallback,
			'Androidswitch',
			'switchLocation', // with this action name
            [{}]
		);
	}
}

module.exports = androidswitch;