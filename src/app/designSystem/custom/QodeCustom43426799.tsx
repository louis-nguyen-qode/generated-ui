// id="434:26799"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom43426799Props {}

export const QodeCustom43426799: React.FC<
  QodeCustom43426799Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=error" id="434:26799" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
          ...style,
        }}
      >
        {/* name="Dot" id="434:26805" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "var(--size-size-sizexxs-6px, 6px)",
              height: "var(--size-size-sizexxs-6px, 6px)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              background: "var(--color-error-colorerror, #dc3812)",
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
        >{`Error`}</span>
      </div>
    </>
  )
}