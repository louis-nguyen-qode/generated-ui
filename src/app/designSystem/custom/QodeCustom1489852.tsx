// id="148:9852"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1489854 from "@designSystem/icon/svg/QodeSvg1489854"
import QodeSvgI149954218217664 from "@designSystem/icon/svg/QodeSvgI149954218217664"
import QodeSvgI616380911143130 from "@designSystem/icon/svg/QodeSvgI616380911143130"
import QodeSvg62929451 from "@designSystem/icon/svg/QodeSvg62929451"
import QodeSvgI6292945218217658 from "@designSystem/icon/svg/QodeSvgI6292945218217658"
import QodeSvgI629294531143130 from "@designSystem/icon/svg/QodeSvgI629294531143130"
import QodeSvgI629295441141876 from "@designSystem/icon/svg/QodeSvgI629295441141876"

export interface QodeCustom1489852Props {
  state?: "View" | "Edit" | "View (report)" | "New question"
}

export const QodeCustom1489852: React.FC<
  QodeCustom1489852Props & { style?: CSSProperties }
> = ({ state = "View", ...rest }) => {
  return (
    <>
      {/* name="Interview question" id="148:9852" type="COMPONENT_SET" */}
      {/* id="148:9851" */}
      {`${state}` === `View` && (
        <>
          {/* name="State=View" id="148:9851" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* name="Frame 37328" id="148:9860" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "20px",
                height: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexShrink: "0",
                borderRadius: "4px",
                background: "var(--neutral-gray-10, #e3e3e3)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`1`}</span>
            </div>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
          </div>
        </>
      )}
      {/* id="595:27986" */}
      {`${state}` === `View (report)` && (
        <>
          {/* name="State=View (report)" id="595:27986" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* name="Frame 37328" id="595:27987" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "20px",
                height: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexShrink: "0",
                borderRadius: "4px",
                background: "var(--neutral-gray-10, #e3e3e3)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`1`}</span>
            </div>
            <span
              style={{
                flex: "1 0 0",
                color: "var(--text-text-neutral-30, #656565)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
          </div>
        </>
      )}
      {/* id="148:9853" */}
      {`${state}` === `Edit` && (
        <>
          {/* name="State=Edit" id="148:9853" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              height: "54px",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              flexShrink: "0",
            }}
          >
            {/* name="bars" id="148:9854" type="INSTANCE" */}
            <QodeSvg1489854
              style={{ width: "20px", height: "20px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Input__Text Area" id="149:9542" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
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
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
              {/* name="Resizer" id="I149:9542;182:17664" type="BOOLEAN_OPERATION" */}
              <QodeSvgI149954218217664
                style={{
                  width: "8.354px",
                  height: "8.354px",
                  position: "absolute",
                  left: "517px",
                  top: "43px",
                  fill: "var(--color-neutral-text-colortext, #000)",
                }}
                {...{}}
              />
              {/* name="button" id="I149:9542;3012:28132" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "494px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  position: "absolute",
                  left: "8px",
                  bottom: "4px",
                }}
              >
                {/* name="Button" id="I149:9542;3012:28133" type="INSTANCE" */}
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
                  {/* name="🎰 icon" id="I149:9542;3012:28133;114:1876" type="INSTANCE" */}
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
                    {/* name="Vector" id="I149:9542;3012:28133;114:1876;2828:408" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "10.496px",
                        height: "9.799px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I149:9542;3012:28133;114:1876;2828:408 type=VECTOR */}
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
                  {/* name="🎰 icon" id="I149:9542;3012:28133;2906:16275" type="INSTANCE" */}
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
                    {/* name="Vector" id="I149:9542;3012:28133;2906:16275;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.199px",
                        height: "11.202px",
                        flexShrink: "0",
                        fill: "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I149:9542;3012:28133;2906:16275;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
                {/* name="vote" id="I149:9542;3012:28134" type="FRAME" */}
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  {/* name="Button" id="I149:9542;3012:28135" type="INSTANCE" */}
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
                    {/* name="🎰 icon" id="I149:9542;3012:28135;114:3136" type="INSTANCE" */}
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
                      {/* name="Vector" id="I149:9542;3012:28135;114:3136;2828:5918" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I149:9542;3012:28135;114:3136;2828:5918 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="Button" id="I149:9542;3012:28136" type="INSTANCE" */}
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
                    {/* name="🎰 icon" id="I149:9542;3012:28136;114:3136" type="INSTANCE" */}
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
                      {/* name="Vector" id="I149:9542;3012:28136;114:3136;2828:5916" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.2px",
                          height: "9.801px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I149:9542;3012:28136;114:3136;2828:5916 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </Flex>
            {/* name="Button" id="616:38091" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon" id="I616:38091;114:3130" type="INSTANCE" */}
              <QodeSvgI616380911143130
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="629:29450" */}
      {`${state}` === `New question` && (
        <>
          {/* name="State=New question" id="629:29450" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            {/* name="Frame 37413" id="629:29543" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="bars" id="629:29451" type="INSTANCE" */}
              <QodeSvg62929451
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
              {/* name="Input__Text Area" id="629:29452" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-placeholder, #a7a7a7)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Enter question`}</span>
                {/* name="Focus Ring" id="I629:29452;182:16960" type="RECTANGLE" */}
                <Flex
                  style={{
                    width: "528px",
                    height: "52px",
                    position: "absolute",
                    borderRadius: "8px",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                  }}
                >
                  {/* name="Focus Ring" id=I629:29452;182:16960 type=RECTANGLE */}
                  <></>
                </Flex>
                {/* name="Resizer" id="I629:29452;182:17658" type="BOOLEAN_OPERATION" */}
                <QodeSvgI6292945218217658
                  style={{
                    width: "8.354px",
                    height: "8.354px",
                    position: "absolute",
                    left: "517px",
                    top: "41px",
                    fill: "var(--color-neutral-text-colortext, #000)",
                  }}
                  {...{}}
                />
                {/* name="button" id="I629:29452;3012:28122" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "494px",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    position: "absolute",
                    left: "8px",
                    bottom: "4px",
                  }}
                >
                  {/* name="Button" id="I629:29452;3012:28123" type="INSTANCE" */}
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
                    {/* name="🎰 icon" id="I629:29452;3012:28123;114:1876" type="INSTANCE" */}
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
                      {/* name="Vector" id="I629:29452;3012:28123;114:1876;2828:408" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "10.496px",
                          height: "9.799px",
                          flexShrink: "0",
                          fill: "var(--color-primary-colorprimary, #1597f4)",
                        }}
                      >
                        {/* name="Vector" id=I629:29452;3012:28123;114:1876;2828:408 type=VECTOR */}
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
                    {/* name="🎰 icon" id="I629:29452;3012:28123;2906:16275" type="INSTANCE" */}
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
                      {/* name="Vector" id="I629:29452;3012:28123;2906:16275;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.199px",
                          height: "11.202px",
                          flexShrink: "0",
                          fill: "var(--color-primary-colorprimary, #1597f4)",
                        }}
                      >
                        {/* name="Vector" id=I629:29452;3012:28123;2906:16275;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="vote" id="I629:29452;3012:28124" type="FRAME" */}
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    {/* name="Button" id="I629:29452;3012:28125" type="INSTANCE" */}
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
                      {/* name="🎰 icon" id="I629:29452;3012:28125;114:3136" type="INSTANCE" */}
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
                        {/* name="Vector" id="I629:29452;3012:28125;114:3136;2828:5918" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "11.2px",
                            height: "9.801px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I629:29452;3012:28125;114:3136;2828:5918 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
                    </Flex>
                    {/* name="Button" id="I629:29452;3012:28126" type="INSTANCE" */}
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
                      {/* name="🎰 icon" id="I629:29452;3012:28126;114:3136" type="INSTANCE" */}
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
                        {/* name="Vector" id="I629:29452;3012:28126;114:3136;2828:5916" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "11.2px",
                            height: "9.801px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I629:29452;3012:28126;114:3136;2828:5916 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </div>
              </Flex>
              {/* name="Button" id="629:29453" type="INSTANCE" */}
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
                {/* name="🎰 icon" id="I629:29453;114:3130" type="INSTANCE" */}
                <QodeSvgI629294531143130
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
              </Flex>
            </div>
            {/* name="Frame 37414" id="629:29551" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "0px 32px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="629:29544" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "61px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                {/* name="🎰 icon" id="I629:29544;114:1876" type="INSTANCE" */}
                <QodeSvgI629295441141876
                  style={{
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    flexShrink: "0",
                  }}
                  {...{}}
                />
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
                >{`Suggest`}</span>
                {/* name="🎰 icon" id="I629:29544;2906:16275" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "var(--font-size-base, 14px)",
                    height: "var(--font-size-base, 14px)",
                    padding: "1.4px 1.401px 1.398px 1.4px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I629:29544;2906:16275;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "11.199px",
                      height: "11.202px",
                      flexShrink: "0",
                      fill: "var(--background-bg-primary, #1597f4)",
                    }}
                  >
                    {/* name="Vector" id=I629:29544;2906:16275;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
    </>
  )
}
