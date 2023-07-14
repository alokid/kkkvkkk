/*

* Base bot md by KazeDevID
* Jika ingin recode / upload silahkan asalkan kasih kredit
* Cukup nambahin nama kamu aja
* Dilarang keras Menjual sc ini
 
*/
process.on("uncaughtException", console.error);
process.on('unhandledRejection', console.error);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const request = require('request')
const { JSDOM } = require('jsdom')
const { platform } = require("process");
const moment = require('moment-timezone')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/exif')
const { exec } = require('child_process')
const axios = require("axios")
const mathjs = require('mathjs')
const crypto = require('crypto')
const got = require('got')
const mime = require('mime')
const cheerio = require('cheerio')
const { load } = require('cheerio');
const needle = require("needle")
const path = require('path')
const qs = require('qs')
const ytdl = require('ytdl-core');
const acrcloud = require('acrcloud')
const speed = require('performance-now')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const fetch = require("node-fetch")
const PhoneNum = require("awesome-phonenumber")
const os = require('os')
const { Configuration, OpenAIApi } = require("openai");
const { toAudio, toPTT} = require('../lib/converter')
const mnsp = '```'
const suck = `${mnsp}Success....\nDon't forget to donate${mnsp}`
const aipl = "➸"
const zeikey = "RusdiStore" //apikey xzn
const xzn = "https://xzn.wtf/" //rest api xzn
const lann = "https://api.betabotz.org/" //rest api erlan
const lannkey = "erlananaktekajeh" //apikey erlan
const replikey = "r8_GVlvS5ht3zcUK9g9G8VsnbfwVBJQAxh37oX9r" // APIKEY
const ramdani = "https://1169.rmdni.id/" //WEB TEMEN

 // redmor
 const readmore = String.fromCharCode(8206).repeat(4001)
 
 //mono
 const mono = (text) => {
		const font = {A: '𝙰', B: '𝙱', C: '𝙲' , D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹', K: '𝙺', L: '𝙻', M: '𝙼', N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃', U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉', a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣', '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿', ' ': ' ', '!': '!', '"': '"', '#': '#', '$': '$', '%': '%', '&': '&', '\'': '\'', '(': '(', ')': ')', '': '', '+': '+', ',': ',', '-': '-', '.': '.', '/': '/', ':': ':', ';': ';', '<': '<', '=': '=', '>': '>', '?': '?', '@': '@', '[': '[', '\\': '\\', ']': ']', '^': '^', '': '', '`': '`', '{': '{', '|': '|', '}': '}', '': ''}
		let result = ''
		for (let i = 0; i < text.length; i++) {
			const char = text[i]
			result += font[char] || char
		}
	return result
	}

const getGroupAdmins = (participants) => {
  let admins = []
  for (let i of participants) {
      i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
  }
  return admins || []
}

