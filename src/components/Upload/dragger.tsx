import React, { FC, useState, DragEvent } from 'react';
import classnames from 'classnames';

import { isFunc } from '../../utils/index';

const prefixCls = 'pr-dragger';

interface DraggerProps {
  onFile: (files: FileList) => void;
}

const Dragger: FC<DraggerProps> = (props) => {
  const {
    onFile,
    children
  } = props;
  const [dragOver, setDragOver] = useState(false);

  const classes = classnames(prefixCls, {
    [`${prefixCls}-over`]: dragOver
  });

  const handleDrag = (over: boolean) => {
    return (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      setDragOver(over);
    }
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);

    if (isFunc(onFile)) {
      onFile(e.dataTransfer.files);
    }
  }

  return (
    <div className={classes}
      onDragOver={handleDrag(true)}
      onDragLeave={handleDrag(false)}
      onDrop={handleDrop} >
      {children}
    </div>
  );
};


export default Dragger;
