// id="354:8199"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeFloatButton } from "@designSystem/ant/QodeFloatButton"
import { QodeCustom3547070 } from "@designSystem/custom/QodeCustom3547070"

export interface QodeCustom3548199Props {
  open?: "no" | "yes"
}

export const QodeCustom3548199: React.FC<
  QodeCustom3548199Props & { style?: CSSProperties }
> = ({ open = "no", style, ...rest }) => {
  return (
    <>
      {/* name="FloatButton__Menu" id="354:8199" type="COMPONENT_SET" */}
      {/* id="354:8198" */}
      {`${open}` === `no` && (
        <>
          {/* name="open=no" id="354:8198" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="FloatButton" id="354:8155" type="INSTANCE" */}
            <QodeFloatButton
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{
                type: "primary",
                state: "default",
                shape: "circle",
                badge: "none",
              }}
            />
          </div>
        </>
      )}
      {/* id="354:8200" */}
      {`${open}` === `yes` && (
        <>
          {/* name="open=yes" id="354:8200" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              },
              ...style,
            }}
          >
            {/* name="🧬 float menu" id="354:8204" type="INSTANCE" */}
            <QodeCustom3547070
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...{},
              }}
              {...{ type: "circle", items: "6" }}
            />
            {/* name="FloatButton" id="354:8201" type="INSTANCE" */}
            <QodeFloatButton
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{
                type: "primary",
                state: "default",
                shape: "circle",
                badge: "none",
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
