// id="328:29436"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom32829436Props {
  iconr?: boolean
  title?: string
  state?: "default" | "hover" | "active" | "filled" | "disabled"
  size?: "default" | "large" | "small"
  type?: "basic" | "multiple" | "search"
  status?: "default" | "warning" | "error"
}

export const QodeCustom32829436: React.FC<
  QodeCustom32829436Props & { style?: CSSProperties }
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
      {/* name="Input/Select" id="328:29436" type="COMPONENT_SET" */}
      {/* id="328:29437" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=basic, status=default" id="328:29437" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29573" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29438" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=basic, status=default" id="328:29438" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29575" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29439" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=basic, status=default" id="328:29439" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29577" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29440" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=default" id="328:29440" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29579" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29441" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=default" id="328:29441" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29581" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29442" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=default" id="328:29442" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29583" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29443" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=basic, status=default" id="328:29443" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29585" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29586" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29586 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29444" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=basic, status=default" id="328:29444" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29588" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29589" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29589 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29445" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=basic, status=default" id="328:29445" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29591" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29592" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29592 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29446" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=default" id="328:29446" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29594" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29447" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=default" id="328:29447" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29596" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29448" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=default" id="328:29448" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29598" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29449" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=default" id="328:29449" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29600" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29450" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=default" id="328:29450" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29602" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29451" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=default" id="328:29451" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29604" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29452" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=default" id="328:29452" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29606" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29453" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=default" id="328:29453" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29608" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29454" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=default" id="328:29454" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29610" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29455" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=default" id="328:29455" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29612" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29456" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=default" id="328:29456" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29614" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29457" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=default" id="328:29457" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29616" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29458" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=default" id="328:29458" type="COMPONENT" */}
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
              {/* name="tag" id="328:29617" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29619" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29620" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29620 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29459" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=default" id="328:29459" type="COMPONENT" */}
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
              {/* name="tag" id="328:29621" type="INSTANCE" */}
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
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29623" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29624" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29624 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29460" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=default" id="328:29460" type="COMPONENT" */}
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
              {/* name="tag" id="328:29625" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29627" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29628" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29628 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29461" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=default" id="328:29461" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29629" type="FRAME" */}
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
                {/* name="tag" id="328:29630" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "24px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29631" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29632" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29633" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29462" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=default" id="328:29462" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29634" type="FRAME" */}
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
                {/* name="tag" id="328:29635" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29636" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29637" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29638" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29463" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=default" id="328:29463" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29639" type="FRAME" */}
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
                {/* name="tag" id="328:29640" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29641" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29642" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "18px",
                    padding: "0px 12px",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                    borderRadius: "4px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                    background: "var(--primary-primary-10, #d6eeff)",
                  }}
                  {...{
                    showRIcon: true,
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29643" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29464" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=default" id="328:29464" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29645" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29465" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=default" id="328:29465" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29647" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29466" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=default" id="328:29466" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29649" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29467" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=default, type=search, status=default" id="328:29467" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29651" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29468" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=large, type=search, status=default" id="328:29468" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29653" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29469" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=default, size=small, type=search, status=default" id="328:29469" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29655" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29470" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=default, type=search, status=default" id="328:29470" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29657" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29471" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=large, type=search, status=default" id="328:29471" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29659" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29472" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=hover, size=small, type=search, status=default" id="328:29472" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29661" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29473" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=default, type=search, status=default" id="328:29473" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29663" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29664" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29664 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29474" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=large, type=search, status=default" id="328:29474" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29666" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29667" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29667 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29475" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=active, size=small, type=search, status=default" id="328:29475" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29669" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29670" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29670 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29476" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=default, type=search, status=default" id="328:29476" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29672" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29477" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=large, type=search, status=default" id="328:29477" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29674" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29478" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=filled, size=small, type=search, status=default" id="328:29478" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29676" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29479" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=default" id="328:29479" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29678" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29480" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=default" id="328:29480" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29680" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29481" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `default` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=default" id="328:29481" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29682" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29482" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=basic, status=warning" id="328:29482" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29684" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29483" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=basic, status=warning" id="328:29483" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29686" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29484" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=basic, status=warning" id="328:29484" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29688" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29485" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=warning" id="328:29485" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29690" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29486" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=warning" id="328:29486" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29692" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29487" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=warning" id="328:29487" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29694" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29488" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=basic, status=warning" id="328:29488" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29696" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29697" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29697 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29489" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=basic, status=warning" id="328:29489" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29699" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29700" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29700 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29490" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=basic, status=warning" id="328:29490" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29702" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29703" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29703 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29491" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=warning" id="328:29491" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29705" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29492" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=warning" id="328:29492" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29707" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29493" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=warning" id="328:29493" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29709" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29494" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=warning" id="328:29494" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29711" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29495" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=warning" id="328:29495" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29713" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29496" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=warning" id="328:29496" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29715" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29497" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=warning" id="328:29497" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29717" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29498" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=warning" id="328:29498" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29719" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29499" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=warning" id="328:29499" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29721" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29500" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=warning" id="328:29500" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29723" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29501" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=warning" id="328:29501" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29725" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29502" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=warning" id="328:29502" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29727" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29503" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=warning" id="328:29503" type="COMPONENT" */}
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
              {/* name="tag" id="328:29728" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29730" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29731" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29731 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29504" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=warning" id="328:29504" type="COMPONENT" */}
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
              {/* name="tag" id="328:29732" type="INSTANCE" */}
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
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29734" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29735" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29735 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29505" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=warning" id="328:29505" type="COMPONENT" */}
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
              {/* name="tag" id="328:29736" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29738" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29739" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29739 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29506" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=warning" id="328:29506" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29740" type="FRAME" */}
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
                {/* name="tag" id="328:29741" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29742" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29743" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29744" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29507" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=warning" id="328:29507" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29745" type="FRAME" */}
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
                {/* name="tag" id="328:29746" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29747" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29748" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29749" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29508" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=warning" id="328:29508" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29750" type="FRAME" */}
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
                {/* name="tag" id="328:29751" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29752" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29753" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29754" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29509" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=warning" id="328:29509" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29756" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29510" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=warning" id="328:29510" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29758" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29511" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=warning" id="328:29511" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29760" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29512" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=default, type=search, status=warning" id="328:29512" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29762" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29513" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=large, type=search, status=warning" id="328:29513" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29764" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29514" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=default, size=small, type=search, status=warning" id="328:29514" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29766" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29515" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=default, type=search, status=warning" id="328:29515" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29768" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29516" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=large, type=search, status=warning" id="328:29516" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29770" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29517" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=hover, size=small, type=search, status=warning" id="328:29517" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29772" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29518" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=default, type=search, status=warning" id="328:29518" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29774" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29775" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29775 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29519" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=large, type=search, status=warning" id="328:29519" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29777" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29778" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29778 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29520" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=active, size=small, type=search, status=warning" id="328:29520" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29780" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29781" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29781 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29521" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=default, type=search, status=warning" id="328:29521" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29783" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29522" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=large, type=search, status=warning" id="328:29522" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29785" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29523" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=filled, size=small, type=search, status=warning" id="328:29523" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29787" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29524" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=warning" id="328:29524" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29789" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29525" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=warning" id="328:29525" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29791" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29526" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `warning` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=warning" id="328:29526" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29793" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29527" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=basic, status=error" id="328:29527" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29795" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29528" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=basic, status=error" id="328:29528" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29797" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29529" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=basic, status=error" id="328:29529" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29799" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29530" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=basic, status=error" id="328:29530" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29801" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29531" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=basic, status=error" id="328:29531" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29803" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29532" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=basic, status=error" id="328:29532" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29805" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29533" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=basic, status=error" id="328:29533" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29807" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29808" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29808 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29534" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=basic, status=error" id="328:29534" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29810" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29811" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29811 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29535" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=basic, status=error" id="328:29535" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29813" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29814" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29814 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29536" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=basic, status=error" id="328:29536" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29816" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29537" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=basic, status=error" id="328:29537" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29818" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29538" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=basic, status=error" id="328:29538" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29820" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29539" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=basic, status=error" id="328:29539" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29822" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29540" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=basic, status=error" id="328:29540" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29824" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29541" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `basic` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=basic, status=error" id="328:29541" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29826" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29542" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=multiple, status=error" id="328:29542" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29828" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29543" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=multiple, status=error" id="328:29543" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29830" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29544" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=multiple, status=error" id="328:29544" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29832" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29545" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=multiple, status=error" id="328:29545" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29834" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29546" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=multiple, status=error" id="328:29546" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29836" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29547" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=multiple, status=error" id="328:29547" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29838" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29548" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=multiple, status=error" id="328:29548" type="COMPONENT" */}
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
              {/* name="tag" id="328:29839" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "30px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29841" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29842" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29842 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29549" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=multiple, status=error" id="328:29549" type="COMPONENT" */}
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
              {/* name="tag" id="328:29843" type="INSTANCE" */}
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
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29845" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29846" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29846 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29550" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=multiple, status=error" id="328:29550" type="COMPONENT" */}
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
              {/* name="tag" id="328:29847" type="INSTANCE" */}
              <QodeTag
                style={{
                  display: "flex",
                  height: "18px",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                  borderRadius: "4px",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{
                  rIcon: <Icon.QodeXmark />,
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
              {/* name="Icon" id="328:29849" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29850" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29850 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29551" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=multiple, status=error" id="328:29551" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29851" type="FRAME" */}
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
                {/* name="tag" id="328:29852" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29853" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29854" type="INSTANCE" */}
                <QodeTag
                  style={{
                    display: "flex",
                    height: "var(--line-height-lineheight, 22px)",
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29855" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29552" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=multiple, status=error" id="328:29552" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29856" type="FRAME" */}
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
                {/* name="tag" id="328:29857" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29858" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29859" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29860" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29553" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=multiple, status=error" id="328:29553" type="COMPONENT" */}
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
              {/* name="Items Wrapper" id="328:29861" type="FRAME" */}
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
                {/* name="tag" id="328:29862" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29863" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
                {/* name="tag" id="328:29864" type="INSTANCE" */}
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
                    rIcon: <Icon.QodeXmark />,
                    color: "primary",
                    state: "default",
                    size: "Default",
                    rounded: "False",
                  }}
                />
              </div>
              {/* name="Icon" id="328:29865" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29554" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=multiple, status=error" id="328:29554" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29867" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29555" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=multiple, status=error" id="328:29555" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29869" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29556" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `multiple` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=multiple, status=error" id="328:29556" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29871" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29557" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=default, type=search, status=error" id="328:29557" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29873" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29558" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=large, type=search, status=error" id="328:29558" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29875" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29559" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=default, size=small, type=search, status=error" id="328:29559" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29877" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29560" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=default, type=search, status=error" id="328:29560" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29879" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29561" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=large, type=search, status=error" id="328:29561" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29881" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29562" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=hover, size=small, type=search, status=error" id="328:29562" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29883" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29563" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=default, type=search, status=error" id="328:29563" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29885" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29886" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "32px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29886 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29564" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=large, type=search, status=error" id="328:29564" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29888" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29889" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29889 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29565" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=active, size=small, type=search, status=error" id="328:29565" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29891" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="Focus ring" id="328:29892" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "320px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                }}
              >
                {/* name="Focus ring" id=328:29892 type=RECTANGLE */}
                <></>
              </Flex>
            </div>
          </>
        )}
      {/* id="328:29566" */}
      {`${state}` === `filled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=default, type=search, status=error" id="328:29566" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29894" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29567" */}
      {`${state}` === `filled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=large, type=search, status=error" id="328:29567" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29896" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29568" */}
      {`${state}` === `filled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=filled, size=small, type=search, status=error" id="328:29568" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29898" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29569" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=default, type=search, status=error" id="328:29569" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29900" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "16px", height: "16px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29570" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=large, type=search, status=error" id="328:29570" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29902" type="INSTANCE" */}
              <Icon.QodeChevronDown
                style={{ width: "20px", height: "20px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="328:29571" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${type}` === `search` &&
        `${status}` === `error` && (
          <>
            {/* name="state=disabled, size=small, type=search, status=error" id="328:29571" type="COMPONENT" */}
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
              {/* name="Icon" id="328:29904" type="INSTANCE" */}
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
