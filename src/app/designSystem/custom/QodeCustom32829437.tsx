// id="328:29437"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom66174 } from "@designSystem/custom/QodeCustom66174"

export interface QodeCustom32829437Props {}

export const QodeCustom32829437: React.FC<
  QodeCustom32829437Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, size=default, type=basic, status=default" id="328:29437" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "320px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "0px var(--size-padding-paddingsm, 12px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-white, #fff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-placeholder, #a7a7a7)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Select`}</span>
        {/* name="Icon" id="328:29573" type="INSTANCE" */}
        <QodeCustom66174
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
