let publicS3Bucket = "festival-app-scenario-2"; //<-- CHANGE THIS to your bucket name
let publicS3Folder = "upload"; //<-- CHANGE THIS to your folder name

export default "https://" +
  publicS3Bucket +
  ".s3.amazonaws.com/" +
  publicS3Folder +
  "/";
