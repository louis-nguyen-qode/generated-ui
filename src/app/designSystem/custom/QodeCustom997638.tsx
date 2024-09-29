// id="99:7638"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"

export interface QodeCustom997638Props {
  from?: "Recipient" | "Sender"
}

export const QodeCustom997638: React.FC<
  QodeCustom997638Props & { style?: CSSProperties }
> = ({ from = "Recipient", style, ...rest }) => {
  return (
    <>
      {/* name="Email/From" id="99:7638" type="COMPONENT_SET" */}
      {/* id="99:7637" */}
      {`${from}` === `Recipient` && (
        <>
          {/* name="From=Recipient" id="99:7637" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "209px",
                alignItems: "center",
                gap: "8px",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="99:7645" type="INSTANCE" */}
            <QodeCustom266995
              style={{
                ...{
                  display: "flex",
                  width: "28px",
                  height: "28px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "388.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{ img: true, type: "Round", state: "Default" }}
            />
            {/* name="Frame 37302" id="99:7633" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Nguyen Quoc Thai`}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`·`}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-30, #656565)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`6:08 PM`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="99:7639" */}
      {`${from}` === `Sender` && (
        <>
          {/* name="From=Sender" id="99:7639" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Frame 37301" id="99:7640" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "28px",
                  height: "28px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8.75px",
                  borderRadius: "874.125px",
                  border:
                    "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Frame 37302" id="99:7641" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Hung Nhan`}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`·`}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-30, #656565)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`6:08 PM`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
