// id="81:3732"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg813755 from "@designSystem/icon/svg/QodeSvg813755"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvg813764 from "@designSystem/icon/svg/QodeSvg813764"
import QodeSvg813774 from "@designSystem/icon/svg/QodeSvg813774"
import QodeSvg813784 from "@designSystem/icon/svg/QodeSvg813784"
import QodeSvg813794 from "@designSystem/icon/svg/QodeSvg813794"
import QodeSvg813803 from "@designSystem/icon/svg/QodeSvg813803"
import QodeSvg813812 from "@designSystem/icon/svg/QodeSvg813812"
import QodeSvg813816 from "@designSystem/icon/svg/QodeSvg813816"
import QodeSvg813825 from "@designSystem/icon/svg/QodeSvg813825"
import QodeSvg813835 from "@designSystem/icon/svg/QodeSvg813835"
import QodeSvg813845 from "@designSystem/icon/svg/QodeSvg813845"
import QodeSvg813855 from "@designSystem/icon/svg/QodeSvg813855"
import QodeSvg813864 from "@designSystem/icon/svg/QodeSvg813864"
import QodeSvg813873 from "@designSystem/icon/svg/QodeSvg813873"
import QodeSvg813877 from "@designSystem/icon/svg/QodeSvg813877"
import QodeSvg813886 from "@designSystem/icon/svg/QodeSvg813886"
import QodeSvg813896 from "@designSystem/icon/svg/QodeSvg813896"
import QodeSvg813906 from "@designSystem/icon/svg/QodeSvg813906"
import QodeSvg813916 from "@designSystem/icon/svg/QodeSvg813916"
import QodeSvg813925 from "@designSystem/icon/svg/QodeSvg813925"
import QodeSvg813934 from "@designSystem/icon/svg/QodeSvg813934"

export interface QodeCustom813732Props {
  actions?: boolean
  title?: string
  state?:
    | "default"
    | "hover"
    | "focussed"
    | "typing"
    | "filled"
    | "disabled"
    | "error"
  size?: "default" | "large" | "small"
}

export const QodeCustom813732: React.FC<
  QodeCustom813732Props & { style?: CSSProperties }
