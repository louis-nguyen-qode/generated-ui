// id="531:39576"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeTag } from "@designSystem/ant/QodeTag"
import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"
import QodeSvgI5313995418217652 from "@designSystem/icon/svg/QodeSvgI5313995418217652"
import { QodeDropdown } from "@designSystem/ant/QodeDropdown"
import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"
import QodeSvgI695323336773374466431806 from "@designSystem/icon/svg/QodeSvgI695323336773374466431806"
import QodeSvgI695323346773374466431806 from "@designSystem/icon/svg/QodeSvgI695323346773374466431806"
import QodeSvgI695323376773402167733736 from "@designSystem/icon/svg/QodeSvgI695323376773402167733736"

export interface QodeCustom53139576Props {
  property_1?: "Default" | "Variant2" | "Variant4"
}

export const QodeCustom53139576: React.FC<
  QodeCustom53139576Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Talent profile" id="531:39576" type="COMPONENT_SET" */}
      {/* id="531:38865" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="531:38865" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1020px",
              height: "714px",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "12px 12px 0px 0px",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="Left" id="350:19701" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "340px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="Card" id="350:21347" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "40px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="avatar" id="350:19702" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "80px",
                    height: "80px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "1110px",
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
                  {/* name="user-large" id="I350:19702;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "4px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "20px",
                      top: "20px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I350:19702;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      padding: "var(--size-padding-paddingxs, 20px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      position: "absolute",
                      borderRadius: "1110px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I350:19702;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I350:19702;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "15px",
                      height: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "2.5px",
                      bottom: "2.5px",
                      borderRadius: "8.889px",
                      border:
                        "2.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I350:19702;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I350:19702;5629:60" type="FRAME" */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      position: "absolute",
                    }}
                  >
                    {/* name="Ellipse 2 (Stroke)" id="I350:19702;5629:61" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "80px",
                        height: "80px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id=I350:19702;5629:61 type=VECTOR */}
                      <></>
                    </Flex>
                    {/* name="Vector" id="I350:19702;5629:62" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "53.62px",
                        height: "54.553px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I350:19702;5629:62 type=VECTOR */}
                      <></>
                    </Flex>
                  </div>
                </Flex>
                {/* name="Frame 37378" id="482:27777" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Frame 37368" id="359:20178" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="Name yoe" id="350:19704" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-heading4, 24px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="350:20568" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="350:19709" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="location-dot" id="350:19710" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
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
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="482:27764" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Button" id="482:28782" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "110px",
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
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconRight: false,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="521:29469" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    iconRight: false,
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35813" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`CV`}</span>
                {/* name="Button" id="I559:35813;559:35784" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "90px",
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
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    buttonname: "Upload",
                    selectIconLeft: <Icon.QodeUpload />,
                    iconLeft: true,
                    type: "default",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </Flex>
              {/* name="Job status" id="350:21336" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="352:19620" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Job status`}</span>
                  {/* name="Button" id="352:19621" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "53px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      iconRight: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="469:26943" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Job status" id="545:32248" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32248;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32248;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32248;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32248;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Senior Software Engineer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32248;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32248;545:32242;124:665" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32248;545:32242;124:665 type=FRAME */}
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
                      >{`Interview`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="545:32289" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32289;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32289;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32289;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32289;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Technical Lead`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32289;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32289;545:32242;124:683" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32289;545:32242;124:683 type=FRAME */}
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
                      >{`Shortlisted`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="545:32330" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32330;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32330;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32330;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32330;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Front-End User Interaction Developer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32330;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32330;545:32242;124:674" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32330;545:32242;124:674 type=FRAME */}
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
                      >{`Rejected`}</span>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </div>
            {/* name="Right" id="350:20567" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--app-bg, #f4f4f6)",
              }}
            >
              {/* name="Tabs" id="482:28767" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "8px 24px 0px 24px",
                  alignItems: "center",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-white, #fff)",
                }}
              >
                {/* name="🧬 tab 1" id="482:28768" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderBottom:
                      "2px solid var(--border-border-primary-20, #158de2)",
                  }}
                >
                  {/* name="user" id="I482:28768;296:15484" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Profile`}</span>
                </Flex>
                {/* name="🧬 tab 2" id="482:28769" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="grid-2" id="I482:28769;296:15491" type="INSTANCE" */}
                  <Icon.QodeGrid2
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Notes`}</span>
                </Flex>
                {/* name="🧬 tab 3" id="482:28770" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="video" id="I482:28770;296:15491" type="INSTANCE" */}
                  <Icon.QodeVideo
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Profile" id="482:27457" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "12px 20px 20px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                }}
              >
                {/* name="Body" id="I482:27457;531:29008" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Experience" id="I482:27457;531:29928" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29929" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:37958" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Skills`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:37958;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="Skils" id="I482:27457;531:30004" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="skills" id="I482:27457;531:30005" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            alignContent: "center",
                            gap: "8px",
                            alignSelf: "stretch",
                            flexWrap: "wrap",
                          }}
                        >
                          {/* name="Tag" id="I482:27457;531:30006" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                              background: "var(--primary-primary-10, #d6eeff)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "primary",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30007" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                              background: "var(--primary-primary-10, #d6eeff)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "primary",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30008" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                              background: "var(--primary-primary-10, #d6eeff)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "primary",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30009" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                              background: "var(--primary-primary-10, #d6eeff)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "primary",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30010" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30011" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30012" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30013" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30014" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30015" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30016" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30017" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:37863" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:37909" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                          {/* name="Tag" id="I482:27457;531:30018" type="INSTANCE" */}
                          <QodeTag
                            style={{
                              display: "flex",
                              height: "30px",
                              padding: "0px 12px",
                              alignItems: "center",
                              gap: "var(--size-size-sizexxs-6px, 6px)",
                              borderRadius: "4px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
                              background: "var(--neutral-gray-5, #f8f6f6)",
                            }}
                            {...{
                              rIcon: <Icon.QodeXmark />,
                              showRIcon: false,
                              color: "neutral",
                              state: "default",
                              size: "Default",
                              rounded: "False",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* name="Experience" id="I482:27457;531:29039" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29039;24:5085" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:29039;531:30152" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Experience`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:29039;531:30152;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="jobItem" id="I482:27457;531:29039;24:5093" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          paddingBottom: "var(--size-padding-paddingsm, 12px)",
                          alignItems: "flex-start",
                          gap: "var(--size-margin-marginsm, 12px)",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="avatar" id="I482:27457;531:29039;24:5093;24:4863" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            width: "42px",
                            height: "42px",
                            padding: "0px var(--size-padding-paddingxxs, 4px)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--font-size-large, 16px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                            background: "var(--neutral-white, #fff)",
                          }}
                        >
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-small, 12px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                            }}
                          >{`AW`}</span>
                          {/* name="user-large" id="I482:27457;531:29039;24:5093;24:4863;2785:8296" type="INSTANCE" */}
                          <Icon.QodeUserLarge
                            style={{
                              width: "21px",
                              height: "21px",
                              position: "absolute",
                              left: "10.5px",
                              top: "10.5px",
                            }}
                            {...{}}
                          />
                          {/* name="img" id="I482:27457;531:29039;24:5093;24:4863;2785:8297" type="FRAME" */}
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
                              borderRadius:
                                "var(--style-radius-borderradius, 8px)",
                              background:
                                "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                            }}
                          >
                            {/* name="img" id=I482:27457;531:29039;24:5093;24:4863;2785:8297 type=FRAME */}
                            <></>
                          </div>
                          {/* name="Badge" id="I482:27457;531:29039;24:5093;24:4863;2820:1281" type="INSTANCE" */}
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
                              borderRadius:
                                "var(--style-radius-borderradiuslg, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                              background:
                                "var(--color-error-colorerror, #ff6542)",
                            }}
                          >
                            {/* name="Badge" id=I482:27457;531:29039;24:5093;24:4863;2820:1281 type=INSTANCE */}
                            <></>
                          </Flex>
                        </Flex>
                        {/* name="content" id="I482:27457;531:29039;24:5093;24:4864" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            flex: "1 0 0",
                          }}
                        >
                          {/* name="Title" id="I482:27457;531:29039;24:5093;24:4865" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "flex-start",
                              alignSelf: "stretch",
                            }}
                          >
                            <span
                              style={{
                                flex: "1 0 0",
                                color: "var(--text-text-neutral-40, #464646)",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-large, 16px)",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight:
                                  "var(--line-height-lineheighlg, 24px) /* 150% */",
                              }}
                            >{`Software Engineer`}</span>
                          </div>
                          <span
                            style={{
                              alignSelf: "stretch",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--line-height-lineheight, 22px) /* 157.143% */",
                            }}
                          >{`qode.world · Full-time`}</span>
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--line-height-lineheight, 22px) /* 157.143% */",
                            }}
                          >{`Sep 2023 - Present · 9 mos`}</span>
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--line-height-lineheight, 22px) /* 157.143% */",
                            }}
                          >{`Ho Chi Minh City, Vietnam · Hybrid`}</span>
                          {/* name="experienceDescription" id="I482:27457;531:29039;24:5093;24:4870" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              gap: "var(--size-margin-marginxs, 8px)",
                              alignSelf: "stretch",
                            }}
                          >
                            <span
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: "2",
                                flex: "1 0 0",
                                overflow: "hidden",
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                textOverflow: "ellipsis",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight:
                                  "var(--line-height-lineheight, 20px)",
                              }}
                            >{`Founding Engineer at Qode, specializing in full-stack development, infrastructure design, and DevOps. Key architect of the core product, contributing to both development and operational efficiency. Working towards establishing the technical foundation for Qode, balancing innovation and scalability.`}</span>
                            {/* name="Button" id="I482:27457;531:29039;24:5093;24:4872" type="INSTANCE" */}
                            <QodeButton
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "var(--size-padding-paddingxxs, 4px)",
                                borderRadius:
                                  "var(--style-radius-borderround, 999px)",
                              }}
                              {...{
                                icononly: <Icon.QodeMagnifyingGlass />,
                                title: "See More",
                                iconR: <Icon.QodeMagnifyingGlass />,
                                iconL: false,
                                type: "text",
                                size: "small",
                                state: "default",
                                content: "default",
                                danger: false,
                                ghost: false,
                              }}
                            />
                          </div>
                        </div>
                      </Flex>
                      {/* name="groupExp" id="I482:27457;531:29039;24:5094" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "8px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="companyItem" id="I482:27457;531:29039;24:5095" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-margin-marginsm, 12px)",
                            alignSelf: "stretch",
                          }}
                        >
                          {/* name="avatar" id="I482:27457;531:29039;24:5095;24:4888" type="INSTANCE" */}
                          <Flex
                            style={{
                              display: "flex",
                              width: "42px",
                              height: "42px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "var(--font-size-large, 16px)",
                              borderRadius:
                                "var(--style-radius-borderround, 999px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                              background: "var(--neutral-white, #fff)",
                            }}
                          >
                            <span
                              style={{
                                alignSelf: "stretch",
                                color:
                                  "var(--color-neutral-text-colortext, #000)",
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
                            {/* name="user-large" id="I482:27457;531:29039;24:5095;24:4888;2681:40498" type="INSTANCE" */}
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
                            {/* name="img" id="I482:27457;531:29039;24:5095;24:4888;2681:40501" type="FRAME" */}
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
                                borderRadius:
                                  "var(--style-radius-borderround, 999px)",
                                background:
                                  "url(<path-to-image>) lightgray 7px 7px / 66.667% 66.667% no-repeat",
                              }}
                            >
                              {/* name="img" id=I482:27457;531:29039;24:5095;24:4888;2681:40501 type=FRAME */}
                              <></>
                            </div>
                            {/* name="Badge" id="I482:27457;531:29039;24:5095;24:4888;2820:1278" type="INSTANCE" */}
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
                                borderRadius:
                                  "var(--style-radius-borderradiuslg, 8px)",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                                background:
                                  "var(--color-error-colorerror, #ff6542)",
                              }}
                            >
                              {/* name="Badge" id=I482:27457;531:29039;24:5095;24:4888;2820:1278 type=INSTANCE */}
                              <></>
                            </Flex>
                            {/* name="opentoWork" id="I482:27457;531:29039;24:5095;24:4888;2894:1086" type="FRAME" */}
                            <div
                              style={{
                                width: "42px",
                                height: "42px",
                                position: "absolute",
                              }}
                            >
                              {/* name="Ellipse 2 (Stroke)" id="I482:27457;531:29039;24:5095;24:4888;2894:1087" type="VECTOR" */}
                              <Flex
                                style={{
                                  width: "42px",
                                  height: "42px",
                                  transform: "rotate(9.982deg)",
                                  flexShrink: "0",
                                  fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                                }}
                              >
                                {/* name="Ellipse 2 (Stroke)" id=I482:27457;531:29039;24:5095;24:4888;2894:1087 type=VECTOR */}
                                <></>
                              </Flex>
                              {/* name="Vector" id="I482:27457;531:29039;24:5095;24:4888;2894:1088" type="VECTOR" */}
                              <Flex
                                style={{
                                  width: "28.151px",
                                  height: "28.64px",
                                  transform: "rotate(9.982deg)",
                                  flexShrink: "0",
                                  fill: "var(--color-neutral-text-colortextsolid, #fff)",
                                }}
                              >
                                {/* name="Vector" id=I482:27457;531:29039;24:5095;24:4888;2894:1088 type=VECTOR */}
                                <></>
                              </Flex>
                            </div>
                          </Flex>
                          {/* name="content" id="I482:27457;531:29039;24:5095;24:4889" type="FRAME" */}
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
                                color: "var(--text-text-neutral-40, #464646)",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-large, 16px)",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight:
                                  "var(--line-height-lineheighlg, 24px) /* 150% */",
                              }}
                            >{`Google`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-40, #464646)",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--line-height-lineheight, 20px) /* 142.857% */",
                              }}
                            >{`Singapore · Remote`}</span>
                          </div>
                        </Flex>
                        {/* name="expItem" id="I482:27457;531:29039;24:5096" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            paddingLeft: "var(--size-padding-padding, 16px)",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "8px",
                            alignSelf: "stretch",
                          }}
                        >
                          {/* name=".exp_item_vertical" id="I482:27457;531:29039;24:5097" type="INSTANCE" */}
                          <Flex
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "var(--size-padding-paddingxl, 32px)",
                              alignSelf: "stretch",
                            }}
                          >
                            {/* name="Icon Wrapper" id="I482:27457;531:29039;24:5097;2787:9058" type="FRAME" */}
                            <div
                              style={{
                                display: "flex",
                                width: "8px",
                                padding: "7px 0px 9px 0px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "6px",
                                alignSelf: "stretch",
                              }}
                            >
                              {/* name=".steps__item_progress" id="I482:27457;531:29039;24:5097;2787:9059" type="INSTANCE" */}
                              <QodeSteps
                                style={{
                                  display: "flex",
                                  width: "8px",
                                  height: "8px",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "999px",
                                  background: "var(--neutral-gray-40, #a7a7a7)",
                                }}
                                {...{ step: "2", status: "wait", size: "dot" }}
                              />
                              {/* name=".steps__item_tail" id="I482:27457;531:29039;24:5097;2787:9060" type="INSTANCE" */}
                              <QodeSvg191983
                                style={{
                                  width: "var(--size-size-size5xs-1px, 1px)",
                                  flex: "1 0 0",
                                }}
                                {...{
                                  direction: "vertical",
                                  style: "default",
                                  state: "waiting",
                                }}
                              />
                            </div>
                            {/* name="Text Wrapper" id="I482:27457;531:29039;24:5097;2787:9061" type="FRAME" */}
                            <div
                              style={{
                                display: "flex",
                                paddingBottom:
                                  "var(--size-padding-paddingxs, 8px)",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "var(--size-margin-marginxxs, 4px)",
                                flex: "1 0 0",
                              }}
                            >
                              <span
                                style={{
                                  width: "248px",
                                  height: "24px",
                                  color: "var(--text-text-neutral-40, #464646)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-large, 16px)",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  lineHeight:
                                    "var(--line-height-lineheighlg, 24px) /* 150% */",
                                }}
                              >{`Lead Technical Software Engineer`}</span>
                              <span
                                style={{
                                  alignSelf: "stretch",
                                  color:
                                    "var(--color-neutral-text-colortext, #000)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-base, 14px)",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  lineHeight:
                                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                                }}
                              >{`Location`}</span>
                              <span
                                style={{
                                  alignSelf: "stretch",
                                  color: "var(--text-text-neutral-20, #878787)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-base, 14px)",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  lineHeight:
                                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                                }}
                              >{`Apr 2022 - Sep 2023 · 1 yr 6 mos`}</span>
                              {/* name="Description" id="I482:27457;531:29039;24:5097;2787:9277" type="FRAME" */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "flex-end",
                                  gap: "var(--size-margin-marginxs, 8px)",
                                  alignSelf: "stretch",
                                }}
                              >
                                <span
                                  style={{
                                    flex: "1 0 0",
                                    color:
                                      "var(--text-text-neutral-40, #464646)",
                                    fontFamily:
                                      'var(--family-family, "sf pro display")',
                                    fontSize: "var(--size-base, 14px)",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight:
                                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                                  }}
                                >{`As the Lead Technical Engineer of Google, I play a crucial role in shaping the technical direction of the company. By implementing best practices in full-sta...`}</span>
                                {/* name="Button" id="I482:27457;531:29039;24:5097;2787:9279" type="INSTANCE" */}
                                <QodeButton
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "var(--size-padding-paddingxxs, 4px)",
                                    borderRadius:
                                      "var(--style-radius-borderround, 999px)",
                                  }}
                                  {...{
                                    icononly: <Icon.QodeMagnifyingGlass />,
                                    title: "See More",
                                    iconR: <Icon.QodeMagnifyingGlass />,
                                    iconL: false,
                                    type: "text",
                                    size: "small",
                                    state: "default",
                                    content: "default",
                                    danger: false,
                                    ghost: false,
                                  }}
                                />
                              </div>
                            </div>
                          </Flex>
                          {/* name=".exp_item_vertical" id="I482:27457;531:29039;24:5098" type="INSTANCE" */}
                          <Flex
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "var(--size-padding-paddingxl, 32px)",
                              alignSelf: "stretch",
                            }}
                          >
                            {/* name="Icon Wrapper" id="I482:27457;531:29039;24:5098;2787:9058" type="FRAME" */}
                            <div
                              style={{
                                display: "flex",
                                width: "8px",
                                padding: "7px 0px 9px 0px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "6px",
                                alignSelf: "stretch",
                              }}
                            >
                              {/* name=".steps__item_progress" id="I482:27457;531:29039;24:5098;2787:9059" type="INSTANCE" */}
                              <QodeSteps
                                style={{
                                  display: "flex",
                                  width: "8px",
                                  height: "8px",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "999px",
                                  background: "var(--neutral-gray-40, #a7a7a7)",
                                }}
                                {...{ step: "2", status: "wait", size: "dot" }}
                              />
                              {/* name=".steps__item_tail" id="I482:27457;531:29039;24:5098;2787:9060" type="INSTANCE" */}
                              <QodeSvg191975
                                style={{
                                  width: "var(--size-size-size5xs-1px, 1px)",
                                  flex: "1 0 0",
                                }}
                                {...{
                                  direction: "horizontal",
                                  style: "default",
                                  state: "waiting",
                                }}
                              />
                            </div>
                            {/* name="Text Wrapper" id="I482:27457;531:29039;24:5098;2787:9061" type="FRAME" */}
                            <div
                              style={{
                                display: "flex",
                                paddingBottom:
                                  "var(--size-padding-paddingxs, 8px)",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "var(--size-margin-marginxxs, 4px)",
                                flex: "1 0 0",
                              }}
                            >
                              <span
                                style={{
                                  width: "248px",
                                  height: "24px",
                                  color: "var(--text-text-neutral-40, #464646)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-large, 16px)",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  lineHeight:
                                    "var(--line-height-lineheighlg, 24px) /* 150% */",
                                }}
                              >{`Software Engineer`}</span>
                              <span
                                style={{
                                  alignSelf: "stretch",
                                  color:
                                    "var(--color-neutral-text-colortext, #000)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-base, 14px)",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  lineHeight:
                                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                                }}
                              >{`Location`}</span>
                              <span
                                style={{
                                  alignSelf: "stretch",
                                  color: "var(--text-text-neutral-20, #878787)",
                                  fontFamily:
                                    'var(--font-family-fontfamily, "sf pro display")',
                                  fontSize: "var(--font-size-base, 14px)",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  lineHeight:
                                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                                }}
                              >{`Apr 2021 - Mar 2023 · 1 yr`}</span>
                              {/* name="Description" id="I482:27457;531:29039;24:5098;2787:9277" type="FRAME" */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "flex-end",
                                  gap: "var(--size-margin-marginxs, 8px)",
                                  alignSelf: "stretch",
                                }}
                              >
                                <span
                                  style={{
                                    flex: "1 0 0",
                                    color:
                                      "var(--text-text-neutral-40, #464646)",
                                    fontFamily:
                                      'var(--family-family, "sf pro display")',
                                    fontSize: "var(--size-base, 14px)",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight:
                                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                                  }}
                                >{`As the software engineer, I oversaw the entire product lifecycle. I implemented new features, enhanced application security, and transitioned to a serverless architect...`}</span>
                                {/* name="Button" id="I482:27457;531:29039;24:5098;2787:9279" type="INSTANCE" */}
                                <QodeButton
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "var(--size-padding-paddingxxs, 4px)",
                                    borderRadius:
                                      "var(--style-radius-borderround, 999px)",
                                  }}
                                  {...{
                                    icononly: <Icon.QodeMagnifyingGlass />,
                                    title: "See More",
                                    iconR: <Icon.QodeMagnifyingGlass />,
                                    iconL: false,
                                    type: "text",
                                    size: "small",
                                    state: "default",
                                    content: "default",
                                    danger: false,
                                    ghost: false,
                                  }}
                                />
                              </div>
                            </div>
                          </Flex>
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        color: "var(--text-text-neutral-20, #878787)",
                        textAlign: "center",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                      }}
                    >{`Show all 3 experiences`}</span>
                  </Flex>
                  {/* name="Education" id="I482:27457;531:29040" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "var(--size-margin-margin, 16px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29040;24:5120" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:29040;531:32092" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Education`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:29040;531:32092;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="educationItem" id="I482:27457;531:29040;24:5128" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-margin-marginsm, 12px)",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="avatar" id="I482:27457;531:29040;24:5128;24:4901" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            width: "42px",
                            height: "42px",
                            padding: "0px var(--size-padding-paddingxxs, 4px)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--font-size-large, 16px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                            background: "var(--neutral-white, #fff)",
                          }}
                        >
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
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
                          {/* name="user-large" id="I482:27457;531:29040;24:5128;24:4901;2785:8296" type="INSTANCE" */}
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
                          {/* name="img" id="I482:27457;531:29040;24:5128;24:4901;2785:8297" type="FRAME" */}
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
                              borderRadius:
                                "var(--style-radius-borderradius, 8px)",
                              background:
                                "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                            }}
                          >
                            {/* name="img" id=I482:27457;531:29040;24:5128;24:4901;2785:8297 type=FRAME */}
                            <></>
                          </div>
                          {/* name="Badge" id="I482:27457;531:29040;24:5128;24:4901;2820:1281" type="INSTANCE" */}
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
                              borderRadius:
                                "var(--style-radius-borderradiuslg, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                              background:
                                "var(--color-error-colorerror, #ff6542)",
                            }}
                          >
                            {/* name="Badge" id=I482:27457;531:29040;24:5128;24:4901;2820:1281 type=INSTANCE */}
                            <></>
                          </Flex>
                        </Flex>
                        {/* name="content" id="I482:27457;531:29040;24:5128;24:4902" type="FRAME" */}
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
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-large, 16px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--line-height-lineheighlg, 24px) /* 150% */",
                            }}
                          >{`University`}</span>
                          <span
                            style={{
                              alignSelf: "stretch",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Degree - Major`}</span>
                          <span
                            style={{
                              alignSelf: "stretch",
                              color: "var(--text-text-neutral-20, #878787)",
                              fontFamily:
                                'var(--font-family-fontfamily, "sf pro display")',
                              fontSize: "var(--font-size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--line-height-lineheight, 20px) /* 142.857% */",
                            }}
                          >{`2012-2016`}</span>
                          {/* name="experienceDescription" id="I482:27457;531:29040;24:5128;24:4906" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              gap: "var(--size-margin-marginxs, 8px)",
                              alignSelf: "stretch",
                            }}
                          >
                            <span
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: "2",
                                flex: "1 0 0",
                                overflow: "hidden",
                                color: "var(--text-text-neutral-40, #464646)",
                                textOverflow: "ellipsis",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...`}</span>
                            {/* name="Button" id="I482:27457;531:29040;24:5128;24:4908" type="INSTANCE" */}
                            <QodeButton
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "var(--size-padding-paddingxxs, 4px)",
                                borderRadius:
                                  "var(--style-radius-borderround, 999px)",
                              }}
                              {...{
                                icononly: <Icon.QodeMagnifyingGlass />,
                                title: "See More",
                                iconR: <Icon.QodeMagnifyingGlass />,
                                iconL: false,
                                type: "text",
                                size: "small",
                                state: "default",
                                content: "default",
                                danger: false,
                                ghost: false,
                              }}
                            />
                          </div>
                        </div>
                        {/* name="Button" id="I482:27457;531:29040;24:5128;24:4909" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--size-padding-paddingxxs, 4px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                          }}
                          {...{
                            iconR: "630:8727",
                            icononly: <Icon.QodePencil />,
                            title: "Edit",
                            iconL: true,
                            type: "link",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                    </div>
                  </Flex>
                  {/* name="Certificates" id="I482:27457;531:29041" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29041;24:5142" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:29041;531:33176" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Licenses & Certifications`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:29041;531:33176;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="educationItem" id="I482:27457;531:29041;24:5150" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-margin-marginsm, 12px)",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="avatar" id="I482:27457;531:29041;24:5151" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            width: "42px",
                            height: "42px",
                            padding: "0px var(--size-padding-paddingxxs, 4px)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--font-size-large, 16px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                            background: "var(--neutral-white, #fff)",
                          }}
                        >
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
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
                          {/* name="user-large" id="I482:27457;531:29041;24:5151;2785:8296" type="INSTANCE" */}
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
                          {/* name="img" id="I482:27457;531:29041;24:5151;2785:8297" type="FRAME" */}
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
                              borderRadius:
                                "var(--style-radius-borderradius, 8px)",
                              background:
                                "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                            }}
                          >
                            {/* name="img" id=I482:27457;531:29041;24:5151;2785:8297 type=FRAME */}
                            <></>
                          </div>
                          {/* name="Badge" id="I482:27457;531:29041;24:5151;2820:1281" type="INSTANCE" */}
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
                              borderRadius:
                                "var(--style-radius-borderradiuslg, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                              background:
                                "var(--color-error-colorerror, #ff6542)",
                            }}
                          >
                            {/* name="Badge" id=I482:27457;531:29041;24:5151;2820:1281 type=INSTANCE */}
                            <></>
                          </Flex>
                        </Flex>
                        {/* name="content" id="I482:27457;531:29041;24:5152" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "var(--size-margin-marginxs, 8px)",
                            flex: "1 0 0",
                          }}
                        >
                          {/* name="content" id="I482:27457;531:29041;24:5153" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              alignSelf: "stretch",
                            }}
                          >
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-large, 16px)",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight:
                                  "var(--line-height-lineheighlg, 24px) /* 150% */",
                              }}
                            >{`License / Certification Name`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-40, #464646)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`Company`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-20, #878787)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`2012-2016`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-20, #878787)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`Credential ID`}</span>
                          </div>
                          {/* name="Button" id="I482:27457;531:29041;67:3161" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              height:
                                "var(--size-height-controlheightsm, 24px)",
                              padding: "4px 8px",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                              background: "var(--background-bg-white, #fff)",
                            }}
                            {...{
                              selectIconRight: <Icon.QodeUpRightFromSquare />,
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              iconRight: true,
                              buttonname: "Show credentials",
                              selectIconLeft: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "default",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Flex>
                  {/* name="Awards" id="I482:27457;531:29042" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "var(--size-margin-margin, 16px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29042;24:5196" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:29042;531:35058" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Honors & Awards`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:29042;531:35058;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="awardItem" id="I482:27457;531:29042;24:5204" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          height: "104px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "var(--size-margin-marginxxs, 4px)",
                          alignSelf: "stretch",
                        }}
                      >
                        <span
                          style={{
                            width: "496px",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Staff of the year`}</span>
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Timeframe - Total Time`}</span>
                        {/* name="company" id="I482:27457;531:29042;24:5204;24:4926" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          {/* name="avatar" id="I482:27457;531:29042;24:5204;24:4927" type="INSTANCE" */}
                          <Flex
                            style={{
                              display: "flex",
                              width: "24px",
                              height: "24px",
                              padding:
                                "0px var(--size-padding-paddingxxs, 4px)",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "var(--font-size-large, 16px)",
                              borderRadius:
                                "var(--style-radius-borderround, 999px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                              background: "var(--neutral-white, #fff)",
                            }}
                          >
                            <span
                              style={{
                                alignSelf: "stretch",
                                color:
                                  "var(--color-neutral-text-colortext, #000)",
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
                            {/* name="user-large" id="I482:27457;531:29042;24:5204;24:4927;2785:8296" type="INSTANCE" */}
                            <Icon.QodeUserLarge
                              style={{
                                display: "flex",
                                width: "12px",
                                height: "12px",
                                padding: "1.2px",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                left: "6px",
                                top: "6px",
                              }}
                              {...{}}
                            />
                            {/* name="img" id="I482:27457;531:29042;24:5204;24:4927;2785:8297" type="FRAME" */}
                            <div
                              style={{
                                display: "flex",
                                width: "24px",
                                height: "24px",
                                padding: "var(--size-padding-paddingxs, 8px)",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                position: "absolute",
                                borderRadius:
                                  "var(--style-radius-borderradius, 8px)",
                                background:
                                  "url(<path-to-image>) lightgray 4px 4px / 66.667% 66.667% no-repeat",
                              }}
                            >
                              {/* name="img" id=I482:27457;531:29042;24:5204;24:4927;2785:8297 type=FRAME */}
                              <></>
                            </div>
                            {/* name="Badge" id="I482:27457;531:29042;24:5204;24:4927;2820:1281" type="INSTANCE" */}
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
                                borderRadius:
                                  "var(--style-radius-borderradiuslg, 8px)",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                                background:
                                  "var(--color-error-colorerror, #ff6542)",
                              }}
                            >
                              {/* name="Badge" id=I482:27457;531:29042;24:5204;24:4927;2820:1281 type=INSTANCE */}
                              <></>
                            </Flex>
                          </Flex>
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-40, #464646)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`3 Experiences across Google & 2 other companies`}</span>
                        </div>
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Description`}</span>
                      </Flex>
                    </div>
                  </Flex>
                  {/* name="sectionVolunteering" id="I482:27457;531:29043" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      paddingBottom: "12px",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="body" id="I482:27457;531:29043;24:5169" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Profile/Section header" id="I482:27457;531:29043;531:33851" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          padding: "12px 0px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                          borderBottom:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading6, 16px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                          }}
                        >{`Volunteering`}</span>
                        <span
                          style={{
                            color:
                              "var(--color-neutral-text-colortextlabel, rgba(0, 0, 0, 0.88))",
                            fontFamily:
                              'var(--font-family-fontfamily, "sf pro display")',
                            fontSize: "var(--font-size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                          }}
                        >{`Accessibility`}</span>
                        {/* name="Button" id="I482:27457;531:29043;531:33851;531:30083" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "48px",
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
                          {...{
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            iconRight: false,
                            buttonname: "Edit",
                            selectIconLeft: <Icon.QodeIcons />,
                            iconLeft: false,
                            type: "default",
                            size: "small",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </Flex>
                      {/* name="educationItem" id="I482:27457;531:29043;24:5177" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-margin-marginsm, 12px)",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="avatar" id="I482:27457;531:29043;24:5178" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            width: "42px",
                            height: "42px",
                            padding: "0px var(--size-padding-paddingxxs, 4px)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--font-size-large, 16px)",
                            borderRadius:
                              "var(--style-radius-borderround, 999px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                            background: "var(--neutral-white, #fff)",
                          }}
                        >
                          <span
                            style={{
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
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
                          {/* name="user-large" id="I482:27457;531:29043;24:5178;2785:8296" type="INSTANCE" */}
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
                          {/* name="img" id="I482:27457;531:29043;24:5178;2785:8297" type="FRAME" */}
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
                              borderRadius:
                                "var(--style-radius-borderradius, 8px)",
                              background:
                                "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                            }}
                          >
                            {/* name="img" id=I482:27457;531:29043;24:5178;2785:8297 type=FRAME */}
                            <></>
                          </div>
                          {/* name="Badge" id="I482:27457;531:29043;24:5178;2820:1281" type="INSTANCE" */}
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
                              borderRadius:
                                "var(--style-radius-borderradiuslg, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-background-colorbgcontainer, #fff)",
                              background:
                                "var(--color-error-colorerror, #ff6542)",
                            }}
                          >
                            {/* name="Badge" id=I482:27457;531:29043;24:5178;2820:1281 type=INSTANCE */}
                            <></>
                          </Flex>
                        </Flex>
                        {/* name="content" id="I482:27457;531:29043;24:5179" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "var(--size-margin-marginxs, 8px)",
                            flex: "1 0 0",
                          }}
                        >
                          {/* name="content" id="I482:27457;531:29043;24:5180" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              alignSelf: "stretch",
                            }}
                          >
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-50, #1d1d1d)",
                                fontFamily:
                                  'var(--font-family-fontfamily, "sf pro display")',
                                fontSize: "var(--font-size-large, 16px)",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight:
                                  "var(--line-height-lineheighlg, 24px) /* 150% */",
                              }}
                            >{`Role`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-40, #464646)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`Organization name`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-20, #878787)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`From Dec 2021 - To Dec 2023`}</span>
                            <span
                              style={{
                                alignSelf: "stretch",
                                color: "var(--text-text-neutral-20, #878787)",
                                fontFamily:
                                  'var(--family-family, "sf pro display")',
                                fontSize: "var(--size-base, 14px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight:
                                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              }}
                            >{`Activity Name`}</span>
                          </div>
                          {/* name="Button" id="I482:27457;531:29043;24:5185" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              height:
                                "var(--size-height-controlheightsm, 24px)",
                              padding:
                                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "var(--size-padding-paddingxxs, 4px)",
                              borderRadius:
                                "var(--style-radius-borderround, 999px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                              background:
                                "var(--color-neutral-background-colorbgcontainer, #fff)",
                            }}
                            {...{
                              iconR: true,
                              icononly: <Icon.QodeMagnifyingGlass />,
                              title: "Show credential",
                              iconL: false,
                              type: "default",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="531:39577" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="531:39577" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1020px",
              height: "714px",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "12px 12px 0px 0px",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="Left" id="531:39578" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "340px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="Card" id="531:39579" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "40px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="avatar" id="531:39580" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "80px",
                    height: "80px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "1110px",
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
                  {/* name="user-large" id="I531:39580;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "4px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "20px",
                      top: "20px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I531:39580;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      padding: "var(--size-padding-paddingxs, 20px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      position: "absolute",
                      borderRadius: "1110px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I531:39580;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I531:39580;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "15px",
                      height: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "2.5px",
                      bottom: "2.5px",
                      borderRadius: "8.889px",
                      border:
                        "2.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I531:39580;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I531:39580;5629:60" type="FRAME" */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      position: "absolute",
                    }}
                  >
                    {/* name="Ellipse 2 (Stroke)" id="I531:39580;5629:61" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "80px",
                        height: "80px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id=I531:39580;5629:61 type=VECTOR */}
                      <></>
                    </Flex>
                    {/* name="Vector" id="I531:39580;5629:62" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "53.62px",
                        height: "54.553px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I531:39580;5629:62 type=VECTOR */}
                      <></>
                    </Flex>
                  </div>
                </Flex>
                {/* name="Frame 37378" id="531:39581" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Frame 37368" id="531:39582" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="Name yoe" id="531:39583" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-heading4, 24px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="531:39586" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="531:39588" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="location-dot" id="531:39589" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
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
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="531:39591" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Button" id="531:39592" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "110px",
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
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconRight: false,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="531:39593" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    iconRight: false,
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35899" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`CV`}</span>
                {/* name="Button" id="I559:35899;559:35784" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "90px",
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
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    buttonname: "Upload",
                    selectIconLeft: <Icon.QodeUpload />,
                    iconLeft: true,
                    type: "default",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </Flex>
              {/* name="Job status" id="545:32848" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="545:32849" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Job status`}</span>
                  {/* name="Button" id="545:32851" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "53px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      iconRight: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="545:32852" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Job status" id="545:32853" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32853;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32853;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32853;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32853;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Senior Software Engineer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32853;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32853;545:32242;124:665" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32853;545:32242;124:665 type=FRAME */}
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
                      >{`Interview`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="545:32854" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32854;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32854;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32854;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32854;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Technical Lead`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32854;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32854;545:32242;124:683" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32854;545:32242;124:683 type=FRAME */}
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
                      >{`Shortlisted`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="545:32855" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I545:32855;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I545:32855;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I545:32855;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I545:32855;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Front-End User Interaction Developer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I545:32855;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32855;545:32242;124:674" type="FRAME" */}
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
                        {/* name="Dot" id=I545:32855;545:32242;124:674 type=FRAME */}
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
                      >{`Rejected`}</span>
                    </Flex>
                  </Flex>
                </div>
                {/* name="Frame 37363" id="545:32856" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Frame 37363" id="545:32857" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                    }}
                  >
                    {/* name="briefcase" id="545:32858" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{
                        display: "flex",
                        width: "16px",
                        height: "16px",
                        padding: "1.6px 1.6px 2.4px 1.6px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      {...{}}
                    />
                    {/* name="Frame 37360" id="545:32859" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-40, #464646)",
                          textAlign: "right",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Frontend developer`}</span>
                    </div>
                  </div>
                  {/* name="Frame 37361" id="545:32861" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    {/* name="Badge__Status" id="545:32862" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I545:32862;124:677" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--gold-gold-50, #f5a60c)",
                        }}
                      >
                        {/* name="Dot" id=I545:32862;124:677 type=FRAME */}
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
                      >{`Shortlisted`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Right" id="531:39621" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Tabs" id="531:39622" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "8px 24px 0px 24px",
                  alignItems: "center",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-white, #fff)",
                }}
              >
                {/* name="🧬 tab 1" id="531:39623" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="🎰 icon" id="I531:39623;296:15491" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Profile`}</span>
                </Flex>
                {/* name="🧬 tab 2" id="531:39624" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderBottom:
                      "2px solid var(--border-border-primary-20, #158de2)",
                  }}
                >
                  {/* name="🎰 icon" id="I531:39624;296:15484" type="INSTANCE" */}
                  <Icon.QodeGrid2
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Notes`}</span>
                </Flex>
                {/* name="🧬 tab 3" id="531:39625" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="video" id="I531:39625;296:15491" type="INSTANCE" */}
                  <Icon.QodeVideo
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Frame 37383" id="531:39953" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
              >
                {/* name="Input__Text Area" id="531:39954" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    height: "220px",
                    padding:
                      "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
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
                  >{`Write your notes here`}</span>
                  {/* name="Resizer" id="I531:39954;182:17652" type="BOOLEAN_OPERATION" */}
                  <QodeSvgI5313995418217652
                    style={{
                      width: "8.354px",
                      height: "8.354px",
                      position: "absolute",
                      left: "629px",
                      top: "209px",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                    {...{}}
                  />
                  {/* name="button" id="I531:39954;3012:28019" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "606px",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      position: "absolute",
                      left: "8px",
                      bottom: "4px",
                    }}
                  >
                    {/* name="Button" id="I531:39954;3012:28020" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "var(--size-padding-paddingxxs, 4px) 0px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      }}
                      {...{
                        iconRight: false,
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodeMagnifyingGlass />,
                        buttonname: "Rewrite",
                        selectIconLeft: <Icon.QodeArrowsRotateReverse />,
                        iconLeft: true,
                        type: "link",
                        size: "small",
                        state: "default",
                        content: "default",
                        danger: false,
                        ghost: false,
                      }}
                    />
                    {/* name="vote" id="I531:39954;3012:28021" type="FRAME" */}
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      {/* name="Button" id="I531:39954;3012:28022" type="INSTANCE" */}
                      <QodeButton
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
                        {...{
                          onlyIcon: <Icon.QodeThumbsUp />,
                          iconLeft: false,
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          buttonname: "Rewrite",
                          iconRight: false,
                          selectIconLeft: <Icon.QodeIcons />,
                          type: "text",
                          size: "small",
                          state: "default",
                          content: "icon",
                          danger: false,
                          ghost: false,
                        }}
                      />
                      {/* name="Button" id="I531:39954;3012:28023" type="INSTANCE" */}
                      <QodeButton
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
                        {...{
                          onlyIcon: <Icon.QodeThumbsDown />,
                          iconLeft: false,
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          buttonname: "Rewrite",
                          iconRight: false,
                          selectIconLeft: <Icon.QodeIcons />,
                          type: "text",
                          size: "small",
                          state: "default",
                          content: "icon",
                          danger: false,
                          ghost: false,
                        }}
                      />
                    </div>
                  </div>
                </Flex>
                {/* name="Screenings" id="531:39955" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "20px",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  }}
                >
                  {/* name="Title" id="531:39957" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Input__Label" id="531:39958" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "125px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      }}
                    >
                      {/* name="Icon" id="I531:39958;5769:7203" type="INSTANCE" */}
                      <Icon.QodeImageUser
                        style={{
                          width: "16px",
                          height: "16px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
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
                      >{`Basic info`}</span>
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
                      {/* name="Icon" id="I531:39958;182:6058" type="INSTANCE" */}
                      <Icon.QodeCircleQuestion
                        style={{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="Radio/Basic" id="531:39959" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Frame 37386" id="531:39960" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {/* name="🧬 item 1" id="531:39961" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          }}
                        >
                          {/* name="Radio Wrapper" id="I531:39961;188:311" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "3px 0px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            {/* name="Radio" id="I531:39961;188:315" type="FRAME" */}
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "999px",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                                background: "var(--background-bg-white, #fff)",
                              }}
                            >
                              {/* name="Radio" id=I531:39961;188:315 type=FRAME */}
                              <></>
                            </div>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Male`}</span>
                        </Flex>
                        {/* name="🧬 item 2" id="531:39962" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          }}
                        >
                          {/* name="Radio Wrapper" id="I531:39962;188:311" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "3px 0px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            {/* name="Radio" id="I531:39962;188:315" type="FRAME" */}
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "999px",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                                background: "var(--background-bg-white, #fff)",
                              }}
                            >
                              {/* name="Radio" id=I531:39962;188:315 type=FRAME */}
                              <></>
                            </div>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Female`}</span>
                        </Flex>
                        {/* name="🧬 item 3" id="531:39963" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          }}
                        >
                          {/* name="Radio Wrapper" id="I531:39963;188:311" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "3px 0px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            {/* name="Radio" id="I531:39963;188:315" type="FRAME" */}
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "999px",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                                background: "var(--background-bg-white, #fff)",
                              }}
                            >
                              {/* name="Radio" id=I531:39963;188:315 type=FRAME */}
                              <></>
                            </div>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Other`}</span>
                        </Flex>
                      </div>
                      {/* name="Input/Text" id="531:39964" type="INSTANCE" */}
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
                        {/* name="🎰 icon left" id="I531:39964;182:10116" type="INSTANCE" */}
                        <Icon.QodeUser
                          style={{
                            display: "flex",
                            width: "16px",
                            height: "16px",
                            padding: "1.6px 2.4px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          {...{}}
                        />
                        <span
                          style={{
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
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
                            color: "var(--text-text-placeholder, #a7a7a7)",
                            textOverflow: "ellipsis",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Age or DoB`}</span>
                        <span
                          style={{
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`SUF`}</span>
                        {/* name="🎰 icon right" id="I531:39964;182:10118" type="INSTANCE" */}
                        <Icon.QodeClockEight
                          style={{
                            display: "flex",
                            width: "16px",
                            height: "16px",
                            padding: "1.6px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          {...{}}
                        />
                      </Flex>
                    </div>
                  </div>
                  {/* name="Line 2" id="531:39965" type="LINE" */}
                  <Flex
                    style={{
                      width: "600px",
                      height: "1px",
                      background: "var(--border-border-neutral-20, #e3e3e3)",
                    }}
                  >
                    {/* name="Line 2" id=531:39965 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Time" id="531:39966" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "24px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Input__Label" id="531:39967" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "125px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      }}
                    >
                      {/* name="Icon" id="I531:39967;5769:7203" type="INSTANCE" */}
                      <Icon.QodeMoneyBillWave
                        style={{
                          width: "16px",
                          height: "16px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
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
                      >{`Salary`}</span>
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
                      {/* name="Icon" id="I531:39967;182:6058" type="INSTANCE" */}
                      <Icon.QodeCircleQuestion
                        style={{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="Frame 37384" id="531:39968" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "10px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Time" id="531:39969" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Input/Text" id="531:39970" type="INSTANCE" */}
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
                          {/* name="🎰 icon left" id="I531:39970;182:10116" type="INSTANCE" */}
                          <Icon.QodeUser
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.6px 2.4px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                          <span
                            style={{
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
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
                              color: "var(--text-text-placeholder, #a7a7a7)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Current`}</span>
                          <span
                            style={{
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`SUF`}</span>
                          {/* name="🎰 icon right" id="I531:39970;182:10118" type="INSTANCE" */}
                          <Icon.QodeClockEight
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </Flex>
                        {/* name="Input/Text" id="531:39971" type="INSTANCE" */}
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
                          {/* name="🎰 icon left" id="I531:39971;182:10116" type="INSTANCE" */}
                          <Icon.QodeUser
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.6px 2.4px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                          <span
                            style={{
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
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
                              color: "var(--text-text-placeholder, #a7a7a7)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Expected`}</span>
                          <span
                            style={{
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`SUF`}</span>
                          {/* name="🎰 icon right" id="I531:39971;182:10118" type="INSTANCE" */}
                          <Icon.QodeCalendarDays
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.6px 2.4px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </Flex>
                        {/* name="Dropdown" id="531:39972" type="INSTANCE" */}
                        <QodeDropdown
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "16px",
                          }}
                          {...{ type: "button basic", active: false }}
                        />
                      </div>
                      {/* name="Radio/Basic" id="531:39973" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        }}
                      >
                        {/* name="🧬 item 1" id="I531:39973;188:659" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          }}
                        >
                          {/* name="Radio Wrapper" id="I531:39973;188:659;188:311" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "3px 0px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            {/* name="Radio" id="I531:39973;188:659;188:315" type="FRAME" */}
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "999px",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                                background: "var(--background-bg-white, #fff)",
                              }}
                            >
                              {/* name="Radio" id=I531:39973;188:659;188:315 type=FRAME */}
                              <></>
                            </div>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Monthly`}</span>
                        </Flex>
                        {/* name="🧬 item 2" id="I531:39973;188:660" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          }}
                        >
                          {/* name="Radio Wrapper" id="I531:39973;188:660;188:311" type="FRAME" */}
                          <div
                            style={{
                              display: "flex",
                              padding: "3px 0px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            {/* name="Radio" id="I531:39973;188:660;188:315" type="FRAME" */}
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "999px",
                                border:
                                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                                background: "var(--background-bg-white, #fff)",
                              }}
                            >
                              {/* name="Radio" id=I531:39973;188:660;188:315 type=FRAME */}
                              <></>
                            </div>
                          </div>
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Annual`}</span>
                        </Flex>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Line 3" id="531:39974" type="LINE" */}
                  <Flex
                    style={{
                      width: "600px",
                      height: "1px",
                      background: "var(--border-border-neutral-20, #e3e3e3)",
                    }}
                  >
                    {/* name="Line 3" id=531:39974 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Date" id="531:39975" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "24px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Input__Label" id="531:39976" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "125px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      }}
                    >
                      {/* name="Icon" id="I531:39976;5769:7203" type="INSTANCE" */}
                      <Icon.QodeClockThree
                        style={{
                          width: "16px",
                          height: "16px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
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
                      >{`Notice period`}</span>
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
                      {/* name="Icon" id="I531:39976;182:6058" type="INSTANCE" */}
                      <Icon.QodeCircleQuestion
                        style={{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="Frame 37385" id="531:39977" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Input/Text" id="531:39978" type="INSTANCE" */}
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
                        {/* name="🎰 icon left" id="I531:39978;182:10116" type="INSTANCE" */}
                        <Icon.QodeUser
                          style={{
                            display: "flex",
                            width: "16px",
                            height: "16px",
                            padding: "1.6px 2.4px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          {...{}}
                        />
                        <span
                          style={{
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`PRE`}</span>
                        <span style={{}}>{``}</span>
                        <span
                          style={{
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`days`}</span>
                        {/* name="🎰 icon right" id="I531:39978;182:10118" type="INSTANCE" */}
                        <Icon.QodeCalendarDays
                          style={{
                            display: "flex",
                            width: "16px",
                            height: "16px",
                            padding: "1.6px 2.4px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          {...{}}
                        />
                      </Flex>
                      {/* name="Checkbox" id="531:39979" type="INSTANCE" */}
                      <QodeCheckbox
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--size-padding-paddingxs, 8px)",
                        }}
                        {...{
                          showTitle: true,
                          title: "Immediate",
                          status: "inactive",
                          state: "default",
                        }}
                      />
                    </div>
                  </div>
                  {/* name="Line 4" id="531:39980" type="LINE" */}
                  <Flex
                    style={{
                      width: "600px",
                      height: "1px",
                      background: "var(--border-border-neutral-20, #e3e3e3)",
                    }}
                  >
                    {/* name="Line 4" id=531:39980 type=LINE */}
                    <></>
                  </Flex>
                  {/* name="Attendees" id="531:39981" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Input__Label" id="531:39982" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "125px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      }}
                    >
                      {/* name="Icon" id="I531:39982;5769:7203" type="INSTANCE" */}
                      <Icon.QodeLocationArrow
                        style={{
                          width: "16px",
                          height: "16px",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
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
                      >{`Willing to relocate`}</span>
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
                      {/* name="Icon" id="I531:39982;182:6058" type="INSTANCE" */}
                      <Icon.QodeCircleQuestion
                        style={{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: "0",
                        }}
                        {...{}}
                      />
                    </Flex>
                    {/* name="Radio/Basic" id="531:39983" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      {/* name="🧬 item 1" id="531:39984" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-padding-paddingxs, 8px)",
                        }}
                      >
                        {/* name="Radio Wrapper" id="I531:39984;188:311" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "3px 0px",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          {/* name="Radio" id="I531:39984;188:315" type="FRAME" */}
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "999px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                              background: "var(--background-bg-white, #fff)",
                            }}
                          >
                            {/* name="Radio" id=I531:39984;188:315 type=FRAME */}
                            <></>
                          </div>
                        </div>
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`No`}</span>
                      </Flex>
                      {/* name="🧬 item 2" id="531:39985" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-padding-paddingxs, 8px)",
                        }}
                      >
                        {/* name="Radio Wrapper" id="I531:39985;188:311" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "3px 0px",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          {/* name="Radio" id="I531:39985;188:315" type="FRAME" */}
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "999px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                              background: "var(--background-bg-white, #fff)",
                            }}
                          >
                            {/* name="Radio" id=I531:39985;188:315 type=FRAME */}
                            <></>
                          </div>
                        </div>
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Yes`}</span>
                      </Flex>
                      {/* name="🧬 item 3" id="531:39986" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--size-padding-paddingxs, 8px)",
                        }}
                      >
                        {/* name="Radio Wrapper" id="I531:39986;188:311" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "3px 0px",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          {/* name="Radio" id="I531:39986;188:315" type="FRAME" */}
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "999px",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                              background: "var(--background-bg-white, #fff)",
                            }}
                          >
                            {/* name="Radio" id=I531:39986;188:315 type=FRAME */}
                            <></>
                          </div>
                        </div>
                        <span
                          style={{
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Undetermined`}</span>
                      </Flex>
                    </div>
                  </div>
                </div>
                {/* name="Save" id="531:41178" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Button" id="531:41185" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "110px",
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
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconLeft: false,
                      iconRight: false,
                      buttonname: "Save",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeMagnifyingGlass />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="559:29741" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="559:29741" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1020px",
              height: "714px",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "12px 12px 0px 0px",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderRight:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            }}
          >
            {/* name="Left" id="559:29742" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "340px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                alignSelf: "stretch",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--text-text-white, #fff)",
              }}
            >
              {/* name="Card" id="559:29743" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "40px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="avatar" id="559:29744" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "80px",
                    height: "80px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "1110px",
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
                  {/* name="user-large" id="I559:29744;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "4px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "20px",
                      top: "20px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I559:29744;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      padding: "var(--size-padding-paddingxs, 20px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      position: "absolute",
                      borderRadius: "1110px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I559:29744;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I559:29744;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "15px",
                      height: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "2.5px",
                      bottom: "2.5px",
                      borderRadius: "8.889px",
                      border:
                        "2.5px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I559:29744;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I559:29744;5629:60" type="FRAME" */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      position: "absolute",
                    }}
                  >
                    {/* name="Ellipse 2 (Stroke)" id="I559:29744;5629:61" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "80px",
                        height: "80px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id=I559:29744;5629:61 type=VECTOR */}
                      <></>
                    </Flex>
                    {/* name="Vector" id="I559:29744;5629:62" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "53.62px",
                        height: "54.553px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I559:29744;5629:62 type=VECTOR */}
                      <></>
                    </Flex>
                  </div>
                </Flex>
                {/* name="Frame 37378" id="559:29745" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Frame 37368" id="559:29746" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* name="Name yoe" id="559:29747" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-heading4, 24px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        color: "var(--text-text-neutral-20, #878787)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="559:29750" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    <span
                      style={{
                        alignSelf: "stretch",
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="559:29752" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="location-dot" id="559:29753" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ width: "16px", height: "16px" }}
                        {...{}}
                      />
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
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="559:29755" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Button" id="559:29756" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "110px",
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
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconRight: false,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="559:29757" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    iconRight: false,
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35908" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-heading6, 16px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                  }}
                >{`CV`}</span>
                {/* name="Button" id="I559:35908;559:35784" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "90px",
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
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: false,
                    buttonname: "Upload",
                    selectIconLeft: <Icon.QodeUpload />,
                    iconLeft: true,
                    type: "default",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </Flex>
              {/* name="Job status" id="559:29761" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "16px 20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="559:29762" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    }}
                  >{`Job status`}</span>
                  {/* name="Button" id="559:29764" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "53px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    }}
                    {...{
                      iconRight: false,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="559:29765" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Job status" id="559:29766" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I559:29766;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I559:29766;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I559:29766;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I559:29766;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Senior Software Engineer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I559:29766;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I559:29766;545:32242;124:665" type="FRAME" */}
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
                        {/* name="Dot" id=I559:29766;545:32242;124:665 type=FRAME */}
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
                      >{`Interview`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="559:29767" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I559:29767;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I559:29767;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I559:29767;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I559:29767;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Technical Lead`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I559:29767;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I559:29767;545:32242;124:683" type="FRAME" */}
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
                        {/* name="Dot" id=I559:29767;545:32242;124:683 type=FRAME */}
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
                      >{`Shortlisted`}</span>
                    </Flex>
                  </Flex>
                  {/* name="Job status" id="559:29768" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="I559:29768;545:32236" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name="Icon wrap" id="I559:29768;545:32371" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingTop: "2px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* name="briefcase" id="I559:29768;545:32237" type="INSTANCE" */}
                        <Icon.QodeBriefcase
                          style={{ width: "16px", height: "16px" }}
                          {...{}}
                        />
                      </div>
                      {/* name="Job title" id="I559:29768;545:32238" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            textDecorationLine: "underline",
                          }}
                        >{`Front-End User Interaction Developer`}</span>
                        <span
                          style={{
                            color: "var(--text-text-neutral-20, #878787)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-small, 12px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                          }}
                        >{`Sep 15, 2024`}</span>
                      </div>
                    </div>
                    {/* name="Badge__Status" id="I559:29768;545:32242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I559:29768;545:32242;124:674" type="FRAME" */}
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
                        {/* name="Dot" id=I559:29768;545:32242;124:674 type=FRAME */}
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
                      >{`Rejected`}</span>
                    </Flex>
                  </Flex>
                </div>
                {/* name="Frame 37363" id="559:29769" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Frame 37363" id="559:29770" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                    }}
                  >
                    {/* name="briefcase" id="559:29771" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{
                        display: "flex",
                        width: "16px",
                        height: "16px",
                        padding: "1.6px 1.6px 2.4px 1.6px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      {...{}}
                    />
                    {/* name="Frame 37360" id="559:29772" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-neutral-40, #464646)",
                          textAlign: "right",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Frontend developer`}</span>
                    </div>
                  </div>
                  {/* name="Frame 37361" id="559:29774" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    {/* name="Badge__Status" id="559:29775" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* name="Dot" id="I559:29775;124:677" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "var(--size-size-sizexxs-6px, 6px)",
                          height: "var(--size-size-sizexxs-6px, 6px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiuslg, 8px)",
                          background: "var(--gold-gold-50, #f5a60c)",
                        }}
                      >
                        {/* name="Dot" id=I559:29775;124:677 type=FRAME */}
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
                      >{`Shortlisted`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Right" id="559:29776" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 0 0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Tabs" id="559:29777" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "8px 24px 0px 24px",
                  alignItems: "center",
                  gap: "24px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-white, #fff)",
                }}
              >
                {/* name="🧬 tab 1" id="559:29778" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="🎰 icon" id="I559:29778;296:15491" type="INSTANCE" */}
                  <Icon.QodeUser
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Profile`}</span>
                </Flex>
                {/* name="🧬 tab 2" id="559:29779" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  }}
                >
                  {/* name="🎰 icon" id="I559:29779;296:15491" type="INSTANCE" */}
                  <Icon.QodeGrid2
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Notes`}</span>
                </Flex>
                {/* name="🧬 tab 3" id="559:29780" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderBottom:
                      "2px solid var(--border-border-primary-20, #158de2)",
                  }}
                >
                  {/* name="🎰 icon" id="I559:29780;296:15484" type="INSTANCE" */}
                  <Icon.QodeVideo
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
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
                  >{`Interviews`}</span>
                </Flex>
              </div>
              {/* name="Frame 37376" id="559:29785" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                }}
              >
                {/* name="Frame 37392" id="559:31266" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-text-neutral-40, #464646)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    }}
                  >{`Interviews`}</span>
                  {/* name="Button" id="559:31268" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
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
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconLeft: true,
                      iconRight: false,
                      buttonname: "New interview",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePlus />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Body" id="695:32331" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                >
                  {/* name="Timeline" id="695:32332" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Interview/Timeline" id="695:32333" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "84px",
                        padding: "12px 24px",
                        alignItems: "flex-start",
                        gap: "20px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      }}
                    >
                      {/* name="Datetime" id="I695:32333;677:33740" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "150px",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Tue, Sep 17`}</span>
                        {/* name="Time" id="I695:32333;745:36368" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "right",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`5:00 – 6:00 PM`}</span>
                        </div>
                      </div>
                      {/* name="Interview/List item" id="I695:32333;677:33744" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="circle" id="I695:32333;677:33744;664:31806" type="FRAME" */}
                        <QodeSvgI695323336773374466431806
                          style={{ width: "12px", height: "12px" }}
                          {...{}}
                        />
                        {/* name="Line 37" id="I695:32333;677:33744;664:31659" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "44px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="Line 37" id=I695:32333;677:33744;664:31659 type=LINE */}
                          <></>
                        </Flex>
                      </Flex>
                      {/* name="r" id="I695:32333;677:33745" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "24px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="Description" id="I695:32333;677:33746" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Description`}</span>
                          {/* name="Button" id="I695:32333;677:33748" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                            }}
                            {...{
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              buttonname: "See More",
                              iconRight: false,
                              selectIconLeft: <Icon.QodeIcons />,
                              selectIconRight: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "text",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                        {/* name="Frame 37424" id="I695:32333;677:33749" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "1",
                              alignSelf: "stretch",
                              overflow: "hidden",
                              color: "var(--text-text-neutral-40, #464646)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`2nd interview | Nguyen Quoc Thai - Technical round 2`}</span>
                        </div>
                        {/* name="Button" id="I695:32333;677:33752" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "82px",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "4px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                          }}
                          {...{
                            selectIconLeft: <Icon.QodeLinkSimple />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            buttonname: "Copy link",
                            iconRight: false,
                            iconLeft: true,
                            type: "link",
                            size: "default",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                      {/* name="Interview/Badge" id="I695:32333;677:33861" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "32px",
                          padding: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          right: "0px",
                          borderRadius: "0px 0px 0px 12px",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                          background:
                            "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
                        }}
                      >
                        {/* name="stars" id="I695:32333;677:33861;677:33619" type="INSTANCE" */}
                        <Icon.QodeStars
                          style={{
                            width: "16px",
                            height: "16px",
                            flexShrink: "0",
                          }}
                          {...{}}
                        />
                      </Flex>
                    </Flex>
                    {/* name="Interview/Timeline" id="695:32334" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "86px",
                        padding: "12px 24px",
                        alignItems: "flex-start",
                        gap: "20px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      }}
                    >
                      {/* name="Datetime" id="I695:32334;677:33740" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "150px",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Sun, Sep 15`}</span>
                        {/* name="Time" id="I695:32334;745:36368" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "right",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`10:00 – 11:00 AM`}</span>
                        </div>
                      </div>
                      {/* name="Interview/List item" id="I695:32334;677:33744" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="circle" id="I695:32334;677:33744;664:31806" type="FRAME" */}
                        <QodeSvgI695323346773374466431806
                          style={{ width: "12px", height: "12px" }}
                          {...{}}
                        />
                        {/* name="Line 37" id="I695:32334;677:33744;664:31659" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "46px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="Line 37" id=I695:32334;677:33744;664:31659 type=LINE */}
                          <></>
                        </Flex>
                      </Flex>
                      {/* name="r" id="I695:32334;677:33745" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "24px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="Description" id="I695:32334;677:33746" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Description`}</span>
                          {/* name="Button" id="I695:32334;677:33748" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                            }}
                            {...{
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              buttonname: "See More",
                              iconRight: false,
                              selectIconLeft: <Icon.QodeIcons />,
                              selectIconRight: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "text",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                        {/* name="Frame 37424" id="I695:32334;677:33749" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "1",
                              alignSelf: "stretch",
                              overflow: "hidden",
                              color: "var(--text-text-neutral-40, #464646)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`2nd interview | Nguyen Quoc Thai - Technical round 2`}</span>
                        </div>
                        {/* name="Button" id="I695:32334;677:33752" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            width: "82px",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "4px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                          }}
                          {...{
                            selectIconLeft: <Icon.QodeLinkSimple />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            buttonname: "Copy link",
                            iconRight: false,
                            iconLeft: true,
                            type: "link",
                            size: "default",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                      {/* name="Interview/Badge" id="I695:32334;677:33861" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "32px",
                          padding: "9px",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          right: "0px",
                          borderRadius: "0px 0px 0px 12px",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                          background: "#E8E8E8",
                        }}
                      >
                        {/* name="user" id="I695:32334;677:33861;677:33729" type="INSTANCE" */}
                        <Icon.QodeUser
                          style={{
                            width: "var(--font-size-base, 14px)",
                            height: "var(--font-size-base, 14px)",
                            flexShrink: "0",
                          }}
                          {...{}}
                        />
                      </Flex>
                    </Flex>
                    {/* name="Interview/Timeline" id="695:32335" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "86px",
                        padding: "12px 24px",
                        alignItems: "flex-start",
                        gap: "20px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      }}
                    >
                      {/* name="Datetime" id="I695:32335;677:33765" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "150px",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Fri, Sep 13`}</span>
                        {/* name="Time" id="I695:32335;745:36408" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "right",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`11:00 AM – 1:00 PM`}</span>
                        </div>
                      </div>
                      {/* name="Interview/List item" id="I695:32335;677:33769" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="circle-check" id="I695:32335;677:33769;664:31653" type="INSTANCE" */}
                        <Icon.QodeCircleCheck
                          style={{ width: "12px", height: "12px" }}
                          {...{}}
                        />
                        {/* name="Line 37" id="I695:32335;677:33769;664:31654" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "46px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="Line 37" id=I695:32335;677:33769;664:31654 type=LINE */}
                          <></>
                        </Flex>
                      </Flex>
                      {/* name="r" id="I695:32335;677:33770" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "24px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="Description" id="I695:32335;677:33771" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Description`}</span>
                          {/* name="Button" id="I695:32335;677:33773" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                            }}
                            {...{
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              buttonname: "See More",
                              iconRight: false,
                              selectIconLeft: <Icon.QodeIcons />,
                              selectIconRight: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "text",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                        {/* name="Frame 37424" id="I695:32335;677:33774" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "1",
                              alignSelf: "stretch",
                              overflow: "hidden",
                              color: "var(--text-text-neutral-40, #464646)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`Exploratory call - Nguyen Quoc Thai - Senior Software developer`}</span>
                        </div>
                        {/* name="Button" id="I695:32335;677:33776" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "4px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                          }}
                          {...{
                            selectIconLeft: <Icon.QodeEye />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            buttonname: "View result",
                            iconRight: false,
                            iconLeft: true,
                            type: "link",
                            size: "default",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                      {/* name="Interview/Badge" id="I695:32335;745:36006" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "32px",
                          padding: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          right: "0px",
                          borderRadius: "0px 0px 0px 12px",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                          background:
                            "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
                        }}
                      >
                        {/* name="stars" id="I695:32335;745:36006;677:33619" type="INSTANCE" */}
                        <Icon.QodeStars
                          style={{
                            width: "16px",
                            height: "16px",
                            flexShrink: "0",
                          }}
                          {...{}}
                        />
                      </Flex>
                    </Flex>
                    {/* name="Interview/Timeline" id="695:32336" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "86px",
                        padding: "12px 24px",
                        alignItems: "flex-start",
                        gap: "20px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      }}
                    >
                      {/* name="Datetime" id="I695:32336;677:33765" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "150px",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Wed, Sep 03`}</span>
                        {/* name="Time" id="I695:32336;745:36408" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "right",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`11:00 AM – 1:00 PM`}</span>
                        </div>
                      </div>
                      {/* name="Interview/List item" id="I695:32336;677:33769" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="circle-check" id="I695:32336;677:33769;664:31653" type="INSTANCE" */}
                        <Icon.QodeCircleCheck
                          style={{ width: "12px", height: "12px" }}
                          {...{}}
                        />
                        {/* name="Line 37" id="I695:32336;677:33769;664:31654" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "46px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="Line 37" id=I695:32336;677:33769;664:31654 type=LINE */}
                          <></>
                        </Flex>
                      </Flex>
                      {/* name="r" id="I695:32336;677:33770" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "24px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="Description" id="I695:32336;677:33771" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Description`}</span>
                          {/* name="Button" id="I695:32336;677:33773" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                            }}
                            {...{
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              buttonname: "See More",
                              iconRight: false,
                              selectIconLeft: <Icon.QodeIcons />,
                              selectIconRight: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "text",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                        {/* name="Frame 37424" id="I695:32336;677:33774" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "1",
                              alignSelf: "stretch",
                              overflow: "hidden",
                              color: "var(--text-text-neutral-40, #464646)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                              textDecorationLine: "underline",
                            }}
                          >{`Exploratory call - Nguyen Quoc Thai - Senior Software developer`}</span>
                        </div>
                        {/* name="Button" id="I695:32336;677:33776" type="INSTANCE" */}
                        <QodeButton
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "4px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                          }}
                          {...{
                            selectIconLeft: <Icon.QodeEye />,
                            onlyIcon: <Icon.QodeMagnifyingGlass />,
                            selectIconRight: <Icon.QodeMagnifyingGlass />,
                            buttonname: "View result",
                            iconRight: false,
                            iconLeft: true,
                            type: "link",
                            size: "default",
                            state: "default",
                            content: "default",
                            danger: false,
                            ghost: false,
                          }}
                        />
                      </div>
                      {/* name="Interview/Badge" id="I695:32336;745:36006" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "32px",
                          height: "32px",
                          padding: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          right: "0px",
                          borderRadius: "0px 0px 0px 12px",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-focused-primary, #82c8fa)",
                          background:
                            "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
                        }}
                      >
                        {/* name="stars" id="I695:32336;745:36006;677:33619" type="INSTANCE" */}
                        <Icon.QodeStars
                          style={{
                            width: "16px",
                            height: "16px",
                            flexShrink: "0",
                          }}
                          {...{}}
                        />
                      </Flex>
                    </Flex>
                    {/* name="Interview/Timeline" id="695:32337" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "78px",
                        padding: "12px 24px",
                        alignItems: "flex-start",
                        gap: "20px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      }}
                    >
                      {/* name="Datetime" id="I695:32337;677:33816" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "150px",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Sat, Aug 31`}</span>
                        {/* name="Time" id="I695:32337;745:36448" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            padding: "2px 10px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "var(--border-radius-rounded, 999px)",
                            background: "var(--neutral-gray-5, #f8f6f6)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "right",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`11:00 AM – 1:00 PM`}</span>
                        </div>
                      </div>
                      {/* name="Interview/List item" id="I695:32337;677:34021" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="circle" id="I695:32337;677:34021;677:33736" type="FRAME" */}
                        <QodeSvgI695323376773402167733736
                          style={{ width: "12px", height: "12px" }}
                          {...{}}
                        />
                        {/* name="Line 37" id="I695:32337;677:34021;677:33738" type="LINE" */}
                        <Flex
                          style={{
                            width: "1px",
                            height: "38px",
                            background:
                              "var(--border-border-neutral-30, #d5d5d5)",
                          }}
                        >
                          {/* name="Line 37" id=I695:32337;677:34021;677:33738 type=LINE */}
                          <></>
                        </Flex>
                      </Flex>
                      {/* name="r" id="I695:32337;677:33821" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          paddingRight: "24px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "8px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="Description" id="I695:32337;677:33822" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "var(--size-margin-marginxs, 8px)",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 0 0",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Description`}</span>
                          {/* name="Button" id="I695:32337;677:33824" type="INSTANCE" */}
                          <QodeButton
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius:
                                "var(--border-radius-rounded, 999px)",
                            }}
                            {...{
                              onlyIcon: <Icon.QodeMagnifyingGlass />,
                              buttonname: "See More",
                              iconRight: false,
                              selectIconLeft: <Icon.QodeIcons />,
                              selectIconRight: <Icon.QodeMagnifyingGlass />,
                              iconLeft: false,
                              type: "text",
                              size: "small",
                              state: "default",
                              content: "default",
                              danger: false,
                              ghost: false,
                            }}
                          />
                        </div>
                        {/* name="Frame 37424" id="I695:32337;677:33825" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <span
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "1",
                              overflow: "hidden",
                              color: "var(--text-text-neutral-40, #464646)",
                              textOverflow: "ellipsis",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Exploratory call - Nguyen Quoc Thai`}</span>
                        </div>
                        <span
                          style={{
                            color: "var(--text-text-red, #dc3812)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`(Canceled)`}</span>
                      </div>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
