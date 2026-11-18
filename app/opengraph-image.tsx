import { ImageResponse } from "next/og";

export const alt = "David Lewis Makes - Sales Engineering and Applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: "#0f1417", color: "#e8edeb", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 28 }}>David Lewis</div>
        <div style={{ display: "flex", fontSize: 78, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>Make critical work happen faster.</div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #354347", paddingTop: 24, fontSize: 24 }}>
          <span>Sales Engineering &amp; Applied AI</span>
          <span style={{ color: "#d6b178" }}>davidlewismakes.com</span>
        </div>
      </div>
    ),
    size,
  );
}
