
const ytdl = require('ytdl-core');
const {
	AudioPlayerStatus,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	joinVoiceChannel,
} = require('@discordjs/voice');

const ytsr = require('ytsr');

    
module.exports=async function(msg,client,tokens){
    
    //const audioPlayer = client.createAudioPlayer();
  
    const connection = joinVoiceChannel({
        channelId: msg.member.voice.channel.id,
        guildId: msg.guild.id,
        adapterCreator: msg.guild.voiceAdapterCreator,
    });
    const options = {      
      limit:3
    }
    const searchResults = await ytsr(`${tokens}`, options);
 
    console.log()

const stream = await ytdl(`${searchResults.items.at(0).url}`, { filter: 'audioonly' });
const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
const player = createAudioPlayer();


player.play(resource);
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => connection.destroy());



  //  audioPlayer.play(audioResource);
    
  

//    const connection1 = getVoiceConnection(808436585883369487);
 //   console.log(connection);
 /*   const channel = client.channels.cache.get("808436585883369487");
    if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });*/
}