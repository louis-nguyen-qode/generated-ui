// id="24:4886"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom244886Props {
  location?: string
  companyName?: string
  logo?: "No" | "Yes"
}

export const QodeCustom244886: React.FC<
  QodeCustom244886Props & { style?: CSSProperties }
> = ({
  location = "Location & Total Time",
  companyName = "Company Name",
  logo = "Yes",
  ...rest
}) => {
  return (
    <>
      {/* name="companyItem" id="24:4886" type="COMPONENT_SET" */}
      {/* id="24:4887" */}
      {`${logo}` === `Yes` && (
        <>
          {/* name="❓Logo=Yes" id="24:4887" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
            }}
          >
            {/* name="avatar" id="24:4888" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
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
              {/* name="user-large" id="I24:4888;2681:40498" type="INSTANCE" */}
              <Icon.QodeUserLarge
                style={{
                  display: "flex",
                  width: "21px",
                  height: "21px",
                  padding: "2.1px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "10.5px",
                  top: "10.5px",
                }}
                {...{}}
              />
              {/* name="img" id="I24:4888;2681:40501" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "42px",
                  height: "42px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "url(<path-to-image>) lightgray 7px 7px / 66.667% 66.667% no-repeat",
                }}
              >
                {/* name="img" id=I24:4888;2681:40501 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I24:4888;2820:1278" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="Badge" id=I24:4888;2820:1278 type=INSTANCE */}
                <></>
              </Flex>
              {/* name="opentoWork" id="I24:4888;2894:1086" type="FRAME" */}
              <div
                style={{ width: "42px", height: "42px", position: "absolute" }}
              >
                {/* name="Ellipse 2 (Stroke)" id="I24:4888;2894:1087" type="VECTOR" */}
                <Flex
                  style={{
                    width: "42px",
                    height: "42px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                  }}
                >
                  {/* name="Ellipse 2 (Stroke)" id=I24:4888;2894:1087 type=VECTOR */}
                  <></>
                </Flex>
                {/* name="Vector" id="I24:4888;2894:1088" type="VECTOR" */}
                <Flex
                  style={{
                    width: "28.151px",
                    height: "28.64px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortextsolid, #fff)",
                  }}
                >
                  {/* name="Vector" id=I24:4888;2894:1088 type=VECTOR */}
                  <></>
                </Flex>
              </div>
            </Flex>
            {/* name="content" id="24:4889" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Company Name`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Location & Total Time`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="24:4892" */}
      {`${logo}` === `No` && (
        <>
          {/* name="❓Logo=No" id="24:4892" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "496px",
              alignItems: "flex-start",
              gap: "var(--size-margin-marginsm, 12px)",
            }}
          >
            {/* name="avatar" id="24:4893" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "42px",
                height: "42px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderround, 999px)",
                background:
                  "linear-gradient(159deg, rgba(141, 185, 17, 0.00) 30.23%, #8DB911 113.12%), var(--color-primary-colorprimarybghover, #abc1e4)",
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
              {/* name="buildings" id="I24:4893;2681:40498" type="INSTANCE" */}
              <Icon.QodeBuildings
                style={{
                  width: "21px",
                  height: "21px",
                  position: "absolute",
                  left: "10.5px",
                  top: "10.5px",
                }}
                {...{}}
              />
              {/* name="img" id="I24:4893;2681:40501" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "42px",
                  height: "42px",
                  padding: "var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderround, 999px)",
                  background:
                    "url(<path-to-image>) lightgray 8px 8px / 61.905% 61.905% no-repeat",
                }}
              >
                {/* name="img" id=I24:4893;2681:40501 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I24:4893;2820:1278" type="INSTANCE" */}
              <Flex
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
              >
                {/* name="Badge" id=I24:4893;2820:1278 type=INSTANCE */}
                <></>
              </Flex>
              {/* name="opentoWork" id="I24:4893;2894:1086" type="FRAME" */}
              <div
                style={{ width: "42px", height: "42px", position: "absolute" }}
              >
                {/* name="Ellipse 2 (Stroke)" id="I24:4893;2894:1087" type="VECTOR" */}
                <Flex
                  style={{
                    width: "42px",
                    height: "42px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                  }}
                >
                  {/* name="Ellipse 2 (Stroke)" id=I24:4893;2894:1087 type=VECTOR */}
                  <></>
                </Flex>
                {/* name="Vector" id="I24:4893;2894:1088" type="VECTOR" */}
                <Flex
                  style={{
                    width: "28.151px",
                    height: "28.64px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortextsolid, #fff)",
                  }}
                >
                  {/* name="Vector" id=I24:4893;2894:1088 type=VECTOR */}
                  <></>
                </Flex>
              </div>
            </Flex>
            {/* name="content" id="24:4894" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "var(--line-height-lineheighlg, 24px) /* 150% */",
                }}
              >{`Company Name`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                }}
              >{`Location & Total Time`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
