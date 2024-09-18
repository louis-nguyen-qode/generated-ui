// id="350:21381"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom35021381Props {
  showLabel?: boolean
  status?: "success" | "error" | "warning" | "processing" | "default"
}

export const QodeCustom35021381: React.FC<
  QodeCustom35021381Props & { style?: CSSProperties }
> = ({ showLabel = true, status = "success", ...rest }) => {
  return (
    <>
      {/* name="Badge__Status" id="350:21381" type="COMPONENT_SET" */}
      {/* id="350:21382" */}
      {`${status}` === `success` && (
        <>
          {/* name="status=success" id="350:21382" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="350:21387" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-success-colorsuccess, #11a620)",
              }}
            >
              {/* name="Dot" id=350:21387 type=FRAME */}
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
      {/* id="350:21383" */}
      {`${status}` === `error` && (
        <>
          {/* name="status=error" id="350:21383" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="350:21389" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #dc3812)",
              }}
            >
              {/* name="Dot" id=350:21389 type=FRAME */}
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
      {/* id="350:21384" */}
      {`${status}` === `warning` && (
        <>
          {/* name="status=warning" id="350:21384" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="350:21391" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--gold-gold-50, #f5a60c)",
              }}
            >
              {/* name="Dot" id=350:21391 type=FRAME */}
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
      {/* id="350:21385" */}
      {`${status}` === `processing` && (
        <>
          {/* name="status=processing" id="350:21385" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="350:21393" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-info-colorinfo, #464646)",
              }}
            >
              {/* name="Dot" id=350:21393 type=FRAME */}
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
      {/* id="350:21386" */}
      {`${status}` === `default` && (
        <>
          {/* name="status=default" id="350:21386" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Dot" id="350:21395" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "var(--size-size-sizexxs-6px, 6px)",
                height: "var(--size-size-sizexxs-6px, 6px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                border:
                  "2px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background:
                  "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              }}
            >
              {/* name="Dot" id=350:21395 type=FRAME */}
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
