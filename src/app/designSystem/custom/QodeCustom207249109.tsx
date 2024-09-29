// id="2072:49109"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63530780 from "@designSystem/icon/svg/QodeSvg63530780"
import { QodeCustom434 } from "@designSystem/custom/QodeCustom434"
import { QodeCustom440 } from "@designSystem/custom/QodeCustom440"
import { QodeCustom12103 } from "@designSystem/custom/QodeCustom12103"
import QodeSvg207249492 from "@designSystem/icon/svg/QodeSvg207249492"
import { QodeCustom11401 } from "@designSystem/custom/QodeCustom11401"

export interface QodeCustom207249109Props {
  property_1?: "Default" | "Variant2"
}

export const QodeCustom207249109: React.FC<
  QodeCustom207249109Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Navbar" id="2072:49109" type="COMPONENT_SET" */}
      {/* id="1:3120" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="1:3120" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "84px",
                height: "800px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Logo" id="1:3092" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="logo" id="635:31404" type="INSTANCE" */}
              <QodeSvg63530780
                style={{ ...{ width: "40px", height: "40px" }, ...{} }}
                {...{
                  type: "Default",
                  darkmode: "yes",
                  orientation: "landscape",
                  wordmark: "no",
                }}
              />
            </div>
            {/* name="V-Menu" id="1:3094" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Navbar/Menu" id="4:124" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
              {/* name="Navbar/Menu" id="16:5813" type="INSTANCE" */}
              <QodeCustom440
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Active" }}
              />
              {/* name="Navbar/Menu" id="4:54" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
              {/* name="Navbar/Menu" id="4:95" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Btm" id="1:3098" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Profile" id="1:3099" type="INSTANCE" */}
              <QodeCustom12103
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ _style: "V - Profile", logIn: "No" }}
              />
              {/* name="Profile" id="1:3100" type="INSTANCE" */}
              <QodeCustom12103
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "var(--font-size-large, 16px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ _style: "V - Profile", logIn: "No" }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="2072:49110" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="2072:49110" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "84px",
                height: "800px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Logo" id="2072:49111" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="logo" id="2072:49112" type="INSTANCE" */}
              <QodeSvg63530780
                style={{ ...{ width: "40px", height: "40px" }, ...{} }}
                {...{
                  type: "Default",
                  darkmode: "yes",
                  orientation: "landscape",
                  wordmark: "no",
                }}
              />
            </div>
            {/* name="V-Menu" id="2072:49113" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Navbar/Menu" id="2072:49114" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
              {/* name="Navbar/Menu" id="2072:49115" type="INSTANCE" */}
              <QodeCustom440
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Active" }}
              />
              {/* name="Navbar/Menu" id="2072:49116" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
              {/* name="Navbar/Menu" id="2072:49117" type="INSTANCE" */}
              <QodeCustom434
                style={{
                  ...{
                    display: "flex",
                    width: "84px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Btm" id="2072:49118" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px 0px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderTop:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="Credits" id="2072:49491" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "3px",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`500`}</span>
                {/* name="CREDITS" id="2072:49492" type="VECTOR" */}
                <QodeSvg207249492
                  style={{
                    ...{
                      width: "45.103px",
                      height: "8.592px",
                      fill: "var(--neutral-gray-30, #bfbfbf)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              {/* name="Line 41" id="2072:49533" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "84px",
                    height: "1px",
                    background: "var(--border-border-neutral-20, #e3e3e3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="2072:49645" type="INSTANCE" */}
              <QodeCustom11401
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
                  },
                  ...{},
                }}
                {...{
                  title: "Button",
                  type: "default",
                  size: "large",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
