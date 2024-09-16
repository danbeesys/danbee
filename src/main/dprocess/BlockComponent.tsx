import React from 'react';
import styles from './BlockComponent.module.css';

export interface Block {
    id: number;
    thumbnail: string;
    content: string;
  }

const BlockComponent: React.FC<Block> = ({id, thumbnail, content}) => {
    return <div className={styles.block}>
    {content.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}
    <img src={thumbnail} className={styles.thumbnail} />
  </div>;
}

export default BlockComponent;