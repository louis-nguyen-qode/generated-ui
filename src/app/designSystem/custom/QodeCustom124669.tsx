// id="124:669"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom124669Props {
  showLabel?: boolean
  status?: "success" | "error" | "warning" | "processing" | "default"
}

export const QodeCustom124669: React.FC<
  QodeCustom124669Props & { style?: CSSProperties }
> = ({ showLabel = true, status = "success", ...rest }) => {
  return (
    <>
      {/* name="Badge__Status" id="124:669" type="COMPONENT_SET" */}
      {/* id="124:668" */}
      {`${status}` === `success` && (
        <>
          {/* name="status=success" id="124:668" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="124:665" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background: "var(--background-bg-green-hover, #11a620)",
              }}
            >
              {/* name="Dot" id=124:665 type=FRAME */}
              <></>
            </div>
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
            >{`Success`}</span>
          </div>
        </>
      )}
      {/* id="124:673" */}
      {`${status}` === `error` && (
        <>
          {/* name="status=error" id="124:673" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="124:674" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background: "var(--color-error-colorerror, #dc3812)",
              }}
            >
              {/* name="Dot" id=124:674 type=FRAME */}
              <></>
            </div>
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
            >{`Error`}</span>
          </div>
        </>
      )}
      {/* id="124:676" */}
      {`${status}` === `warning` && (
        <>
          {/* name="status=warning" id="124:676" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="124:677" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background: "var(--gold-gold-50, #f5a60c)",
              }}
            >
              {/* name="Dot" id=124:677 type=FRAME */}
              <></>
            </div>
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
            >{`Warning`}</span>
          </div>
        </>
      )}
      {/* id="124:679" */}
      {`${status}` === `processing` && (
        <>
          {/* name="status=processing" id="124:679" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="124:680" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background: "var(--neutral-gray-80, #565656)",
              }}
            >
              {/* name="Dot" id=124:680 type=FRAME */}
              <></>
            </div>
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
            >{`Processing`}</span>
          </div>
        </>
      )}
      {/* id="124:682" */}
      {`${status}` === `default` && (
        <>
          {/* name="status=default" id="124:682" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="124:683" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "6px",
                height: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="Dot" id=124:683 type=FRAME */}
              <></>
            </div>
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
            >{`Default`}</span>
          </div>
        </>
      )}
    </>
  )
}
