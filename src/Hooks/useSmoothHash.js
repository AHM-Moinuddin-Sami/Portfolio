import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Smoothly scrolls to #hash targets after route or hash changes,
// without relying on global CSS that can affect other sections.
export default function useSmoothHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Wait a tick so the target is in the DOM.
    requestAnimationFrame(() => {
      const id = hash.split("?")[0].replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [pathname, hash]);
}
