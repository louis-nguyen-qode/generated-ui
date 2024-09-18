// id="595:27786"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom60235103 } from "@designSystem/custom/QodeCustom60235103"
import { QodeCustom32840351 } from "@designSystem/custom/QodeCustom32840351"
import { QodeCustom29615477 } from "@designSystem/custom/QodeCustom29615477"
import { QodeCustom61628977 } from "@designSystem/custom/QodeCustom61628977"
import { QodeCustom59527986 } from "@designSystem/custom/QodeCustom59527986"
import { QodeCustom59528222 } from "@designSystem/custom/QodeCustom59528222"
import { QodeCustom59833885 } from "@designSystem/custom/QodeCustom59833885"

export interface QodeCustom59527786Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom59527786: React.FC<
  QodeCustom59527786Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Interview report" id="595:27786" type="COMPONENT_SET" */}
      {/* id="590:30471" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="590:30471" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1280px",
              padding: "48px",
              flexDirection: "column",
              alignItems: "center",
              background: "var(--abb-bg-test, #f1f1f1)",
            }}
          >
            {/* name="Body" id="590:30343" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-large, 12px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="Section" id="590:30344" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Job title" id="590:30345" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "20px 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Wrap" id="590:30346" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* name="Button" id="590:30347" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodeChevronLeft />,
                        buttonname: "Source new job",
                        selectIconLeft: <Icon.QodePlus />,
                        iconLeft: true,
                        type: "default",
                        size: "default",
                        state: "default",
                        content: "icon",
                        danger: false,
                        ghost: false,
                      }}
                    />
                    {/* name="Wrap" id="590:30348" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-primary-30, #158de2)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "var(--lineheight-lineheight-xl, 28px)",
                        }}
                      >{`Interview report for Nguyen Quoc Thai`}</span>
                      {/* name="info" id="590:30350" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "16px",
                        }}
                      >
                        {/* name="itemInfo" id="590:30351" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="briefcase" id="590:30352" type="INSTANCE" */}
                          <Icon.QodeBriefcase
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Technical Consultant`}</span>
                          {/* name="iconLeft" id="590:30354" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="590:30355" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="calendar-days" id="590:30356" type="INSTANCE" */}
                          <Icon.QodeCalendarDays
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Jun 24, 2024 - 10:30 AM`}</span>
                          {/* name="iconLeft" id="590:30358" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="590:30359" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="clock-rotate-left" id="590:30360" type="INSTANCE" */}
                          <Icon.QodeClockRotateLeft
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`38 minutes 28 seconds`}</span>
                          {/* name="iconLeft" id="590:30362" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* name="Button" id="590:30363" type="INSTANCE" */}
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
                      buttonname: "Share report",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeLinkSimple />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="scoreOverall" id="590:30364" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  }}
                >
                  {/* name="Overall" id="602:35169" type="INSTANCE" */}
                  <QodeCustom60235103
                    style={{
                      display: "flex",
                      width: "285px",
                      minHeight: "330px",
                      padding: "24px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      alignSelf: "stretch",
                      borderRight:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{ property_1: "Pass" }}
                  />
                  {/* name="Evaluation" id="590:30380" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding: "40px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "40px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Header" id="590:30381" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Header" id="590:30382" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "891px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          }}
                        >{`Candidate performance`}</span>
                      </div>
                      {/* name="Button" id="602:35768" type="INSTANCE" */}
                      <QodeButton
                        style={{
                          display: "flex",
                          width: "80px",
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
                          selectIconLeft: <Icon.QodePencil />,
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          buttonname: "Edit",
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
                    {/* name="Skills" id="590:30385" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* name="Skill" id="590:30386" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="590:30387" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="590:30388" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="590:30389" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="590:30390" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="590:30391" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Section" id="590:30392" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="tabs" id="590:30393" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "4px 48px 0px 48px",
                    alignItems: "center",
                    gap: "28px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name=".tab__item" id="590:30394" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    }}
                    {...{
                      icon: <Icon.QodeStarChristmas />,
                      showIcon: true,
                      title: "Feedback",
                      size: "large",
                      position: "top",
                      state: "active",
                    }}
                  />
                  {/* name=".tab__item" id="590:30395" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeBlockQuote />,
                      showIcon: true,
                      title: "Question summary",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                  {/* name=".tab__item" id="590:30396" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeVideo />,
                      showIcon: true,
                      title: "Video & transcript",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                </div>
                {/* name="outlines" id="590:30397" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "48px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Feedback" id="590:30398" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="601:34400" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {/* name="Rectangle 61" id="601:34405" type="RECTANGLE" */}
                      <Flex
                        style={{
                          width: "4px",
                          height: "16px",
                          background: "var(--green-green-50, #11a620)",
                        }}
                      >
                        {/* name="Rectangle 61" id=601:34405 type=RECTANGLE */}
                        <></>
                      </Flex>
                      <span
                        style={{
                          width: "250px",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                        }}
                      >{`Went well`}</span>
                    </div>
                    {/* name="outlines" id="590:30402" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "var(--size-margin-marginsm, 12px)",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-green-20, #11a620)",
                        background: "var(--green-green-5, #eefff0)",
                      }}
                    >
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-large, 16px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "24px /* 150% */",
                        }}
                      >{`Candidate demonstrated strong technical expertise, particularly in system integration and cloud services, offering insightful answers to technical questions.  Problem-solving skills were impressive, as they effectively addressed complex scenarios and proposed practical solutions. Additionally, candidate communicated their ideas clearly and confidently, making their approach and thought process easy to follow.`}</span>
                      {/* name="Button" id="602:37281" type="INSTANCE" */}
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
                          right: "-10px",
                          top: "-10px",
                          borderRadius: "var(--border-radius-rounded, 999px)",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                          background: "var(--background-bg-white, #fff)",
                        }}
                        {...{
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          onlyIcon: <Icon.QodePencil />,
                          buttonname: "Edit",
                          selectIconLeft: <Icon.QodePencil />,
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
                  </div>
                  {/* name="Feedback" id="590:30404" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="601:34412" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {/* name="Rectangle 61" id="601:34413" type="RECTANGLE" */}
                      <Flex
                        style={{
                          width: "4px",
                          height: "16px",
                          background: "var(--gold-gold-50, #f5a60c)",
                        }}
                      >
                        {/* name="Rectangle 61" id=601:34413 type=RECTANGLE */}
                        <></>
                      </Flex>
                      <span
                        style={{
                          width: "250px",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                        }}
                      >{`Could be better`}</span>
                    </div>
                    {/* name="outlines" id="590:30406" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--size-margin-marginsm, 12px)",
                        flex: "1 0 0",
                        borderRadius: "8px",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--gold-gold-50, #f5a60c)",
                        background: "var(--gold-gold-5, #fef8ec)",
                      }}
                    >
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-large, 16px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "24px /* 150% */",
                        }}
                      >{`Candidate could improve in articulating how technical solutions align with business objectives and customer needs, demonstrating room for growth in business acumen. Although technically proficient, their experience in managing client expectations and building rapport could also benefit from further development.`}</span>
                    </div>
                    {/* name="Button" id="602:37305" type="INSTANCE" */}
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
                        right: "-10px",
                        top: "-10px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodePencil />,
                        buttonname: "Edit",
                        selectIconLeft: <Icon.QodePencil />,
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
                  {/* name="Feedback" id="590:30408" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Title" id="601:34421" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {/* name="Rectangle 61" id="601:34422" type="RECTANGLE" */}
                      <Flex
                        style={{
                          width: "4px",
                          height: "16px",
                          background: "var(--neutral-gray-80, #565656)",
                        }}
                      >
                        {/* name="Rectangle 61" id=601:34422 type=RECTANGLE */}
                        <></>
                      </Flex>
                      <span
                        style={{
                          width: "250px",
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                        }}
                      >{`Need improvements`}</span>
                    </div>
                    {/* name="outlines" id="590:30410" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--size-margin-marginsm, 12px)",
                        flex: "1 0 0",
                        borderRadius: "8px",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      }}
                    >
                      <span
                        style={{
                          alignSelf: "stretch",
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-large, 16px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "24px /* 150% */",
                        }}
                      >{`Ability to produce detailed technical documentation requires improvement to ensure clarity and completeness. Additionally, their project management skills, particularly in planning, scheduling, and resource allocation, need further development.`}</span>
                    </div>
                    {/* name="Button" id="602:37325" type="INSTANCE" */}
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
                        right: "-10px",
                        top: "-10px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodePencil />,
                        buttonname: "Edit",
                        selectIconLeft: <Icon.QodePencil />,
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
                </div>
              </div>
            </div>
            {/* name="Report/End" id="616:28979" type="INSTANCE" */}
            <QodeCustom61628977
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                alignSelf: "stretch",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="595:27787" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="595:27787" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1280px",
              padding: "48px",
              flexDirection: "column",
              alignItems: "center",
              background: "var(--abb-bg-test, #f1f1f1)",
            }}
          >
            {/* name="Body" id="595:27788" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-large, 12px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="Section" id="595:27789" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Job title" id="595:27790" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "20px 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Wrap" id="595:27791" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* name="Button" id="595:27792" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodeChevronLeft />,
                        buttonname: "Source new job",
                        selectIconLeft: <Icon.QodePlus />,
                        iconLeft: true,
                        type: "default",
                        size: "default",
                        state: "default",
                        content: "icon",
                        danger: false,
                        ghost: false,
                      }}
                    />
                    {/* name="Wrap" id="595:27793" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-primary-30, #158de2)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "var(--lineheight-lineheight-xl, 28px)",
                        }}
                      >{`Interview report for Nguyen Quoc Thai`}</span>
                      {/* name="info" id="595:27795" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "16px",
                        }}
                      >
                        {/* name="itemInfo" id="595:27796" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="briefcase" id="595:27797" type="INSTANCE" */}
                          <Icon.QodeBriefcase
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Technical Consultant`}</span>
                          {/* name="iconLeft" id="595:27799" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="595:27800" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="calendar-days" id="595:27801" type="INSTANCE" */}
                          <Icon.QodeCalendarDays
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Jun 24, 2024 - 10:30 AM`}</span>
                          {/* name="iconLeft" id="595:27803" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="595:27804" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="clock-rotate-left" id="595:27805" type="INSTANCE" */}
                          <Icon.QodeClockRotateLeft
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`38 minutes 28 seconds`}</span>
                          {/* name="iconLeft" id="595:27807" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* name="Button" id="595:27808" type="INSTANCE" */}
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
                      buttonname: "Share report",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeLinkSimple />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="scoreOverall" id="602:37739" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  }}
                >
                  {/* name="Overall" id="602:37740" type="INSTANCE" */}
                  <QodeCustom60235103
                    style={{
                      display: "flex",
                      width: "285px",
                      minHeight: "330px",
                      padding: "24px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      alignSelf: "stretch",
                      borderRight:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{ property_1: "Pass" }}
                  />
                  {/* name="Evaluation" id="602:37741" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding: "40px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "40px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Header" id="602:37742" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Header" id="602:37743" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "891px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          }}
                        >{`Candidate performance`}</span>
                      </div>
                      {/* name="Button" id="602:37745" type="INSTANCE" */}
                      <QodeButton
                        style={{
                          display: "flex",
                          width: "80px",
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
                          selectIconLeft: <Icon.QodePencil />,
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          buttonname: "Edit",
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
                    {/* name="Skills" id="602:37746" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* name="Skill" id="602:37747" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37748" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37749" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37750" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37751" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37752" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Section" id="595:27837" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="tabs" id="595:27838" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "4px 48px 0px 48px",
                    alignItems: "center",
                    gap: "28px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name=".tab__item" id="595:27839" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeStarChristmas />,
                      showIcon: true,
                      title: "Feedback",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                  {/* name=".tab__item" id="595:27840" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    }}
                    {...{
                      icon: <Icon.QodeBlockQuote />,
                      showIcon: true,
                      title: "Question summary",
                      size: "large",
                      position: "top",
                      state: "active",
                    }}
                  />
                  {/* name=".tab__item" id="595:27841" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeVideo />,
                      showIcon: true,
                      title: "Video & transcript",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                </div>
                {/* name="outlines" id="595:27842" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "32px 40px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                >
                  {/* name="Frame 37394" id="595:28024" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding: "24px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "32px",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-white, #fff)",
                    }}
                  >
                    {/* name="Frame 37395" id="595:28059" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Header" id="598:28430" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="circle-question" id="598:28435" type="INSTANCE" */}
                        <Icon.QodeCircleQuestion
                          style={{ width: "20px", height: "20px" }}
                          {...{}}
                        />
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Question`}</span>
                      </div>
                      {/* name="Header" id="598:28424" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          flex: "1 0 0",
                        }}
                      >
                        {/* name="message-minus" id="598:28425" type="INSTANCE" */}
                        <Icon.QodeMessageMinus
                          style={{ width: "20px", height: "20px" }}
                          {...{}}
                        />
                        <span
                          style={{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-size-sizemd-20px, 20px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          }}
                        >{`Response`}</span>
                      </div>
                    </div>
                    {/* name="List" id="595:27927" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "24px",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Frame 37395" id="595:28029" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "60px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Interview question" id="595:27928" type="INSTANCE" */}
                        <QodeCustom59527986
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "16px",
                            flex: "1 0 0",
                          }}
                          {...{ state: "View (report)" }}
                        />
                        {/* name="Report/Response" id="595:28224" type="INSTANCE" */}
                        <QodeCustom59528222
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            flex: "1 0 0",
                          }}
                          {...{}}
                        />
                      </div>
                      {/* name="-" id="595:27929" type="LINE" */}
                      <Flex
                        style={{
                          width: "1056px",
                          height: "1px",
                          background:
                            "var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        {/* name="-" id=595:27929 type=LINE */}
                        <></>
                      </Flex>
                      {/* name="Frame 37396" id="595:28039" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "60px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Interview question" id="595:27930" type="INSTANCE" */}
                        <QodeCustom59527986
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "16px",
                            flex: "1 0 0",
                          }}
                          {...{ state: "View (report)" }}
                        />
                        {/* name="Report/Response" id="595:28304" type="INSTANCE" */}
                        <QodeCustom59528222
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            flex: "1 0 0",
                          }}
                          {...{}}
                        />
                      </div>
                      {/* name="-" id="595:27931" type="LINE" */}
                      <Flex
                        style={{
                          width: "1056px",
                          height: "1px",
                          background:
                            "var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        {/* name="-" id=595:27931 type=LINE */}
                        <></>
                      </Flex>
                      {/* name="Frame 37397" id="595:28040" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "60px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Interview question" id="595:27932" type="INSTANCE" */}
                        <QodeCustom59527986
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "16px",
                            flex: "1 0 0",
                          }}
                          {...{ state: "View (report)" }}
                        />
                        {/* name="Report/Response" id="595:28318" type="INSTANCE" */}
                        <QodeCustom59528222
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            flex: "1 0 0",
                          }}
                          {...{}}
                        />
                      </div>
                      {/* name="-" id="595:27933" type="LINE" */}
                      <Flex
                        style={{
                          width: "1056px",
                          height: "1px",
                          background:
                            "var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        {/* name="-" id=595:27933 type=LINE */}
                        <></>
                      </Flex>
                      {/* name="Frame 37398" id="595:28041" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "60px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Interview question" id="595:27934" type="INSTANCE" */}
                        <QodeCustom59527986
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "16px",
                            flex: "1 0 0",
                          }}
                          {...{ state: "View (report)" }}
                        />
                        {/* name="Report/Response" id="595:28332" type="INSTANCE" */}
                        <QodeCustom59528222
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            flex: "1 0 0",
                          }}
                          {...{}}
                        />
                      </div>
                      {/* name="-" id="595:27935" type="LINE" */}
                      <Flex
                        style={{
                          width: "1056px",
                          height: "1px",
                          background:
                            "var(--border-border-neutral-20, #e3e3e3)",
                        }}
                      >
                        {/* name="-" id=595:27935 type=LINE */}
                        <></>
                      </Flex>
                      {/* name="Frame 37399" id="595:28042" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "60px",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name="Interview question" id="595:27936" type="INSTANCE" */}
                        <QodeCustom59527986
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "16px",
                            flex: "1 0 0",
                          }}
                          {...{ state: "View (report)" }}
                        />
                        {/* name="Report/Response" id="595:28346" type="INSTANCE" */}
                        <QodeCustom59528222
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "4px",
                            flex: "1 0 0",
                          }}
                          {...{}}
                        />
                      </div>
                    </div>
                    {/* name="Button" id="602:37622" type="INSTANCE" */}
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
                        right: "-10px",
                        top: "-10px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodePencil />,
                        buttonname: "Edit",
                        selectIconLeft: <Icon.QodePencil />,
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
                </div>
              </div>
            </div>
            {/* name="Report/End" id="616:29261" type="INSTANCE" */}
            <QodeCustom61628977
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                alignSelf: "stretch",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="598:28519" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="598:28519" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "1280px",
              padding: "48px",
              flexDirection: "column",
              alignItems: "center",
              background: "var(--abb-bg-test, #f1f1f1)",
            }}
          >
            {/* name="Body" id="598:28520" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-large, 12px)",
                border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="Section" id="598:28521" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Job title" id="598:28522" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "20px 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name="Wrap" id="598:28523" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* name="Button" id="598:28524" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodeChevronLeft />,
                        buttonname: "Source new job",
                        selectIconLeft: <Icon.QodePlus />,
                        iconLeft: true,
                        type: "default",
                        size: "default",
                        state: "default",
                        content: "icon",
                        danger: false,
                        ghost: false,
                      }}
                    />
                    {/* name="Wrap" id="598:28525" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-text-primary-30, #158de2)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "var(--lineheight-lineheight-xl, 28px)",
                        }}
                      >{`Interview report for Nguyen Quoc Thai`}</span>
                      {/* name="info" id="598:28527" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "16px",
                        }}
                      >
                        {/* name="itemInfo" id="598:28528" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="briefcase" id="598:28529" type="INSTANCE" */}
                          <Icon.QodeBriefcase
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Technical Consultant`}</span>
                          {/* name="iconLeft" id="598:28531" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="598:28532" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="calendar-days" id="598:28533" type="INSTANCE" */}
                          <Icon.QodeCalendarDays
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`Jun 24, 2024 - 10:30 AM`}</span>
                          {/* name="iconLeft" id="598:28535" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                        {/* name="itemInfo" id="598:28536" type="FRAME" */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-margin-marginxs, 8px)",
                          }}
                        >
                          {/* name="clock-rotate-left" id="598:28537" type="INSTANCE" */}
                          <Icon.QodeClockRotateLeft
                            style={{ width: "16px", height: "16px" }}
                            {...{}}
                          />
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
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`38 minutes 28 seconds`}</span>
                          {/* name="iconLeft" id="598:28539" type="INSTANCE" */}
                          <Icon.QodePencil
                            style={{
                              display: "flex",
                              width: "16px",
                              height: "16px",
                              padding: "1.599px 1.616px 1.614px 1.6px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            {...{}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* name="Button" id="598:28540" type="INSTANCE" */}
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
                      buttonname: "Share report",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeLinkSimple />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="scoreOverall" id="602:37898" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradiuslg, 8px)",
                  }}
                >
                  {/* name="Overall" id="602:37899" type="INSTANCE" */}
                  <QodeCustom60235103
                    style={{
                      display: "flex",
                      width: "285px",
                      minHeight: "330px",
                      padding: "24px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      alignSelf: "stretch",
                      borderRight:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--background-bg-white, #fff)",
                    }}
                    {...{ property_1: "Pass" }}
                  />
                  {/* name="Evaluation" id="602:37900" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding: "40px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "40px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Header" id="602:37901" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Header" id="602:37902" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          width: "891px",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          }}
                        >{`Candidate performance`}</span>
                      </div>
                      {/* name="Button" id="602:37904" type="INSTANCE" */}
                      <QodeButton
                        style={{
                          display: "flex",
                          width: "80px",
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
                          selectIconLeft: <Icon.QodePencil />,
                          selectIconRight: <Icon.QodeMagnifyingGlass />,
                          buttonname: "Edit",
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
                    {/* name="Skills" id="602:37905" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* name="Skill" id="602:37906" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37907" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37908" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37909" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37910" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                      {/* name="Skill" id="602:37911" type="INSTANCE" */}
                      <QodeCustom32840351
                        style={{
                          display: "flex",
                          minWidth: "257px",
                          maxWidth: "310px",
                          padding: "16px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-primary-10, #64b9f5)",
                          background: "var(--blue-techblue-5, #f8fcff)",
                        }}
                        {...{}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Section" id="598:28569" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                }}
              >
                {/* name="tabs" id="598:28570" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "4px 48px 0px 48px",
                    alignItems: "center",
                    gap: "28px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--background-bg-white, #fff)",
                  }}
                >
                  {/* name=".tab__item" id="598:28571" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeStarChristmas />,
                      showIcon: true,
                      title: "Feedback",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                  {/* name=".tab__item" id="598:28572" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    }}
                    {...{
                      icon: <Icon.QodeBlockQuote />,
                      showIcon: true,
                      title: "Question summary",
                      size: "large",
                      position: "top",
                      state: "default",
                    }}
                  />
                  {/* name=".tab__item" id="598:28573" type="INSTANCE" */}
                  <QodeCustom29615477
                    style={{
                      display: "flex",
                      padding: "16px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    }}
                    {...{
                      icon: <Icon.QodeVideo />,
                      showIcon: true,
                      title: "Video & transcript",
                      size: "large",
                      position: "top",
                      state: "active",
                    }}
                  />
                </div>
                {/* name="outlines" id="598:28574" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding: "40px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "20px",
                    alignSelf: "stretch",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  }}
                >
                  {/* name="Frame 37400" id="598:33749" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      height: "519px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-large, 12px)",
                      background: "var(--neutral-gray-70, #656565)",
                    }}
                  >
                    {/* name="Frame 37401" id="598:33750" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "12px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        background: "#FFF",
                      }}
                    >
                      {/* name="play" id="598:33751" type="INSTANCE" */}
                      <Icon.QodePlay
                        style={{ width: "32px", height: "32px" }}
                        {...{}}
                      />
                    </div>
                  </div>
                  {/* name="transcript" id="598:33756" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding: "23px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "24px",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-large, 12px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-white, #fff)",
                    }}
                  >
                    {/* name="Report/Transcript item" id="598:33886" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33891" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33896" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33900" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33904" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33905" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33912" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33913" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33920" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33921" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33928" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Report/Transcript item" id="598:33932" type="INSTANCE" */}
                    <QodeCustom59833885
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "60px",
                        alignSelf: "stretch",
                      }}
                      {...{}}
                    />
                    {/* name="Button" id="602:37683" type="INSTANCE" */}
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
                        right: "-10px",
                        top: "-10px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      }}
                      {...{
                        selectIconRight: <Icon.QodeMagnifyingGlass />,
                        onlyIcon: <Icon.QodePencil />,
                        buttonname: "Edit",
                        selectIconLeft: <Icon.QodePencil />,
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
                </div>
              </div>
            </div>
            {/* name="Report/End" id="616:29435" type="INSTANCE" */}
            <QodeCustom61628977
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                alignSelf: "stretch",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
