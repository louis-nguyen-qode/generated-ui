// id="677:40838"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg67740840 from "@designSystem/icon/svg/QodeSvg67740840"
import QodeSvg67740843 from "@designSystem/icon/svg/QodeSvg67740843"
import QodeSvg67740846 from "@designSystem/icon/svg/QodeSvg67740846"
import QodeSvg67740849 from "@designSystem/icon/svg/QodeSvg67740849"

export interface QodeCustom67740838Props {
  property_1?: "Default" | "Variant2" | "Variant3" | "Variant4"
}

export const QodeCustom67740838: React.FC<
  QodeCustom67740838Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Generating" id="677:40838" type="COMPONENT_SET" */}
      {/* id="677:40839" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="677:40839" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "8px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
              boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="spinner" id="677:40840" type="INSTANCE" */}
            <QodeSvg67740840
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40842" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="677:40842" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "8px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
              boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="spinner" id="677:40843" type="INSTANCE" */}
            <QodeSvg67740843
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(-90deg)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40845" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="677:40845" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "8px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
              boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="spinner" id="677:40846" type="INSTANCE" */}
            <QodeSvg67740846
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40848" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="677:40848" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              padding: "8px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-white, #fff)",
              boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="spinner" id="677:40849" type="INSTANCE" */}
            <QodeSvg67740849
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(90deg)",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}