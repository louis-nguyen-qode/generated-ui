// id="490:27960"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom409539 } from "@designSystem/custom/QodeCustom409539"
import { QodeCustom43430029 } from "@designSystem/custom/QodeCustom43430029"
import { QodeCustom438720 } from "@designSystem/custom/QodeCustom438720"
import { QodeCustom18913734 } from "@designSystem/custom/QodeCustom18913734"
import { QodeCustom18912628 } from "@designSystem/custom/QodeCustom18912628"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom5612132 } from "@designSystem/custom/QodeCustom5612132"

export interface Qode49027960PageProps {}

export const Qode49027960Page: React.FC<Qode49027960PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="states" id="490:27960" type="SECTION" */}
      <div style={{}}>
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
        {/* name="Profile/List item" id="490:28044" type="INSTANCE" */}
        <QodeCustom409539
          style={{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{ state: "default" }}
        />
        {/* name="Profile/List item" id="490:29041" type="INSTANCE" */}
        <QodeCustom409539
          style={{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{ state: "default" }}
        />
        {/* name="Profile/List item" id="490:28045" type="INSTANCE" */}
        <QodeCustom409539
          style={{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom: "2px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-neutral-5, #f8f6f6)",
          }}
          {...{ state: "hover" }}
        />
        {/* name="Profile/List item" id="490:28046" type="INSTANCE" */}
        <QodeCustom409539
          style={{
            display: "flex",
            width: "350px",
            padding: "12px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            borderBottom: "2px solid var(--border-border-primary-20, #158de2)",
            background: "#F6FBFF",
          }}
          {...{ state: "active" }}
        />
        {/* name="List | Profile" id="434:38159" type="INSTANCE" */}
        <QodeCustom43430029
          style={{
            display: "flex",
            width: "353px",
            height: "583px",
            flexDirection: "column",
            alignItems: "center",
            background: "#FFF",
          }}
          {...{ property_1: "Variant2" }}
        />
        {/* name="Special button/Shortlist" id="485:40480" type="FRAME" */}
        <div
          style={{
            display: "flex",
            width: "422px",
            padding: "40px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            background: "#FFF",
          }}
        >
          {/* name="Frame 37391" id="485:40487" type="FRAME" */}
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
                textAlign: "right",
                fontFamily: "Sora",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "20px /* 142.857% */",
              }}
            >{`Default`}</span>
            {/* name="Special button/Shortlist" id="485:40467" type="INSTANCE" */}
            <QodeCustom438720
              style={{
                display: "flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--neutral-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{ state: "Default" }}
            />
          </div>
          {/* name="Frame 37392" id="485:40491" type="FRAME" */}
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
                textAlign: "right",
                fontFamily: "Sora",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "20px /* 142.857% */",
              }}
            >{`Hover`}</span>
            {/* name="Special button/Shortlist" id="485:40469" type="INSTANCE" */}
            <QodeCustom438720
              style={{
                display: "flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{ state: "Hovered" }}
            />
          </div>
          {/* name="Frame 37393" id="485:40492" type="FRAME" */}
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
                textAlign: "right",
                fontFamily: "Sora",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "20px /* 142.857% */",
              }}
            >{`Empty`}</span>
            {/* name="Special button/Shortlist" id="485:40468" type="INSTANCE" */}
            <QodeCustom438720
              style={{
                display: "flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ state: "Empty" }}
            />
          </div>
        </div>
        {/* name="Quick change job" id="490:28734" type="SECTION" */}
        <div style={{}}>
          {/* name=".dropdown__menu" id="233:25505" type="INSTANCE" */}
          <QodeCustom18913734
            style={{
              display: "flex",
              width: "294px",
              padding: "var(--size-padding-paddingsm, 12px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-small, 12px)",
              borderRadius: "var(--border-radius-base, 8px)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
            {...{
              item_1: "<QodeCustom18912628 />",
              item_4: "<QodeCustom18912628 />",
              item_2: "<QodeCustom18912628 />",
              item_3: "<QodeCustom18912628 />",
              item_6: "<QodeCustom18912628 />",
              item_7: "<QodeCustom18912628 />",
              item_5: "<QodeCustom18912628 />",
              item_8: "<QodeCustom18912628 />",
              items: "7",
            }}
          />
          {/* name="Wrap" id="490:28721" type="FRAME" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* name="Button" id="490:28722" type="INSTANCE" */}
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
            {/* name="Title" id="490:28723" type="FRAME" */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  textDecorationLine: "underline",
                }}
              >{`Senior Software Developer `}</span>
              {/* name="angle-down" id="490:28725" type="INSTANCE" */}
              <Icon.QodeAngleDown
                style={{ width: "20px", height: "20px" }}
                {...{}}
              />
            </div>
            {/* name="Button" id="490:28726" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "70px",
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
                buttonname: "View JD",
                selectIconLeft: <Icon.QodeIcons />,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
          <span
            style={{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: '"SF Pro Display"',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
            }}
          >{`Job title · Date added`}</span>
          <span
            style={{
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "28px /* 140% */",
            }}
          >{`Max height: 500 px.
Scroll if overflow.`}</span>
        </div>
        {/* name="Flow description" id="434:38010" type="INSTANCE" */}
        <QodeCustom5612132
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
          {...{
            flowName: "End of result",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="485:40481" type="INSTANCE" */}
        <QodeCustom5612132
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
          {...{
            flowName: "Special button",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="233:25549" type="INSTANCE" */}
        <QodeCustom5612132
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
          {...{
            flowName: "Quick change job",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="490:27959" type="INSTANCE" */}
        <QodeCustom5612132
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--text-text-dark-400, #2a2a2a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
          {...{
            flowName: "States",
            content: "Description",
            type: "Only title",
            size: "Default",
          }}
        />
        {/* name="Flow description" id="500:26843" type="INSTANCE" */}
        <QodeCustom5612132
          style={{
            display: "flex",
            width: "422px",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--4, 4px)",
            background: "var(--gray-neutrals-80, #4a4a4a)",
            boxShadow: "4px 4px 0px 0px rgba(21, 21, 21, 0.80)",
          }}
          {...{
            flowName: "Pagination",
            content: "15 / page",
            type: "Default",
            size: "Default",
          }}
        />
        <span
          style={{
            color: "#FFF",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-heading6, 16px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
          }}
        >{`Name max 2 lines: 44px
Title max 2 lines: 40px`}</span>
      </div>
    </>
  )
}

export default Qode49027960Page
