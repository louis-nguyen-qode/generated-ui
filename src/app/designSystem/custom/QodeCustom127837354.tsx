// id="1278:37354"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom127837317 } from "@designSystem/custom/QodeCustom127837317"

export interface QodeCustom127837354Props {
  icon?: React.ReactNode
  option?: boolean
  state?: "on" | "off"
  _style?: "Default"
}

export const QodeCustom127837354: React.FC<
  QodeCustom127837354Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  option = true,
  state = "on",
  _style = "Default",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Interviewbtn/Present" id="1278:37354" type="COMPONENT_SET" */}
      {/* id="1278:37355" */}
      {`${state}` === `on` && `${_style}` === `Default` && (
        <>
          {/* name="state=on, style=Default" id="1278:37355" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "65px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="1278:37358" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--size-size-sizexs-8px, 8px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
            >
              {/* name="up-to-line" id="1278:37359" type="INSTANCE" */}
              <QodeCustom127837317
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`Present`}</span>
          </div>
        </>
      )}
      {/* id="1278:37379" */}
      {`${state}` === `off` && `${_style}` === `Default` && (
        <>
          {/* name="state=off, style=Default" id="1278:37379" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "65px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="1278:37381" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="up-to-line" id="1278:37382" type="INSTANCE" */}
              <QodeCustom127837317
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`Present`}</span>
          </div>
        </>
      )}
    </>
  )
}
