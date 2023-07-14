const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6285175023755", "17603741664"];// Nomor OWNERLu
global.author = "Customer Support";// Nama Mu
global.packname = "Rusdi Bot";// NamaBot Mu
global.sessionName = "session";// Folder Session
global.versionbot = "1.0.0";// Versi Bot
global.mylogo = ["https://telegra.ph/file/75a3b01da9934ead5890e.jpg","https://telegra.ph/file/38e0c6fcaa71551ed6407.jpg","https://telegra.ph/file/551ccaa299c0b37e80b59.jpg","https://telegra.ph/file/4feacc10e29b71072bc91.jpg","https://telegra.ph/file/05e2ab0424961897838e0.jpg","https://telegra.ph/file/8d25c175697d2dc40107a.jpg","https://telegra.ph/file/a0eab20252073b35a332f.jpg"]
global.Recode = {
   name: "this.ilham_",// Isi Nama lu
   bot: "Rusdi Bot",// Ini Nama bot lu
};
global.aikey = "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"
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
done: 'Done!',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});