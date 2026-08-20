interface PendingVersionProps {
  version: string;
  direction: string;
}

export function PendingVersion({ version, direction }: PendingVersionProps) {
  return (
    <main className="pending-version">
      <p>{version}</p>
      <h1>{direction}</h1>
      <p>此設計方向已記錄，完整頁面將在續作時實作。</p>
    </main>
  );
}
