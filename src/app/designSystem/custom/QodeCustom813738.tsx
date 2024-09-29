// id="81:3738"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg813803 from "@designSystem/icon/svg/QodeSvg813803"
import { QodeCustom783572 } from "@designSystem/custom/QodeCustom783572"
import { QodeCustom783871 } from "@designSystem/custom/QodeCustom783871"

export interface QodeCustom813738Props {}

export const QodeCustom813738: React.FC<
  QodeCustom813738Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=filled, size=default" id="81:3738" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "52px",
            padding:
              "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              alignSelf: "stretch",
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
        >{`Text Area`}</span>
        {/* name="Resizer" id="81:3803" type="BOOLEAN_OPERATION" */}
        <QodeSvg813803
          style={{
            ...{
              width: "8.354px",
              height: "8.354px",
              position: "absolute",
              left: "229px",
              top: "41px",
              fill: "var(--color-neutral-text-colortext, #000)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="button" id="81:3806" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "206px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "absolute",
              left: "8px",
              bottom: "4px",
            },
            ...{},
          }}
        >
          {/* name="Button" id="81:3807" type="INSTANCE" */}
          <QodeCustom783572
            style={{
              ...{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px) 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
              },
              ...{},
            }}
            {...{
              buttonname: "Rewrite",
              iconLeft: true,
              type: "link",
              size: "small",
              state: "default",
              content: "default",
              danger: false,
              ghost: false,
            }}
          />
          {/* name="vote" id="81:3808" type="FRAME" */}
          <div
            style={{ ...{ display: "flex", alignItems: "flex-start" }, ...{} }}
          >
            {/* name="Button" id="81:3809" type="INSTANCE" */}
            <QodeCustom783871
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                buttonname: "Rewrite",
                type: "text",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="81:3810" type="INSTANCE" */}
            <QodeCustom783871
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                buttonname: "Rewrite",
                type: "text",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
