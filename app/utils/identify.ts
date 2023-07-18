import { EncrytpionAlgorithm } from '@customTypes/crypto';
import {
  fromBase32,
  fromBase45,
  fromBase58,
  fromBase62,
  fromBase64,
  fromBase85,
  fromDecimal,
  fromHex,
  fromROT13,
  fromROT47,
  toBase32,
  toBase45,
  toBase58,
  toBase62,
  toBase64,
  toBase85,
  toDecimal,
  toHex,
  toROT13,
  toROT47,
} from './crypto';

const notEmptyString = (str: string) => {
  return str != '' && str != '\x00';
};

const encodingIdentifier = (inputText: string): EncrytpionAlgorithm[] => {
  try {
    const resultArray = [];
    let originalText = '';

    // From Decimal
    originalText = toDecimal(inputText);
    if (fromDecimal(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromDecimal);
    }

    // To Decimal
    originalText = fromDecimal(inputText);
    if (toDecimal(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toDecimal);
    }

    // From Hex
    originalText = toHex(inputText);
    if (fromHex(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromHex);
    }

    // To Hex
    originalText = fromHex(inputText);
    if (toHex(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromHex);
    }

    // From Base32
    originalText = toBase32(inputText);
    if (fromBase32(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase32);
    }

    // To Base32
    originalText = fromBase32(inputText);
    if (toBase32(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase32);
    }

    // From Base45
    originalText = toBase45(inputText);
    if (fromBase45(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase45);
    }

    // To Base45
    originalText = fromBase45(inputText);
    if (toBase45(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toBase45);
    }

    // From Base58
    originalText = toBase58(inputText);
    if (fromBase58(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase58);
    }

    // To Base58
    originalText = fromBase58(inputText);
    if (toBase58(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toBase58);
    }

    // From Base62
    originalText = toBase62(inputText);
    if (fromBase62(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase62);
    }

    // To Base62
    originalText = fromBase62(inputText);
    if (toBase62(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toBase62);
    }

    // From Base64
    originalText = toBase64(inputText);
    if (fromBase64(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase64);
    }

    // To Base64
    originalText = fromBase64(inputText);
    if (toBase64(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toBase64);
    }

    // From Base85
    originalText = toBase85(inputText);
    if (fromBase85(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromBase85);
    }

    // To Base85
    originalText = fromBase85(inputText);
    if (toBase85(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toBase85);
    }

    // From ROT13
    originalText = toROT13(inputText);
    if (fromROT13(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromROT13);
    }

    // To ROT13
    originalText = fromROT13(inputText);
    if (toROT13(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toROT13);
    }

    // From ROT47
    originalText = toROT47(inputText);
    if (fromROT47(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.fromROT47);
    }

    // To ROT47
    originalText = fromROT47(inputText);
    if (toROT47(originalText) == inputText && notEmptyString(originalText)) {
      resultArray.push(EncrytpionAlgorithm.toROT47);
    }

    return resultArray;
  } catch (error) {
    return []; // An error occurred during decoding
  }
};

export { encodingIdentifier };
