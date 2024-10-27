import React from 'react';
import styles from './BlockComponent.module.css';

export interface Block {
    id: number;
    thumbnail: string;
    content: string;
  }

const BlockComponent: React.FC<Block> = ({id, thumbnail, content}) => {
    return <div className={styles.block}>
    <img src={thumbnail} className={styles.thumbnail} />
    <div className={styles.content}>
    {content.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}
    </div>
  </div>;
}

export default BlockComponent;