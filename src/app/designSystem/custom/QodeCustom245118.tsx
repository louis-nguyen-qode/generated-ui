// id="24:5118"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeCustom244900 } from "@designSystem/custom/QodeCustom244900"

export interface QodeCustom245118Props {
  showedit?: boolean
  expand?: "No" | "Yes"
}

export const QodeCustom245118: React.FC<
  QodeCustom245118Props & { style?: CSSProperties }
> = ({ showedit = false, expand = "No", style, ...rest }) => {
  return (
    <>
      {/* name="sectionEducation" id="24:5118" type="COMPONENT_SET" */}
      {/* id="24:5119" */}
      {`${expand}` === `No` && (
        <>
          {/* name="❓Expand=No" id="24:5119" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "640px",
                paddingBottom: "12px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "var(--size-margin-margin, 16px)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="body" id="24:5120" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Section header" id="531:32092" type="INSTANCE" */}
              <QodeCustom53130112
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                  },
                  ...{},
                }}
                {...{ edit: true, title: "Education", state: "view" }}
              />
              {/* name="educationItem" id="24:5128" type="INSTANCE" */}
              <QodeCustom244900
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginsm, 12px)",
                    alignSelf: "stretch",
                  },
                  ...{},
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
      )}
      {/* id="24:5129" */}
      {`${expand}` === `Yes` && (
        <>
          {/* name="❓Expand=Yes" id="24:5129" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "640px",
                paddingBottom: "12px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "var(--size-margin-margin, 16px)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="body" id="24:5130" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Section header" id="531:32491" type="INSTANCE" */}
              <QodeCustom53130112
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                  },
                  ...{},
                }}
                {...{ edit: true, title: "Education", state: "view" }}
              />
              {/* name="educationItem" id="24:5138" type="INSTANCE" */}
              <QodeCustom244900
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginsm, 12px)",
                    alignSelf: "stretch",
                  },
                  ...{},
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
      )}
    </>
  )
}
