/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEAD_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
