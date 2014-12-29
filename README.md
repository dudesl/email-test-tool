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

+ Whit the command ```grunt``` will execute the ```watch``` task for index.html

+ Whit the command ```grunt sync``` will execute a set of task in this order:
  ++ ```browserSync``` for the ```inlined``` directory, for all the ```html``` files.
  ++ ```inlinecss``` will put all the styles in inline mode, for ```index.html``` and will output the inlined file in the ```inline``` directory.
  ++ ```watch``` will watch changes in the ```*.html``` files in the root and the ```*.sass``` files in sass directory.

### URL to run the project
When you run ```grunt sync``` command, the task ```browserSync``` will deploy a local server in port 3000.

The url is ```http://localhost:3000``` and the file deployed is ```inlined/index.html```.

## Contributors
If you have any doubt about this project, here is a list of people who are or were working on it.

+ Santiago Barchetta (dudesl@gmail.com)
