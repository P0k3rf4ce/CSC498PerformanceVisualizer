import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { Button } from "@mui/material";

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error'

export default function Upload() {

  const [file, setfFile] = useState<File | null>(null);    
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [uploadprogress, setUploadProgress] = useState(0);

  function FileChange(x: ChangeEvent<HTMLInputElement>) {
      if (x.target.files) {
        setfFile(x.target.files[0]);
      }
  }

  async function FileUploaded() {
    if (!file) return;

      setStatus("uploading");
      setUploadProgress(0);

      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post("https://httpbin.org/post", formData, {
          onUploadProgress: (ProgressEvent) => {
            const progress = ProgressEvent.total 
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            : 0;
          setUploadProgress(progress);  
          },
        });

        setStatus('success');
        setUploadProgress(100); 
      } 
      catch {
        setStatus('error');
        setUploadProgress(0);
      }

  }

  return (
      <div>
          <Button
            component="label"
            variant="outlined"
            sx={{ marginRight: "1rem" }} 
          >
            Upload File
            <input type="file" hidden onChange={FileChange} />
          </Button>

          {status == 'uploading' && (
            <div>
              <div 
              className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${uploadprogress}%` }}>
              </div>
              <p className="text-sm text-gray-600">{uploadprogress}% uploaded</p>
            </div>
          )

          }

          {file && status != "uploading" && <Button variant="contained" onClick={FileUploaded}>Upload</Button>}

          {status == 'success' && (
            
            <p>
              Good
            </p>
          )}

          {status == 'error' && (
            <p>
              Bad
            </p>
          )}
      </div>
  );
}
