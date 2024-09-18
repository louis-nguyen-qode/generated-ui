// id="137:7437"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1377437Props {
  lIcon?: boolean
  rIcon?: boolean
  title?: string
  type?: "default" | "closable" | "new"
  border?: "false" | "true"
}

export const QodeCustom1377437: React.FC<
  QodeCustom1377437Props & { style?: CSSProperties }
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
      {/* name="Tag_Transparent" id="137:7437" type="COMPONENT_SET" */}
      {/* id="137:7436" */}
      {`${type}` === `default` && `${border}` === `true` && (
        <>
          {/* name="type=default, border=true" id="137:7436" type="COMPONENT" */}
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
            {/* name="circle-plus" id="2781:17018" type="INSTANCE" */}
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
            {/* name="xmark" id="2781:17173" type="INSTANCE" */}
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
      {/* id="137:7438" */}
      {`${type}` === `closable` && `${border}` === `true` && (
        <>
          {/* name="type=closable, border=true" id="137:7438" type="COMPONENT" */}
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
            {/* name="circle-plus" id="2781:17020" type="INSTANCE" */}
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
            {/* name="xmark" id="137:7440" type="INSTANCE" */}
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
      {/* id="137:7442" */}
      {`${type}` === `new` && `${border}` === `true` && (
        <>
          {/* name="type=new, border=true" id="137:7442" type="COMPONENT" */}
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
            {/* name="circle-plus" id="137:7444" type="INSTANCE" */}
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
            {/* name="xmark" id="2781:17176" type="INSTANCE" */}
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
      {/* id="137:7758" */}
      {`${type}` === `default` && `${border}` === `false` && (
        <>
          {/* name="type=default, border=false" id="137:7758" type="COMPONENT" */}
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
            {/* name="circle-plus" id="2781:17019" type="INSTANCE" */}
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
            {/* name="xmark" id="2781:17174" type="INSTANCE" */}
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
      {/* id="137:7760" */}
      {`${type}` === `closable` && `${border}` === `false` && (
        <>
          {/* name="type=closable, border=false" id="137:7760" type="COMPONENT" */}
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
            {/* name="circle-plus" id="2781:17021" type="INSTANCE" */}
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
            {/* name="xmark" id="137:7762" type="INSTANCE" */}
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
      {/* id="137:7763" */}
      {`${type}` === `new` && `${border}` === `false` && (
        <>
          {/* name="type=new, border=false" id="137:7763" type="COMPONENT" */}
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
            {/* name="circle-plus" id="137:7764" type="INSTANCE" */}
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
            {/* name="xmark" id="2781:17175" type="INSTANCE" */}
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
