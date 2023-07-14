/*

* Base bot md by KazeDevID
* Jika ingin recode / upload silahkan asalkan kasih kredit
* Cukup nambahin nama kamu aja
* Dilarang keras Menjual sc ini

*/
process.on("uncaughtException", console.error);
process.on('unhandledRejection', console.error);
require("./connect/config")
const {
  default: Connecting,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  jidDecode,
  proto,
  getContentType,
  downloadContentFromMessage,
} = require("@adiwajshing/baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const colors = require('colors')
const lolcatjs = require('lolcatjs')
const FileType = require('file-type')
const figlet = require("figlet");
const path = require("path");
const _ = require("lodash");
//require("http").createServer((_, res) => res.end("BOT AKTIF!")).listen(8080)
const PhoneNumber = require("awesome-phonenumber");
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }


const store = require('./store')
fs.existsSync(`./${sessionName}/baileys_store.json`) && store?.readFromFile(`./${sessionName}/baileys_store.json`)
setInterval(() => {
	store?.writeToFile(`./${sessionName}/baileys_store.json`)
}, 10_000)

const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

Spc = '            '
Spc2 = '                   '
Spc3 = '     '
async function startH() {
  const { state, saveCreds } = await useMultiFileAuthState(sessionName);
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
console.log(
    color(
      figlet.textSync("Wabot - Ai", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "cyan"
    )
  );
 const client = Connecting({
  logger: pino({ level: "silent" }),
  printQRInTerminal: true, // display QR in terminal
  qrTimeout: 30000,
  getMessage: async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg.message || undefined;
    }
    return {
      conversation: 'hello'
    };
  },
  markOnlineOnConnect: false,
  browser: ['@this.ilham_ / Rusdi BOT', 'Safari', '1.0.0'],
  // To see the latest version: https://web.whatsapp.com/check-update?version=1&platform=web
  version,
  auth: state,
});

  store.bind(client.ev);

client.ws.on('CB:call', async call => {
  call.id = call.content[0].attrs['call-id']
  call.from = call.content[0].attrs['call-creator']
  if (call.content[0].tag == 'offer') {
    await client.rejectCall(call.id, call.from)
}})

client.ev.on('messages.upsert', async (chatUpdate) => {
  try {
    const mek = chatUpdate.messages[0];
    if (!mek.message) return;
    mek.message = Object.keys(mek.message)[0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
    if (!client.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
    if (['BAE5', 'B24E'].some((prefix) => mek.key.id.startsWith(prefix))) return;
    const m = smsg(client, mek, store);
    require("./connect/hamz")(client, m, chatUpdate, store);
  } catch (err) {
    console.log(err);
  }
});

      
  client.ev.on('messages.upsert', async message => {
  message = message.messages[0]
  client.readMessages([message.key])
})

  // Handle error
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });

  // Setting
  client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid, { text: text, ...options }, { quoted })
  client.sendTextWithMentions = async (jid, text, quoted, options = {}) => client.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
client.getFile = async (PATH, save) => {
  let res;
  let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split(',')[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
  // if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')

  let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
  };
  let filename = path.join(__filename, '../tmp/' + (new Date() * 1) + '.' + type.ext);

  if (data && save) {
    await fs.promises.writeFile(filename, data);
  }

  const getSizeMedia = async (data) => {
    // Implement your logic to get the size of the media file
    // For example:
    return data.length;
  };

  const result = {
    res,
    filename,
    size: await getSizeMedia(data),
    ...type,
    data
  };

  result.deleteFile = async () => {
    if (fs.existsSync(filename)) {
      await fs.promises.unlink(filename);
      console.log('File deleted:', filename);
    }
  };

  return result;
};
  client.getName = (jid, withoutContact  = false) => {
        id = client.decodeJid(jid)
        withoutContact = client.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = client.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === client.decodeJid(client.user.id) ?
            client.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
	
    client.copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessageV2.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessageV2.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessageV2.message
			}
		}

		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await client.relayMessage(jid, waMessage.message, {
			messageId: waMessage.key.id
		})
		return waMessage
	}
	
    client.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            let name = await client.getName(`${i}@s.whatsapp.net`) || 'Tidak Diketahui'
            list.push({
                displayName: name,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nFN:${name}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:tendosweat@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/this.ilham_\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        client.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts, contextInfo: {
            externalAdReply: {
                title: `@this.ilham_`,
                body: "",
                thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
                sourceUrl: 'https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR',
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        } }, { quoted })
    }
  client.sendFile = async (jid, buffer, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let trueFileName = filename || 'file';
  let filePath = path.join('./tmp', trueFileName);

  // Save buffer to file
  await fs.promises.writeFile(filePath, buffer);

  // Delete file after use
  process.on('exit', async () => {
    await fs.promises.unlink(filePath);
  });

  let type = await FileType.fromBuffer(buffer);
  let mimetype = type ? type.mime : 'application/octet-stream';

  let opt = { filename: trueFileName };
  if (quoted) opt.quoted = quoted;

  let mtype = '';
  let convert;

  if (/webp/.test(mimetype) || (/image/.test(mimetype) && options.asSticker)) {
    mtype = 'sticker';
  } else if (/image/.test(mimetype) || (/webp/.test(mimetype) && options.asImage)) {
    mtype = 'image';
  } else if (/video/.test(mimetype)) {
    mtype = 'video';
  } else if (/audio/.test(mimetype)) {
    convert = await (ptt ? toPTT : toAudio)(buffer, type.ext);
    buffer = convert.data;
    trueFileName = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else {
    mtype = 'document';
  }

  if (options.asDocument) {
    mtype = 'document';
  }

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = {
    ...options,
    caption,
    ptt,
    [mtype]: { url: filePath },
    mimetype
  };

  let m;
  try {
    m = await client.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    console.error(e);
    m = null;
  } finally {
    if (!m) {
      m = await client.sendMessage(jid, { ...message, [mtype]: buffer }, { ...opt, ...options });
    }
    return m;
  }
  await fs.unlink(filePath)
};
client.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
    try {
        let mime = '';
        let res = await axios.head(url)
        mime = res.headers['content-type']
        if (mime.split("/")[0] === "image") {
            return client.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
        }
        else if (mime.split("/")[0] === "video") {
            return client.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: mime, ...options }, { quoted: quoted, ...options })
        }
        else if (mime.split("/")[0] === "audio") {
            return client.sendMessage(jid, { audio: { url: url }, caption: caption, mimetype: mime, ...options }, { quoted: quoted, ...options })
        }
        else if (mime === "application/pdf") {
            return client.sendMessage(jid, { document: await getBuffer(url), mimetype: mime, filename: `${Date.now()}.pdf`, caption: caption, ...options }, { quoted: quoted, ...options })
        }
        else if (mime.split("/")[1] === "gif") {
            return client.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
        }
        else {
            return client.sendMessage(jid, { document: await getBuffer(url), mimetype:mime , filename:`${Date.now()}.${mime.split('/')[1]}`,caption:caption,...options}, {quoted:quoted,...options})
        }
    }
    catch (err) {
        console.error(err)
        return false
    }
}
  client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
  let quoted = message.msg ? message.msg : message;
  let mime = (message.msg || message).mimetype || '';
  let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
  const stream = await downloadContentFromMessage(quoted, messageType);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  let type = await FileType.fromBuffer(buffer);
  let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
  let filePath = path.join('./tmp', trueFileName);
  // save to file
  await fs.promises.writeFile(filePath, buffer);
  // delete file after use
  process.on('exit', async () => {
    await fs.promises.unlink(filePath);
  });
  return filePath;
};
  client.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };

  client.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = client.decodeJid(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });
