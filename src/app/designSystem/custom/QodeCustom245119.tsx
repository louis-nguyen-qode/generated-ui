// id="24:5119"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeCustom244900 } from "@designSystem/custom/QodeCustom244900"

export interface QodeCustom245119Props {}

export const QodeCustom245119: React.FC<
  QodeCustom245119Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="❓Expand=No" id="24:5119" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "640px",
          paddingBottom: "12px",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "var(--size-margin-margin, 16px)",
          borderBottom:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
        }}
      >
        {/* name="body" id="24:5120" type="FRAME" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Profile/Section header" id="531:32092" type="INSTANCE" */}
          <QodeCustom53130112
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-small, 4px)",
            }}
            {...{ title: "Education", state: "view" }}
          />
          {/* name="educationItem" id="24:5128" type="INSTANCE" */}
          <QodeCustom244900
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              alignSelf: "stretch",
            }}
            {...{
              description: true,
              major: "Degree - Major",
              time: "2012-2016",
              university: true,
              state: "Default",
            }}
          />
        </div>
      </div>
    </>
  )
}
