// id="6:6165"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom66159 } from "@designSystem/custom/QodeCustom66159"
import { QodeCustom66161 } from "@designSystem/custom/QodeCustom66161"
import { QodeCustom66163 } from "@designSystem/custom/QodeCustom66163"

export interface QodeCustom66165Props {
  state?: "default" | "hover"
  direction?: "left" | "right"
}

export const QodeCustom66165: React.FC<
  QodeCustom66165Props & { style?: CSSProperties }
> = ({ state = "default", direction = "left", style, ...rest }) => {
  return (
    <>
      {/* name=".pagination__more" id="6:6165" type="COMPONENT_SET" */}
      {/* id="6:6166" */}
      {`${state}` === `default` && `${direction}` === `left` && (
        <>
          {/* name="state=default, direction=left" id="6:6166" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="6:6170" type="INSTANCE" */}
            <QodeCustom66159
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="6:6167" */}
      {`${state}` === `hover` && `${direction}` === `left` && (
        <>
          {/* name="state=hover, direction=left" id="6:6167" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="6:6171" type="INSTANCE" */}
            <QodeCustom66161
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="6:6168" */}
      {`${state}` === `default` && `${direction}` === `right` && (
        <>
          {/* name="state=default, direction=right" id="6:6168" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="6:6172" type="INSTANCE" */}
            <QodeCustom66159
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="6:6169" */}
      {`${state}` === `hover` && `${direction}` === `right` && (
        <>
          {/* name="state=hover, direction=right" id="6:6169" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="6:6173" type="INSTANCE" */}
            <QodeCustom66163
              style={{
                ...{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
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
