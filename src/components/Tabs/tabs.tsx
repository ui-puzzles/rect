import React, { FC } from 'react';

import { TemplateProps } from './interface';


const Template: FC<TemplateProps> = (props) => {
  const {
    someProps
  } = props;

  return (
    <div>
      {someProps}
    </div>
  );
};

export default Template;
