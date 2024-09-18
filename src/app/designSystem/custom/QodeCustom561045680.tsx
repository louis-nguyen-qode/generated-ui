// id="5610:45680"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom5859106 } from "@designSystem/custom/QodeCustom5859106"
import { QodeCustom595997 } from "@designSystem/custom/QodeCustom595997"
import QodeSvg561044931 from "@designSystem/icon/svg/QodeSvg561044931"

export interface QodeCustom561045680Props {
  filter?: boolean
  sort?: boolean
  type?: "checkbox" | "blank" | "default"
  align?: "--" | "left" | "middle"
}

export const QodeCustom561045680: React.FC<
  QodeCustom561045680Props & { style?: CSSProperties }
> = ({
  filter = true,
  sort = true,
  type = "default",
  align = "left",
  ...rest
}) => {
  return (
    <>
      {/* name="Table/Header" id="5610:45680" type="COMPONENT_SET" */}
      {/* id="5610:45681" */}
      {`${type}` === `default` && `${align}` === `left` && (
        <>
          {/* name="type=default, align=left" id="5610:45681" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "46px",
              padding: "var(--font-size-base, 14px) 16px",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Column`}</span>
            {/* name="Table/Sort" id="5868:124" type="INSTANCE" */}
            <QodeCustom5859106
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              }}
              {...{ property_1: "descending" }}
            />
            {/* name="Table/filter" id="5959:99" type="INSTANCE" */}
            <QodeCustom595997
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                right: "16px",
                top: "15px",
              }}
              {...{ property_1: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="5610:45684" */}
      {`${type}` === `default` && `${align}` === `middle` && (
        <>
          {/* name="type=default, align=middle" id="5610:45684" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "46px",
              padding: "var(--font-size-base, 14px) 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Column`}</span>
            {/* name="Table/Sort" id="5868:134" type="INSTANCE" */}
            <QodeCustom5859106
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              }}
              {...{ property_1: "descending" }}
            />
            {/* name="Table/filter" id="5959:110" type="INSTANCE" */}
            <QodeCustom595997
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                right: "16px",
                top: "13px",
              }}
              {...{ property_1: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="5610:45691" */}
      {`${type}` === `checkbox` && `${align}` === `--` && (
        <>
          {/* name="type=checkbox, align=--" id="5610:45691" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "46px",
              padding: "var(--font-size-base, 14px) 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Icon/checkbox" id="5610:45692" type="INSTANCE" */}
            <QodeSvg561044931
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{ state: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="5610:45690" */}
      {`${type}` === `blank` && `${align}` === `--` && (
        <>
          {/* name="type=blank, align=--" id="5610:45690" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "228px",
              height: "46px",
              padding: "var(--font-size-base, 14px) 16px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="type=blank, align=--" id=5610:45690 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
    </>
  )
}
