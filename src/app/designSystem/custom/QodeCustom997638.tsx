// id="99:7638"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom997638Props {
  from?: "Recipient" | "Sender"
}

export const QodeCustom997638: React.FC<
  QodeCustom997638Props & { style?: CSSProperties }
> = ({ from = "Recipient", ...rest }) => {
  return (
    <>
      {/* name="Email/From" id="99:7638" type="COMPONENT_SET" */}
      {/* id="99:7637" */}
      {`${from}` === `Recipient` && (
        <>
          {/* name="From=Recipient" id="99:7637" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "209px",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* name="avatar" id="99:7645" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "28px",
                height: "28px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--font-size-large, 16px)",
                flexShrink: "0",
                borderRadius: "388.5px",
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
              {/* name="user-large" id="I99:7645;5629:57" type="INSTANCE" */}
              <Icon.QodeUserLarge
                style={{
                  display: "flex",
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  padding: "1.4px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "7px",
                  top: "7px",
                }}
                {...{}}
              />
              {/* name="img" id="I99:7645;5629:58" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "28px",
                  height: "28px",
                  padding: "var(--size-padding-paddingxs, 7px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "7px",
                  position: "absolute",
                  borderRadius: "388.5px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                {/* name="img" id=I99:7645;5629:58 type=FRAME */}
                <></>
              </div>
              {/* name="Badge" id="I99:7645;5629:59" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "5.25px",
                  height: "5.25px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "0.875px",
                  bottom: "0.875px",
                  borderRadius: "3.111px",
                  border:
                    "0.875px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                  background: "var(--color-error-colorerror, #ff6542)",
                }}
              >
                {/* name="Badge" id=I99:7645;5629:59 type=INSTANCE */}
                <></>
              </Flex>
              {/* name="opentoWork" id="I99:7645;5629:60" type="FRAME" */}
              <div
                style={{ width: "28px", height: "28px", position: "absolute" }}
              >
                {/* name="Ellipse 2 (Stroke)" id="I99:7645;5629:61" type="VECTOR" */}
                <Flex
                  style={{
                    width: "28px",
                    height: "28px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                  }}
                >
                  {/* name="Ellipse 2 (Stroke)" id=I99:7645;5629:61 type=VECTOR */}
                  <></>
                </Flex>
                {/* name="Vector" id="I99:7645;5629:62" type="VECTOR" */}
                <Flex
                  style={{
                    width: "18.767px",
                    height: "19.094px",
                    transform: "rotate(9.982deg)",
                    flexShrink: "0",
                    fill: "var(--color-neutral-text-colortextsolid, #fff)",
                  }}
                >
                  {/* name="Vector" id=I99:7645;5629:62 type=VECTOR */}
                  <></>
                </Flex>
              </div>
            </Flex>
            {/* name="Frame 37302" id="99:7633" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Nguyen Quoc Thai`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`·`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`6:08 PM`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="99:7639" */}
      {`${from}` === `Sender` && (
        <>
          {/* name="From=Sender" id="99:7639" type="COMPONENT" */}
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            {/* name="Frame 37301" id="99:7640" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "28px",
                height: "28px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8.75px",
                borderRadius: "874.125px",
                border:
                  "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
                background:
                  "url(<path-to-image>) lightgray 50% / cover no-repeat",
              }}
            >
              {/* name="Frame 37301" id=99:7640 type=FRAME */}
              <></>
            </div>
            {/* name="Frame 37302" id="99:7641" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Hung Nhan`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`·`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`6:08 PM`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
