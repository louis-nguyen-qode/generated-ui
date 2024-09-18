// id="43:23423"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom4323423Props {}

export const QodeCustom4323423: React.FC<
  QodeCustom4323423Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=active" id="43:23423" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "358px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "2px solid var(--border-border-primary-20, #158de2)",
            background: "var(--blue-techblue-5, #f8fcff)",
          },
          ...style,
        }}
      >
        {/* name="Header" id="490:29136" type="FRAME" */}
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
          {/* name="avatar" id="490:29137" type="INSTANCE" */}
          <QodeCustom562954
            style={{
              ...{
                display: "flex",
                width: "36px",
                height: "36px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "499.5px",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...{},
            }}
            {...{
              opentowork: true,
              img: true,
              type: "Round",
              state: "Default",
            }}
          />
          {/* name="R" id="490:29138" type="FRAME" */}
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
            {/* name="wrap" id="490:29139" type="FRAME" */}
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
              {/* name="YoE" id="490:29141" type="FRAME" */}
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
            >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
            {/* name="Location" id="490:29144" type="FRAME" */}
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
              {/* name="location-dot" id="490:29145" type="INSTANCE" */}
              <Icon.QodeLocationDot
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
        {/* name="Frame 37201" id="43:23395" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "794px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
              flexShrink: "0",
            },
            ...{},
          }}
        >
          {/* name="Button" id="43:23396" type="INSTANCE" */}
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
              icononly: <Icon.QodeMagnifyingGlass />,
              iconL: <Icon.QodePlus />,
              iconR: <Icon.QodeMagnifyingGlass />,
              title: "Add notes",
              type: "primary",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="Upload CV" id="43:23397" type="INSTANCE" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "124px",
                alignItems: "flex-start",
                flexShrink: "0",
              },
              ...{},
            }}
            {...{ property_1: "Default" }}
          />
        </div>
        {/* name="Indicator" id="43:23398" type="ELLIPSE" */}
        <Flex
          style={{
            ...{
              width: "8px",
              height: "8px",
              position: "absolute",
              left: "40px",
              bottom: "35px",
              borderRadius: "8px",
              background: "#FF7878",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Button" id="69:6584" type="INSTANCE" */}
        <QodeButton
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
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            onlyIcon: <Icon.QodeTrash />,
            selectIconRight: <Icon.QodeMagnifyingGlass />,
            selectIconLeft: <Icon.QodeIcons />,
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
