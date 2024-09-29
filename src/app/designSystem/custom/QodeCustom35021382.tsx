// id="350:21382"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom35021382Props {}

export const QodeCustom35021382: React.FC<
  QodeCustom35021382Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=success" id="350:21382" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
          ...style,
        }}
      >
        {/* name="Dot" id="350:21387" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "var(--size-size-sizexxs-6px, 6px)",
              height: "var(--size-size-sizexxs-6px, 6px)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              border:
                "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-success-colorsuccess, #11a620)",
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
