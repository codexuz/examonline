import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
  type: "service_account",
  project_id: "exam-database-2eb01",
  private_key_id: "1f9cf52edab1bf054508703af07f1997ba5f0b03",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDceapkvyL/2lrg\nMdYg2J09qqxqkZyQy8Y1l6bBmAtE2Q/8UscvfHK5LLnwjawKSthV9ZAf2LXUOzg6\nHg7xFXWez1aaeLjB244eV/kWbovXRb/8FAJrjpUrfaBuYZFGkFzTgPPVOi4AbhMk\ngi58L0WwFD8LJ8hBOJwdEaDwTbAbwJ3lK7/ciNxSppzoGZLi5WDCxgL2+Lw47/az\nQUspuXVBv80nzUmctCe6h/RqVcBIgfwzj//TeqjT/D4EzH1w4I5NbbsYTD/YZ3Lf\ns+fNzwElftwlIRzevYFUZcsMou+r+6oY0LJiYqcw7p6gm2fYcDGHpWqExAZMdBC6\nFBISthmzAgMBAAECggEAHXghB5Spa8kMEuHGbR8sVqTx+nqaZ/Dnfkarcj6i6aHD\n1REGxmOcKAErnKorFThvgH8xXk2xRtFgO3Bvbyz+9ZUMI9tAAsrDIm4q1qM8YNqr\nWy5yK7M5YBX2HtrpYqUC1f3ArxRhjWApLIeUCWL+LcIUXSbaSabJ7clrRBjLkcx7\n1OTm75Tf4GSAuvZLxbrJsFyYEgnPxjcxTSvJAAquoD3/gxeLG9AS7NPJx40jmTud\n+7vJn2nCPuXwbjFT/2ttjhzEVLo6lA6ijDOssOJx2C7yVUmWe0JR84NtaTFzGQzc\nfWG75/G9MD7xaXevDnsQMoN/3h6XNsLRaYJDEOF8lQKBgQDwyKLmSNl0oxJ6k2oQ\n9RR7tMduEcxS8Mj4xKvSq+VCk36Eg2QRckrRgKZ93AvxxDRFCYHaMfRhJon9HwRG\njEqh+C83/HcGOgNWjsVAqzobwCITOJou+FijnFzh1HcR62i5eJMgoLvDRXA7jaEN\nbo7p9Rc8qlLy/uMZo9TMC1WAzwKBgQDqaHtQdPsY4S0B+IVnMB/Jwnm4XqDU7IP/\nbSgafKPWKyL2A0Q/6hBgP4AKcLm2P/EO8t3zWXw3ojgBNseIJhHZfKxHv9y/Cywa\norl8vRdmdhl2Ga0RotLPvqra1SnbGQNFqVtYawRhPS+3J7H2wQD+E3QB4cD9P3Mz\nNhJ8MR9p3QKBgQCd2aqRdai5gj6XBRU/0KuA/d7QFfLxXNEj5SsPjYlav/7tOIXd\nuiO6fLCpShy6fnoV2Em8lYs0NWO5ASB4b3ht/ppWBbix6E5P7ID8CESr9KViHHVX\n3Y+ekt+BXRxCLyYUkStC9JyjQ150bEDs4VHnprl5F+ARVW/kWzciHTwMmQKBgDOp\ni2QUJDM7jZvdlilD5f2lqwYDdRb4ea8V87zCs6lEIJRv697aS3mrBSFH7uZH+Wz+\nAgTcOBBa5FUAKcHMAisY2y+FDbXdVH8aVh8z3bBrXvk0d3xnkmbO8wD/8hWj0aDM\nzqESFQkJXzbSvNpRd1KIHw07IDmwfkdPJ4vPl8jRAoGBAMDBbNbwRtKaDKrQ6Wb5\nrcM+UchwJaJTJ22HTcYC9i3hFD054CgxTGtpTD95rTMCGzMJK929ssYavQG/Jn6N\nGhC0f/HmS+cLSWEhEr5Zi2HKYzAJ+nhaWK3lHR7mgKbsyv24BRWAcuqipiuzeBYy\niBSjuGitYOX3hsDGlq0K9Mde\n-----END PRIVATE KEY-----\n",
  client_id: "112639326834787560887",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-73uab%40exam-database-2eb01.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
  storageBucket: "exam-database-2eb01.appspot.com"
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});