// id="137:7877"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom11436670 } from "@designSystem/custom/QodeCustom11436670"
import { QodeCustom11436657 } from "@designSystem/custom/QodeCustom11436657"
import { QodeCustom11436649 } from "@designSystem/custom/QodeCustom11436649"
import { QodeCustom11437969 } from "@designSystem/custom/QodeCustom11437969"
import { QodeCustom11436678 } from "@designSystem/custom/QodeCustom11436678"
import { QodeCustom11436624 } from "@designSystem/custom/QodeCustom11436624"

export interface QodeCustom1377877Props {
  showIcon?: boolean
  status?: "success" | "error" | "warning" | "processing" | "waiting" | "stop"
}

export const QodeCustom1377877: React.FC<
  QodeCustom1377877Props & { style?: CSSProperties }
> = ({ showIcon = true, status = "success", style, ...rest }) => {
  return (
    <>
      {/* name="Tag__Status" id="137:7877" type="COMPONENT_SET" */}
      {/* id="137:7876" */}
      {`${status}` === `success` && (
        <>
          {/* name="status=success" id="137:7876" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-success-colorsuccessbg, #eefff0)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7873" type="INSTANCE" */}
            <QodeCustom11436670
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-success-colorsuccesstext, #11a620)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`success`}</span>
          </div>
        </>
      )}
      {/* id="137:7883" */}
      {`${status}` === `error` && (
        <>
          {/* name="status=error" id="137:7883" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-error-colorerrorbg, #fff7f4)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7884" type="INSTANCE" */}
            <QodeCustom11436657
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-error-colorerrortext, #dc3812)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`error`}</span>
          </div>
        </>
      )}
      {/* id="137:7887" */}
      {`${status}` === `warning` && (
        <>
          {/* name="status=warning" id="137:7887" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-warning-colorwarningbg, #fef8ec)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7888" type="INSTANCE" */}
            <QodeCustom11436649
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-warning-colorwarningtext, #f5a60c)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`warning`}</span>
          </div>
        </>
      )}
      {/* id="137:7891" */}
      {`${status}` === `processing` && (
        <>
          {/* name="status=processing" id="137:7891" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background: "var(--color-info-colorinfobg, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7892" type="INSTANCE" */}
            <QodeCustom11437969
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`processing`}</span>
          </div>
        </>
      )}
      {/* id="137:7895" */}
      {`${status}` === `waiting` && (
        <>
          {/* name="status=waiting" id="137:7895" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7896" type="INSTANCE" */}
            <QodeCustom11436678
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`waiting`}</span>
          </div>
        </>
      )}
      {/* id="137:7899" */}
      {`${status}` === `stop` && (
        <>
          {/* name="status=stop" id="137:7899" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding:
                  "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="137:7900" type="INSTANCE" */}
            <QodeCustom11436624
              style={{ ...{ width: "12px", height: "12px" }, ...{} }}
              {...{}}
            />
            <span
              style={{
                ...{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`stop`}</span>
          </div>
        </>
      )}
    </>
  )
}
