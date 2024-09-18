// id="275:12955"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1892958 from "@designSystem/icon/svg/QodeSvg1892958"
import QodeSvg1894419 from "@designSystem/icon/svg/QodeSvg1894419"
import QodeSvg1894422 from "@designSystem/icon/svg/QodeSvg1894422"
import QodeSvgI2751295818945111893019 from "@designSystem/icon/svg/QodeSvgI2751295818945111893019"
import QodeSvgI275129581894659 from "@designSystem/icon/svg/QodeSvgI275129581894659"
import QodeSvgI2751353518945111893019 from "@designSystem/icon/svg/QodeSvgI2751353518945111893019"
import QodeSvgI275135351894659 from "@designSystem/icon/svg/QodeSvgI275135351894659"
import QodeSvgI2751363618945111893019 from "@designSystem/icon/svg/QodeSvgI2751363618945111893019"
import QodeSvgI275136361894659 from "@designSystem/icon/svg/QodeSvgI275136361894659"

export interface QodeCustom27512955Props {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeCustom27512955: React.FC<
  QodeCustom27512955Props & { style?: CSSProperties }
> = ({ active = "false", size = "default", ...rest }) => {
  return (
    <>
      {/* name="ColorPicker" id="275:12955" type="COMPONENT_SET" */}
      {/* id="275:12895" */}
      {`${active}` === `false` && `${size}` === `default` && (
        <>
          {/* name="active=false, size=default" id="275:12895" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:12644" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:12644;189:2666" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:12644;189:2666 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:12644;189:2682" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
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
                >{`#1677FF`}</span>
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="275:12956" */}
      {`${active}` === `true` && `${size}` === `default` && (
        <>
          {/* name="active=true, size=default" id="275:12956" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:12957" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:12957;189:2666" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:12957;189:2666 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:12957;189:2682" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
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
                >{`#1677FF`}</span>
              </div>
            </Flex>
            {/* name="🧬 dropdown menu" id="275:12958" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                position: "absolute",
                right: "-182px",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Palette Wrapper" id="I275:12958;189:4465" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".colorPicker__palette" id="I275:12958;189:4463" type="INSTANCE" */}
                <QodeSvg1892958
                  style={{
                    height: "160px",
                    alignSelf: "stretch",
                    fill: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), var(--color-primary-colorprimary, #1597f4)",
                    strokeWidth: "1px",
                    stroke:
                      "var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                  {...{}}
                />
              </div>
              {/* name="Color Wrapper" id="I275:12958;189:4472" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "256px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                }}
              >
                {/* name="Slider Wrapper" id="I275:12958;189:4471" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingsm, 12px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".colorPicker__slider" id="I275:12958;189:4466" type="INSTANCE" */}
                  <QodeSvg1894419
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(90deg, #F00 0%, #FFA800 10.42%, #FAFF00 23.44%, #06FF01 35.42%, #01FFD1 48.96%, #0185FF 60.94%, #2501FF 72.92%, #BD01FF 83.33%, #FF01C7 90.1%, #FF0101 97.92%)",
                    }}
                    {...{ type: "palette" }}
                  />
                  {/* name=".colorPicker__slider" id="I275:12958;189:4468" type="INSTANCE" */}
                  <QodeSvg1894422
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(270deg, #1677FF 0%, rgba(22, 119, 255, 0.00) 100%)",
                    }}
                    {...{ type: "alpha" }}
                  />
                </div>
                {/* name=".colorPicker__colorPreview" id="I275:12958;189:4470" type="INSTANCE" */}
                <Flex
                  style={{
                    width: "28px",
                    height: "28px",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name=".colorPicker__colorPreview" id=I275:12958;189:4470 type=INSTANCE */}
                  <></>
                </Flex>
              </div>
              {/* name="🧬 color space" id="I275:12958;189:4511" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Select" id="I275:12958;189:4511;189:3021" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    paddingRight: "var(--size-padding-paddingxxs, 4px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`HEX`}</span>
                  {/* name="Down" id="I275:12958;189:4511;189:3019" type="INSTANCE" */}
                  <QodeSvgI2751295818945111893019
                    style={{ width: "12px", height: "12px" }}
                    {...{}}
                  />
                </div>
                {/* name="🧬 input" id="I275:12958;189:4511;189:2998" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "10px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
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
                  >{`#`}</span>
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
                  >{`1677FF`}</span>
                </Flex>
                {/* name="🧬 input number" id="I275:12958;189:4511;189:3005" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "56px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Content" id="I275:12958;189:4511;189:3005;186:3219" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      paddingLeft: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
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
                    >{`100%`}</span>
                  </div>
                </Flex>
              </Flex>
              {/* name="Arrow" id="I275:12958;189:4659" type="VECTOR" */}
              <QodeSvgI275129581894659
                style={{
                  width: "16px",
                  height: "8px",
                  position: "absolute",
                  left: "12px",
                  top: "-8px",
                  fill: "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="275:13531" */}
      {`${active}` === `false` && `${size}` === `large` && (
        <>
          {/* name="active=false, size=large" id="275:13531" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:13532" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:13532;189:2677" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:13532;189:2677 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:13532;189:2683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`#1677FF`}</span>
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="275:13533" */}
      {`${active}` === `true` && `${size}` === `large` && (
        <>
          {/* name="active=true, size=large" id="275:13533" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:13534" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:13534;189:2677" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "var(--line-height-lineheighheading3, 32px)",
                  height: "var(--size-height-controlheight, 32px)",
                  borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:13534;189:2677 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:13534;189:2683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--color-neutral-text-colortext, #000)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`#1677FF`}</span>
              </div>
            </Flex>
            {/* name="🧬 dropdown menu" id="275:13535" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                position: "absolute",
                right: "-166px",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Palette Wrapper" id="I275:13535;189:4465" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".colorPicker__palette" id="I275:13535;189:4463" type="INSTANCE" */}
                <QodeSvg1892958
                  style={{
                    height: "160px",
                    alignSelf: "stretch",
                    fill: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), var(--color-primary-colorprimary, #1597f4)",
                    strokeWidth: "1px",
                    stroke:
                      "var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                  {...{}}
                />
              </div>
              {/* name="Color Wrapper" id="I275:13535;189:4472" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "256px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                }}
              >
                {/* name="Slider Wrapper" id="I275:13535;189:4471" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingsm, 12px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".colorPicker__slider" id="I275:13535;189:4466" type="INSTANCE" */}
                  <QodeSvg1894419
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(90deg, #F00 0%, #FFA800 10.42%, #FAFF00 23.44%, #06FF01 35.42%, #01FFD1 48.96%, #0185FF 60.94%, #2501FF 72.92%, #BD01FF 83.33%, #FF01C7 90.1%, #FF0101 97.92%)",
                    }}
                    {...{ type: "palette" }}
                  />
                  {/* name=".colorPicker__slider" id="I275:13535;189:4468" type="INSTANCE" */}
                  <QodeSvg1894422
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(270deg, #1677FF 0%, rgba(22, 119, 255, 0.00) 100%)",
                    }}
                    {...{ type: "alpha" }}
                  />
                </div>
                {/* name=".colorPicker__colorPreview" id="I275:13535;189:4470" type="INSTANCE" */}
                <Flex
                  style={{
                    width: "28px",
                    height: "28px",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name=".colorPicker__colorPreview" id=I275:13535;189:4470 type=INSTANCE */}
                  <></>
                </Flex>
              </div>
              {/* name="🧬 color space" id="I275:13535;189:4511" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Select" id="I275:13535;189:4511;189:3021" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    paddingRight: "var(--size-padding-paddingxxs, 4px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`HEX`}</span>
                  {/* name="Down" id="I275:13535;189:4511;189:3019" type="INSTANCE" */}
                  <QodeSvgI2751353518945111893019
                    style={{ width: "12px", height: "12px" }}
                    {...{}}
                  />
                </div>
                {/* name="🧬 input" id="I275:13535;189:4511;189:2998" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "10px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
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
                  >{`#`}</span>
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
                  >{`1677FF`}</span>
                </Flex>
                {/* name="🧬 input number" id="I275:13535;189:4511;189:3005" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "56px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Content" id="I275:13535;189:4511;189:3005;186:3219" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      paddingLeft: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
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
                    >{`100%`}</span>
                  </div>
                </Flex>
              </Flex>
              {/* name="Arrow" id="I275:13535;189:4659" type="VECTOR" */}
              <QodeSvgI275135351894659
                style={{
                  width: "16px",
                  height: "8px",
                  position: "absolute",
                  left: "12px",
                  top: "-8px",
                  fill: "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="275:13632" */}
      {`${active}` === `false` && `${size}` === `small` && (
        <>
          {/* name="active=false, size=small" id="275:13632" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:13633" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:13633;189:2680" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "var(--style-radius-borderradiusxs, 4px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:13633;189:2680 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:13633;189:2685" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
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
                >{`#1677FF`}</span>
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="275:13634" */}
      {`${active}` === `true` && `${size}` === `small` && (
        <>
          {/* name="active=true, size=small" id="275:13634" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* name="🧬 trigger" id="275:13635" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "var(--size-padding-paddingxxs, 4px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              {/* name="Color" id="I275:13635;189:2680" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "var(--style-radius-borderradiusxs, 4px)",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                }}
              >
                {/* name="Color" id=I275:13635;189:2680 type=RECTANGLE */}
                <></>
              </Flex>
              {/* name="Text Wrapper" id="I275:13635;189:2685" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  paddingRight: "var(--size-padding-paddingxxs, 4px)",
                  alignItems: "center",
                }}
              >
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
                >{`#1677FF`}</span>
              </div>
            </Flex>
            {/* name="🧬 dropdown menu" id="275:13636" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                position: "absolute",
                right: "-190px",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Palette Wrapper" id="I275:13636;189:4465" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name=".colorPicker__palette" id="I275:13636;189:4463" type="INSTANCE" */}
                <QodeSvg1892958
                  style={{
                    height: "160px",
                    alignSelf: "stretch",
                    fill: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), var(--color-primary-colorprimary, #1597f4)",
                    strokeWidth: "1px",
                    stroke:
                      "var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                  {...{}}
                />
              </div>
              {/* name="Color Wrapper" id="I275:13636;189:4472" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "256px",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingsm, 12px)",
                }}
              >
                {/* name="Slider Wrapper" id="I275:13636;189:4471" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingsm, 12px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".colorPicker__slider" id="I275:13636;189:4466" type="INSTANCE" */}
                  <QodeSvg1894419
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(90deg, #F00 0%, #FFA800 10.42%, #FAFF00 23.44%, #06FF01 35.42%, #01FFD1 48.96%, #0185FF 60.94%, #2501FF 72.92%, #BD01FF 83.33%, #FF01C7 90.1%, #FF0101 97.92%)",
                    }}
                    {...{ type: "palette" }}
                  />
                  {/* name=".colorPicker__slider" id="I275:13636;189:4468" type="INSTANCE" */}
                  <QodeSvg1894422
                    style={{
                      height: "8px",
                      alignSelf: "stretch",
                      fill: "linear-gradient(270deg, #1677FF 0%, rgba(22, 119, 255, 0.00) 100%)",
                    }}
                    {...{ type: "alpha" }}
                  />
                </div>
                {/* name=".colorPicker__colorPreview" id="I275:13636;189:4470" type="INSTANCE" */}
                <Flex
                  style={{
                    width: "28px",
                    height: "28px",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                >
                  {/* name=".colorPicker__colorPreview" id=I275:13636;189:4470 type=INSTANCE */}
                  <></>
                </Flex>
              </div>
              {/* name="🧬 color space" id="I275:13636;189:4511" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Select" id="I275:13636;189:4511;189:3021" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    paddingRight: "var(--size-padding-paddingxxs, 4px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`HEX`}</span>
                  {/* name="Down" id="I275:13636;189:4511;189:3019" type="INSTANCE" */}
                  <QodeSvgI2751363618945111893019
                    style={{ width: "12px", height: "12px" }}
                    {...{}}
                  />
                </div>
                {/* name="🧬 input" id="I275:13636;189:4511;189:2998" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "10px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
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
                  >{`#`}</span>
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
                  >{`1677FF`}</span>
                </Flex>
                {/* name="🧬 input number" id="I275:13636;189:4511;189:3005" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "56px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    alignItems: "center",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Content" id="I275:13636;189:4511;189:3005;186:3219" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      paddingLeft: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
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
                    >{`100%`}</span>
                  </div>
                </Flex>
              </Flex>
              {/* name="Arrow" id="I275:13636;189:4659" type="VECTOR" */}
              <QodeSvgI275136361894659
                style={{
                  width: "16px",
                  height: "8px",
                  position: "absolute",
                  left: "12px",
                  top: "-8px",
                  fill: "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
