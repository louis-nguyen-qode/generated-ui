// id="559:30095"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom55930095Props {}

export const QodeCustom55930095: React.FC<
  QodeCustom55930095Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Interview/Badge/AI" id="559:30095" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding: "0px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            borderRadius: "0px 0px 6px 6px",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
            borderLeft:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-10, #64b9f5)",
            background:
              "linear-gradient(101deg, #CDF6FF 2.22%, #B8E1FF 97.78%)",
          },
          ...style,
        }}
      >
        {/* name="stars" id="559:30091" type="INSTANCE" */}
        <Icon.QodeStars
          style={{
            ...{
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
            },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`AI`}</span>
      </div>
    </>
  )
}
