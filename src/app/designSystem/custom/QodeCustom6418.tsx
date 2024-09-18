// id="6:418"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg475444 from "@designSystem/icon/svg/QodeSvg475444"
import QodeSvg48531742 from "@designSystem/icon/svg/QodeSvg48531742"
import QodeSvg40529319 from "@designSystem/icon/svg/QodeSvg40529319"

export interface QodeCustom6418Props {
  text?: string
  icon?: React.ReactNode
  state?: "Default" | "Hovered" | "Empty"
  style?: "Text"
}

export const QodeCustom6418: React.FC<
  QodeCustom6418Props & { style?: CSSProperties }
> = ({
  text = "12 shortlisted",
  icon = undefined,
  state = "Default",
  style = "Text",
  ...rest
}) => {
  return (
    <>
      {/* name="Job/Quick access" id="6:418" type="COMPONENT_SET" */}
      {/* id="47:5443" */}
      {`${state}` === `Default` && `${style}` === `Text` && (
        <>
          {/* name="State=Default, Style=Text" id="47:5443" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              borderRadius: "99px",
            }}
          >
            {/* name="heart" id="47:5444" type="INSTANCE" */}
            <QodeSvg475444 style={{ width: "16px", height: "16px" }} {...{}} />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                textDecorationLine: "underline",
              }}
            >{`12 shortlisted`}</span>
          </div>
        </>
      )}
      {/* id="485:31741" */}
      {`${state}` === `Empty` && `${style}` === `Text` && (
        <>
          {/* name="State=Empty, Style=Text" id="485:31741" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              borderRadius: "99px",
              opacity: "0.4",
            }}
          >
            {/* name="heart" id="485:31742" type="INSTANCE" */}
            <QodeSvg48531742
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`12 shortlisted`}</span>
          </div>
        </>
      )}
      {/* id="47:5451" */}
      {`${state}` === `Hovered` && `${style}` === `Text` && (
        <>
          {/* name="State=Hovered, Style=Text" id="47:5451" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              borderRadius: "99px",
            }}
          >
            {/* name="heart" id="405:29319" type="INSTANCE" */}
            <QodeSvg40529319
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-primary-30, #158de2)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                textDecorationLine: "underline",
              }}
            >{`12 shortlisted`}</span>
          </div>
        </>
      )}
    </>
  )
}