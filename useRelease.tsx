import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fallback from './version.json';

interface ReleaseInfo {
  version: string;
  downloadUrl: string;
}

const ReleaseContext = createContext<ReleaseInfo>({
  version: fallback.version,
  downloadUrl: fallback.url,
});

export function ReleaseProvider({ children }: { children: ReactNode }) {
  const [release, setRelease] = useState<ReleaseInfo>({
    version: fallback.version,
    downloadUrl: fallback.url,
  });

  useEffect(() => {
    fetch('/api/version')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (data.version && data.url) {
          setRelease({ version: data.version, downloadUrl: data.url });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <ReleaseContext.Provider value={release}>{children}</ReleaseContext.Provider>
  );
}

export function useRelease() {
  return useContext(ReleaseContext);
}