require("./config");
module.exports = hamz = async (client, m, chatUpdate, store) => {
  try {
    if (m.message?.viewOnceMessageV2) {
  var body = m.message?.viewOnceMessageV2.message.imageMessage ? m.message?.viewOnceMessageV2.message.imageMessage.caption : m.message?.viewOnceMessageV2.message.videoMessage ? m.message?.viewOnceMessageV2.message.videoMessage.caption : ''
} else {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
}
    var budy = (typeof m.text == 'string' ? m.text : '')
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const botNumber = await client.decodeJid(client.user.id);
    const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const itsMe = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
	const quoted = m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
			   //TIME
moment.tz.setDefault('Asia/Jakarta');
const time = moment().format('HH:mm:ss');
let ucapanWaktu;

if (moment(time, 'HH:mm:ss') < moment('05:00:00', 'HH:mm:ss')) {
  ucapanWaktu = 'Good Morning 🌉';
} else if (moment(time, 'HH:mm:ss') < moment('11:00:00', 'HH:mm:ss')) {
  ucapanWaktu = 'Good Morning 🌄';
} else if (moment(time, 'HH:mm:ss') < moment('15:00:00', 'HH:mm:ss')) {
  ucapanWaktu = 'Good Afternoon 🏙';
} else if (moment(time, 'HH:mm:ss') < moment('18:00:00', 'HH:mm:ss')) {
  ucapanWaktu = 'Good Evening 🌅';
} else if (moment(time, 'HH:mm:ss') < moment('19:00:00', 'HH:mm:ss')) {
  ucapanWaktu = 'Good Evening 🌃';
} else {
  ucapanWaktu = 'Good Night 🌌';
}

    const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
	const isGroup = m.key.remoteJid.endsWith('@g.us')
	const users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

    if (m.message) {
  client.readMessages([m.key]);
  await client.sendPresenceUpdate('recording', m.chat) 
  console.log(
    chalk.redBright('├>'),
	chalk.white('[ '+moment.tz('asia/jakarta').format('HH:mm:ss')+' ]'),
    chalk.green(`${command || m.mtype}`),
	chalk.blueBright('FROM:'),
    chalk.yellow(pushname || '<Unknown>'),
    chalk.blueBright('IN:'),
    chalk.yellow(groupName || 'Private chat')
  );
}
//YTDLV2
async function ytmp4(url) {
  if (!url.includes('youtube.com/watch?v=') && !url.includes('youtu.be/')){
    return { success: false, reason: 'Video not found!' };
  };

  const
    validate = ytdl.validateURL(url),
    info = await ytdl.getInfo(url);

  if (!validate) {
    return { success: false, reason: 'Video not found!' };
  };

  try {
    let thumbnail, hd, sd;
    for (let i = 0; i < info.formats.length; i++) {
      const itag = info.formats[i]['itag'];

      if ( itag == '22'){
        hd = info.formats[i]['url'];
      } else if (itag == '18') {
        sd = info.formats[i]['url'];
      };
    };

    if(!info.videoDetails.thumbnails[4]){
      thumbnail = info.videoDetails.thumbnails[3].url;
    } else if(!info.videoDetails.thumbnails[3].url) {
      thumbnail = info.videoDetails.thumbnails[2].url;
    } else {
      thumbnail = info.videoDetails.thumbnails[4].url;
    };

    let result = {
      success: true,
      id: info.videoDetails.videoId,
      title: info.videoDetails.title,
      author: info.videoDetails.ownerChannelName,
      thumbnail,
      urls: { hd, sd }
    };

		return result;
  } catch (error) {
    console.log(error);
    return { success: false, reason: 500 };
  };
};

//cekresi
async function resi(resi, kurir) {
kurs = [];
kurr = require('cheerio').load(await require('cloudscraper').get('https://www.cekpengiriman.com/cek-resi'))
kurr('option').each(function(a,b) { kurs.push(kurr(b).attr('value')) })
if (kurs.includes(kurir.toLowerCase()) == false) return 'kurir yang anda masukan invalid atau tidak terdaftar';
try {
const puppeteer = require('puppeteer');
const { platform } = require('os')
const cheerio = require('cheerio')
detail = {}
const executablePath = platform() === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : '/usr/bin/google-chrome-stable';
    const browser = await puppeteer.launch({
      headless: true,
      devtools: true,
      args: ['--no-sandbox'],
      executablePath
    });
const page = await browser.newPage();
await page.goto('https://www.cekpengiriman.com/cek-resi?resi=' + resi + '&kurir=' + kurir, {waitUntil: 'networkidle0'})
let ch = require('cheerio').load(await page.content())
ch('#renderResult > .detail > div:nth-child(2) > table > tbody > tr').each(function(a,b) {
detail[ch(b).find('td:nth-child(1)').text().toLowerCase().replace(/ /g, '_')] = ch(b).find('td:nth-child(2)').text()
})
riwayat = ''
ch('#renderResult > .riwayatPengiriman > div:nth-child(2) > table > tbody > tr').each(function(a,b) {
riwayat += ch(b).text() + `\n`
})
browser.close()
return { detail, riwayat: riwayat };
} catch (e) {
return e;
}
}
//YOUTUBEV2
const post = async (url, formdata, options) => {
return new Promise((resolve, reject) => {
if (!(formdata instanceof FormData)) {
return axios.post(url, qs.stringify(formdata), { headers: { "Content-Type": "application/x-www-form-urlencoded" }, ...options }).then(resolve).catch(reject)
} else {
return axios.post(url, formdata, { headers: formdata.getHeaders(), ...options }).then(resolve).catch(reject) }})
}
async function youtubev2(url, type){
const getYoutubeID = (url) => {
    return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|shorts|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/.exec(url)[1]
}
var videoId = getYoutubeID(url)
var { data } = await post("https://yt1s.com/api/ajaxSearch/index", { q: "https://www.youtube.com/watch?v=" + videoId, vt: "home" })
var kc, size
if (type == "mp3") {
kc = data.links.mp3.mp3128.k
size = data.links.mp3.mp3128.size
} else if (type == "mp4") {
kc = data.links.mp4["18"].k
size = data.links.mp4["18"].size
}
var { data: convert } = await post("https://yt1s.com/api/ajaxConvert/convert", { vid: videoId, k: kc })
return {
title: data["title"],
thumbnail: `https://i.ytimg.com/vi/${data["vid"]}/mqdefault.jpg`, 
size, link: convert.dlink.replace("https://", "http://") 
}}
// sholat/monthly
function sholat(NO) {
    return new Promise(async(resolve, reject) =>{
        axios.get('https://kalam.sindonews.com/jadwalsholat/' + NO).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = [];
            $('div.imsakiyah-content tr').each(function(a, b) {
                const Tanggal = $(b).find('td:nth-child(1)').text()
                const imsak = $(b).find('td:nth-child(2)').text()
                const subuh = $(b).find('td:nth-child(3)').text()
                const zuhur = $(b).find('td:nth-child(4)').text()
                const ashar = $(b).find('td:nth-child(5)').text()
                const maghrib = $(b).find('td:nth-child(6)').text()
                const isya = $(b).find('td:nth-child(7)').text()

                result.push({
                    Tanggal,
                    imsak,
                    subuh,
                    zuhur,
                    ashar,
                    maghrib,
                    isya
                })
            })
            resolve(result)
        })
        .catch(reject)
    })
}
// SURAH
function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
// YOUTUBE scraper
function youtube(link){
	return new Promise((resolve, reject) => {
		const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
		if (ytIdRegex.test(link)) {
		let url =  ytIdRegex.exec(link)
		let config = {
			'url': 'https://www.youtube.be/' + url,
			'q_auto': 0,
			'ajax': 1
		}
		let headerss = 	{
			"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
			"Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
		}
	axios('https://www.y2mate.com/mates/en68/analyze/ajax',{
			method: 'POST',
			data: new URLSearchParams(Object.entries(config)),
			headers: headerss
		})
	.then(({ data }) => {
		const $ = cheerio.load(data.result)
		let img = $('div.thumbnail.cover > a > img').attr('src');
		let title = $('div.thumbnail.cover > div > b').text();
		let size = $('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
		let size_mp3 = $('#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
		let id = /var k__id = "(.*?)"/.exec(data.result)[1]
		let configs = {
    type: 'youtube',
    _id: id,
    v_id: url[1],
    ajax: '1',
    token: '',
    ftype: 'mp4',
    fquality: 480
  }
	axios('https://www.y2mate.com/mates/en68/convert',{
		method: 'POST',
		data: new URLSearchParams(Object.entries(configs)),
		headers: headerss 
	})
	.then(({data}) => {
		const $ = cheerio.load(data.result)
		let link = $('div > a').attr('href')
	let configss = {
    type: 'youtube',
    _id: id,
    v_id: url[1],
    ajax: '1',
    token: '',
    ftype: 'mp3',
    fquality: 128
  }
	axios('https://www.y2mate.com/mates/en68/convert',{
		method: 'POST',
		data: new URLSearchParams(Object.entries(configss)),
		headers: headerss 
	})
	.then(({ data }) => {
		const $ = cheerio.load(data.result)
		let audio = $('div > a').attr('href')
		resolve({
			id: url[1],
			title: title,
			size: size,
			quality: '480p',
			thumb: img,
			link: link,
			size_mp3: size_mp3,
			mp3: audio
		})

		})
			})
		})
	.catch(reject)
	}else reject('link invalid')
	})
}
// facebookdl
async function facebook(url) {
    try {
      const { data } = await axios.post('https://getmyfb.com/process', new URLSearchParams({
        id: decodeURIComponent(url),
        locale: 'en',
      }), {
        headers: {
          accept: '*/*',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'hx-current-url': 'https://getmyfb.com/',
          'hx-request': 'true',
          'hx-target': 'target',
          'hx-trigger': 'form',
          pragma: 'no-cache',
          Referer: 'https://getmyfb.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      });
      
      const $ = cheerio.load(data);
      const title = $('.results-item-text')
        .text()
        .replace(/\s{2,}/g, '')
        .replace(/[\t\n]/g, '');
      const urls = [];
      
      $('.results-download > ul > li').each((i, e) => {
        const type = $(e).find('a').attr('download');
        const url = $(e).find('a').attr('href');
        
        if (/hd/i.test(type)) {
          urls.push({ quality: 'HD', url });
        } else if (/sd/i.test(type)) {
          urls.push({ quality: 'SD', url });
        }
      });
      
      if (urls.length === 0) {
        throw new Error('No se encontraron enlaces de descarga');
      }
      
      const hdUrl = urls.find(u => u.quality === 'HD');
      const videoUrl = hdUrl ? hdUrl.url : urls[0].url;
      
      return { title, videoUrl };
    } catch (e) {
      throw new Error(`Error al obtener el video de Facebook: ${e.message}`);
    }
  }
// MEDIAFIREV3
async function mediafireDlV3(url) {
  return new Promise(async(resolve, reject) => {
  var a, b;
  if (!/https?:\/\/(www\.)?mediafire\.com/.test(url)) return resolve()
   const data = await axios.get(url).catch(function (error) {})
   if (!data) {
  resolve()
   } else {
  const $ = cheerio.load(data.data);
  const Url = ($('#downloadButton').attr('href') || '').trim();
  const url2 = ($('#download_link > a.retry').attr('href') || '').trim();
  const $intro = $('div.dl-info > div.intro');
  const filename = $intro.find('div.filename').text().trim();
  const filetype = $intro.find('div.filetype > span').eq(0).text().trim();
  const ext = ((b = (a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || a === void 0 ? void 0 : a[1]) === null || b === void 0 ? void 0 : b.trim()) || 'bin';
  const $li = $('div.dl-info > ul.details > li');
  const aploud = $li.eq(1).find('span').text().trim();
  const filesize = $li.eq(0).find('span').text().trim();
  const filesizeB = (0, formatp)(filesize);
  const result = {
    url: Url || url2,
    url2,
    filename,
    filetype,
    ext,
    upload_date: aploud,
    filesize,
    filesizeB
  };
  resolve(result)
   }
  })
}
// MEDIAFIRE download
async function mediafireDl(url) {
	const res = await axios.get(url) 
	const $ = cheerio.load(res.data)
	const hasil = []
	const link = $('a#downloadButton').attr('href')
	const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace(/\n|\s/g, '')
	const sizeN = parseFloat(size.replace(/[^0-9.,]/g, ''))
	const seplit = link.split('/')
	const name = seplit[5]
	const ext = path.extname(name).slice(1);
	hasil.push({ name, size, link, ext, sizeN })
	return hasil[0]
}
//MEDIAFIREV3
async function mediafireDlV2(url){
const res = await axios.get(url);
const $ = cheerio.load(res.data);
const link = $('#downloadButton').attr('href');
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','');
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','');
let mime = '';
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name ,size ,date ,mime ,link };
}
// ig/fb Downloader
async function snapsave(url){
  return new Promise(async (resolve) => {
  try {
  if (!url.match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/) && !url.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv|stories)/gi)) return resolve({ developer: 'ALOK', status: false, msg: `Link Url not valid` })
  function decodeSnapApp(args) {
  let [h, u, n, t, e, r] = args
  // @ts-ignore
  function decode (d, e, f) {
  const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('')
  let h = g.slice(0, e)
  let i = g.slice(0, f)
  // @ts-ignore
  let j = d.split('').reverse().reduce(function (a, b, c) {
  if (h.indexOf(b) !== -1)
  return a += h.indexOf(b) * (Math.pow(e, c))
  }, 0)
  let k = ''
  while (j > 0) {
  k = i[j % f] + k
  j = (j - (j % f)) / f
  }
  return k || '0'
  }
  r = ''
  for (let i = 0, len = h.length; i < len; i++) {
  let s = ""
  // @ts-ignore
  while (h[i] !== n[e]) {
  s += h[i]; i++
  }
  for (let j = 0; j < n.length; j++)
  s = s.replace(new RegExp(n[j], "g"), j.toString())
  // @ts-ignore
  r += String.fromCharCode(decode(s, e, 10) - t)
  }
  return decodeURIComponent(encodeURIComponent(r))
  }
  function getEncodedSnapApp(data) {
  return data.split('decodeURIComponent(escape(r))}(')[1]
  .split('))')[0]
  .split(',')
  .map(v => v.replace(/"/g, '').trim())
  }
  function getDecodedSnapSave (data) {
  return data.split('getElementById("download-section").innerHTML = "')[1]
  .split('"; document.getElementById("inputData").remove(); ')[0]
  .replace(/\\(\\)?/g, '')
  }
  function decryptSnapSave(data) {
  return getDecodedSnapSave(decodeSnapApp(getEncodedSnapApp(data)))
  }
  const html = await got.post('https://snapsave.app/action.php?lang=id', {
  headers: {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'content-type': 'application/x-www-form-urlencoded','origin': 'https://snapsave.app',
  'referer': 'https://snapsave.app/id',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
  },
  form: { url }
  }).text()
  const decode = decryptSnapSave(html)
  const $ = cheerio.load(decode)
  const results = []
  if ($('table.table').length || $('article.media > figure').length) {
  const thumbnail = $('article.media > figure').find('img').attr('src')
  $('tbody > tr').each((_, el) => {
  const $el = $(el)
  const $td = $el.find('td')
  const resolution = $td.eq(0).text()
  let _url = $td.eq(2).find('a').attr('href') || $td.eq(2).find('button').attr('onclick')
  const shouldRender = /get_progressApi/ig.test(_url || '')
  if (shouldRender) {
  _url = /get_progressApi\('(.*?)'\)/.exec(_url || '')?.[1] || _url
  }
  results.push({
  resolution,
  thumbnail,
  url: _url,
  shouldRender
  })
  })
  } else {
  $('div.download-items__thumb').each((_, tod) => {
  const thumbnail = $(tod).find('img').attr('src')
  $('div.download-items__btn').each((_, ol) => {
  let _url = $(ol).find('a').attr('href')
  if (!/https?:\/\//.test(_url || '')) _url = `https://snapsave.app${_url}`
  results.push({
  thumbnail,
  url: _url
  })
  })
  })
  }
  if (!results.length) return resolve({ developer: 'ALOK', status: false, msg: `Blank data` })
  return resolve({ developer: 'ALOK', status: true, data: results })
  } catch (e) {
  return resolve({ developer: 'ALOK', status: false, msg: e.message })
  }
  })
}
// TIKTOKV2
function tiktok(url) {
    return new Promise(async (resolve, reject) => {
      const getDataInput = await axios.get('https://musicaldown.com/id');
      const $ = cheerio.load(getDataInput.data);
      let inputData = new Array();
      $('form').find('input').get().map(map => {
        inputData.push({
          name: $(map).attr('name'),
          value: $(map).attr('value')
        });
      });
      const link = new URL(url);
      axios({
        method: 'POST',
        url: 'https://musicaldown.com/id/download',
        data: `${inputData[0]['name']}=${encodeURIComponent(link['origin'] + link['pathname'])}&${inputData[1]['name']}=${inputData[1]['value']}&${inputData[2]['name']}=${inputData[2]['value']}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Origin': 'https://musicaldown.com',
          'Referer': 'https://musicaldown.com/id',
          'Cookie': getDataInput['headers']['set-cookie']
        }
      }).then(response => {
        axios({
          method: 'POST',
          url: 'https://musicaldown.com/id/mp3',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36',
            'Cookie': getDataInput['headers']['set-cookie']
          }
        }).then(({ data }) => {
          const $ = cheerio.load(response['data']);
          const _ = cheerio.load(data);
          let video = new Array();
          let audio = new Array();
          let result = new Object();
          $('a[target=\'_blank\']').get().map(output => {
            video.push($(output).attr('href'));
          });
          _('a.waves-effect').get().map(output => {
            audio.push($(output).attr('href'));
          });
          result['title'] = $('title').text().trim();
          result['title_audio'] = _('title').text().split(' |')[0];
          result['thumbnail'] = $('img.responsive-img').attr('src');
          result['video'] = video.filter(output => output.includes('/video/'));
          result['audio'] = audio.filter(output => {
            if (!/https:\/\//.test(output)) return;
            return output;
          });
          resolve(result);
        }).catch(reject);
      }).catch(reject);
    });
  }
// tiktok dl
function RapidApiInit(url) {
  const _key =
    "JTJGMCUyRmIlMkY4JTJGMyUyRjglMkY4JTJGYiUyRjclMkY3JTJGNSUyRm0lMkZzJTJGaCUyRjQlMkYwJTJGOCUyRjQlMkY5JTJGOCUyRjYlMkYxJTJGMyUyRjAlMkY4JTJGYiUyRmUlMkY3JTJGMCUyRnAlMkYxJTJGNyUyRmMlMkYwJTJGMyUyRjMlMkZqJTJGcyUyRm4lMkYzJTJGZSUyRjAlMkY4JTJGNSUyRmElMkZkJTJGYyUyRjglMkZlJTJGZiUyRjElMkY=";
  // Attempt to avoid rapidapi detector  :)
  const key = decodeURIComponent(
    Buffer.from(_key, "base64").toString("ascii")
  ).replace(/\//g, "");
  return {
    headers: {
      "x-rapidapi-key": key,
    },
    params: {
      url: url,
      hd: 1,
    },
  };
}

async function tiktokdl(url) {
  try {
    const { data: responseData } = await axios.get(
      "https://tiktok-video-no-watermark2.p.rapidapi.com" + "/",
      RapidApiInit(url)
    );

    if (!responseData) {
      throw new Error(`No se recibió respuesta del servicio`);
    }

    if (responseData.code !== 0) {
      throw new Error(
        responseData.message || `Error en la respuesta del servicio`
      );
    }

    const {
      author,
      download_count,
      duration,
      title,
      play,
      wmplay,
      hdplay,
      music,
    } = responseData?.data || {};

    if (!author || typeof author !== "object") {
      throw new Error(`La respuesta del servicio es inválida`);
    }

    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    return {
      nickname: author.nickname,
      unique_id: author.unique_id,
      download_count,
      duration: `${minutes}:${seconds.toString().padStart(2, "0")}`,
      description: title,
      play,
      wmplay,
      hdplay,
      music,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
      stack: error.stack,
    };
  }
}

// stream
const streamToBuffer = async (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}
const downloadMp4 = async (link) => {
  try {
      console.log('Downloading Video');
      const videoStream = ytdl(link);
      const videoBuffer = await streamToBuffer(videoStream);
      await client.sendMessage(m.chat, {
        video: videoBuffer,
        caption: suck
      }, { quoted: m });
  } catch {
    try {
    let data = await ytdl.getInfo(link);
    const anu = ytdl.chooseFormat(data.formats, {});
    console.log(anu);
    await client.sendMessage(m.chat, {
      video: { url: anu.url },
      caption: suck
    }, { quoted: m });
    } catch {
		try {
			await youtubev2(link, 'mp4').then(p => {
				client.sendMessage(m.chat, {video: {url:p.link}, caption: suck}, {quoted:m})
			})
		} catch (e) {
			m.reply(e.message)
			console.log(e)
		}
    }
  }
};
const downloadMp3 = async (link) => {
  try {
      console.log('Downloading Audio');
      const audioStream = ytdl(link, { filter: 'audioonly' });
      const audioBuffer = await streamToBuffer(audioStream);

      await client.sendMessage(m.chat, {
        audio: audioBuffer
      }, { quoted: m });
  } catch {
    try {
    let data = await ytdl.getInfo(link);
    const anu = ytdl.chooseFormat(data.formats, { filter: 'audioonly' });
    console.log(anu);
    await client.sendMessage(m.chat, {
      audio: { url: anu.url }
    }, { quoted: m });
    } catch {
      try {
			await youtubev2(link, 'mp3').then(p => {
				client.sendMessage(m.chat, {video: {url:p.link}, caption: suck}, {quoted:m})
			})
		} catch (e) {
			m.reply(e.message)
			console.log(e)
		}
    }
  }
};
// ngelink by neoxr
async function ngelink(text){
      let regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
      return text.match(regex)
   }

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

      switch (command) {
		  case 'threadsdl':
		  case 'threads':{
		  if (!args[0]) return m.reply("Mana Linknya?")
		  if (!isUrl(args[0])) return m.reply("Maaf harus berupa link")
		  var alok = await fetchJson(`https://api.threadsdownloader.io/load?url=`+args[0])
	      await client.sendFileUrl(m.chat, alok.media[0].url, suck, m)
		  }
		  break
		  case 'gtts':
		  case 'tts': {
  if (args.length < 2) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*');
  try {
    const gtts = require('../lib/gtts')(args[0]);
    var ngab = args.slice(1).join(' ');
    ranm = getRandom('.mp3');
    rano = getRandom('.ogg');
    if (ngab.length > 600) return m.reply('Textnya kebanyakan gan');
    gtts.save(ranm, ngab, function() {
      exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
        fs.unlinkSync(ranm);
        if (err) return m.reply('Gagal gan :(');
        buff = fs.readFileSync(rano);
        client.sendMessage(m.chat, {audio: buff, mimetype: 'audio/mpeg', ptt: true }, {quoted: m});
        fs.unlinkSync(rano);
      });
    });
  } catch (err) {
    console.log(err);
    m.reply(err.message);
  }
}
break;
case 'unban4':{
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=122333444455555666666777777788888888999999999")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Kepada Tim Dukungan WhatsApp,

Saya mohon dengan tulus agar membukakan blokiran nomor [ ${users.split("@")[0]} ] WhatsApp saya yang telah diblokir dapat dibuka kembali. Saya menyadari bahwa ada kesalahan atau pelanggaran kebijakan yang mungkin telah terjadi, namun saya ingin menegaskan bahwa saya tidak berniat melanggar aturan WhatsApp.

Saya sangat bergantung pada WhatsApp sebagai alat komunikasi utama saya untuk berhubungan dengan keluarga, teman, dan rekan bisnis. Blokir nomor WhatsApp saya telah menyebabkan ketidaknyamanan dan kesulitan dalam berkomunikasi dengan orang-orang terdekat dan mengakses informasi penting.

Saya bersedia untuk bekerja sama sepenuhnya dengan pihak WhatsApp untuk mengklarifikasi dan memperbaiki situasi ini. Jika ada langkah yang perlu saya ambil atau informasi yang perlu saya berikan untuk membantu proses verifikasi, tolong beritahu saya dengan jelas dan saya akan segera melakukannya.

Saya berharap dengan tulus bahwa tim dukungan WhatsApp dapat mempertimbangkan permohonan saya ini dan memberikan kesempatan bagi nomor WhatsApp saya untuk dibuka kembali. Saya berjanji untuk tetap mematuhi aturan dan kebijakan WhatsApp di masa mendatang.

Terima kasih atas perhatian dan kerja sama Anda. Saya berharap untuk mendengar kabar baik segera dari pihak WhatsApp.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
m.reply(`Unbanned Versi 4`)
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
		  break
		  case 'unban':{
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=122333444455555666666777777788888888999999999")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Kepada Pihak WhatsApp yang Terhormat,

Saya menulis untuk mengajukan banding atas pemblokiran nomor saya. Saya telah mengirimkan beberapa email dan laporan kepada pihak WhatsApp, namun belum mendapat tanggapan.

Nomor saya, [ ${users.split("@")[0]} ]. sangat penting bagi saya untuk keperluan pribadi, terutama untuk berkomunikasi dengan keluarga. Jika saya melakukan pelanggaran sebelumnya, saya akan menggunakan nomor saya dengan lebih hati-hati dan lebih baik lagi dari sebelumnya. Saya telah menuruti apa yang disarankan oleh pihak WhatsApp dan sangat berharap nomor saya dapat digunakan kembali secepatnya.

Terima kasih atas perhatian dan bantuan Anda.

Hormat saya, [ ${users.split("@")[0]} ]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
m.reply(`Unbanned Versi 1`)
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
		  break
		  case 'unban2':{
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=12233344445555566666677777778888888899999999910101010101010101010")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Dear WhatsApp Team,

I am writing to appeal for the unblocking of my WhatsApp account. My account was recently blocked and I am not sure why this has happened. I understand that I may have unknowingly violated the terms of service and I am willing to take any necessary steps to rectify the situation.

My WhatsApp account, [${users.split("@")[0]}]. Is very important to me as it is my primary means of communication with my family and friends. I respectfully request that you review my case and consider unblocking my account.

Thank you for your time and assistance.

Sincerely, [${users.split("@")[0]}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
m.reply(`Unbanned Versi 2`)
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
		  break
		  case 'unban3':{
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=122333444455555666666777777788888888999999999101010101010101010101111111111111111111111")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Dear WhatsApp Support Team,

I hope this message finds you in good health and spirits. I am writing to request your assistance with an issue concerning my WhatsApp account, which has been permanently blocked. I am uncertain as to the reason for this action, but it has been suggested to me by acquaintances that it may be due to my use of GB WhatsApp, a practice of which I was unaware was in violation of the terms of service.

My phone number associated with the account is [ ${users.split("@")[0]} ]. This number is of great importance to me as it is linked to various essential matters, including job opportunities. As such, it would not be feasible for me to simply obtain a new number. I respectfully request that you consider unblocking my account.

Thank you for taking the time to review my request and for your assistance in this matter.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
m.reply(`Unbanned Versi 3`)
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
	break
		  case 'verify':{
	if (!isCreator) return m.reply(mess.botOwner);
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hilang/Dicuri: Mohon nonaktifkan akun saya +${users.split("@")[0]}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
		  break
		  case 'kenon':{
	if (!isCreator) return m.reply(mess.botOwner);
    if (!users) return m.reply("Reply/Tags/Input Nomer")
	if (!text.replace(/[^0-9]/g, '')) {
    return m.reply('Harus nomer');
}
		console.log(users)
let ntah = await axios.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${users.split("@")[0]}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hilang/Dicuri: mohon nonaktifkan akun saya +${users.split("@")[0]}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
await sleep(3000)
await m.reply(JSON.stringify(res.data, '', 2))
    }
		  break
		  case 'anonfile':{
			  if (!args[0]) return m.reply(`Mana Linknya? ${prefix + command} https://anonfiles.com/adG1m705z9`)
			  if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
				 m.reply(mess.wait)
			  const axios = require('axios');
const cheerio = require('cheerio');

const url = args[0];

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const fileName = $('.text-wordwrap').text().trim();
    const downloadLink = $('#download-url').attr('href');
    const fileSize = $('#download-url').text().trim().match(/\((.*?)\)/)[1];

    console.log('File Name:', fileName);
    console.log('Download Link:', downloadLink);
    console.log('File Size:', fileSize);
	  let taex = 'File Name: ' + fileName +
  '\nDownload Link: ' + downloadLink +
  '\nFile Size: ' + fileSize;

  client.sendFileUrl(m.chat, downloadLink, taex, m)
  })
  .catch(error => {
    console.log('Error:', error);
  });
		  }
		  break
		  case 'enc':{
			  if (!text) return m.reply(`Mana Skrepmu?`);
			  m.reply(mess.wait)
			  var JavaScriptObfuscator = require('javascript-obfuscator');
			  var alok = await (JavaScriptObfuscator.obfuscate(text))
			  await client.sendText(m.chat, alok.getObfuscatedCode(), m)
		  }
		  break
		  case 'cowner': {
              if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
              if (!args[0]) return m.reply(`Pilih add atau del`)
              if (args[1]) {
              orgnye = args[1]
              } else if (m.quoted) {
              orgnye = m.quoted.sender.split("@")[0]
              }
              const isCwner = owner.includes(orgnye)
              if (args[0] === "add") {
              if (isCwner) return m.reply('User sudah menjadi owner')
              owner.push(orgnye)
              m.reply(`Succes add friends`)
              } else if (args[0] === "del") {
              if (!isCwner) return m.reply('User bukan owner')
              let delcwner = owner.indexOf(orgnye)
              owner.splice(delcwner, 1)
              m.reply(`Succes del friends`)
              } else {
              m.reply("Error")
              }
              }
              break
		  case 'self': {
              if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
    const result = await eval(`client.public = false`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
              }
              break
			  case 'public': {
              if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
    const result = await eval(`client.public = true`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
              }
              break
		  case 'report': {
  if (!args.join(" ")) {
    return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`);
  }

  const tekes = `*| REPORT FITUR |*`;
  const tekes1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`;
  const tekes2 = `\n\nSucces send to owner`;

  for (let i of owner) {
    client.sendMessage('6281233649676' + "@s.whatsapp.net", { text: tekes + tekes1, mentions: [m.sender] }, { quoted: m });
  }

  client.sendMessage(m.chat, { text: tekes + tekes2 + tekes1, mentions: [m.sender] }, { quoted: m });
}
break;
		    case 'kalkulator':
case 'calc':
case 'calculator':
case 'cal':
case 'kal': {
  if (args.length < 1) {
    return m.reply(
      `*Contoh:*\n${prefix}kalkulator 2 * 5\n\n*Daftar Operator:*\n• Kali: *\n• Bagi: /\n• Tambah: +\n• Kurang: -`
    );
  }
  const equation = args.join(" ");
  try {
    const mathjs = require('mathjs');
    const result = mathjs.evaluate(equation.replace(/×/g, "*").replace(/÷/g, "/"));
    if (isNaN(result)) {
      m.reply('Tidak dapat menghitung ekspresi matematika yang valid.');
    } else {
      m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*• Hitung:* ${equation}\n*• Hasil:* ${result}`);
    }
  } catch (err) {
    m.reply(err.message);
  }
}
break;
case 'uptv':{
let q = quoted ? quoted : m.quoted;
let mime = (q.msg || q).mimetype || '';

if (!mime) {
  return m.reply('✳️ Replay PTV');
}

await sendMessageFromContent(m.chat, { videoMessage: q })

async function sendMessageFromContent (jid, message, options = {}) {
		var option = { contextInfo: {}, ...options }
		var prepare = await generateWAMessageFromContent(m.chat, message, option)
		await client.relayMessage(m.chat, prepare.message, { messageId: prepare.key.id })
}
}
break
case 'bulat':
case 'bundar':
case 'bulet':{
let q = quoted ? quoted : m.quoted;
let mime = (q.msg || q).mimetype || '';

if (!mime) {
  return m.reply('✳️ Replay video');
}

await sendMessageFromContent(m.chat, { ptvMessage: q })

async function sendMessageFromContent (jid, message, options = {}) {
		var option = { contextInfo: {}, ...options }
		var prepare = await generateWAMessageFromContent(m.chat, message, option)
		await client.relayMessage(m.chat, prepare.message, { messageId: prepare.key.id })
}
}
break
            case 'about':
            case 'm':
            case 'bot':
            case 'help':
            case 'menu': {
let alot = speed();
let lota = speed();
let lemek = lota - alot
let kuotes = await pickRandom(await quotesAnime())
			let txt = mono(`Hi `)+`@${m.sender.split("@")[0]}`+ mono(`

	⧉ BOT INFO
▹ *Latency:* ${lemek.toFixed(4)} ms
▹ *Runtime Bot:* 
${runtime(process.uptime())}
▹ *Runtime Server:* 
${runtime(os.uptime())}

${kuotes.quotes}\n- ${kuotes.karakter} -
   
┏━━ 「 *Simple Menu* 」
┃
┃${aipl} report *Query*
┃${aipl} menu
┃${aipl} ping
┃${aipl} speed
┃${aipl} speedtest
┃${aipl} runtime
┃${aipl} run
┃${aipl} donasi
┃${aipl} owner
┃${aipl} unban
┃${aipl} unban2
┃${aipl} unban3
┃${aipl} kenon
┃${aipl} verify
┃
┗━━━━ •		   

┏━━ 「 *Converter Menu* 」
┃
┃${aipl} sticker
┃${aipl} swm
┃${aipl} smeme
┃${aipl} smeme2
┃${aipl} tomp4
┃${aipl} toimg
┃${aipl} tourl *<reply img/mp4>*
┃${aipl} tinyurl
┃${aipl} removebg
┃${aipl} totext
┃${aipl} qc
┃${aipl} fakechat
┃${aipl} gtts
┃${aipl} tts
┃${aipl} ocr
┃${aipl} ttp
┃${aipl} harta
┃${aipl} tahta
┃${aipl} toanime
┃${aipl} remini
┃${aipl} carbon
┃${aipl} recolor
┃${aipl} dehaze
┃${aipl} hd
┃${aipl} stabdiff
┃${aipl} dif
┃${aipl} diffusion
┃${aipl} sdif
┃${aipl} enhance
┃${aipl} hartatahta
┃
┗━━━━ •		   

┏━━ 「 *Search & Download Menu* 」
┃
┃${aipl} threadsdl
┃${aipl} threads
┃${aipl} soundclouddl
┃${aipl} soundcloud
┃${aipl} capcutdl
┃${aipl} capcut
┃${aipl} cocofundl
┃${aipl} cocofun
┃${aipl} cekresi
┃${aipl} anonfile <Link>
┃${aipl} whois <Link>
┃${aipl} dnslookup <Link>
┃${aipl} tiktokstalk *Query*
┃${aipl} ttstalk *Query*
┃${aipl} cuaca *Query*
┃${aipl} whatmusic <reply videonya>
┃${aipl} tr <kode> <teks>
┃${aipl} translate <kode> <teks>
┃${aipl} gempa
┃${aipl} wiki *Teks*
┃${aipl} wikipedia *Teks*
┃${aipl} google *Teks*
┃${aipl} gimage *Teks*
┃${aipl} googleimage *Teks*
┃${aipl} aiimg *Query*
┃${aipl} serimg *Query*
┃${aipl} pin *Query*
┃${aipl} pinterest *Query*
┃${aipl} ssweb *<Link>*
┃${aipl} jadwalsholat *Query*
┃${aipl} sholat *Query*
┃${aipl} bingai *Teks*
┃${aipl} bing *Teks*
┃${aipl} ai *Teks*
┃${aipl} chatgpt *Teks*
┃${aipl} gpt *Teks*
┃${aipl} lirik *Query*
┃${aipl} lyrics *Query*
┃${aipl} ytsearch *Query*
┃${aipl} play *Query*
┃${aipl} playmp4 *Query*
┃${aipl} npmjs *Query*
┃${aipl} ytmp3 *<Link>*
┃${aipl} ytmp4 *<Link>*
┃${aipl} getmusic *Reply ytsearch*
┃${aipl} getvideo *Reply ytsearch*
┃${aipl} twdl *<Link>*
┃${aipl} twitterdl *<Link>*
┃${aipl} fbdl *<Link>*
┃${aipl} facebookdl *<Link>*
┃${aipl} mediafire *<Link>*
┃${aipl} igdl *<Link>*
┃${aipl} instagramdl *<Link>*
┃${aipl} gdrive *<Link>*
┃${aipl} gdrivedl *<Link>*
┃${aipl} igstalk *Query*
┃${aipl} gitclone *<Link>*
┃${aipl} ttdl *<Link>*
┃${aipl} tiktokdl *<Link>*
┃${aipl} ttmp3 *<Link>*
┃${aipl} brainly *Query*
┃${aipl} get *<Link>*
┃${aipl} megadl *<Link>*
┃${aipl} mega *<Link>*
┃${aipl} jarak *KOTA A|KOTA B*
┃${aipl} telestick *<Link>*
┃
┗━━━━ •		   

*THANKS TO*

▸ Allah SWT
▸ My Family
▸ My Friend
▸ WhiskeySockets (Baileys)
▸ KazeDevID (base)
▸ this.ilham_ (me)
▸ Jack
▸ Nevz
▸ Pajar Kyouka
▸ Ramdani
▸ and module providers

*© Copyright Simple WhatsApp Bots*`)
await client.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [m.sender],
	  externalAdReply: {
          title: `${ucapanWaktu}, ${pushname} 👋`,
          body: "follows me @this.ilham_ for more updates.",
          thumbnailUrl: 'https://i.ibb.co/5T7LNLv/thumbbig-669047.png',
          sourceUrl: "https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
    },
  }, {quoted:m})
				}
                    break;
case 'whoislookup':
case 'whois': {
  if (!text) {
    return m.reply(`Masukkan Domain/Sub Domain!\n\n*Contoh:* youtube.com`);
  }
  if (text.includes('https://') || text.includes('http://')) {
    return m.reply(`Tolong masukkan domain/sub domain secara lengkap. Contoh: youtube.com`);
  }
  const token = ["f120748553ba92507306250b277772f55058a623bf233c5ad60cf5e324a6bd6a", "f120748553ba92507306250b277772f55058a623bf233c5ad60cf5e324a6bd6a", "d6e250ac57bb97b87f60150e7671ddf81238b2f22e4d2dbdfe75dba730d7eadb", "b9ed775e09ec06eeb8895ee89fa2989a04a92a838032d00a02a2df249e644234", "f37a6271bf494816dd71813fca7b5639ceb288989e64bfde299c0ea85c84f36f"];
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Token=${await pickRandom(token)}` // Ganti apikey sendiri jika diperlukan
    }
  };
  try {
    m.reply(mess.wait);
    const response = await fetch(`https://whoisjson.com/api/v1/whois?domain=${text}`, options);
    const data = await response.json();
    await m.reply(JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}
break;
case 'hackertarget':
case 'dns':
case 'lookup':
case 'dnslookup': {
  if (!text) {
    return m.reply(`Masukkan Domain/Sub Domain!\n\n*Contoh:* botcahx.live`);
  }
  if (text.includes('https://') || text.includes('http://')) {
    return m.reply(`Tolong masukkan domain/sub domain secara lengkap. Contoh: botcahx.live`);
  }
  m.reply(mess.wait);
  fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
    .then(response => response.text())
    .then(data => {
      m.reply(`*Ini Adalah Hasil DNS Lookup Untuk ${text}*\n${data}`);
      console.log(data);
    });
}
break;
case 'cuaca': {
  if (!q) return m.reply(`Contoh: ${prefix}cuaca palembang`);

  const api_cuaca = ["18d044eb8e1c06eaf7c5a27bb138694c", "e034623dc7aa19b861af48448eb47863", "07bfe65d7bfee99205b8fabfd3d92b69", "1baade6d5d4a7e3e744d004a8f4becd9"];
  const unit_cuaca = 'metric';
  const nama_kota = q;
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${pickRandom(api_cuaca)}`);
  const cuaca = await response.json();

  if (cuaca.cod === '404') {
    // Jika kota tidak ditemukan, maka balas dengan pesan berikut
    return m.reply('Kota tidak ditemukan');
  }

  const text_cuaca = `*INFO CUACA*
Nama: ${cuaca.name}, ${cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp}° C
Angin: ${cuaca.wind.speed} m/s
Kelembaban: ${cuaca.main.humidity} %
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure} HPa`;

  await m.reply(text_cuaca);
}
break;
case 'carbon': {
  const inputText = m.quoted ? m.quoted.text : text;
  if (inputText === "") {
    return m.reply(`Masukkan pesan:\n${command} hello world`);
  }
  const randomColor = [
    '#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76',
    '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b',
    '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff', '#00000000'
  ];
  const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  m.reply(mess.wait);
  const fs = require('fs').promises;
  const carbon = require('carbon-now-scraper');
  const code = inputText;
  const randomFileName = crypto.randomBytes(8).toString('hex') + '.png'
  const output = path.join("./tmp", randomFileName)
  const options = {
    lang: "auto",
    theme: "dracula",
    background: apiColor,
    "width-adjustment": false,
    executablePath: '/path/to/chrome',
  };
  try {
    await carbon(code, output, options);
    const imageBuffer = await fs.readFile(output);
    await client.sendMessage(m.chat, { image: imageBuffer, caption: `*Done...*` }, { quoted: m });
    await fs.unlink(output);
  } catch (err) {
    console.error(err);
    m.reply(util.format(err));
  }
  }
  break;
case 'translate':
case 'tr': {
  const amlok = `*List kode Bahasa*\n *Code Bahasa* sq Albanian ar Arabic hy Armenian ca Catalan zh Chinese zh-cn Chinese (China) zh-tw Chinese (Taiwan) zh-yue Chinese (Cantonese) hr Croatian cs Czech da Danish nl Dutch en English en-au English (Australia) en-uk English (United Kingdom) en-us English (United States) eo Esperanto fi Finnish fr French de German el Greek ht Haitian Creole hi Hindi hu Hungarian is Icelandic id Indonesian it Italian ja Japanese ko Korean la Latin lv Latvian mk Macedonian no Norwegian pl Polish pt Portuguese pt-br Portuguese (Brazil) ro Romanian ru Russian sr Serbian sk Slovak es Spanish es-es Spanish (Spain) es-us Spanish (United States) sw Swahili sv Swedish ta Tamil th Thai tr Turkish vi Vietnamese cy Welsh `;
    try {
      if (!args[0]) {
        return m.reply(amlok);
      }

      let text = args.slice(1).join(' ');

      if ((args[0] || '').length !== 2) {
        text = args.join(' ');
      }

      if (!text && m.quoted && m.quoted.text) {
        text = m.quoted.text;
      }

      const { translate: bingTranslate } = require('bing-translate-api');
      const result = await bingTranslate(text, null, args[0]);
      m.reply(result.translation);
    } catch (error2) {
      console.log(error2);
      m.reply(error2.message);
    }
}
break;
case 'whatmusic': {
  try {
    if (/video|audio/.test(mime)) {
      let media = await quoted.download();
      await m.reply(mess.wait);
      let { status, metadata } = await acr.identify(media);

      if (status.code !== 0) {
        return m.reply(status.msg);
      }

      let { title, artists, album, genres, release_date } = metadata.music[0];
      let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`;
      txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`;
      txt += `*• Release Date:* ${release_date}`;

      await client.sendMessage(m.chat, {
        text: txt.trim()
      }, { quoted: m });
    } else {
      return m.reply(`Reply audio/video with command ${prefix}${command}`);
    }
  } catch (err) {
    console.log(err);
    await m.reply(util.format(err));
  }
}
break;
case 'jadian':{
	if (!m.isGroup) return m.reply(mess.group)
	let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}\n*Semoga langgeng yak :)*`.trim()
    let mentionedJid = [orang, jodoh]
    await client.sendTextWithMentions(m.chat, jawab, '', `${command}`, command, m, { contextInfo: { mentionedJid } })
	}
	break
case 'gempa': {
  let link = 'https://data.bmkg.go.id/DataMKG/TEWS/';

  try {
    let res = await fetch(link + 'autogempa.json');
    let anu = await res.json();
    anu = anu.Infogempa.gempa;
    let txt = `*${anu.Wilayah}*\n\n`;
    txt += `*Tanggal :* ${anu.Tanggal}\n`;
    txt += `*Waktu :* ${anu.Jam}\n`;
    txt += `*Datetime :* ${anu.DateTime}\n`;
    txt += `*Lintang :* ${anu.Lintang}\n`;
    txt += `*Bujur :* ${anu.Bujur}\n`;
    txt += `*Potensi :* ${anu.Potensi}\n`;
    txt += `*Magnitude :* ${anu.Magnitude}\n`;
    txt += `*Kedalaman :* ${anu.Kedalaman}\n`;
    txt += `*Koordinat :* ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\n*Dirasakan :* ${anu.Dirasakan}` : ''}`;

    await client.sendMessage(m.chat, {
      image: { url: link + anu.Shakemap },
      caption: txt
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply(`[!] Fitur Error.`);
  }
}
break;
case 'wiki':
case 'wikipedia': {
  if (args.length < 1) return m.reply('Yang Mau Di Cari Apa?');
  const querry = args.join(" ");
  
  async function wikipedia(querry) {
    try {
      const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`);
      const $ = cheerio.load(link.data);
      let judul = $('#firstHeading').text().trim();
      let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
      let isi = [];
      $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
        let penjelasan = $(Ra).find('p').text().trim();
        isi.push(penjelasan);
      });
      for (let i of isi) {
        const data = {
          status: link.status,
          result: {
            judul: judul,
            thumb: 'https:' + thumb,
            isi: i
          }
        };
        return data;
      }
    } catch (err) {
      var notFound = {
        status: link.status,
        Pesan: err
      };
      return notFound;
    }
  }
  
  try {
    const res2 = await wikipedia(querry);
    if (res2.result) {
	console.log(res2.result)
      const result2 = `*Wiki :* ${res2.result.judul}\n\n${res2.result.isi}`;
      client.sendMessage(m.chat, { text: result2 }, { quoted: m });
    } else {
      return m.reply("Not found");
    }
  } catch (error) {
    console.error(error);
    m.reply('Tidak Ditemukan');
  }
}
break;
case 'googleimage':
case 'gimage':{
async function googleImage(query) {
  const data = await fetch(`https://www.google.com/search?q=${query}&tbm=isch`, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,id;q=0.8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
    },
  }).then((response) => response.text());

  const $ = cheerio.load(data);
  const pattern =
    /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
  const matches = [...$.html().matchAll(pattern)];
  const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));

  return matches
    .map(({ groups }) => decodeUrl(groups?.url))
    .filter((v) => /.*\.jpe?g|png$/gi.test(v));
}
  try {
    if (!text) return m.reply(`Example : ${prefix + command} kaori cicak`)
//let gis = require('async-g-i-s')
m.reply(mess.wait)
    let results = await googleImage(q)
    const url = await pickRandom(results)
  var capt = `
*── 「 GOOGLE IMAGE 」 ──*

➸ ${text}
`
await client.sendMessage(m.chat, {image: {url:url}, caption: capt},{quoted:m})
  } catch (e) {
    m.reply(util.format(e));
  }
 }
  break;
case 'google': {
  if (!args[0]) {
    return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`);
  }
  
  let google = require('google-it');
  m.reply(mess.wait);
  
  google({'query': args.join(" ")}).then(res => {
    let teks = `Google Search From : ${text}\n\n`;
    for (let g of res) {
      teks += `*Title* : ${g.title}\n`;
      teks += `*Description* : ${g.snippet}\n`;
      teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`;
    } 
    client.sendMessage(m.chat, { text: teks }, { quoted: m });
  }).catch(err => {
    m.reply(err.message);
  });
}
break;
case 'aiimage': 
case 'serimg':
         case 'aiimg': 
         case 'dalle': {
		  try {
		 const p = await fetchJson('https://mfarels.my.id/api/openai-image?text='+text)
await client.sendMessage(m.chat, {image:{url:p.result}, caption: suck}, {quoted:m}) 
		  } catch (e) {
			  m.reply(e.message)
		  }

       } 
        break;
case 'jadwalsholat':
        case 'sholat':
        case 'solat': {
  if (!q) return m.reply(`Mana Querynya`)
  async function jadwalSolat(tempat) {
    try {
      const cheerio = require("cheerio");
      const cloudscraper = require("cloudscraper");
      const html = await cloudscraper.get("https://jadwalsholat.org/jadwal-sholat/monthly.php");
      const $ = cheerio.load(html);
      const cities = {};
      $("option").each((i, elem) => {
        const city = $(elem).text().toLowerCase().replace(/ /g, "_");
        const value = $(elem).attr("value");
        cities[city] = value;
      });
      const city = cities[tempat.toLowerCase().replace(/ /g, "_")];
      if (!city) {
        return m.reply("Maaf, kota yang Anda masukkan salah.")
      }
      const url = `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${parseInt(city)}`;
      const scheduleHtml = await cloudscraper.get(url);
      const $$ = cheerio.load(scheduleHtml);
      const schedule = {};
      schedule["tgl"] = $$(".table_highlight > td > b").text();
      schedule["imsyak"] = $$(".table_highlight > td:nth-child(2)").text();
      schedule["subuh"] = $$(".table_highlight > td:nth-child(3)").text();
      schedule["terbit"] = $$(".table_highlight > td:nth-child(4)").text();
      schedule["dhuha"] = $$(".table_highlight > td:nth-child(5)").text();
      schedule["dzuhur"] = $$(".table_highlight > td:nth-child(6)").text();
      schedule["ashr"] = $$(".table_highlight > td:nth-child(7)").text();
      schedule["maghrib"] = $$(".table_highlight > td:nth-child(8)").text();
      schedule["isya"] = $$(".table_highlight > td:nth-child(9)").text();
      const parameters = [];
      $$(".table_block_content > td[colspan]").each((i, elem) => {
        parameters.push($$(elem).text());
      });
      schedule["parameter"] = parameters.join(" ");
      return schedule;
    } catch (err) {
      console.log(err);
      return m.reply(`Terjadi kesalahan saat memperoleh jadwal sholat.`)
    }
  }
  if (!text) {
    return m.reply(`Contoh: ${prefix}solat ponorogo`);
  }
    const jadwal = await jadwalSolat(text.trim());
    const date = new Date();
    let txt = `Jadwal solat untuk wilayah ${text} hari ini:\n${readmore}`;
    txt += `Tanggal: ${date.toLocaleDateString("id-ld")}\n`;
    txt += `Imsyak: ${jadwal.imsyak}\n`;
    txt += `Subuh: ${jadwal.subuh}\n`;
    txt += `Terbit: ${jadwal.terbit}\n`;
    txt += `Dhuha: ${jadwal.dhuha}\n`;
    txt += `Dzuhur: ${jadwal.dzuhur}\n`;
    txt += `Ashr: ${jadwal.ashr}\n`;
    txt += `Maghrib: ${jadwal.maghrib}\n`;
    txt += `Isya: ${jadwal.isya}\n`;
    txt += `Parameter: ${jadwal.parameter}\n`;
    await m.reply(txt);
		}
		break
case 'pin':
case 'pinterest':{
if (!text) return m.reply(`Mana Querynya!!!`)
async function pinterest(query) {
    const headers = {
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'cookie': '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    };
    const url = `https://id.pinterest.com/search/pins/?autologin=true&q=${query}`;
    const response = await axios.get(url, { headers: headers });
    const results = [];
    const $ = cheerio.load(response.data);
    $('img').each(function () {
      results.push($(this).attr('src'));
    });
    return results;
  }
 await pinterest(text).then(p => {
	 client.sendMessage(m.chat, {image:{url:pickRandom(p)}, caption:suck}, {quoted:m})
 })
}
break
case 'ssweb': {
  if (!args[0]) return client.sendMessage(m.chat, { text: 'Input URL!' }, { quoted: m });
  if (args[0].match(/xnxx\.com|hamster\.com|nekopoi\.care/i)) {
    return client.sendMessage(m.chat, { text: 'Link tersebut dilarang!' }, { quoted: m });
  }

  async function sswebA(url = '', full = false, type = 'desktop') {
    type = type.toLowerCase()
    if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
    let form = new URLSearchParams()
    form.append('url', url)
    form.append('device', type)
    if (!!full) form.append('full', 'on')
    form.append('cacheLimit', 0)
    let res = await axios({
      url: 'https://www.screenshotmachine.com/capture.php',
      method: 'post',
      data: form
    })
    let cookies = res.headers['set-cookie']
    let buffer = await axios({
      url: 'https://www.screenshotmachine.com/' + res.data.link,
      headers: {
        'cookie': cookies.join('')
      },
      responseType: 'arraybuffer' 
    })
    return Buffer.from(buffer.data)
  }

  try {
  m.reply(mess.wait)
    const screenshot = await sswebA(args[0], true, 'desktop');
    await client.sendMessage(m.chat, {image: screenshot, caption:suck}, {quoted:m})
  } catch (err) {
    console.error(err);
    m.reply(err.message)
  }
}
break;
case 'happymod':
case 'hmsearch': {
  async function hwhw(q) {
    try {
      const response = await axios.get(`https://happymod.com/search.html?q=${q}`);
      const html = response.data;
      const $ = cheerio.load(html);
      const tez = $("body > div.container-row.clearfix.container-wrap > div.container-left > section > div.pdt-app-box");

      if (tez.length === 0) throw { status: 404, result: [] };
      
      const res = [];

      tez.each(function (g, o) {
        const link = 'https://happymod.com' + $(o).find("a").attr("href");
        const title = $(o).find("a").attr("title");
        const thumb = $(o).find("img").attr("data-original");
        res.push({ title, link, thumb });
      });

      return { status: 200, creator: "Caliph", result: res };
    } catch (error) {
      throw error;
    }
  }

  try {
	if (!text) return m.reply(`Nama Aplikasinya?`)
    const p = await hwhw(text);
    const loy = p.result;
    let no = 1;
    let teks = `*HAPPYMOD SEARCHING*\n*Scrape Caliph...*\n\n`;

    for (const kon of loy) {
      teks += `⭔ *No:* ${no++}\n⭔ *Judul:* ${kon.title}\n⭔ *Link:* ${kon.link}\n⭔ *Thumb:* ${kon.thumb}\n\n\n─────────────────\n\n`;
    }

    await client.sendMessage(m.chat, { image: { url: loy[0].thumb }, caption: teks }, { quoted: m });
  } catch (err) {
    console.error(err);
  }
}
break;
case 'tiktokstalk':
case 'ttstalk':{
if (!text) return m.reply(`Mana Querynya!!!\n\n*Example:* ${command} iben_ma`)
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
    let $ = cheerio.load(res.data)
    const pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
    const name = $('h1.user').text().trim()
    const username = $('div.content > h5').text().trim()
    const followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
    const following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
    const description = $('div.content > p').text().trim()
    return {
        profile: pp_user,
        name: username, 
        username: name, 
        followers, 
        following, 
        desc: description
     } 
  }
m.reply(mess.wait)
try {
await tiktokStalk(text).then(p => {
	console.log(p)
	client.sendMessage(m.chat, {image:{url:p.profile}, caption:`*TIKTOK STALKER*\n\n*User:* ${p.name} (${p.username})\n*Following:* ${p.following}\n*Followers:* ${p.followers}\n*Desc:* ${p.desc}`}, {quoted:m})
})
} catch {
try {
const alok = await fetchJson(xzn+`api/ttstalk?user=${text}&apikey=`+zeikey)
await client.sendMessage(m.chat, { image: {url:alok.avatarLarger}, caption: `TIKTOK STALKER\n\n- User: ${alok.nickname} (${alok.uniqueId})\n- Followers: ${alok.followerCount}\n- Following: ${alok.followingCount}\n- Desc: ${alok.signature}`}, {quoted:m})
} catch (e) {
m.reply(e.message)
}
}
}
break
case 'lyrics':
case 'lirik':{
if (!text) return m.reply(`Mana Querynya!!!`)
m.reply(mess.wait)
async function lyrics(search) {
  const searchUrl = `https://www.musixmatch.com/search/${search}`;
  const searchResponse = await axios.get(searchUrl);
  const searchHtml = searchResponse.data;
  const $ = cheerio.load(searchHtml);

  const link = $('div.media-card-body > div > h2').find('a').attr('href');
  const lyricsUrl = `https://www.musixmatch.com${link}`;
  const lyricsResponse = await axios.get(lyricsUrl);
  const lyricsHtml = lyricsResponse.data;
  const $$ = cheerio.load(lyricsHtml);

  const thumb = $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src');
  const lyrics1 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > p > span').text().trim();
  const lyrics2 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim();
  const title = $$('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim().replace('Lyrics','')
  const artist = $$('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();

  if (!thumb || (!lyrics1 && !lyrics2)) {
    return m.reply('No se encontraron letras para la canción');
  }

  const lyrics = `${lyrics1}\n${lyrics2}`;
  return { thumb: `https:${thumb}`, lyrics, title, artist };
}
await lyrics(text).then(p => {
	client.sendMessage(m.chat, {image:{url:p.thumb}, caption:`*LYRICS FOUND*\n\n*Title:* ${p.title}\n*Artist:* ${p.artist}\n*Lyrics:* ${p.lyrics}`}, {quoted:m})
})
}
break
case 'ttp': {
var randomColor = ['ef1a11', '89cff0', '660000', '87a96b', 'e9f6ff', 'ffe7f7', 'ca86b0', '83a3ee', 'abcc88', '80bd76', '6a84bd', '5d8d7f', '530101', '863434', '013337', '133700', '2f3641', 'cc4291', '7c4848', '8a496b', '722f37', '0fc163', '2f3641', 'e7a6cb', '64c987', 'e6e6fa', 'ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
async function ttp(text, tcolor = apiColor) {
    return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
                },
                formData: {
                    'TextToRender': text,
                    'FontSize': '100',
                    'Margin': '30',
                    'LayoutStyle': '0',
                    'TextRotation': '0',
                    'TextColor': `${tcolor}`,
                    'TextTransparency': '0',
                    'OutlineThickness': '3',
                    'OutlineColor': '000000',
                    'FontName': 'Lekton',
                    'ResultType': 'view'
                }
            };
            request(options, async function(error, response, body) {
                if (error) return m.reply(error.message)
                const $ = cheerio.load(body)
                const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
                resolve({ status: 200, result: result })
            });
        })
}
  if (!text) return m.reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
  await m.reply(mess.wait)
  await ttp(text)
    .then((res) => {
      return client.sendImageAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
      m.reply(util.format(err));
    });    
    }
    break
	case 'dehaze': {
		const FormData = require('form-data')
  const Jimp = require('jimp')
async function remini(_0x33b965, _0x34eff3) {
  return new Promise(async (_0x14db15, _0x267c15) => {
    let _0x45d85b = ['enhance', 'recolor', 'dehaze']
    _0x45d85b.includes(_0x34eff3)
      ? (_0x34eff3 = _0x34eff3)
      : (_0x34eff3 = _0x45d85b[0])
    let _0x370778 = new FormData(),
      _0x5c019f = 'https://inferenceengine.vyro.ai/' + _0x34eff3
    _0x370778.append('model_version', 1, {
      'Content-Transfer-Encoding': 'binary',
      contentType: 'multipart/form-data; charset=uttf-8',
    })
    _0x370778.append('image', Buffer.from(_0x33b965), {
      filename: 'enhance_image_body.jpg',
      contentType: 'image/jpeg',
    })
    _0x370778.submit(
      {
        url: _0x5c019f,
        host: 'inferenceengine.vyro.ai',
        path: '/' + _0x34eff3,
        protocol: 'https:',
        headers: {
          'User-Agent': 'okhttp/4.9.3',
          Connection: 'Keep-Alive',
          'Accept-Encoding': 'gzip',
        },
      },
      function (_0x319120, _0x175e8d) {
        if (_0x319120) {
          _0x267c15()
        }
        let _0x15e24d = []
        _0x175e8d
          .on('data', function (_0x2918a5, _0x2d4e53) {
            _0x15e24d.push(_0x2918a5)
          })
          .on('end', () => {
            _0x14db15(Buffer.concat(_0x15e24d))
          })
        _0x175e8d.on('error', (_0x90e19c) => {
          _0x267c15()
        })
      }
    )
  })
}

			if (!quoted) return m.reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Foto Dengan Caption\`\`\` ${prefix + command}`)
			m.reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "dehaze");
			client.sendMessage(m.chat, { image: proses, caption: suck}, { quoted: m})
			}
			break
	case 'recolor': {
		const FormData = require('form-data')
  const Jimp = require('jimp')
async function remini(_0x33b965, _0x34eff3) {
  return new Promise(async (_0x14db15, _0x267c15) => {
    let _0x45d85b = ['enhance', 'recolor', 'dehaze']
    _0x45d85b.includes(_0x34eff3)
      ? (_0x34eff3 = _0x34eff3)
      : (_0x34eff3 = _0x45d85b[0])
    let _0x370778 = new FormData(),
      _0x5c019f = 'https://inferenceengine.vyro.ai/' + _0x34eff3
    _0x370778.append('model_version', 1, {
      'Content-Transfer-Encoding': 'binary',
      contentType: 'multipart/form-data; charset=uttf-8',
    })
    _0x370778.append('image', Buffer.from(_0x33b965), {
      filename: 'enhance_image_body.jpg',
      contentType: 'image/jpeg',
    })
    _0x370778.submit(
      {
        url: _0x5c019f,
        host: 'inferenceengine.vyro.ai',
        path: '/' + _0x34eff3,
        protocol: 'https:',
        headers: {
          'User-Agent': 'okhttp/4.9.3',
          Connection: 'Keep-Alive',
          'Accept-Encoding': 'gzip',
        },
      },
      function (_0x319120, _0x175e8d) {
        if (_0x319120) {
          _0x267c15()
        }
        let _0x15e24d = []
        _0x175e8d
          .on('data', function (_0x2918a5, _0x2d4e53) {
            _0x15e24d.push(_0x2918a5)
          })
          .on('end', () => {
            _0x14db15(Buffer.concat(_0x15e24d))
          })
        _0x175e8d.on('error', (_0x90e19c) => {
          _0x267c15()
        })
      }
    )
  })
}

			if (!quoted) return m.reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Foto Dengan Caption\`\`\` ${prefix + command}`)
			m.reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "recolor");
			client.sendMessage(m.chat, { image: proses, caption: suck}, { quoted: m})
			}
			break
	case 'hd':
	case 'enhance':
	case 'remini': {
		const FormData = require('form-data')
  const Jimp = require('jimp')
async function remini(_0x33b965, _0x34eff3) {
  return new Promise(async (_0x14db15, _0x267c15) => {
    let _0x45d85b = ['enhance', 'recolor', 'dehaze']
    _0x45d85b.includes(_0x34eff3)
      ? (_0x34eff3 = _0x34eff3)
      : (_0x34eff3 = _0x45d85b[0])
    let _0x370778 = new FormData(),
      _0x5c019f = 'https://inferenceengine.vyro.ai/' + _0x34eff3
    _0x370778.append('model_version', 1, {
      'Content-Transfer-Encoding': 'binary',
      contentType: 'multipart/form-data; charset=uttf-8',
    })
    _0x370778.append('image', Buffer.from(_0x33b965), {
      filename: 'enhance_image_body.jpg',
      contentType: 'image/jpeg',
    })
    _0x370778.submit(
      {
        url: _0x5c019f,
        host: 'inferenceengine.vyro.ai',
        path: '/' + _0x34eff3,
        protocol: 'https:',
        headers: {
          'User-Agent': 'okhttp/4.9.3',
          Connection: 'Keep-Alive',
          'Accept-Encoding': 'gzip',
        },
      },
      function (_0x319120, _0x175e8d) {
        if (_0x319120) {
          _0x267c15()
        }
        let _0x15e24d = []
        _0x175e8d
          .on('data', function (_0x2918a5, _0x2d4e53) {
            _0x15e24d.push(_0x2918a5)
          })
          .on('end', () => {
            _0x14db15(Buffer.concat(_0x15e24d))
          })
        _0x175e8d.on('error', (_0x90e19c) => {
          _0x267c15()
        })
      }
    )
  })
}

			if (!quoted) return m.reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Foto Dengan Caption\`\`\` ${prefix + command}`)
			m.reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			client.sendMessage(m.chat, { image: proses, caption: suck}, { quoted: m})
			}
			break
			case 'stabdiff':
			case 'dif':
			case 'diffusion':
			case 'sdif':{
			if (!text) return m.reply("Mana Promptnya?")
			m.reply(mess.wait)
		try {
			const Replicate = require("replicate")
			var replicate = new Replicate({ auth: replikey })
    const output = await replicate.run(
        "wolverinn/chill_watcher:53d24c51f11d93e26f88cc53a00b5c392e5eb62272e07c46152af66a14e27cae", 
        { input: { prompt: text } }
    )
await client.sendMessage(m.chat, {image: {url:output}, caption: suck}, {quoted:m})
		} catch (e) {
			m.reply("Mohon maaf, limit telah tercapai. Silakan coba lagi nanti. 😊")
			console.log(e)
		}
			}
			break
