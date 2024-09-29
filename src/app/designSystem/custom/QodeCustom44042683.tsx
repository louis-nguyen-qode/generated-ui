// id="440:42683"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom207249110 } from "@designSystem/custom/QodeCustom207249110"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"
import { QodeDropdown } from "@designSystem/ant/QodeDropdown"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeCustom105244160 } from "@designSystem/custom/QodeCustom105244160"
import { QodePagination } from "@designSystem/ant/QodePagination"

export interface QodeCustom44042683Props {}

export const QodeCustom44042683: React.FC<
  QodeCustom44042683Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Tab | Interview" id="440:42683" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "1280px",
            height: "800px",
            alignItems: "center",
            background: "#FFF",
          },
          ...style,
        }}
      >
        {/* name="Navbar" id="328:28737" type="INSTANCE" */}
        <QodeCustom207249110
          style={{
            ...{
              display: "flex",
              width: "84px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              alignSelf: "stretch",
              borderRight: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{ property_1: "Variant2" }}
        />
        {/* name="b" id="328:28738" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "40px 40px 20px 40px",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              flex: "1 0 0",
              alignSelf: "stretch",
              background: "var(--app-bg, #f4f4f6)",
            },
            ...{},
          }}
        >
          {/* name="Header" id="328:28739" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                maxWidth: "1276px",
                justifyContent: "space-between",
                alignItems: "center",
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
            >{`Interviews`}</span>
            {/* name="Button" id="905:40978" type="INSTANCE" */}
            <QodeCustom228149015
              style={{
                ...{
                  display: "flex",
                  width: "150px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                iconLeft: true,
                buttonname: "New interview",
                type: "primary",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
          {/* name="Body" id="426:21420" type="FRAME" */}
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
            {/* name="Wrap" id="905:53370" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Search" id="905:48163" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "8px" },
                  ...{},
                }}
              >
                {/* name="Dropdown" id="905:48165" type="INSTANCE" */}
                <QodeDropdown
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "16px",
                    },
                    ...{},
                  }}
                  {...{ type: "button basic", active: false }}
                />
                {/* name="Search bar" id="905:55299" type="INSTANCE" */}
                <QodeInput
                  style={{
                    ...{
                      display: "flex",
                      width: "372px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "10px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
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
                    size: "default",
                  }}
                />
              </div>
              {/* name="Table/Interview" id="1052:45090" type="INSTANCE" */}
              <QodeCustom105244160
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderRadius: "12px",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  },
                  ...{},
                }}
                {...{ state: "Default" }}
              />
            </div>
            {/* name="Pagination" id="426:21516" type="INSTANCE" */}
            <QodePagination
              style={{
                ...{
                  display: "flex",
                  width: "499px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...{},
              }}
              {...{ total: "Total 85 items", type: "total", mini: false }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
