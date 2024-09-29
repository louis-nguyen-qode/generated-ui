// id="434:26798"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom43426798Props {}

export const QodeCustom43426798: React.FC<
  QodeCustom43426798Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=success" id="434:26798" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
          ...style,
        }}
      >
        {/* name="Dot" id="434:26803" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "var(--size-size-sizexxs-6px, 6px)",
              height: "var(--size-size-sizexxs-6px, 6px)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              background: "var(--background-bg-green-hover, #11a620)",
            },
            ...{},
          }}
        >
          <></>
        </div>
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Success`}</span>
      </div>
    </>
  )
}
