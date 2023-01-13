import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IDpsRedirectProps {
  to: string;
  // provide a path like '/about/rehome' for an in-app redirect; otherwise don't set internal and use an external link
  internal?: boolean;
}

export default function DpsRedirect(props: IDpsRedirectProps) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.internal) navigate(props.to)
    else window.location.replace(props.to);
  }, [])

  return (
    <div>
      Redirecting...
    </div>
  );
}
