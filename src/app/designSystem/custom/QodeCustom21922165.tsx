// id="219:22165"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom21922165Props {
  menu?: string
  property_1?: "default" | "active"
}

export const QodeCustom21922165: React.FC<
  QodeCustom21922165Props & { style?: CSSProperties }
> = ({ menu = "Menu", property_1 = "default", ...rest }) => {
  return (
    <>
      {/* name="navbar | menu" id="219:22165" type="COMPONENT_SET" */}
      {/* id="219:22166" */}
      {`${property_1}` === `default` && (
        <>
          {/* name="Property 1=default" id="219:22166" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "70px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Rectangle 1" id="219:22167" type="RECTANGLE" */}
            <Flex
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                background: "#D9D9D9",
              }}
            >
              {/* name="Rectangle 1" id=219:22167 type=RECTANGLE */}
              <></>
            </Flex>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 22px) /* 157.143% */",
              }}
            >{`Menu`}</span>
          </div>
        </>
      )}
      {/* id="219:22169" */}
      {`${property_1}` === `active` && (
        <>
          {/* name="Property 1=active" id="219:22169" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "70px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="Rectangle 1" id="219:22170" type="RECTANGLE" */}
            <Flex
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                background: "var(--neutral-gray-90, #464646)",
              }}
            >
              {/* name="Rectangle 1" id=219:22170 type=RECTANGLE */}
              <></>
            </Flex>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheight, 22px) /* 157.143% */",
              }}
            >{`Menu`}</span>
          </div>
        </>
      )}
    </>
  )
}
