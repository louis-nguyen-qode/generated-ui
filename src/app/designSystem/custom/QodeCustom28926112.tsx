// id="289:26112"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom28926112Props {
  lIcon?: boolean
  rIcon?: boolean
  title?: string
  type?: "default" | "closable" | "new"
  border?: "false" | "true"
}

export const QodeCustom28926112: React.FC<
  QodeCustom28926112Props & { style?: CSSProperties }
> = ({
  lIcon = false,
  rIcon = false,
  title = "Tag",
  type = "default",
  border = "true",
  ...rest
}) => {
  return (
    <>
      {/* name="Tag_Transparent" id="289:26112" type="COMPONENT_SET" */}
      {/* id="289:26113" */}
      {`${type}` === `default` && `${border}` === `true` && (
        <>
          {/* name="type=default, border=true" id="289:26113" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background:
                "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
            }}
          >
            {/* name="circle-plus" id="289:26119" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26121" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26114" */}
      {`${type}` === `closable` && `${border}` === `true` && (
        <>
          {/* name="type=closable, border=true" id="289:26114" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background:
                "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
            }}
          >
            {/* name="circle-plus" id="289:26122" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26124" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26115" */}
      {`${type}` === `new` && `${border}` === `true` && (
        <>
          {/* name="type=new, border=true" id="289:26115" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              border:
                "var(--style-line-width-linewidth, 1px) dashed var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* name="circle-plus" id="289:26125" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26127" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26116" */}
      {`${type}` === `default` && `${border}` === `false` && (
        <>
          {/* name="type=default, border=false" id="289:26116" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background:
                "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
            }}
          >
            {/* name="circle-plus" id="289:26128" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26130" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26117" */}
      {`${type}` === `closable` && `${border}` === `false` && (
        <>
          {/* name="type=closable, border=false" id="289:26117" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
              background:
                "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
            }}
          >
            {/* name="circle-plus" id="289:26131" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color: "var(--color-neutral-text-colortextsolid, #fff)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26133" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="289:26118" */}
      {`${type}` === `new` && `${border}` === `false` && (
        <>
          {/* name="type=new, border=false" id="289:26118" type="COMPONENT" */}
          <div
            style={{
              display: "inline-flex",
              height: "24px",
              padding:
                "var(--size-size-size5xs-1px, 1px) var(--size-padding-paddingxs, 8px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-margin-marginxxs, 4px)",
              flexShrink: "0",
              borderRadius: "var(--style-radius-borderradiussm, 6px)",
            }}
          >
            {/* name="circle-plus" id="289:26134" type="INSTANCE" */}
            <Icon.QodeCirclePlus
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "1.2px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
            <span
              style={{
                color:
                  "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              }}
            >{`Tag`}</span>
            {/* name="xmark" id="289:26136" type="INSTANCE" */}
            <Icon.QodeXmark
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                padding: "2.999px",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
