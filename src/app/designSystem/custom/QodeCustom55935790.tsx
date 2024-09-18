// id="559:35790"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom55935790Props {}

export const QodeCustom55935790: React.FC<
  QodeCustom55935790Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="559:35790" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "340px",
            padding: "16px 20px",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading6, 16px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
            },
            ...{},
          }}
        >{`CV`}</span>
        {/* name="Button" id="559:35784" type="INSTANCE" */}
        <QodeButton
          style={{
            ...{
              display: "flex",
              width: "90px",
              height: "var(--size-height-controlheightsm, 24px)",
              padding: "4px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            selectIconRight: <Icon.QodeMagnifyingGlass />,
            onlyIcon: <Icon.QodeMagnifyingGlass />,
            buttonname: "Upload",
            selectIconLeft: <Icon.QodeUpload />,
            iconLeft: true,
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
