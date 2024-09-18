// id="434:29672"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvgI3132764230717838562960 from "@designSystem/icon/svg/QodeSvgI3132764230717838562960"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvgI3132764330717679562960 from "@designSystem/icon/svg/QodeSvgI3132764330717679562960"
import QodeSvgI3132764430717679562960 from "@designSystem/icon/svg/QodeSvgI3132764430717679562960"
import QodeSvgI3132764530717679562960 from "@designSystem/icon/svg/QodeSvgI3132764530717679562960"
import QodeSvgI3132764630717679562960 from "@designSystem/icon/svg/QodeSvgI3132764630717679562960"
import QodeSvgI3132764730717679562960 from "@designSystem/icon/svg/QodeSvgI3132764730717679562960"
import QodeSvgI3132764830717679562960 from "@designSystem/icon/svg/QodeSvgI3132764830717679562960"
import QodeSvgI3132764930717679562960 from "@designSystem/icon/svg/QodeSvgI3132764930717679562960"
import QodeSvgI3132765030717679562960 from "@designSystem/icon/svg/QodeSvgI3132765030717679562960"
import QodeSvgI3132765130717679562960 from "@designSystem/icon/svg/QodeSvgI3132765130717679562960"
import QodeSvgI7153102730717679562960 from "@designSystem/icon/svg/QodeSvgI7153102730717679562960"
import QodeSvgI7153167430717679562960 from "@designSystem/icon/svg/QodeSvgI7153167430717679562960"
import QodeSvgI4342967430717838562960 from "@designSystem/icon/svg/QodeSvgI4342967430717838562960"
import QodeSvgI4343749230717679562960 from "@designSystem/icon/svg/QodeSvgI4343749230717679562960"
import QodeSvgI4343758530717679562960 from "@designSystem/icon/svg/QodeSvgI4343758530717679562960"

export interface QodeCustom43429672Props {
  property_1?: "Default" | "Variant2"
}

