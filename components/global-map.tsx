"use client";

import countries from "./world-countries.json";
import styles from "./global-map.module.css";

type Hub = { id: string; region: string; top: number; left: number };

const HUBS: Hub[] = [
  {
    id: "na",
    region: "North America",
    top: 30.55, left: 29.44,
  },
  {
    id: "eu",
    region: "Europe",
    top: 23.10, left: 49.97,
  },
  {
    id: "me",
    region: "Middle East",
    top: 41.24, left: 65.36,
  },
  {
    id: "sa",
    region: "South Asia",
    top: 45.45, left: 70.25,
  },
  {
    id: "apac",
    region: "Asia-Pacific",
    top: 57.69, left: 78.83,
  },
];


// Country geometry: Natural Earth, public domain, 1:110m.
// https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson
export function GlobalMap() {
  const origin = HUBS[3];

  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <svg viewBox="0 0 1000 500" className={styles.canvas} role="img" aria-label="World map connecting North America, Europe, the Middle East, South Asia and Asia-Pacific">
          <g className={styles.land}>
            {countries.map(country => <path key={country.name} d={country.d}><title>{country.name}</title></path>)}
          </g>
          {HUBS.filter(hub => hub.id !== origin.id).map((hub, index) => {
            const x = hub.left * 10;
            const y = hub.top * 5;
            const ox = origin.left * 10;
            const oy = origin.top * 5;
            const d = `M ${ox} ${oy} Q ${(ox+x)/2} ${Math.min(y,oy)-75} ${x} ${y}`;
            return (
              <g key={hub.id} fill="none">
                <path d={d} className={styles.route} />
                <path d={d} className={styles.flow} pathLength="100" style={{ animationDelay: `${index * -1.4}s` }} />
              </g>
            );
          })}
        </svg>
        {HUBS.map((hub, index) => (
          <div
            key={hub.id}
            className={styles.marker}
            style={{ left: `${hub.left}%`, top: `${hub.top}%` }}
            aria-hidden="true"
          >
            <span className={styles.pulse} style={{ animationDelay: `${index * -0.7}s` }} />
            <span className={styles.dot} />
          </div>
        ))}
      </div>
    </div>
  );
}
