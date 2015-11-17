var mbv = require("mailboxvalidator-nodejs");

mbv.MailboxValidator_init("YOUR_API_KEY");

mbv.MailboxValidator_single_query("example@example.com", mbv_read_single);

function mbv_read_single(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log(data);
	}
}
