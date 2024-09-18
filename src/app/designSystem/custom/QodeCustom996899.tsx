// id="99:6899"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI9968091702636317024380562546063 from "@designSystem/icon/svg/QodeSvgI9968091702636317024380562546063"
import QodeSvgI9968091702636317024384562546063 from "@designSystem/icon/svg/QodeSvgI9968091702636317024384562546063"
import QodeSvgI9968091702636317024339 from "@designSystem/icon/svg/QodeSvgI9968091702636317024339"
import QodeSvgI99681318217652 from "@designSystem/icon/svg/QodeSvgI99681318217652"
import QodeSvgI9973821143130 from "@designSystem/icon/svg/QodeSvgI9973821143130"
import QodeSvgI99738357057342 from "@designSystem/icon/svg/QodeSvgI99738357057342"
import QodeSvgI99738357057343 from "@designSystem/icon/svg/QodeSvgI99738357057343"
import QodeSvgI99738357057344 from "@designSystem/icon/svg/QodeSvgI99738357057344"
import QodeSvgI99738357057347 from "@designSystem/icon/svg/QodeSvgI99738357057347"
import QodeSvgI99738357057348 from "@designSystem/icon/svg/QodeSvgI99738357057348"
import QodeSvgI99738357057351 from "@designSystem/icon/svg/QodeSvgI99738357057351"
import QodeSvgI9968181141808 from "@designSystem/icon/svg/QodeSvgI9968181141808"
import QodeSvgI9968193513236 from "@designSystem/icon/svg/QodeSvgI9968193513236"
import QodeSvgI99690718217652 from "@designSystem/icon/svg/QodeSvgI99690718217652"
import QodeSvgI9969091143130 from "@designSystem/icon/svg/QodeSvgI9969091143130"
import QodeSvgI99691057057342 from "@designSystem/icon/svg/QodeSvgI99691057057342"
import QodeSvgI99691057057343 from "@designSystem/icon/svg/QodeSvgI99691057057343"
import QodeSvgI99691057057344 from "@designSystem/icon/svg/QodeSvgI99691057057344"
import QodeSvgI99691057057347 from "@designSystem/icon/svg/QodeSvgI99691057057347"
import QodeSvgI99691057057348 from "@designSystem/icon/svg/QodeSvgI99691057057348"
import QodeSvgI99691057057351 from "@designSystem/icon/svg/QodeSvgI99691057057351"
import QodeSvgI9969121141808 from "@designSystem/icon/svg/QodeSvgI9969121141808"
import QodeSvgI9969133513236 from "@designSystem/icon/svg/QodeSvgI9969133513236"

export interface QodeCustom996899Props {
  showSubject?: boolean
  showRecepients?: boolean
  property_1?: "Default" | "Variant2"
}

export const QodeCustom996899: React.FC<
  QodeCustom996899Props & { style?: CSSProperties }
