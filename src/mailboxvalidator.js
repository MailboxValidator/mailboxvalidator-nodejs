var https = require('https');

var version = "1.1.2";
var apikey = "";
var singleurl = "https://api.mailboxvalidator.com/v1/validation/single";
var disposableurl = "https://api.mailboxvalidator.com/v1/email/disposable";
var freeurl = "https://api.mailboxvalidator.com/v1/email/free";

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

exports.MailboxValidator_disposable_email = function MailboxValidator_disposable_email(email, callback) {
	https.get(disposableurl + '?key=' + encodeURIComponent(apikey) + '&email=' + encodeURIComponent(email), function(res) {
		res.on('data', function(d) {
			callback(null, res, JSON.parse(d));
		});
	}).on('error', function(e) {
		callback(e);
	});
}

exports.MailboxValidator_free_email = function MailboxValidator_free_email(email, callback) {
	https.get(freeurl + '?key=' + encodeURIComponent(apikey) + '&email=' + encodeURIComponent(email), function(res) {
		res.on('data', function(d) {
			callback(null, res, JSON.parse(d));
		});
	}).on('error', function(e) {
		callback(e);
	});
}
