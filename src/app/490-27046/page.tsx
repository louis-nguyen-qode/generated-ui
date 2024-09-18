// id="490:27046"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom438720 } from "@designSystem/custom/QodeCustom438720"
import { QodeCustom588089 } from "@designSystem/custom/QodeCustom588089"
import { QodeCustom43430029 } from "@designSystem/custom/QodeCustom43430029"
import { QodeCustom4325081 } from "@designSystem/custom/QodeCustom4325081"
import { QodeCustom1197234 } from "@designSystem/custom/QodeCustom1197234"

export interface Qode49027046PageProps {
  style?: CSSProperties
}

export const Qode49027046Page: React.FC<Qode49027046PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Sourcing" id="490:27046" type="FRAME" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1280px",
            height: "800px",
            alignItems: "flex-start",
            background: "var(--app-bg, #f4f4f6)",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="490:27047" type="INSTANCE" */}
        <QodeCustom13120
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="b" id="490:27048" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "1196px",
              padding: "24px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              flexShrink: "0",
              alignSelf: "stretch",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Job title" id="490:27049" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                height: "42px",
                maxWidth: "1276px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...{},
            }}
          >
            {/* name="Wrap" id="490:27050" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "12px" },
                ...{},
              }}
            >
              {/* name="Button" id="490:27051" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeChevronLeft />,
                  buttonname: "Source new job",
                  selectIconLeft: <Icon.QodePlus />,
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Title" id="490:27052" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "4px" },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                      textDecorationLine: "underline",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer `}</span>
                {/* name="angle-down" id="490:27054" type="INSTANCE" */}
                <Icon.QodeAngleDown
                  style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                  {...{}}
                />
              </div>
              {/* name="Button" id="490:27055" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "70px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "View JD",
                  selectIconLeft: <Icon.QodeIcons />,
                  type: "default",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Special button/Shortlist" id="490:27056" type="INSTANCE" */}
            <QodeCustom438720
              style={{
                ...{
                  display: "flex",
                  height: "40px",
                  padding: "8px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-primary-20, #158de2)",
                  background: "var(--neutral-white, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{ state: "Default" }}
            />
          </div>
          {/* name="Wrap" id="490:27057" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                maxWidth: "1276px",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius: "12px 12px 0px 0px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...{},
            }}
          >
            {/* name="Search filter" id="490:27058" type="INSTANCE" */}
            <QodeCustom588089
              style={{
                ...{
                  display: "flex",
                  padding: "8px 12px",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  borderRadius:
                    "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-gray-10, #e3e3e3)",
                },
                ...{},
              }}
              {...{ property_1: "Default" }}
            />
            {/* name="Body" id="490:27059" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "#FFF",
                },
                ...{},
              }}
            >
              {/* name="List | Profile" id="490:27060" type="INSTANCE" */}
              <QodeCustom43430029
                style={{
                  ...{
                    display: "flex",
                    width: "353px",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "stretch",
                    background: "#FFF",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Profile" id="490:27061" type="INSTANCE" */}
              <QodeCustom4325081
                style={{
                  ...{
                    display: "flex",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderLeft:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
          </div>
        </div>
        {/* name="Overlay BG" id="490:28133" type="INSTANCE" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "1280px",
              height: "800px",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Modal/View JD/Modal/View JD/View JD" id="490:28115" type="INSTANCE" */}
        <QodeCustom1197234
          style={{
            ...{
              display: "flex",
              width: "900px",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              left: "190px",
              top: "60px",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}

export default Qode49027046Page
