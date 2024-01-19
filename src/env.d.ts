/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly Api: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
