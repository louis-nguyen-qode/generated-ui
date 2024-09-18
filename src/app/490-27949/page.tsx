// id="490:27949"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom4323425 } from "@designSystem/custom/QodeCustom4323425"
import QodeSvgI434380055612142 from "@designSystem/icon/svg/QodeSvgI434380055612142"
import QodeSvgI500269745612142 from "@designSystem/icon/svg/QodeSvgI500269745612142"
import QodeSvgI233236045612142 from "@designSystem/icon/svg/QodeSvgI233236045612142"
import { QodeCustom945729 } from "@designSystem/custom/QodeCustom945729"
import QodeSvgI500269665612135 from "@designSystem/icon/svg/QodeSvgI500269665612135"
import QodeSvgI500275605612135 from "@designSystem/icon/svg/QodeSvgI500275605612135"

export interface Qode49027949PageProps {}

export const Qode49027949Page: React.FC<Qode49027949PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="states" id="490:27949" type="SECTION" */}
      <div style={{}}>
        {/* name="Shortlisted/List item" id="490:27809" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            display: "flex",
            width: "354px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "#FFF",
          }}
          {...{ showDelete: true, property_1: "default" }}
        />
        {/* name="Shortlisted/List item" id="490:27810" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            display: "flex",
            width: "358px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
            background: "var(--neutral-white, #fff)",
          }}
          {...{ showDelete: true, property_1: "hover" }}
        />
        {/* name="Shortlisted/List item" id="490:27811" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            display: "flex",
            width: "358px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "2px solid var(--border-border-primary-20, #158de2)",
            background: "var(--blue-techblue-5, #f8fcff)",
          }}
          {...{ showDelete: true, property_1: "active" }}
        />
        <span
          style={{
            color: "var(--text-text-white, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading3, 28px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
          }}
        >{`Default`}</span>
        <span
          style={{
            color: "var(--text-text-white, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading3, 28px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
          }}
        >{`Hover`}</span>
        <span
          style={{
            color: "var(--text-text-white, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading3, 28px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
          }}
        >{`Active`}</span>
        <span
          style={{
            color: "var(--text-text-white, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading3, 28px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
          }}
        >{`Long`}</span>
        {/* name="Shortlisted/List item" id="490:29063" type="INSTANCE" */}
        <QodeCustom4323425
          style={{
            display: "flex",
            width: "358px",
            padding: "12px 16px",
            alignItems: "flex-start",
            gap: "24px",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "#FFF",
          }}
          {...{ showDelete: true, property_1: "default" }}
        />
        {/* name="Modal/Unshortlist" id="233:17181" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "440px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* name="PopUp" id="233:17182" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 20px 40px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              alignSelf: "stretch",
              background: "var(--background-bg-white, #fff)",
            }}
          >
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px /* 150% */",
              }}
            >{`You are currently in a conversation with this candidate. Removing them will delete all messages. Are you sure you want to continue?`}</span>
          </div>
          {/* name="Modal/Action" id="233:17202" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "var(--size-padding-paddingsm, 12px) 20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "10px",
              alignSelf: "stretch",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            {/* name="Frame 50" id="233:17203" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "32px",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Button" id="233:17204" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
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
              >
                {/* name="🎰 icon" id="I233:17204;114:1808" type="INSTANCE" */}
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
                  {/* name="Vector" id="I233:17204;114:1808;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I233:17204;114:1808;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Cancel`}</span>
                {/* name="🎰 icon" id="I233:17204;2906:15520" type="INSTANCE" */}
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
                  {/* name="Vector" id="I233:17204;2906:15520;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--color-neutral-text-colortext, #000)",
                    }}
                  >
                    {/* name="Vector" id=I233:17204;2906:15520;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
              {/* name="Button" id="233:17205" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  width: "96px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
              >
                {/* name="🎰 icon" id="I233:17205;35:13236" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.599px 1.599px 1.599px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I233:17205;35:13236;2828:3516" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.801px",
                      height: "12.803px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I233:17205;35:13236;2828:3516 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Remove`}</span>
                {/* name="🎰 icon" id="I233:17205;2906:15123" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "1.6px 1.601px 1.598px 1.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  {/* name="Vector" id="I233:17205;2906:15123;2828:3908" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "12.799px",
                      height: "12.802px",
                      flexShrink: "0",
                      fill: "var(--background-bg-white, #fff)",
                    }}
                  >
                    {/* name="Vector" id=I233:17205;2906:15123;2828:3908 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
        </div>
        {/* name="Flow description" id="434:38005" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "528px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
        >
          {/* name="Title" id="I434:38005;5612:141" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 40px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
              borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
              background: "var(--white, #fff)",
              boxShadow: "3px 3px 0px 0px #434343",
            }}
          >
            {/* name="Frame" id="I434:38005;5612:142" type="FRAME" */}
            <QodeSvgI434380055612142
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-dark-400, #2a2a2a)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Sora",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >{`End of result`}</span>
          </div>
        </Flex>
        {/* name="Flow description" id="500:26974" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "528px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
        >
          {/* name="Title" id="I500:26974;5612:141" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 40px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
              borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
              background: "var(--white, #fff)",
              boxShadow: "3px 3px 0px 0px #434343",
            }}
          >
            {/* name="Frame" id="I500:26974;5612:142" type="FRAME" */}
            <QodeSvgI500269745612142
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-dark-400, #2a2a2a)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Sora",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >{`States`}</span>
          </div>
        </Flex>
        {/* name="Flow description" id="233:23604" type="INSTANCE" */}
        <Flex
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
        >
          {/* name="Title" id="I233:23604;5612:141" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 40px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
              borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
              background: "var(--white, #fff)",
              boxShadow: "3px 3px 0px 0px #434343",
            }}
          >
            {/* name="Frame" id="I233:23604;5612:142" type="FRAME" */}
            <QodeSvgI233236045612142
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-dark-400, #2a2a2a)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Sora",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >{`Remove from shortlist`}</span>
          </div>
        </Flex>
        {/* name="List | Shortlisted" id="434:37679" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            display: "flex",
            width: "370px",
            height: "583px",
            padding: "var(--size-size-sizexxs-6px, 6px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
          {...{ property_1: "End" }}
        />
        {/* name="Flow description" id="500:26966" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "541px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--gray-neutrals-80, #4a4a4a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
        >
          {/* name="Title" id="I500:26966;5612:134" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 40px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
              borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
              background: "var(--white, #fff)",
              boxShadow: "3px 3px 0px 0px #434343",
            }}
          >
            {/* name="Frame" id="I500:26966;5612:135" type="FRAME" */}
            <QodeSvgI500269665612135
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-dark-400, #2a2a2a)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Sora",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >{`Pagination`}</span>
          </div>
          {/* name="Content" id="I500:26966;5612:138" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "40px 74px",
              alignItems: "flex-start",
              gap: "10px",
              alignSelf: "stretch",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "#FFF",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: '"Be Vietnam Pro"',
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "36px /* 128.571% */",
              }}
            >{`15 / page`}</span>
          </div>
        </Flex>
        {/* name="List | Shortlisted" id="500:27568" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            display: "flex",
            width: "370px",
            height: "838px",
            padding: "var(--size-size-sizexxs-6px, 6px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
          {...{ property_1: "End" }}
        />
        {/* name="List | Shortlisted" id="500:33715" type="INSTANCE" */}
        <QodeCustom945729
          style={{
            display: "flex",
            width: "370px",
            height: "838px",
            padding: "var(--size-size-sizexxs-6px, 6px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          }}
          {...{ property_1: "End" }}
        />
        {/* name="Flow description" id="500:27560" type="INSTANCE" */}
        <Flex
          style={{
            display: "flex",
            width: "664px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--gray-neutrals-80, #4a4a4a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
        >
          {/* name="Title" id="I500:27560;5612:134" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "20px 40px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderTop: "var(--border-radius-small, 4px) solid #8D33FF",
              borderBottom: "var(--border-radius-small, 4px) solid #8D33FF",
              background: "var(--white, #fff)",
              boxShadow: "3px 3px 0px 0px #434343",
            }}
          >
            {/* name="Frame" id="I500:27560;5612:135" type="FRAME" */}
            <QodeSvgI500275605612135
              style={{ width: "24px", height: "24px" }}
              {...{}}
            />
            <span
              style={{
                color: "var(--text-text-dark-400, #2a2a2a)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Sora",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >{`Search in shortlist`}</span>
          </div>
          {/* name="Content" id="I500:27560;5612:138" type="FRAME" */}
          <div
            style={{
              display: "flex",
              padding: "40px 74px",
              alignItems: "flex-start",
              gap: "10px",
              alignSelf: "stretch",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "#FFF",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: '"Be Vietnam Pro"',
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "36px /* 128.571% */",
              }}
            >{`Still show pagination if search result has more than 15 items

Start search when user stops typing (500 ms)`}</span>
          </div>
        </Flex>
      </div>
    </>
  )
}

export default Qode49027949Page
