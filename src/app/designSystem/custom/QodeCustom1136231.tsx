// id="113:6231"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom1136231Props {}

export const QodeCustom1136231: React.FC<
  QodeCustom1136231Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="113:6231" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1116px",
            height: "42px",
            
            paddingRight: "521px",
            alignItems: "center",
            gap: "488px",
            flexShrink: "0",
            borderRadius:
              "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
          },
          ...style,
        }}
      >
        {/* name="Title" id="113:6225" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              height: "42px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-30, #656565)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Subheading`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-40, #464646)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-size-sizemd-20px, 20px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
              },
              ...{},
            }}
          >{`Heading`}</span>
        </div>
        {/* name="Button" id="113:6228" type="INSTANCE" */}
        <QodeButton
          style={{
            ...{
              display: "flex",
              width: "32px",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
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
            onlyIcon: <Icon.QodeChevronLeft />,
            buttonname: "Source new job",
            selectIconLeft: <Icon.QodePlus />,
            iconLeft: true,
            type: "default",
            size: "default",
            state: "default",
            content: "icon",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
