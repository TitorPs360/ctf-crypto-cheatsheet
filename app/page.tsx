'use client';

import { useState } from 'react';

import Tab, { TabOption } from '@components/layout/Tab';
import Footer from '@components/layout/Footer';

import Translator from '@components/translator/Translator';
import Solver from '@components/solver/Solver';
import Identifier from '@components/identifier/Identifier';
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
      case TabOption.identifier:
        return <Identifier />;
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
    </div>
  );
}