export const QodeCustom43429672: React.FC<
  QodeCustom43429672Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="List | Interviewed" id="434:29672" type="COMPONENT_SET" */}
      {/* id="313:27822" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="313:27822" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "350px",
              padding: "var(--size-size-sizexxs-6px, 6px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="Interviewed/List item" id="313:27642" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              }}
            >
              {/* name="Header" id="I313:27642;307:17837" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27642;307:17838" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27642;307:17838;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27642;307:17838;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27642;307:17838;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27642;307:17838;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27642;307:17838;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27642;307:17838;5629:60" type="FRAME" */}
                  <QodeSvgI3132764230717838562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27642;307:17912" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27642;307:17913" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27642;336:19561" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27642;336:19561;434:26889" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27642;336:19561;434:26889;124:665" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background:
                            "var(--background-bg-green-hover, #11a620)",
                        }}
                      >
                        {/* name="Dot" id=I313:27642;336:19561;434:26889;124:665 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Upcoming`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27642;307:17723" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "794px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Button" id="I313:27642;307:17724" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27642;307:17725" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Button" id="I313:27642;307:17725;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27642;307:17726" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27642;307:17726 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27643" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27643;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27643;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27643;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27643;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27643;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27643;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27643;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27643;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764330717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27643;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27643;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27643;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27643;311:23056;434:26889" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27643;311:23056;434:26889;124:665" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background:
                            "var(--background-bg-green-hover, #11a620)",
                        }}
                      >
                        {/* name="Dot" id=I313:27643;311:23056;434:26889;124:665 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Upcoming`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27643;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27643;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27643;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27643;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27643;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27643;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27644" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27644;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27644;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27644;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27644;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27644;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27644;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27644;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27644;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764430717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27644;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27644;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Dang Thanh An`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27644;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27644;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27644;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I313:27644;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27644;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27644;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27644;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27644;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27644;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27644;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27645" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27645;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27645;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27645;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27645;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27645;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27645;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27645;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27645;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764530717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27645;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27645;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Jennifer Truong`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27645;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27645;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27645;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I313:27645;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27645;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27645;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27645;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27645;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27645;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27645;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27646" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27646;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27646;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27646;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27646;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27646;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27646;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27646;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27646;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764630717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27646;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27646;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27646;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27646;311:23056;434:27079" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27646;311:23056;434:27079;124:674" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--color-error-colorerror, #dc3812)",
                        }}
                      >
                        {/* name="Dot" id=I313:27646;311:23056;434:27079;124:674 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Missed`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27646;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27646;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27646;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27646;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27646;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27646;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27647" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27647;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27647;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27647;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27647;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27647;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27647;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27647;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27647;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764730717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27647;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27647;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27647;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27647;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27647;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I313:27647;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27647;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27647;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27647;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27647;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27647;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27647;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27648" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27648;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27648;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27648;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27648;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27648;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27648;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27648;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27648;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764830717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27648;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27648;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27648;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27648;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27648;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I313:27648;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27648;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27648;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27648;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27648;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27648;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27648;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27649" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27649;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27649;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27649;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27649;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27649;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27649;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27649;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27649;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132764930717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27649;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27649;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Dang Thanh An`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27649;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27649;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27649;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I313:27649;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27649;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27649;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27649;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27649;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27649;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27649;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27650" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27650;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27650;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27650;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27650;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27650;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27650;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27650;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27650;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132765030717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27650;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27650;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Jennifer Truong`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27650;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27650;311:23056;434:27079" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27650;311:23056;434:27079;124:674" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--color-error-colorerror, #dc3812)",
                        }}
                      >
                        {/* name="Dot" id=I313:27650;311:23056;434:27079;124:674 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Missed`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27650;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27650;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27650;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27650;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27650;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27650;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="313:27651" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I313:27651;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I313:27651;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I313:27651;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I313:27651;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I313:27651;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I313:27651;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I313:27651;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I313:27651;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI3132765130717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I313:27651;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I313:27651;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I313:27651;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I313:27651;311:23056;434:27079" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I313:27651;311:23056;434:27079;124:674" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--color-error-colorerror, #dc3812)",
                        }}
                      >
                        {/* name="Dot" id=I313:27651;311:23056;434:27079;124:674 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Missed`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I313:27651;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I313:27651;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I313:27651;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I313:27651;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I313:27651;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I313:27651;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="715:31027" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I715:31027;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I715:31027;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I715:31027;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I715:31027;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I715:31027;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I715:31027;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I715:31027;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I715:31027;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI7153102730717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I715:31027;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I715:31027;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I715:31027;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I715:31027;311:23056;434:27079" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I715:31027;311:23056;434:27079;124:674" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--color-error-colorerror, #dc3812)",
                        }}
                      >
                        {/* name="Dot" id=I715:31027;311:23056;434:27079;124:674 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Missed`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I715:31027;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I715:31027;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I715:31027;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I715:31027;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I715:31027;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I715:31027;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="715:31674" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I715:31674;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I715:31674;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I715:31674;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I715:31674;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I715:31674;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I715:31674;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I715:31674;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I715:31674;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI7153167430717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I715:31674;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I715:31674;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Alexander James Monroe`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I715:31674;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I715:31674;311:23056;434:27079" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I715:31674;311:23056;434:27079;124:674" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--color-error-colorerror, #dc3812)",
                        }}
                      >
                        {/* name="Dot" id=I715:31674;311:23056;434:27079;124:674 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Missed`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I715:31674;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I715:31674;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I715:31674;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I715:31674;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I715:31674;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I715:31674;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Footer" id="434:28595" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 16px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Frame 37294" id="434:28596" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Page: 1/5`}</span>
              </div>
              {/* name="Pagination" id="434:28598" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "208px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="🧬 left" id="I434:28598;171:27242" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  {/* name="chevron-left" id="I434:28598;171:27242;171:26645" type="INSTANCE" */}
                  <Icon.QodeChevronLeft
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="pages" id="I434:28598;2747:12312" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-margin-marginxs, 8px)",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".pagination__number" id="I434:28598;171:27243" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      background: "var(--neutral-gray-100, #1d1d1d)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`1`}</span>
                  </Flex>
                  {/* name="🧬 item 2" id="I434:28598;171:27244" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
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
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2`}</span>
                  </Flex>
                  {/* name="🧬 item 3" id="I434:28598;171:27245" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
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
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`3`}</span>
                  </Flex>
                  {/* name="🧬 item 4" id="I434:28598;171:27246" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
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
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`4`}</span>
                  </Flex>
                  {/* name="🧬 item 5" id="I434:28598;171:27247" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "var(--size-padding-paddingxxs, 4px)",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradius, 8px)",
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
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`5`}</span>
                  </Flex>
                </div>
                {/* name="🧬 right" id="I434:28598;171:27248" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "var(--size-height-controlheightsm, 24px)",
                    padding: "var(--size-padding-paddingxxs, 4px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                  }}
                >
                  {/* name="chevron-right" id="I434:28598;171:27248;171:26647" type="INSTANCE" */}
                  <Icon.QodeChevronRight
                    style={{
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    }}
                    {...{}}
                  />
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="434:29673" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="434:29673" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "350px",
              height: "768px",
              padding: "var(--size-size-sizexxs-6px, 6px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              flexShrink: "0",
              background: "var(--neutral-gray-10, #e3e3e3)",
            }}
          >
            {/* name="Interviewed/List item" id="434:29674" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-small, 4px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              }}
            >
              {/* name="Header" id="I434:29674;307:17837" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:29674;307:17838" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:29674;307:17838;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:29674;307:17838;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:29674;307:17838;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:29674;307:17838;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I434:29674;307:17838;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:29674;307:17838;5629:60" type="FRAME" */}
                  <QodeSvgI4342967430717838562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I434:29674;307:17912" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:29674;307:17913" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I434:29674;336:19561" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I434:29674;336:19561;434:26889" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I434:29674;336:19561;434:26889;124:665" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background:
                            "var(--background-bg-green-hover, #11a620)",
                        }}
                      >
                        {/* name="Dot" id=I434:29674;336:19561;434:26889;124:665 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Upcoming`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I434:29674;307:17723" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "794px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="Button" id="I434:29674;307:17724" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I434:29674;307:17725" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Button" id="I434:29674;307:17725;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I434:29674;307:17726" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I434:29674;307:17726 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="434:37492" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I434:37492;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:37492;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:37492;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:37492;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:37492;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:37492;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I434:37492;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:37492;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI4343749230717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I434:37492;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:37492;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Nguyen Thi Tuyet Trang`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I434:37492;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I434:37492;311:23056;434:26889" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I434:37492;311:23056;434:26889;124:665" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background:
                            "var(--background-bg-green-hover, #11a620)",
                        }}
                      >
                        {/* name="Dot" id=I434:37492;311:23056;434:26889;124:665 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Upcoming`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I434:37492;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I434:37492;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I434:37492;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I434:37492;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I434:37492;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I434:37492;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="Interviewed/List item" id="434:37585" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              }}
            >
              {/* name="Header" id="I434:37585;307:17678" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I434:37585;307:17679" type="INSTANCE" */}
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
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
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
                  {/* name="user-large" id="I434:37585;307:17679;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      padding: "2.4px 2.401px 2.4px 2.399px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "12px",
                      top: "12px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I434:37585;307:17679;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "48px",
                      height: "48px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      position: "absolute",
                      borderRadius: "666px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I434:37585;307:17679;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I434:37585;307:17679;5629:59" type="INSTANCE" */}
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
                    {/* name="Badge" id=I434:37585;307:17679;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I434:37585;307:17679;5629:60" type="FRAME" */}
                  <QodeSvgI4343758530717679562960
                    style={{
                      width: "48px",
                      height: "48px",
                      position: "absolute",
                    }}
                    {...{}}
                  />
                </Flex>
                {/* name="R" id="I434:37585;307:17680" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="wrap" id="I434:37585;307:17681" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      }}
                    >{`Dang Thanh An`}</span>
                  </div>
                  {/* name="Interviewed/Status" id="I434:37585;311:23056" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* name="Badge__Status" id="I434:37585;311:23056;434:26991" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I434:37585;311:23056;434:26991;124:683" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--background-bg-primary, #1597f4)",
                        }}
                      >
                        {/* name="Dot" id=I434:37585;311:23056;434:26991;124:683 type=FRAME */}
                        <></>
                      </div>
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
                      >{`Interview finished`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Frame 37201" id="I434:37585;307:17689" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Button" id="I434:37585;307:17690" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  }}
                  {...{
                    icononly: <Icon.QodeMagnifyingGlass />,
                    iconL: <Icon.QodePlus />,
                    iconR: <Icon.QodeMagnifyingGlass />,
                    title: "Add notes",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Upload CV" id="I434:37585;307:17691" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* name="Button" id="I434:37585;307:17691;11588:3979" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderround, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    }}
                    {...{
                      icononly: <Icon.QodeMagnifyingGlass />,
                      iconR: <Icon.QodeMagnifyingGlass />,
                      iconL: true,
                      title: "Upload CV",
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </Flex>
              </div>
              {/* name="Indicator" id="I434:37585;307:17692" type="ELLIPSE" */}
              <Flex
                style={{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "-7px",
                  borderRadius: "8px",
                  background: "#FF7878",
                }}
              >
                {/* name="Indicator" id=I434:37585;307:17692 type=ELLIPSE */}
                <></>
              </Flex>
            </Flex>
            {/* name="End of list" id="434:30291" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                padding: "20px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-30, #656565)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`End of result`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
