// id="20:2960"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom166457 } from "@designSystem/custom/QodeCustom166457"

export interface QodeCustom202960Props {}

export const QodeCustom202960: React.FC<
  QodeCustom202960Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, size=default, type=basic, status=default" id="20:2960" type="COMPONENT" */}
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
            border:
              "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
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
        {/* name="Icon" id="20:3096" type="INSTANCE" */}
        <QodeCustom166457
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
