import React from 'react';

import { NftWhite } from '../../../Assets/Icons/Nft/NftWhite';
import { ElipsCenter } from '../../../Assets/Icons/Portal/ElipseCenter';
import { ElipsY } from '../../../Assets/Icons/Portal/ElipseY';
import { ElipsX } from '../../../Assets/Icons/Portal/ElipsX';
import PortalCircle from '../../../Components/Multiusable/PortalCircle';
import styles from './portal.module.scss';

const Portal: React.FC = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.elipsX}>
          <ElipsX />
        </div>
        <ElipsCenter />
        <PortalCircle Icon={NftWhite} title="NFT" />
        <div className={styles.elipsY}>
          <ElipsY />
        </div>
      </div>
    </div>
  );
};

export default Portal;
