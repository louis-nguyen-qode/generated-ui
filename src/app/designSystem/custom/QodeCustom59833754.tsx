// id="598:33754"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom59833754Props {}

export const QodeCustom59833754: React.FC<
  QodeCustom59833754Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="summaryContent" id="598:33754" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "241px",
            padding: "var(--size-padding-paddingxs, 8px) 0px",
            alignItems: "flex-start",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--color-neutral-text-colortext, #000)",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheight, 22px) /* 157.143% */",
            },
            ...{},
          }}
        >{`Wade Warden - Screening Interview`}</span>
      </div>
    </>
  )
}
