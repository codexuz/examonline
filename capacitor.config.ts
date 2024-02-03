import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vercel.multiexam.app',
  appName: 'examonline edumo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
