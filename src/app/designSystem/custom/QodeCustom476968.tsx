// id="47:6968"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom476968Props {
  size?: "28" | "L" | "32"
}

export const QodeCustom476968: React.FC<
  QodeCustom476968Props & { style?: CSSProperties }
> = ({ size = "L", style, ...rest }) => {
  return (
    <>
      {/* name="_Table/Cell thumbnail" id="47:6968" type="COMPONENT_SET" */}
      {/* id="47:6969" */}
      {`${size}` === `L` && (
        <>
          {/* name="Size=L" id="47:6969" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "38px",
                height: "38px",
                padding: "7px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              },
              ...style,
            }}
          >
            {/* name="remix-icons/fill/media/image-fill" id="47:6972" type="INSTANCE" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="47:6970" */}
      {`${size}` === `32` && (
        <>
          {/* name="Size=32" id="47:6970" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              },
              ...style,
            }}
          >
            {/* name="remix-icons/fill/media/image-fill" id="47:6973" type="INSTANCE" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="47:6971" */}
      {`${size}` === `28` && (
        <>
          {/* name="Size=28" id="47:6971" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "28px",
                height: "28px",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "4px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-gray-50, #1a1a1a)",
                background:
                  "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
              },
              ...style,
            }}
          >
            {/* name="remix-icons/fill/media/image-fill" id="47:6974" type="INSTANCE" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