case 'quoteapi':
case 'quote-api':
case 'qc':
  case 'fakechat': {
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  let inputText = m.quoted ? m.quoted.text : text;
  let payload = {
    type: "quoted",
    format: "webp",
    backgroundColor: apiColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: await client.getName(m.quoted ? m.quoted.sender : m.sender),
          photo: {
            url: await client.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image').catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg')
          }
        },
        text: inputText || '',
        replyMessage: {}
      }
    ]
  };
  try {
    const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
      headers: { "Content-Type": "application/json" }
    });
    let buff = Buffer.from(response.data.result.image, "base64");
    if (buff == undefined) {
      return m.reply('Error');
    }
    client.sendImageAsSticker(m.chat, buff, m, { packname, author });
  } catch (err) {
    console.error(err);
    return m.reply('Error');
  }
}
break;
case 'donasi': {
              const tgo = '```'
              let domn = `${tgo}Bot ini gratis untuk semua dan dapat ditambahkan ke Grup. Namun, jika terbantu dan ingin berkontribusi, donasi sangat diapresiasi. Donasi membantu pemilik menjaga kelangsungan hidup bot dan memastikan berfungsi di masa depan. Terima kasih kepada yang sudah berdonasi. Mohon pertimbangkan berkontribusi agar bot terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih :)${tgo}`
              client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/077455dafd3d931bc766e.jpg' }, caption: domn },{quoted:m})
              }
              break
