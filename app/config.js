module.exports = {
	// Twilio API keys
	twilio: {
		sid: process.env.SID,
		token: process.env.TOKEN,
		appid: process.env.APPID,
		fromNumber : process.env.FROMNUM,
		welcome : "Merci de votre appel.",
		hangup : false,
		queueName: process.env.QUEUENAME,
		dqueueurl: process.env.APPURL
	},
	//	Flybase settings
	flybase: {
		api_key: process.env.FLYKEY,
		app_name: process.env.FLYNAME
	},
	//	Username and password for admin section.
	un: process.env.ADMIN,
	pw: process.env.PASS
};
