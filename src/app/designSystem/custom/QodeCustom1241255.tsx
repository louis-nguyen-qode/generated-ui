// id="124:1255"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1241253 from "@designSystem/icon/svg/QodeSvg1241253"
import QodeSvg1241258 from "@designSystem/icon/svg/QodeSvg1241258"
import QodeSvg1241261 from "@designSystem/icon/svg/QodeSvg1241261"
import QodeSvg1241274 from "@designSystem/icon/svg/QodeSvg1241274"
import QodeSvg1241281 from "@designSystem/icon/svg/QodeSvg1241281"
import QodeSvg1241282 from "@designSystem/icon/svg/QodeSvg1241282"
import QodeSvg1241293 from "@designSystem/icon/svg/QodeSvg1241293"
import QodeSvg1241309 from "@designSystem/icon/svg/QodeSvg1241309"
import QodeSvg1241310 from "@designSystem/icon/svg/QodeSvg1241310"
import QodeSvg1241317 from "@designSystem/icon/svg/QodeSvg1241317"
import QodeSvg1241318 from "@designSystem/icon/svg/QodeSvg1241318"
import QodeSvg1241319 from "@designSystem/icon/svg/QodeSvg1241319"

export interface QodeCustom1241255Props {
  button?: boolean
  title?: string
  showArrow?: boolean
  placement?:
    | "left"
    | "left top"
    | "left bottom"
    | "right"
    | "right top"
    | "right bottom"
    | "bottom"
    | "bottom left"
    | "bottom right"
    | "Top"
    | "Top Left"
    | "Top Right"
}

export const QodeCustom1241255: React.FC<
  QodeCustom1241255Props & { style?: CSSProperties }
> = ({
  button = false,
  title = "Prompt text",
  showArrow = true,
  placement = "left",
  ...rest
}) => {
  return (
    <>
      {/* name="Tooltip" id="124:1255" type="COMPONENT_SET" */}
      {/* id="124:1249" */}
      {`${placement}` === `left` && (
        <>
          {/* name="placement=left" id="124:1249" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1253" type="VECTOR" */}
            <QodeSvg1241253
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(90deg)",
                position: "absolute",
                right: "-8px",
                top: "8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12764" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1256" */}
      {`${placement}` === `left top` && (
        <>
          {/* name="placement=left top" id="124:1256" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1258" type="VECTOR" */}
            <QodeSvg1241258
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(90deg)",
                position: "absolute",
                right: "-8px",
                top: "8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12959" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1259" */}
      {`${placement}` === `left bottom` && (
        <>
          {/* name="placement=left bottom" id="124:1259" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1261" type="VECTOR" */}
            <QodeSvg1241261
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(90deg)",
                position: "absolute",
                right: "-8px",
                top: "7px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12960" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1272" */}
      {`${placement}` === `right` && (
        <>
          {/* name="placement=right" id="124:1272" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1274" type="VECTOR" */}
            <QodeSvg1241274
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(-90deg)",
                position: "absolute",
                left: "-8px",
                top: "8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12961" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1275" */}
      {`${placement}` === `right top` && (
        <>
          {/* name="placement=right top" id="124:1275" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1281" type="VECTOR" */}
            <QodeSvg1241281
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(-90deg)",
                position: "absolute",
                left: "-8px",
                bottom: "7px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12962" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1278" */}
      {`${placement}` === `right bottom` && (
        <>
          {/* name="placement=right bottom" id="124:1278" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1282" type="VECTOR" */}
            <QodeSvg1241282
              style={{
                width: "16px",
                height: "8px",
                transform: "rotate(-90deg)",
                position: "absolute",
                left: "-8px",
                top: "7px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12963" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1291" */}
      {`${placement}` === `bottom` && (
        <>
          {/* name="placement=bottom" id="124:1291" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1293" type="VECTOR" */}
            <QodeSvg1241293
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                left: "34px",
                top: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12964" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1294" */}
      {`${placement}` === `bottom left` && (
        <>
          {/* name="placement=bottom left" id="124:1294" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1309" type="VECTOR" */}
            <QodeSvg1241309
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                left: "16px",
                top: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12965" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1297" */}
      {`${placement}` === `bottom right` && (
        <>
          {/* name="placement=bottom right" id="124:1297" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1310" type="VECTOR" */}
            <QodeSvg1241310
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                right: "16px",
                top: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12966" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1300" */}
      {`${placement}` === `Top` && (
        <>
          {/* name="placement=Top" id="124:1300" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1317" type="VECTOR" */}
            <QodeSvg1241317
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                left: "34px",
                bottom: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12967" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1303" */}
      {`${placement}` === `Top Left` && (
        <>
          {/* name="placement=Top Left" id="124:1303" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1318" type="VECTOR" */}
            <QodeSvg1241318
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                left: "16px",
                bottom: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12968" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="124:1306" */}
      {`${placement}` === `Top Right` && (
        <>
          {/* name="placement=Top Right" id="124:1306" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "84px",
              padding: "6px var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--neutral-gray-95, #383838)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-white, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Prompt text`}</span>
            {/* name="arrow" id="124:1319" type="VECTOR" */}
            <QodeSvg1241319
              style={{
                width: "16px",
                height: "8px",
                position: "absolute",
                right: "16px",
                bottom: "-8px",
                fill: "var(--neutral-gray-95, #383838)",
              }}
              {...{}}
            />
            {/* name="Button" id="3132:12958" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxxs, 4px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortextsolid, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
