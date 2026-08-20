import { useRef, type KeyboardEvent } from "react";
import type { VersionId } from "../App";

const versions: Array<{ id: VersionId; label: string; name: string }> = [
  { id: "v1", label: "版本一", name: "展示台" },
  { id: "v2", label: "版本二", name: "接觸印樣" },
  { id: "v3", label: "版本三", name: "導覽系統" },
  { id: "v4", label: "版本四", name: "收據敘事" },
  { id: "v5", label: "版本五", name: "設定表" },
];

interface VersionSwitcherProps {
  active: VersionId;
  onSelect: (version: VersionId) => void;
}

export function VersionSwitcher({ active, onSelect }: VersionSwitcherProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % versions.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + versions.length) % versions.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = versions.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    onSelect(versions[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <aside className="version-switcher" aria-label="頁面版本切換">
      <p>選擇設計方向</p>
      <div role="tablist" aria-label="設計版本">
        {versions.map((version, index) => (
          <button
            key={version.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            aria-selected={active === version.id}
            tabIndex={active === version.id ? 0 : -1}
            className={active === version.id ? "is-active" : undefined}
            onClick={() => onSelect(version.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <strong>{version.label}</strong>
            <span>{version.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
