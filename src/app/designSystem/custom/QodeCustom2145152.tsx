// id="214:5152"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom3511358 } from "@designSystem/custom/QodeCustom3511358"

export interface QodeCustom2145152Props {
  endPlaceholder?: string
  startTime?: string
  startPlaceholder?: string
  endTime?: string
  time?: string
  placeholder?: string
  state?: "default" | "hover" | "focused" | "selected" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
  range?: "false" | "true"
}

export const QodeCustom2145152: React.FC<
  QodeCustom2145152Props & { style?: CSSProperties }
> = ({
  endPlaceholder = "End time",
  startTime = "14:09",
  startPlaceholder = "Start time",
  endTime = "15:09",
  time = "14:09",
  placeholder = "Select time",
  state = "default",
  status = "default",
  size = "default",
  range = "false",
  ...rest
}) => {
  return (
    <>
      {/* name=".timePicker__inputBasic" id="214:5152" type="COMPONENT_SET" */}
      {/* id="214:5153" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=default, size=default, range=false" id="214:5153" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5155" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5156" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=default, size=default, range=false" id="214:5156" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5158" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5159" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=default, size=default, range=false" id="214:5159" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5161" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5162" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5162 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5163" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=default, size=default, range=false" id="214:5163" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5165" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5166" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5166 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5167" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=default, size=default, range=false" id="214:5167" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5169" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5170" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=default, size=default, range=false" id="214:5170" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5172" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5173" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=error, size=default, range=false" id="214:5173" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5175" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5176" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=error, size=default, range=false" id="214:5176" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5178" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5179" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=error, size=default, range=false" id="214:5179" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5181" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5182" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5182 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5183" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=error, size=default, range=false" id="214:5183" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5185" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5186" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5186 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5187" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=error, size=default, range=false" id="214:5187" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5189" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5190" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=error, size=default, range=false" id="214:5190" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5192" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5193" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=warning, size=default, range=false" id="214:5193" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5195" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5196" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=warning, size=default, range=false" id="214:5196" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5198" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5199" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=warning, size=default, range=false" id="214:5199" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5201" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5202" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5202 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5203" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=warning, size=default, range=false" id="214:5203" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5205" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5206" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5206 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5207" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=warning, size=default, range=false" id="214:5207" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5209" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5210" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=warning, size=default, range=false" id="214:5210" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5212" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5213" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=default, size=large, range=false" id="214:5213" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5215" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5216" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=default, size=large, range=false" id="214:5216" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5218" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5219" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=default, size=large, range=false" id="214:5219" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5221" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5222" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5222 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5223" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=default, size=large, range=false" id="214:5223" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5225" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5226" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5226 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5227" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=default, size=large, range=false" id="214:5227" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5229" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5230" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=default, size=large, range=false" id="214:5230" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5232" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5233" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=error, size=large, range=false" id="214:5233" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5235" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5236" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=error, size=large, range=false" id="214:5236" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5238" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5239" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=error, size=large, range=false" id="214:5239" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5241" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5242" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5242 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5243" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=error, size=large, range=false" id="214:5243" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5245" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5246" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5246 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5247" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=error, size=large, range=false" id="214:5247" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5249" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5250" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=error, size=large, range=false" id="214:5250" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5252" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5253" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=warning, size=large, range=false" id="214:5253" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5255" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5256" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=warning, size=large, range=false" id="214:5256" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5258" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5259" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=warning, size=large, range=false" id="214:5259" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5261" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5262" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5262 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5263" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=warning, size=large, range=false" id="214:5263" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5265" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5266" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5266 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5267" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=warning, size=large, range=false" id="214:5267" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5269" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5270" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=warning, size=large, range=false" id="214:5270" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5272" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5273" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=default, size=small, range=false" id="214:5273" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5275" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5276" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=default, size=small, range=false" id="214:5276" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5278" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5279" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=default, size=small, range=false" id="214:5279" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5281" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5282" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5282 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5283" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=default, size=small, range=false" id="214:5283" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5285" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5286" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5286 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5287" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=default, size=small, range=false" id="214:5287" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5289" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5290" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=default, size=small, range=false" id="214:5290" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5292" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5293" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=error, size=small, range=false" id="214:5293" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5295" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5296" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=error, size=small, range=false" id="214:5296" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5298" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5299" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=error, size=small, range=false" id="214:5299" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5301" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5302" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5302 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5303" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=error, size=small, range=false" id="214:5303" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5305" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5306" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5306 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5307" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=error, size=small, range=false" id="214:5307" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5309" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5310" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=error, size=small, range=false" id="214:5310" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5312" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5313" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=default, status=warning, size=small, range=false" id="214:5313" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5315" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5316" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=hover, status=warning, size=small, range=false" id="214:5316" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5318" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5319" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=focused, status=warning, size=small, range=false" id="214:5319" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5321" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5322" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5322 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5323" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=selected, status=warning, size=small, range=false" id="214:5323" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5325" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5326" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5326 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5327" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=filled, status=warning, size=small, range=false" id="214:5327" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Right" id="214:5329" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5330" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `false` && (
          <>
            {/* name="state=disabled, status=warning, size=small, range=false" id="214:5330" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "240px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Select time`}</span>
              {/* name="Icon Right" id="214:5332" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5333" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=default, size=default, range=true" id="214:5333" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5335" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5337" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5338" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=default, size=default, range=true" id="214:5338" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5340" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5342" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5343" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=default, size=default, range=true" id="214:5343" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5345" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5347" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5348" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5348 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5349" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=default, size=default, range=true" id="214:5349" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5350" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-primary-colorprimary, #1597f4)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5352" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5354" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5355" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5355 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5356" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=default, size=default, range=true" id="214:5356" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5358" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5360" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5361" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=default, size=default, range=true" id="214:5361" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5363" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5365" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5366" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=error, size=default, range=true" id="214:5366" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5368" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5370" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5371" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=error, size=default, range=true" id="214:5371" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5373" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5375" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5376" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=error, size=default, range=true" id="214:5376" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5378" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5380" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5381" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5381 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5382" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=error, size=default, range=true" id="214:5382" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5383" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-error-colorerror, #dc3812)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5385" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5387" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5388" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5388 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5389" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=error, size=default, range=true" id="214:5389" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5391" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5393" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5394" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=error, size=default, range=true" id="214:5394" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5396" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5398" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5399" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=warning, size=default, range=true" id="214:5399" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5401" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5403" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5404" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=warning, size=default, range=true" id="214:5404" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5406" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5408" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5409" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=warning, size=default, range=true" id="214:5409" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5411" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5413" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5414" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5414 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5415" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=warning, size=default, range=true" id="214:5415" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5416" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-warning-colorwarning, #f5a60c)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5418" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5420" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5421" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5421 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5422" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=warning, size=default, range=true" id="214:5422" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5424" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5426" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5427" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `default` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=warning, size=default, range=true" id="214:5427" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5429" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5431" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5432" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=default, size=large, range=true" id="214:5432" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5434" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5436" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5437" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=default, size=large, range=true" id="214:5437" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5439" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5441" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5442" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=default, size=large, range=true" id="214:5442" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5444" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5446" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5447" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5447 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5448" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=default, size=large, range=true" id="214:5448" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5449" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5451" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5453" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5454" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5454 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5455" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=default, size=large, range=true" id="214:5455" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5457" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5459" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5460" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=default, size=large, range=true" id="214:5460" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5462" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5464" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5465" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=error, size=large, range=true" id="214:5465" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5467" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5469" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5470" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=error, size=large, range=true" id="214:5470" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5472" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5474" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5475" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=error, size=large, range=true" id="214:5475" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5477" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5479" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5480" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5480 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5481" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=error, size=large, range=true" id="214:5481" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5482" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-error-colorerror, #dc3812)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5484" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5486" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5487" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5487 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5488" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=error, size=large, range=true" id="214:5488" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5490" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5492" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5493" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=error, size=large, range=true" id="214:5493" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5495" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5497" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5498" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=warning, size=large, range=true" id="214:5498" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5500" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5502" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5503" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=warning, size=large, range=true" id="214:5503" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5505" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5507" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5508" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=warning, size=large, range=true" id="214:5508" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5510" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5512" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5513" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5513 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5514" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=warning, size=large, range=true" id="214:5514" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5515" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-warning-colorwarning, #f5a60c)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5517" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5519" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5520" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5520 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5521" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=warning, size=large, range=true" id="214:5521" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5523" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5525" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5526" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `large` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=warning, size=large, range=true" id="214:5526" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5528" type="INSTANCE" */}
              <QodeCustom3511358
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5530" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5531" */}
      {`${state}` === `default` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=default, size=small, range=true" id="214:5531" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5533" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5535" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5536" */}
      {`${state}` === `hover` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=default, size=small, range=true" id="214:5536" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5538" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5540" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5541" */}
      {`${state}` === `focused` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=default, size=small, range=true" id="214:5541" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5543" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5545" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5546" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5546 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5547" */}
      {`${state}` === `selected` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=default, size=small, range=true" id="214:5547" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5548" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-primary-colorprimary, #1597f4)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5550" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5552" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5553" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=214:5553 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5554" */}
      {`${state}` === `filled` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=default, size=small, range=true" id="214:5554" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5556" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5558" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5559" */}
      {`${state}` === `disabled` &&
        `${status}` === `default` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=default, size=small, range=true" id="214:5559" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5561" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5563" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5564" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=error, size=small, range=true" id="214:5564" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5566" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5568" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5569" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=error, size=small, range=true" id="214:5569" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5571" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5573" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5574" */}
      {`${state}` === `focused` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=error, size=small, range=true" id="214:5574" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5576" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5578" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5579" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5579 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5580" */}
      {`${state}` === `selected` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=error, size=small, range=true" id="214:5580" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5581" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-error-colorerror, #dc3812)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5583" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5585" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5586" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
                }}
              >
                {/* name="Focus Ring" id=214:5586 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5587" */}
      {`${state}` === `filled` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=error, size=small, range=true" id="214:5587" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5589" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5591" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5592" */}
      {`${state}` === `disabled` &&
        `${status}` === `error` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=error, size=small, range=true" id="214:5592" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5594" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5596" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5597" */}
      {`${state}` === `default` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=default, status=warning, size=small, range=true" id="214:5597" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5599" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5601" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5602" */}
      {`${state}` === `hover` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=hover, status=warning, size=small, range=true" id="214:5602" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5604" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5606" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5607" */}
      {`${state}` === `focused` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=focused, status=warning, size=small, range=true" id="214:5607" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5609" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5611" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5612" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5612 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5613" */}
      {`${state}` === `selected` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=selected, status=warning, size=small, range=true" id="214:5613" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Text Wrapper" id="214:5614" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderBottom:
                    "2px solid var(--color-warning-colorwarning, #f5a60c)",
                }}
              >
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
                >{`14:09`}</span>
              </div>
              {/* name="Icon Swap" id="214:5616" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5618" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus Ring" id="214:5619" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarningborder, #f5d69a)",
                }}
              >
                {/* name="Focus Ring" id=214:5619 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="214:5620" */}
      {`${state}` === `filled` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=filled, status=warning, size=small, range=true" id="214:5620" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #f5a60c)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
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
              >{`14:09`}</span>
              {/* name="Icon Swap" id="214:5622" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`15:09`}</span>
              {/* name="Icon Right" id="214:5624" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="214:5625" */}
      {`${state}` === `disabled` &&
        `${status}` === `warning` &&
        `${size}` === `small` &&
        `${range}` === `true` && (
          <>
            {/* name="state=disabled, status=warning, size=small, range=true" id="214:5625" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              }}
            >
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
              >{`Start time`}</span>
              {/* name="Icon Swap" id="214:5627" type="INSTANCE" */}
              <QodeCustom3511358
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
              >{`End time`}</span>
              {/* name="Icon Right" id="214:5629" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
