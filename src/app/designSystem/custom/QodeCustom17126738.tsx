// id="171:26738"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom17126738Props {
  state?: "default" | "hover"
  direction?: "left" | "right"
}

export const QodeCustom17126738: React.FC<
  QodeCustom17126738Props & { style?: CSSProperties }
> = ({ state = "default", direction = "left", ...rest }) => {
  return (
    <>
      {/* name=".pagination__more" id="171:26738" type="COMPONENT_SET" */}
      {/* id="171:26737" */}
      {`${state}` === `default` && `${direction}` === `left` && (
        <>
          {/* name="state=default, direction=left" id="171:26737" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
              padding: "var(--size-padding-paddingxxs, 4px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            {/* name="Icon" id="171:26735" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="171:26745" */}
      {`${state}` === `hover` && `${direction}` === `left` && (
        <>
          {/* name="state=hover, direction=left" id="171:26745" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
              padding: "var(--size-padding-paddingxxs, 4px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            {/* name="Icon" id="171:26746" type="INSTANCE" */}
            <Icon.QodeChevronsLeft
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="171:26948" */}
      {`${state}` === `default` && `${direction}` === `right` && (
        <>
          {/* name="state=default, direction=right" id="171:26948" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
              padding: "var(--size-padding-paddingxxs, 4px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            {/* name="Icon" id="171:26949" type="INSTANCE" */}
            <Icon.QodeEllipsis
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="171:26950" */}
      {`${state}` === `hover` && `${direction}` === `right` && (
        <>
          {/* name="state=hover, direction=right" id="171:26950" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "var(--line-height-lineheighheading3, 32px)",
              height: "var(--size-height-controlheight, 32px)",
              padding: "var(--size-padding-paddingxxs, 4px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            }}
          >
            {/* name="Icon" id="171:26951" type="INSTANCE" */}
            <Icon.QodeChevronsRight
              style={{
                width: "var(--font-size-base, 14px)",
                height: "var(--font-size-base, 14px)",
                flexShrink: "0",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
