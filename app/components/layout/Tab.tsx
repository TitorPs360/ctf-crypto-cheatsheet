import { Dispatch, FC, SetStateAction } from 'react';

import Image from 'next/image';
import Logo from '@assets/logo.svg';

import { IconType } from 'react-icons';
import { MdTranslate } from 'react-icons/md';
import { LuLightbulb } from 'react-icons/lu';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { TbAlphabetGreek } from 'react-icons/tb';

enum TabOption {
  indentifier = 'indentifier',
  language = 'language',
  solver = 'solver',
  translator = 'translator',
}

interface TabOptionObject {
  id: TabOption;
  name: string;
  Icon: IconType;
}

interface TabProps {
  activeTab: TabOption;
  setActiveTab: Dispatch<SetStateAction<TabOption>>;
}

const Tab: FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const TabOptions: TabOptionObject[] = [
    {
      id: TabOption.translator,
      name: 'Translator',
      Icon: MdTranslate,
    },
    {
      id: TabOption.solver,
      name: 'Solver',
      Icon: LuLightbulb,
    },
    {
      id: TabOption.indentifier,
      name: 'Indentifier',
      Icon: MdOutlineQuestionMark,
    },
    {
      id: TabOption.language,
      name: 'Language',
      Icon: TbAlphabetGreek,
    },
  ];

  return (
    <>
      <div className="h-[70px] w-full bg-cccBlue shadow-xl flex flex-row justify-start items-center">
        {/* Logo */}
        <div className="px-6">
          <Image src={Logo} width={32} height={32} alt={'Logo'} />
        </div>

        {/* Tabs */}
        {TabOptions.map((option) => {
          const { Icon } = option;

          return (
            <div
              key={option.id}
              className={`
                h-full px-4 flex cursor-pointer
                justify-center items-center
                ${activeTab == option.id ? 'bg-cccVeryDarkBlue' : 'bg-cccDarkBlue'}`}
              onClick={() => setActiveTab(option.id)}
            >
              <Icon
                className={`${activeTab == option.id ? 'text-cccNeonGreen' : 'text-cccGrey'}`}
                size={24}
              />
              <span
                className={`ml-2 ${
                  activeTab == option.id ? 'text-cccNeonGreen' : 'text-cccGrey'
                } text-md font-medium`}
              >
                {option.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tab;
export { TabOption };
