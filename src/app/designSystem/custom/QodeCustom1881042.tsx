// id="188:1042"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881042Props {
  label?: string
  iconR?: boolean
  iconL?: boolean
  state?: "default" | "hover" | "disabled" | "active"
  size?: "default" | "large" | "small"
  _style?: "outlined" | "solid"
  position?: "center" | "first" | "last"
}

export const QodeCustom1881042: React.FC<
  QodeCustom1881042Props & { style?: CSSProperties }
> = ({
  label = "Radio",
  iconR = false,
  iconL = false,
  state = "default",
  size = "default",
  _style = "outlined",
  position = "center",
  ...rest
}) => {
  return (
    <>
      {/* name=".radioButton__item" id="188:1042" type="COMPONENT_SET" */}
      {/* id="188:1041" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=default, style=outlined, position=center" id="188:1041" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1802" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2461" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1045" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=default, style=outlined, position=first" id="188:1045" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1803" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2462" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1047" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=default, style=outlined, position=last" id="188:1047" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1804" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2463" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1049" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=large, style=outlined, position=center" id="188:1049" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1805" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2464" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1051" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=large, style=outlined, position=first" id="188:1051" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1806" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2465" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1053" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=large, style=outlined, position=last" id="188:1053" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1807" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2466" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1055" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=small, style=outlined, position=center" id="188:1055" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1808" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2467" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1057" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=small, style=outlined, position=first" id="188:1057" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1809" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2468" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1059" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=small, style=outlined, position=last" id="188:1059" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1810" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2469" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1061" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=default, style=solid, position=center" id="188:1061" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1811" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2470" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1063" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=default, style=solid, position=first" id="188:1063" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1812" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2471" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1065" */}
      {`${state}` === `default` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=default, style=solid, position=last" id="188:1065" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1813" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2472" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1067" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=large, style=solid, position=center" id="188:1067" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1814" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2473" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1069" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=large, style=solid, position=first" id="188:1069" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1815" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2474" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1071" */}
      {`${state}` === `default` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=large, style=solid, position=last" id="188:1071" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1816" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2475" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1073" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=default, size=small, style=solid, position=center" id="188:1073" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1817" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2476" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1075" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=default, size=small, style=solid, position=first" id="188:1075" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1818" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2477" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1077" */}
      {`${state}` === `default` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=default, size=small, style=solid, position=last" id="188:1077" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1819" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2478" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1079" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=default, style=outlined, position=center" id="188:1079" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1820" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2479" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1081" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=default, style=outlined, position=first" id="188:1081" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1821" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2480" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1083" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=default, style=outlined, position=last" id="188:1083" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1822" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2481" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1085" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=large, style=outlined, position=center" id="188:1085" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1823" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2482" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1087" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=large, style=outlined, position=first" id="188:1087" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1824" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2483" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1089" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=large, style=outlined, position=last" id="188:1089" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1825" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2484" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1091" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=small, style=outlined, position=center" id="188:1091" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1826" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2485" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1093" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=small, style=outlined, position=first" id="188:1093" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1827" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2486" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1095" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=small, style=outlined, position=last" id="188:1095" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1828" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2487" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1097" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=default, style=solid, position=center" id="188:1097" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1829" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2488" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1099" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=default, style=solid, position=first" id="188:1099" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1830" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2489" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1101" */}
      {`${state}` === `hover` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=default, style=solid, position=last" id="188:1101" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1831" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2490" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1103" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=large, style=solid, position=center" id="188:1103" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1832" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2491" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1105" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=large, style=solid, position=first" id="188:1105" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1833" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2492" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1107" */}
      {`${state}` === `hover` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=large, style=solid, position=last" id="188:1107" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1834" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2493" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1109" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=hover, size=small, style=solid, position=center" id="188:1109" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1835" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2494" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1111" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=hover, size=small, style=solid, position=first" id="188:1111" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1836" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2495" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1113" */}
      {`${state}` === `hover` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=hover, size=small, style=solid, position=last" id="188:1113" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1837" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2496" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1115" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=default, style=outlined, position=center" id="188:1115" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1838" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2497" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1117" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=default, style=outlined, position=first" id="188:1117" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1839" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2498" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1119" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=default, style=outlined, position=last" id="188:1119" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1840" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2499" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1121" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=large, style=outlined, position=center" id="188:1121" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1841" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2500" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1123" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=large, style=outlined, position=first" id="188:1123" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1842" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2501" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1125" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=large, style=outlined, position=last" id="188:1125" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1843" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2502" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1127" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=small, style=outlined, position=center" id="188:1127" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1844" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2503" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1129" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=small, style=outlined, position=first" id="188:1129" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1845" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2504" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1131" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=small, style=outlined, position=last" id="188:1131" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="icons" id="2889:1846" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-primary-20, #1597f4)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2505" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1133" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=default, style=solid, position=center" id="188:1133" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1847" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2506" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1135" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=default, style=solid, position=first" id="188:1135" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1848" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2507" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1137" */}
      {`${state}` === `active` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=default, style=solid, position=last" id="188:1137" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1849" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2508" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1139" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=large, style=solid, position=center" id="188:1139" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1850" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2509" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1141" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=large, style=solid, position=first" id="188:1141" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1851" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2510" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1143" */}
      {`${state}` === `active` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=large, style=solid, position=last" id="188:1143" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1852" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2511" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1145" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=active, size=small, style=solid, position=center" id="188:1145" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1853" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2512" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1147" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=active, size=small, style=solid, position=first" id="188:1147" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1854" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2513" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1149" */}
      {`${state}` === `active` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=active, size=small, style=solid, position=last" id="188:1149" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="icons" id="2889:1855" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Radio`}</span>
              {/* name="icons" id="2889:2514" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1151" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=default, style=outlined, position=center" id="188:1151" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1856" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2515" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1153" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=default, style=outlined, position=first" id="188:1153" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1857" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2516" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1155" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=default, style=outlined, position=last" id="188:1155" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1858" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2517" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1157" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=large, style=outlined, position=center" id="188:1157" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1859" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2518" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1159" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=large, style=outlined, position=first" id="188:1159" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1860" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2519" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1161" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=large, style=outlined, position=last" id="188:1161" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1861" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2520" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1163" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=small, style=outlined, position=center" id="188:1163" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1862" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2521" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1165" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=small, style=outlined, position=first" id="188:1165" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1863" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2522" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1167" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `outlined` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=small, style=outlined, position=last" id="188:1167" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1864" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2523" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1169" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=default, style=solid, position=center" id="188:1169" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1865" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2524" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1171" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=default, style=solid, position=first" id="188:1171" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1866" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2525" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1173" */}
      {`${state}` === `disabled` &&
        `${size}` === `default` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=default, style=solid, position=last" id="188:1173" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1867" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2526" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1175" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=large, style=solid, position=center" id="188:1175" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1868" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2527" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1177" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=large, style=solid, position=first" id="188:1177" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1869" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2528" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1179" */}
      {`${state}` === `disabled` &&
        `${size}` === `large` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=large, style=solid, position=last" id="188:1179" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1870" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2529" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1181" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `center` && (
          <>
            {/* name="state=disabled, size=small, style=solid, position=center" id="188:1181" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1871" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2530" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1183" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `first` && (
          <>
            {/* name="state=disabled, size=small, style=solid, position=first" id="188:1183" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1872" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2531" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="188:1185" */}
      {`${state}` === `disabled` &&
        `${size}` === `small` &&
        `${_style}` === `solid` &&
        `${position}` === `last` && (
          <>
            {/* name="state=disabled, size=small, style=solid, position=last" id="188:1185" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-margin-marginxs, 8px)",
                flexShrink: "0",
                borderRadius:
                  "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-disabled, #e3e3e3)",
              }}
            >
              {/* name="icons" id="2889:1873" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
              >{`Radio`}</span>
              {/* name="icons" id="2889:2532" type="INSTANCE" */}
              <Icon.QodeIcons
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.599px 1.599px 1.599px 1.6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </div>
          </>
        )}
    </>
  )
}