case 'owner':
              client.sendContact(m.chat, global.owner, m)
              break
case 'totext':
case 'ocr': {
  if (!quoted) return m.reply("Mana Gambarnya?")
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  const ocrapi = require("ocr-space-api-wrapper");
  try {
	const uplut = await client.downloadAndSaveMediaMessage(quoted)
    const hasil = await ocrapi.ocrSpace(uplut);
    await m.reply(hasil.ParsedResults[0].ParsedText);
  } catch (error) {
    console.log(error);
    await m.reply(util.format(error));
  }
}
break
case 'run':
case 'runtime':{
	m.reply(`${runtime(process.uptime())}`)
}
break
case 'speed':
case 'speedtest': {
  await client.sendMessage(m.chat, {text: 'Testing Speed...'}, {quoted: m});
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);

  try {
    const { stdout, stderr } = await exec('python3 ./assets/speed.py --share');
    if (stdout.trim()) {
      const speedek = await ngelink(stdout.trim());
      const speedtestResult = {
        text: stdout,
        contextInfo: {
          externalAdReply: {
            title: 'SPEEDTEST RESULT',
            body: '',
            thumbnailUrl: "https://telegra.ph/file/feeb4f62c850e6117f74c.jpg",
            sourceUrl: speedek[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      };
      await client.sendMessage(m.chat, speedtestResult, { quoted: m });
    }
    if (stderr.trim()) {
      await client.sendMessage(m.chat, { text: stderr }, { quoted: m });
    }
  } catch (e) {
    await client.sendMessage(m.chat, { text: e.toString() }, { quoted: m });
  }
}
break;
case 'bardai':
case 'bard':{
	if (!text) return m.reply(`Mana Textnya?`)
				  m.reply(mess.wait)
			  try {
			  const { askAI } =  await import("bard-ai");
              const Bard = await import("bard-ai");
await Bard.init("__Secure-1PSID=YwhEV3C9kHPmxfFF_mbgeaEaR3LPVv_uSUuDMzm8acUGhu-JRsTJo753b6Dz3rXJsQZnwg.");

console.log(await askAI("Hello world!"));
		  } catch (e) {
			  m.reply(e.message)
		  }
}
break
case 'bingai':
case 'bing':{
	if (!text) return m.reply(`Mana Textnya?`)
				  m.reply(mess.wait)
			  const { BingChat } = await import('bing-chat')
			  try {
			  const api = new BingChat({
    cookie: "1ErAOTphvSTjlanGYpG4q-4WFpboeV0g-BiLroA33u8qEkmFEiSlpx_H19IFyrbj_fzfF2uGHJEuKxWzCZuO5CwaiEZ4iVl015Du3QTvXPyJcIDJRuHE5EmLWsjGrlilvcyaSCfhMHyZUTNHskX610mKEvqdRbIcBQl-p7L6IRt6ea1egWVkPUwvfGx4bwZksqWix5wkzcziQH6PSRHl42g" 
  }) // COOKIE: _U

  const res = await api.sendMessage(text)
  console.log(res.text)
  await m.reply(res.text)
		  } catch (e) {
			  m.reply(e.message)
		  }
}
break
case 'ai': 
case 'openai':
case 'gpt':
case 'chatgpt':
case 'aii': {
			  if (!text) return m.reply(`Mana Textnya?`)
				  m.reply(mess.wait)
			  try {
				  async function ChatGpt(query, symsg) {
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": "https://2chat.c3r.ink/",
      "accept": "application/json, text/plain, /"
    },
    body: JSON.stringify({
      prompt: query,
      options: {},
      regenerate: false,
      roomId: 1002,
      uuid: Date.now(),
      systemMessage: symsg,
      top_p: 1,
      temperature: 0.8
    })
  };

  const response = await fetch("https://chatapicn.a3r.fun/api/chat-process", requestData);
  const data = await response.text();
  let out = JSON.parse(data.split("\n").pop());
  return out;
}
let ngtd = `Saya Rusdi Bot, sebuah sistem yang dikembangkan dengan memakai bahasa Javascript dan dibuat oleh seorang Developer asal Tuban bernama this.ilham_. Saya telah dirancang untuk memberikan bantuan dan informasi kepada pengguna dengan menggunakan kecerdasan buatan. Saya terus belajar dan berkembang dengan harapan dapat memberikan pengalaman yang lebih baik kepada pengguna.`
await ChatGpt(text, ngtd).then(p => { 
console.log(p)
m.reply(p.text) })
			  } catch (e) {
				  m.reply(e.message)
			  }
			  }
			  break
