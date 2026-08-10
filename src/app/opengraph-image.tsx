import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

/**
 * Link preview card generated at build time: what shows up when the
 * portfolio is shared on LinkedIn, X, Slack or iMessage.
 *
 * ImageResponse runs through Satori, which supports only a subset of CSS:
 * every element needs an explicit `display: flex`, and there's no Tailwind
 * here, so the styles are inline by necessity.
 */

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#08080c",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "#818cf8",
            color: "white",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          {profile.shortName.charAt(0)}
        </div>
        <div style={{ display: "flex", color: "#9a9db0", fontSize: 26 }}>
          {profile.location}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          color: "#ecedf2",
          fontSize: 82,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {profile.name}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 20,
          fontSize: 40,
          fontWeight: 600,
          color: "#818cf8",
        }}
      >
        {profile.role}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 32,
          color: "#9a9db0",
          fontSize: 28,
          lineHeight: 1.45,
          maxWidth: 900,
        }}
      >
        {profile.tagline}
      </div>
    </div>,
    size,
  );
}
