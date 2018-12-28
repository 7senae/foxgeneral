
const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

console.log("--------------------");
console.log("  FOX BOT Online ");
console.log("--------------------");


client.on('ready', () => {
    console.log('I am ready!');
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Fox Bot- Scrpit By ┃ FoxBot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By TEAM FoxBot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help || $inv `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', msg => {
     if (msg.content === "$info") {
         if(!msg.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(client.user.username,client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle("**_+_+_INFO_+_+_**")
  .addField("**Ranks: **" , `${msg.guild.roles.size}`,true)
  .addField("**Members: **" , `${msg.guild.memberCount}`,true)
  .addField("**Members online**",`${msg.guild.members.filter(m=>m.presence.status == 'online').size}`,true)
  .addField("**Rooms Text**",`${msg.guild.channels.filter(m => m.type === 'text').size}`,true)
  .addField("**Rooms Voice**",`${msg.guild.channels.filter(m => m.type === 'voice').size}`,true)
  .addField("**Owner Ship:**" , `${msg.guild.owner}`,true)
  .addField("**id server:**" , `${msg.guild.id}`,true)
  .setImage('FoxBot' , "https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
  msg.channel.sendEmbed(embed);
    }
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$ont")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`اخي يرجا تسوي رتبه \`Support Team\` اذا انتهمن اداره تجيك دي.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `سوف يتم مساعدتك  **Support Team** اتمنه يفيدك الدعم .`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$offt")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`تبي حذف الروم اكد \`$confirm\`. لديك 10 ثواني`);
 
       message.channel.send(`تبي حذف الروم اكد \`$confirm\`. لديك 10 ثواني .`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return; /// FoxBot
 if(message.content === (prefix + "TimeBot")) { /// FoxBot
 if (!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) { ///لا تعدل اي شي 

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++; /// FoxBot
            uptime -= 3.6e+6; /// FoxBot

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
 });


/////////////////////////////////////////////////////////

//No Sharing Discord Servers
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});

  
/////////////////////////////////////////////////////////


  client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(` **
	  
	         Please Chose: 
			 
─═════════ {✯FoxBots✯} ════════════─
	  __~~FoxBOTS~~__ By: TEAM FOXS
╔[❖════════════❖]╗
             Prefix = ' $ '
╚[❖════════════❖]╝
╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝
❖ $avatar ➾ صوره حقك
❖ $ping ➾ بينق البوت
❖ $info ➾ انفو كامل
❖ $bot ➾ عن البوت
❖ $server ➾  معلومات عن السيرفر
❖ $member ➾ تشوف الميمبير
❖ $inv ➾ bot invite link
❖ $support ➾ server support link
❖ $Time ➾ وقت البوت
❖ $ont ➾ to make ticket / or $offt to close it 
❖ $servers ➾ تشوف جميع البوتات
❖ $roles ➾ $roles @{Name} Rank  
❖ $setT ➾  انشاء روم صوتي فيه وقت
❖ $setC ➾ انشاء روم صوتي فيه عدد اعضاء
❖ $setV ➾انشاء روم صوتي فيه عدد اشخاص في رومات الصوتيه
❖ $setD ➾ انشاء روم صوتي فيه تاريخ
❖ $Onc ➾ فتح الشات
❖ $Offc ➾ اغلاق الشات
❖ $ct ➾ انشاء روم كتابي
❖ $cv ➾ انشاء روم صوتي
❖ $date ➾ تاريخ 

❖❖❖❖❖❖❖❖❖ FOX GENERAL ❖❖❖❖❖❖❖❖❖
تبي تفعل الولكم  سوي شات اسمه 
Wlc
والبوت محمي في مانع جحفله 
و مانع نشر روابط 
وتبي تساعدنا في نشر البوت
رابط موجود  وسيرفر الدعم
ويوجد نشر في مقابل بسيط  في البوت 
==================================================================
Server support: https://discord.gg/REKnChB
==================================================================
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=528122045758832640&permissions=8&scope=bot
==================================================================
─═════════ {✯FoxBots✯} ════════════─
	  ** `)
   message.channel.sendEmbed(embed)
    
   }
   });
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