case 'telestick':
case 'sticktele':
case 'telesticker': {
async function telegramStic(url) {
    let packName = url.replace("https://t.me/addstickers/", "")
    let resOne = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!resOne.ok) return m.reply(`${resOne.status} ${resOne.statusText}`)
    let jsonOne = await resOne.json()
    let sticArr = []
    for (let i of jsonOne.result.stickers) {
        let fileId = i.thumb.file_id
        let resTwo = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jsonTwo = await resTwo.json()
        sticArr.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jsonTwo.result.file_path)
    }
    return {
        name: jsonOne.result.name,
        title: jsonOne.result.title,
        result: sticArr
    }
    }
if (!args || !args[0]) return m.reply(`Input URL:\n${command} https://t.me/addstickers/shironacry`);
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(`Input URL:\n${usedPrefix + command} https://t.me/addstickers/twohundredthree`);
    let stik = await telegramStic(args[0])
    for (let sticker of stik.result) {
        const res = await fetch(sticker)
        let buff = Buffer.from(await res.arrayBuffer())
        //await m.reply( new MessageMedia((await fileTypeFromBuffer(buff)).mime, buff.toString("base64")), false, { sendMediaAsSticker: true, stickerName: `jamsut · alok`, stickerAuthor: 'efef', stickerCategories: ['😅'] } )
        await client.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
    }
    }
