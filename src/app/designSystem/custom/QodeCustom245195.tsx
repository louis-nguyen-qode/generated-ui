// id="24:5195"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeCustom244923 } from "@designSystem/custom/QodeCustom244923"

export interface QodeCustom245195Props {}

export const QodeCustom245195: React.FC<
  QodeCustom245195Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="sectionAwards" id="24:5195" type="COMPONENT" */}
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
        {/* name="body" id="24:5196" type="FRAME" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Profile/Section header" id="531:35058" type="INSTANCE" */}
          <QodeCustom53130112
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-small, 4px)",
            }}
            {...{ title: "Honors & Awards", state: "view" }}
          />
          {/* name="awardItem" id="24:5204" type="INSTANCE" */}
          <QodeCustom244923
            style={{
              display: "flex",
              height: "104px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginxxs, 4px)",
              alignSelf: "stretch",
            }}
            {...{
              award: "Staff of the year",
              company: "3 Experiences across Google & 2 other companies",
              description: true,
              edit: true,
              state: "Default",
            }}
          />
        </div>
      </div>
    </>
  )
}
