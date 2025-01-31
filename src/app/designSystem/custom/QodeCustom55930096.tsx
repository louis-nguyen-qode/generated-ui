// id="559:30096"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom55930096Props {
  property_1?: "AI" | "Human"
}

export const QodeCustom55930096: React.FC<
  QodeCustom55930096Props & { style?: CSSProperties }
> = ({ property_1 = "AI", style, ...rest }) => {
  return (
    <>
      {/* name="Interview/Badge" id="559:30096" type="COMPONENT_SET" */}
      {/* id="677:33618" */}
      {`${property_1}` === `AI` && (
        <>
          {/* name="Property 1=AI" id="677:33618" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "0px 0px 0px 12px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                background:
                  "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
              },
              ...style,
            }}
          >
            {/* name="stars" id="677:33619" type="INSTANCE" */}
            <Icon.QodeStars
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:33724" */}
      {`${property_1}` === `Human` && (
        <>
          {/* name="Property 1=Human" id="677:33724" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "7px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "0px 0px 0px 12px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "#E8E8E8",
              },
              ...style,
            }}
          >
            {/* name="user" id="677:33729" type="INSTANCE" */}
            <Icon.QodeUser
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
