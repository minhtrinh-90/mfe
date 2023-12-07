import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import mountAuthApp from "auth/AuthApp";

export default function AuthApp({ onSignedIn }) {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mountAuthApp(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignedIn
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
