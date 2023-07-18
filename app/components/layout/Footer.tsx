import { FC } from 'react';

import { useRouter } from 'next/navigation';

const Footer: FC = () => {
  const router = useRouter();

  const redirectToGitHub = () => {
    router.push('https://github.com/TitorPs360');
  };

  return (
    <>
      <div className="h-[40px] w-full bg-cccDarkBlue shadow-xl flex justify-center items-center">
        <span className="text-xl font-medium">
          Developed by{' '}
          <span className="text-cccNeonGreen cursor-pointer" onClick={redirectToGitHub}>
            TitorPs360
          </span>
        </span>
      </div>
    </>
  );
};

export default Footer;
