// id="204:9698"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg2049545 from "@designSystem/icon/svg/QodeSvg2049545"
import QodeSvg2049735 from "@designSystem/icon/svg/QodeSvg2049735"
import QodeSvg2049550 from "@designSystem/icon/svg/QodeSvg2049550"
import QodeSvg2049740 from "@designSystem/icon/svg/QodeSvg2049740"
import QodeSvg2049555 from "@designSystem/icon/svg/QodeSvg2049555"
import QodeSvg2049745 from "@designSystem/icon/svg/QodeSvg2049745"
import QodeSvg2049529 from "@designSystem/icon/svg/QodeSvg2049529"
import QodeSvg2049750 from "@designSystem/icon/svg/QodeSvg2049750"
import QodeSvg2049534 from "@designSystem/icon/svg/QodeSvg2049534"
import QodeSvg2049755 from "@designSystem/icon/svg/QodeSvg2049755"
import QodeSvg2049539 from "@designSystem/icon/svg/QodeSvg2049539"
import QodeSvg2049760 from "@designSystem/icon/svg/QodeSvg2049760"

export interface QodeCustom2049698Props {
  size?: "mini" | "default"
  status?: "default" | "error" | "success"
  strokeLinecap?: "round" | "butt"
}

export const QodeCustom2049698: React.FC<
  QodeCustom2049698Props & { style?: CSSProperties }
> = ({
  size = "mini",
  status = "default",
  strokeLinecap = "round",
  ...rest
}) => {
  return (
    <>
      {/* name="Progress__Circle" id="204:9698" type="COMPONENT_SET" */}
      {/* id="204:9544" */}
      {`${size}` === `mini` &&
        `${status}` === `error` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=error, stroke linecap=round" id="204:9544" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9545" type="FRAME" */}
              <QodeSvg2049545
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="xmark" id="204:9548" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "21px", height: "21px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9734" */}
      {`${size}` === `mini` &&
        `${status}` === `error` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=error, stroke linecap=butt" id="204:9734" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9735" type="FRAME" */}
              <QodeSvg2049735
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="xmark" id="204:9738" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "21px", height: "21px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9549" */}
      {`${size}` === `mini` &&
        `${status}` === `success` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=success, stroke linecap=round" id="204:9549" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9550" type="FRAME" */}
              <QodeSvg2049550
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="check" id="204:9553" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{ width: "21px", height: "21px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9739" */}
      {`${size}` === `mini` &&
        `${status}` === `success` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=success, stroke linecap=butt" id="204:9739" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9740" type="FRAME" */}
              <QodeSvg2049740
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="check" id="204:9743" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{ width: "21px", height: "21px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9554" */}
      {`${size}` === `mini` &&
        `${status}` === `default` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=default, stroke linecap=round" id="204:9554" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9555" type="FRAME" */}
              <QodeSvg2049555
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  display: "flex",
                  width: "56px",
                  height: "18px",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: "0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`30%`}</span>
            </div>
          </>
        )}
      {/* id="204:9744" */}
      {`${size}` === `mini` &&
        `${status}` === `default` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=default, stroke linecap=butt" id="204:9744" type="COMPONENT" */}
            <div style={{ width: "80px", height: "80px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9745" type="FRAME" */}
              <QodeSvg2049745
                style={{ width: "80px", height: "80px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  display: "flex",
                  width: "56px",
                  height: "18px",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: "0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`30%`}</span>
            </div>
          </>
        )}
      {/* id="204:9528" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=error, stroke linecap=round" id="204:9528" type="COMPONENT" */}
            <div style={{ width: "120px", height: "120px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9529" type="FRAME" */}
              <QodeSvg2049529
                style={{ width: "120px", height: "120px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="xmark" id="204:9532" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "28px", height: "28px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9749" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=error, stroke linecap=butt" id="204:9749" type="COMPONENT" */}
            <div style={{ width: "120px", height: "120px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9750" type="FRAME" */}
              <QodeSvg2049750
                style={{ width: "120px", height: "120px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="xmark" id="204:9753" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "28px", height: "28px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9533" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=success, stroke linecap=round" id="204:9533" type="COMPONENT" */}
            <div style={{ width: "120px", height: "120px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9534" type="FRAME" */}
              <QodeSvg2049534
                style={{ width: "120px", height: "120px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="check" id="204:9537" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{ width: "28px", height: "28px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9754" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=success, stroke linecap=butt" id="204:9754" type="COMPONENT" */}
            <div style={{ width: "120px", height: "120px", flexShrink: "0" }}>
              {/* name="progress-circle" id="204:9755" type="FRAME" */}
              <QodeSvg2049755
                style={{ width: "120px", height: "120px", flexShrink: "0" }}
                {...{}}
              />
              {/* name="check" id="204:9758" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{ width: "28px", height: "28px", flexShrink: "0" }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9538" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${strokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=default, stroke linecap=round" id="204:9538" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* name="progress-circle" id="204:9539" type="FRAME" */}
              <QodeSvg2049539
                style={{ width: "120px", height: "120px" }}
                {...{}}
              />
              {/* name="text-wrapper" id="204:9542" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "0px 16px 46px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    width: "88px",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-xlarge, 20px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`75%`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="204:9759" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${strokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=default, stroke linecap=butt" id="204:9759" type="COMPONENT" */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* name="progress-circle" id="204:9760" type="FRAME" */}
              <QodeSvg2049760
                style={{ width: "120px", height: "120px" }}
                {...{}}
              />
              {/* name="text-wrapper" id="204:9763" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "0px 16px 46px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    width: "88px",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-xlarge, 20px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`75%`}</span>
              </div>
            </div>
          </>
        )}
    </>
  )
}
