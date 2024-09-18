// id="311:23053"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom31123053Props {
  status?: "upcoming" | "done" | "rejected"
}

export const QodeCustom31123053: React.FC<
  QodeCustom31123053Props & { style?: CSSProperties }
> = ({ status = "upcoming", ...rest }) => {
  return (
    <>
      {/* name="Interviewed/Status" id="311:23053" type="COMPONENT_SET" */}
      {/* id="311:23052" */}
      {`${status}` === `upcoming` && (
        <>
          {/* name="status=upcoming" id="311:23052" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Badge__Status" id="434:26889" type="INSTANCE" */}
            <Flex style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="Dot" id="I434:26889;124:665" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--background-bg-green-hover, #11a620)",
                }}
              >
                {/* name="Dot" id=I434:26889;124:665 type=FRAME */}
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
              >{`Upcoming`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="311:23054" */}
      {`${status}` === `done` && (
        <>
          {/* name="status=done" id="311:23054" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Badge__Status" id="434:26991" type="INSTANCE" */}
            <Flex style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="Dot" id="I434:26991;124:683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
              >
                {/* name="Dot" id=I434:26991;124:683 type=FRAME */}
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
              >{`Interview finished`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="313:23659" */}
      {`${status}` === `rejected` && (
        <>
          {/* name="status=rejected" id="313:23659" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Badge__Status" id="434:27079" type="INSTANCE" */}
            <Flex style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* name="Dot" id="I434:27079;124:674" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "var(--size-size-sizexxs-6px, 6px)",
                  height: "var(--size-size-sizexxs-6px, 6px)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  background: "var(--color-error-colorerror, #dc3812)",
                }}
              >
                {/* name="Dot" id=I434:27079;124:674 type=FRAME */}
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
              >{`Missed`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
