// id="99:7639"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom997639Props {}

export const QodeCustom997639: React.FC<
  QodeCustom997639Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="From=Sender" id="99:7639" type="COMPONENT" */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        {/* name="Frame 37301" id="99:7640" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "28px",
            height: "28px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8.75px",
            borderRadius: "874.125px",
            border: "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
            background: "url(<path-to-image>) lightgray 50% / cover no-repeat",
          }}
        >
          {/* name="Frame 37301" id=99:7640 type=FRAME */}
          <></>
        </div>
        {/* name="Frame 37302" id="99:7641" type="FRAME" */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span
            style={{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`Hung Nhan`}</span>
          <span
            style={{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            }}
          >{`·`}</span>
          <span
            style={{
              color: "var(--text-text-neutral-30, #656565)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            }}
          >{`6:08 PM`}</span>
        </div>
      </div>
    </>
  )
}
