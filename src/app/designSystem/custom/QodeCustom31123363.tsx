// id="311:23363"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom199059991 } from "@designSystem/custom/QodeCustom199059991"
import { QodeCustom182845845 } from "@designSystem/custom/QodeCustom182845845"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeCustom228149016 } from "@designSystem/custom/QodeCustom228149016"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"

export interface QodeCustom31123363Props {}

export const QodeCustom31123363: React.FC<
  QodeCustom31123363Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Variant5" id="311:23363" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "806px",
            alignItems: "flex-start",
            gap: "24px",
          },
          ...style,
        }}
      >
        {/* name="Wrap" id="311:23364" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="Profile/Avatar" id="1990:60697" type="INSTANCE" */}
          <QodeCustom199059991
            style={{
              ...{
                display: "flex",
                width: "72px",
                height: "72px",
                justifyContent: "center",
                alignItems: "center",
              },
              ...{},
            }}
            {...{ verified: false, size: "72" }}
          />
          {/* name="Wrap" id="311:23366" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            {/* name="Name yoe" id="1828:48409" type="FRAME" */}
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
              {/* name="Icon/Verified profile" id="1828:49365" type="INSTANCE" */}
              <QodeCustom182845845
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "24px",
                    border: "1px solid #1597F4",
                    background: "#EEF8FF",
                  },
                  ...{},
                }}
                {...{ property_1: "2" }}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-10, #bfbfbf)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "var(--lineheight-lineheight-h6, 22px)",
                  },
                  ...{},
                }}
              >{`Nguyen Quoc Thai · 12 YoE`}</span>
            </div>
            {/* name="Brief" id="311:23370" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Senior Software Developer at The Chemico Vietnam`}</span>
              {/* name="Location" id="311:23372" type="FRAME" */}
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
                {/* name="location-dot" id="311:23373" type="INSTANCE" */}
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
        </div>
        {/* name="Frame 37292" id="311:23375" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "9px" },
            ...{},
          }}
        >
          {/* name="Button" id="311:23376" type="INSTANCE" */}
          <QodeCustom228149016
            style={{
              ...{
                display: "flex",
                width: "120px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              },
              ...{},
            }}
            {...{
              buttonname: "Contact",
              iconLeft: true,
              type: "default",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="Button" id="311:23377" type="INSTANCE" */}
          <QodeCustom228149015
            style={{
              ...{
                display: "flex",
                width: "150px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...{},
            }}
            {...{
              iconLeft: true,
              buttonname: "New interview",
              type: "primary",
              size: "default",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
        </div>
      </div>
    </>
  )
}
