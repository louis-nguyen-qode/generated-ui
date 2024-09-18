// id="202:32920"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20232920Props {
  title?: string
  state?: "default" | "current" | "hover" | "inactive" | "selected"
}

export const QodeCustom20232920: React.FC<
  QodeCustom20232920Props & { style?: CSSProperties }
> = ({ title = "24", state = "default", style, ...rest }) => {
  return (
    <>
      {/* name=".datePicker__menuItem" id="202:32920" type="COMPONENT_SET" */}
      {/* id="202:32919" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="202:32919" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="202:32923" */}
      {`${state}` === `current` && (
        <>
          {/* name="state=current" id="202:32923" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="202:32925" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="202:32925" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="202:32927" */}
      {`${state}` === `inactive` && (
        <>
          {/* name="state=inactive" id="202:32927" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="202:32929" */}
      {`${state}` === `selected` && (
        <>
          {/* name="state=selected" id="202:32929" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-primary-colorprimary, #1597f4)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`24`}</span>
          </div>
        </>
      )}
    </>
  )
}
