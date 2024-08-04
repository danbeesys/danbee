// SequentialBlocks.tsx
import React from 'react';
import styles from './SequentialBlock.module.css';

export interface Block {
  id: number;
  content: string;
}

interface SequentialBlocksProps {
  blocks: Block[];
}

const SequentialBlocks: React.FC<SequentialBlocksProps> = ({ blocks }) => {
  return (
    <div className={styles.sequentialBlocks}>
      {blocks.map((block, index) => (
        <React.Fragment key={block.id}>
          <div className={styles.block}>
            {block.content.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < block.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          {index < blocks.length - 1 && (
            <div className={styles.arrow} aria-hidden="true">➔</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SequentialBlocks;