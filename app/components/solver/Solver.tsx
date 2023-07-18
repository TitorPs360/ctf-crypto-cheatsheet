import { FC, useCallback, useEffect, useState } from 'react';

import { EncrytpionAlgorithm } from '@customTypes/crypto';
import { getEncryptionResult } from '@utils/crypto';

import InputSection from './InputSection';
import SearchBar from './SearchBar';
import ResultCard from './ResultCard';

interface CombinationsResult {
  algorithms: EncrytpionAlgorithm[];
  result: string;
}

const Solver: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [posibleAlgorithms, setPossibleAlgorithms] = useState<EncrytpionAlgorithm[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [depth, setDepth] = useState<number>(1);

  const [algorithmsCombinations, setAlgorithmsCombinations] = useState<EncrytpionAlgorithm[][]>([]);
  const [combinationsResults, setCombinationsResults] = useState<CombinationsResult[]>([]);

  // Make Algorithm Combination
  useEffect(() => {
    let previousCombination = posibleAlgorithms.map((algorithm) => [algorithm]);

    let combinations = [...previousCombination];

    for (let maxLength = 1; maxLength < depth; maxLength++) {
      const tempArray = [];
      for (let c = 0; c < previousCombination.length; c++) {
        for (let p = 0; p < posibleAlgorithms.length; p++) {
          tempArray.push([...previousCombination[c], posibleAlgorithms[p]]);
        }
      }
      previousCombination = tempArray;
      combinations = [...combinations, ...tempArray];
    }
    console.log(combinations);

    setAlgorithmsCombinations(combinations);
  }, [posibleAlgorithms, depth]);

  // Make Result
  useEffect(() => {
    const results = algorithmsCombinations.map((algorithms) => {
      let result = inputText;

      for (let i = 0; i < algorithms.length; i++) {
        result = getEncryptionResult(result, algorithms[i]);
      }

      return { algorithms, result };
    });

    console.log(results);

    setCombinationsResults(results);
  }, [inputText, algorithmsCombinations]);

  const filterFunction = (item: CombinationsResult) => {
    if (item.result == '' || item.result == '\x00') {
      return false;
    }

    const regexPattern = new RegExp(searchText, 'gi');

    const regex = new RegExp(regexPattern);

    return regex.test(item.result.toLowerCase());
  };

  return (
    <>
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3">
          <InputSection
            inputText={inputText}
            setInputText={setInputText}
            posibleAlgorithms={posibleAlgorithms}
            setPossibleAlgorithms={setPossibleAlgorithms}
          />
        </div>

        <div className="col-span-9 flex flex-col">
          <div className="py-8">
            <SearchBar
              searchText={searchText}
              setSearchText={setSearchText}
              depth={depth}
              setDepth={setDepth}
            />
          </div>

          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 230px)' }}>
            <div className="w-full flex flex-row flex-wrap gap-4">
              {combinationsResults.filter(filterFunction).map((result, index) => {
                return (
                  <ResultCard key={index} algorithms={result.algorithms} result={result.result} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solver;
