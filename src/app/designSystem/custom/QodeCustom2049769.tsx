// id="204:9769"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg2049771 from "@designSystem/icon/svg/QodeSvg2049771"
import QodeSvg2049776 from "@designSystem/icon/svg/QodeSvg2049776"
import QodeSvg2049781 from "@designSystem/icon/svg/QodeSvg2049781"
import QodeSvg2049786 from "@designSystem/icon/svg/QodeSvg2049786"
import QodeSvg2049791 from "@designSystem/icon/svg/QodeSvg2049791"
import QodeSvg2049796 from "@designSystem/icon/svg/QodeSvg2049796"
import QodeSvg2049801 from "@designSystem/icon/svg/QodeSvg2049801"
import QodeSvg2049806 from "@designSystem/icon/svg/QodeSvg2049806"
import QodeSvg2049811 from "@designSystem/icon/svg/QodeSvg2049811"
import QodeSvg2049816 from "@designSystem/icon/svg/QodeSvg2049816"
import QodeSvg2049821 from "@designSystem/icon/svg/QodeSvg2049821"
import QodeSvg2049827 from "@designSystem/icon/svg/QodeSvg2049827"

export interface QodeCustom2049769Props {
  size?: "mini" | "default"
  status?: "default" | "error" | "success"
  stokeLinecap?: "round" | "butt"
}

export const QodeCustom2049769: React.FC<
  QodeCustom2049769Props & { style?: CSSProperties }
> = ({
  size = "mini",
  status = "default",
  stokeLinecap = "round",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Progress__Dashboard" id="204:9769" type="COMPONENT_SET" */}
      {/* id="204:9770" */}
      {`${size}` === `mini` &&
        `${status}` === `error` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=error, stoke linecap=round" id="204:9770" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9771" type="FRAME" */}
              <QodeSvg2049771
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="xmark" id="204:9774" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{
                  ...{ width: "21px", height: "21px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9775" */}
      {`${size}` === `mini` &&
        `${status}` === `error` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=error, stoke linecap=butt" id="204:9775" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9776" type="FRAME" */}
              <QodeSvg2049776
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="xmark" id="204:9779" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{
                  ...{ width: "21px", height: "21px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9780" */}
      {`${size}` === `mini` &&
        `${status}` === `success` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=success, stoke linecap=round" id="204:9780" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9781" type="FRAME" */}
              <QodeSvg2049781
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="check" id="204:9784" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{
                  ...{ width: "21px", height: "21px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9785" */}
      {`${size}` === `mini` &&
        `${status}` === `success` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=success, stoke linecap=butt" id="204:9785" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9786" type="FRAME" */}
              <QodeSvg2049786
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="check" id="204:9789" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{
                  ...{ width: "21px", height: "21px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9790" */}
      {`${size}` === `mini` &&
        `${status}` === `default` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=mini, status=default, stoke linecap=round" id="204:9790" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9791" type="FRAME" */}
              <QodeSvg2049791
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "flex",
                    width: "80px",
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
                  },
                  ...{},
                }}
              >{`30%`}</span>
            </div>
          </>
        )}
      {/* id="204:9795" */}
      {`${size}` === `mini` &&
        `${status}` === `default` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=mini, status=default, stoke linecap=butt" id="204:9795" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "80px", height: "80px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9796" type="FRAME" */}
              <QodeSvg2049796
                style={{
                  ...{ width: "80px", height: "80px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    display: "flex",
                    width: "80px",
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
                  },
                  ...{},
                }}
              >{`30%`}</span>
            </div>
          </>
        )}
      {/* id="204:9800" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=error, stoke linecap=round" id="204:9800" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "120px", height: "120px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9801" type="FRAME" */}
              <QodeSvg2049801
                style={{
                  ...{ width: "120px", height: "120px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="xmark" id="204:9804" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{
                  ...{ width: "28px", height: "28px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9805" */}
      {`${size}` === `default` &&
        `${status}` === `error` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=error, stoke linecap=butt" id="204:9805" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "120px", height: "120px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9806" type="FRAME" */}
              <QodeSvg2049806
                style={{
                  ...{ width: "120px", height: "120px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="xmark" id="204:9809" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{
                  ...{ width: "28px", height: "28px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9810" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=success, stoke linecap=round" id="204:9810" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "120px", height: "120px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9811" type="FRAME" */}
              <QodeSvg2049811
                style={{
                  ...{ width: "120px", height: "120px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="check" id="204:9814" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{
                  ...{ width: "28px", height: "28px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9815" */}
      {`${size}` === `default` &&
        `${status}` === `success` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=success, stoke linecap=butt" id="204:9815" type="COMPONENT" */}
            <div
              style={{
                ...{ width: "120px", height: "120px", flexShrink: "0" },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9816" type="FRAME" */}
              <QodeSvg2049816
                style={{
                  ...{ width: "120px", height: "120px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="check" id="204:9819" type="INSTANCE" */}
              <Icon.QodeCheck
                style={{
                  ...{ width: "28px", height: "28px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </>
        )}
      {/* id="204:9820" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${stokeLinecap}` === `round` && (
          <>
            {/* name="size=default, status=default, stoke linecap=round" id="204:9820" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9821" type="FRAME" */}
              <QodeSvg2049821
                style={{ ...{ width: "120px", height: "120px" }, ...{} }}
                {...{}}
              />
              {/* name="text-wrapper" id="204:9824" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "46px",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "120px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-xlarge, 20px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`50%`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="204:9826" */}
      {`${size}` === `default` &&
        `${status}` === `default` &&
        `${stokeLinecap}` === `butt` && (
          <>
            {/* name="size=default, status=default, stoke linecap=butt" id="204:9826" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                ...style,
              }}
            >
              {/* name="progress-circle" id="204:9827" type="FRAME" */}
              <QodeSvg2049827
                style={{ ...{ width: "120px", height: "120px" }, ...{} }}
                {...{}}
              />
              {/* name="text-wrapper" id="204:9830" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "46px",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "120px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-xlarge, 20px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`50%`}</span>
              </div>
            </div>
          </>
        )}
    </>
  )
}