break
case 'setppbot': {
            if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await client.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await client.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
case 'c':
  case 'getcase':{
    if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner);
    const getCase = (cases) => {
      const fileContent = fs.readFileSync("./connect/hamz.js").toString();
      const caseContent = fileContent.split(`case '${cases}'`)[1].split("break")[0];
      return "case " + `'${cases}'` + caseContent + "break;";
    };
    m.reply(getCase(q));
	}
    break;
case 'nobg':
case 'imagenobg':
      case 'removebg': case 'remove-bg':{
	            if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
			    m.reply(mess.wait)
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            localFile = await client.downloadAndSaveMediaMessage(quoted)
	            outputFile = './tmp/hremo-'+getRandom('.png')
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "50%",
	            outputFile 
	            }).then(async result => {
	            client.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: suck}, { quoted : m })
	            fs.unlinkSync(outputFile)
	            })
	  }
	            break
case 'jarak': {
  try {
    const [from, to] = text.split("|")
    if (!(from && to)) return m.reply("Contoh: " + prefix + "jarak jakarta|bandung")
    m.reply(mess.wait)
    const data = await getDistance(from.trim(), to.trim())
    if (data.img) {
      await client.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
    } else {
      await m.reply(data.desc)
    }
  } catch (error) {
    console.log(error)
    await m.reply(util.format(error))
  }
async function getDistance(from, to) {
  try {
    const html = (await axios.get(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + from + ' ke ' + to)}&hl=id`)).data
    const $ = cheerio.load(html)
    const obj = {}
    const img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split(',')[1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
  } catch (error) {
    console.log(error)
    throw new Error("Terjadi kesalahan saat memproses permintaan jarak")
  }
}
}
break
case 'tourl': {
  const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
  filezone,
  fileio
} = require('../lib/uploader');
const {tele} = require('../lib/uploadImage.js')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply('✳️ Responde a una imagen/video')
  let media = await (q.download() || client.downloadAndSaveMediaMessage(q))
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? tele : fileio)(media)
  m.reply(`▢ ${formatp(media.length)}

▢ ${isTele ? '(No expiration date)' : '(Unknown)'} 
▢ URL : ${link}`)
}
break;
case 'toanime': {
 if (!quoted) return m.reply("Mana Fotonya?")
 if (!/image/.test(mime)) return m.reply(`\`\`\`Send/Reply Foto Dengan Caption\`\`\` ${prefix + command}`)
  m.reply(mess.wait);
  const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime,
    filezone,
    fileio
  } = require('../lib/uploader');
  const mpoedia = await client.downloadAndSaveMediaMessage(quoted);
  const anu = await TelegraPh(mpoedia);
  const anim = xzn + `api/toanime?url=${util.format(anu)}&apikey=` + zeikey;
  await client.sendMessage(m.chat, { image: await getBuffer(anim), caption: suck }, { quoted: m });
}
  break;
case 'tinyurl':{
               if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => m.reply(`Nih ${a.data}`))
              .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
}
               break
case 'megadl':
case 'mgz':
  case 'mega': {
  if (!text) return m.reply('URL tidak ditemukan')
  try {
    const { File } = require('megajs')
    const file = File.fromURL(text)
    await file.loadAttributes()
    const data = await file.downloadBuffer()
    client.sendMessage(m.chat, { document: data, fileName: file.name, caption: `Berhasil Didapatkan...\nFilename: ${file.name}\nSize: ${formatp(file.size)}`, mimetype: file.name.split(".")[1] },{quoted:m})
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengunduh file.')
  }
}
break;
case 'get': {
            if (!text) return m.reply('mana linknya');
            let url = new URL(text);
            let res = await fetch(url);
            let bufg = await getBuffer(text);
            if (parseInt(res.headers.get('content-length')) > 100 * 1024 * 1024) {
              delete res;
              return m.reply(`Content-Length: ${res.headers.get('content-length')}`);
            }
            if (!/text|json/.test(res.headers.get('content-type'))) {
              await client.sendFileUrl(m.chat, text, text, m);
            } else {
              let txt = await res.text();
              try {
                txt = util.format(JSON.parse(txt));
              } catch (e) {
                txt += '';
              } finally {
                m.reply(txt.slice(0, 65536));
              }
            }
          }
          break; 
case 'brainly': {
  try {
    if (!q) return m.reply(`Kirim perintah: ${prefix}brainly *soal*\nContoh: ${prefix}brainly apa itu dpr`);
    const brainly = require('brainly-scraper');
    brainly(q, 5, "id").then(res => {
      let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`;
      for (let x = 0; x < res.data.length; x++) {
        resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`;
      }
      m.reply(resultbrainly.trim());
    });
  } catch {
    const Brainly = require("brainly-scraper-v2");
    const brainly = new Brainly('id');
    const res = await brainly.search(q, 'id').catch(() => null);
    console.log(res);
    const answer = res.map(({ question, answers }, i) => `
      *Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
      *Jawaban Ke ${i + 1}*${v.verification ? ' (Terverifikasi)' : ''}${v.isBest ? ' (Terbaik)' : ''}
      ${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join('')}`).join('\n' + '-'.repeat(45));
    m.reply(answer.trim());
  }
}
  break;
case 'ttdl':
       case 'tiktoknowm':
	   case 'tiktokdl':
       case 'tiktok':
case 'tt': {
try {
  if (!args[0]) return m.reply(`Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
  if (!args[0].match(/^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/)) return m.reply('URL Tidak Ditemukan!');
  m.reply(mess.wait);
    try {
      await tiktok(args[0]).then(p => {
		  console.log(p)
        client.sendMessage(m.chat, { video: { url: p.video[0] }, caption: suck }, { quoted: m });
      });
    } catch (e3) {
      m.reply(e3.message);
      try {
        const tt2 = await tiktokdl(args[0]);
        console.log(tt2);
        await client.sendMessage(m.chat, {
          video: { url: tt2.play },
          caption: suck
        }, { quoted: m });
      } catch (e2) {
        m.reply(e2.message);
      }
    }
} catch (error) {
  console.log(error);
  m.reply(error.message);
}
}
break;
case 'tiktokmp3':
     case 'tiktokmusic':
	 case 'tiktokmusicdl':
	 case 'ttmp3': {
try {
  if (!args[0]) return m.reply(`Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
  if (!args[0].match(/^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/)) return m.reply('URL Tidak Ditemukan!');
  m.reply(mess.wait);
    try {
      await tiktok(args[0]).then(p => {
		  console.log(p)
  client.sendMessage(m.chat, {
    document: {url:p.audio[0]},
    mimetype: 'audio/mpeg',
    fileName: `TIKTOK MP3 By ${client.user.name}.mp3`
  }, {
    quoted: m
  })
      });
    } catch (e3) {
      m.reply(e3.message);
      try {
        const tt2 = await tiktokdl(args[0]);
        console.log(tt2);
  client.sendMessage(m.chat, {
    document: {url:tt2.music},
    mimetype: 'audio/mpeg',
    fileName: `TIKTOK MP3 By ${client.user.name}.mp3`
  }, {
    quoted: m
  })
      } catch (e2) {
        m.reply(e2.message);
      }
    }
} catch (error) {
  console.log(error);
  m.reply(error.message);
}
}	
break 
case 'murothal': {
if (!text) return m.reply(`Mau juz yang keberapa?\n\n Example : ${command} 1`)
if (args[0]) m.reply(mess.wait)
if (args[0] === "1") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SiNO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, {quoted:m})
                 } else if (args[0] === "2") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RJmQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, {quoted:m})
                 } else if (args[0] === "3") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSrtF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "4") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SXi3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "5") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RZm3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "6") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/28MBohs' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "7") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRIZC' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m})
                 } else if (args[0] === "8") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bufF7o' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "9") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2byr1bu' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "10") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHfyUH' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "11") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHf80y' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m})
                 } else if (args[0] === "12") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bWnTby' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "13") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFTiKQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "14") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SUTA' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "15") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRQIM' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "16") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SegG' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "17") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHsFz' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "18") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SCfc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m})
                 } else if (args[0] === "19") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSq95' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "20") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI1zc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "21") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8VcBO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "22") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRxNP' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "23") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brItxm' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "24") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHKw5' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "25") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brImlf' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "26") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRHF2' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m})
                 } else if (args[0] === "27") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRXno' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "28") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI3ai' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "29") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRyBF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "30") {
                 client.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFREcc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } 
}
break
case 'git':
case 'gitclone': {
  try {
    if (!args[0]) {
      return m.reply(`Linknya?\n\n- Example: ${prefix + command} https://github.com/Nurutomo/wabot-aq`);
    }
    const regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!regx.test(args[0])) {
      return m.reply('Linknya salah');
    }
    m.reply(mess.wait);
    const [, usker, repo] = args[0].match(regx) || [];
    const repos = repo.replace(/.git$/, '');
    const hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`;
    const response = await fetch(hasdl, { method: 'HEAD' });
    const filename = response.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
    const file = { url: hasdl };
    const sendMessageOptions = { quoted: m };
    client.sendMessage(m.chat, { document: file, mimetype: 'application/zip', fileName: filename }, sendMessageOptions);
  } catch (err) {
    m.reply(util.format(err));
  }
}
  break;
case 'tahta':
case 'harta':
case 'hartatahta': {
  let fs = require('fs');
  let { spawn } = require('child_process');
  let path = require('path');
  let crypto = require('crypto');
  let src = path.join(__dirname, '../src/');
  let _font = path.join(src, 'font');
  let aesthetic = path.join(src, 'Aesthetic');

  async function ht(text = '') {
    return new Promise((resolve, reject) => {
      let img = path.join(aesthetic, pickRandom(fs.readdirSync(aesthetic)));
      let font = path.join(_font, 'Roboto-Black.ttf');
      let w = 1024;
      let h = w;
      let s = w + 'x' + h;
      let xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`;
      let yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`;
      let fsize = 320 / 2048 * w;
      let lh = 1.5;
      let format = ',format=rgb24';
      let layers = [
        `[v:0]scale=${s}${format}[im]`,
        textArgs('HARTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2-(text_h*${lh})`, w, h) + format + '[top]',
        textArgs('TAHTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2`, w, h) + format + '[mid]',
        textArgs(text, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2+(text_h*${lh})`, w, h) + format + '[bot]',
        '[top][mid]blend=all_mode=addition[con]',
        '[con][bot]blend=all_mode=addition[txt]',
        `nullsrc=s=${s},geq='r=${xF}:g=${xF}:b=${xF}'[dx]`,
        `nullsrc=s=${s},geq='r=${yF}:g=${yF}:b=${yF}'[dy]`,
        '[txt][dx][dy]displace[wa]',
        '[im][wa]blend=all_mode=multiply:all_opacity=1'
      ];

      const randomFileName = crypto.randomBytes(8).toString('hex') + '.png';
      let o = path.join("./tmp", randomFileName);

      let args = [
        '-y',
        '-i', img,
        '-filter_complex', layers.join(';'),
        '-frames:v', '1',
        o
      ];
      console.log(layers);
      console.log('ffmpeg', ...args);
      let ffmpegProcess = spawn('ffmpeg', args);
      ffmpegProcess.on('error', reject);
      ffmpegProcess.on('close', () => {
        try {
          let image = fs.readFileSync(o);
          resolve(image);
        } catch (e) {
          reject(e);
        } finally {
          fs.unlinkSync(o); // Hapus file temporary setelah selesai
        }
      });
    });
  }

  function noise(_var, depth = 4, s = 1024, freq) {
    let forms = [];
    for (let i = 0; i < depth; i++) {
      forms.push(
        formula(
          _var,
          freq * rand(40, 80) * (s / 2048) / s * ((i + 1) / 5),
          rand(-Math.PI, Math.PI),
          (i + 1) / depth * 8,
          0
        )
      );
    }
    return forms.join('+');
  }

  function formula(_var, freq, offset, amp, add) {
    return `(${add.toFixed(3)}+${amp.toFixed(4)}*sin(${offset.toFixed(6)}+2*PI*${_var}*${freq.toFixed(6)}))`;
  }

  function textArgs(text, background, color, size, fontfile, x = '200', y = '200', w = 1024, h = 1024) {
    return `color=${background}:s=${w}x${h},drawtext=text='${text.replace(/[\\]/g, '\\$&')}':fontfile='${fontfile.replace(/[\\]/g, '\\$&')}':x=${x}:y=${y}:fontsize=${size}:fontcolor=${color}`;
  }

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

function rand(min, max, q = 0.001) {
    return Math.floor((Math.random() * (max - min)) / q) * q;
  }

  try {
    m.reply(mess.wait)
    let img = await ht(text ? text : ':v');
    await client.sendMessage(m.chat, { image: img, caption: suck }, { quoted: m });
  } catch (e) {
    console.log(e);
  }
}
break;
case 'ghstalk':
case 'githubstalk':{
                if (!text) return m.reply( 'Harap Masukan Username')
                await m.reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
				if (!ano) return m.reply(`Error`)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Company*: ${ano.company}\n➸ *Public Repos:* ${ano.public_repos}\n➸ *Public Gists:* ${ano.public_gists}\n➸ *Followers:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await client.sendMessage(m.chat, { image: {url:ano.avatar_url}, caption: hasilnya }, {quoted:m})
                } catch (err) {
                console.log(err)
                }
	  }
                break
case 'googledrivedl':
case 'googledrive':
case 'gdrivedl':
case 'gdrive': {
  async function gdrivedl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Límite de descarga del link'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatp(sizeBytes), mimetype: data.headers.get('content-type') }
}
  try {
    if (!args[0]) return m.reply(`Input URL\n\nExample: ${command} https://drive.google.com/file/d/0B_WlBmfJ3KOfdlNyVWwzVzQ1QTQ/view?resourcekey=0-P3IayYTmxJ5d8vSlf-CpUA`);
    if (!args[0].match(/drive\.google/i)) return m.reply('Invalid URL');
	m.reply(mess.wait)
    let res = await fetchJson(ramdani+`dl/gdrive?url=`+args[0]);
	const alok = res.result
    await client.sendMessage(m.chat, {document:{url:alok.downloadUrl}, caption:'*Filename:* '+alok.fileName+`\n*Size:* `+alok.fileSize, mimetype:alok.mimetype, fileName:alok.fileName}, {quoted:m});
  } catch (err) {
    m.reply(err.message);
  }
}
  break;
