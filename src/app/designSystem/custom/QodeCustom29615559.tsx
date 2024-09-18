// id="296:15559"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29615559Props {}

export const QodeCustom29615559: React.FC<
  QodeCustom29615559Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="size=default, position=left, state=default" id="296:15559" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          padding:
            "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
        }}
      >
        {/* name="🎰 icon" id="296:15560" type="INSTANCE" */}
        <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            color: "var(--text-text-neutral-40, #464646)",
            textAlign: "right",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Tab title`}</span>
      </div>
    </>
  )
}
