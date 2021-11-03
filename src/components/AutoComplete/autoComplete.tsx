import React, { FC } from 'react';
// import classnames from 'classnames';
import Input, { InputProps } from '../Input/input';

// const prefixCls = 'pr-auto-complete';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect?: (item: string) => void;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default AutoComplete;
