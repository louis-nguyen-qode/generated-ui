// id="137:7436"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1377436Props {}

export const QodeCustom1377436: React.FC<
  QodeCustom1377436Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=default, border=true" id="137:7436" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding:
              "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-margin-marginxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradiussm, 6px)",
            background:
              "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
          },
          ...style,
        }}
      >
        {/* name="circle-plus" id="2781:17018" type="INSTANCE" */}
        <Icon.QodeCirclePlus
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "1.2px",
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
              color: "var(--color-neutral-text-colortextsolid, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
        {/* name="xmark" id="2781:17173" type="INSTANCE" */}
        <Icon.QodeXmark
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
