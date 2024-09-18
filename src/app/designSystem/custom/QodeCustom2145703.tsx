// id="214:5703"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom2145703Props {
  title?: string
  state?: "default" | "hover" | "selected"
}

export const QodeCustom2145703: React.FC<
  QodeCustom2145703Props & { style?: CSSProperties }
> = ({ title = "24", state = "default", ...rest }) => {
  return (
    <>
      {/* name=".timePicker__menuItem" id="214:5703" type="COMPONENT_SET" */}
      {/* id="214:5704" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="214:5704" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            <span
              style={{
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
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="214:5708" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="214:5708" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            <span
              style={{
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
              }}
            >{`24`}</span>
          </div>
        </>
      )}
      {/* id="214:5712" */}
      {`${state}` === `selected` && (
        <>
          {/* name="state=selected" id="214:5712" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "var(--size-height-controlheightsm, 24px)",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background: "var(--color-primary-colorprimarybg, #f8fcff)",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "var(--color-primary-colorprimarytext, #1597f4)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`24`}</span>
          </div>
        </>
      )}
    </>
  )
}
