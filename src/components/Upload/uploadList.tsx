import { FC } from 'react';

import Icon from '../Icon/icon';
import Progress from '../Progress';
import { UploadFile, FileStatus } from './upload';
import { isFunc } from '../../utils/index';

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}

const UPLOAD_LIST_CLS = 'puzzle-upload-list';
const UPLOAD_LIST_ITEM_CLS = 'puzzle-upload-item';

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
    <ul className={`${UPLOAD_LIST_CLS}`}>
      {
        fileList.map(item => (
          <li className={UPLOAD_LIST_ITEM_CLS} key={item.uid}>
            <span className={`${UPLOAD_LIST_ITEM_CLS}-name`} data-status={item.status}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className={`${UPLOAD_LIST_ITEM_CLS}-status`}>
              {(item.status === FileStatus.uploading || item.status === FileStatus.ready) && <Icon icon="spinner" spin theme="primary" />}
              {item.status === FileStatus.success && <Icon icon="check-circle" theme="success" />}
              {item.status === FileStatus.error && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className={`${UPLOAD_LIST_ITEM_CLS}-action`}>
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
