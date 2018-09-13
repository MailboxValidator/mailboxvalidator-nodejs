var mbv = require("mailboxvalidator-nodejs");

mbv.MailboxValidator_init("YOUR_API_KEY");

mbv.MailboxValidator_single_query("example@example.com", mbv_results);

mbv.MailboxValidator_disposable_email("example@example.com", mbv_results);

mbv.MailboxValidator_free_email("example@example.com", mbv_results);

function mbv_results(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log(data);
	}
}
