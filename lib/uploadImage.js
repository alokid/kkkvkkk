const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer Image Buffer
 */
async function tele(medianya, options = {}) {
  const { ext } = await fromBuffer(medianya);
  let form = new FormData();
  form.append('file', medianya, 'tmp.' + ext);

  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  });

  let img = await res.json();
  if (img.error) throw img.error;

  return 'https://telegra.ph' + img[0].src;
};

module.exports = { tele }