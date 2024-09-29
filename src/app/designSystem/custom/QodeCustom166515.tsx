// id="16:6515"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom193 } from "@designSystem/custom/QodeCustom193"
import { QodeCustom166463 } from "@designSystem/custom/QodeCustom166463"

export interface QodeCustom166515Props {}

export const QodeCustom166515: React.FC<
  QodeCustom166515Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="color=🔸 primary, state=default" id="16:6515" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding: "0px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-margin-marginxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
            background: "var(--color-primary-colorprimarybg, #eaeff8)",
          },
          ...style,
        }}
      >
        {/* name="icons" id="16:6516" type="INSTANCE" */}
        <QodeCustom193
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "1.199px 1.199px 1.199px 1.2px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--color-primary-colorprimarytext, #2d64bc)",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px /* 133.333% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
        {/* name="xmark" id="16:6518" type="INSTANCE" */}
        <QodeCustom166463
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "2.999px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
