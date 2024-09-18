// id="170:24242"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom17024242Props {
  iconr?: boolean
  title?: string
  state?: "default" | "hover" | "active" | "filled" | "disabled"
  size?: "default" | "large" | "small"
  type?: "basic" | "multiple" | "search"
  status?: "default" | "warning" | "error"
}

export const QodeCustom17024242: React.FC<
  QodeCustom17024242Props & { style?: CSSProperties }
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
      {/* name="Input/Select" id="170:24242" type="COMPONENT_SET" */}
      {/* id="170:24241" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=basic, status=default" id="170:24241" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24186" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24247" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=basic, status=default" id="170:24247" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24249" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24251" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=basic, status=default" id="170:24251" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24253" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24255" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=default" id="170:24255" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24257" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24258" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=default" id="170:24258" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24260" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24261" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=default" id="170:24261" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24263" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24267" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=basic, status=default" id="170:24267" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24269" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24292" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24292 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24270" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=basic, status=default" id="170:24270" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24272" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24293" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24293 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24273" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=basic, status=default" id="170:24273" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24275" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24294" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24294 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24279" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=default" id="170:24279" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24281" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24282" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=default" id="170:24282" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24284" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24285" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=default" id="170:24285" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24287" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24295" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=default" id="170:24295" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24297" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24298" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=default" id="170:24298" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24300" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24301" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=default" id="170:24301" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24303" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24307" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=default" id="170:24307" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24309" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24310" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=default" id="170:24310" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24312" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24313" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=default" id="170:24313" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24315" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24316" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=default" id="170:24316" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24318" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24319" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=default" id="170:24319" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24321" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24322" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=default" id="170:24322" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24324" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24325" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=default" id="170:24325" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27861" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24327" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24328" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24328 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24329" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=default" id="170:24329" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27879" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 4px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24331" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24332" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24332 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24333" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=default" id="170:24333" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27897" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24335" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24336" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24336 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24337" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=default" id="170:24337" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24392" type="FRAME" */}
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
                {/* name="tag" id="170:24380" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24384" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24388" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24339" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24340" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=default" id="170:24340" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24393" type="FRAME" */}
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
                {/* name="tag" id="170:24394" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24395" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24396" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24342" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24343" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=default" id="170:24343" type="COMPONENT" */}
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
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24415" type="FRAME" */}
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
                {/* name="tag" id="170:24416" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24417" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24418" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24345" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24346" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=default" id="170:24346" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24348" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24349" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=default" id="170:24349" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24351" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24352" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=default" id="170:24352" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-disabled, #d5d5d5)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24354" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24437" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=search, status=default" id="170:24437" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24439" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24440" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=search, status=default" id="170:24440" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24442" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24443" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=search, status=default" id="170:24443" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24445" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24446" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=search, status=default" id="170:24446" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24448" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24449" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=search, status=default" id="170:24449" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24451" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24452" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=search, status=default" id="170:24452" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24454" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24455" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=search, status=default" id="170:24455" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24457" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24458" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24458 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24459" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=search, status=default" id="170:24459" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24461" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24462" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24462 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24463" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=search, status=default" id="170:24463" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24465" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24466" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24466 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24467" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=search, status=default" id="170:24467" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24469" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24470" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=search, status=default" id="170:24470" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24472" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24473" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=search, status=default" id="170:24473" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24475" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24476" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=default" id="170:24476" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24478" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24479" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=default" id="170:24479" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24481" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24482" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=default" id="170:24482" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24484" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24510" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=basic, status=warning" id="170:24510" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24512" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24513" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=basic, status=warning" id="170:24513" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24515" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24516" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=basic, status=warning" id="170:24516" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24518" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24519" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=warning" id="170:24519" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24521" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24522" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=warning" id="170:24522" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24524" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24525" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=warning" id="170:24525" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24527" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24528" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=basic, status=warning" id="170:24528" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24530" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24531" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24531 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24532" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=basic, status=warning" id="170:24532" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24534" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24535" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24535 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24536" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=basic, status=warning" id="170:24536" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24538" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24539" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24539 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24540" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=warning" id="170:24540" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24542" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24543" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=warning" id="170:24543" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24545" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24546" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=warning" id="170:24546" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24548" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24549" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=warning" id="170:24549" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24551" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24552" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=warning" id="170:24552" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24554" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24555" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=warning" id="170:24555" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24557" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24558" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=warning" id="170:24558" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24560" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24561" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=warning" id="170:24561" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24563" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24564" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=warning" id="170:24564" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24566" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24567" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=warning" id="170:24567" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24569" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24570" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=warning" id="170:24570" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24572" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24573" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=warning" id="170:24573" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24575" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24576" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=warning" id="170:24576" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27867" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24578" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24579" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24579 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24580" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=warning" id="170:24580" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27880" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 4px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24582" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24583" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24583 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24584" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=warning" id="170:24584" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27898" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24586" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24587" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24587 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24588" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=warning" id="170:24588" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24589" type="FRAME" */}
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
                {/* name="tag" id="170:24590" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "22px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24591" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "22px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24592" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "22px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24593" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24594" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=warning" id="170:24594" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="3006:27197" type="FRAME" */}
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
                {/* name="tag" id="3006:27198" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="3006:27199" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="3006:27200" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24599" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24600" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=warning" id="170:24600" type="COMPONENT" */}
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
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24601" type="FRAME" */}
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
                {/* name="tag" id="170:24602" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24603" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24604" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24605" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24606" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=warning" id="170:24606" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24608" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24609" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=warning" id="170:24609" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24611" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24612" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=warning" id="170:24612" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24614" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24615" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=search, status=warning" id="170:24615" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24617" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24618" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=search, status=warning" id="170:24618" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24620" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24621" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=search, status=warning" id="170:24621" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24623" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24624" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=search, status=warning" id="170:24624" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24626" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24627" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=search, status=warning" id="170:24627" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24629" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24630" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=search, status=warning" id="170:24630" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24632" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24633" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=search, status=warning" id="170:24633" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24635" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24636" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24636 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24637" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=search, status=warning" id="170:24637" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24639" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24640" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24640 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24641" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=search, status=warning" id="170:24641" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24643" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24644" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24644 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24645" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=search, status=warning" id="170:24645" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24647" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24648" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=search, status=warning" id="170:24648" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24650" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24651" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=search, status=warning" id="170:24651" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "var(--style-line-width-linewidth, 1px) solid #ECA51C",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24653" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24654" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=warning" id="170:24654" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24656" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24657" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=warning" id="170:24657" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24659" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24660" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=warning" id="170:24660" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24662" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24735" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=basic, status=error" id="170:24735" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24737" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24738" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=basic, status=error" id="170:24738" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24740" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24741" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=basic, status=error" id="170:24741" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24743" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24744" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=error" id="170:24744" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24746" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24747" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=error" id="170:24747" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24749" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24750" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=error" id="170:24750" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24752" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24753" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=basic, status=error" id="170:24753" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24755" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24756" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24756 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24757" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=basic, status=error" id="170:24757" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24759" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24760" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24760 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24761" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=basic, status=error" id="170:24761" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24763" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24764" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24764 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24765" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=error" id="170:24765" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24767" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24768" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=error" id="170:24768" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24770" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24771" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=error" id="170:24771" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24773" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24774" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=error" id="170:24774" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24776" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24777" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=error" id="170:24777" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24779" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24780" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=error" id="170:24780" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24782" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24783" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=error" id="170:24783" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24785" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24786" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=error" id="170:24786" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24788" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24789" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=error" id="170:24789" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24791" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24792" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=error" id="170:24792" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24794" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24795" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=error" id="170:24795" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24797" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24798" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=error" id="170:24798" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24800" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24801" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=error" id="170:24801" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27868" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24803" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24804" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24804 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24805" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=error" id="170:24805" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27881" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--style-radius-borderradiussm, 4px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24807" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24808" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24808 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24809" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=error" id="170:24809" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="tag" id="3009:27899" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  showRIcon: true,
                  color: "primary",
                  state: "default",
                  size: "Default",
                  rounded: "False",
                }}
              />
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24811" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24812" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24812 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24813" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=error" id="170:24813" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24814" type="FRAME" */}
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
                {/* name="tag" id="170:24815" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24816" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24817" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "22px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24818" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24819" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=error" id="170:24819" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="3006:27231" type="FRAME" */}
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
                {/* name="tag" id="3006:27232" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="3006:27233" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="3006:27234" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24824" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24825" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=error" id="170:24825" type="COMPONENT" */}
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
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Items Wrapper" id="170:24826" type="FRAME" */}
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
                {/* name="tag" id="170:24827" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24828" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="170:24829" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--size-height-controheightxs, 16px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderradiussm, 4px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="170:24830" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24831" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=error" id="170:24831" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24833" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24834" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=error" id="170:24834" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24836" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24837" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=error" id="170:24837" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24839" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24840" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=search, status=error" id="170:24840" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24842" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24843" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=search, status=error" id="170:24843" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24845" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24846" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=search, status=error" id="170:24846" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24848" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24849" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=search, status=error" id="170:24849" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24851" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24852" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=search, status=error" id="170:24852" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24854" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24855" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=search, status=error" id="170:24855" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24857" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24858" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=search, status=error" id="170:24858" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24860" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24861" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24861 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24862" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=search, status=error" id="170:24862" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24864" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24865" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24865 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24866" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=search, status=error" id="170:24866" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24868" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="170:24869" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=170:24869 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="170:24870" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=search, status=error" id="170:24870" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24872" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24873" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=search, status=error" id="170:24873" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24875" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24876" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=search, status=error" id="170:24876" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-red-20, #dc3812)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24878" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24879" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=error" id="170:24879" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24881" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24882" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=error" id="170:24882" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24884" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="170:24885" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=error" id="170:24885" type="COMPONENT" */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select`}</span>
              {/* name="Icon" id="170:24887" type="INSTANCE" */}
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
