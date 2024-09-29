// id="77:3601"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom125237195 } from "@designSystem/custom/QodeCustom125237195"
import QodeSvg773593 from "@designSystem/icon/svg/QodeSvg773593"
import QodeSvg944494 from "@designSystem/icon/svg/QodeSvg944494"
import QodeSvg944495 from "@designSystem/icon/svg/QodeSvg944495"

export interface QodeCustom773601Props {
  icon?: React.ReactNode
  showIndicator?: boolean
  state?: "Default" | "Active" | "Hover"
}

export const QodeCustom773601: React.FC<
  QodeCustom773601Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  showIndicator = true,
  state = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Contact type" id="77:3601" type="COMPONENT_SET" */}
      {/* id="77:3600" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="77:3600" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "36px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="linkedin" id="78:7669" type="INSTANCE" */}
            <QodeCustom125237195
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Indicator" id="77:3593" type="ELLIPSE" */}
            <QodeSvg773593
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  right: "-2px",
                  top: "-2px",
                  fill: "var(--red-red-40, #f85631)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="94:4469" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="94:4469" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "36px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="linkedin" id="94:4470" type="INSTANCE" */}
            <QodeCustom125237195
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Indicator" id="94:4494" type="ELLIPSE" */}
            <QodeSvg944494
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  right: "-2px",
                  top: "-2px",
                  fill: "var(--red-red-40, #f85631)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="77:3602" */}
      {`${state}` === `Active` && (
        <>
          {/* name="State=Active" id="77:3602" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "36px",
                padding: "var(--size-size-sizexxs-6px, 6px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              },
              ...style,
            }}
          >
            {/* name="linkedin" id="78:7680" type="INSTANCE" */}
            <QodeCustom125237195
              style={{
                ...{ width: "24px", height: "24px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Indicator" id="94:4495" type="ELLIPSE" */}
            <QodeSvg944495
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  right: "-2px",
                  top: "-2px",
                  fill: "var(--red-red-40, #f85631)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
