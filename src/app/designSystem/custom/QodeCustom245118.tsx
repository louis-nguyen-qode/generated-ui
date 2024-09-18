// id="24:5118"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom245118Props {
  showedit?: boolean
  expand?: "No" | "Yes"
}

export const QodeCustom245118: React.FC<
  QodeCustom245118Props & { style?: CSSProperties }
> = ({ showedit = false, expand = "No", ...rest }) => {
  return (
    <>
      {/* name="sectionEducation" id="24:5118" type="COMPONENT_SET" */}
      {/* id="24:5119" */}
      {`${expand}` === `No` && (
        <>
          {/* name="❓Expand=No" id="24:5119" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5120" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="531:32092" type="INSTANCE" */}
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
                >{`Education`}</span>
              </Flex>
              {/* name="educationItem" id="24:5128" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I24:5128;24:4901" type="INSTANCE" */}
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
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I24:5128;24:4901;2785:8296" type="INSTANCE" */}
                  <Flex
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
                  >
                    {/* name="Vector" id="I24:5128;24:4901;2785:8296;2828:6334" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "16.8px",
                        height: "16.8px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I24:5128;24:4901;2785:8296;2828:6334 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="img" id="I24:5128;24:4901;2785:8297" type="FRAME" */}
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
                    {/* name="img" id=I24:5128;24:4901;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I24:5128;24:4901;2820:1281" type="INSTANCE" */}
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
                    {/* name="Badge" id=I24:5128;24:4901;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I24:5128;24:4902" type="FRAME" */}
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
                      fontFamily: 'var(--family-family, "sf pro display")',
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
                  {/* name="experienceDescription" id="I24:5128;24:4906" type="FRAME" */}
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
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...`}</span>
                    {/* name="Button" id="I24:5128;24:4908" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      }}
                    >
                      {/* name="🎰 icon" id="I24:5128;24:4908;114:1873" type="INSTANCE" */}
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
                        {/* name="Vector" id="I24:5128;24:4908;114:1873;2828:3516" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "12.801px",
                            height: "12.803px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I24:5128;24:4908;114:1873;2828:3516 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
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
                      >{`See More`}</span>
                      {/* name="🎰 icon" id="I24:5128;24:4908;2906:15870" type="INSTANCE" */}
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
                        {/* name="Vector" id="I24:5128;24:4908;2906:15870;2828:3908" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "12.799px",
                            height: "12.802px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I24:5128;24:4908;2906:15870;2828:3908 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </div>
                {/* name="Button" id="I24:5128;24:4909" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I24:5128;24:4909;114:1876" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.616px 1.614px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5128;24:4909;114:1876;2828:4448" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.784px",
                        height: "12.787px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      }}
                    >
                      {/* name="Vector" id=I24:5128;24:4909;114:1876;2828:4448 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`Edit`}</span>
                  {/* name="chevron-down" id="I24:5128;24:4909;2906:16275" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "4.998px 0.998px 3.001px 0.998px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5128;24:4909;2906:16275;630:7560" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "14.005px",
                        height: "8.002px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
                      }}
                    >
                      {/* name="Vector" id=I24:5128;24:4909;2906:16275;630:7560 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="24:5129" */}
      {`${expand}` === `Yes` && (
        <>
          {/* name="❓Expand=Yes" id="24:5129" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              paddingBottom: "12px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--size-margin-margin, 16px)",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            }}
          >
            {/* name="body" id="24:5130" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Profile/Section header" id="531:32491" type="INSTANCE" */}
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
                >{`Education`}</span>
              </Flex>
              {/* name="educationItem" id="24:5138" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--size-margin-marginsm, 12px)",
                  alignSelf: "stretch",
                }}
              >
                {/* name="avatar" id="I24:5138;24:4901" type="INSTANCE" */}
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
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`AW`}</span>
                  {/* name="user-large" id="I24:5138;24:4901;2785:8296" type="INSTANCE" */}
                  <Flex
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
                  >
                    {/* name="Vector" id="I24:5138;24:4901;2785:8296;2828:6334" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "16.8px",
                        height: "16.8px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-background-colorbgcontainer, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I24:5138;24:4901;2785:8296;2828:6334 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="img" id="I24:5138;24:4901;2785:8297" type="FRAME" */}
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
                        "url(<path-to-image>) lightgray 6px 6px / 71.429% 71.429% no-repeat",
                    }}
                  >
                    {/* name="img" id=I24:5138;24:4901;2785:8297 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I24:5138;24:4901;2820:1281" type="INSTANCE" */}
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
                    {/* name="Badge" id=I24:5138;24:4901;2820:1281 type=INSTANCE */}
                    <></>
                  </Flex>
                </Flex>
                {/* name="content" id="I24:5138;24:4902" type="FRAME" */}
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
                      fontFamily: 'var(--family-family, "sf pro display")',
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
                  {/* name="experienceDescription" id="I24:5138;24:4906" type="FRAME" */}
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
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation zxva...`}</span>
                    {/* name="Button" id="I24:5138;24:4908" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      }}
                    >
                      {/* name="🎰 icon" id="I24:5138;24:4908;114:1873" type="INSTANCE" */}
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
                        {/* name="Vector" id="I24:5138;24:4908;114:1873;2828:3516" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "12.801px",
                            height: "12.803px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I24:5138;24:4908;114:1873;2828:3516 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
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
                      >{`See Less`}</span>
                      {/* name="🎰 icon" id="I24:5138;24:4908;2906:15870" type="INSTANCE" */}
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
                        {/* name="Vector" id="I24:5138;24:4908;2906:15870;2828:3908" type="VECTOR" */}
                        <Flex
                          style={{
                            width: "12.799px",
                            height: "12.802px",
                            flexShrink: "0",
                            fill: "var(--color-neutral-text-colortext, #000)",
                          }}
                        >
                          {/* name="Vector" id=I24:5138;24:4908;2906:15870;2828:3908 type=VECTOR */}
                          <></>
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </div>
                {/* name="Button" id="I24:5138;24:4909" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    borderRadius: "var(--style-radius-borderround, 999px)",
                  }}
                >
                  {/* name="🎰 icon" id="I24:5138;24:4909;114:1876" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.599px 1.616px 1.614px 1.6px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5138;24:4909;114:1876;2828:4448" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "12.784px",
                        height: "12.787px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      }}
                    >
                      {/* name="Vector" id=I24:5138;24:4909;114:1876;2828:4448 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  <span
                    style={{
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                      textAlign: "center",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                    }}
                  >{`Edit`}</span>
                  {/* name="chevron-down" id="I24:5138;24:4909;2906:16275" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "4.998px 0.998px 3.001px 0.998px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I24:5138;24:4909;2906:16275;630:7560" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "14.005px",
                        height: "8.002px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
                      }}
                    >
                      {/* name="Vector" id=I24:5138;24:4909;2906:16275;630:7560 type=VECTOR */}
                      <></>
                    </Flex>
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
