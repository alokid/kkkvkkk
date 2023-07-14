const axios = require('axios');
const FormData = require('form-data');
const fetch = require('node-fetch');
const fs = require('fs');
const { fromBuffer } = require('file-type');
const cheerio = require('cheerio');

async function zippy(buffer, url) {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(buffer));

  try {
    const response = await fetch('https://api.zippysha.re/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}


function filezone(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) {
      reject(new Error('File not Found'));
      return;
    }

    try {
      const form = new FormData();
      form.append('file', fs.createReadStream(Path));

      const { data } = await axios.post(
        'https://filezone.my.id/backend/upload.php',
        form,
        { headers: form.getHeaders() }
      );

      fs.unlinkSync(Path);
      resolve(data);
    } catch (err) {
      reject(new Error(String(err)));
    }
  });
}

function TelegraPh(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) {
      reject(new Error('File not Found'));
      return;
    }

    try {
      const form = new FormData();
      form.append('file', fs.createReadStream(Path));

      const response = await axios.post(
        'https://telegra.ph/upload',
        form,
        { headers: { ...form.getHeaders() } }
      );

      const { data } = response;
      if (!data || !data[0] || !data[0].src) {
        reject(new Error('Invalid response'));
        return;
      }

      fs.unlinkSync(Path);
      resolve('https://telegra.ph' + data[0].src);
    } catch (err) {
      reject(new Error(String(err)));
    }
  });
}

async function UploadFileUgu(input) {
  try {
    const form = new FormData();
    form.append('files[]', fs.createReadStream(input));

    const { data } = await axios.post(
      'https://uguu.se/upload.php',
      form,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
          ...form.getHeaders()
        }
      }
    );

    fs.unlinkSync(input);
    return data.files[0];
  } catch (error) {
    throw new Error(error);
  }
}

function webp2mp4File(path) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('new-image-url', '');
    form.append('new-image', fs.createReadStream(path));

    axios({
      method: 'post',
      url: 'https://s6.ezgif.com/webp-to-mp4',
      data: form,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`
      }
    })
      .then(({ data }) => {
        const bodyFormThen = new FormData();
        const $ = cheerio.load(data);
        const file = $('input[name="file"]').attr('value');
        bodyFormThen.append('file', file);
        bodyFormThen.append('convert', 'Convert WebP to MP4!');

        axios({
          method: 'post',
          url: 'https://ezgif.com/webp-to-mp4/' + file,
          data: bodyFormThen,
          headers: {
            'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
          }
        })
          .then(({ data }) => {
            const $ = cheerio.load(data);
            const result =
              'https:' +
              $('div#output > p.outfile > video > source').attr('src');
            resolve({
              status: true,
              message: 'Created By MRHRTZ',
              result: result
            });
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

async function floNime(medianya, options = {}) {
  const { ext } = (await fromBuffer(medianya)) || options.ext;
  var form = new FormData();
  form.append('file', medianya, 'tmp.' + ext);

  jsonnya = await fetch('https://flonime.my.id/upload', {
    method: 'POST',
    body: form
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((e) => {
      return e;
    });

  return jsonnya;
}

async function fileio(medianya, options = {}) {
  const { ext, mime } = await fromBuffer(medianya) || {}
  let form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

module.exports = {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
  filezone,
  fileio
};