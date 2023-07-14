const base45 = require('base45');
const ascii85 = require('ascii85');

// From Decimal
const fromDecimal = (input: string): string => {
  // Example input: "72 101 108 108 111"
  const decimalArray = input.split(' ').map((value) => parseInt(value, 10));

  const characterArray = decimalArray.map((value) => String.fromCharCode(value));

  return characterArray.join('');
};

// To Decimal
const toDecimal = (input: string): string => {
  // Example input: "Hello"
  const decimalArray = [];

  for (let i = 0; i < input.length; i++) {
    decimalArray.push(input.charCodeAt(i));
  }

  return decimalArray.join(' ');
};

// From Hex
const fromHex = (input: string): string => {
  // Example input: "48 65 6c 6c 6f"
  const hexArray = input.split(' ').map((value) => parseInt(value, 16));

  const characterArray = hexArray.map((value) => String.fromCharCode(value));

  return characterArray.join('');
};

// To Hex
const toHex = (input: string): string => {
  // Example input: "Hello"
  const hexArray = [];

  for (let i = 0; i < input.length; i++) {
    hexArray.push(input.charCodeAt(i).toString(16).padStart(2, '0'));
  }

  return hexArray.join(' ');
};

// From Base32
const fromBase32 = (input: string): string => {
  // Example input: "JBSWY3DP"
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=';
  let result = '';
  let bits = 0;
  let value = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const charValue = charSet.indexOf(char);

    if (charValue === -1) {
      throw new Error('Invalid base32 string');
    }

    value = (value << 5) | charValue;
    bits += 5;

    if (bits >= 8) {
      bits -= 8;
      const byte = (value >>> bits) & 0xff;
      result += String.fromCharCode(byte);
    }
  }

  return result;
};

// To Base32
const toBase32 = (input: string): string => {
  // Example input: "Hello"
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=';
  let result = '';
  let bits = 0;
  let value = 0;

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    value = (value << 8) | charCode;
    bits += 8;

    while (bits >= 5) {
      bits -= 5;
      const index = (value >>> bits) & 0x1f;
      result += charSet.charAt(index);
    }
  }

  if (bits > 0) {
    value <<= 5 - bits;
    const index = value & 0x1f;
    result += charSet.charAt(index);
  }

  return result;
};

// From Base45
const fromBase45 = (input: string): string => {
  // Example input: "%69 VDL2"
  return base45.decode(input).toString('utf-8');
};

// To Base45
const toBase45 = (input: string): string => {
  // Example input: "Hello"
  return base45.encode(input);
};

// From Base58
const fromBase58 = (input: string): string => {
  // Example input: "9Ajdvzr"
  const charSet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let result = BigInt('0');
  let base = BigInt('58');

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const charValue = charSet.indexOf(char);

    if (charValue === -1) {
      throw new Error('Invalid base58 string');
    }

    result = result * base + BigInt(charValue);
  }

  let str = '';
  while (result > BigInt('0')) {
    const remainder = result % BigInt('256');
    result = result / BigInt('256');
    str = String.fromCharCode(Number(remainder)) + str;
  }

  return str;
};

// To Base58
const toBase58 = (input: string): string => {
  // Example input: "Hello"
  const charSet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let result = '';
  let value = BigInt('0');

  for (let i = 0; i < input.length; i++) {
    const charCode = BigInt(input.charCodeAt(i));
    value = value * BigInt('256') + charCode;
  }

  while (value > BigInt('0')) {
    const remainder = value % BigInt('58');
    value = value / BigInt('58');
    result = charSet[Number(remainder)] + result;
  }

  return result;
};

// From Base62
const fromBase62 = (input: string): string => {
  // Example input: "5TP3P3v"
  const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = BigInt('0');
  let base = BigInt('62');

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const charValue = charSet.indexOf(char);

    if (charValue === -1) {
      throw new Error('Invalid base62 string');
    }

    result = result * base + BigInt(charValue);
  }

  let str = '';
  while (result > BigInt('0')) {
    const remainder = result % BigInt('256');
    result = result / BigInt('256');
    str = String.fromCharCode(Number(remainder)) + str;
  }

  return str;
};

// To Base62
const toBase62 = (input: string): string => {
  // Example input: "Hello"
  const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = BigInt('0');
  let base = BigInt('62');

  for (let i = 0; i < input.length; i++) {
    const charCode = BigInt(input.charCodeAt(i));
    result = result * BigInt('256') + charCode;
  }

  let base62 = '';
  while (result > BigInt('0')) {
    const remainder = result % base;
    result = result / base;
    base62 = charSet[Number(remainder)] + base62;
  }

  return base62;
};

// From Base64
const fromBase64 = (input: string): string => {
  // Example input: "SGVsbG8="
  return atob(input);
};

// To Base64
const toBase64 = (input: string): string => {
  // Example input: "Hello"
  return btoa(input);
};

// From Base85
const fromBase85 = (input: string): string => {
  // Example input: "87cURDZ"
  return ascii85.decode(input).toString();
};

// To Base85
const toBase85 = (input: string): string => {
  // Example input: "Hello"
  return ascii85.encode(input).toString();
};

// From ROT13
const fromROT13 = (input: string): string => {
  // Example input: "Uryyb"
  let result = '';

  for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      charCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      charCode = ((charCode - 97 + 13) % 26) + 97;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
};

// To ROT13
const toROT13 = (input: string): string => {
  // Example input: "Hello"
  let result = '';

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (/[a-zA-Z]/.test(char)) {
      let charCode = char.charCodeAt(0);
      let baseCharCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

      charCode = ((charCode - baseCharCode + 13) % 26) + baseCharCode;
      char = String.fromCharCode(charCode);
    }

    result += char;
  }

  return result;
};

// From ROT47
const fromROT47 = (input: string): string => {
  // Example input: "w6==@"
  let result = '';

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (/[\x21-\x7E]/.test(char)) {
      let charCode = char.charCodeAt(0);
      charCode = ((charCode - 33 + 47) % 94) + 33;
      char = String.fromCharCode(charCode);
    }

    result += char;
  }

  return result;
};

// To ROT47
const toROT47 = (input: string): string => {
  // Example input: "Hello"
  let result = '';

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (/[\x21-\x7E]/.test(char)) {
      let charCode = char.charCodeAt(0);
      charCode = ((charCode - 33 + 94 - 47) % 94) + 33;
      char = String.fromCharCode(charCode);
    }

    result += char;
  }

  return result;
};

export {
  fromDecimal,
  toDecimal,
  fromHex,
  toHex,
  fromBase32,
  toBase32,
  fromBase45,
  toBase45,
  fromBase58,
  toBase58,
  fromBase62,
  toBase62,
  fromBase64,
  toBase64,
  fromBase85,
  toBase85,
  fromROT13,
  toROT13,
  fromROT47,
  toROT47,
};
