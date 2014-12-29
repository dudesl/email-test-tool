# Yet Another Email Test Tool

## Overview
A tool for testing mailing mockup build whit node, grunt, sass and using browserSync, mailgun, litmus

## Setup & Run

### Install
```
$ npm install
```
This will install all the dependencies. At this point, the suite is ready for test and/or develop.

### Dependencies
This is the actual ```devDependencies``` package.json field
```
"devDependencies": {
  "grunt": "~0.4.5",
  "grunt-contrib-watch": "^0.6.1",
  "grunt-contrib-sass": "^0.8.1",
  "grunt-browser-sync": "^1.5.3",
  "grunt-inline-css": "^0.1.4",
  "grunt-mailgun": "~0.0.3"
}
```
### Run
In the root directory of our project:

#### command ```grunt```
Will execute the ```watch``` task for index.html

#### command ```grunt sync```
Will execute a set of task in this order:
* ```browserSync``` for the ```inlined``` directory, for all the ```html``` files.
* ```inlinecss``` will put all the styles in inline mode, for ```index.html``` and will output the inlined file in the ```inline``` directory.
* ```watch``` will watch changes in the ```*.html``` files in the root and the ```*.sass``` files in sass directory.

#### command ```grunt mailgun```
Will execute the mailgun task whit the config object, declared at the start of ```Gruntfile.js```. The config object has 4 properties:
* key:  A [mailgun api key](http://documentation.mailgun.com/quickstart.html#authentication)
* sender: The 'from' name and adress.
* recipient: One or more email addresses to send your messages to. Multiple addresses should be entered as an array.
* subject: The subject of your email.
* body (optional): If the src field is empty, mailgun-task will deliver a plain-text message whit the body content.

This task will be useful whit [Litmus](https://litmus.com/) for test emails in multiple email clients. Litmus [Litmus](https://litmus.com/) a fake email address for testing purpose. If we send the email whit mailgun to that fake email address, will be testing our html markup.

#### command ```grunt sass```
Will execute the sass compiler for all the files ```*.sass``` in the css directory.

### URL to run the project
When you run ```grunt sync``` command, the task ```browserSync``` will deploy a local server in port 3000.

The url is ```http://localhost:3000``` and the file deployed is ```inlined/index.html```.

## Contributors
If you have any doubt about this project, here is a list of people who are or were working on it.

+ Santiago Barchetta (dudesl@gmail.com)
