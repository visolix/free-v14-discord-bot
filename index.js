import { Client, Guild, ActivityType, GatewayIntentBits  } from "discord.js";
import { EmbedBuilder } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";


const loginkey = 'Botunuzun Tokeni'
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Team Visolix | Software and Design Services`) //Botun oynuyor kısımını burdan değiştire bilirsiniz.
    client.user.setStatus(`dnd`); // Botunuzun durumu DND = Rahatsız Etmeyin - idle = Boşta - Online = çevrimiçi
    client.channels.cache.get('Kanal ID').send({content: `*The Visolix Bot Online...*`}) // Bot aktif olduğu zaman belirli kanal istediğiniz mesajı yazar.
  });




  // Botu Sesli Kanalda Tutma

  client.on('ready', () => {
  let channel = client.channels.cache.get("Sesli Kanal ID") 
  

      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id, 
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator 
  });
})


// Ping yazınca otomatik olarak botun anlık ping durumunu gösterir.
client.on('messageCreate', message => {
  if (message.content === 'ping') {  
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});




client.login(loginkey);