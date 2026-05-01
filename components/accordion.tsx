"use client";

import { useState } from "react";
import type { AccordionItem } from "@/lib/data";

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="accItem">
            <button
              className="accTrigger"
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
            >
              <span className="accTriggerLabel">{item.label}</span>
              <span className={`accIcon${isOpen ? " accIconOpen" : ""}`}>+</span>
            </button>

            {isOpen && (
              <div className="accPanel">
                {item.body && <p>{item.body}</p>}

                {item.details?.map((d, i) => (
                  <p key={i}>
                    <strong>{d.heading}:</strong> {d.text}
                  </p>
                ))}

                {item.cta && (
                  <a
                    className="ctaLink"
                    href={item.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.cta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}