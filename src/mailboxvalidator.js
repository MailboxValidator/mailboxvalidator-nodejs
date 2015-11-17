var https = require('https');

var version = "1.0";
var apikey = "";
var singleurl = "https://api.mailboxvalidator.com/v1/validation/single";

exports.MailboxValidator_init = function MailboxValidator_init(licensekey) {
	apikey = licensekey;
}

exports.MailboxValidator_single_query = function MailboxValidator_single_query(email, callback) {
	https.get(singleurl + '?key=' + encodeURIComponent(apikey) + '&email=' + encodeURIComponent(email), function(res) {
		res.on('data', function(d) {
			callback(null, res, JSON.parse(d));
		});
	}).on('error', function(e) {
		callback(e);
	});
}
