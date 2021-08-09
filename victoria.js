const Discord = require('discord.js');
const Util = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "#";

/////
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~randy online ~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  randy " ] servers! [ " ${client.guilds.size} " ]`); 

});

client.on('message', message => {

    if (message.content === prefix + 'help') {
        var embed = new Discord.MessageEmbed()
            .setAuthor(
                `${client.user.username} `,
                `${client.user.displayAvatarURL()}`
            )
            .setTimestamp()
            .setColor(`${message.member.displayHexColor}`)
            .setTitle(`${client.user.username}`)
            .setFooter(
                `Requested By ${message.author.tag}`,
                `${message.author.displayAvatarURL({ dynamic: true })} `
            )
            .setThumbnail(client.user.displayAvatarURL())
.setDescription(`
\`${prefix}الاوامر\`
////////////////////
#avatar ---> عرض صورتك 
#user ---> معلومات حسابك
#server ---> معلومات السيرفر
#lock ---> قفل الشات 
#unlock ---> فتح الشات 
#clear ---> مسح الشات 
#list ban ---> الاعضاء المبندين 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
    }
});

////// افتااار //// 

 client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL({ size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
       
       
                   const embed = new Discord.MessageEmbed()
                       .setTitle(`${user.username} avatar`)
                       .setDescription(`[Avatar URL of **${user.username}**](${avatar})`)
                       .setColor('RANDOM')
                       .setImage(avatar)
                   message.channel.send(embed)
               }
       }
  })
/////////////////////////////////////////////////////
//////// يوزر /////
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-TN");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField(
        " Joined Discord At : ",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        " Joined Server At : ",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(
        `${message.author.username}`,
        "https://cdn.discordapp.com/attachments/808393932957810779/808977834780786728/PicsArt_02-08-01.20.27.jpg"
      )
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});

/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", function(msg) {
if (!prefixes[msg.guild.id]) prefixes[msg.guild.id] = {
        prefix: `#`,
    };
    var prefix = prefixes[msg.guild.id].prefix;
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .addField(
        ":globe_with_meridians: **Server name  : **",
        `**[ ${msg.guild.name} ]**`,
        true
      )
      .addField(
        ":earth_africa: ** server location  :**",
        `**[ ${msg.guild.region} ]**`,
        true
      )
      .addField(
        ":military_medal:** roles :**",
        `**[ ${msg.guild.roles.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** Member  :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )

      .addField(
        ":pencil:** Text channels  :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:**  voice channels :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "voice").size} ]**`,
        true
      )
      .addField(
        ":crown:** server owner  :**",
        `[ *${msg.guild.owner}* ]`,
        true
      )
      .addField(":id:** server id  :**", `**[ ${msg.guild.id} ]**`, true)
      .addField(
        ":date:** createdAt : **",
        msg.guild.createdAt.toLocaleString()
      );
    msg.channel.send({ embed: embed });
  }
          
});

/////////////////////////////////////////////////////////
///////// فقل و فتح الشات ////////////
client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **you not have permission  **");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**done chat closed✅ **");
      });
  }

  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**  you don't have permission**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**done chat opened  ✅**");
      });
  }
});
//////////////////////////////////////////////////////
///////// مسح الشات //////
client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (message.author.bot) return;
  if (
    message.content.startsWith(prefix + "clear") ||
    message.content.startsWith(prefix + ".")
  ) {
    if (!message.channel.guild)
      return message.reply("⛔ | This Command For Servers Only!");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
  
        return message.channel.send(
          "⛔ | You dont have **MANAGE_MESSAGES** Permission!"
        );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
  
        return message.channel.send(
          "⛔ | I dont have **MANAGE_MESSAGES** Permission!"
        );
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 99)
      return message
        .reply("**🛑 || Scans be les than 100.**")
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";

      message.channel
        .fetchMessages({ limit: messagecount + 1 })
        .then(messages => message.channel.bulkDelete(messages));
  
      message.channel
        .send(`\`${args}\` : __The number of messages deleted __ `)
        .then(messages => messages.delete(5000));
  }
});
/////////////////////////////////////////
//////// الاعضاء المبندين ///////
client.on('message', message => {
  if (message.content.startsWith(prefix + "list ban")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`> :small_orange_diamond: **Server Ban List :** ${bans.size}`))
      .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);


