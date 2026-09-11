import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "HEMPAC Sport — premium fitness equipment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0c",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "64px",
              borderRadius: "9px",
              background: "linear-gradient(160deg, #7f1416 0%, #dc2626 45%, #ff5a4d 100%)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              HEMPAC
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#ef4444",
              }}
            >
              SPORT
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "84px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Built for performance.
          </span>
          <span
            style={{
              fontSize: "84px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              background: "linear-gradient(98deg, #dc2626 0%, #ff5a4d 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Built to last.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>Strength · Cardio · Recovery · Accessories</span>
          <span>Free shipping over ${SITE.freeShippingThreshold}</span>
        </div>
      </div>
    ),
    size
  );
}