> = ({
  showSubject = true,
  showRecepients = true,
  property_1 = "Default",
  ...rest
}) => {
  return (
    <>
      {/* name="Email composer" id="99:6899" type="COMPONENT_SET" */}
      {/* id="99:6876" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="99:6876" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "375px",
              padding: "16px 20px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="To" id="99:6807" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Input__Label" id="99:6808" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "73px",
                  height: "var(--size-height-controlheight, 32px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="Icon" id="I99:6808;5769:7203" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I99:6808;5769:7203;2828:1712" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.8px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                  >
                    {/* name="Vector" id=I99:6808;5769:7203;2828:1712 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Send to`}</span>
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`*`}</span>
                {/* name="Icon" id="I99:6808;182:6058" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I99:6808;182:6058;2828:1574" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.8px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                  >
                    {/* name="Vector" id=I99:6808;182:6058;2828:1574 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Select" id="99:6809" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="Input/Select" id="I99:6809;170:26363" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  {/* name="Items Wrapper" id="I99:6809;170:26363;170:24392" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "4px var(--size-padding-paddingxxs, 4px)",
                      flex: "1 0 0",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* name="tag" id="I99:6809;170:26363;170:24380" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "24px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      }}
                    >
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
                      >{`thai.nguyen47@gmail.com`}</span>
                      {/* name="xmark" id="I99:6809;170:26363;170:24380;5625:46063" type="INSTANCE" */}
                      <QodeSvgI9968091702636317024380562546063
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="tag" id="I99:6809;170:26363;170:24384" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "24px",
                        padding: "0px var(--size-padding-paddingxs, 8px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderradiussm, 4px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      }}
                    >
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
                      >{`thainq@nec.vn`}</span>
                      {/* name="xmark" id="I99:6809;170:26363;170:24384;5625:46063" type="INSTANCE" */}
                      <QodeSvgI9968091702636317024384562546063
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="tag" id="I99:6809;170:26363;170:24388" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "24px",
                        padding: "0px var(--size-padding-paddingxs, 8px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderradiussm, 4px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      }}
                    >
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
                      >{`Tag`}</span>
                      {/* name="xmark" id="I99:6809;170:26363;170:24388;5625:46063" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "3.998px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {/* name="Vector" id="I99:6809;170:26363;170:24388;5625:46063;2828:6658" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "8.004px",
                            height: "8.004px",
                            flexShrink: "0",
                            fill: "var(--neutral-gray-90, #464646)",
                          }}
                        >
                          {/* name="Vector" id=I99:6809;170:26363;170:24388;5625:46063;2828:6658 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                  {/* name="Icon" id="I99:6809;170:26363;170:24339" type="INSTANCE" */}
                  <QodeSvgI9968091702636317024339
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
            {/* name="Subject" id="99:6810" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Input__Label" id="99:6811" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "73px",
                  height: "var(--size-height-controlheight, 32px)",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="Icon" id="I99:6811;5769:7203" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I99:6811;5769:7203;2828:1712" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.8px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                  >
                    {/* name="Vector" id=I99:6811;5769:7203;2828:1712 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Subject`}</span>
                <span
                  style={{
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`*`}</span>
                {/* name="Icon" id="I99:6811;182:6058" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I99:6811;182:6058;2828:1574" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.8px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-90, #464646)",
                    }}
                  >
                    {/* name="Vector" id=I99:6811;182:6058;2828:1574 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Input/Text" id="99:6812" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "10px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="🎰 icon left" id="I99:6812;182:10156" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I99:6812;182:10156;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--text-text-neutral-50, #1d1d1d)",
                    }}
                  >
                    {/* name="Vector" id=I99:6812;182:10156;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`PRE`}</span>
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    flex: "1 0 0",
                    overflow: "hidden",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textOverflow: "ellipsis",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Senior Software Engineer opportunity - [Company name]`}</span>
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`SUF`}</span>
                {/* name="🎰 icon right" id="I99:6812;182:10160" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 2.4px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* name="Vector" id="I99:6812;182:10160;2828:6396" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.2px",
                      height: "12.8px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-70, #656565)",
                    }}
                  >
                    {/* name="Vector" id=I99:6812;182:10160;2828:6396 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* name="Input__Text Area" id="99:6813" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Write a message...`}</span>
              {/* name="Resizer" id="I99:6813;182:17652" type="BOOLEAN_OPERATION" */}
              <QodeSvgI99681318217652
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "589px",
                  top: "196px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I99:6813;3012:28019" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "566px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I99:6813;3012:28020" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px) 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I99:6813;3012:28020;114:1876" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "2.099px 1.757px 2.101px 1.748px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I99:6813;3012:28020;114:1876;2828:408" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "10.496px",
                        height: "9.799px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I99:6813;3012:28020;114:1876;2828:408 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-primary-30, #158de2)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Rewrite`}</span>
                  {/* name="🎰 icon" id="I99:6813;3012:28020;2906:16275" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.4px 1.401px 1.398px 1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I99:6813;3012:28020;2906:16275;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I99:6813;3012:28020;2906:16275;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
                {/* name="vote" id="I99:6813;3012:28021" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I99:6813;3012:28022" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                  >
                    {/* name="🎰 icon" id="I99:6813;3012:28022;114:3136" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "2.099px 1.4px 2.1px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="Vector" id="I99:6813;3012:28022;114:3136;2828:5918" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I99:6813;3012:28022;114:3136;2828:5918 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="Button" id="I99:6813;3012:28023" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                  >
                    {/* name="🎰 icon" id="I99:6813;3012:28023;114:3136" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "2.1px 1.4px 2.099px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="Vector" id="I99:6813;3012:28023;114:3136;2828:5916" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I99:6813;3012:28023;114:3136;2828:5916 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </Flex>
            {/* name="Btm" id="99:6814" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Wrap" id="99:7381" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {/* name="Button" id="99:7382" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="angle-up" id="I99:7382;114:3130" type="INSTANCE" */}
                  <QodeSvgI9973821143130
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Rich text action" id="99:7383" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "8px 0px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* name="w" id="I99:7383;5705:7341" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="bold" id="I99:7383;5705:7342" type="INSTANCE" */}
                    <QodeSvgI99738357057342
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="italic" id="I99:7383;5705:7343" type="INSTANCE" */}
                    <QodeSvgI99738357057343
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="underline" id="I99:7383;5705:7344" type="INSTANCE" */}
                    <QodeSvgI99738357057344
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:7383;5705:7345" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:7383;5705:7345 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Frame 2" id="I99:7383;5705:7346" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="list-ul" id="I99:7383;5705:7347" type="INSTANCE" */}
                    <QodeSvgI99738357057347
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="list-ol" id="I99:7383;5705:7348" type="INSTANCE" */}
                    <QodeSvgI99738357057348
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:7383;5705:7349" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:7383;5705:7349 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="font" id="I99:7383;5705:7350" type="GROUP" */}
                  <Flex style={{ width: "20px", height: "20px" }}>
                    {/* name="link" id="I99:7383;5705:7351" type="INSTANCE" */}
                    <QodeSvgI99738357057351
                      style={{ width: "20px", height: "20px", flexShrink: "0" }}
                      {...{}}
                    />
                  </Flex>
                </Flex>
              </div>
              {/* name="Action" id="99:6817" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* name="Button" id="99:6818" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="video-plus" id="I99:6818;114:1808" type="INSTANCE" */}
                  <QodeSvgI9968181141808
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Setup interview`}</span>
                  {/* name="🎰 icon" id="I99:6818;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                  >
                    {/* name="Vector" id="I99:6818;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I99:6818;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
                {/* name="Button" id="99:6819" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="paper-plane-top" id="I99:6819;35:13236" type="INSTANCE" */}
                  <QodeSvgI9968193513236
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-white, #fff)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Send`}</span>
                  {/* name="🎰 icon" id="I99:6819;2906:15123" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                  >
                    {/* name="Vector" id="I99:6819;2906:15123;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--background-bg-white, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I99:6819;2906:15123;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="99:6900" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="99:6900" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "163px",
              padding: "16px 20px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            }}
          >
            {/* name="Input__Text Area" id="99:6907" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Write a message...`}</span>
              {/* name="Resizer" id="I99:6907;182:17652" type="BOOLEAN_OPERATION" */}
              <QodeSvgI99690718217652
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "589px",
                  top: "72px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I99:6907;3012:28019" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "566px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I99:6907;3012:28020" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px) 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I99:6907;3012:28020;114:1876" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "2.099px 1.757px 2.101px 1.748px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I99:6907;3012:28020;114:1876;2828:408" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "10.496px",
                        height: "9.799px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I99:6907;3012:28020;114:1876;2828:408 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--text-text-primary-30, #158de2)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Rewrite`}</span>
                  {/* name="🎰 icon" id="I99:6907;3012:28020;2906:16275" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.4px 1.401px 1.398px 1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I99:6907;3012:28020;2906:16275;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I99:6907;3012:28020;2906:16275;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
                {/* name="vote" id="I99:6907;3012:28021" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I99:6907;3012:28022" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                  >
                    {/* name="🎰 icon" id="I99:6907;3012:28022;114:3136" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "2.099px 1.4px 2.1px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="Vector" id="I99:6907;3012:28022;114:3136;2828:5918" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I99:6907;3012:28022;114:3136;2828:5918 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="Button" id="I99:6907;3012:28023" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                  >
                    {/* name="🎰 icon" id="I99:6907;3012:28023;114:3136" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "2.1px 1.4px 2.099px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="Vector" id="I99:6907;3012:28023;114:3136;2828:5916" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I99:6907;3012:28023;114:3136;2828:5916 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </Flex>
            {/* name="Btm" id="99:6908" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Wrap" id="99:7310" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {/* name="Button" id="99:6909" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="angle-up" id="I99:6909;114:3130" type="INSTANCE" */}
                  <QodeSvgI9969091143130
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="Rich text action" id="99:6910" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "8px 0px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* name="w" id="I99:6910;5705:7341" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="bold" id="I99:6910;5705:7342" type="INSTANCE" */}
                    <QodeSvgI99691057057342
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="italic" id="I99:6910;5705:7343" type="INSTANCE" */}
                    <QodeSvgI99691057057343
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="underline" id="I99:6910;5705:7344" type="INSTANCE" */}
                    <QodeSvgI99691057057344
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:6910;5705:7345" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:6910;5705:7345 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Frame 2" id="I99:6910;5705:7346" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="list-ul" id="I99:6910;5705:7347" type="INSTANCE" */}
                    <QodeSvgI99691057057347
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                    {/* name="list-ol" id="I99:6910;5705:7348" type="INSTANCE" */}
                    <QodeSvgI99691057057348
                      style={{ width: "20px", height: "20px" }}
                      {...{}}
                    />
                  </div>
                  {/* name="divider" id="I99:6910;5705:7349" type="LINE" */}
                  <Flex
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    }}
                  >
                    {/* name="divider" id=I99:6910;5705:7349 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="font" id="I99:6910;5705:7350" type="GROUP" */}
                  <Flex style={{ width: "20px", height: "20px" }}>
                    {/* name="link" id="I99:6910;5705:7351" type="INSTANCE" */}
                    <QodeSvgI99691057057351
                      style={{ width: "20px", height: "20px", flexShrink: "0" }}
                      {...{}}
                    />
                  </Flex>
                </Flex>
              </div>
              {/* name="Action" id="99:6911" type="FRAME" */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* name="Button" id="99:6912" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="video-plus" id="I99:6912;114:1808" type="INSTANCE" */}
                  <QodeSvgI9969121141808
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Setup interview`}</span>
                  {/* name="🎰 icon" id="I99:6912;2906:15520" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                  >
                    {/* name="Vector" id="I99:6912;2906:15520;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, #000)",
                      }}
                    >
                      {/* name="Vector" id=I99:6912;2906:15520;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
                {/* name="Button" id="99:6913" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "164px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                >
                  {/* name="paper-plane-top" id="I99:6913;35:13236" type="INSTANCE" */}
                  <QodeSvgI9969133513236
                    style={{ width: "16px", height: "16px", flexShrink: "0" }}
                    {...{}}
                  />
                  <span
                    style={{
                      color: "var(--text-text-white, #fff)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Send`}</span>
                  {/* name="🎰 icon" id="I99:6913;2906:15123" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: "0",
                    }}
                  >
                    {/* name="Vector" id="I99:6913;2906:15123;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--background-bg-white, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I99:6913;2906:15123;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
