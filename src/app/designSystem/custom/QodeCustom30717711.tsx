// id="307:17711"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"
import { QodeCustom31123052 } from "@designSystem/custom/QodeCustom31123052"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom4310802 } from "@designSystem/custom/QodeCustom4310802"

export interface QodeCustom30717711Props {}

export const QodeCustom30717711: React.FC<
  QodeCustom30717711Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active" id="307:17711" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "352px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "2px solid var(--border-border-primary-20, #158de2)",
            background: "var(--blue-techblue-5, #f8fcff)",
          },
          ...style,
        }}
      >
        {/* name="Header" id="307:17837" type="FRAME" */}
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
          {/* name="avatar" id="307:17838" type="INSTANCE" */}
          <QodeCustom266995
            style={{
              ...{
                display: "flex",
                width: "48px",
                height: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                borderRadius: "666px",
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
          {/* name="R" id="307:17912" type="FRAME" */}
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
            {/* name="wrap" id="307:17913" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--line-height-lineheighheading5, 24px) /* 150% */",
                  },
                  ...{},
                }}
              >{`Nguyen Quoc Thai`}</span>
            </div>
            {/* name="Interviewed/Status" id="336:19561" type="INSTANCE" */}
            <QodeCustom31123052
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
              {...{ status: "upcoming" }}
            />
          </div>
        </div>
        {/* name="Frame 37201" id="307:17723" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "794px",
              padding: "12px 20px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
            },
            ...{},
          }}
        >
          {/* name="Button" id="307:17724" type="INSTANCE" */}
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
          {/* name="Upload CV" id="307:17725" type="INSTANCE" */}
          <QodeCustom4310802
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
        {/* name="Indicator" id="307:17726" type="ELLIPSE" */}
        <Flex
          style={{
            ...{
              width: "8px",
              height: "8px",
              position: "absolute",
              left: "40px",
              bottom: "-7px",
              borderRadius: "8px",
              background: "#FF7878",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
      </div>
    </>
  )
}
