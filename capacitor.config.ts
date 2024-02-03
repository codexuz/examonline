import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vercel.multiexam.app',
  appName: 'examonline edumo',
  webDir: 'server',
  server: {
    androidScheme: 'https'
  }
};

export default config;
