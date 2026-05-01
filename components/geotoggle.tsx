"use client";

import { useState } from "react";

interface Props {
  label: string;
  items: string[];
}

export default function GeoToggle({ label, items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className={`geoBtn${open ? " geoBtnOpen" : ""}`}
        onClick={() => setOpen((p) => !p)}
      >
        {label}
      </button>

      {open && (
        <div className="geoList">
          {items.map((item) => (
            <span key={item} className="geoTag">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}