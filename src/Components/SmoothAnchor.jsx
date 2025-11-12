import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SmoothAnchor({ href, children, className }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = useCallback((e) => {
    if (!href?.startsWith("#")) return; // external link or route
    e.preventDefault();
    const id = href.slice(1);
    navigate(`${pathname}#${id}`, { replace: false });
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [href, navigate, pathname]);

  return <a href={href} onClick={onClick} className={className}>{children}</a>;
}
