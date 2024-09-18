// id="4:40"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom440Props {}

export const QodeCustom440: React.FC<
  QodeCustom440Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="State=Active" id="4:40" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "84px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-size-sizexxs-6px, 6px)",
        }}
      >
        {/* name="Icon" id="4:92" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "40px",
            height: "40px",
            padding: "8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "var(--size-size-sizexs-8px, 8px)",
            border: "1px solid var(--border-border-primary-30, #107ecc)",
            background: "var(--background-bg-primary, #1597f4)",
          }}
        >
          {/* name="briefcase" id="4:93" type="INSTANCE" */}
          <Icon.QodeBriefcase
            style={{ width: "24px", height: "24px", flexShrink: "0" }}
            {...{}}
          />
        </div>
        <span
          style={{
            alignSelf: "stretch",
            color: "var(--text-text-neutral-50, #1d1d1d)",
            textAlign: "center",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-small, 12px)",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
          }}
        >{`Jobs`}</span>
      </div>
    </>
  )
}
