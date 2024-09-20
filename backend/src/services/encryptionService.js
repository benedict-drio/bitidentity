const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Secure random key
const iv = crypto.randomBytes(16);  // Secure random IV

exports.encrypt = (text) => {
	let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

exports.decrypt = (text, iv) => {
	let ivBuffer = Buffer.from(iv, 'hex');
	let encryptedText = Buffer.from(text, 'hex');
	let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
};