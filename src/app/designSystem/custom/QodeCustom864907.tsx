// id="86:4907"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeCustom773600 } from "@designSystem/custom/QodeCustom773600"

export interface QodeCustom864907Props {}

export const QodeCustom864907: React.FC<
  QodeCustom864907Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Header" id="86:4907" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "620px",
            height: "82px",
            padding: "16px 20px",
            alignItems: "center",
            gap: "20px",
            flexShrink: "0",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="avatar" id="86:4879" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="avatar" id="86:4880" type="INSTANCE" */}
          <QodeCustom562954
            style={{
              ...{
                display: "flex",
                width: "48px",
                height: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                borderRadius: "666px",
                background: "var(--color-success-colorsuccesshover, #a3c73e)",
              },
              ...{},
            }}
            {...{
              opentowork: true,
              img: true,
              type: "Round",
              state: "Default",
            }}
          />
          {/* name="Frame 37305" id="86:4881" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
                flex: "1 0 0",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                },
                ...{},
              }}
            >{`Nguyen Quoc Thai`}</span>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Senior Software Developer`}</span>
          </div>
        </div>
        {/* name="Right" id="86:4884" type="FRAME" */}
        <div
          style={{
            ...{ display: "flex", alignItems: "center", gap: "20px" },
            ...{},
          }}
        >
          {/* name="Contacts" id="86:4885" type="FRAME" */}
          <div
            style={{
              ...{ display: "flex", alignItems: "center", gap: "8px" },
              ...{},
            }}
          >
            {/* name="Contact type" id="86:4886" type="INSTANCE" */}
            <QodeCustom773600
              style={{
                ...{
                  display: "flex",
                  width: "36px",
                  padding: "var(--size-size-sizexxs-6px, 6px)",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{ icon: <Icon.QodeLinkedin />, state: "Default" }}
            />
            {/* name="Contact type" id="86:4887" type="INSTANCE" */}
            <QodeCustom773600
              style={{
                ...{
                  display: "flex",
                  width: "36px",
                  padding: "var(--size-size-sizexxs-6px, 6px)",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{ icon: <Icon.QodeEnvelope />, state: "Default" }}
            />
            {/* name="Contact type" id="86:4888" type="INSTANCE" */}
            <QodeCustom773600
              style={{
                ...{
                  display: "flex",
                  width: "36px",
                  padding: "var(--size-size-sizexxs-6px, 6px)",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{ icon: <Icon.QodePhone />, state: "Default" }}
            />
          </div>
          {/* name="🎰 icon" id="86:4889" type="INSTANCE" */}
          <Icon.QodeXmark
            style={{ ...{ width: "24px", height: "24px" }, ...{} }}
            {...{}}
          />
        </div>
      </div>
    </>
  )
}
