import React, { FC, ChangeEvent, useState, useRef } from 'react';
import axios from 'axios';

import UploadList from './uploadList';
import Dragger from './dragger';
import { isFunc, isObj, isPromise } from '../../utils/index';

const prefixCls = 'pr-upload';

export enum FileStatus {
  ready = 'ready',
  uploading = 'uploading',
  success = 'success',
  error = 'error'
}
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export type UploadFile = {
  uid: string;
  name: string;
  size: number;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
};

export interface UploadProps {
  name?: string;
  action: string;
  disabled?: boolean;
  defaultFileList?: UploadFile[];
  withCredentials?: boolean;
  multiple?: boolean;
  accept?: string;
  draggable?: boolean;
  headers?: {
    [key: string]: any
  };
  data?: {
    [key: string]: any
  };
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onChange?: (file: File) => void;
  onError?: (error: any, file: File) => void;
  onRemove?: (file: UploadFile) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const {
    name,
    action,
    disabled = false,
    defaultFileList = [],
    withCredentials = false,
    multiple = false,
    accept,
    draggable = false,
    headers = {},
    data,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onRemove,
    onChange,
    children,
  } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [ fileList, setFileList ] = useState<UploadFile[]>(defaultFileList || []);

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevFileList => {
      return prevFileList.map(file => {
        if (file.uid === updateFile.uid) {
          return {
            ...file,
            ...updateObj
          };
        }

        return file
      });
    });
  };

  const postFile = (file: File) => {
    const curFile: UploadFile = {
      uid: 'pr_' + Date.now(),
      status: FileStatus.ready,
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };

    setFileList(prevFileList => {
      return [curFile, ...prevFileList];
    });

    const formData = new FormData();
    formData.append(name || 'file', file);
    // add extra parameters of form
    if (data && isObj(data)) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }

    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        const percentage = Math.round((e.loaded * 100) / e.total) || 0;
        console.log('percentage', percentage);

        if (percentage < 100) {
          /**
          * TODO: optimize the frequency of invoke 
          */
          updateFileList(curFile, {
            percent: percentage,
            status: FileStatus.uploading,
          });

          // execute the onProgress hook of upload lifecycle
          if (onProgress && isFunc(onProgress)) {
            onProgress(percentage, file);
          }
        }
      }
    }).then(res => {
      updateFileList(curFile, {
        status: FileStatus.success,
        response: res.data,
      });
      // execute the onSuccess hook of upload lifecycle
      if (onSuccess && isFunc(onSuccess)) {
        onSuccess(res.data, file);
      }

      if (onChange && isFunc(onChange)) {
        onChange(file);
      }
    }).catch(err => {
      updateFileList(curFile, {
        status: FileStatus.error,
        error: err,
      });

      // execute the onError hook of upload lifecycle
      if (onError && isFunc(onError)) {
        onError(err, file);
      }

      if (onChange && isFunc(onChange)) {
        onChange(file);
      }
    });
  };

  const uploadFiles = (files: FileList) => {
    const filesToArray = Array.from(files);

    filesToArray.forEach(file => {
      if (!beforeUpload) {
        postFile(file); 
      } else {
        const result = beforeUpload(file);

        if (result && isPromise(result)) {
          (result as Promise<File>).then(processedFile => {
            postFile(processedFile);
          })
        } else if (result !== false) {
          postFile(file);
        }
      }
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    uploadFiles(fileList);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const handleDragFile = (files: FileList) => {
    uploadFiles(files)
  }

  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => {
      return prevList.filter(item => item.uid !== file.uid);
    });

    if (onRemove && isFunc(onRemove)) {
      onRemove(file);
    }
  }

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-wrapper`} onClick={handleClick}>
        {
          draggable ? (
            <Dragger onFile={handleDragFile}>
              {children}
            </Dragger>
          ) : children
        }
        <input type="file"
          ref={fileInputRef}
          accept={accept}
          disabled={disabled}
          multiple={multiple}
          onChange={handleFileChange}
          className={`${prefixCls}-input`} />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
