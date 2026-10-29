import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#f7f7f2",
          color: "#20231f",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, fontWeight: 700 }}>
          <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 24, background: "#b8f36b", fontSize: 28 }}>S</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>SETU</span>
            <span style={{ fontSize: 12, letterSpacing: 3, color: "#656a62" }}>TECHNOLOGIES</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 600, maxWidth: 980 }}>Bridging Ideas and Technology.</div>
          <div style={{ fontSize: 25, color: "#656a62" }}>Websites · AI Automation · Custom Software</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, color: "#656a62" }}>
          <div style={{ width: 28, height: 2, backgroundColor: "#8bab5a" }} />
          Thoughtful digital work for what comes next
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}