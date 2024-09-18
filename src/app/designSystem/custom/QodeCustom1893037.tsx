// id="189:3037"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1893019 from "@designSystem/icon/svg/QodeSvg1893019"
import { QodeInputNumber } from "@designSystem/ant/QodeInputNumber"
import QodeSvg1893344 from "@designSystem/icon/svg/QodeSvg1893344"
import QodeSvg1893429 from "@designSystem/icon/svg/QodeSvg1893429"

export interface QodeCustom1893037Props {
  colorSpace?: "HEX" | "HSB" | "RGB"
}

export const QodeCustom1893037: React.FC<
  QodeCustom1893037Props & { style?: CSSProperties }
> = ({ colorSpace = "HEX", ...rest }) => {
  return (
    <>
      {/* name=".colorPicker__colorSelect" id="189:3037" type="COMPONENT_SET" */}
      {/* id="189:3023" */}
      {`${colorSpace}` === `HEX` && (
        <>
          {/* name="color space=HEX" id="189:3023" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "281px",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Select" id="189:3021" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`HEX`}</span>
              {/* name="Down" id="189:3019" type="INSTANCE" */}
              <QodeSvg1893019
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 input" id="189:2998" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "174px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
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
              >{`#`}</span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`1677FF`}</span>
            </Flex>
            {/* name="🧬 input number" id="189:3005" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "56px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "100%",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
          </div>
        </>
      )}
      {/* id="189:3341" */}
      {`${colorSpace}` === `HSB` && (
        <>
          {/* name="color space=HSB" id="189:3341" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "281px",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Select" id="189:3342" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`HSB`}</span>
              {/* name="Down" id="189:3344" type="INSTANCE" */}
              <QodeSvg1893344
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 input number" id="189:3346" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "215",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3372" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "91%",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3390" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "100%",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3408" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "100%",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
          </div>
        </>
      )}
      {/* id="189:3426" */}
      {`${colorSpace}` === `RGB` && (
        <>
          {/* name="color space=RGB" id="189:3426" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "281px",
              alignItems: "center",
              gap: "var(--size-padding-paddingxxs, 4px)",
            }}
          >
            {/* name="Select" id="189:3427" type="FRAME" */}
            <div
              style={{
                display: "flex",
                paddingRight: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`RGB`}</span>
              {/* name="Down" id="189:3429" type="INSTANCE" */}
              <QodeSvg1893429
                style={{ width: "12px", height: "12px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 input number" id="189:3430" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "22",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3431" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "119",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3432" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "255",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
            {/* name="🧬 input number" id="189:3433" type="INSTANCE" */}
            <QodeInputNumber
              style={{
                display: "flex",
                width: "55.25px",
                height: "var(--size-height-controlheightsm, 24px)",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
              {...{
                showPreTab: false,
                number: "100%",
                prefix: "PRE",
                showPostTab: false,
                showPrefix: false,
                showIconLeft: false,
                state: "filled",
                status: "default",
                size: "small",
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
