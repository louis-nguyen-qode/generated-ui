// id="214:6469"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom2146469Props {
  size?: "default" | "large" | "small"
  active?: "false" | "true"
}

export const QodeCustom2146469: React.FC<
  QodeCustom2146469Props & { style?: CSSProperties }
> = ({ size = "default", active = "false", ...rest }) => {
  return (
    <>
      {/* name="TimePicker" id="214:6469" type="COMPONENT_SET" */}
      {/* id="214:6470" */}
      {`${size}` === `default` && `${active}` === `false` && (
        <>
          {/* name="size=default, active=false" id="214:6470" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6471" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6471;214:5155" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="214:6472" */}
      {`${size}` === `large` && `${active}` === `false` && (
        <>
          {/* name="size=large, active=false" id="214:6472" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6473" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6473;214:5215" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="214:6474" */}
      {`${size}` === `small` && `${active}` === `false` && (
        <>
          {/* name="size=small, active=false" id="214:6474" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6475" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6475;214:5275" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="214:6476" */}
      {`${size}` === `default` && `${active}` === `true` && (
        <>
          {/* name="size=default, active=true" id="214:6476" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6477" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6477;214:5161" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              {/* name="Focus Ring" id="I214:6477;214:5162" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=I214:6477;214:5162 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="214:6478" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "170px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Body" id="I214:6478;214:6294" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Time Picker" id="I214:6478;214:6410" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "170px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* name="Content" id="I214:6478;214:6412" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      paddingTop: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderBottom:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    }}
                  >
                    {/* name="Column" id="I214:6478;214:6413" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6478;214:6414" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6415" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6416" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6417" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6418" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6419" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6420" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6421" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6422" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6423" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6424" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6425" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6426" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6427" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6428" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6429" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6478;214:6430" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6478;214:6430 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6478;214:6431" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6478;214:6432" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6433" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6434" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6435" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6436" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6437" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6438" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6439" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6440" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6441" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6442" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6443" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6444" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6445" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6446" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".datePicker__menuItem" id="I214:6478;214:6447" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6478;214:6448" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6478;214:6448 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6478;214:6449" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6478;214:6450" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6451" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6452" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6453" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6454" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6455" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6456" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6457" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6458" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6459" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6460" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6461" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6462" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6463" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6478;214:6464" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6478;214:6465" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Footer" id="I214:6478;214:6466" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I214:6478;214:6467" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  }}
                  {...{
                    iconRight: false,
                    buttonname: "Now",
                    iconLeft: false,
                    type: "link",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I214:6478;214:6468" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                  {...{
                    iconRight: false,
                    iconLeft: false,
                    buttonname: "Ok",
                    type: "primary",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="214:6479" */}
      {`${size}` === `large` && `${active}` === `true` && (
        <>
          {/* name="size=large, active=true" id="214:6479" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6480" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6480;214:5221" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              {/* name="Focus Ring" id="I214:6480;214:5222" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "40px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=I214:6480;214:5222 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="214:6481" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "170px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Body" id="I214:6481;214:6294" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Time Picker" id="I214:6481;214:6410" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "170px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* name="Content" id="I214:6481;214:6412" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      paddingTop: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderBottom:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    }}
                  >
                    {/* name="Column" id="I214:6481;214:6413" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6481;214:6414" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6415" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6416" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6417" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6418" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6419" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6420" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6421" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6422" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6423" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6424" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6425" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6426" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6427" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6428" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6429" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6481;214:6430" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6481;214:6430 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6481;214:6431" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6481;214:6432" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6433" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6434" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6435" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6436" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6437" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6438" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6439" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6440" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6441" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6442" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6443" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6444" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6445" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6446" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".datePicker__menuItem" id="I214:6481;214:6447" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6481;214:6448" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6481;214:6448 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6481;214:6449" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6481;214:6450" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6451" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6452" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6453" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6454" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6455" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6456" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6457" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6458" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6459" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6460" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6461" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6462" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6463" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6481;214:6464" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6481;214:6465" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Footer" id="I214:6481;214:6466" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I214:6481;214:6467" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  }}
                  {...{
                    iconRight: false,
                    buttonname: "Now",
                    iconLeft: false,
                    type: "link",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I214:6481;214:6468" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                  {...{
                    iconRight: false,
                    iconLeft: false,
                    buttonname: "Ok",
                    type: "primary",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="214:6482" */}
      {`${size}` === `small` && `${active}` === `true` && (
        <>
          {/* name="size=small, active=true" id="214:6482" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            {/* name="🧬 input" id="214:6483" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                alignSelf: "stretch",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Select time`}</span>
              {/* name="Icon Right" id="I214:6483;214:5281" type="INSTANCE" */}
              <Icon.QodeClockTwo
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              {/* name="Focus Ring" id="I214:6483;214:5282" type="RECTANGLE" */}
              <Flex
                style={{
                  width: "240px",
                  height: "24px",
                  position: "absolute",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
                }}
              >
                {/* name="Focus Ring" id=I214:6483;214:5282 type=RECTANGLE */}
                <></>
              </Flex>
            </Flex>
            {/* name="🧬 dropdown menu" id="214:6484" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "170px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: "-272px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background:
                  "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* name="Body" id="I214:6484;214:6294" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Time Picker" id="I214:6484;214:6410" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "170px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* name="Content" id="I214:6484;214:6412" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      paddingTop: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderBottom:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    }}
                  >
                    {/* name="Column" id="I214:6484;214:6413" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6484;214:6414" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6415" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6416" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6417" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6418" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6419" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6420" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6421" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6422" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6423" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6424" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6425" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6426" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6427" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6428" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6429" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6484;214:6430" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6484;214:6430 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6484;214:6431" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6484;214:6432" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6433" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6434" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6435" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6436" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6437" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6438" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6439" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6440" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6441" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6442" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6443" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6444" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6445" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6446" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".datePicker__menuItem" id="I214:6484;214:6447" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="I214:6484;214:6448" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=I214:6484;214:6448 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="I214:6484;214:6449" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="I214:6484;214:6450" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6451" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6452" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6453" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6454" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6455" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6456" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6457" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6458" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6459" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6460" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6461" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6462" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6463" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="I214:6484;214:6464" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="I214:6484;214:6465" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Footer" id="I214:6484;214:6466" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I214:6484;214:6467" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                  }}
                  {...{
                    iconRight: false,
                    buttonname: "Now",
                    iconLeft: false,
                    type: "link",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I214:6484;214:6468" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--color-primary-colorprimary, #1597f4)",
                  }}
                  {...{
                    iconRight: false,
                    iconLeft: false,
                    buttonname: "Ok",
                    type: "primary",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
