// id="434:26797"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom43426797Props {
  showLabel?: boolean
  status?: "success" | "error" | "warning" | "processing" | "default"
}

export const QodeCustom43426797: React.FC<
  QodeCustom43426797Props & { style?: CSSProperties }
> = ({ showLabel = true, status = "success", style, ...rest }) => {
  return (
    <>
      {/* name="Badge__Status" id="434:26797" type="COMPONENT_SET" */}
      {/* id="434:26798" */}
      {`${status}` === `success` && (
        <>
          {/* name="status=success" id="434:26798" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Dot" id="434:26803" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--background-bg-green-hover, #11a620)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Success`}</span>
          </div>
        </>
      )}
      {/* id="434:26799" */}
      {`${status}` === `error` && (
        <>
          {/* name="status=error" id="434:26799" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Dot" id="434:26805" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--color-error-colorerror, #dc3812)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Error`}</span>
          </div>
        </>
      )}
      {/* id="434:26800" */}
      {`${status}` === `warning` && (
        <>
          {/* name="status=warning" id="434:26800" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Dot" id="434:26807" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--gold-gold-50, #f5a60c)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Warning`}</span>
          </div>
        </>
      )}
      {/* id="434:26801" */}
      {`${status}` === `processing` && (
        <>
          {/* name="status=processing" id="434:26801" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Dot" id="434:26809" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--neutral-gray-80, #565656)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Processing`}</span>
          </div>
        </>
      )}
      {/* id="434:26802" */}
      {`${status}` === `default` && (
        <>
          {/* name="status=default" id="434:26802" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Dot" id="434:26811" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Default`}</span>
          </div>
        </>
      )}
    </>
  )
}
