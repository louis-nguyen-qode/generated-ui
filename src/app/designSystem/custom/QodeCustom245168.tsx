// id="24:5168"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom53130112 } from "@designSystem/custom/QodeCustom53130112"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom245168Props {}

export const QodeCustom245168: React.FC<
  QodeCustom245168Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="sectionVolunteering" id="24:5168" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "640px",
          paddingBottom: "12px",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "16px",
          borderBottom:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
        }}
      >
        {/* name="body" id="24:5169" type="FRAME" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          {/* name="Profile/Section header" id="531:33851" type="INSTANCE" */}
          <QodeCustom53130112
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-small, 4px)",
            }}
            {...{ title: "Volunteering", state: "view" }}
          />
          {/* name="educationItem" id="24:5177" type="FRAME" */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              alignSelf: "stretch",
            }}
          >
            {/* name="avatar" id="24:5178" type="INSTANCE" */}
            <div
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
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
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Square",
                state: "Default",
              }}
            />
            {/* name="content" id="24:5179" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--size-margin-marginxs, 8px)",
                flex: "1 0 0",
              }}
            >
              {/* name="content" id="24:5180" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  }}
                >{`Role`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Organization name`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-20, #878787)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`From Dec 2021 - To Dec 2023`}</span>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-20, #878787)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Activity Name`}</span>
              </div>
              {/* name="Button" id="24:5185" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                }}
                {...{
                  iconR: true,
                  icononly: <Icon.QodeMagnifyingGlass />,
                  title: "Show credential",
                  type: "default",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
