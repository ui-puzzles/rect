import React, { FC } from 'react';

import Icon from '../Icon/icon';
import Progress from '../Progress';
import { UploadFile, FileStatus } from './upload';
import { isFunc } from '../../utils/index';

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}

const listPrefixCls = 'pr-upload-list';
const itemPrefixCls = 'pr-upload-item';

const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList = [],
    onRemove
  } = props;
  console.log('fileList', fileList);

  const handleRemoveFile = (item: UploadFile) => {
    return () => {
      if (onRemove && isFunc(onRemove)) {
        onRemove(item);
      }
    }
  }

  if (!fileList.length) return null;

  return (
    <ul className={`${listPrefixCls}`}>
      {
        fileList.map(item => (
          <li className={itemPrefixCls} key={item.uid}>
            <span className={`${itemPrefixCls}-name`} data-status={item.status}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className={`${itemPrefixCls}-status`}>
              {(item.status === FileStatus.uploading || item.status === FileStatus.ready) && <Icon icon="spinner" spin theme="primary" />}
              {item.status === FileStatus.success && <Icon icon="check-circle" theme="success" />}
              {item.status === FileStatus.error && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className={`${itemPrefixCls}-action`}>
              <Icon icon="times" onClick={handleRemoveFile(item)}/>
            </span>
            {
              item.status === FileStatus.uploading && <Progress percent={item.percent || 0} />
            }
          </li>
        ))
      }
    </ul>
  );
};

export default UploadList;
