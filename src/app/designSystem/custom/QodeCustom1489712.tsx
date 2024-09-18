// id="148:9712"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg14410325 from "@designSystem/icon/svg/QodeSvg14410325"
import QodeSvg14310008 from "@designSystem/icon/svg/QodeSvg14310008"
import QodeSvg14310012 from "@designSystem/icon/svg/QodeSvg14310012"
import QodeSvg1489377 from "@designSystem/icon/svg/QodeSvg1489377"
import QodeSvg1489379 from "@designSystem/icon/svg/QodeSvg1489379"
import QodeSvg1489380 from "@designSystem/icon/svg/QodeSvg1489380"
import QodeSvg1489381 from "@designSystem/icon/svg/QodeSvg1489381"
import QodeSvg1489382 from "@designSystem/icon/svg/QodeSvg1489382"
import QodeSvg1489383 from "@designSystem/icon/svg/QodeSvg1489383"
import QodeSvg14310024 from "@designSystem/icon/svg/QodeSvg14310024"
import QodeSvgI14893091241293 from "@designSystem/icon/svg/QodeSvgI14893091241293"
import QodeSvg1489717 from "@designSystem/icon/svg/QodeSvg1489717"
import QodeSvg1669188 from "@designSystem/icon/svg/QodeSvg1669188"
import QodeSvg1669192 from "@designSystem/icon/svg/QodeSvg1669192"
import QodeSvg1669197 from "@designSystem/icon/svg/QodeSvg1669197"
import QodeSvg1669199 from "@designSystem/icon/svg/QodeSvg1669199"
import QodeSvg1669200 from "@designSystem/icon/svg/QodeSvg1669200"
import QodeSvg1669201 from "@designSystem/icon/svg/QodeSvg1669201"
import QodeSvg1669202 from "@designSystem/icon/svg/QodeSvg1669202"
import QodeSvg1669203 from "@designSystem/icon/svg/QodeSvg1669203"
import QodeSvg1669204 from "@designSystem/icon/svg/QodeSvg1669204"

export interface QodeCustom1489712Props {
  property_1?: "Empty" | "Customized"
}

export const QodeCustom1489712: React.FC<
  QodeCustom1489712Props & { style?: CSSProperties }
