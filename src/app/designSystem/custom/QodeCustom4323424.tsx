// id="43:23424"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom198747736 } from "@designSystem/custom/QodeCustom198747736"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom4310802 } from "@designSystem/custom/QodeCustom4310802"
import { QodeCustom228149326 } from "@designSystem/custom/QodeCustom228149326"

export interface QodeCustom4323424Props {}

export const QodeCustom4323424: React.FC<
  QodeCustom4323424Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=default, verified=false" id="43:23424" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "352px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "#FFF",
          },
          ...style,
        }}
      >
        {/* name="Header" id="43:23681" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "300px",
              alignItems: "flex-start",
              gap: "12px",
              flexShrink: "0",
            },
            ...{},
          }}
        >
          {/* name="Profile/Avatar" id="1987:50993" type="INSTANCE" */}
          <QodeCustom198747736
            style={{
              ...{
                display: "flex",
                width: "38px",
                height: "38px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...{},
            }}
            {...{ verified: false, size: "38" }}
          />
          {/* name="R" id="43:23683" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            {/* name="wrap" id="43:23684" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    maxHeight: "var(--line-height-lineheight, 22px)",
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`Nguyen Quoc Thai`}</span>
              {/* name="YoE" id="490:28738" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "2px 7px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "12px",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    },
                    ...{},
                  }}
                >{`12 YoE`}</span>
              </div>
            </div>
            <span
              style={{
                ...{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  alignSelf: "stretch",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-40, #464646)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Senior Software Developer at The Chemico`}</span>
            {/* name="Location" id="69:8862" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="location-dot" id="69:8863" type="INSTANCE" */}
              <QodeCustom698757
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
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
              >{`Ho Chi Minh city, Vietnam`}</span>
            </div>
          </div>
        </div>
        {/* name="Frame 37201" id="43:23365" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="Button" id="43:23366" type="INSTANCE" */}
          <QodeButton
            style={{
              ...{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background: "var(--color-info-colorinfo, #2e2e2e)",
              },
              ...{},
            }}
            {...{
              title: "Add notes",
              type: "primary",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="Upload CV" id="43:23367" type="INSTANCE" */}
          <QodeCustom4310802
            style={{
              ...{ display: "flex", width: "124px", alignItems: "flex-start" },
              ...{},
            }}
            {...{ property_1: "Default" }}
          />
        </div>
        {/* name="Indicator" id="43:23368" type="ELLIPSE" */}
        <Flex
          style={{
            ...{
              width: "8px",
              height: "8px",
              position: "absolute",
              left: "40px",
              bottom: "15px",
              borderRadius: "8px",
              background: "#FF7878",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Button" id="69:6437" type="INSTANCE" */}
        <QodeCustom228149326
          style={{
            ...{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              padding: "var(--size-padding-paddingxxs, 4px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              position: "absolute",
              right: "10px",
              top: "10px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              opacity: "0.5",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            buttonname: "Button",
            iconLeft: true,
            type: "default",
            size: "small",
            state: "default",
            content: "icon",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
