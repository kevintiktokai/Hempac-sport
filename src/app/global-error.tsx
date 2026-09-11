"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "32px",
          textAlign: "center",
          background: "#ffffff",
          color: "#0c0c0c",
          fontFamily:
            "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "28px", letterSpacing: "-0.04em", margin: 0 }}>
          HEMPAC Sport is temporarily unavailable
        </h1>
        <p style={{ color: "rgba(12,12,12,0.6)", maxWidth: "28rem", margin: 0 }}>
          An unexpected error stopped the page from loading.
          {error.digest ? ` Reference ${error.digest}.` : ""}
        </p>
        <button
          onClick={() => unstable_retry()}
          style={{
            marginTop: "8px",
            border: "none",
            borderRadius: "999px",
            background: "#0c0c0c",
            color: "#ffffff",
            padding: "12px 24px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
