// id="40:9540"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"

export interface QodeCustom409540Props {}

export const QodeCustom409540: React.FC<
  QodeCustom409540Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=default" id="40:9540" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
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
          {/* name="avatar" id="40:9542" type="INSTANCE" */}
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
                    maxHeight: "44px",
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
                  maxHeight: "40px",
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
            {/* name="Location" id="40:9588" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
            >
              {/* name="location-dot" id="69:8839" type="INSTANCE" */}
              <Icon.QodeLocationDot
                style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
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
        <Icon.QodeEye
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
              bottom: "46px",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
