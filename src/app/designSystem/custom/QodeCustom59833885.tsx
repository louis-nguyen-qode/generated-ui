// id="598:33885"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom59833885Props {}

export const QodeCustom59833885: React.FC<
  QodeCustom59833885Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Report/Transcript item" id="598:33885" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1040px",
            alignItems: "flex-start",
            gap: "60px",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              width: "178px",
              flexShrink: "0",
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-heading6, 16px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
            },
            ...{},
          }}
        >{`Interviewer`}</span>
        {/* name="summaryContent" id="598:33882" type="INSTANCE" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "flex-start", flex: "1 0 0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
