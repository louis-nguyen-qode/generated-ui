// id="677:33915"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom67733735 } from "@designSystem/custom/QodeCustom67733735"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom67733915Props {}

export const QodeCustom67733915: React.FC<
  QodeCustom67733915Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Canceled" id="677:33915" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "714px",
            height: "80px",
            padding: "12px 24px",
            alignItems: "flex-start",
            gap: "20px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Datetime" id="677:33816" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "150px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
              flexShrink: "0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-40, #464646)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Sat, Aug 31`}</span>
          {/* name="Time" id="745:36448" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                padding: "2px 10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`11:00 AM – 1:00 PM`}</span>
          </div>
        </div>
        {/* name="Interview/List item" id="677:34021" type="INSTANCE" */}
        <QodeCustom67733735
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{ property_1: "Variant3" }}
        />
        {/* name="r" id="677:33821" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              paddingRight: "24px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          {/* name="Description" id="677:33822" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                alignItems: "flex-end",
                gap: "var(--size-margin-marginxs, 8px)",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Description`}</span>
            {/* name="Button" id="677:33824" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "See More",
                selectIconLeft: <Icon.QodeIcons />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                type: "text",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
          {/* name="Frame 37424" id="677:33825" type="FRAME" */}
          <div
            style={{
              ...{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                alignSelf: "stretch",
              },
              ...{},
            }}
          >
            <span
              style={{
                ...{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-40, #464646)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Exploratory call - Nguyen Quoc Thai`}</span>
          </div>
          <span
            style={{
              ...{
                color: "var(--text-text-red, #dc3812)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`(Canceled)`}</span>
        </div>
      </div>
    </>
  )
}
