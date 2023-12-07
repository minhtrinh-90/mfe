import React, { useEffect, useRef } from "react";

import mountDashboardApp from "dashboard/DashboardApp";

export default function DashboardApp({ onSignedIn }) {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboardApp(ref.current);
  }, []);

  return <div ref={ref} />;
}
