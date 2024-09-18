// id="3308:4194"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom33084194Props {
  selectIcon?: React.ReactNode
  state?: "Default" | "Hover" | "Active"
}

export const QodeCustom33084194: React.FC<
  QodeCustom33084194Props & { style?: CSSProperties }
> = ({ selectIcon = undefined, state = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="V_Menu_item" id="3308:4194" type="COMPONENT_SET" */}
      {/* id="3308:1786" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="3308:1786" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-size-sizexs-8px, 8px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="plus" id="3308:1784" type="INSTANCE" */}
            <Icon.QodePlus
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="3308:4201" */}
      {`${state}` === `Hover` && (
        <>
          {/* name="State=Hover" id="3308:4201" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-size-sizexs-8px, 8px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                background:
                  "var(--color-neutral-background-colorbglayout, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="plus" id="3308:4438" type="INSTANCE" */}
            <Icon.QodePlus
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="3308:4205" */}
      {`${state}` === `Active` && (
        <>
          {/* name="State=Active" id="3308:4205" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-size-sizexs-8px, 8px)",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--size-size-sizexs-8px, 8px)",
                background: "var(--color-primary-colorprimaryactive, #1597f4)",
              },
              ...style,
            }}
          >
            {/* name="plus" id="3308:4440" type="INSTANCE" */}
            <Icon.QodePlus
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
