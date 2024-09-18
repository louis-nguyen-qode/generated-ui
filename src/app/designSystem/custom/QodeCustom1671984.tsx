// id="167:1984"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg167551 from "@designSystem/icon/svg/QodeSvg167551"
import QodeSvg267727957 from "@designSystem/icon/svg/QodeSvg267727957"
import QodeSvg267732415 from "@designSystem/icon/svg/QodeSvg267732415"
import QodeSvg267732417 from "@designSystem/icon/svg/QodeSvg267732417"
import QodeSvg1671994 from "@designSystem/icon/svg/QodeSvg1671994"
import QodeSvg267728385 from "@designSystem/icon/svg/QodeSvg267728385"
import QodeSvg267732403 from "@designSystem/icon/svg/QodeSvg267732403"
import QodeSvg267732405 from "@designSystem/icon/svg/QodeSvg267732405"
import QodeSvg1671998 from "@designSystem/icon/svg/QodeSvg1671998"
import QodeSvg267728386 from "@designSystem/icon/svg/QodeSvg267728386"
import QodeSvg1672002 from "@designSystem/icon/svg/QodeSvg1672002"
import QodeSvg267728387 from "@designSystem/icon/svg/QodeSvg267728387"
import QodeSvg267732427 from "@designSystem/icon/svg/QodeSvg267732427"
import QodeSvg267732429 from "@designSystem/icon/svg/QodeSvg267732429"
import QodeSvg1672012 from "@designSystem/icon/svg/QodeSvg1672012"
import QodeSvg267728388 from "@designSystem/icon/svg/QodeSvg267728388"

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
            <QodeSvg167551 style={{ width: "16px", height: "16px" }} {...{}} />
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
            <QodeSvg267727957
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
            <QodeSvg267732415
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
            <QodeSvg267732417
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
            <QodeSvg1671994 style={{ width: "16px", height: "16px" }} {...{}} />
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
            <QodeSvg267728385
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
            <QodeSvg267732403
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
            <QodeSvg267732405
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
            <QodeSvg1671998 style={{ width: "16px", height: "16px" }} {...{}} />
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
            <QodeSvg267728386
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
            <QodeSvg1672002 style={{ width: "16px", height: "16px" }} {...{}} />
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
            <QodeSvg267728387
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
            <QodeSvg267732427
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
            <QodeSvg267732429
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
            <QodeSvg1672012 style={{ width: "16px", height: "16px" }} {...{}} />
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
            <QodeSvg267728388
              style={{ width: "12px", height: "12px" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
