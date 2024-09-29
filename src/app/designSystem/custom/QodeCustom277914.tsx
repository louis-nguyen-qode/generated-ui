// id="27:7914"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg166024 from "@designSystem/icon/svg/QodeSvg166024"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom277914Props {}

export const QodeCustom277914: React.FC<
  QodeCustom277914Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=wait, size=dot" id="27:7914" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "272px",
            alignItems: "flex-start",
            gap: "var(--size-padding-padding, 16px)",
          },
          ...style,
        }}
      >
        {/* name="Icon Wrapper" id="27:8142" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "8px",
              padding: "7px 0px 9px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              flexShrink: "0",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name=".steps__item_progress" id="27:8143" type="INSTANCE" */}
          <QodeSteps
            style={{
              ...{
                display: "flex",
                width: "8px",
                height: "8px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "999px",
                background:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              },
              ...{},
            }}
            {...{ step: "2", status: "wait", size: "dot" }}
          />
          {/* name=".steps__item_tail" id="27:8144" type="INSTANCE" */}
          <QodeSvg166024
            style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
            {...{ direction: "vertical", _style: "default", state: "waiting" }}
          />
        </div>
        {/* name="Text Wrapper" id="27:8145" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              paddingBottom: "var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginxxs, 4px)",
              flex: "1 0 0",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                width: "248px",
                height: "24px",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
              },
              ...{},
            }}
          >{`Lorem Ipsum`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Location`}</span>
          <span
            style={{
              ...{
                alignSelf: "stretch",
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--line-height-lineheight, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Time`}</span>
          {/* name="Description" id="27:8149" type="FRAME" */}
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
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Description`}</span>
            {/* name="Button" id="27:8151" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                },
                ...{},
              }}
              {...{
                title: "See More",
                type: "text",
                size: "small",
                state: "default",
                content: "default",
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