//Servers & Ping
client.on('message', message => {
     if (message.content === "$servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` FoxGeneral
 .`, 'https://cdn.discordapp.com/avatars/460797113643696129/73410b8835141d12fc8b48cdb27986f0.png?size=2048')

  message.channel.sendEmbed(embed);
    }
});
/////////////////////////////////////////////////////////



//Roles
client.on('message', message => {
    if (message.content === "$roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content.startsWith("$id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('Red')
            .setTitle('``INFO Fox General`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});

 

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر نورتنا وشرفتنا في دخول طلعتك الجميله`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Fox Bot', 'https://cdn.discordapp.com/avatars/460797113643696129/73410b8835141d12fc8b48cdb27986f0.png?size=2048')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء... ليش ياربي ليش ليش ياربي ليش`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Fox Bot`, 'https://cdn.discordapp.com/avatars/460797113643696129/73410b8835141d12fc8b48cdb27986f0.png?size=2048')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('>bcall')){
 if (message.author.id !== '414477438869831682') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '414477438869831682') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Member'));
});

  
   
 
client.on('message',async message => {
    if(message.content.startsWith(prefix + "setV")) {
    if(message.author.bot) return;
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setC")) {
    if(message.author.bot) return;
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات ال��افية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members : [ ${message.guild.members.size} ]`)
      },1000);
    });
    }
  });

    
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setT")) {
    if(message.author.bot) return;
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });


  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setD")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(message.author.bot) return;
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });





client.on('message', message => {
var prefix = "$";
      if(message.content === prefix + "Offc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك بيرم ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم اخفاء الشات ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "$";
      if(message.content === prefix + "Onc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('تم فتح الشات  ')
 }
});
 






client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});






// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '$support') {
    msg.reply('السيرفر للمساعده,soon');
  }
});


    client.on('message', message => {
     if (message.content === "$id2") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`FoxBot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith()) return;

  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "$say") {
   message.channel.sendMessage(args.join("  "))
  }
  });

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('help');
  	}
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send(':heart: هلا فيك :heart:');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$by') {
              message.channel.send('***:heart:*** **Server By Team FoxBot** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hla') {
              message.channel.send('**:heart: hla fek :heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**:heart: FoxBot شكراً لانك ضفت بوت :heart: *`)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "$"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$bot') {
              message.channel.send('***:heart:*** **Bot By Team FoxBot** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Arab') {
              message.channel.send('**:heart: حالين مشغولين بس نشوفك نرد:heart:** ');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ') {
              message.channel.send('**:heart: وعليكم السلام حبي:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باي') {
              message.channel.send('**:heart: لله معاك :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send('**:heart: الله معاك :heart:** ');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'brb') {
              message.channel.send('**:heart: الله معاك :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('**:heart: Welcome :heart:**');
              message.channel.sendFile("");
               

            }
});



client.on('message', message => {
    if (message.content.startsWith("$bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Fox General`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ $ ]` , true)
			      .addField('``My Language``' , `[ Java Skript ]` , true)
			      .setFooter('By | KillerFox and Ashraf ')
    })
}
});

	

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});

client.on('message', message => {
    if (message.content.startsWith("$تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓ ] 50%').setColor(0xFF0000)})
             }, 3000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 75%').setColor(0xFF0000)})
             }, 4000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 5000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 6000)
              setTimeout(function() {
               m.delete()
           }, 7000)
             setTimeout(function() {
               message.channel.send('`[${member}]` تم تهكير بنجاح ')
           }, 8000)
           });
         }
 });



client.on('message', message => {
        if (message.content === "$inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: click `)
        .setURL(` https://discordapp.com/api/oauth2/authorize?client_id=460797113643696129&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });

client.on("message", (message) => {
if (message.content.startsWith("$ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});





client.on('message', message => {
    if (message.content == "$$$$quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});


client.login(process.env.BOT_TOKEN);
