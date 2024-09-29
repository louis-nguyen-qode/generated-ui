// id="203:12574"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom207249109 } from "@designSystem/custom/QodeCustom207249109"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom228149014 } from "@designSystem/custom/QodeCustom228149014"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"
import { QodePagination } from "@designSystem/ant/QodePagination"

export interface Qode20312574PageProps {
  style?: CSSProperties
}

export const Qode20312574Page: React.FC<Qode20312574PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs" id="203:12574" type="FRAME" */}
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
        {/* name="Navbar" id="203:12575" type="INSTANCE" */}
        <QodeCustom207249109
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "1028px",
              flexDirection: "column",
              alignItems: "center",
              borderRight: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{ property_1: "Variant2" }}
        />
        {/* name="Body" id="203:12576" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "1196px",
              height: "1028px",
              padding: "40px 40px 0px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Header" id="203:12577" type="FRAME" */}
          <div
            style={{
              ...{
                height: "40px",
                maxWidth: "1276px",
                flexShrink: "0",
                alignSelf: "stretch",
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
            {/* name="Search bar" id="203:12579" type="INSTANCE" */}
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
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                suffix: "SUF",
                title: "Search",
                prefix: "PRE",
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="203:12580" type="INSTANCE" */}
            <QodeCustom228149014
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
                iconLeft: true,
                buttonname: "Add job",
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
          {/* name="Job list" id="203:12581" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                maxWidth: "1276px",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                flex: "1 0 0",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            {/* name="Jobs" id="203:12582" type="FRAME" */}
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
              {/* name="Job item" id="203:12583" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12584" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12585" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12586" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12587" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12588" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12589" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12590" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12591" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12592" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12593" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="203:12594" type="INSTANCE" */}
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
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ state: "default", _style: "Simple" }}
              />
            </div>
            {/* name="Pagination" id="203:12595" type="INSTANCE" */}
            <QodePagination
              style={{
                ...{
                  display: "flex",
                  width: "556px",
                  paddingBottom: "32px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...{},
              }}
              {...{ total: "Total 85 items", type: "more", mini: false }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Qode20312574Page
