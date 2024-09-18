// id="47:5443"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom475443Props {}

export const QodeCustom475443: React.FC<
  QodeCustom475443Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="State=Default, Style=Text" id="47:5443" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-size-sizexxs-6px, 6px)",
          borderRadius: "99px",
        }}
      >
        {/* name="heart" id="47:5444" type="INSTANCE" */}
        <Icon.QodeHeart style={{ width: "16px", height: "16px" }} {...{}} />
        <span
          style={{
            color: "var(--text-text-neutral-50, #1d1d1d)",
            textAlign: "center",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            textDecorationLine: "underline",
          }}
        >{`12 shortlisted`}</span>
      </div>
    </>
  )
}
