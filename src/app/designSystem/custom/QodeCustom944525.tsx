// id="94:4525"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI864880562960 from "@designSystem/icon/svg/QodeSvgI864880562960"
import QodeSvgI37821104562960 from "@designSystem/icon/svg/QodeSvgI37821104562960"

export interface QodeCustom944525Props {
  property_1?: "Header" | "Variant2"
}

export const QodeCustom944525: React.FC<
  QodeCustom944525Props & { style?: CSSProperties }
> = ({ property_1 = "Header", ...rest }) => {
  return (
    <>
      {/* name="Connect/Header" id="94:4525" type="COMPONENT_SET" */}
      {/* id="86:4907" */}
      {`${property_1}` === `Header` && (
        <>
          {/* name="Property 1=Header" id="86:4907" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "620px",
              height: "82px",
              padding: "16px 20px",
              alignItems: "center",
              gap: "20px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="avatar" id="86:4879" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flex: "1 0 0",
              }}
            >
              {/* name="avatar" id="86:4880" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "666px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I86:4880;5629:57" type="INSTANCE" */}
                <Icon.QodeUserLarge
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "12px",
                    top: "12px",
                  }}
                  {...{}}
                />
                {/* name="img" id="I86:4880;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    padding: "var(--size-padding-paddingxs, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    position: "absolute",
                    borderRadius: "666px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I86:4880;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I86:4880;5629:59" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1.5px",
                    bottom: "1.5px",
                    borderRadius: "5.333px",
                    border:
                      "1.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I86:4880;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I86:4880;5629:60" type="FRAME" */}
                <QodeSvgI864880562960
                  style={{
                    width: "48px",
                    height: "48px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Frame 37305" id="86:4881" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Nguyen Quoc Thai`}</span>
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Senior Software Developer`}</span>
              </div>
            </div>
            {/* name="Right" id="86:4884" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* name="Contacts" id="86:4885" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {/* name="Contact type" id="86:4886" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    padding: "var(--size-size-sizexxs-6px, 6px)",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="linkedin" id="I86:4886;78:7669" type="INSTANCE" */}
                  <Icon.QodeLinkedin
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                  {/* name="Indicator" id="I86:4886;77:3593" type="ELLIPSE" */}
                  <Flex
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      right: "-2px",
                      top: "-2px",
                      borderRadius: "8px",
                      background: "var(--red-red-40, #f85631)",
                    }}
                  >
                    {/* name="Indicator" id=I86:4886;77:3593 type=ELLIPSE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="Contact type" id="86:4887" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    padding: "var(--size-size-sizexxs-6px, 6px)",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="envelope" id="I86:4887;78:7669" type="INSTANCE" */}
                  <Icon.QodeEnvelope
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                  {/* name="Indicator" id="I86:4887;77:3593" type="ELLIPSE" */}
                  <Flex
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      right: "-2px",
                      top: "-2px",
                      borderRadius: "8px",
                      background: "var(--red-red-40, #f85631)",
                    }}
                  >
                    {/* name="Indicator" id=I86:4887;77:3593 type=ELLIPSE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="Contact type" id="86:4888" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "36px",
                    padding: "var(--size-size-sizexxs-6px, 6px)",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="phone" id="I86:4888;78:7669" type="INSTANCE" */}
                  <Icon.QodePhone
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                  {/* name="Indicator" id="I86:4888;77:3593" type="ELLIPSE" */}
                  <Flex
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      right: "-2px",
                      top: "-2px",
                      borderRadius: "8px",
                      background: "var(--red-red-40, #f85631)",
                    }}
                  >
                    {/* name="Indicator" id=I86:4888;77:3593 type=ELLIPSE */}
                    <></>
                  </Flex>
                </Flex>
              </div>
              {/* name="🎰 icon" id="86:4889" type="INSTANCE" */}
              <Icon.QodeXmark
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="378:21102" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="378:21102" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "620px",
              height: "82px",
              padding: "16px 20px",
              alignItems: "center",
              gap: "20px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            {/* name="avatar" id="378:21103" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flex: "1 0 0",
              }}
            >
              {/* name="avatar" id="378:21104" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "48px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--font-size-large, 16px)",
                  borderRadius: "666px",
                  background: "var(--color-success-colorsuccesshover, #a3c73e)",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                  }}
                >{`AW`}</span>
                {/* name="user-large" id="I378:21104;5629:57" type="INSTANCE" */}
                <Icon.QodeUserLarge
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "12px",
                    top: "12px",
                  }}
                  {...{}}
                />
                {/* name="img" id="I378:21104;5629:58" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                    padding: "var(--size-padding-paddingxs, 12px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    position: "absolute",
                    borderRadius: "666px",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="img" id=I378:21104;5629:58 type=FRAME */}
                  <></>
                </div>
                {/* name="Badge" id="I378:21104;5629:59" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "1.5px",
                    bottom: "1.5px",
                    borderRadius: "5.333px",
                    border:
                      "1.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                    background: "var(--color-error-colorerror, #ff6542)",
                  }}
                >
                  {/* name="Badge" id=I378:21104;5629:59 type=INSTANCE */}
                  <></>
                </Flex>
                {/* name="opentoWork" id="I378:21104;5629:60" type="FRAME" */}
                <QodeSvgI37821104562960
                  style={{
                    width: "48px",
                    height: "48px",
                    position: "absolute",
                  }}
                  {...{}}
                />
              </Flex>
              {/* name="Frame 37305" id="378:21105" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2px",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Nguyen Quoc Thai`}</span>
                <span
                  style={{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Senior Software Developer`}</span>
              </div>
            </div>
            {/* name="Finding" id="391:31684" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "216px",
                height: "40px",
                padding: "8px 24px",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                background: "var(--neutral-gray-10, #e3e3e3)",
              }}
            >
              {/* name="spinner" id="I391:31684;391:31664" type="INSTANCE" */}
              <Icon.QodeSpinner
                style={{ width: "24px", height: "24px", flexShrink: "0" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Finding contact info`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
