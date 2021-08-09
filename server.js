const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#";

/////
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~randy online ~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  randy " ] servers! [ " ${client.guilds.cache.size} " ]`); 

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
#role ---> اضافة رول 
#top ---> التفاعل 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
		message.channel.send("done in your dm")
    }
});

////// افتااار //// 

 client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL()({size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({size: 4096, dynamic: true });
       
       
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
//////// يوزر 

client.on('message', message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men
    } else {
      heg = message.author
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned
    } else {
      h = message.member
    }
    moment.locale('ar-TN');
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(`RANDOM`)
      .addField('**JOINED DISCORD :**', `${moment(heg.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``, true)
      .addField('**JOINED SERVER :**', `${moment(h.joinedAt).format('YYYY/M/D')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
      .setThumbnail(heg.avatarURL);
    message.channel.send(id)
  }
});

/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", function(msg) {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL())
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
        `**[ ${msg.guild.roles.cache.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** Member  :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )

      .addField(
        ":pencil:** Text channels  :**",
        `**[ ${msg.guild.channels.cache.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:**  voice channels :**",
        `**[ ${msg.guild.channels.cache.filter(m => m.type === "voice").size} ]**`,
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
client.on('message', message =>{
  if(message.content.startsWith(prefix +"lock")) { 

    var embed = new Discord.MessageEmbed()
    .setDescription(`**You Have 20s To Type The Password**`)
    message.channel.send(embed)

    message.channel.awaitMessages(response => response.content === '1234', {//تقدر تغير الباسور
      max: 1,
      time: 200000,
      errors: ['time'],    
    })
  
    .then(() => {
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return 
      message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');


  let everyone = message.guild.roles.cache.find(message => message.name === '@everyone');
          message.channel.createOverwrite(everyone, {
                 SEND_MESSAGES: false
              })
              .then((collected) => {
                const embed = new Discord.MessageEmbed()
                  .setColor("#48ff00")
                  .setDescription(`** تـم قـفل الـروم 🔒**`)
                  .setFooter(`By ${message.author.username}`)
                  message.channel.send(embed)            
                  console.log(collected.author)
 });
});
}
 });
   client.on('message', message =>{
if(message.content === prefix +"unlock"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(message => message.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               SEND_MESSAGES: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("#48ff00")
                .setDescription(`** تـم فتـح الـروم 🔓**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
})
}
});

//////////////////////////////////////////////////////
///////// مسح الشات //////
client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear" || command == "مسح") {
        message.delete({ timeout: 0 })
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms ❌**`);
        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms ❌**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.channel.send(
                    (`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});

/////////////////////////////////////////
//////// 


////////////////////
////////رول /////////
client.on('message', message => {
 
    if (message.content.startsWith(prefix + 'role')) {
        var args = message.content.split(' ');
        var mention = message.mentions.members.first();
        var user = message.guild.member(mention);
        var role = message.guild.roles.cache.filter(r => r.name === args[3]).first() || message.mentions.roles.first() || message.guild.roles.cache.filter(r => r.id === args[3]).first()
        if (message.author.bot) return;
        if (args[1] === "add") {
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
            if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
            if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
            user.roles.add(role).then((m) => {
                setTimeout(() => {
                    m.delete()
                }, 1000 * 60 * 10)
                return message.channel.send('1')
            })
        } else if (args[1] === "remove") {
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
            if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
            if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
            user.roles.remove(role).then((m) => {
                if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
                if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
                setTimeout(() => {
                    m.delete()
                }, 1000 * 60 * 10)
                return message.channel.send('2')
            })
        } else if (args[1] === "all") {
            message.guild.members.cache.forEach(m => {
                const user = message.guild.member(m)
                user.roles.add(role)
            })
            return message.channel.send('3 ');
        }
    }
});

///////////////////////////////////////////
///////////////////////////// التوب 
client.on("message", async function(message) {

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
    "text": parseInt(Math.random() * 10),
    "voice": 1,
    "msgs": 0,
    "id": message.author.id
  }
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(Math.random() * 4);
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function(user) {
      if (user.text > 0) {
        return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
      }
    }).join("\n")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
      .setColor(`RED`)
      .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **\`${prefix}top text\`**`, true)
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function(user) {
        if (user.voice > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
        }
      }).join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
        .setColor(`RED`)
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles:\`${prefix}top voice\``, true)

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
      message.channel.send({
        embed: embed
      });


      //  break;
      // if (!message.content.startsWith(prefix)) return;
    } else {
      if (message.content.startsWith(prefix + "top")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function(user) {
          if (user.text > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
          }
        }).join("\n")}`;
        num = 0;
        var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
          }
        }).join("\n")}`;
        var embed = new Discord.RichEmbed()
          .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
          .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
          .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor(`RED`);
        message.channel.send({
          embed: embed


        });



      }
    }
  }

});

client.login(process.env.BOT_TOKEN);



