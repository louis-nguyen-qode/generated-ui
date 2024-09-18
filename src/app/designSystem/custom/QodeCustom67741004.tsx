// id="677:41004"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg67740998 from "@designSystem/icon/svg/QodeSvg67740998"
import QodeSvg67741007 from "@designSystem/icon/svg/QodeSvg67741007"

export interface QodeCustom67741004Props {
  property_1?: "Default" | "Variant2"
}

export const QodeCustom67741004: React.FC<
  QodeCustom67741004Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Processing 2" id="677:41004" type="COMPONENT_SET" */}
      {/* id="677:41000" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="677:41000" type="COMPONENT" */}
          <div style={{ width: "100px", height: "12px", flexShrink: "0" }}>
            {/* name="Generating" id="677:40997" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "100px",
                height: "12px",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Generating" id=677:40997 type=FRAME */}
              <></>
            </div>
            {/* name="Ellipse 94" id="677:40998" type="ELLIPSE" */}
            <QodeSvg67740998
              style={{
                width: "12px",
                height: "12px",
                flexShrink: "0",
                fill: "linear-gradient(134deg, #0095FF 24.81%, #4A3BFF 79.72%)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:41005" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="677:41005" type="COMPONENT" */}
          <div style={{ width: "100px", height: "12px", flexShrink: "0" }}>
            {/* name="Generating" id="677:41006" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "100px",
                height: "12px",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Generating" id=677:41006 type=FRAME */}
              <></>
            </div>
            {/* name="Ellipse 94" id="677:41007" type="ELLIPSE" */}
            <QodeSvg67741007
              style={{
                width: "12px",
                height: "12px",
                flexShrink: "0",
                fill: "linear-gradient(134deg, #0095FF 24.81%, #4A3BFF 79.72%)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
