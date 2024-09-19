// id="485:38132"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"
import { QodeCustom3459952 } from "@designSystem/custom/QodeCustom3459952"
import { QodeTooltip } from "@designSystem/ant/QodeTooltip"

export interface Qode48538132PageProps {
  style?: CSSProperties
}

export const Qode48538132Page: React.FC<Qode48538132PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Card states" id="485:38132" type="FRAME" */}
      <div
        style={{
          ...{
            display: "flex",


            alignItems: "flex-start",
            background: "#FFF",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="485:38133" type="INSTANCE" */}
        <QodeCustom13120
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              alignSelf: "stretch",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Body" id="485:38134" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "40px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              flex: "1 0 0",
              alignSelf: "stretch",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Header" id="485:38135" type="FRAME" */}
          <div
            style={{
              ...{
                height: "40px",
                display: "flex",
                alignSelf: "stretch",
                alignItems: "center",
                justifyItems: "stretch",
                justifyContent: "space-between"
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading3, 28px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
                },
                ...{},
              }}
            >{`My jobs`}</span>
            {/* name="Search bar" id="485:38137" type="INSTANCE" */}
            <QodeInput
              style={{
                ...{
                  display: "flex",
                  width: "480px",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Search",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="485:38138" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  width: "135px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconLeft: true,
                buttonname: "Add job",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodePlus />,
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
          {/* name="Job list" id="485:38139" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                flex: "1 0 0",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            {/* name="Jobs" id="485:38140" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                  flexWrap: "wrap",
                  borderRadius: "8px",
                },
                ...{},
              }}
            >
              {/* name="Frame 37389" id="485:38615" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start", gap: "8px" },
                  ...{},
                }}
              >
                {/* name="Job item" id="485:38141" type="INSTANCE" */}
                <QodeCustom48612
                  style={{
                    ...{
                      display: "flex",
                      width: "366px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "2px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--neutral-white, #fff)",
                      boxShadow:
                        "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                    },
                    ...{},
                  }}
                  {...{ state: "hovered", _style: "Simple" }}
                />
                {/* name="Job item" id="485:38142" type="INSTANCE" */}
                <QodeCustom48612
                  style={{
                    ...{
                      display: "flex",
                      width: "366px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{ state: "default", _style: "Simple" }}
                />
                {/* name="Job item" id="485:38143" type="INSTANCE" */}
                <QodeCustom48612
                  style={{
                    ...{
                      display: "flex",
                      width: "366px",
                      maxWidth: "440px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{ state: "default", _style: "Simple" }}
                />
              </div>
              {/* name="Job item" id="485:38144" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  ...{
                    display: "flex",
                    width: "366px",
                    maxWidth: "440px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: "var(--border-radius-large, 12px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
            </div>
            {/* name="Cursor" id="490:29541" type="INSTANCE" */}
            <QodeCustom3459952
              style={{
                ...{
                  width: "31px",
                  height: "31px",
                  position: "absolute",
                  left: "307px",
                  top: "53px",
                  fill: "var(--transparent-transparent, rgba(255, 255, 255, 0.00))",
                  backgroundBlendMode: "multiply",
                },
                ...{},
              }}
              {...{ type: "Pointer" }}
            />
            {/* name="Tooltip" id="490:29581" type="INSTANCE" */}
            <QodeTooltip
              style={{
                ...{
                  display: "flex",
                  width: "283px",
                  padding:
                    "var(--size-size-sizexxs-6px, 6px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  left: "109px",
                  top: "81px",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--neutral-gray-95, #383838)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{
                title:
                  "Lead Software Engineer in Microservices and Full-Stack Development",
                placement: "left",
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Qode48538132Page
