// id="167:2908"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1672911 from "@designSystem/icon/svg/QodeSvg1672911"
import QodeSvg1672986 from "@designSystem/icon/svg/QodeSvg1672986"
import QodeSvg1672923 from "@designSystem/icon/svg/QodeSvg1672923"
import QodeSvg1672988 from "@designSystem/icon/svg/QodeSvg1672988"
import QodeSvg1672927 from "@designSystem/icon/svg/QodeSvg1672927"
import QodeSvg1672990 from "@designSystem/icon/svg/QodeSvg1672990"
import QodeSvg1673058 from "@designSystem/icon/svg/QodeSvg1673058"
import QodeSvg1673060 from "@designSystem/icon/svg/QodeSvg1673060"
import QodeSvg1673062 from "@designSystem/icon/svg/QodeSvg1673062"
import QodeSvg1673064 from "@designSystem/icon/svg/QodeSvg1673064"
import QodeSvg1672935 from "@designSystem/icon/svg/QodeSvg1672935"
import QodeSvg1672992 from "@designSystem/icon/svg/QodeSvg1672992"

export interface QodeCustom1672908Props {
  showTitle?: boolean
  action?: React.ReactNode
  showIcon?: boolean
  showAction?: boolean
  title?: string
  icon?: React.ReactNode
  state?:
    | "default"
    | "hover"
    | "active"
    | "disabled"
    | "child active"
    | "child active hover"
}

export const QodeCustom1672908: React.FC<
  QodeCustom1672908Props & { style?: CSSProperties }
> = ({
  showTitle = true,
  action = undefined,
  showIcon = true,
  showAction = true,
  title = "Navigation Item",
  icon = undefined,
  state = "default",
  ...rest
}) => {
  return (
    <>
      {/* name=".menu__item" id="167:2908" type="COMPONENT_SET" */}
      {/* id="167:2907" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="167:2907" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            }}
          >
            {/* name="🎰 icon" id="167:2911" type="INSTANCE" */}
            <QodeSvg1672911
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
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
            {/* name="🎰 action" id="167:2986" type="INSTANCE" */}
            <QodeSvg1672986
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:2922" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="167:2922" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name="🎰 icon" id="167:2923" type="INSTANCE" */}
            <QodeSvg1672923
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 action" id="167:2988" type="INSTANCE" */}
            <QodeSvg1672988
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:2926" */}
      {`${state}` === `active` && (
        <>
          {/* name="state=active" id="167:2926" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* name="🎰 icon" id="167:2927" type="INSTANCE" */}
            <QodeSvg1672927
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-neutral-text-colortext, #000)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 action" id="167:2990" type="INSTANCE" */}
            <QodeSvg1672990
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:3057" */}
      {`${state}` === `child active` && (
        <>
          {/* name="state=child active" id="167:3057" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            }}
          >
            {/* name="🎰 icon" id="167:3058" type="INSTANCE" */}
            <QodeSvg1673058
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-primary-colorprimarytext, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 action" id="167:3060" type="INSTANCE" */}
            <QodeSvg1673060
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:3061" */}
      {`${state}` === `child active hover` && (
        <>
          {/* name="state=child active hover" id="167:3061" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            {/* name="🎰 icon" id="167:3062" type="INSTANCE" */}
            <QodeSvg1673062
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
                color: "var(--color-primary-colorprimarytext, #1597f4)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Navigation Item`}</span>
            {/* name="🎰 action" id="167:3064" type="INSTANCE" */}
            <QodeSvg1673064
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="167:2934" */}
      {`${state}` === `disabled` && (
        <>
          {/* name="state=disabled" id="167:2934" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "var(--size-height-controlheightlg, 40px)",
              padding: "0px var(--size-padding-padding, 16px)",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiusxl, 16px)",
            }}
          >
            {/* name="🎰 icon" id="167:2935" type="INSTANCE" */}
            <QodeSvg1672935
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
            <span
              style={{
                flex: "1 0 0",
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
            {/* name="🎰 action" id="167:2992" type="INSTANCE" */}
            <QodeSvg1672992
              style={{ width: "12px", height: "12px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}