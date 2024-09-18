// id="99:7620"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom997639 } from "@designSystem/custom/QodeCustom997639"

export interface QodeCustom997620Props {}

export const QodeCustom997620: React.FC<
  QodeCustom997620Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Email/Content" id="99:7620" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          },
          ...style,
        }}
      >
        {/* name="Email/From" id="99:7654" type="INSTANCE" */}
        <QodeCustom997639
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
          {...{ from: "Sender" }}
        />
        <span
          style={{
            ...{
              alignSelf: "stretch",
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
        >{`Hi Thai,

I’m Hung from Qode. We’re expanding our team and are searching for a talented Senior Software Developer to join us. Your profile impressed us, and your background seems like a great fit for what we’re looking for. I’d love to connect and discuss whether you might be interested in exploring new opportunities with us. Looking forward to the chance to chat!`}</span>
      </div>
    </>
  )
}
