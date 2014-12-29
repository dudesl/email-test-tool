module.exports = {
  /**
    For each task who need config, append a new property whit the name of the task
    and the method that return a config object
  **/

  /** Config for Mailgun **/
  mailgun : {

    getConfig : function(){
      return {
        key: 'your-api-key',
        sender: 'your-email',
        recipient: 'another-email',
        subject: 'subject'
      }
    }
  }
}
