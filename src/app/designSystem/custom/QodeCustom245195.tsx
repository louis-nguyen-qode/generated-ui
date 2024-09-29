// id="24:5195"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeCustom277832 } from "@designSystem/custom/QodeCustom277832"

export interface QodeCustom245195Props {}

export const QodeCustom245195: React.FC<
  QodeCustom245195Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="sectionAwards" id="24:5195" type="COMPONENT" */}
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
        {/* name="body" id="24:5196" type="FRAME" */}
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
          {/* name="Profile/Section header" id="531:35058" type="INSTANCE" */}
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
            {...{ edit: true, title: "Honors & Awards", state: "view" }}
          />
          {/* name="awardItem" id="2131:52173" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginxxs, 4px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  width: "496px",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Staff of the year
1st Prize - Qode Hackathon 2024`}</span>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Timeframe - Total Time`}</span>
            {/* name="company" id="2131:52176" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="2131:52177" type="INSTANCE" */}
              <QodeCustom277832
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Square",
                  state: "Default",
                }}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`3 Experiences across Google & 2 other companies`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Description`}</span>
          </div>
        </div>
      </div>
    </>
  )
}
