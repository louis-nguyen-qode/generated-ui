// id="24:5083"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"
import QodeSvg191975 from "@designSystem/icon/svg/QodeSvg191975"

export interface QodeCustom245083Props {
  showedit?: boolean
  button?: boolean
  expand?: "Yes" | "No"
}

export const QodeCustom245083: React.FC<
  QodeCustom245083Props & { style?: CSSProperties }
> = ({ showedit = false, button = true, expand = "No", ...rest }) => {
  return (
    <>
      {/* name="sectionExperience" id="24:5083" type="COMPONENT_SET" */}
      {/* id="24:5084" */}
      {`${expand}` === `No` && (
        <>
          {/* name="❓Expand=No" id="24:5084" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "608px",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5085" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="531:30152" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Experience`}</span>
              </Flex>
              {/* name="jobItem" id="24:5093" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I24:5093;24:4863" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
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
                        "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I24:5093;24:4863;2785:8296" type="INSTANCE" */}
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
                  {/* name="img" id="I24:5093;24:4863;2785:8297" type="FRAME" */}
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
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I24:5093;24:4863;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I24:5093;24:4863;2820:1281" type="INSTANCE" */}
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
                    {/* name="Badge" id=I24:5093;24:4863;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I24:5093;24:4864" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="Title" id="I24:5093;24:4865" type="FRAME" */}
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
                  {/* name="experienceDescription" id="I24:5093;24:4870" type="FRAME" */}
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
                        lineHeight: "var(--line-height-lineheight, 20px)",
                      }}
                    >{`Founding Engineer at Qode, specializing in full-stack development, infrastructure design, and DevOps. Key architect of the core product, contributing to both development and operational efficiency. Working towards establishing the technical foundation for Qode, balancing innovation and scalability.`}</span>
                    {/* name="Button" id="I24:5093;24:4872" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
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
              {/* name="groupExp" id="24:5094" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="companyItem" id="24:5095" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginsm, 12px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="avatar" id="I24:5095;24:4888" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
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
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                      }}
                    >{`AW`}</span>
                    {/* name="user-large" id="I24:5095;24:4888;2681:40498" type="INSTANCE" */}
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
                    {/* name="img" id="I24:5095;24:4888;2681:40501" type="FRAME" */}
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
                      {/* name="img" id=I24:5095;24:4888;2681:40501 type=FRAME */}
                      <></>
                    </div>
                    {/* name="Badge" id="I24:5095;24:4888;2820:1278" type="INSTANCE" */}
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
                      {/* name="Badge" id=I24:5095;24:4888;2820:1278 type=INSTANCE */}
                      <></>
                    </Flex>
                    {/* name="opentoWork" id="I24:5095;24:4888;2894:1086" type="FRAME" */}
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        position: "absolute",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id="I24:5095;24:4888;2894:1087" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "42px",
                          height: "42px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                        }}
                      >
                        {/* name="Ellipse 2 (Stroke)" id=I24:5095;24:4888;2894:1087 type=VECTOR */}
                        <></>
                      </Flex>
                      {/* name="Vector" id="I24:5095;24:4888;2894:1088" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "28.151px",
                          height: "28.64px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortextsolid, #fff)",
                        }}
                      >
                        {/* name="Vector" id=I24:5095;24:4888;2894:1088 type=VECTOR */}
                        <></>
                      </Flex>
                    </div>
                  </Flex>
                  {/* name="content" id="I24:5095;24:4889" type="FRAME" */}
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
                {/* name="expItem" id="24:5096" type="FRAME" */}
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
                  {/* name=".exp_item_vertical" id="24:5097" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I24:5097;2787:9058" type="FRAME" */}
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
                      {/* name=".steps__item_progress" id="I24:5097;2787:9059" type="INSTANCE" */}
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
                      {/* name=".steps__item_tail" id="I24:5097;2787:9060" type="INSTANCE" */}
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
                    {/* name="Text Wrapper" id="I24:5097;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
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
                          color: "var(--color-neutral-text-colortext, #000)",
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
                      {/* name="Description" id="I24:5097;2787:9277" type="FRAME" */}
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
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the Lead Technical Engineer of Google, I play a crucial role in shaping the technical direction of the company. By implementing best practices in full-sta...`}</span>
                        {/* name="Button" id="I24:5097;2787:9279" type="INSTANCE" */}
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
                  {/* name=".exp_item_vertical" id="24:5098" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I24:5098;2787:9058" type="FRAME" */}
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
                      {/* name=".steps__item_progress" id="I24:5098;2787:9059" type="INSTANCE" */}
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
                      {/* name=".steps__item_tail" id="I24:5098;2787:9060" type="INSTANCE" */}
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
                    {/* name="Text Wrapper" id="I24:5098;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
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
                          color: "var(--color-neutral-text-colortext, #000)",
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
                      {/* name="Description" id="I24:5098;2787:9277" type="FRAME" */}
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
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the software engineer, I oversaw the entire product lifecycle. I implemented new features, enhanced application security, and transitioned to a serverless architect...`}</span>
                        {/* name="Button" id="I24:5098;2787:9279" type="INSTANCE" */}
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
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`Show all 3 experiences`}</span>
          </div>
        </>
      )}
      {/* id="24:5100" */}
      {`${expand}` === `Yes` && (
        <>
          {/* name="❓Expand=Yes" id="24:5100" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "608px",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5101" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="531:31433" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-small, 4px)",
                }}
              >
                <span
                  style={{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Experience`}</span>
              </Flex>
              {/* name="jobItem" id="24:5109" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  paddingBottom: "var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I24:5109;24:4863" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                    background:
                      "var(--color-neutral-background-colorbgcontainer, #fff)",
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
                        "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I24:5109;24:4863;2785:8296" type="INSTANCE" */}
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
                  {/* name="img" id="I24:5109;24:4863;2785:8297" type="FRAME" */}
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
                      borderRadius: "var(--style-radius-borderradius, 8px)",
                      background:
                        "url(<path-to-image>) lightgray 5px 5px / 76.19% 76.19% no-repeat",
                    }}
                  >
                    {/* name="img" id=I24:5109;24:4863;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I24:5109;24:4863;2820:1281" type="INSTANCE" */}
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
                    {/* name="Badge" id=I24:5109;24:4863;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I24:5109;24:4864" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flex: "1 0 0",
                  }}
                >
                  {/* name="Title" id="I24:5109;24:4865" type="FRAME" */}
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
                  {/* name="experienceDescription" id="I24:5109;24:4870" type="FRAME" */}
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
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "var(--line-height-lineheight, 20px)",
                      }}
                    >{`Founding Engineer at Qode, specializing in full-stack development, infrastructure design, and DevOps. Key architect of the core product, contributing to both development and operational efficiency. Working towards establishing the technical foundation for Qode, balancing innovation and scalability.`}</span>
                    {/* name="Button" id="I24:5109;24:4872" type="INSTANCE" */}
                    <QodeButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
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
              {/* name="groupExp" id="24:5110" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="companyItem" id="24:5111" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginsm, 12px)",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="avatar" id="I24:5111;24:4888" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "42px",
                      height: "42px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
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
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                      }}
                    >{`AW`}</span>
                    {/* name="user-large" id="I24:5111;24:4888;2681:40498" type="INSTANCE" */}
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
                    {/* name="img" id="I24:5111;24:4888;2681:40501" type="FRAME" */}
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
                      {/* name="img" id=I24:5111;24:4888;2681:40501 type=FRAME */}
                      <></>
                    </div>
                    {/* name="Badge" id="I24:5111;24:4888;2820:1278" type="INSTANCE" */}
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
                      {/* name="Badge" id=I24:5111;24:4888;2820:1278 type=INSTANCE */}
                      <></>
                    </Flex>
                    {/* name="opentoWork" id="I24:5111;24:4888;2894:1086" type="FRAME" */}
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        position: "absolute",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id="I24:5111;24:4888;2894:1087" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "42px",
                          height: "42px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                        }}
                      >
                        {/* name="Ellipse 2 (Stroke)" id=I24:5111;24:4888;2894:1087 type=VECTOR */}
                        <></>
                      </Flex>
                      {/* name="Vector" id="I24:5111;24:4888;2894:1088" type="VECTOR" */}
                      <Flex
                        style={{
                          width: "28.151px",
                          height: "28.64px",
                          transform: "rotate(9.982deg)",
                          flexShrink: "0",
                          fill: "var(--color-neutral-text-colortextsolid, #fff)",
                        }}
                      >
                        {/* name="Vector" id=I24:5111;24:4888;2894:1088 type=VECTOR */}
                        <></>
                      </Flex>
                    </div>
                  </Flex>
                  {/* name="content" id="I24:5111;24:4889" type="FRAME" */}
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
                {/* name="expItem" id="24:5112" type="FRAME" */}
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
                  {/* name=".exp_item_vertical" id="24:5113" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I24:5113;2787:9058" type="FRAME" */}
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
                      {/* name=".steps__item_progress" id="I24:5113;2787:9059" type="INSTANCE" */}
                      <QodeSteps
                        style={{
                          display: "flex",
                          width: "8px",
                          height: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "999px",
                          background:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        }}
                        {...{ step: "2", status: "wait", size: "dot" }}
                      />
                      {/* name=".steps__item_tail" id="I24:5113;2787:9060" type="INSTANCE" */}
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
                    {/* name="Text Wrapper" id="I24:5113;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
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
                          color: "var(--color-neutral-text-colortext, #000)",
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
                      {/* name="Description" id="I24:5113;2787:9277" type="FRAME" */}
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
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the Lead Technical Engineer of Google, I play a crucial role in shaping the technical direction of the company. By implementing best practices in full-stack development, Java programming, and agile project management, I ensure the successful delivery of high-quality software solutions. Additionally, my expertise in cloud computing, MySQL database management, and DevOps helps streamline our processes and improve system efficiency.`}</span>
                        {/* name="Button" id="I24:5113;2787:9279" type="INSTANCE" */}
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
                            title: "See Less",
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
                  {/* name=".exp_item_vertical" id="24:5114" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxl, 32px)",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Icon Wrapper" id="I24:5114;2787:9058" type="FRAME" */}
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
                      {/* name=".steps__item_progress" id="I24:5114;2787:9059" type="INSTANCE" */}
                      <QodeSteps
                        style={{
                          display: "flex",
                          width: "8px",
                          height: "8px",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "999px",
                          background:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        }}
                        {...{ step: "2", status: "wait", size: "dot" }}
                      />
                      {/* name=".steps__item_tail" id="I24:5114;2787:9060" type="INSTANCE" */}
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
                    {/* name="Text Wrapper" id="I24:5114;2787:9061" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        paddingBottom: "var(--size-padding-paddingxs, 8px)",
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
                          color: "var(--color-neutral-text-colortext, #000)",
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
                      {/* name="Description" id="I24:5114;2787:9277" type="FRAME" */}
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
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`As the software engineer, I oversaw the entire product lifecycle. I implemented new features, enhanced application security, and transitioned to a serverless architecture. Additionally, I managed AWS cloud solutions, performed automations, and optimized performance to ensure a seamless user experience.`}</span>
                        {/* name="Button" id="I24:5114;2787:9279" type="INSTANCE" */}
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
                            title: "See Less",
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
                fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                fontSize: "var(--font-size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--line-height-lineheighsm, 16px) /* 133.333% */",
              }}
            >{`Show all 3 experiences`}</span>
          </div>
        </>
      )}
    </>
  )
}
