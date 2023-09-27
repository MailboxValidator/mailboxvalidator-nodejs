var https = require('https');

var version = "2.0.0";
var apikey = "";
var singleurl = "https://api.mailboxvalidator.com/v2/validation/single";
var disposableurl = "https://api.mailboxvalidator.com/v2/email/disposable";
var freeurl = "https://api.mailboxvalidator.com/v2/email/free";

exports.MailboxValidator_init = function MailboxValidator_init(licensekey) {
	apikey = licensekey;
}

exports.MailboxValidator_single_query = function MailboxValidator_single_query(email) {
	let data = {
	key: apikey,
	email: email,
	};
	let url = singleurl + "?";
	
	Object.keys(data).forEach(function (key, index) {
		if (this[key] != "") {
			url += key + "=" + encodeURIComponent(this[key]) + "&";
		}
	}, data);
	
	url = url.substring(0, url.length - 1);
	
	const lookupPromise = new Promise((resolve, reject) => {
		let d = "";
		let req = https.get(url, function (res) {
			res.on("data", (chunk) => (d = d + chunk));
			res.on("end", function () {
				if (res.statusCode == 200) {
					resolve(JSON.parse(d));
				} else if (res.statusCode == 400 || res.statusCode == 401) {
					if (d.includes("error_message")) {
						reject(new Error(JSON.parse(d).error.error_message));
					} else {
						reject(new Error(d));
					}
				} else {
					reject(new Error(d));
				}
			});
		});
		
		req.on("error", function (e) {
			reject(new Error(e));
		});
	});
	return lookupPromise;
}

exports.MailboxValidator_disposable_email = function MailboxValidator_disposable_email(email) {
	let data = {
	key: apikey,
	email: email,
	};
	let url = disposableurl + "?";
	
	Object.keys(data).forEach(function (key, index) {
		if (this[key] != "") {
			url += key + "=" + encodeURIComponent(this[key]) + "&";
		}
	}, data);
	
	url = url.substring(0, url.length - 1);
	
	const lookupPromise = new Promise((resolve, reject) => {
		let d = "";
		let req = https.get(url, function (res) {
			res.on("data", (chunk) => (d = d + chunk));
			res.on("end", function () {
				if (res.statusCode == 200) {
					resolve(JSON.parse(d));
				} else if (res.statusCode == 400 || res.statusCode == 401) {
					if (d.includes("error_message")) {
						reject(new Error(JSON.parse(d).error.error_message));
					} else {
						reject(new Error(d));
					}
				} else {
					reject(new Error(d));
				}
			});
		});
		
		req.on("error", function (e) {
			reject(new Error(e));
		});
	});
	return lookupPromise;
}

exports.MailboxValidator_free_email = function MailboxValidator_free_email(email) {
	let data = {
	key: apikey,
	email: email,
	};
	let url = freeurl + "?";
	
	Object.keys(data).forEach(function (key, index) {
		if (this[key] != "") {
			url += key + "=" + encodeURIComponent(this[key]) + "&";
		}
	}, data);
	
	url = url.substring(0, url.length - 1);
	
	const lookupPromise = new Promise((resolve, reject) => {
		let d = "";
		let req = https.get(url, function (res) {
			res.on("data", (chunk) => (d = d + chunk));
			res.on("end", function () {
				if (res.statusCode == 200) {
					resolve(JSON.parse(d));
				} else if (res.statusCode == 400 || res.statusCode == 401) {
					if (d.includes("error_message")) {
						reject(new Error(JSON.parse(d).error.error_message));
					} else {
						reject(new Error(d));
					}
				} else {
					reject(new Error(d));
				}
			});
		});
		
		req.on("error", function (e) {
			reject(new Error(e));
		});
	});
	return lookupPromise;
}
