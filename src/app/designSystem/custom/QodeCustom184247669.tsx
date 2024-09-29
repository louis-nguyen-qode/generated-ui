// id="1842:47669"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom184247669Props {
  property_1?: "Time" | "Variant2"
}

export const QodeCustom184247669: React.FC<
  QodeCustom184247669Props & { style?: CSSProperties }
> = ({ property_1 = "Time", style, ...rest }) => {
  return (
    <>
      {/* name="Interview" id="1842:47669" type="COMPONENT_SET" */}
      {/* id="1494:54872" */}
      {`${property_1}` === `Time` && (
        <>
          {/* name="Property 1=Time" id="1494:54872" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "50px",
                padding: "2px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`00:01`}</span>
          </div>
        </>
      )}
      {/* id="1842:47670" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="1842:47670" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "50px",
                padding: "2px 8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`00:01`}</span>
          </div>
        </>
      )}
    </>
  )
}
