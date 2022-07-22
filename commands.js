
const song = require('./commands/song.js');
const text = require('./commands/text.js');

const commands = {
    play:song,
    text:text
}


module.exports = function(msg,client)
{
 
        
 console.log(msg.content);

    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if(command.charAt(0)==='"')
    {
        command =command.substring(1)
        commands[command](msg,client,tokens);
        console.log(command)
    }
    
   
}
