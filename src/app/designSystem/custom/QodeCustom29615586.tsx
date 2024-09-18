// id="296:15586"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29615586Props {}

export const QodeCustom29615586: React.FC<
  QodeCustom29615586Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="size=default, position=right, state=active" id="296:15586" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          padding:
            "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
          borderLeft: "2px solid var(--border-border-primary-20, #158de2)",
        }}
      >
        {/* name="🎰 icon" id="296:15587" type="INSTANCE" */}
        <Icon.QodeIcons style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            color: "var(--text-text-neutral-50, #1d1d1d)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Tab title`}</span>
      </div>
    </>
  )
}
