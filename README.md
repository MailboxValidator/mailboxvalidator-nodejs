MailboxValidator Node.js Module
===============================

This Node.js module provides an easy way to call the MailboxValidator API which validates if an email address is a valid one.

This module can be used in many types of projects such as:

 - validating a user's email during sign up
 - cleaning your mailing list prior to an email marketing campaign
 - a form of fraud check

Installation
============

To install this module type the following:

   npm install mailboxvalidator-nodejs

Dependencies
============

An api key is required for this module to function.

Go to https://www.mailboxvalidator.com/plans#api to sign up for FREE API plan and you'll be given an API key.

Usage for validation email
==========================

```javascript
var mbv = require("mailboxvalidator-nodejs");

mbv.MailboxValidator_init("YOUR_API_KEY");

mbv.MailboxValidator_single_query("example@example.com", mbv_read_single);

function mbv_read_single(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log("email_address: " + data.email_address);
		console.log("domain: " + data.domain);
		console.log("is_free: " + data.is_free);
		console.log("is_syntax: " + data.is_syntax);
		console.log("is_domain: " + data.is_domain);
		console.log("is_smtp: " + data.is_smtp);
		console.log("is_verified: " + data.is_verified);
		console.log("is_server_down: " + data.is_server_down);
		console.log("is_greylisted: " + data.is_greylisted);
		console.log("is_disposable: " + data.is_disposable);
		console.log("is_suppressed: " + data.is_suppressed);
		console.log("is_role: " + data.is_role);
		console.log("is_high_risk: " + data.is_high_risk);
		console.log("is_catchall: " + data.is_catchall);
		console.log("mailboxvalidator_score: " + data.mailboxvalidator_score);
		console.log("time_taken: " + data.time_taken);
		console.log("status: " + data.status);
		console.log("credits_available: " + data.credits_available);
		console.log("error_code: " + data.error_code);
		console.log("error_message: " + data.error_message);
	}
}
```

Functions
=========

### MailboxValidator_init(api_key)

Creates a new instance of the MailboxValidator object with the API key.

### MailboxValidator_single_query(email_address, callback_function)

Performs email validation on the supplied email address and a callback function.

Result Fields
=============

### email_address

The input email address.

### domain

The domain of the email address.

### is_free

Whether the email address is from a free email provider like Gmail or Hotmail.

Return values: True, False

### is_syntax

Whether the email address is syntactically correct.

Return values: True, False

### is_domain

Whether the email address has a valid MX record in its DNS entries.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_smtp

Whether the mail servers specified in the MX records are responding to connections.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_verified

Whether the mail server confirms that the email address actually exist.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_server_down

Whether the mail server is currently down or unresponsive.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_greylisted

Whether the mail server employs greylisting where an email has to be sent a second time at a later time.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_disposable

Whether the email address is a temporary one from a disposable email provider.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_suppressed

Whether the email address is in our blacklist.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_role

Whether the email address is a role-based email address like admin@example.net or webmaster@example.net.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_high_risk

Whether the email address contains high risk keywords.

Return values: True, False, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### is_catchall

Whether the email address is a catch-all address.

Return values: True, False, Unknown, -&nbsp;&nbsp;&nbsp;(- means not applicable)

### mailboxvalidator_score

Email address reputation score.

Score > 0.70 means good; score > 0.40 means fair; score <= 0.40 means poor.

### time_taken

The time taken to get the results in seconds.

### status

Whether our system think the email address is valid based on all the previous fields.

Return values: True, False

### credits_available

The number of credits left to perform validations.

### error_code

The error code if there is any error. See error table below.

### error_message

The error message if there is any error. See error table below.


Usage for checking if the email is from a disposable email provider
===================================================================

```javascript
var mbv = require("mailboxvalidator-nodejs");

mbv.MailboxValidator_init("YOUR_API_KEY");

mbv.MailboxValidator_disposable_email("example@example.com", mbv_read_disposable);

function mbv_read_disposable(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log("email_address: " + data.email_address);
		console.log("is_disposable: " + data.is_disposable);
		console.log("credits_available: " + data.credits_available);
		console.log("error_code: " + data.error_code);
		console.log("error_message: " + data.error_message);
	}
}
```

Functions
=========

### MailboxValidator_init(api_key)

Creates a new instance of the MailboxValidator object with the API key.

### MailboxValidator_disposable_email(email_address, callback_function)

Performs disposable email check on the supplied email address and a callback function.

Result Fields
=============

### email_address

The input email address.

### is_disposable

Whether the email address is a temporary one from a disposable email provider.

Return values: True, False

### credits_available

The number of credits left to perform validations.

### error_code

The error code if there is any error. See error table below.

### error_message

The error message if there is any error. See error table below.


Usage for checking if the email is from a free email provider
=============================================================

```javascript
var mbv = require("mailboxvalidator-nodejs");

mbv.MailboxValidator_init("YOUR_API_KEY");

mbv.MailboxValidator_free_email("example@example.com", mbv_read_free);

function mbv_read_free(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log("email_address: " + data.email_address);
		console.log("is_free: " + data.is_free);
		console.log("credits_available: " + data.credits_available);
		console.log("error_code: " + data.error_code);
		console.log("error_message: " + data.error_message);
	}
}
```

Functions
=========

### MailboxValidator_init(api_key)

Creates a new instance of the MailboxValidator object with the API key.

### MailboxValidator_free_email(email_address, callback_function)

Performs free email check on the supplied email address and a callback function.

Result Fields
=============

### email_address

The input email address.

### is_free

Whether the email address is from a free email provider like Gmail or Hotmail.

Return values: True, False

### credits_available

The number of credits left to perform validations.

### error_code

The error code if there is any error. See error table below.

### error_message

The error message if there is any error. See error table below.


Errors
======

| error_code | error_message |
| ---------- | ------------- |
| 100 | Missing parameter. |
| 101 | API key not found. |
| 102 | API key disabled. |
| 103 | API key expired. |
| 104 | Insufficient credits. |
| 105 | Unknown error. |


Copyright
=========

Copyright (C) 2018 by MailboxValidator.com, support@mailboxvalidator.com