client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		fs.unlinkSync(buffer)
        return buffer
    }

  client.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		fs.unlinkSync(buffer)
        return buffer
    }
  client.getName = (jid, withoutContact = false) => {
    id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === client.decodeJid(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.setStatus = (status) => {
    client.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  client.public = true;

  client.serializeM = (m) => smsg(client, m, store);
  client.ev.on("connection.update", async (update) => {
  const { connection, lastDisconnect } = update;

  if (connection === "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      console.log("Bad Session File, Please Delete Session and Scan Again");
      startH();
    } else if (reason === DisconnectReason.connectionClosed) {
      console.log("Connection closed, reconnecting....");
      startH();
    } else if (reason === DisconnectReason.connectionLost) {
      console.log("Connection Lost from Server, reconnecting...");
      startH();
    } else if (reason === DisconnectReason.connectionReplaced) {
      console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
    } else if (reason === DisconnectReason.loggedOut) {
      console.log(`Device Logged Out, Please Delete Folder Session ${sessionName} and Scan Again.`);
      process.exit();
    } else if (reason === DisconnectReason.clientrtRequired) {
      console.log("Restart Required, Restarting...");
      startH();
    } else if (reason === DisconnectReason.timedOut) {
      console.log("Connection TimedOut, Reconnecting...");
      startH();
    } else {
      console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
      startH();
    }
  } else if (connection === "open") {
    lolcatjs.fromString("⏳ Connecting To >>> WhatsApp Web");
    lolcatjs.fromString("✅ Successfully Connected To " + JSON.stringify(client.user, null, 2));

    let versowa = await fetchJson("https://web.whatsapp.com/check-update?version=1&platform=web");
    let txtown =
      "✅ *Successfully Connected To*\n\n" +
      `- *ID:* ${client.user.id}\n` +
      `- *Name:* ${client.user.name}\n` +
      `- *using WA:* v${version.join(".")}\n` +
      `- *isLatest:* ${isLatest}\n\n` +
      JSON.stringify(versowa, null, 2);

    client.sendMessage("6281233649676" + "@s.whatsapp.net", {
      text: txtown,
      contextInfo: {
        externalAdReply: {
          title: "Hello, I am " + client.user.name + " " + versionbot,
          body: "",
          thumbnailUrl: "https://i.ibb.co/Ykgyrgm/image-X0r-Vv-Kru-transformed.png",
          sourceUrl: "https://wa.me/this.ilham/",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        },
      },
    });

    await lolcatjs.fromString("Sukses Mengirim Pesan Ke Owner ☑️");
  }
});

  client.ev.on("creds.update", saveCreds);
  
  client.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await client.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                welcome = `Thanks @${num.split("@")[0]} for joining into ${metadata.subject} group.\n\n${metadata.desc}`
                bye = `𝗚𝗼𝗼𝗱𝗯𝘆𝗲 @${num.split("@")[0]} 👋`
                // Get Profile Picture User
                try {
                    ppuser = await client.profilePictureUrl(num, 'image')
                } catch {
					try {
                    ppuser = 'https://telegra.ph/file/76827b39d82b28877fb57.jpg'
					} catch {}
                }

                if (anu.action == 'add') {
                client.sendMessage(anu.id, { text:`${welcome}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Welcome to ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'remove') {
                    client.sendMessage(anu.id, { text: `${bye}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Left from ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'promote') {
                    client.sendMessage(anu.id, { text: `@${num.split('@')[0]} Promote From ${metadata.subject}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Yey, Promote From ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'demote') {
                    client.sendMessage(anu.id, { text: `@${num.split('@')[0]} Demote From ${metadata.subject}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Awokwokwok, Demote From ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })

  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };

  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };

  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client;
}

startH();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
