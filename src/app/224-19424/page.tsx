// id="224:19424"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"

export interface Qode22419424PageProps {
  style?: CSSProperties
}

export const Qode22419424Page: React.FC<Qode22419424PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Search" id="224:19424" type="FRAME" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            alignItems: "flex-start",
            background: "#FFF",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="224:19425" type="INSTANCE" */}
        <QodeCustom13120
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Body" id="224:19426" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              
              
              padding: "40px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Header" id="224:19427" type="FRAME" */}
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
            {/* name="Search bar" id="224:19429" type="INSTANCE" */}
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
                showIconRight: true,
                suffix: "SUF",
                title: "Sales",
                prefix: "PRE",
                iconRight: <Icon.QodeXmarkLarge />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "filled",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="224:19430" type="INSTANCE" */}
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
          {/* name="Job list" id="224:19431" type="FRAME" */}
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
            {/* name="Jobs" id="224:19432" type="FRAME" */}
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
              {/* name="Job item" id="224:19441" type="INSTANCE" */}
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
              {/* name="Job item" id="224:19434" type="INSTANCE" */}
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
              {/* name="Job item" id="224:19437" type="INSTANCE" */}
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
              {/* name="Job item" id="224:19433" type="INSTANCE" */}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Qode22419424Page
