#!/usr/bin/env node

var program = require("commander");

// Program CLI description
program
    .version('0.0.1')
    .usage('<keyword>');

// Availabel Commands: SEND, SERVER
program
    .command('send')
    .description('send a email throug mailgun api. Config needed')
    .option("-f, --from <from>", "From email")
    .option("-t, --to <to>", "To email")
    .option("-s, --subject <subject>", "A subject for your email")
    .option("-c, --conf <conf_file>", "A file whit configuration for send email")
    .option("-k, --key <api_key>", "A api-key from Mailgun. Needed to use the mailgun api")
    .option("-d, --domain <sandbox_domain>", "The domain of the Mailgun Sandbox")

if(!program.args.length){
  program.help();
} else {
  console.log('Keywords: ' + program.args);
}

// excec the program CLI
program.parse(process.argv);
