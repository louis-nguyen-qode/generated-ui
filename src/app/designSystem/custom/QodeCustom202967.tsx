// id="20:2967"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom166457 } from "@designSystem/custom/QodeCustom166457"

export interface QodeCustom202967Props {}

export const QodeCustom202967: React.FC<
  QodeCustom202967Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active, size=large, type=basic, status=default" id="20:2967" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "320px",
            height: "var(--size-height-controlheightlg, 40px)",
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
              fontSize: "var(--font-size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
            },
            ...{},
          }}
        >{`Select`}</span>
        {/* name="Icon" id="20:3111" type="INSTANCE" */}
        <QodeCustom166457
          style={{
            ...{ width: "20px", height: "20px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Focus ring" id="20:3112" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "320px",
              height: "40px",
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
