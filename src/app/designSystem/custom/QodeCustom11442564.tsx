// id="114:42564"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom11442564Props {
  title?: string
  level?: "1" | "2" | "3" | "4" | "5"
}

export const QodeCustom11442564: React.FC<
  QodeCustom11442564Props & { style?: CSSProperties }
> = ({ title = "Heading", level = "1", ...rest }) => {
  return (
    <>
      {/* name="Title" id="114:42564" type="COMPONENT_SET" */}
      {/* id="114:42563" */}
      {`${level}` === `1` && (
        <>
          {/* name="level=1" id="114:42563" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading1, 40px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-h1, 48px) /* 120% */",
              }}
            >{`Heading`}</span>
          </div>
        </>
      )}
      {/* id="114:42569" */}
      {`${level}` === `2` && (
        <>
          {/* name="level=2" id="114:42569" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading2, 32px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-h2, 40px) /* 125% */",
              }}
            >{`Heading`}</span>
          </div>
        </>
      )}
      {/* id="114:42571" */}
      {`${level}` === `3` && (
        <>
          {/* name="level=3" id="114:42571" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading3, 28px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
              }}
            >{`Heading`}</span>
          </div>
        </>
      )}
      {/* id="114:42573" */}
      {`${level}` === `4` && (
        <>
          {/* name="level=4" id="114:42573" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              }}
            >{`Heading`}</span>
          </div>
        </>
      )}
      {/* id="114:42575" */}
      {`${level}` === `5` && (
        <>
          {/* name="level=5" id="114:42575" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              }}
            >{`Heading`}</span>
          </div>
        </>
      )}
    </>
  )
}
