// id="296:15476"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom29615476Props {}

export const QodeCustom29615476: React.FC<
  QodeCustom29615476Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="size=default, position=top, state=active" id="296:15476" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          padding: "12px 0px",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-padding-paddingxs, 8px)",
          borderBottom: "2px solid var(--border-border-primary-20, #158de2)",
        }}
      >
        {/* name="🎰 icon" id="296:15484" type="INSTANCE" */}
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
