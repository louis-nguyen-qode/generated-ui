// id="1:2080"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom12055 } from "@designSystem/custom/QodeCustom12055"
import { QodeCustom12062 } from "@designSystem/custom/QodeCustom12062"

export interface QodeCustom12080Props {}

export const QodeCustom12080: React.FC<
  QodeCustom12080Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Square, State=Default" id="1:2080" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "32px",
            height: "32px",
            padding: "0px var(--size-padding-paddingxxs, 4px)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--font-size-large, 16px)",
            flexShrink: "0",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--color-success-colorsuccesshover, #a3c73e)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              alignSelf: "stretch",
              color: "var(--color-neutral-text-colortext, #000)",
              textAlign: "center",
              fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
              fontSize: "var(--font-size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "var(--line-height-lineheighsm, 20px) /* 166.667% */",
            },
            ...{},
          }}
        >{`AW`}</span>
        {/* name="user-large" id="1:2082" type="INSTANCE" */}
        <QodeCustom12055
          style={{
            ...{
              width: "16px",
              height: "16px",
              position: "absolute",
              left: "8px",
              top: "8px",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="img" id="1:2083" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "32px",
              height: "32px",
              padding: "var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              position: "absolute",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "url(<path-to-image>) lightgray 50% / cover no-repeat",
            },
            ...{},
          }}
        >
          <></>
        </div>
        {/* name="Badge" id="1:2084" type="INSTANCE" */}
        <QodeCustom12062
          style={{
            ...{
              display: "flex",
              width: "var(--size-size-sizexxs-6px, 6px)",
              height: "var(--size-size-sizexxs-6px, 6px)",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: "1px",
              bottom: "1px",
              borderRadius: "var(--style-radius-borderradiuslg, 8px)",
              border:
                "1px solid var(--color-neutral-background-colorbgcontainer, #fff)",
              background: "var(--color-error-colorerror, #ff6542)",
            },
            ...{},
          }}
          {...{ count: "21", type: "dot" }}
        />
      </div>
    </>
  )
}