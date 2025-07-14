module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস রি'সু আমাকে ক্ষমা করে দেন \n ${name} আবাল টাকে এড দিতে পারলাম না! সালায় আমাকে বল্ক করছে অথবা অর আইডি ল্ক করা !🥺❤️‍🩹 \n\n ──────·····✦·····──── \n 𝐒𝐔𝐌𝐔 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ❥ ʙᴏᴛ ᴏᴡɴᴇʀ☙ʀɪꜱᴜ☙ `, event.threadID)
   } else api.sendMessage(`তোর সাহস'ত  কম না, ${name} তুই বস রি'সুর পারমিশন! \n ছাড়া লিভ  নিছোছ তাই তোকে আবার এড দিলাম!😾! \nsala। \n\n ── ·······✦·······──── \n 𝐒𝐔𝐌𝐔 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ❥ ʙᴏᴛ ᴏᴡɴᴇʀ☙ʀɪꜱᴜ☙ `, event.threadID);
  })
 }
}
