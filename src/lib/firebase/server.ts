import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
  type: "service_account",
  project_id: "exam-database-2eb01",
  private_key_id: "044c0358e570fc800f00d4a786840884457e1517",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDOg5vb51qXcqbg\nImcwZNIBrJYMxogbO7P8Eh9iudSKF08sM+1fR2cdjGtguG0RWABprYezkJNVk2wk\n6eqCEPfvRdpVJNIsHKx9fQ7cp/Qidf0Ldm/p/Jk2UgPGUmWDb/yXytm7Gnt0djY5\noA39vbuCqEIKHZsJ1CnZpMiJ+ZhX4xu+ZfrPXbes2d/I4r4+EE40/0tQWEZWenJx\nMlKQu0Kewd3Gw2cvqmjb4PBLXMvEes387dCOQo1Zbb3ADX8JNVvOU/Jbx/FX60+N\nc7jrnBmBnJhzXpfEtafZVk5ct3MwD7C2qqG+Bh7ny31bUe1mSVsO6HBX0NU3vdDc\nylyDxiVdAgMBAAECggEABp0ruX5TAYCQKhFbbfgiXWk3+CyiJW/+kHmBikBoW/nX\nRzg1q+tM3X55AsTHnXXMs97i9qZZN1nFttLwd9mCRiZLpChOF74B7IPOVB4aWlPn\neybbjNyJG1sw71QqYNnpiQK3OE3CLgMu6dVozU2thBDOeKXAhAqR1NfUkBdB0wKz\nBmcqhbpr4j++eKFBYG4dNdR7THpNsMaGeMzAjFHDx37a8DtFML17Qpcg2OgmMlJf\nqvBKuHZyA+qPCHA8qbu5MI5yIKhKN66c/y5P1Z6tXFpBQbnOS5OjTZEhTUs2m8FH\n7KNJZ56r7HONC3EqgYfOgJhGMPC5VvR9iM+xFIDRsQKBgQD9eqBXh6eVZCUZkr7F\n2fnbct7/TlIv5sQwsfy7431P7SElzb8kmdQ0d7tQbdy+8RYPbg1a3Q3apKwvNhAq\nFFoX8eTDez3DR3AwGrk7Z48RWrUeKC8OdGgz/W0Edrh/r9KppN91xdosmNVIQLTR\nZ20brCMEfzYBnk/qHeadRxpbyQKBgQDQkWgmh4z01tfUkRL49fPe9WPOrt1bNRkQ\nP+jR+FgdhlkUbjgJMJnApzdem83RTPoy4p7q/BUBuz8Dxpmy1v9FrILJ5K3ljLmX\neKrOlHZ3SVHUC9wZhOVZ2uZwPXzpVEqfWu4/3sIkwMBXkbcEKXDi8mWrHu3aGBG2\niCsnjlTe9QKBgQD8TKJsfUoBGL0Ux0u8A0r/c0cjOAH2S+vbzE2Tdsu0UoM77Z7j\n/3mI/+QiGjgulikvEouYdY7koiQAmf9c4wUJ8GuTZ4gCZ4jzWKYmyt1MmMzOR5EP\nAi72ELoCR2k9LvSwhrslrtmKqlUgpcdU521irePtBfHrinhgv4Jb6foCgQKBgAOv\nbg2wO3dgDHQ/E/y+K872uwq94D9qUsUMvAppvvTWmOBZijfvWegjjEDps9tM5ubb\nRj+UsLJVIqnoanLUhbIveCglGEWEFQtuIGaCDQ3Sh9WdWAhDZuINkiDNlVVyHddu\n/eK3BusrVLq3Ymp6aPo5mj5Jz54Y6sc05L5QL4O5AoGABR4Yr6QeVHyyKZO3upWK\ncpIvr0NEtHTFhss2SIfoXq26haax2iwizEGrufEoavAet/Yn4hAMdFF8nG1R+boF\nnbruxVRlE6bmmGnvDhCIInPRWjPa6qyaTO6FiAy7hAcYA7dp/M2euTLJJznH1EEI\nzn4K3N3ZzfCbDXGNDLcHm5s=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-73uab@exam-database-2eb01.iam.gserviceaccount.com",
  client_id: "112639326834787560887",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-73uab%40exam-database-2eb01.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
  storageBucket: "exam-database-2eb01.appspot.com"
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});
