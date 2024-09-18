// id="354:8199"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeFloatButton } from "@designSystem/ant/QodeFloatButton"

export interface QodeCustom3548199Props {
  open?: "no" | "yes"
}

export const QodeCustom3548199: React.FC<
  QodeCustom3548199Props & { style?: CSSProperties }
> = ({ open = "no", ...rest }) => {
  return (
    <>
      {/* name="FloatButton__Menu" id="354:8199" type="COMPONENT_SET" */}
      {/* id="354:8198" */}
      {`${open}` === `no` && (
        <>
          {/* name="open=no" id="354:8198" type="COMPONENT" */}
          <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
            {/* name="FloatButton" id="354:8155" type="INSTANCE" */}
            <QodeFloatButton
              style={{
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
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-padding, 16px)",
            }}
          >
            {/* name="🧬 float menu" id="354:8204" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-padding, 16px)",
              }}
            >
              {/* name="🧬 item 1" id="I354:8204;354:7066" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
              {/* name="🧬 item 2" id="I354:8204;354:7245" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
              {/* name="🧬 item 3" id="I354:8204;354:7250" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
              {/* name="🧬 item 4" id="I354:8204;354:7253" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
              {/* name="🧬 item 5" id="I354:8204;354:7256" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
              {/* name="🧬 item last" id="I354:8204;354:7259" type="INSTANCE" */}
              <QodeFloatButton
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
                {...{
                  type: "default",
                  state: "default",
                  shape: "circle",
                  badge: "none",
                }}
              />
            </Flex>
            {/* name="FloatButton" id="354:8201" type="INSTANCE" */}
            <QodeFloatButton
              style={{
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
