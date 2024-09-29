// id="1987:47738"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"
import QodeSvg198759261 from "@designSystem/icon/svg/QodeSvg198759261"
import QodeSvg198759264 from "@designSystem/icon/svg/QodeSvg198759264"
import { QodeCustom182845848 } from "@designSystem/custom/QodeCustom182845848"
import QodeSvg199059997 from "@designSystem/icon/svg/QodeSvg199059997"
import QodeSvg199059999 from "@designSystem/icon/svg/QodeSvg199059999"

export interface QodeCustom198747738Props {
  verified?: "false" | "true"
  size?: "38" | "72"
}

export const QodeCustom198747738: React.FC<
  QodeCustom198747738Props & { style?: CSSProperties }
> = ({ verified = "false", size = "38", style, ...rest }) => {
  return (
    <>
      {/* name="Profile/Avatar" id="1987:47738" type="COMPONENT_SET" */}
      {/* id="1987:47736" */}
      {`${verified}` === `false` && `${size}` === `38` && (
        <>
          {/* name="verified=false, size=38" id="1987:47736" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "38px",
                height: "38px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="1987:47720" type="INSTANCE" */}
            <QodeCustom266995
              style={{
                ...{
                  display: "flex",
                  width: "38px",
                  height: "38px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Round",
                state: "Default",
              }}
            />
          </div>
        </>
      )}
      {/* id="1990:59991" */}
      {`${verified}` === `false` && `${size}` === `72` && (
        <>
          {/* name="verified=false, size=72" id="1990:59991" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "72px",
                height: "72px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="avatar" id="1990:59992" type="INSTANCE" */}
            <QodeCustom266995
              style={{
                ...{
                  display: "flex",
                  width: "72px",
                  height: "72px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Round",
                state: "Default",
              }}
            />
          </div>
        </>
      )}
      {/* id="1987:47739" */}
      {`${verified}` === `true` && `${size}` === `38` && (
        <>
          {/* name="verified=true, size=38" id="1987:47739" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "38px", height: "38px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="avatar" id="1987:47740" type="INSTANCE" */}
            <QodeCustom266995
              style={{
                ...{
                  display: "flex",
                  width: "38px",
                  height: "38px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Round",
                state: "Default",
              }}
            />
            {/* name="Verified ring" id="1987:59260" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "46px", height: "55px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="Group 57" id="1987:59261" type="GROUP" */}
              <QodeSvg198759261
                style={{
                  ...{ width: "46px", height: "46px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Icon" id="1987:59263" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "18px", height: "18px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 103" id="1987:59264" type="ELLIPSE" */}
                <QodeSvg198759264
                  style={{
                    ...{
                      width: "18px",
                      height: "18px",
                      flexShrink: "0",
                      fill: "var(--blue-techblue-50, #1597f4)",
                      strokeWidth: "1px",
                      stroke: "#FFF",
                    },
                    ...{},
                  }}
                  {...{}}
                />
                {/* name="shield-check" id="1987:59265" type="INSTANCE" */}
                <QodeCustom182845848
                  style={{
                    ...{ width: "14px", height: "14px", flexShrink: "0" },
                    ...{},
                  }}
                  {...{}}
                />
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="1990:59993" */}
      {`${verified}` === `true` && `${size}` === `72` && (
        <>
          {/* name="verified=true, size=72" id="1990:59993" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "72px", height: "72px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="avatar" id="1990:59994" type="INSTANCE" */}
            <QodeCustom266995
              style={{
                ...{
                  display: "flex",
                  width: "72px",
                  height: "72px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  flexShrink: "0",
                  borderRadius: "499.5px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                },
                ...{},
              }}
              {...{
                opentowork: true,
                img: true,
                type: "Round",
                state: "Default",
              }}
            />
            {/* name="Verified ring" id="1990:59995" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "84px", height: "95.158px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="ring" id="1990:59997" type="ELLIPSE" */}
              <QodeSvg199059997
                style={{
                  ...{
                    width: "84px",
                    height: "84px",
                    flexShrink: "0",
                    strokeWidth: "3px",
                    stroke: "#2ECDFF",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Icon" id="1990:59998" type="GROUP" */}
              <Flex
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
              >
                {/* name="Ellipse 103" id="1990:59999" type="ELLIPSE" */}
                <QodeSvg199059999
                  style={{
                    ...{
                      width: "24px",
                      height: "24px",
                      flexShrink: "0",
                      fill: "var(--blue-techblue-50, #1597f4)",
                      strokeWidth: "1px",
                      stroke: "#FFF",
                    },
                    ...{},
                  }}
                  {...{}}
                />
                {/* name="shield-check" id="1990:60000" type="INSTANCE" */}
                <QodeCustom182845848
                  style={{
                    ...{
                      width: "18.667px",
                      height: "18.667px",
                      flexShrink: "0",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </Flex>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
