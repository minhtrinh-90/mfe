import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import mountAuthApp from "auth/AuthApp";

export default function AuthApp() {
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
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
