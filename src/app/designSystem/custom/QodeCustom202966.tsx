// id="20:2966"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom166457 } from "@designSystem/custom/QodeCustom166457"

export interface QodeCustom202966Props {}

export const QodeCustom202966: React.FC<
  QodeCustom202966Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active, size=default, type=basic, status=default" id="20:2966" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "320px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderround, 999px)",
            border: "1px solid var(--color-primary-colorprimary, #2d64bc)",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color:
                "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheight, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Select`}</span>
        {/* name="Icon" id="20:3108" type="INSTANCE" */}
        <QodeCustom166457
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Focus ring" id="20:3109" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "320px",
              height: "32px",
              position: "absolute",
              borderRadius: "var(--style-radius-borderround, 999px)",
              border:
                "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
      </div>
    </>
  )
}
