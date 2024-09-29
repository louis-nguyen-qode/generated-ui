// id="1459:45943"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg145945908 from "@designSystem/icon/svg/QodeSvg145945908"

export interface QodeCustom145945943Props {}

export const QodeCustom145945943: React.FC<
  QodeCustom145945943Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Speak 1" id="1459:45943" type="COMPONENT" */}
      <div
        style={{
          ...{
            width: "225px",
            height: "125px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-large, 12px)",
            border: "2px solid #81E8FF",
            background: "#282828",
          },
          ...style,
        }}
      >
        {/* name="Glow 1" id="1459:45906" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "224px",
              height: "125px",
              flexShrink: "0",
              borderRadius: "4px",
              border: "2px solid #2CFFFF",
              filter: "blur(3px)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Avatar" id="1459:45907" type="GROUP" */}
        <Flex
          style={{
            ...{ width: "48px", height: "48px", flexShrink: "0" },
            ...{},
          }}
        >
          {/* name="bg" id="1459:45908" type="GROUP" */}
          <QodeSvg145945908
            style={{
              ...{
                width: "48px",
                height: "48px",
                flexShrink: "0",
                opacity: "0.3",
              },
              ...{},
            }}
            {...{}}
          />
          {/* name="Mask group" id="1459:45911" type="GROUP" */}
          <Flex
            style={{
              ...{ width: "42px", height: "42px", flexShrink: "0" },
              ...{},
            }}
          >
            {/* name="Ellipse 1" id="1459:45912" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "42px",
                  height: "42px",
                  flexShrink: "0",
                  fill: "#D9D9D9",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="portrait-3d-female-doctor 1" id="1459:45913" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "63.678px",
                  height: "42.565px",
                  flexShrink: "0",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </Flex>
        </Flex>
        <span
          style={{
            ...{
              color: "#FFF",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px /* 100% */",
            },
            ...{},
          }}
        >{`Speaking`}</span>
      </div>
    </>
  )
}
