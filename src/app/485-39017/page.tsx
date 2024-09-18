// id="485:39017"
import React from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeInput } from "@designSystem/ant/QodeInput"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom48612 } from "@designSystem/custom/QodeCustom48612"
import { QodePagination } from "@designSystem/ant/QodePagination"
import { QodeCustom34019060 } from "@designSystem/custom/QodeCustom34019060"

export interface Qode48539017PageProps {}

export const Qode48539017Page: React.FC<Qode48539017PageProps> = ({
  ...rest
}) => {
  return (
    <>
      {/* name="Jobs | Add" id="485:39017" type="FRAME" */}
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "800px",
          alignItems: "flex-start",
          background: "#FFF",
        }}
      >
        {/* name="Navbar" id="485:39018" type="INSTANCE" */}
        <QodeCustom13120
          style={{
            display: "flex",
            width: "84px",
            height: "800px",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: "0",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          }}
          {...{}}
        />
        {/* name="Body" id="485:39019" type="FRAME" */}
        <div
          style={{
            display: "flex",
            padding: "40px 40px 0px 40px",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            flex: "1 0 0",
            alignSelf: "stretch",
            background: "var(--app-bg, #f4f4f6)",
          }}
        >
          {/* name="Header" id="485:39020" type="FRAME" */}
          <div
            style={{ height: "40px", maxWidth: "1276px", alignSelf: "stretch" }}
          >
            <span
              style={{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading3, 28px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h3, 36px) /* 128.571% */",
              }}
            >{`My jobs`}</span>
            {/* name="Search bar" id="485:39022" type="INSTANCE" */}
            <QodeInput
              style={{
                display: "flex",
                width: "480px",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{
                suffix: "SUF",
                title: "Search",
                prefix: "PRE",
                iconRight: <Icon.QodeUser />,
                iconLeft: <Icon.QodeMagnifyingGlass />,
                showIconLeft: true,
                state: "default",
                status: "default",
                size: "large",
              }}
            />
            {/* name="Button" id="485:39023" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                width: "135px",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
              {...{
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                iconLeft: true,
                buttonname: "Add job",
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
          {/* name="Job list" id="485:39024" type="FRAME" */}
          <div
            style={{
              display: "flex",
              maxWidth: "1276px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            {/* name="Jobs" id="485:39025" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                alignContent: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
                flexWrap: "wrap",
                borderRadius: "8px",
              }}
            >
              {/* name="Job item" id="485:39026" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39027" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39028" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39029" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39030" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39031" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39032" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39033" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39034" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39035" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39036" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
              {/* name="Job item" id="485:39037" type="INSTANCE" */}
              <QodeCustom48612
                style={{
                  display: "flex",
                  width: "366px",
                  maxWidth: "440px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "var(--border-radius-large, 12px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{ state: "default", _style: "Simple" }}
              />
            </div>
            {/* name="Pagination" id="485:39038" type="INSTANCE" */}
            <QodePagination
              style={{
                display: "flex",
                width: "556px",
                paddingBottom: "32px",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-padding, 16px)",
              }}
              {...{ total: "Total 85 items", type: "more", mini: false }}
            />
          </div>
        </div>
        {/* name="Overlay BG" id="485:39039" type="INSTANCE" */}
        <div
          style={{
            display: "flex",
            width: "1280px",
            height: "800px",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
          {...{}}
        />
        {/* name="Modal/Add job" id="485:39040" type="INSTANCE" */}
        <QodeCustom34019060
          style={{
            display: "flex",
            width: "540px",
            height: "580px",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            right: "40px",
            top: "94px",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background: "var(--background-bg-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
          {...{ property_1: "Variant2" }}
        />
      </div>
    </>
  )
}

export default Qode48539017Page
