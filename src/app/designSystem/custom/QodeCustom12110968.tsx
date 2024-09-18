// id="121:10968"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom12110968Props {
  icon?: React.ReactNode
  showIcon?: boolean
  title?: string
  size?: "default" | "large" | "small"
  position?: "bottom" | "left" | "right" | "top"
  state?: "active" | "default" | "disabled"
}

export const QodeCustom12110968: React.FC<
  QodeCustom12110968Props & { style?: CSSProperties }
> = ({
  icon = undefined,
  showIcon = true,
  title = "Tab title",
  size = "default",
  position = "top",
  state = "active",
  ...rest
}) => {
  return (
    <>
      {/* name=".tab__item" id="121:10968" type="COMPONENT_SET" */}
      {/* id="121:10969" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=top, state=active" id="121:10969" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11005" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10970" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=top, state=active" id="121:10970" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11007" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10971" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=top, state=active" id="121:10971" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11009" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10972" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=top, state=default" id="121:10972" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11011" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10973" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=top, state=default" id="121:10973" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11013" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10974" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=top, state=default" id="121:10974" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11015" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10975" */}
      {`${size}` === `default` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=top, state=disabled" id="121:10975" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11017" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10976" */}
      {`${size}` === `large` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=top, state=disabled" id="121:10976" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11019" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10977" */}
      {`${size}` === `small` &&
        `${position}` === `top` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=top, state=disabled" id="121:10977" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11021" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10978" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=bottom, state=active" id="121:10978" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderTop: "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11023" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10979" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=bottom, state=active" id="121:10979" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderTop: "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11025" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10980" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=bottom, state=active" id="121:10980" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderTop: "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11027" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10981" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=bottom, state=default" id="121:10981" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11029" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10982" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=bottom, state=default" id="121:10982" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11031" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10983" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=bottom, state=default" id="121:10983" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11033" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10984" */}
      {`${size}` === `default` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=bottom, state=disabled" id="121:10984" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11035" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10985" */}
      {`${size}` === `large` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=bottom, state=disabled" id="121:10985" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding: "var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11037" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10986" */}
      {`${size}` === `small` &&
        `${position}` === `bottom` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=bottom, state=disabled" id="121:10986" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11039" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10987" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=left, state=active" id="121:10987" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRight:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11041" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10988" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=left, state=active" id="121:10988" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRight:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11043" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10989" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=left, state=active" id="121:10989" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRight:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11045" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10990" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=left, state=default" id="121:10990" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11047" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10991" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=left, state=default" id="121:10991" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11049" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10992" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=left, state=default" id="121:10992" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11051" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10993" */}
      {`${size}` === `default` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=left, state=disabled" id="121:10993" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11053" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10994" */}
      {`${size}` === `large` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=left, state=disabled" id="121:10994" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11055" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10995" */}
      {`${size}` === `small` &&
        `${position}` === `left` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=left, state=disabled" id="121:10995" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11057" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10996" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=default, position=right, state=active" id="121:10996" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderLeft:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11059" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10997" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=large, position=right, state=active" id="121:10997" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderLeft:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11061" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10998" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `active` && (
          <>
            {/* name="size=small, position=right, state=active" id="121:10998" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderLeft:
                  "2px solid var(--border-border-primary-20, #158de2)",
              }}
            >
              {/* name="🎰 icon" id="121:11063" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:10999" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=default, position=right, state=default" id="121:10999" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11065" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:11000" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=large, position=right, state=default" id="121:11000" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11067" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:11001" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `default` && (
          <>
            {/* name="size=small, position=right, state=default" id="121:11001" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11069" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:11002" */}
      {`${size}` === `default` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=default, position=right, state=disabled" id="121:11002" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11071" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:11003" */}
      {`${size}` === `large` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=large, position=right, state=disabled" id="121:11003" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11073" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
      {/* id="121:11004" */}
      {`${size}` === `small` &&
        `${position}` === `right` &&
        `${state}` === `disabled` && (
          <>
            {/* name="size=small, position=right, state=disabled" id="121:11004" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
              }}
            >
              {/* name="🎰 icon" id="121:11075" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Tab title`}</span>
            </div>
          </>
        )}
    </>
  )
}
