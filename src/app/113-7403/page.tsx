// id="113:7403"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom207249109 } from "@designSystem/custom/QodeCustom207249109"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom228149014 } from "@designSystem/custom/QodeCustom228149014"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"
import { QodePagination } from "@designSystem/ant/QodePagination"
import { QodeCustom1217892 } from "@designSystem/custom/QodeCustom1217892"
import { QodeCustom34019060 } from "@designSystem/custom/QodeCustom34019060"

export interface Qode1137403PageProps {
  style?: CSSProperties
}

export const Qode1137403Page: React.FC<Qode1137403PageProps> = ({
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Add" id="113:7403" type="FRAME" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1280px",
            height: "800px",
            alignItems: "flex-start",
            background: "#FFF",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="113:7404" type="INSTANCE" */}
        <QodeCustom207249109
          style={{
            ...{
              display: "flex",
              width: "84px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderRight: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{ property_1: "Variant2" }}
        />
        {/* name="Body" id="1377:50823" type="FRAME" */}
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
          {/* name="Header" id="1377:50824" type="FRAME" */}
          <div
            style={{
              ...{ height: "40px", maxWidth: "1276px", alignSelf: "stretch" },
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
            {/* name="Search bar" id="1377:50826" type="INSTANCE" */}
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
            {/* name="Button" id="1377:50827" type="INSTANCE" */}
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
          {/* name="Job list" id="1377:50828" type="FRAME" */}
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
            {/* name="Jobs" id="1377:50829" type="FRAME" */}
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
              {/* name="Job item" id="1377:50830" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50831" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50832" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50833" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50834" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50835" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50836" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50837" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50838" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50839" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50840" type="INSTANCE" */}
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
              {/* name="Job item" id="1377:50841" type="INSTANCE" */}
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
            {/* name="Pagination" id="1377:50842" type="INSTANCE" */}
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
        {/* name="Overlay BG" id="352:18708" type="INSTANCE" */}
        <QodeCustom1217892
          style={{
            ...{
              display: "flex",
              width: "1280px",
              height: "800px",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Modal/Add job" id="118:6250" type="INSTANCE" */}
        <QodeCustom34019060
          style={{
            ...{
              display: "flex",
              width: "540px",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              right: "40px",
              top: "94px",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            ...{},
          }}
          {...{ step: "1" }}
        />
      </div>
    </>
  )
}

export default Qode1137403Page
