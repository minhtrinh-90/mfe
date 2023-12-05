import React, { useEffect, useRef } from "react";
import mountMarketingApp from "marketing/MarketingApp";

export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketingApp(ref.current);
  }, []);

  return <div ref={ref}>MarketingApp</div>;
}
