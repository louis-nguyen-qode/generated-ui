// id="1:2100"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1167 } from "@designSystem/custom/QodeCustom1167"
import { QodeCustom11401 } from "@designSystem/custom/QodeCustom11401"
import { QodeCustom12072 } from "@designSystem/custom/QodeCustom12072"

export interface QodeCustom12100Props {
  _style?: "H - Profile" | "V - Profile"
  logIn?: "No" | "Yes"
}

export const QodeCustom12100: React.FC<
  QodeCustom12100Props & { style?: CSSProperties }
> = ({ _style = "H - Profile", logIn = "No", style, ...rest }) => {
  return (
    <>
      {/* name="Profile" id="1:2100" type="COMPONENT_SET" */}
      {/* id="1:2101" */}
      {`${_style}` === `H - Profile` && `${logIn}` === `No` && (
        <>
          {/* name="Style=H - Profile, ? Log In=No" id="1:2101" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
              },
              ...style,
            }}
          >
            {/* name="Button" id="1:2102" type="INSTANCE" */}
            <QodeCustom1167
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Log In",
                type: "default",
                size: "large",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="1:2103" */}
      {`${_style}` === `V - Profile` && `${logIn}` === `No` && (
        <>
          {/* name="Style=V - Profile, ? Log In=No" id="1:2103" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "var(--font-size-large, 16px)",
              },
              ...style,
            }}
          >
            {/* name="Button" id="1:2104" type="INSTANCE" */}
            <QodeCustom11401
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                },
                ...{},
              }}
              {...{
                title: "Button",
                type: "default",
                size: "large",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="1:2105" */}
      {`${_style}` === `H - Profile` && `${logIn}` === `Yes` && (
        <>
          {/* name="Style=H - Profile, ? Log In=Yes" id="1:2105" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "var(--size-padding-padding, 16px)",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="1:2106" type="INSTANCE" */}
            <QodeCustom12072
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{ icon: true, type: "Round", state: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="1:2107" */}
      {`${_style}` === `V - Profile` && `${logIn}` === `Yes` && (
        <>
          {/* name="Style=V - Profile, ? Log In=Yes" id="1:2107" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "var(--size-padding-padding, 16px)",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="1:2108" type="INSTANCE" */}
            <QodeCustom12072
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{ icon: true, type: "Round", state: "Default" }}
            />
          </div>
        </>
      )}
    </>
  )
}
