import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
  type: "service_account",
  project_id: "exam-online-384406",
  private_key_id: "137f70ef9dafb51882d683ae8d343be1af9f8258",
  private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9ZKlZmRsxq1Qk\nlx7Jt+pNZHhD4UoNohoUtjpEHEHwCBDCqK9rch6WieNvLKtFlFJbH7Ez10C7rp6Y\n59AfUeaaIn6A8dE4wCXfmNZWoRRV6PnvJhdQciJD8i4AqTJMMCgELdVf8rrwqP79\nfKZlPuO4+EUalHY/yoZVlESL6adM3k5MMqIfoiMwwi5WKBAOlGZT+YD5uXmmK8pH\nxtRc3fEf6nnspplu4COv9//3vluKFESfnpNbWJPFWbhdNV9BhlX9DvpCO7IniyCO\nA3RwNU8o+57+ozhRrnn3WNXsU9Kfb6fAMhjLzr8dOL30ZAEiMVhYfhfZfjJQpjU0\nvf8bUwaDAgMBAAECggEAUUKaYsYNY+9Fx/lLDXOqxRABheZo1pahqBdTwpt5MxrS\nziKAOZKaSy7YdX/t8ImmGFDtv/dwX9aZV7PGmVmTnriEHKEkirvuxBQYiszMI9w1\nOIXYZPzDdPG5CTGPUh8rXDeqIGPOD6oC1hIgdrpYDKoBRFlErzQfFSLrkjhrPtA5\nG5tp5iZCYnvwa/07fLeQVwa47k85tBjviw8PEEGWWuQVnptVX/2EClArHANrdP6G\nkVF5AiKrXx3OVnLNn0xd2cSvfGi6LZBXcqiMR1OdD6KGA1oWRdDn7NqFIPK4NTLt\nYDxpzZxkTr9z4jmI5uthEzdRo9leNYrX+xPPQWfEEQKBgQD2DhQA7DgzCRcO8slS\nMuvJIA5vEvWFdY07MjrdrYO8TXN/GkzVNDkTPutZrRl8f7T67bXIVJiaftuF7Orn\nyCZee/IigV8cT2YkvnSa7wK9s5OdE+pDl2BMB27sr5pgvVIg8VN/qfykC0ZDITRz\ndNRCSqAKxNr7eZtmAF5B5BoFmQKBgQDFDE5XCtN1qSduha/T/aA13XuUqgxgm8UC\nUyGEQHnWdlOdUyEl2/YPj1+cqrTTmhc5KciUXlgQM5v7UdhkECh8E/U8w2Gu0Huu\nt3o/WqbHgf30ztqNwrKjHCWUds0eFtrCsZxUH1C31Vx0oxWrTEreZ3LjJTKtVzN5\nEiBDCS7GewKBgHmK6Lyv8u7a3aYHrgTJnIkkKZ0ae2dqctI79LIOBRXeGGA/qJZk\njpEAMpeAlydVmhudkn8bsqoWYe/c4QiPaMyhYzFCQK4mVmluHwFtcSgt7YvZC45J\n10qXHWcTMyn4OvqE2t8kI+UQoKuGWndxzWvVmwrWxOkV3/pZ0jWwLF55AoGBAIn5\nGO2nvfM4M00XPMuiXsj4wayR+UK4L5V2IhTZlLZPejLB34cD4uJ4UMmBWkaEMdir\n4i/Jc748dO7gGzXNfpuK2f/nCwH+J2xqOqYb0oYGBo2hPbVfa/f8IHA5U1zLQfhr\npvvcRYfDVQ6yltyv+giKxQ45oKdxVLBkucRWrLL7AoGBAMlMNhC7CwYjivxAS61o\nNWX5I9floIBtddZMJ0n0kfEyXmuAAfajvGxkkxLdfKUzh27eMsFrPGSV1Z54MnUF\nlPjSS2FXUyc5LVi0JzLIxa3Zgkl8MHjFaTdSgejfHeAR1lU63PiGOPV0LQECc3mD\nqzfebAawRdxa9/3EWW6tG2aP\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-qerc0@exam-online-384406.iam.gserviceaccount.com",
  client_id: "112688531109095437186",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qerc0%40exam-online-384406.iam.gserviceaccount.com",
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});