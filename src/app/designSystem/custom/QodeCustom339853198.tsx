// id="3398:53198"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom339853198Props {
  direction?: "Horizontal" | "Vertical"
}

export const QodeCustom339853198: React.FC<
  QodeCustom339853198Props & { style?: CSSProperties }
> = ({ direction = "Vertical", style, ...rest }) => {
  return (
    <>
      {/* name="Scrollbar" id="3398:53198" type="COMPONENT_SET" */}
      {/* id="3398:53197" */}
      {`${direction}` === `Vertical` && (
        <>
          {/* name="Direction=Vertical" id="3398:53197" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "6px",
                height: "50px",
                flexShrink: "0",
                borderRadius: "4px",
                background:
                  "var(--opacity-black-black-opacity-15, rgba(0, 0, 0, 0.15))",
              },
              ...style,
            }}
          >
            <></>
          </div>
        </>
      )}
      {/* id="3398:53196" */}
      {`${direction}` === `Horizontal` && (
        <>
          {/* name="Direction=Horizontal" id="3398:53196" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "50px",
                height: "6px",
                flexShrink: "0",
                borderRadius: "4px",
                background:
                  "var(--opacity-black-black-opacity-15, rgba(0, 0, 0, 0.15))",
              },
              ...style,
            }}
          >
            <></>
          </div>
        </>
      )}
    </>
  )
}
