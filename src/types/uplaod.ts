interface UploadData {
  success: boolean;
  data?: {
    Bucket?: string;
    Location?: string;
  };
}

export default UploadData;