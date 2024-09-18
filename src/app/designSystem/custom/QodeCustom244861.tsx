// id="24:4861"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom244861Props {
  location?: string
  time?: boolean
  button?: boolean
  company?: string
  description?: string
  title?: boolean
  expand?: "No" | "Yes"
}

export const QodeCustom244861: React.FC<
  QodeCustom244861Props & { style?: CSSProperties }
> = ({
  location = "Location",
  time = true,
  button = true,
  company = "Company",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  title = true,
  expand = "No",
  ...rest
}) => {
  return (
    <>
      {/* name="jobItem" id="24:4861" type="COMPONENT_SET" */}
      {/* id="24:4862" */}
      {`${expand}` === `No` && (
        <>
          {/* name="❓ Expand=No" id="24:4862" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="24:4863" type="INSTANCE" */}
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
                flexShrink: "0",
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
            {/* name="content" id="24:4864" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              {/* name="Title" id="24:4865" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  }}
                >{`Job Title`}</span>
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Company`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Timeframe - Total Time`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Location`}</span>
              {/* name="experienceDescription" id="24:4870" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "2",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 22px) /* 157.143% */",
                  }}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</span>
                {/* name="Button" id="24:4872" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    title: "See More",
                    iconR: <Icon.QodeMagnifyingGlass />,
                    type: "text",
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
        </>
      )}
      {/* id="24:4873" */}
      {`${expand}` === `Yes` && (
        <>
          {/* name="❓ Expand=Yes" id="24:4873" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              paddingBottom: "var(--size-padding-paddingsm, 12px)",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="avatar" id="24:4874" type="INSTANCE" */}
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
                flexShrink: "0",
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
            {/* name="content" id="24:4875" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              {/* name="Title" id="24:4876" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighlg, 24px) /* 150% */",
                  }}
                >{`Job Title`}</span>
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Company`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Timeframe - Total Time`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 22px) /* 157.143% */",
                }}
              >{`Location`}</span>
              {/* name="experienceDescription" id="24:4881" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "var(--size-margin-marginxs, 8px)",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 22px) /* 157.143% */",
                  }}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</span>
                {/* name="Button" id="24:4883" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    title: "See Less",
                    iconR: <Icon.QodeMagnifyingGlass />,
                    type: "text",
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
        </>
      )}
    </>
  )
}
