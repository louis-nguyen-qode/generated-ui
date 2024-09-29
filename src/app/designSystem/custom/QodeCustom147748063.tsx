// id="1477:48063"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom146945800 } from "@designSystem/custom/QodeCustom146945800"
import { QodeCustom146945799 } from "@designSystem/custom/QodeCustom146945799"
import { QodeCustom147748080 } from "@designSystem/custom/QodeCustom147748080"
import { QodeCustom147748085 } from "@designSystem/custom/QodeCustom147748085"

export interface QodeCustom147748063Props {
  device?: "mobile" | "desktop & tablet"
}

export const QodeCustom147748063: React.FC<
  QodeCustom147748063Props & { style?: CSSProperties }
> = ({ device = "desktop & tablet", style, ...rest }) => {
  return (
    <>
      {/* name="Stepper" id="1477:48063" type="COMPONENT_SET" */}
      {/* id="1469:45787" */}
      {`${device}` === `desktop & tablet` && (
        <>
          {/* name="device=desktop & tablet" id="1469:45787" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "622px",
                padding: "16px 32px",
                alignItems: "flex-end",
                gap: "12px",
                borderRadius: "0px 0px 24px 24px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "#FCFCFC",
              },
              ...style,
            }}
          >
            {/* name="Stepper/Pre-interiview/Item" id="1469:45802" type="INSTANCE" */}
            <QodeCustom146945800
              style={{
                ...{
                  display: "flex",
                  height: "51px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "done", device: "Default" }}
            />
            {/* name="Stepper/Pre-interiview/Item" id="1469:45808" type="INSTANCE" */}
            <QodeCustom146945799
              style={{
                ...{
                  display: "flex",
                  height: "51px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "waiting", device: "Default" }}
            />
            {/* name="Stepper/Pre-interiview/Item" id="1469:45814" type="INSTANCE" */}
            <QodeCustom146945799
              style={{
                ...{
                  display: "flex",
                  height: "51px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "waiting", device: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="1477:48064" */}
      {`${device}` === `mobile` && (
        <>
          {/* name="device=mobile" id="1477:48064" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "335px",
                padding: "12px",
                alignItems: "flex-end",
                gap: "8px",
                borderBottom:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "#FCFCFC",
              },
              ...style,
            }}
          >
            {/* name="Stepper/Pre-interiview/Item" id="1477:48065" type="INSTANCE" */}
            <QodeCustom147748080
              style={{
                ...{
                  display: "flex",
                  height: "49px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "done", device: "mobile" }}
            />
            {/* name="Stepper/Pre-interiview/Item" id="1477:48066" type="INSTANCE" */}
            <QodeCustom147748085
              style={{
                ...{
                  display: "flex",
                  height: "49px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "waiting", device: "mobile" }}
            />
            {/* name="Stepper/Pre-interiview/Item" id="1477:48067" type="INSTANCE" */}
            <QodeCustom147748085
              style={{
                ...{
                  display: "flex",
                  height: "49px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
              {...{ property_1: "waiting", device: "mobile" }}
            />
          </div>
        </>
      )}
    </>
  )
}
