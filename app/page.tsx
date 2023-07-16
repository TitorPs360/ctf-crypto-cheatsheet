'use client';

import { useState } from 'react';

import Tab, { TabOption } from '@components/layout/Tab';
import Footer from '@components/layout/Footer';

import Translator from '@components/translator/Translator';
import Solver from '@components/solver/Solver';
import Indentifier from '@components/indentifier/Indentifier';
import Language from '@components/language/Language';

import {
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
} from '@utils/crypto';
import AlgorithmSelectSection from '@components/translator/AlgorithmSelectSection';
import { EncrytpionAlgorithm } from '@customTypes/crypto';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.translator);

  const renderTab = () => {
    switch (activeTab) {
      case TabOption.translator:
        return <Translator />;
      case TabOption.solver:
        return <Solver />;
      case TabOption.indentifier:
        return <Indentifier />;
      case TabOption.language:
        return <Language />;
      default:
        return <Translator />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-cccDarkBlue">
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      {renderTab()}

      <Footer />

      {/* <p>fromDecimal {fromDecimal('72 101 108 108 111')}</p>

      <p>toDecimal {toDecimal('Hello')}</p>

      <p>fromHex {fromHex('48 65 6c 6c 6f')}</p>

      <p>toHex {toHex('Hello')}</p>

      <p>fromBase32 {fromBase32('JBSWY3DP')}</p>

      <p>toBase32 {toBase32('Hello')}</p>

      <p>fromBase45 {fromBase45('%69 VDL2')}</p>

      <p>toBase45 {toBase45('Hello')}</p>

      <p>fromBase58 {fromBase58('9Ajdvzr')}</p>

      <p>toBase58 {toBase58('Hello')}</p>

      <p>fromBase62 {fromBase62('5TP3P3v')}</p>

      <p>toBase62 {toBase62('Hello')}</p>

      <p>fromBase64 {fromBase64('SGVsbG8=')}</p>

      <p>toBase64 {toBase64('Hello')}</p>

      <p>fromBase85 {fromBase85('87cURDZ')}</p>

      <p>toBase85 {toBase85('Hello')}</p>

      <p>fromROT13 {fromROT13('Uryyb')}</p>

      <p>toROT13 {toROT13('Hello')}</p>

      <p>fromROT47 {fromROT47('w6==@')}</p>

      <p>toROT47 {toROT47('Hello')}</p> */}
    </div>
  );
}
