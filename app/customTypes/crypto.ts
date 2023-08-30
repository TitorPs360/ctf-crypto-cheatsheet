enum EncrytpionAlgorithm {
  reverseString = 'REVERSE_STRING',
  fromDecimal = 'FROM_DECIMAL',
  toDecimal = 'TO_DECIMAL',
  fromHex = 'FROM_HEX',
  toHex = 'TO_HEX',
  fromBase32 = 'FROM_BASE_32',
  toBase32 = 'TO_BASE_32',
  fromBase45 = 'FROM_BASE_45',
  toBase45 = 'TO_BASE_45',
  fromBase58 = 'FROM_BASE_58',
  toBase58 = 'TO_BASE_58',
  fromBase62 = 'FROM_BASE_62',
  toBase62 = 'TO_BASE_62',
  fromBase64 = 'FROM_BASE_64',
  toBase64 = 'TO_BASE_64',
  fromBase85 = 'FROM_BASE_85',
  toBase85 = 'TO_BASE_85',
  fromROT13 = 'FROM_ROT_13',
  toROT13 = 'TO_ROT_13',
  fromROT47 = 'FROM_ROT_47',
  toROT47 = 'TO_ROT_47',
}

const EncrytpionNameMap = {
  'Reverse String': 'REVERSE_STRING',
  'From Decimal': 'FROM_DECIMAL',
  'To Decimal': 'TO_DECIMAL',
  'From Hex': 'FROM_HEX',
  'To Hex': 'TO_HEX',
  'From Base32': 'FROM_BASE_32',
  'To Base32': 'TO_BASE_32',
  'From Base45': 'FROM_BASE_45',
  'To Base45': 'TO_BASE_45',
  'From Base58': 'FROM_BASE_58',
  'To Base58': 'TO_BASE_58',
  'From Base62': 'FROM_BASE_62',
  'To Base62': 'TO_BASE_62',
  'From Base64': 'FROM_BASE_64',
  'To Base64': 'TO_BASE_64',
  'From Base85': 'FROM_BASE_85',
  'To Base85': 'TO_BASE_85',
  'From ROT13': 'FROM_ROT_13',
  'To ROT13': 'TO_ROT_13',
  'From ROT47': 'FROM_ROT_47',
  'To ROT47': 'TO_ROT_47',
};

type EncrytpionNamesType = keyof typeof EncrytpionNameMap;

const EncrytpionNames = Object.keys(EncrytpionNameMap);

export { EncrytpionAlgorithm, EncrytpionNameMap, EncrytpionNames };
export type { EncrytpionNamesType };
