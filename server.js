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
-avatar ---> عرض صورتك 
-server ---> معلومات السيرفر
-lock ---> قفل الشات 
-unlock ---> فتح الشات 
-clear ---> مسح الشات 

 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
		message.channel.send("done in your dm")
    }
});
/////////////////
//// فك الباند ////// 

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
client.on("message", msg => {
  if(msg.content === '-' + "id") {
      const embed = new Discord.MessageEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
      msg.channel.send({embed: embed})
  }
});

/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on('message', function(msg) {
    if(msg.content.startsWith ('-server')) {
      if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
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

///////////////////////////////////////////
///////////////////////////// التوب 

////////////////////////////////////////////////////
///////////


//////////////////////////////////////////////////
////////// فك الميووت /////////// 

client.login(process.env.BOT_TOKEN);