> = ({ property_1 = "Empty", ...rest }) => {
  return (
    <>
      {/* name="Customize" id="148:9712" type="COMPONENT_SET" */}
      {/* id="148:9594" */}
      {`${property_1}` === `Empty` && (
        <>
          {/* name="Property 1=Empty" id="148:9594" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              height: "273px",
              padding: "32px 20px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexShrink: "0",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Info" id="144:10243" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "243px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Header" id="143:8744" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon" id="143:8745" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  {/* name="cube" id="144:10325" type="FRAME" */}
                  <QodeSvg14410325
                    style={{ width: "24px", height: "24px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Customize the direction of  AI Interview`}</span>
              </div>
              {/* name="Preset" id="143:8748" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-20, #878787)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  }}
                >{`Or select a preset`}</span>
                {/* name="Frame 37330" id="148:9019" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  {/* name="Button" id="148:9008" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="pen-to-square" id="I148:9008;114:1867" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "1.515px 1.515px 1.4px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* name="Vector" id="I148:9008;114:1867;2828:4440" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.085px",
                          height: "11.085px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9008;114:1867;2828:4440 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`Screening`}</span>
                    {/* name="🎰 icon" id="I148:9008;2906:15522" type="INSTANCE" */}
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
                      {/* name="Vector" id="I148:9008;2906:15522;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.199px",
                          height: "11.202px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9008;2906:15522;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="Button" id="148:9085" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="pen-to-square" id="I148:9085;114:1867" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "1.515px 1.515px 1.4px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* name="Vector" id="I148:9085;114:1867;2828:4440" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.085px",
                          height: "11.085px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9085;114:1867;2828:4440 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`Deep-dive`}</span>
                    {/* name="🎰 icon" id="I148:9085;2906:15522" type="INSTANCE" */}
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
                      {/* name="Vector" id="I148:9085;2906:15522;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.199px",
                          height: "11.202px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9085;2906:15522;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </div>
            {/* name="Mixer" id="144:10364" type="FRAME" */}
            <div style={{ width: "244px", height: "210px", flexShrink: "0" }}>
              {/* name="Mixer" id="144:10327" type="GROUP" */}
              <Flex
                style={{ width: "171px", height: "171.5px", flexShrink: "0" }}
              >
                {/* name="Box" id="143:10007" type="FRAME" */}
                <div
                  style={{
                    width: "164px",
                    height: "164px",
                    flexShrink: "0",
                    borderRadius: "0px 4px 0px 0px",
                    border:
                      "var(--style-line-width-linewidth, 1px) dashed var(--border-border-neutral-50, #6f6f6f)",
                    background: "#FFF",
                  }}
                >
                  {/* name="Group 41" id="143:10008" type="GROUP" */}
                  <QodeSvg14310008
                    style={{ width: "82px", height: "164px", flexShrink: "0" }}
                    {...{}}
                  />
                  {/* name="Group 42" id="143:10012" type="GROUP" */}
                  <QodeSvg14310012
                    style={{
                      width: "82px",
                      height: "164px",
                      transform: "rotate(90deg)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                  {/* name="Handler" id="148:9376" type="FRAME" */}
                  <div
                    style={{ width: "44px", height: "44px", flexShrink: "0" }}
                  >
                    {/* name="blur" id="148:9377" type="ELLIPSE" */}
                    <QodeSvg1489377
                      style={{
                        width: "42px",
                        height: "42px",
                        flexShrink: "0",
                        fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                        opacity: "0.7",
                        filter: "blur(4.125px)",
                      }}
                      {...{}}
                    />
                    {/* name="c - animate" id="148:9378" type="FRAME" */}
                    <div
                      style={{
                        width: "43.021px",
                        height: "42.815px",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="circle 3" id="148:9379" type="ELLIPSE" */}
                      <QodeSvg1489379
                        style={{
                          width: "41px",
                          height: "41px",
                          flexShrink: "0",
                          fill: "linear-gradient(180deg, #FFF 45.38%, #D4D4D4 100%)",
                        }}
                        {...{}}
                      />
                      {/* name="circle 2" id="148:9380" type="ELLIPSE" */}
                      <QodeSvg1489380
                        style={{
                          width: "36px",
                          height: "36px",
                          flexShrink: "0",
                          fill: "linear-gradient(180deg, #E5E5E5 0%, #FFF 38.46%)",
                        }}
                        {...{}}
                      />
                      {/* name="circle 1" id="148:9381" type="ELLIPSE" */}
                      <QodeSvg1489381
                        style={{
                          width: "31px",
                          height: "31px",
                          flexShrink: "0",
                          fill: "radial-gradient(50% 50% at 50% 50%, #545454 20.44%, #393939 100%)",
                        }}
                        {...{}}
                      />
                      {/* name="video" id="148:9382" type="INSTANCE" */}
                      <QodeSvg1489382
                        style={{
                          width: "12px",
                          height: "12px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                      {/* name="line" id="148:9383" type="ELLIPSE" */}
                      <QodeSvg1489383
                        style={{
                          width: "27px",
                          height: "27px",
                          flexShrink: "0",
                          strokeWidth: "1px",
                          stroke: "#20FFF2",
                        }}
                        {...{}}
                      />
                    </div>
                  </div>
                </div>
                {/* name="Board" id="143:10024" type="GROUP" */}
                <QodeSvg14310024
                  style={{ width: "171px", height: "171.5px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`SCREENING`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`DEEP-DIVE`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`CONCISE`}</span>
              {/* name="Tooltip" id="148:9309" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "244px",
                  padding:
                    "var(--size-size-sizexxs-6px, 6px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--neutral-gray-95, #383838)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Drag this handle to adjust the interview`}</span>
                {/* name="arrow" id="I148:9309;124:1293" type="VECTOR" */}
                <QodeSvgI14893091241293
                  style={{
                    width: "16px",
                    height: "8px",
                    position: "absolute",
                    left: "114px",
                    top: "-8px",
                    fill: "var(--neutral-gray-95, #383838)",
                  }}
                  {...{}}
                />
                {/* name="Button" id="I148:9309;3132:12964" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-text-colortextsolid, #fff)",
                  }}
                >
                  {/* name="🎰 icon" id="I148:9309;3132:12964;114:2496" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.599px 1.599px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I148:9309;3132:12964;114:2496;2828:3516" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.801px",
                        height: "12.803px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I148:9309;3132:12964;114:2496;2828:3516 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortextsolid, #fff)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Button`}</span>
                  {/* name="🎰 icon" id="I148:9309;3132:12964;2906:16248" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.6px 1.601px 1.598px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I148:9309;3132:12964;2906:16248;2828:3908" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.799px",
                        height: "12.802px",
                        flexShrink: "0",
                        fill: "var(--background-bg-primary, #1597f4)",
                      }}
                    >
                      {/* name="Vector" id=I148:9309;3132:12964;2906:16248;2828:3908 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="148:9713" */}
      {`${property_1}` === `Customized` && (
        <>
          {/* name="Property 1=Customized" id="148:9713" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "596px",
              height: "273px",
              padding: "32px 20px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexShrink: "0",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Info" id="148:9714" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "243px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Header" id="148:9715" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "4px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Icon" id="148:9716" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  {/* name="cube" id="148:9717" type="FRAME" */}
                  <QodeSvg1489717
                    style={{ width: "24px", height: "24px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Customize the direction of  AI Interview`}</span>
              </div>
              {/* name="Preset" id="148:9720" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-20, #878787)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  }}
                >{`Or select a preset`}</span>
                {/* name="Frame 37330" id="148:9722" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  {/* name="Button" id="148:9723" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="pen-to-square" id="I148:9723;114:1867" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "1.515px 1.515px 1.4px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* name="Vector" id="I148:9723;114:1867;2828:4440" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.085px",
                          height: "11.085px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9723;114:1867;2828:4440 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`Screening`}</span>
                    {/* name="🎰 icon" id="I148:9723;2906:15522" type="INSTANCE" */}
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
                      {/* name="Vector" id="I148:9723;2906:15522;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.199px",
                          height: "11.202px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9723;2906:15522;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* name="Button" id="148:9724" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="pen-to-square" id="I148:9724;114:1867" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "1.515px 1.515px 1.4px 1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* name="Vector" id="I148:9724;114:1867;2828:4440" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.085px",
                          height: "11.085px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9724;114:1867;2828:4440 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`Deep-dive`}</span>
                    {/* name="🎰 icon" id="I148:9724;2906:15522" type="INSTANCE" */}
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
                      {/* name="Vector" id="I148:9724;2906:15522;2828:3908" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "11.199px",
                          height: "11.202px",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortext, #000)",
                        }}
                      >
                        {/* name="Vector" id=I148:9724;2906:15522;2828:3908 type=VECTOR */}
                        <></>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </div>
            {/* name="Mixer" id="166:9185" type="FRAME" */}
            <div style={{ width: "244px", height: "210px", flexShrink: "0" }}>
              {/* name="Mixer" id="166:9186" type="GROUP" */}
              <Flex
                style={{ width: "171px", height: "171.5px", flexShrink: "0" }}
              >
                {/* name="Box" id="166:9187" type="FRAME" */}
                <div
                  style={{
                    width: "164px",
                    height: "164px",
                    flexShrink: "0",
                    borderRadius: "0px 4px 0px 0px",
                    border:
                      "var(--style-line-width-linewidth, 1px) dashed var(--border-border-neutral-50, #6f6f6f)",
                    background: "#FFF",
                  }}
                >
                  {/* name="Group 41" id="166:9188" type="GROUP" */}
                  <QodeSvg1669188
                    style={{ width: "82px", height: "164px", flexShrink: "0" }}
                    {...{}}
                  />
                  {/* name="Group 42" id="166:9192" type="GROUP" */}
                  <QodeSvg1669192
                    style={{
                      width: "82px",
                      height: "164px",
                      transform: "rotate(90deg)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                  {/* name="Handler" id="166:9196" type="FRAME" */}
                  <div
                    style={{ width: "44px", height: "44px", flexShrink: "0" }}
                  >
                    {/* name="blur" id="166:9197" type="ELLIPSE" */}
                    <QodeSvg1669197
                      style={{
                        width: "42px",
                        height: "42px",
                        flexShrink: "0",
                        fill: "conic-gradient(from 180deg at 50% 50%, #49CBFF 48.60000193119049deg, #86F0FF 140.3999948501587deg, #50FFA0 250.19999742507935deg, #7EA2FF 360deg)",
                        opacity: "0.7",
                        filter: "blur(4.125px)",
                      }}
                      {...{}}
                    />
                    {/* name="c - animate" id="166:9198" type="FRAME" */}
                    <div
                      style={{
                        width: "43.021px",
                        height: "42.815px",
                        flexShrink: "0",
                      }}
                    >
                      {/* name="circle 3" id="166:9199" type="ELLIPSE" */}
                      <QodeSvg1669199
                        style={{
                          width: "41px",
                          height: "41px",
                          flexShrink: "0",
                          fill: "linear-gradient(180deg, #FFF 45.38%, #D4D4D4 100%)",
                        }}
                        {...{}}
                      />
                      {/* name="circle 2" id="166:9200" type="ELLIPSE" */}
                      <QodeSvg1669200
                        style={{
                          width: "36px",
                          height: "36px",
                          flexShrink: "0",
                          fill: "linear-gradient(180deg, #E5E5E5 0%, #FFF 38.46%)",
                        }}
                        {...{}}
                      />
                      {/* name="circle 1" id="166:9201" type="ELLIPSE" */}
                      <QodeSvg1669201
                        style={{
                          width: "31px",
                          height: "31px",
                          flexShrink: "0",
                          fill: "radial-gradient(50% 50% at 50% 50%, #545454 20.44%, #393939 100%)",
                        }}
                        {...{}}
                      />
                      {/* name="video" id="166:9202" type="INSTANCE" */}
                      <QodeSvg1669202
                        style={{
                          width: "12px",
                          height: "12px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                      {/* name="line" id="166:9203" type="ELLIPSE" */}
                      <QodeSvg1669203
                        style={{
                          width: "27px",
                          height: "27px",
                          flexShrink: "0",
                          strokeWidth: "1px",
                          stroke: "#20FFF2",
                        }}
                        {...{}}
                      />
                    </div>
                  </div>
                </div>
                {/* name="Board" id="166:9204" type="GROUP" */}
                <QodeSvg1669204
                  style={{ width: "171px", height: "171.5px", flexShrink: "0" }}
                  {...{}}
                />
              </Flex>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`TECHNICAL`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`SCREENING`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`DEEP-DIVE`}</span>
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >{`CONCISE`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
