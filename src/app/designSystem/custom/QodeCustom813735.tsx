// id="81:3735"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg813774 from "@designSystem/icon/svg/QodeSvg813774"
import { QodeCustom783572 } from "@designSystem/custom/QodeCustom783572"
import { QodeCustom783871 } from "@designSystem/custom/QodeCustom783871"

export interface QodeCustom813735Props {}

export const QodeCustom813735: React.FC<
  QodeCustom813735Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=focussed, size=default" id="81:3735" type="COMPONENT" */}
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
            border: "1px solid var(--color-primary-colorprimary, #1597f4)",
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
              color: "var(--text-text-placeholder, #a7a7a7)",
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
        {/* name="Focus Ring" id="81:3773" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              width: "240px",
              height: "52px",
              position: "absolute",
              borderRadius: "8px",
              border:
                "1px solid var(--color-primary-colorprimaryborder, #b2dfff)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Resizer" id="81:3774" type="BOOLEAN_OPERATION" */}
        <QodeSvg813774
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
        {/* name="button" id="81:3777" type="FRAME" */}
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
          {/* name="Button" id="81:3778" type="INSTANCE" */}
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
          {/* name="vote" id="81:3779" type="FRAME" */}
          <div
            style={{ ...{ display: "flex", alignItems: "flex-start" }, ...{} }}
          >
            {/* name="Button" id="81:3780" type="INSTANCE" */}
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
            {/* name="Button" id="81:3781" type="INSTANCE" */}
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
