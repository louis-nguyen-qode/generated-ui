// id="182:9202"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1829202Props {
  title?: string
  state?: "default" | "warning" | "error"
}

export const QodeCustom1829202: React.FC<
  QodeCustom1829202Props & { style?: CSSProperties }
> = ({
  title = "This is a caption under a text input.",
  state = "default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Caption" id="182:9202" type="COMPONENT_SET" */}
      {/* id="182:9194" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="182:9194" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "218px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "flex-end",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`This is a caption under a text input.`}</span>
          </div>
        </>
      )}
      {/* id="182:9203" */}
      {`${state}` === `warning` && (
        <>
          {/* name="state=warning" id="182:9203" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "232px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "flex-end",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  height: "24px",
                  flex: "1 0 0",
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`This is a caption under a text input.`}</span>
          </div>
        </>
      )}
      {/* id="182:9205" */}
      {`${state}` === `error` && (
        <>
          {/* name="state=error" id="182:9205" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "232px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "flex-end",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  height: "24px",
                  flex: "1 0 0",
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`This is a caption under a text input.`}</span>
          </div>
        </>
      )}
    </>
  )
}
