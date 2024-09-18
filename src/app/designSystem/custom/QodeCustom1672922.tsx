// id="167:2922"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom6308727 } from "@designSystem/custom/QodeCustom6308727"

export interface QodeCustom1672922Props {}

export const QodeCustom1672922: React.FC<
  QodeCustom1672922Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=hover" id="167:2922" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "0px var(--size-padding-padding, 16px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            background:
              "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="167:2923" type="INSTANCE" */}
        <QodeCustom63010804
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--color-neutral-text-colortext, #000)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Navigation Item`}</span>
        {/* name="🎰 action" id="167:2988" type="INSTANCE" */}
        <QodeCustom6308727
          style={{
            ...{ width: "12px", height: "12px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
