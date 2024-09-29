// id="126:8286"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1197505 } from "@designSystem/custom/QodeCustom1197505"

export interface QodeCustom1268286Props {}

export const QodeCustom1268286: React.FC<
  QodeCustom1268286Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="direction=horizontal, size=default" id="126:8286" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--color-neutral-text-colortext, #000)",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheight, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Input label`}</span>
        <span
          style={{
            ...{
              color: "var(--color-error-colorerrortext, #ff6542)",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheight, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`*`}</span>
        {/* name="Icon" id="126:8294" type="INSTANCE" */}
        <QodeCustom1197505
          style={{
            ...{
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
