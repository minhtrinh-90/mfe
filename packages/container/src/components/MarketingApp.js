import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import mountMarketingApp from "marketing/MarketingApp";

export default function MarketingApp() {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mountMarketingApp(ref.current, {
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
