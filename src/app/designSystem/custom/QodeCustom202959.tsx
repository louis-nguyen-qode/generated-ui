// id="20:2959"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom202959Props {
  iconr?: boolean
  title?: string
  state?: "default" | "hover" | "active" | "filled" | "disabled"
  size?: "default" | "large" | "small"
  type?: "basic" | "multiple" | "search"
  status?: "default" | "warning" | "error"
}

export const QodeCustom202959: React.FC<
  QodeCustom202959Props & { style?: CSSProperties }
> = ({
  iconr = true,
  title = "Select",
  state = "default",
  size = "default",
  type = "basic",
  status = "default",
  ...rest
}) => {
  return (
    <>
      {/* name=".select_input" id="20:2959" type="COMPONENT_SET" */}
      {/* id="20:2960" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=basic, status=default" id="20:2960" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3096" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2961" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=basic, status=default" id="20:2961" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3098" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2962" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=basic, status=default" id="20:2962" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3100" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2963" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=default" id="20:2963" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3102" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2964" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=default" id="20:2964" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3104" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2965" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=default" id="20:2965" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3106" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2966" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=basic, status=default" id="20:2966" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3108" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3109" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3109 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2967" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=basic, status=default" id="20:2967" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3111" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3112" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3112 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2968" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=basic, status=default" id="20:2968" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3114" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3115" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3115 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2969" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=default" id="20:2969" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3117" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2970" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=default" id="20:2970" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3119" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2971" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=default" id="20:2971" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3121" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2972" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=default" id="20:2972" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3123" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2973" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=default" id="20:2973" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3125" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2974" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=default" id="20:2974" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3127" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2975" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=default" id="20:2975" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3129" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2976" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=default" id="20:2976" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3131" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2977" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=default" id="20:2977" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3133" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2978" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=default" id="20:2978" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3135" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2979" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=default" id="20:2979" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3137" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2980" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=default" id="20:2980" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3139" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2981" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=default" id="20:2981" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3140" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3142" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3143" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3143 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2982" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=default" id="20:2982" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3144" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3146" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3147" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3147 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2983" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=default" id="20:2983" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3148" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3150" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3151" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3151 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2984" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=default" id="20:2984" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3152" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3153" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3154" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3155" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3156" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2985" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=default" id="20:2985" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3157" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3158" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3159" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3160" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3161" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2986" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=default" id="20:2986" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "0px var(--size-padding-paddingxs, 8px) 0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3162" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3163" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3164" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3165" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3166" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2987" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=default" id="20:2987" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3168" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2988" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=default" id="20:2988" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3170" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2989" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=default" id="20:2989" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3172" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2990" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=search, status=default" id="20:2990" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3174" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2991" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=search, status=default" id="20:2991" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3176" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2992" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=search, status=default" id="20:2992" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3178" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2993" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=search, status=default" id="20:2993" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3180" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2994" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=search, status=default" id="20:2994" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3182" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2995" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=search, status=default" id="20:2995" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3184" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:2996" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=search, status=default" id="20:2996" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3186" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3187" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3187 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2997" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=search, status=default" id="20:2997" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3189" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3190" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3190 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2998" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=search, status=default" id="20:2998" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #2d64bc)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3192" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3193" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-primary-colorprimaryborder, #abc1e4)",
                }}
              >
                {/* name="Focus ring" id=20:3193 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:2999" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=search, status=default" id="20:2999" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3195" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3000" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=search, status=default" id="20:3000" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3197" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3001" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=search, status=default" id="20:3001" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3199" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3002" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=default" id="20:3002" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3201" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3003" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=default" id="20:3003" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3203" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3004" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=default" id="20:3004" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3205" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3005" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=basic, status=warning" id="20:3005" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3207" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3006" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=basic, status=warning" id="20:3006" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3209" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3007" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=basic, status=warning" id="20:3007" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3211" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3008" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=warning" id="20:3008" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3213" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3009" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=warning" id="20:3009" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3215" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3010" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=warning" id="20:3010" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3217" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3011" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=basic, status=warning" id="20:3011" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3219" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3220" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3220 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3012" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=basic, status=warning" id="20:3012" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3222" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3223" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3223 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3013" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=basic, status=warning" id="20:3013" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3225" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3226" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3226 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3014" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=warning" id="20:3014" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3228" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3015" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=warning" id="20:3015" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3230" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3016" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=warning" id="20:3016" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3232" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3017" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=warning" id="20:3017" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3234" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3018" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=warning" id="20:3018" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3236" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3019" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=warning" id="20:3019" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3238" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3020" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=warning" id="20:3020" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3240" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3021" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=warning" id="20:3021" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3242" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3022" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=warning" id="20:3022" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3244" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3023" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=warning" id="20:3023" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3246" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3024" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=warning" id="20:3024" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3248" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3025" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=warning" id="20:3025" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3250" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3026" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=warning" id="20:3026" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3251" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3253" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3254" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3254 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3027" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=warning" id="20:3027" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3255" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3257" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3258" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3258 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3028" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=warning" id="20:3028" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3259" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3261" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3262" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3262 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3029" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=warning" id="20:3029" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3263" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3264" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3265" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3266" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3267" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3030" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=warning" id="20:3030" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3268" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3269" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3270" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3271" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3272" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3031" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=warning" id="20:3031" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "0px var(--size-padding-paddingxs, 8px) 0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3273" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3274" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3275" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3276" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3277" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3032" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=warning" id="20:3032" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3279" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3033" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=warning" id="20:3033" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3281" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3034" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=warning" id="20:3034" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3283" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3035" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=search, status=warning" id="20:3035" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3285" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3036" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=search, status=warning" id="20:3036" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3287" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3037" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=search, status=warning" id="20:3037" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3289" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3038" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=search, status=warning" id="20:3038" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3291" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3039" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=search, status=warning" id="20:3039" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3293" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3040" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=search, status=warning" id="20:3040" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3295" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3041" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=search, status=warning" id="20:3041" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3297" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3298" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3298 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3042" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=search, status=warning" id="20:3042" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3300" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3301" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3301 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3043" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=search, status=warning" id="20:3043" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3303" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3304" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-warning-colorwarningborder, #fdd9b3)",
                }}
              >
                {/* name="Focus ring" id=20:3304 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3044" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=search, status=warning" id="20:3044" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3306" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3045" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=search, status=warning" id="20:3045" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3308" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3046" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=search, status=warning" id="20:3046" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-warning-colorwarning, #fa9f42)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3310" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3047" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=warning" id="20:3047" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3312" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3048" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=warning" id="20:3048" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3314" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3049" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=warning" id="20:3049" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3316" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3050" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=basic, status=error" id="20:3050" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3318" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3051" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=basic, status=error" id="20:3051" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3320" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3052" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=basic, status=error" id="20:3052" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3322" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3053" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=error" id="20:3053" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3324" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3054" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=error" id="20:3054" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3326" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3055" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=error" id="20:3055" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3328" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3056" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=basic, status=error" id="20:3056" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3330" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3331" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3331 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3057" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=basic, status=error" id="20:3057" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3333" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3334" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3334 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3058" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=basic, status=error" id="20:3058" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3336" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3337" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3337 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3059" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=error" id="20:3059" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3339" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3060" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=error" id="20:3060" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3341" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3061" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=error" id="20:3061" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3343" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3062" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=error" id="20:3062" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3345" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3063" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=error" id="20:3063" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3347" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3064" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=error" id="20:3064" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3349" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3065" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=error" id="20:3065" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3351" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3066" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=error" id="20:3066" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3353" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3067" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=error" id="20:3067" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3355" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3068" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=error" id="20:3068" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3357" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3069" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=error" id="20:3069" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3359" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3070" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=error" id="20:3070" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3361" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3071" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=error" id="20:3071" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3362" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3364" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3365" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3365 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3072" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=error" id="20:3072" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3366" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "24px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3368" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3369" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3369 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3073" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=error" id="20:3073" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="tag" id="20:3370" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-margin-marginxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimarybg, #eaeff8)",
                }}
                {...{
                  title: "Tag",
                  icon: <Icon.QodeIcons />,
                  rIcon: true,
                  color: "🔸 primary",
                  state: "default",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3372" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3373" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3373 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3074" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=error" id="20:3074" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3374" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3375" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3376" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3377" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3378" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3075" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=error" id="20:3075" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3379" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3380" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3381" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3382" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3383" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3076" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=error" id="20:3076" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "0px var(--size-padding-paddingxs, 8px) 0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="20:3384" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "4px var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  flexWrap: "wrap",
                }}
              >
                {/* name="tag" id="20:3385" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3386" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
                {/* name="tag" id="20:3387" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimarybg, #eaeff8)",
                  }}
                  {...{
                    title: true,
                    rIcon: <Icon.QodeXmark />,
                    icon: <Icon.QodeIcons />,
                    color: "🔸 primary",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Icon" id="20:3388" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3077" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=error" id="20:3077" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3390" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3078" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=error" id="20:3078" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3392" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3079" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=error" id="20:3079" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3394" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3080" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=search, status=error" id="20:3080" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3396" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3081" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=search, status=error" id="20:3081" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3398" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3082" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=search, status=error" id="20:3082" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3400" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3083" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=search, status=error" id="20:3083" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3402" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3084" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=search, status=error" id="20:3084" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3404" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3085" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=search, status=error" id="20:3085" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3406" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3086" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=search, status=error" id="20:3086" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3408" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3409" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3409 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3087" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=search, status=error" id="20:3087" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3411" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3412" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3412 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3088" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=search, status=error" id="20:3088" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3414" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="20:3415" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  border:
                    "2px solid var(--color-error-colorerrorborder, #ffc1b3)",
                }}
              >
                {/* name="Focus ring" id=20:3415 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="20:3089" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=search, status=error" id="20:3089" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3417" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3090" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=search, status=error" id="20:3090" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3419" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3091" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=search, status=error" id="20:3091" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #ff6542)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3421" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3092" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=error" id="20:3092" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3423" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3093" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=error" id="20:3093" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3425" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="20:3094" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=error" id="20:3094" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
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
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="20:3427" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
