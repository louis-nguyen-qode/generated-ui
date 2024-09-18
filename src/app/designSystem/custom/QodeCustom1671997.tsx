// id="167:1997"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom63014871 } from "@designSystem/custom/QodeCustom63014871"

export interface QodeCustom1671997Props {}

export const QodeCustom1671997: React.FC<
  QodeCustom1671997Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=active, theme=line" id="167:1997" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          padding:
            "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
          borderBottom:
            "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
        }}
      >
        {/* name="🎰 icon" id="167:1998" type="INSTANCE" */}
        <QodeCustom63010804 style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            color: "var(--color-primary-colorprimarytext, #1597f4)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Navigation Item`}</span>
        {/* name="🎰 icon" id="2677:28386" type="INSTANCE" */}
        <QodeCustom63014871 style={{ width: "12px", height: "12px" }} {...{}} />
      </div>
    </>
  )
}
