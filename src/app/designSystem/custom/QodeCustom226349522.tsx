// id="2263:49522"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"

export interface QodeCustom226349522Props {
  icon?: React.ReactNode
  text?: string
  property_1?: "default" | "hover" | "active"
}

export const QodeCustom226349522: React.FC<
  QodeCustom226349522Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  text = "Setting menu",
  property_1 = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Setting item" id="2263:49522" type="COMPONENT_SET" */}
      {/* id="2263:49521" */}
      {`${property_1}` === `active` && (
        <>
          {/* name="Property 1=active" id="2263:49521" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "338px",
                padding: "16px",
                alignItems: "center",
                gap: "16px",
                background: "var(--blue-techblue-5, #f8fcff)",
                boxShadow: "0px 2px 0px 0px #158DE2",
              },
              ...style,
            }}
          >
            {/* name="user" id="2263:49609" type="INSTANCE" */}
            <QodeCustom161270
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Setting menu`}</span>
          </div>
        </>
      )}
      {/* id="2263:49520" */}
      {`${property_1}` === `default` && (
        <>
          {/* name="Property 1=default" id="2263:49520" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "338px",
                padding: "16px",
                alignItems: "center",
                gap: "16px",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="user" id="2263:49507" type="INSTANCE" */}
            <QodeCustom161270
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Setting menu`}</span>
          </div>
        </>
      )}
      {/* id="2263:49519" */}
      {`${property_1}` === `hover` && (
        <>
          {/* name="Property 1=hover" id="2263:49519" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "338px",
                padding: "16px",
                alignItems: "center",
                gap: "16px",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="user" id="2263:49605" type="INSTANCE" */}
            <QodeCustom161270
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                },
                ...{},
              }}
            >{`Setting menu`}</span>
          </div>
        </>
      )}
    </>
  )
}
