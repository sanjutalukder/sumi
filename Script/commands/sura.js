/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "sura",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "প্রিয় মুসলিম ভাই ও বন তুমাদের জন্য সূরা নিয়ে আসলাম",
  commandCategory: "M H BD",
  usages: "sura",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nপ্রিয় মুসলিম |ভাই ও বন| সূরা টি শুনো তুমার প্রান জুরিয়ে যাবে \n\n ইনশাআল্লাহ ❤️🌸 \n\n 𝐌𝐮𝐬𝐥𝐢𝐦 𝐇𝐚𝐤𝐜𝐞𝐫 𝐁𝐃\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?export=download&id=16zQ_3jbg1XJr9Ck7LRLYo8dEd2WpqPBx",

"https://drive.google.com/uc?id=1NLbrtpig80X1_NTlRHmeKG7ZQPtTmdTJ",

"https://drive.google.com/uc?id=1NFnzqXl8aC_9tpngoKcfeWEyyT3DNdGW",

"https://drive.google.com/uc?id=1NAkALvze0fkzkRvzDSTQvt-nqCIqqQBv",

"https://drive.google.com/uc?id=1NFrEbcdP3CnZ1ZB1KKDCDa6gpV5x4W4t",

"https://drive.google.com/uc?id=1MpowaaCScbWY-vEGtfLX5xPzKCQineHl",

"https://drive.google.com/uc?id=1N3bT2YWhp92xABdf851LDuELwwc1b92T"];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/26.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/26.mp3"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/26.mp3")).on("close",() => callback());
   };
