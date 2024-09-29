// id="40:9540"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom198747736 } from "@designSystem/custom/QodeCustom198747736"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeCustom5016533 } from "@designSystem/custom/QodeCustom5016533"

export interface QodeCustom409540Props {}

export const QodeCustom409540: React.FC<
  QodeCustom409540Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, verified=false" id="40:9540" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Header" id="40:9541" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--font-size-base, 14px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Profile/Avatar" id="1987:47809" type="INSTANCE" */}
          <QodeCustom198747736
            style={{
              ...{
                display: "flex",
                width: "38px",
                height: "38px",
                justifyContent: "center",
                alignItems: "center",
              },
              ...{},
            }}
            {...{ verified: false, size: "38" }}
          />
          {/* name="Content" id="40:9582" type="FRAME" */}
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
            {/* name="wrap" id="40:9583" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
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
                    maxWidth: "212px",
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
              {/* name="YoE" id="40:9585" type="FRAME" */}
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
                  height: "20px",
                  maxHeight: "40px",
                  alignSelf: "stretch",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-40, #464646)",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
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
            {/* name="Location" id="40:9588" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="location-dot" id="69:8839" type="INSTANCE" */}
              <QodeCustom698757
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-40, #464646)",
                    textOverflow: "ellipsis",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Ho Chi Minh city, Vietnam`}</span>
            </div>
          </div>
        </div>
        {/* name="eye" id="71:9955" type="INSTANCE" */}
        <QodeCustom5016533
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "1.8px 0.599px 1.8px 0.6px",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "28px",
              bottom: "26px",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