> = ({
  actions = false,
  title = "Text Area",
  state = "default",
  size = "default",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Text Area" id="81:3732" type="COMPONENT_SET" */}
      {/* id="81:3733" */}
      {`${state}` === `default` && `${size}` === `default` && (
        <>
          {/* name="state=default, size=default" id="81:3733" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3755" type="BOOLEAN_OPERATION" */}
            <QodeSvg813755
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3758" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3759" type="INSTANCE" */}
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
              {/* name="vote" id="81:3760" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3761" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3762" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3734" */}
      {`${state}` === `hover` && `${size}` === `default` && (
        <>
          {/* name="state=hover, size=default" id="81:3734" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3764" type="BOOLEAN_OPERATION" */}
            <QodeSvg813764
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3767" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3768" type="INSTANCE" */}
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
              {/* name="vote" id="81:3769" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3770" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3771" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3735" */}
      {`${state}` === `focussed` && `${size}` === `default` && (
        <>
          {/* name="state=focussed, size=default" id="81:3735" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3773" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "52px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3773 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3774" type="BOOLEAN_OPERATION" */}
            <QodeSvg813774
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3777" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3778" type="INSTANCE" */}
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
              {/* name="vote" id="81:3779" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3780" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3781" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3736" */}
      {`${state}` === `error` && `${size}` === `default` && (
        <>
          {/* name="state=error, size=default" id="81:3736" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
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
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3783" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "52px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
              }}
            >
              {/* name="Focus Ring" id=81:3783 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3784" type="BOOLEAN_OPERATION" */}
            <QodeSvg813784
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3787" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3788" type="INSTANCE" */}
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
              {/* name="vote" id="81:3789" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3790" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3791" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3737" */}
      {`${state}` === `typing` && `${size}` === `default` && (
        <>
          {/* name="state=typing, size=default" id="81:3737" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3793" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "52px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3793 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3794" type="BOOLEAN_OPERATION" */}
            <QodeSvg813794
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3797" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3798" type="INSTANCE" */}
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
              {/* name="vote" id="81:3799" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3800" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3801" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3738" */}
      {`${state}` === `filled` && `${size}` === `default` && (
        <>
          {/* name="state=filled, size=default" id="81:3738" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
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
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3803" type="BOOLEAN_OPERATION" */}
            <QodeSvg813803
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3806" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3807" type="INSTANCE" */}
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
              {/* name="vote" id="81:3808" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3809" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3810" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3739" */}
      {`${state}` === `disabled` && `${size}` === `default` && (
        <>
          {/* name="state=disabled, size=default" id="81:3739" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "52px",
              padding: "var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3812" type="BOOLEAN_OPERATION" */}
            <QodeSvg813812
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "41px",
                fill: "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="81:3740" */}
      {`${state}` === `default` && `${size}` === `large` && (
        <>
          {/* name="state=default, size=large" id="81:3740" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
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
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3816" type="BOOLEAN_OPERATION" */}
            <QodeSvg813816
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3819" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3820" type="INSTANCE" */}
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
              {/* name="vote" id="81:3821" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3822" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3823" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3741" */}
      {`${state}` === `hover` && `${size}` === `large` && (
        <>
          {/* name="state=hover, size=large" id="81:3741" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3825" type="BOOLEAN_OPERATION" */}
            <QodeSvg813825
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3828" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3829" type="INSTANCE" */}
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
              {/* name="vote" id="81:3830" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3831" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3832" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3742" */}
      {`${state}` === `focussed` && `${size}` === `large` && (
        <>
          {/* name="state=focussed, size=large" id="81:3742" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3834" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "64px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3834 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3835" type="BOOLEAN_OPERATION" */}
            <QodeSvg813835
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3838" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3839" type="INSTANCE" */}
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
              {/* name="vote" id="81:3840" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3841" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3842" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3743" */}
      {`${state}` === `error` && `${size}` === `large` && (
        <>
          {/* name="state=error, size=large" id="81:3743" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
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
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3844" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "64px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
              }}
            >
              {/* name="Focus Ring" id=81:3844 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3845" type="BOOLEAN_OPERATION" */}
            <QodeSvg813845
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3848" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3849" type="INSTANCE" */}
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
              {/* name="vote" id="81:3850" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3851" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3852" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3744" */}
      {`${state}` === `typing` && `${size}` === `large` && (
        <>
          {/* name="state=typing, size=large" id="81:3744" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3854" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "64px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3854 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3855" type="BOOLEAN_OPERATION" */}
            <QodeSvg813855
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3858" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3859" type="INSTANCE" */}
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
              {/* name="vote" id="81:3860" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3861" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3862" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3745" */}
      {`${state}` === `filled` && `${size}` === `large` && (
        <>
          {/* name="state=filled, size=large" id="81:3745" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
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
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3864" type="BOOLEAN_OPERATION" */}
            <QodeSvg813864
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3867" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3868" type="INSTANCE" */}
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
              {/* name="vote" id="81:3869" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3870" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3871" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3746" */}
      {`${state}` === `disabled` && `${size}` === `large` && (
        <>
          {/* name="state=disabled, size=large" id="81:3746" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "64px",
              padding: "var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "var(--text-text-placeholder, #a7a7a7)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-large, 16px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px /* 150% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3873" type="BOOLEAN_OPERATION" */}
            <QodeSvg813873
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "53px",
                fill: "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="81:3747" */}
      {`${state}` === `default` && `${size}` === `small` && (
        <>
          {/* name="state=default, size=small" id="81:3747" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3877" type="BOOLEAN_OPERATION" */}
            <QodeSvg813877
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3880" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3881" type="INSTANCE" */}
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
              {/* name="vote" id="81:3882" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3883" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3884" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3748" */}
      {`${state}` === `hover` && `${size}` === `small` && (
        <>
          {/* name="state=hover, size=small" id="81:3748" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3886" type="BOOLEAN_OPERATION" */}
            <QodeSvg813886
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3889" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3890" type="INSTANCE" */}
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
              {/* name="vote" id="81:3891" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3892" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3893" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3749" */}
      {`${state}` === `focussed` && `${size}` === `small` && (
        <>
          {/* name="state=focussed, size=small" id="81:3749" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
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
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3895" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "44px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3895 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3896" type="BOOLEAN_OPERATION" */}
            <QodeSvg813896
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3899" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3900" type="INSTANCE" */}
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
              {/* name="vote" id="81:3901" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3902" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3903" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3750" */}
      {`${state}` === `error` && `${size}` === `small` && (
        <>
          {/* name="state=error, size=small" id="81:3750" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerror, #dc3812)",
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
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3905" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "44px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-error-colorerrorborder, #ffb7a7)",
              }}
            >
              {/* name="Focus Ring" id=81:3905 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3906" type="BOOLEAN_OPERATION" */}
            <QodeSvg813906
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3909" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3910" type="INSTANCE" */}
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
              {/* name="vote" id="81:3911" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3912" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3913" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3751" */}
      {`${state}` === `typing` && `${size}` === `small` && (
        <>
          {/* name="state=typing, size=small" id="81:3751" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            <span
              style={{
                flex: "1 0 0",
                alignSelf: "stretch",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Text Area`}</span>
            {/* name="Focus Ring" id="81:3915" type="RECTANGLE" */}
            <Flex
              style={{
                width: "240px",
                height: "44px",
                position: "absolute",
                borderRadius: "8px",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimaryborder, #b2dfff)",
              }}
            >
              {/* name="Focus Ring" id=81:3915 type=RECTANGLE */}
              <></>
            </Flex>
            {/* name="Resizer" id="81:3916" type="BOOLEAN_OPERATION" */}
            <QodeSvg813916
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3919" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3920" type="INSTANCE" */}
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
              {/* name="vote" id="81:3921" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3922" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3923" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3752" */}
      {`${state}` === `filled` && `${size}` === `small` && (
        <>
          {/* name="state=filled, size=small" id="81:3752" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
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
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              }}
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3925" type="BOOLEAN_OPERATION" */}
            <QodeSvg813925
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortext, #000)",
              }}
              {...{}}
            />
            {/* name="button" id="81:3928" type="FRAME" */}
            <div
              style={{
                display: "flex",
                width: "206px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "absolute",
                left: "8px",
                bottom: "4px",
              }}
            >
              {/* name="Button" id="81:3929" type="INSTANCE" */}
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
              {/* name="vote" id="81:3930" type="FRAME" */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* name="Button" id="81:3931" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
                    selectIconLeft: <Icon.QodeIcons />,
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="81:3932" type="INSTANCE" */}
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
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Rewrite",
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
          </div>
        </>
      )}
      {/* id="81:3753" */}
      {`${state}` === `disabled` && `${size}` === `small` && (
        <>
          {/* name="state=disabled, size=small" id="81:3753" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "240px",
              height: "44px",
              padding: "var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
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
            >{`Text Area`}</span>
            {/* name="Resizer" id="81:3934" type="BOOLEAN_OPERATION" */}
            <QodeSvg813934
              style={{
                width: "8.354px",
                height: "8.354px",
                position: "absolute",
                left: "229px",
                top: "33px",
                fill: "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