case 'igstalk':{
if (!q) return m.reply(`Mana Usernamenya?`)
async function igstalk(username) {
  try {
    const { data } = await axios.get(`https://dumpoir.com/v/${username}`, {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYT3dzSXI2YWR6SG1fNFdmTllfZnFIZ1Ra; __gads=ID=f8ead4404e6a0e16-2206b4189ace0028:T=1636352226:RT=1636352226:S=ALNI_MbsEYYwp3U-9PJHoUHPA0mj4zn3uQ; _ym_uid=1636352226596108095; _ym_d=1636352226; _ym_isad=2; __atssc=google%3B1; __atuvc=3%7C45; __atuvs=6188c0df986e798b002"
      }
    });
    const $ = cheerio.load(data);
    const results = {
      username: $('#user-page > div.user > div.row > div > div.user__title > h4').text().replace(/@/gi, '').trim(),
      fullName: $('#user-page > div.user > div.row > div > div.user__title > a > h1').text(),
      profilePicHD: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, '').trim(),
      bio: $('#user-page > div.user > div.row > div > div.user__info-desc').text(),
      followers: $('#user-page > div.user > div.row > div > ul > li:nth-child(2)').text().replace(/Followers/gi, '').trim(),
      followersM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(3)').text().replace(/Followers/gi, '').trim(),
      following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(/Following/gi, '').trim(),
      followingM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(4)').text().replace(/Following/gi, '').trim(),
      postsCount: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(/Posts/gi, '').trim(),
      postsCountM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(1)').text().replace(/Posts/gi, '').trim()
    };
    return results;
  } catch (e) {
    console.error(e);
    return m.reply('Not found ;-;')
  }
}
await igstalk(q).then(p => {
	console.log(p)
	client.sendMessage(m.chat, {image: {url:p.profilePicHD}, caption: `- *Username:* ${p.username}\n- *Full:* ${p.fullName}\n- *Followers:* ${p.followers}\n- *Following:* ${p.following}\n- *Post Count:* ${p.postsCount}\n- *Bio:* ${p.bio}`},{quoted:m})
})
}
break
case 'instagram':
case 'instagramdl':
  case 'igfoto':
   case 'ig':
   case 'igdl':
case 'igmp4':
case 'igvideo': {
  if (!args || !args[0]) return m.reply(`Usage example...\n${command} https://www.instagram.com/reel/CsC-4wDL0oO/?igshid=NTc4MTIwNjQ2YQ==`);
         if (!args[0].match(/^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/)) return m.reply(mess.link)
m.reply(mess.wait);
try {
await snapsave(args[0]).then(p => {
if (!p.data) return m.reply("Maaf Mungkin Servernya Error.")
for (let ai of p.data) {
client.sendFileUrl(m.chat, ai.url, suck, m)
}
})
} catch (ee) {
m.reply(ee.message)
  }
  }
  break;
case 'mediafirev2':{
if (args.length < 1) return m.reply(`Mana linknya?\nExample: ${command} https://www.mediafire.com/file/6tknikx5f3jfsh8/alphabotv16.zip/file`);
if (!args[0].match(/^(?:https?:\/\/)?(?:www\.)?(?:mediafire\.com\/)(?:file\/)?(?:\S+)?$/)) return m.reply(mess.link)
	try {
	  m.reply(mess.wait)
await mediafireDlV2(args[0]).then(p => {
	console.log(p)
	client.sendMessage(m.chat, {
      document: {url: p.link},
      mimetype: p.mime,
      fileName: p.name,
      caption: JSON.stringify(p, '', 2)
    }, { quoted: m });
})
	} catch (e) {
		m.reply(e.message)
		console.log(e)
	}
}
break
case 'mddl':
case 'mediafiredl':
case 'md':
  case 'mediafire': {
  if (args.length < 1) return m.reply(`Mana linknya?\nExample: ${command} https://www.mediafire.com/file/6tknikx5f3jfsh8/alphabotv16.zip/file`);
  if (!args[0].match(/^(?:https?:\/\/)?(?:www\.)?(?:mediafire\.com\/)(?:\S+)?$/)) return m.reply(mess.link)
  try {
    m.reply(mess.wait);
    const result = await mediafireDl(args[0]);
	console.log(result)
    const res = result;
    const txt = `*Media Fire Downloader*
\n🗄️ *Nama:* ${res.name}
📁 *Ukuran:* ${res.size}
🗃️ *Mimetype:* ${res.ext}
📨 *Link:* ${res.link}
\n_*Tunggu proses mengirim media...⏳*_`;
    const message = {
      text: txt,
      quoted: m
    };
    client.sendMessage(m.chat, message, {quoted:m});
    await client.sendMessage(m.chat, {
      document: {url: res.link},
      mimetype: res.ext,
      fileName: res.name,
      caption: suck
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply(`Error: ${e.message}`);
  }
  }
  break;
  case 'join':  {
              if (!isCreator) return m.reply(mess.botOwner)
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
              break
			  case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
await client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  const { generateWAMessageFromContent } = require('@adiwajshing/baileys');
  let usek = participants.map(a => a.id);
  let q = m.quoted ? m.quoted : m;
  let c = m.quoted ? m.quoted : m.msg;
  const msg = client.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      },
    }, {
      quoted: m,
      userJid: client.user.jid
    }),
    text || q.text, client.user.jid, { contextInfo: { mentionedJid: usek, externalAdReply: {
          title: "",
          body: "HIDETAG by "+ client.user.name,
          thumbnailUrl: 'https://i.ibb.co/371sj9Z/preview-Eqre-Nu-Xm-C-transformed.png',
          sourceUrl: "https://chat.whatsapp.com/Kz4QgiAVNlhBCFxcpMaqaR",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        } } }
  );
  await client.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case 'q':
