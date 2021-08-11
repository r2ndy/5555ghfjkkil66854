const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

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
-lock ---> قفل الشات 
-unlock ---> فتح الشات 
-clear ---> مسح الشات 
-invites ---> عدد دعواتك في السيرفر 
-avatar ---> عرض صورة بروفايلك 
-role ---> اعطاء رتبة 

`);

///by r2ndy /////تقدر تضيف اكثر اوامر

        message.author.send(embed);
		message.channel.send("done in your dm")
    }
});
////////////// عدد الدعوات ////// 
client.on('message', msg => {
  if (msg.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
    let guild = msg.guild
    var codes = [""]
    var nul = 0

    guild.fetchInvites()
      .then(invites => {
        invites.forEach(invite => {
          if (invite.inviter === msg.author) {
            nul += invite.uses
            codes.push(`discord.gg/${invite.code}`)
          }

        })
        if (nul > 0) {
          const e = new Discord.MessageEmbed()
            .addField(`${msg.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
            .setColor('#36393e')
          msg.channel.send(e)
        } else {
          var embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .addField(`${msg.author.username}`, `لم تقم بدعوة أي شخص للسيرفر`)

          msg.channel.send({ embed: embed });
          return;
        }
      })
  }
}) 


////// افتااار //// 

 client.on("message", hosam => {
  if(hosam.content.startsWith(prefix+"avatar")) {
    if(hosam.channel.type=="dm") return hosam.channel.send(`❌ - **You can't use this command in dm**`);
    let args = hosam.content.split(" ").slice(1).join(" ");
    if(args == "server") {
      if(hosam.guild.icon == null) return hosam.channel.send(`❌ - **No server avatar`);
      let ser = new Discord.MessageEmbed()
      .setAuthor(hosam.guild.name,hosam.guild.iconURL({dynamic:true}))
      .setImage(hosam.guild.iconURL({size:2048 , dynamic:true}))
      .setDescription(`**[Avatar link](${hosam.guild.iconURL({dynamic:true})})**`)
      .setFooter(`Requested by ${hosam.author.tag}`,hosam.author.displayAvatarURL({dynamic:true}));
      hosam.channel.send(ser)
    } else {
      let user = hosam.mentions.users.first() || client.users.cache.get(args) || hosam.author;
      let member = new Discord.MessageEmbed()
      .setAuthor(user.tag,user.displayAvatarURL({dynamic:true}))
      .setImage(user.displayAvatarURL({size:2048 , dynamic:true}))
      .setDescription(`**[Avatar link](${user.displayAvatarURL({dynamic:true})})**`)
      .setFooter(`Requested by ${hosam.author.tag}`,hosam.author.displayAvatarURL({dynamic:true}));
      hosam.channel.send(member)
    }
  }
}) 



/////////////////////////////////////////////////////
//////// طرد  
client.on('message', msg =>{
    if(msg.content === prefix +"bot"){
    const embed = new Discord.MessageEmbed()
    .setColor("blue")
    .setTitle(` ${client.user.username} `)
    .addField('``My Name``' , ` ${client.user.tag}` , true)
    .addField('``servers``', ` ${client.guilds.cache.size} `, true)
    .addField('``channels``', ` ${client.channels.cache.size} `, true)
    .addField('``Users``', ` ${client.users.cache.size} `, true)
    .addField('``My ID``' , ` ${client.user.id} ` , true)
    .addField('``Dev By``' , `<@749064659457409106>` , true)
    msg.channel.send(embed);
    }
    });


/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", message =>{
    var guild = message.guild;
if(message.guild.channel) return;
if(message.content.startsWith(prefix + "server")){
    let embed = new Discord.RichEmbed()
    .setTitle(`${guild}`)
    .addField("🆔 ID Server", `${message.guild.id}`)
    .addField("📆 Created At",`${moment(guild.createdTimestamp).format('D/M/YYYY H:ss')} \n${moment(guild.createdTimestamp).fromNow()}`)
    .addField(":crown: Owned By", `${guild.owner}`)
    .addField(`👥** Members ${guild.memberCount}**`,`**${message.guild.members.filter
(m=>m.presence.status === "online").size}** Online`)
.addField(`:speech_balloon: Channels **(${guild.channels.size})**`, `**${guild.channels.filter(c =>c.type === "text").size}** Text | **${guild.channels.filter(c=>c.type === "voice").size}** Voice |** ${guild.channels.filter(c=>c.type ==="category").size}** Cateogory`)
.addField(`**:earth_africa: Others **`,`**Region : ** ${guild.region} \n ** Verification Level : **${guild.verificationLevel}`)
.addField(":closed_lock_with_key: Roles ",`**(${guild.roles.size})**`)
    message.channel.send(embed);
}
})

///////////////////////////////////
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
  client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`:x: **I Need Permissions !!**`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**✅ Changed roles for ${user.user}  removed ${role1.name}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**✅ Changed roles for ${user.user} ${role1.name}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
}); 

///////////////////////////////////////////
///////////////////////////// ريستارت للبوت  
const  d= ["749064659457409106"]
client.on("message", message => {
  if (message.content.startsWith(prefix + "restart")) {
    if (!d.includes(message.author.id)) return message.reply("You are not my owner.");
      message.channel.send("Done Restarted").then(() => {
        client.destroy();
        client.login(config.token);
      });
    }
 
});
////////////////////////////////////////////////////
/////////// كود دعوة شخص بواسطة
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "vectoria");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});

//////////////////////////////////////////////////
/////// كود الايدي ////////////// 

client.on('message',async message => {
  if(message.content.startsWith("#voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('**تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
/////////////////
client.login(process.env.BOT_TOKEN);



