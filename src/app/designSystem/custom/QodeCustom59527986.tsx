// id="595:27986"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom59527986Props {}

export const QodeCustom59527986: React.FC<
  QodeCustom59527986Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="State=View (report)" id="595:27986" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "596px",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* name="Frame 37328" id="595:27987" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "20px",
            height: "20px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "4px",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "center",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            }}
          >{`1`}</span>
        </div>
        <span
          style={{
            flex: "1 0 0",
            color: "var(--text-text-neutral-30, #656565)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-large, 16px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px /* 150% */",
          }}
        >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
      </div>
    </>
  )
}
