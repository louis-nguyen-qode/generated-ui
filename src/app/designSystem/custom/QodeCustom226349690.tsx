// id="2263:49690"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom226349521 } from "@designSystem/custom/QodeCustom226349521"
import { QodeCustom226349520 } from "@designSystem/custom/QodeCustom226349520"

export interface QodeCustom226349690Props {
  property_1?: "account" | "credits" | "subscription"
}

export const QodeCustom226349690: React.FC<
  QodeCustom226349690Props & { style?: CSSProperties }
> = ({ property_1 = "account", style, ...rest }) => {
  return (
    <>
      {/* name="Navbar/Settings" id="2263:49690" type="COMPONENT_SET" */}
      {/* id="2263:49652" */}
      {`${property_1}` === `account` && (
        <>
          {/* name="Property 1=account" id="2263:49652" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "281px",
                height: "682px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Setting item" id="2263:49559" type="INSTANCE" */}
            <QodeCustom226349521
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--blue-techblue-5, #f8fcff)",
                  boxShadow: "0px 2px 0px 0px #158DE2",
                },
                ...{},
              }}
              {...{ text: "Account", property_1: "active" }}
            />
            {/* name="Setting item" id="2263:49560" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Your credits", property_1: "default" }}
            />
            {/* name="Setting item" id="2263:49561" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Manage subscription", property_1: "default" }}
            />
          </div>
        </>
      )}
      {/* id="2263:49691" */}
      {`${property_1}` === `credits` && (
        <>
          {/* name="Property 1=credits" id="2263:49691" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "281px",
                height: "682px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Setting item" id="2263:49692" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Account", property_1: "default" }}
            />
            {/* name="Setting item" id="2263:49693" type="INSTANCE" */}
            <QodeCustom226349521
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--blue-techblue-5, #f8fcff)",
                  boxShadow: "0px 2px 0px 0px #158DE2",
                },
                ...{},
              }}
              {...{ text: "Your credits", property_1: "active" }}
            />
            {/* name="Setting item" id="2263:49694" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Manage subscription", property_1: "default" }}
            />
          </div>
        </>
      )}
      {/* id="2263:49704" */}
      {`${property_1}` === `subscription` && (
        <>
          {/* name="Property 1=subscription" id="2263:49704" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "281px",
                height: "682px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Setting item" id="2263:49705" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Account", property_1: "default" }}
            />
            {/* name="Setting item" id="2263:49706" type="INSTANCE" */}
            <QodeCustom226349520
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ text: "Your credits", property_1: "default" }}
            />
            {/* name="Setting item" id="2263:49707" type="INSTANCE" */}
            <QodeCustom226349521
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  background: "var(--blue-techblue-5, #f8fcff)",
                  boxShadow: "0px 2px 0px 0px #158DE2",
                },
                ...{},
              }}
              {...{ text: "Manage subscription", property_1: "active" }}
            />
          </div>
        </>
      )}
    </>
  )
}
