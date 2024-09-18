// id="183:28908"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom18328908Props {
  title?: string
  showPre?: boolean
  size?: "default" | "large" | "small"
  type?: "icon primary" | "text primary" | "icon"
}

export const QodeCustom18328908: React.FC<
  QodeCustom18328908Props & { style?: CSSProperties }
> = ({
  title = "Input",
  showPre = true,
  size = "default",
  type = "icon",
  ...rest
}) => {
  return (
    <>
      {/* name="Input__Search Box" id="183:28908" type="COMPONENT_SET" */}
      {/* id="183:28909" */}
      {`${size}` === `default` && `${type}` === `icon` && (
        <>
          {/* name="size=default, type=icon" id="183:28909" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "331px",
              alignItems: "flex-start",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:28910" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:28911" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:28954" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:28972" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="🎰 icon" id="I183:28972;114:3100" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:28914" */}
      {`${size}` === `large` && `${type}` === `icon` && (
        <>
          {/* name="size=large, type=icon" id="183:28914" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "339px",
              height: "var(--size-height-controlheightlg, 40px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:28915" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:28916" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:28956" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:28980" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="🎰 icon" id="I183:28980;114:3115" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:28919" */}
      {`${size}` === `small` && `${type}` === `icon` && (
        <>
          {/* name="size=small, type=icon" id="183:28919" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "315px",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:28920" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:28921" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:28958" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:28983" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              }}
            >
              {/* name="🎰 icon" id="I183:28983;114:3130" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:28990" */}
      {`${size}` === `default` && `${type}` === `icon primary` && (
        <>
          {/* name="size=default, type=icon primary" id="183:28990" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "331px",
              alignItems: "flex-start",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:28991" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:28992" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:28994" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:28995" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="🎰 icon" id="I183:28995;114:3097" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:28996" */}
      {`${size}` === `large` && `${type}` === `icon primary` && (
        <>
          {/* name="size=large, type=icon primary" id="183:28996" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "339px",
              height: "var(--size-height-controlheightlg, 40px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:28997" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:28998" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:29000" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:29001" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="🎰 icon" id="I183:29001;114:3112" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:29002" */}
      {`${size}` === `small` && `${type}` === `icon primary` && (
        <>
          {/* name="size=small, type=icon primary" id="183:29002" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "315px",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:29003" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:29004" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:29006" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:29007" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                width: "24px",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flexShrink: "0",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              {/* name="🎰 icon" id="I183:29007;114:3127" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{
                  width: "var(--font-size-base, 14px)",
                  height: "var(--font-size-base, 14px)",
                  flexShrink: "0",
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="183:29032" */}
      {`${size}` === `default` && `${type}` === `text primary` && (
        <>
          {/* name="size=default, type=text primary" id="183:29032" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "358px",
              alignItems: "flex-start",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:29033" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:29034" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:29036" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:29037" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
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
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="183:29038" */}
      {`${size}` === `large` && `${type}` === `text primary` && (
        <>
          {/* name="size=large, type=text primary" id="183:29038" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "373px",
              height: "var(--size-height-controlheightlg, 40px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:29039" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingsm, 12px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:29040" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "10px var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingsm, 12px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:29042" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:29043" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
      {/* id="183:29044" */}
      {`${size}` === `small` && `${type}` === `text primary` && (
        <>
          {/* name="size=small, type=text primary" id="183:29044" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "336px",
              height: "var(--size-height-controlheightsm, 24px)",
              alignItems: "flex-start",
              flexShrink: "0",
              borderRadius: "4px",
              border:
                "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            }}
          >
            {/* name="🧬 pre" id="183:29045" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius:
                  "var(--style-radius-borderradius, 8px) 0px 0px var(--style-radius-borderradius, 8px)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              }}
            >
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`http://`}</span>
            </Flex>
            {/* name="Input / Basic" id="183:29046" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding: "10px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                flex: "1 0 0",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color:
                    "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              {/* name="Icon Right" id="183:29048" type="INSTANCE" */}
              <Icon.QodeMicrophone
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
            </div>
            {/* name="🧬 button" id="183:29049" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheightsm, 24px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                background: "var(--background-bg-primary, #1597f4)",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-white, #fff)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Button`}</span>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
