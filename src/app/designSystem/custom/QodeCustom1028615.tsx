// id="102:8615"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1028675 from "@designSystem/icon/svg/QodeSvg1028675"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom1028615Props {
  _3?: boolean
  _2?: boolean
  _4?: boolean
  property_1?: "Default" | "Variant2"
}

export const QodeCustom1028615: React.FC<
  QodeCustom1028615Props & { style?: CSSProperties }
> = ({ _3 = true, _2 = true, _4 = true, property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Email conversation" id="102:8615" type="COMPONENT_SET" */}
      {/* id="102:8531" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="102:8531" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "876px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Email/Content" id="102:8479" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Email/From" id="I102:8479;99:7654" type="INSTANCE" */}
              <Flex
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {/* name="Frame 37301" id="I102:8479;99:7654;99:7640" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "28px",
                    height: "28px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.75px",
                    borderRadius: "874.125px",
                    border:
                      "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="Frame 37301" id=I102:8479;99:7654;99:7640 type=FRAME */}
                  <></>
                </div>
                {/* name="Frame 37302" id="I102:8479;99:7654;99:7641" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
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
                  >{`Hung Nhan`}</span>
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
                  >{`·`}</span>
                  <span
                    style={{
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`6:08 PM`}</span>
                </div>
              </Flex>
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
              >{`Hi Thai, 

I'm Hung Nhan, a Senior Recruiter at [Company Name]. 

I came across your profile and was impressed by your experience as a Senior Software Developer. Your skills in Python, Java, PHP, Go, and game design align well with our needs. Would you be interested in learning more about this opportunity?`}</span>
            </Flex>
            {/* name="Line 9" id="102:8442" type="LINE" */}
            <Flex
              style={{
                width: "600px",
                height: "1px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Line 9" id=102:8442 type=LINE */}
              <></>
            </Flex>
            {/* name="Email/Content" id="102:8487" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Email/From" id="I102:8487;99:7654" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "164px",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="avatar" id="I102:8487;99:7654;99:7645" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "28px",
                    height: "28px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    flexShrink: "0",
                    borderRadius: "388.5px",
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
                  {/* name="user-large" id="I102:8487;99:7654;99:7645;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "7px",
                      top: "7px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I102:8487;99:7654;99:7645;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "28px",
                      height: "28px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px",
                      position: "absolute",
                      borderRadius: "388.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I102:8487;99:7654;99:7645;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I102:8487;99:7654;99:7645;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "5.25px",
                      height: "5.25px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "0.875px",
                      bottom: "0.875px",
                      borderRadius: "3.111px",
                      border:
                        "0.875px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I102:8487;99:7654;99:7645;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I102:8487;99:7654;99:7645;5629:60" type="FRAME" */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      position: "absolute",
                    }}
                  >
                    {/* name="Ellipse 2 (Stroke)" id="I102:8487;99:7654;99:7645;5629:61" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "28px",
                        height: "28px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id=I102:8487;99:7654;99:7645;5629:61 type=VECTOR */}
                      <></>
                    </Flex>
                    {/* name="Vector" id="I102:8487;99:7654;99:7645;5629:62" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "18.767px",
                        height: "19.094px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I102:8487;99:7654;99:7645;5629:62 type=VECTOR */}
                      <></>
                    </Flex>
                  </div>
                </Flex>
                {/* name="Frame 37302" id="I102:8487;99:7654;99:7633" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
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
                  >{`Nguyen Quoc Thai`}</span>
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
                  >{`·`}</span>
                  <span
                    style={{
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`5:15 PM`}</span>
                </div>
              </Flex>
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
              >{`Hi Hung,

Thank you for reaching out! Could you please send me the job description so I can get a better understanding of the role and its requirements?`}</span>
            </Flex>
            {/* name="Line 11" id="102:8451" type="LINE" */}
            <Flex
              style={{
                width: "600px",
                height: "1px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Line 11" id=102:8451 type=LINE */}
              <></>
            </Flex>
            {/* name="Email/Content" id="102:8495" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Email/From" id="I102:8495;99:7654" type="INSTANCE" */}
              <Flex
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {/* name="Frame 37301" id="I102:8495;99:7654;99:7640" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "28px",
                    height: "28px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.75px",
                    borderRadius: "874.125px",
                    border:
                      "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                >
                  {/* name="Frame 37301" id=I102:8495;99:7654;99:7640 type=FRAME */}
                  <></>
                </div>
                {/* name="Frame 37302" id="I102:8495;99:7654;99:7641" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
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
                  >{`Hung Nhan`}</span>
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
                  >{`·`}</span>
                  <span
                    style={{
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`6:08 PM`}</span>
                </div>
              </Flex>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-primary-30, #158de2)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "var(--lineheight-lineheight-base, 20px)",
                  textDecorationLine: "underline",
                }}
              >{`Hi Thai,

Thank you for reaching out! Kindly find the Job description in the link attached.
Please let me know if you have any questions in the meantime.

Best regards,
Hung`}</span>
            </Flex>
            {/* name="Line 12" id="102:8460" type="LINE" */}
            <Flex
              style={{
                width: "600px",
                height: "1px",
                background: "var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="Line 12" id=102:8460 type=LINE */}
              <></>
            </Flex>
            {/* name="Email/Content" id="102:8503" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Email/From" id="I102:8503;99:7654" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "164px",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* name="avatar" id="I102:8503;99:7654;99:7645" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "28px",
                    height: "28px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    flexShrink: "0",
                    borderRadius: "388.5px",
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
                  {/* name="user-large" id="I102:8503;99:7654;99:7645;5629:57" type="INSTANCE" */}
                  <Icon.QodeUserLarge
                    style={{
                      display: "flex",
                      width: "var(--font-size-base, 14px)",
                      height: "var(--font-size-base, 14px)",
                      padding: "1.4px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: "7px",
                      top: "7px",
                    }}
                    {...{}}
                  />
                  {/* name="img" id="I102:8503;99:7654;99:7645;5629:58" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "28px",
                      height: "28px",
                      padding: "var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px",
                      position: "absolute",
                      borderRadius: "388.5px",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="img" id=I102:8503;99:7654;99:7645;5629:58 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Badge" id="I102:8503;99:7654;99:7645;5629:59" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "5.25px",
                      height: "5.25px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: "0.875px",
                      bottom: "0.875px",
                      borderRadius: "3.111px",
                      border:
                        "0.875px solid var(--color-neutral-background-colorbgcontainer, #fff)",
                      background: "var(--color-error-colorerror, #ff6542)",
                    }}
                  >
                    {/* name="Badge" id=I102:8503;99:7654;99:7645;5629:59 type=INSTANCE */}
                    <></>
                  </Flex>
                  {/* name="opentoWork" id="I102:8503;99:7654;99:7645;5629:60" type="FRAME" */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      position: "absolute",
                    }}
                  >
                    {/* name="Ellipse 2 (Stroke)" id="I102:8503;99:7654;99:7645;5629:61" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "28px",
                        height: "28px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "linear-gradient(232deg, rgba(141, 185, 17, 0.00) 42.64%, #8DB911 85.8%)",
                      }}
                    >
                      {/* name="Ellipse 2 (Stroke)" id=I102:8503;99:7654;99:7645;5629:61 type=VECTOR */}
                      <></>
                    </Flex>
                    {/* name="Vector" id="I102:8503;99:7654;99:7645;5629:62" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "18.767px",
                        height: "19.094px",
                        transform: "rotate(9.982deg)",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-colortextsolid, #fff)",
                      }}
                    >
                      {/* name="Vector" id=I102:8503;99:7654;99:7645;5629:62 type=VECTOR */}
                      <></>
                    </Flex>
                  </div>
                </Flex>
                {/* name="Frame 37302" id="I102:8503;99:7654;99:7633" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
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
                  >{`Nguyen Quoc Thai`}</span>
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
                  >{`·`}</span>
                  <span
                    style={{
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    }}
                  >{`Just now`}</span>
                </div>
              </Flex>
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
              >{`Hi Hung,

Thank you for sending the job description—it looks interesting! I have a few questions:

Could you tell me more about the team structure and who I’d be working with?
Is the role fully remote, or is there a hybrid/in-office requirement?
Are there opportunities for career growth, like training or mentorship programs?

Looking forward to your response!

Best regards,
Thai.`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="102:8616" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="102:8616" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "876px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              borderBottom:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            }}
          >
            {/* name="Frame 37295" id="102:8668" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Illus" id="102:8669" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Frame 37308" id="102:8670" type="FRAME" */}
                <div style={{ width: "233px", height: "42px" }}>
                  {/* name="Rectangle 1" id="102:8671" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "233px",
                      height: "42px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "#F6F6F6",
                    }}
                  >
                    {/* name="Rectangle 1" id=102:8671 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 2" id="102:8672" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "176px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 2" id=102:8672 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 3" id="102:8673" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "111px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 3" id=102:8673 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="envelope" id="102:8674" type="INSTANCE" */}
                  <Icon.QodeEnvelope
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                </div>
                {/* name="Group" id="102:8675" type="GROUP" */}
                <QodeSvg1028675
                  style={{ width: "109.325px", height: "93.442px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`You haven't started a conversation yet.
Start by sending an email and track your email sequences here.`}</span>
              {/* name="Action" id="102:8706" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="102:8707" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "154px",
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
                    selectIconLeft: <Icon.QodeUpRightFromSquare />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "View profile",
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="102:8708" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "154px",
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
                    buttonname: "Send request",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeUserPlus />,
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
        </>
      )}
    </>
  )
}
