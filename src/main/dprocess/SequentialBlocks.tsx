// SequentialBlocks.tsx
import React from 'react';
import styles from './SequentialBlock.module.css';
import BlockComponent, { Block } from './BlockComponent';

interface SequentialBlocksProps {
  blocks: Block[];
}

const SequentialBlocks: React.FC<SequentialBlocksProps> = ({ blocks }) => {
  const firstLinePos: number = 3;
  const firstLineBlock: Block[] = blocks.slice(0, firstLinePos);
  const secondLineBlock: Block[] = blocks.slice(firstLinePos);

  return (
    <div>
      <div className={styles.sequentialBlocks}>
      {firstLineBlock.map((block, index) => (
        <React.Fragment key={block.id}>
          <BlockComponent id={block.id} thumbnail={block.thumbnail} content={block.content} />
          <div className={styles.arrow} aria-hidden="true">➔</div>
        </React.Fragment>
      ))}
      </div>
      <div className={styles.sequentialBlocks}>
      {secondLineBlock.map((block, index) => (
        <React.Fragment key={block.id}>
          <BlockComponent id={block.id} thumbnail={block.thumbnail} content={block.content} />
          {index < secondLineBlock.length - 1 && (
            <div className={styles.arrow} aria-hidden="true">➔</div>
          )}
        </React.Fragment>
      ))}
      </div>
    </div>
  );
};

export default SequentialBlocks;