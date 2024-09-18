// id="167:1984"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeCustom63014871 } from "@designSystem/custom/QodeCustom63014871"

export interface QodeCustom1671984Props {
  rIcon?: React.ReactNode
  title?: string
  showRIcon?: boolean
  lIcon?: React.ReactNode
  showLIcon?: boolean
  state?: "default" | "hover" | "active" | "disabled"
  theme?: "line" | "solid"
}

export const QodeCustom1671984: React.FC<
  QodeCustom1671984Props & { style?: CSSProperties }
> = ({
  rIcon = undefined,
  title = "Navigation Item",
  showRIcon = true,
  lIcon = undefined,
  showLIcon = true,
  state = "default",
  theme = "line",
  ...rest
}) => {
  return (
    <>
      {/* name=".menu__topnavigation__item" id="167:1984" type="COMPONENT_SET" */}
      {/* id="167:1983" */}
      {`${state}` === `default` && `${theme}` === `line` && (
        <>
          {/* name="state=default, theme=line" id="167:1983" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
            }}
          >
            {/* name="🎰 icon" id="167:551" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:27957" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2677:32414" */}
      {`${state}` === `default` && `${theme}` === `solid` && (
        <>
          {/* name="state=default, theme=solid" id="2677:32414" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            {/* name="🎰 icon" id="2677:32415" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:32417" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:1993" */}
      {`${state}` === `hover` && `${theme}` === `line` && (
        <>
          {/* name="state=hover, theme=line" id="167:1993" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderBottom:
                "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
            }}
          >
            {/* name="🎰 icon" id="167:1994" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:28385" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2677:32402" */}
      {`${state}` === `hover` && `${theme}` === `solid` && (
        <>
          {/* name="state=hover, theme=solid" id="2677:32402" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* name="🎰 icon" id="2677:32403" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:32405" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:1997" */}
      {`${state}` === `active` && `${theme}` === `line` && (
        <>
          {/* name="state=active, theme=line" id="167:1997" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderBottom:
                "var(--style-line-width-linewidthbold, 2px) solid var(--color-primary-colorprimary, #1597f4)",
            }}
          >
            {/* name="🎰 icon" id="167:1998" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-primary-colorprimarytext, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:28386" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:2001" */}
      {`${state}` === `disabled` && `${theme}` === `line` && (
        <>
          {/* name="state=disabled, theme=line" id="167:2001" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
            }}
          >
            {/* name="🎰 icon" id="167:2002" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:28387" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2677:32426" */}
      {`${state}` === `disabled` && `${theme}` === `solid` && (
        <>
          {/* name="state=disabled, theme=solid" id="2677:32426" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
            }}
          >
            {/* name="🎰 icon" id="2677:32427" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:32429" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:2011" */}
      {`${state}` === `active` && `${theme}` === `solid` && (
        <>
          {/* name="state=active, theme=solid" id="167:2011" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
              background: "var(--color-primary-colorprimary, #1597f4)",
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* name="🎰 icon" id="167:2012" type="INSTANCE" */}
            <QodeCustom63010804
              style={{ width: "16px", height: "16px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 icon" id="2677:28388" type="INSTANCE" */}
            <QodeCustom63014871
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
