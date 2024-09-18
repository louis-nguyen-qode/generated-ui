// id="26:6994"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom124630 } from "@designSystem/custom/QodeCustom124630"
import QodeSvg267003 from "@designSystem/icon/svg/QodeSvg267003"
import QodeSvg267010 from "@designSystem/icon/svg/QodeSvg267010"
import QodeSvg267015 from "@designSystem/icon/svg/QodeSvg267015"

export interface QodeCustom266994Props {
  opentowork?: boolean
  badge?: boolean
  img?: boolean
  icon?: boolean
  initials?: string
  type?: "Round" | "Square"
  state?: "Default" | "Hover"
}

export const QodeCustom266994: React.FC<
  QodeCustom266994Props & { style?: CSSProperties }
> = ({
  opentowork = true,
  badge = false,
  img = false,
  icon = true,
  initials = "AW",
  type = "Round",
  state = "Default",
  ...rest
}) => {
  return (
    <>
      {/* name="avatar" id="26:6994" type="COMPONENT_SET" */}
      {/* id="26:6995" */}
      {`${type}` === `Round` && `${state}` === `Default` && (
        <>
          {/* name="Type=Round, State=Default" id="26:6995" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "32px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderround, 999px)",
              background: "var(--color-success-colorsuccesshover, #a3c73e)",
            }}
          >
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`AW`}</span>
            {/* name="user-large" id="26:7000" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                left: "8px",
                top: "8px",
              }}
              {...{}}
            />
            {/* name="img" id="26:7001" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                position: "absolute",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "url(<path-to-image>) lightgray 50% / cover no-repeat",
              }}
            >
              {/* name="img" id=26:7001 type=FRAME */}
              <></>
            </div>
            {/* name="Badge" id="26:7002" type="INSTANCE" */}
            <QodeCustom124630
              style={{
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
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
            {/* name="opentoWork" id="26:7003" type="FRAME" */}
            <QodeSvg267003
              style={{ width: "32px", height: "32px", position: "absolute" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="26:6996" */}
      {`${type}` === `Square` && `${state}` === `Default` && (
        <>
          {/* name="Type=Square, State=Default" id="26:6996" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`AW`}</span>
            {/* name="user-large" id="26:7007" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                left: "8px",
                top: "8px",
              }}
              {...{}}
            />
            {/* name="img" id="26:7008" type="FRAME" */}
            <div
              style={{
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
              }}
            >
              {/* name="img" id=26:7008 type=FRAME */}
              <></>
            </div>
            {/* name="Badge" id="26:7009" type="INSTANCE" */}
            <QodeCustom124630
              style={{
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
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
          </div>
        </>
      )}
      {/* id="26:6997" */}
      {`${type}` === `Round` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Round, State=Hover" id="26:6997" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "32px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderround, 999px)",
              background: "var(--color-success-colorsuccesshover, #a3c73e)",
            }}
          >
            {/* name="Hover outline" id="26:7010" type="ELLIPSE" */}
            <QodeSvg267010
              style={{
                width: "36px",
                height: "36px",
                position: "absolute",
                left: "-2px",
                top: "-2px",
                strokeWidth: "1px",
                stroke: "var(--color-primary-colorprimaryhover, #5783c9)",
              }}
              {...{}}
            />
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`AW`}</span>
            {/* name="user-large" id="26:7012" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                left: "8px",
                top: "8px",
              }}
              {...{}}
            />
            {/* name="img" id="26:7013" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "32px",
                height: "32px",
                padding: "var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                position: "absolute",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "url(<path-to-image>) lightgray 50% / cover no-repeat",
              }}
            >
              {/* name="img" id=26:7013 type=FRAME */}
              <></>
            </div>
            {/* name="Badge" id="26:7014" type="INSTANCE" */}
            <QodeCustom124630
              style={{
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
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
            {/* name="opentoWork" id="26:7015" type="FRAME" */}
            <QodeSvg267015
              style={{ width: "32px", height: "32px", position: "absolute" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="26:6998" */}
      {`${type}` === `Square` && `${state}` === `Hover` && (
        <>
          {/* name="Type=Square, State=Hover" id="26:6998" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Hover outline" id="26:7018" type="RECTANGLE" */}
            <Flex
              style={{
                width: "36px",
                height: "36px",
                position: "absolute",
                left: "-2px",
                top: "-2px",
                borderRadius: "10px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryhover, #5783c9)",
              }}
            >
              {/* name="Hover outline" id=26:7018 type=RECTANGLE */}
              <></>
            </Flex>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--color-neutral-text-colortext, #000)",
                textAlign: "center",
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`AW`}</span>
            {/* name="user-large" id="26:7020" type="INSTANCE" */}
            <Icon.QodeUserLarge
              style={{
                width: "16px",
                height: "16px",
                position: "absolute",
                left: "8px",
                top: "8px",
              }}
              {...{}}
            />
            {/* name="img" id="26:7021" type="FRAME" */}
            <div
              style={{
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
              }}
            >
              {/* name="img" id=26:7021 type=FRAME */}
              <></>
            </div>
            {/* name="Badge" id="26:7022" type="INSTANCE" */}
            <QodeCustom124630
              style={{
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
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                background: "var(--color-error-colorerror, #ff6542)",
              }}
              {...{ count: "21", icon: <Icon.QodeLinkedin />, type: "dot" }}
            />
          </div>
        </>
      )}
    </>
  )
}
