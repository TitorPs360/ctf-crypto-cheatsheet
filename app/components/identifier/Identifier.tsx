import { FC } from 'react';

import { encodingIdentifier } from '@utils/identify';
import { fromDecimal, toDecimal } from '@utils/crypto';

const Identifier: FC = () => {
  return (
    <>
      <div>WIP: Identifier</div>
      <div>{encodingIdentifier('118 102 118 115 102 118').join(', ')}</div>
      {/* 
      <div>{toDecimal('118 102 118 115 102 118')}</div>

      <div>{fromDecimal(toDecimal('118 102 118 115 102 118'))}</div> */}
    </>
  );
};

export default Identifier;