case 'quoted':{
const { proto } = (await import('@adiwajshing/baileys')).default
let M = proto.WebMessageInfo;
if (!m.quoted) return m.reply('reply pesan!')
    let q = M.fromObject(m.quoted.fakeObj)
    if (!q.quoted) return m.reply('pesan yang anda reply tidak mengandung reply!')
    await q.quoted.copyNForward(m.chat, true)
}
break
case 'artinama':{
if (!text) return m.reply(`Mana Querynya!!!`)

const axios = require("axios");
const cheerio = require("cheerio");

async function ArtiNama(nama) {
  try {
    const { data } = await axios.get(
      `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
    );
    const $ = cheerio.load(data);
    const isi = $("#body").text().split("Nama:")[0];
    const res = {
      status: 200,
      creator: "caliph",
      result: isi.trim(),
    };
    return res;
  } catch (error) {
    return m.reply(error.message)
  }
}

try {
  const p = await ArtiNama(text);
  console.log(p);
  client.sendMessage(m.chat, { text: p.result }, { quoted: m });
} catch (err) {
  console.error(err);
}
}
break;
case 'filmsearch':
case 'film': {
  if (!text) return m.reply('Mana Querynya!!!!');

  async function lk21(q) {
    const axios = require('axios');
    const cheerio = require('cheerio');

    const html = await axios.get('https://nonton.lk21official.wiki/?s=' + q);
    const $ = cheerio.load(html.data);

    const res = [];
    const arr = $('body > main > div > section > div > div > div > div');

    if (arr.text() === undefined || arr.text() === '' || !arr.text()) {
      return { status: 404, creator: 'Caliph', result: [] };
    }

    arr.each(function (a, b) {
      const link = $(b).find('a').attr('href');
      const judul = $(b).find('a').attr('title');
      const thumb = 'https:' + $(b).find('img').attr('src');
      const genre = $(b).find('p.cat-links').text();
      const sutradara = $(b).find('p:nth-child(3)').text().split(':')[1];
      res.push({ judul, link, thumb, genre, sutradara });
    });

    return { status: html.status, creator: 'Caliph', result: res };
  }

  try {
    const p = await lk21(text);
    let no = 1;
    let teks = `*FILM FOUND*\n*Scrape LK21...*\n\n`;
	console.log(p)
    for (const alok of p.result) {
      teks += `⭔ *No:* ${no++}\n⭔ *Judul:* ${alok.judul}\n⭔ *Link:* ${alok.link}\n⭔ *Thumb:* ${alok.thumb}\n⭔ *Genre:* ${alok.genre}\n⭔ *Sutradara:* ${alok.sutradara}\n\n─────────────────\n\n`;
    }
    client.sendMessage(m.chat, { image: { url: p.result[0].thumb }, caption: teks }, { quoted: m });
  } catch (err) {
    console.error(err);
  }
}
break;
case 'fbdown':
 case 'fb':
 case 'facebook':
 case 'fbdl':{
if (!args || !args[0]) 
      return m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`)
  if (!args[0].match(/^(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/)) return m.reply(mess.link)
  m.reply(mess.wait)
await facebook(args[0]).then(p => {
if (!p) return m.reply("Maaf Mungkin Servernya Error.")
  client.sendMessage(m.chat, {video: {url:p.videoUrl}, caption: suck}, {quoted:m});
  console.log(p);
}).catch(error => {
  m.reply(error.message)
});
 }
 break
case 'soundclouddl':
case 'soundcloud':{
if (!args || !args[0]) return m.reply(`Gunakan format: ${command} https://soundcloud.com/ibmanggapraharjasd/for-revenge-serana-1?si=9fe556ad9b9548f4b1febc762ae0a587`)
if (!args[0].match('soundcloud.com')) return m.reply(mess.link)
if (!isUrl(args[0])) return m.reply(mess.link)
m.reply(mess.wait)
await fetchJson(ramdani+`dl/soundcloud?url=${args[0]}`).then(p => {
	client.sendFileUrl(m.chat, p.result.link, suck, m)
})	
}
break
case 'cocofundl':
case 'cocofun':{
if (!args || !args[0]) return m.reply(`Gunakan format: ${command} https://www.icocofun.com/share/post/276288327855?lang=id&pkg=id&share_to=copy_link&m=e0471d8b683feb8a22caad096bbbbf99&d=e8d3a0280f37cf0e547c2f231715115fb5c93ebd658c441c2d9816c587d9c46a&nt=1`)
if (!args[0].match('icocofun.com')) return m.reply(mess.link)
if (!isUrl(args[0])) return m.reply(mess.link)
m.reply(mess.wait)
await fetchJson(ramdani+`dl/cocofun?url=${args[0]}`).then(p => {
	client.sendFileUrl(m.chat, p.result.url, suck, m)
})
}
break
case 'capcutdl':
case 'capcut':{
if (!args || !args[0]) return m.reply(`Gunakan format: ${command} https://www.capcut.com/watch/7237430664168033538?use_new_ui=1&template_id=7237430664168033538&share_token=20ef5ba6-606f-405c-bd1e-e46bfcb1bb13&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
if (!args[0].match('capcut.com')) return m.reply(mess.link)
if (!isUrl(args[0])) return m.reply(mess.link)
m.reply(mess.wait)
try {
await fetchJson(ramdani+`dl/capcut?url=${args[0]}`).then((p) => {
console.log(p)
let konz = p.result
client.sendFileUrl(m.chat, konz.originalVideoUrl, suck, m) 
})
} catch (e) {
m.reply(e.message)
}
}
break
case 'tw':
case 'twdl':
 case 'twitter':
 case 'twitterdl':{
if (!args || !args[0]) return m.reply(`Gunakan format: ${command} https://twitter.com/mosidik/status/1475812845249957889?s=20`)
if (!args[0].match(/http(?:s)?:\/\/(?:www\.|mobile\.)?twitter\.com\/([a-zA-Z0-9_]+)/)) return m.reply(mess.link)
m.reply(mess.wait)
try {
await fetchJson(ramdani+`dl/twitter?url=${args[0]}`).then((p) => {
console.log(p)
let konz = p.result
client.sendFileUrl(m.chat, konz.url, suck, m) 
})
} catch (e) {
m.reply(e.message)
}
 }
 break
		case 'npm':
case 'npmjs': {
  if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`);
  
  const axios = require('axios');

  axios.get(`https://www.npmjs.com/search/suggestions?q=${encodeURIComponent(q)}`)
    .then(({ data }) => {
      let listnpm = "*「 NPMJS-SEARCH 」*\n\n";
      for (let y = 0; y < data.length; y++) {
        const npmData = data[y];
        listnpm += `• *Name:* ${npmData.name}\n• *Scope:* ${npmData.scope}\n• *Publisher:* ${npmData.publisher.username}\n• *Link:* ${npmData.links.npm}\n• *Date:* ${npmData.date}\n• *Description:* ${npmData.description}\n\n`;
      }
      client.sendMessage(from, {text: listnpm.trim()}, { quoted: m});
    })
    .catch((err) => {
      m.reply(err.message);
    });
}
break;
  case 'play':
case 'ytplay': {
  if (!text) return m.reply('Masukkan Judul / tautan')
  m.reply(mess.wait)
  try {
    var yts = require("yt-search");
    var searchResult = await yts(text);
    if (!searchResult || !searchResult.videos.length) return m.reply('Video/Audio Tidak Ditemukan');
    var video = searchResult.videos[0];
	console.log(video)
    var { title, description, thumbnail, videoId, timestamp, ago, views } = video;
    var url = 'https://www.youtube.com/watch?v=' + videoId;
    var tmb = thumbnail;
    var captionvid = `∘ Title: ${title}
∘ Published: ${ago}
∘ Duration: ${timestamp}
∘ Views: ${views}
∘ Ago: ${ago}
∘ Url: ${url}
∘ Description: ${description}`;
    
    await client.sendMessage(m.chat, { text: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "",
          body: "Powered by",
          thumbnailUrl: thumbnail,
          sourceUrl: url,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await downloadMp3(url);
  } catch (e) {
    m.reply(e.message)
  }
}
break;
case 'playmp4':
case 'ytplaymp4': {
  if (!text) return m.reply('Masukkan Judul / tautan')
  m.reply(mess.wait)
  try {
    var yts = require("yt-search");
    var searchResult = await yts(text);
    if (!searchResult || !searchResult.videos.length) return m.reply('Video/Audio Tidak Ditemukan');
    var video = searchResult.videos[0];
	console.log(video)
    var { title, description, thumbnail, videoId, timestamp, ago, views } = video;
    var url = 'https://www.youtube.com/watch?v=' + videoId;
    var tmb = thumbnail;
    var captionvid = `∘ Title: ${title}
∘ Published: ${ago}
∘ Duration: ${timestamp}
∘ Views: ${views}
∘ Ago: ${ago}
∘ Url: ${url}
∘ Description: ${description}`;
    
    await client.sendMessage(m.chat, { image:{url:thumbnail},caption: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "",
          body: "Powered by",
          thumbnailUrl: thumbnail,
          sourceUrl: url,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await downloadMp4(url);
  } catch (e) {
    m.reply('Video/Audio Tidak Ditemukan');
  }
}
break;
case 'getmusic':
case 'getvideo': {
  try {
    if (!text) return m.reply(`Example : ${prefix + command} 1`)
    if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch');
    if (!m.quoted.isBaileys) return m.reply('Hanya Bisa Membalas Pesan Dari Bot')
    let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
    if (!urls) return m.reply('Mungkin pesan yang anda reply tidak mengandung result ytsearch')
    m.reply(mess.wait);
    if (command === 'getmusic') {
      await downloadMp3(urls[text - 1]);
    } else {
      await downloadMp4(urls[text - 1]);
    }
  } catch (e) {
    m.reply(e.message);
  }
}
break;
  case 'yts': case 'ytsearch': {
                if (!q) return m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
		case 'tomp4':
case 'tovideo':
case 'tovid':
case 'toimage':
case 'toimg': {
  if (!m.quoted) return m.reply(command === 'toimage' || command === 'toimg' ? 'Reply sticker' : 'Reply Image')
  if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await client.downloadAndSaveMediaMessage(quoted)
  if (command === 'tomp4' || command === 'tovideo' || command === 'tovid') {
    let {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
  filezone,
  fileio
} = require('../lib/uploader.js')
    let webpToMp4 = await webp2mp4File(media)
    await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  } else {
    const randomFileName = crypto.randomBytes(8).toString('hex') + '.png'
    const ran = path.join("./tmp", randomFileName)
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
      if (err) return m.reply(util.format(err))
      let buffer = fs.readFileSync(ran)
      client.sendMessage(m.chat, { image: buffer }, { quoted:m })
      fs.unlinkSync(ran)
    })
  }
}
break;
case 'yta':
case 'ytmp3':
case 'mp3':
case 'ytv':
case 'ytmp4':
case 'mp4': {
  if (!args[0]) return m.reply(command.includes('yt') ? 'Masukkan URL!' : 'Masukan Link!')
  if (!/^(?:https?:\/\/)?(?:www\.|m\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) return m.reply(mess.link)
  try {
    m.reply(mess.wait)
    if (command === 'yta' || command === 'mp3' || command === 'ytmp3') {
      await downloadMp3(args[0]);
    } else {
      await downloadMp4(args[0]);
    }
  } catch (err) {
    m.reply(err.message);
  }
}
break;
case 'info':
case 'tes':
case 'ping':
case 'botstats': {
  const used = process.memoryUsage();
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  });
  let timestamp = speed();
  let latensi = speed() - timestamp;
  let neww = performance.now();
  let oldd = performance.now();
  let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 INFO SERVER
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim();
  let { key } = await client.sendMessage(m.chat, { text: 'Testing Speed...' }, { quoted: m });
  const array = [
  "0% Loading.",
  "10% Loading..",
  "20% Loading...",
  "30% Loading..",
  "40% Loading.",
  "50% Loading..",
  "60% Loading...",
  "70% Loading..",
  "80% Loading.",
  "90% Loading..",
  "100% Loading...",
];

  for (let item of array) {
    await client.sendMessage(m.chat, { text: `*${item}*`, edit: key }, { quoted: m });
    await new Promise((resolve) => setTimeout(resolve, 0.000001));
  }

  return client.sendMessage(m.chat, { text: await (mono(respon)).trim(), edit: key }, { quoted: m });
}
break;
case 'rvo':
case 'ver':
case 'readviewonce':
case 'read':
case 'readvo': {
  const { downloadContentFromMessage } = await require('@adiwajshing/baileys');
  if (!m.quoted) return m.reply('✳️ Reply to a media message')
  //if (m.quoted.mtype !== 'viewOnceMessageV2') throw '✳️ Eso no es un mensaje de viewOnce';
  const type = m.quoted.mtype;
  if (type == 'imageMessage') {
  const imageMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage;
  if (!imageMessage) return m.reply('✳️ Image not found message')
  var media = await downloadContentFromMessage(imageMessage, 'image');
} else {
  const videoMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage;
  if (!videoMessage) return m.reply('✳️ Video not found message')
  var media = await downloadContentFromMessage(videoMessage, 'video');
}
  let buffer = Buffer.alloc(0);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return await client.sendFile(m.chat, buffer, 'media.mp4', m.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage.caption || '', m);
	await fs.unlinkSync("./tmp/media.mp4")
  } else if (/image/.test(type)) {
    return await client.sendFile(m.chat, buffer, 'media.jpg', m.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage.caption || '', m);
	await fs.unlinkSync("./tmp/media.jpg")
  }
}
break;
case 'tiker': case 'setiker': case 'seticker': case 'stick': case 'stickel':
 case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 if (!quoted) return m.reply(`*Balas Video/Image Dengan Caption* ${prefix + command}`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
				m.reply(mess.wait)
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 15) return m.reply('*Maksimal 15 detik!*')
                let media = await quoted.download()
			m.reply(mess.wait)
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            } else {
                return m.reply(`*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`)
                }
                 }
                 break
      case 'swm': case 'stickerwm': case 'take': case 'wm':{
                if (!quoted) return m.reply('mana gambarnya')
       	     if (!args.join(" ")) return m.reply(`Example :\nswm client | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                client.downloadAndSaveMediaMessage(quoted, "gifee")
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 15 detik!')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
	  }
                break
				case 'smeme':
case 'stickermeme':
case 'stickmeme': {
  try {
    if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
    if (!quoted) return m.reply('Reply Image')
    const mime = (quoted.msg || quoted).mimetype || ''
    if (!mime.includes('image/')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
    const isValidMime = mime === 'image/jpeg'
    if (!isValidMime) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
    m.reply(mess.wait)
    mee = await client.downloadAndSaveMediaMessage(quoted)
    const {
      TelegraPh,
      UploadFileUgu,
      webp2mp4File,
      floNime,
      filezone,
      fileio
    } = require('../lib/uploader')
    mem = await TelegraPh(mee)
    meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
    memek = client.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
  } catch (e) {
    m.reply(util.format(e))
  }
}
break;
case 'tomp3': {
  if (!mime.includes('video') && !mime.includes('audio')) {
    return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  }
  
  if (!quoted) {
    return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  }
  
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  client.sendMessage(m.chat, {
    document: audio,
    mimetype: 'audio/mpeg',
    fileName: `Convert to Audio By ${client.user.name}.mp3`
  }, {
    quoted: m
  })
}
break;
case 'cekresi':{
if (!text) return m.reply(`Mana Resi & Kurirnya\nExample: ${prefix + command} 123456789|jne (huruf kecil)`)
m.reply(mess.wait)
try {
kiri = text.split('|')[0] ? text.split('|')[0] : '-'
kanan = text.split('|')[1] ? text.split('|')[1] : '-'
await resi(kiri, kanan).then(p => {
	let alok = p.detail
	let remsi = `- Resi: ${alok.nomor_resi}
- Layanan: ${alok.jenis_layanan}
- Tgl Pengirim: ${alok.tanggal_pengiriman}
- Pengirim: ${alok.nama_pengirim}
- Alamat Pengirim: ${alok.alamat_pengirim}
- Penerima: ${alok.nama_penerima}
- Alamat Penerima: ${alok.alamat_penerima}\n\n- LOG:\n${p.riwayat}`
	m.reply(remsi)
	})
} catch (e) {
	m.reply(e.message)
	console.log(e)
}
}
break
case 'smeme2': {
  try{
	        let respond = `Kirim.reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await client.downloadAndSaveMediaMessage(quoted)
	        let {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
  filezone,
  fileio
} = require('../lib/uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await client.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
  } catch (e){
    m.reply(util.format(e))
  }
            }
	       break
case 'mono':{
if (!q) return m.reply(`Mana Teksnya?`)
	const mono = (text) => {
		const font = {A: '𝙰', B: '𝙱', C: '𝙲' , D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹', K: '𝙺', L: '𝙻', M: '𝙼', N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃', U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉', a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣', '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿', ' ': ' ', '!': '!', '"': '"', '#': '#', '$': '$', '%': '%', '&': '&', '\'': '\'', '(': '(', ')': ')', '': '', '+': '+', ',': ',', '-': '-', '.': '.', '/': '/', ':': ':', ';': ';', '<': '<', '=': '=', '>': '>', '?': '?', '@': '@', '[': '[', '\\': '\\', ']': ']', '^': '^', '': '', '`': '`', '{': '{', '|': '|', '}': '}', '': ''}
		let result = ''
		for (let i = 0; i < text.length; i++) {
			const char = text[i]
			result += font[char] || char
		}
	return result
	}
await m.reply(mono(q))
}
break
case 'leave':{
	if (!isCreator) return m.reply(mess.botOwner);
	if (!isGroup) return m.reply(mess.group)
	m.reply(`Dadah, aku merindukanmu:)`)
    await sleep(5000)
	await client.groupLeave(from)
}
break
        default: 
		if (budy.includes('Assalamualaikum')) {
			m.reply("Waalaikumsalam Wr. Wb.")
		}
		if (budy.match('tiktok.com')) { // fitur Tiktok Down
  const tt = budy ? await ngelink(budy) : null;
  client.sendMessage(m.chat, { react: { text: `⏳`, key: m.key }});
    try {
      await tiktok(tt[0]).then(p => {
		  console.log(p)
        if (!p) return m.reply(`Maaf, Media Tidak Ditemukan:(`)
        client.sendMessage(m.chat, { video: { url: p.video[0] }, caption: suck }, { quoted: m });
      });
    } catch (e3) {
      m.reply(e3.message);
      try {
        const tt2 = await tiktokdl(tt[0]);
        if (!tt2) return m.reply(`Maaf, Media Tidak Ditemukan:(`)
        console.log(tt2);
        var caption = suck;
        await client.sendMessage(m.chat, {
          video: { url: tt2.play },
          caption: mono(caption)
        }, { quoted: m });
      } catch (e2) {
        m.reply(e2.message);
      }
    }
} else if (budy.match('facebook.com')) {
  const fb = budy ? await ngelink(budy) : null;
  try {
    client.sendMessage(m.chat, { react: { text: `⏳`, key: m.key }});
    await snapsave(fb[0]).then(p => {
      if (!p.data) return m.reply(`Maaf, Media Tidak Ditemukan:(`)
      for (let ai of p.data) {
        console.log(p);
        client.sendFileUrl(m.chat, ai.url, suck, m);
      }
    });
  } catch (e) {
    client.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    m.reply(e.message);
  }
} else if (budy.match('instagram.com')) { //fitur IG Down
  const igw = budy ? await ngelink(budy) : null;
  try {
    client.sendMessage(m.chat, { react: { text: `⏳`, key: m.key }});
    await snapsave(igw[0]).then(p => {
if (!p.data) return m.reply("Maaf Mungkin Servernya Error.")
      for (let ai of p.data) {
        console.log(p);
        client.sendFileUrl(m.chat, ai.url, suck, m);
      }
    });
  } catch (e) {
    client.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    m.reply(e.message);
  }
} else if (budy.match('twitter.com')) { //TWITTER
  const twdl = budy ? await ngelink(budy) : null;
  client.sendMessage(m.chat, { react: { text: `⏳`, key: m.key }});
  try {
    await fetchJson(ramdani+`dl/twitter?url=${twdl[0]}`).then(p => {
if (!p) return m.reply("Maaf Mungkin Servernya Error.")
console.log(p)
let konz = p.result
client.sendFileUrl(m.chat, konz.url, suck, m) 
})
  } catch (e) {
    client.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
    m.reply(e.message);
  }
}
		if (budy.startsWith('=>')) {
  if (!isCreator) return m.reply(mess.botOwner);
  try {
  const result = await eval(`(async () => { return ${budy.slice(3)} } )()`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
  } catch (error) {
    return m.reply(util.format(error));
  }
}

if (budy.startsWith('>')) {
  if (!isCreator) return m.reply(mess.botOwner);
  (async () => {
    try {
      const result = await eval(`(async () => { return ${budy.slice(1)} } )()`);
      let formattedResult = util.format(result);
      if (typeof result !== 'string') {
        formattedResult = util.inspect(result);
      }
      await m.reply(formattedResult);
    } catch (err) {
      await m.reply(util.format(err));
    }
  })().catch((err) => {
    console.error(err);
  });
}

if (budy.startsWith('$')) {
  if (!isCreator) return m.reply(mess.botOwner);
  const command = budy.slice(1).trim();
  if (!command) {
    return m.reply('Undefined');
  }
  const { exec } = require('child_process');
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return m.reply(util.format(err.message));
    }
    const output = `${stdout}${stderr}`;
    if (output) {
      return m.reply(util.format(output));
    }
  });
}

      }
  } catch (err) {
    m.reply(err.message);
	console.log(err)
  }
};

const file = path.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`│ Update ${file}`));
  delete require.cache[file];
  require(file);
});
