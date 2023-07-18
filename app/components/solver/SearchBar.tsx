import { Dispatch, FC, SetStateAction } from 'react';

import { RxInput } from 'react-icons/rx';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

interface SearchBarProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  depth: number;
  setDepth: Dispatch<SetStateAction<number>>;
}

const SearchBar: FC<SearchBarProps> = ({ searchText, setSearchText, depth, setDepth }) => {
  const searchTextChangeHandler = (event: { target: { value: string } }) => {
    setSearchText(event.target.value);
  };

  const depthChangeHandler = (event: { target: { value: string } }) => {
    const numberDepth = parseInt(event.target.value);

    if (numberDepth < 1) {
      setDepth(1);
    } else if (numberDepth > 10) {
      setDepth(10);
    } else {
      setDepth(numberDepth);
    }
  };

  const increaseDepth = () => {
    if (depth >= 10) {
      setDepth(10);
    } else {
      setDepth(depth + 1);
    }
  };

  const decreaseDepth = () => {
    if (depth <= 1) {
      setDepth(1);
    } else {
      setDepth(depth - 1);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[600px] py-3 bg-cccDarkBlue border border-cccNeonGreen shadow-xl grid grid-cols-12 rounded-full">
          {/* Selector */}
          <div className="col-span-7 px-6 flex flex-row gap-4">
            <PiMagnifyingGlassBold size={24} />
            <input
              className="w-full text-xl bg-cccDarkBlue"
              placeholder="What is you looking for?"
              value={searchText}
              onChange={searchTextChangeHandler}
            />
          </div>

          {/* Search */}
          <div className="col-span-5 px-4 flex flex-row gap-4 justify-start items-center">
            <span className="text-lg">Depth:</span>
            <input
              className="w-full text-xl bg-cccDarkBlue"
              value={depth}
              onChange={depthChangeHandler}
              type="number"
            />
            <div>
              <BiSolidChevronUp
                size={20}
                className={`${depth < 10 ? 'text-cccGrey' : 'text-cccGrey opacity-30'}`}
                onClick={increaseDepth}
              />
            </div>
            <div>
              <BiSolidChevronDown
                size={20}
                className={`${depth > 1 ? 'text-cccGrey' : 'text-cccGrey opacity-30'}`}
                onClick={decreaseDepth}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
