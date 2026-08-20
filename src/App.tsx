import { useEffect, useState } from "react";
import { VersionSwitcher } from "./components/VersionSwitcher";
import { V1LandingPage } from "./versions/v1/V1LandingPage";
import { V2LandingPage } from "./versions/v2/V2LandingPage";
import { V3LandingPage } from "./versions/v3/V3LandingPage";
import { V4LandingPage } from "./versions/v4/V4LandingPage";
import { V5LandingPage } from "./versions/v5/V5LandingPage";

export type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";

const versionPages: Record<VersionId, () => React.JSX.Element> = {
  v1: V1LandingPage,
  v2: V2LandingPage,
  v3: V3LandingPage,
  v4: V4LandingPage,
  v5: V5LandingPage,
};

function readVersion(): VersionId {
  const match = window.location.pathname.match(/\/(v[1-5])(?:\/|$)/);
  return (match?.[1] as VersionId | undefined) ?? "v5";
}

export default function App() {
  const [version, setVersion] = useState<VersionId>(readVersion);
  const ActivePage = versionPages[version];
  const showVersionSwitcher = import.meta.env.MODE === "test"
    || (import.meta.env.DEV && new URLSearchParams(window.location.search).get("compare") === "1");

  useEffect(() => {
    const handlePopState = () => setVersion(readVersion());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function selectVersion(next: VersionId) {
    if (next === version) return;
    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = `${import.meta.env.BASE_URL}${next}/`;
    window.history.pushState({}, "", `${nextUrl.pathname}${nextUrl.search}`);
    setVersion(next);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  return (
    <>
      <ActivePage />
      {showVersionSwitcher ? <VersionSwitcher active={version} onSelect={selectVersion} /> : null}
    </>
  );
}
