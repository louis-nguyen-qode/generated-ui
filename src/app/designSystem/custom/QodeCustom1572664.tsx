// id="157:2664"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1572664Props {
  title?: string
  state?: "default" | "active"
  direction?: "horizontal" | "vertical"
  level?: "1" | "2"
}

export const QodeCustom1572664: React.FC<
  QodeCustom1572664Props & { style?: CSSProperties }
> = ({
  title = "Anchor Link",
  state = "default",
  direction = "vertical",
  level = "1",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".anchor__link" id="157:2664" type="COMPONENT_SET" */}
      {/* id="157:2663" */}
      {`${state}` === `default` &&
        `${direction}` === `vertical` &&
        `${level}` === `1` && (
          <>
            {/* name="state=default, direction=vertical, level=1" id="157:2663" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  alignItems: "center",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
      {/* id="157:2667" */}
      {`${state}` === `default` &&
        `${direction}` === `vertical` &&
        `${level}` === `2` && (
          <>
            {/* name="state=default, direction=vertical, level=2" id="157:2667" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxl, 32px)",
                  alignItems: "center",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
      {/* id="157:2669" */}
      {`${state}` === `active` &&
        `${direction}` === `vertical` &&
        `${level}` === `1` && (
          <>
            {/* name="state=active, direction=vertical, level=1" id="157:2669" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  alignItems: "center",
                  borderLeft:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-primary-colorprimarytext, #1597f4)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
      {/* id="157:2671" */}
      {`${state}` === `active` &&
        `${direction}` === `vertical` &&
        `${level}` === `2` && (
          <>
            {/* name="state=active, direction=vertical, level=2" id="157:2671" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxl, 32px)",
                  alignItems: "center",
                  borderLeft:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-primary-colorprimarytext, #1597f4)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
      {/* id="157:2673" */}
      {`${state}` === `default` &&
        `${direction}` === `horizontal` &&
        `${level}` === `1` && (
          <>
            {/* name="state=default, direction=horizontal, level=1" id="157:2673" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-paddingxxs, 4px) 0px",
                  alignItems: "center",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
      {/* id="157:2675" */}
      {`${state}` === `active` &&
        `${direction}` === `horizontal` &&
        `${level}` === `1` && (
          <>
            {/* name="state=active, direction=horizontal, level=1" id="157:2675" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "var(--size-padding-paddingxxs, 4px) 0px",
                  alignItems: "center",
                  borderBottom:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
                },
                ...style,
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--color-primary-colorprimarytext, #1597f4)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Anchor Link`}</span>
            </div>
          </>
        )}
    </>
  )
}
