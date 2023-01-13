import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDpsRedirectProps } from "./DpsRedirect";

export default function DpsInternalRedirect(props: IDpsRedirectProps) {

  const navigate = useNavigate();
  useEffect(() => navigate(props.to), [])

  return (
    <div>
      Redirecting...
    </div>
  );
}