// id="467:28749"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom5859107 } from "@designSystem/custom/QodeCustom5859107"
import { QodeCustom595998 } from "@designSystem/custom/QodeCustom595998"

export interface QodeCustom46728749Props {
  filter?: boolean
  sort?: boolean
  type?: "checkbox" | "blank" | "default"
  align?: "--" | "left" | "middle"
}

export const QodeCustom46728749: React.FC<
  QodeCustom46728749Props & { style?: CSSProperties }
> = ({
  filter = true,
  sort = true,
  type = "default",
  align = "left",
  ...rest
}) => {
  return (
    <>
      {/* name="Table/Header" id="467:28749" type="COMPONENT_SET" */}
      {/* id="467:28750" */}
      {`${type}` === `default` && `${align}` === `left` && (
        <>
          {/* name="type=default, align=left" id="467:28750" type="COMPONENT" */}
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
            {/* name="Table/Sort" id="467:28755" type="INSTANCE" */}
            <QodeCustom5859107
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
            {/* name="Table/filter" id="467:28756" type="INSTANCE" */}
            <QodeCustom595998
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
      {/* id="467:28751" */}
      {`${type}` === `default` && `${align}` === `middle` && (
        <>
          {/* name="type=default, align=middle" id="467:28751" type="COMPONENT" */}
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
            {/* name="Table/Sort" id="467:28758" type="INSTANCE" */}
            <QodeCustom5859107
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
            {/* name="Table/filter" id="467:28759" type="INSTANCE" */}
            <QodeCustom595998
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
      {/* id="467:28752" */}
      {`${type}` === `checkbox` && `${align}` === `--` && (
        <>
          {/* name="type=checkbox, align=--" id="467:28752" type="COMPONENT" */}
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
            {/* name="Icon/checkbox" id="467:28760" type="INSTANCE" */}
            <div
              style={{ width: "24px", height: "24px", flexShrink: "0" }}
              {...{ state: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="467:28753" */}
      {`${type}` === `blank` && `${align}` === `--` && (
        <>
          {/* name="type=blank, align=--" id="467:28753" type="COMPONENT" */}
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
            {/* name="type=blank, align=--" id=467:28753 type=COMPONENT */}
            <></>
          </div>
        </>
      )}
    </>
  )
}
