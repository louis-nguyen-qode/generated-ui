// id="4:7"
import { Icon } from "@designSystem/icon"
import { Flex } from "antd"
import React from "react"
import { QodeButton } from "../designSystem/custom-button"

export interface QButtonProps { }

export const QButton: React.FC<QButtonProps> = ({ ...rest }) => {
  return (
    <>
      <Flex style={{ gap: 16, flexWrap: 'wrap' }}>
        {/* name="type=primary, size=default, state=default, content=default, danger=false, ghost=false", id="35:9469" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=default, content=default, danger=false, ghost=false", id="114:1807" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=default, danger=false, ghost=false", id="114:1811" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=default, content=default, danger=false, ghost=false", id="114:1815" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=default, content=default, danger=false, ghost=false", id="114:1819" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=default, danger=false, ghost=false", id="114:1843" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=default, content=default, danger=false, ghost=false", id="114:1846" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=default, danger=false, ghost=false", id="114:1849" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=default, content=default, danger=false, ghost=false", id="114:1852" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=default, content=default, danger=false, ghost=false", id="114:1855" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=default, danger=false, ghost=false", id="114:1863" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=default, content=default, danger=false, ghost=false", id="114:1866" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=default, danger=false, ghost=false", id="114:1869" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=default, content=default, danger=false, ghost=false", id="114:1872" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=default, content=default, danger=false, ghost=false", id="114:1875" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=default, danger=false, ghost=false", id="114:1883" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=default, danger=false, ghost=false", id="114:1886" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=default, danger=false, ghost=false", id="114:1889" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=default, danger=false, ghost=false", id="114:1892" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=default, danger=false, ghost=false", id="114:1895" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=default, danger=false, ghost=false", id="114:1898" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=default, danger=false, ghost=false", id="114:1901" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=default, danger=false, ghost=false", id="114:1904" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=default, danger=false, ghost=false", id="114:1907" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=default, danger=false, ghost=false", id="114:1910" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=default, danger=false, ghost=false", id="114:1913" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=default, danger=false, ghost=false", id="114:1916" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=default, danger=false, ghost=false", id="114:1919" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=default, danger=false, ghost=false", id="114:1922" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=default, danger=false, ghost=false", id="114:1925" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=default, danger=false, ghost=false", id="114:1943" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=default, danger=false, ghost=false", id="114:1946" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=default, danger=false, ghost=false", id="114:1949" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=default, danger=false, ghost=false", id="114:1952" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=default, danger=false, ghost=false", id="114:1955" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=default, danger=false, ghost=false", id="114:1958" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=default, danger=false, ghost=false", id="114:1961" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=default, danger=false, ghost=false", id="114:1964" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=default, danger=false, ghost=false", id="114:1967" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=default, danger=false, ghost=false", id="114:1970" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=default, danger=false, ghost=false", id="114:1973" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=default, danger=false, ghost=false", id="114:1976" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=default, danger=false, ghost=false", id="114:1979" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=default, danger=false, ghost=false", id="114:1982" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=default, danger=false, ghost=false", id="114:1985" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=default, danger=false, ghost=false", id="114:2003" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=default, danger=false, ghost=false", id="114:2006" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=default, danger=false, ghost=false", id="114:2009" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=default, danger=false, ghost=false", id="114:2012" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=default, danger=false, ghost=false", id="114:2015" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=default, danger=false, ghost=false", id="114:2018" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=default, danger=false, ghost=false", id="114:2021" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=default, danger=false, ghost=false", id="114:2024" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=default, danger=false, ghost=false", id="114:2027" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=default, danger=false, ghost=false", id="114:2030" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=default, danger=false, ghost=false", id="114:2033" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=default, danger=false, ghost=false", id="114:2036" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=default, danger=false, ghost=false", id="114:2039" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=default, danger=false, ghost=false", id="114:2042" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=default, danger=false, ghost=false", id="114:2045" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=default, danger=false, ghost=false", id="114:2063" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=default, danger=false, ghost=false", id="114:2066" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=default, danger=false, ghost=false", id="114:2069" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=default, danger=false, ghost=false", id="114:2072" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=default, danger=false, ghost=false", id="114:2075" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=default, danger=false, ghost=false", id="114:2078" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=default, danger=false, ghost=false", id="114:2081" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=default, danger=false, ghost=false", id="114:2084" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=default, danger=false, ghost=false", id="114:2087" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=default, danger=false, ghost=false", id="114:2090" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=default, danger=false, ghost=false", id="114:2093" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=default, danger=false, ghost=false", id="114:2096" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=default, danger=false, ghost=false", id="114:2099" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=default, danger=false, ghost=false", id="114:2102" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=default, danger=false, ghost=false", id="114:2105" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=default, danger=true, ghost=false", id="114:2149" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=default, content=default, danger=true, ghost=false", id="114:2152" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=default, danger=true, ghost=false", id="114:2155" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=default, content=default, danger=true, ghost=false", id="114:2158" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=default, content=default, danger=true, ghost=false", id="114:2161" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=default, danger=true, ghost=false", id="114:2164" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=default, content=default, danger=true, ghost=false", id="114:2167" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=default, danger=true, ghost=false", id="114:2170" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=default, content=default, danger=true, ghost=false", id="114:2173" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=default, content=default, danger=true, ghost=false", id="114:2176" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=default, danger=true, ghost=false", id="114:2179" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=default, content=default, danger=true, ghost=false", id="114:2182" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=default, danger=true, ghost=false", id="114:2185" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=default, content=default, danger=true, ghost=false", id="114:2188" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=default, content=default, danger=true, ghost=false", id="114:2191" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=default, danger=true, ghost=false", id="114:2194" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=default, danger=true, ghost=false", id="114:2197" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=default, danger=true, ghost=false", id="114:2200" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=default, danger=true, ghost=false", id="114:2203" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=default, danger=true, ghost=false", id="114:2206" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=default, danger=true, ghost=false", id="114:2209" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=default, danger=true, ghost=false", id="114:2212" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=default, danger=true, ghost=false", id="114:2215" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=default, danger=true, ghost=false", id="114:2218" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=default, danger=true, ghost=false", id="114:2221" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=default, danger=true, ghost=false", id="114:2224" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=default, danger=true, ghost=false", id="114:2227" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=default, danger=true, ghost=false", id="114:2230" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=default, danger=true, ghost=false", id="114:2233" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=default, danger=true, ghost=false", id="114:2236" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=default, danger=true, ghost=false", id="114:2239" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=default, danger=true, ghost=false", id="114:2243" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=default, danger=true, ghost=false", id="114:2247" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=default, danger=true, ghost=false", id="114:2251" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=default, danger=true, ghost=false", id="114:2255" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=default, danger=true, ghost=false", id="114:2259" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=default, danger=true, ghost=false", id="114:2263" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=default, danger=true, ghost=false", id="114:2267" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=default, danger=true, ghost=false", id="114:2271" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=default, danger=true, ghost=false", id="114:2275" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=default, danger=true, ghost=false", id="114:2279" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=default, danger=true, ghost=false", id="114:2283" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=default, danger=true, ghost=false", id="114:2287" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=default, danger=true, ghost=false", id="114:2291" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=default, danger=true, ghost=false", id="114:2295" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=default, danger=true, ghost=false", id="114:2299" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=default, danger=true, ghost=false", id="114:2302" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=default, danger=true, ghost=false", id="114:2305" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=default, danger=true, ghost=false", id="114:2308" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=default, danger=true, ghost=false", id="114:2311" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=default, danger=true, ghost=false", id="114:2314" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=default, danger=true, ghost=false", id="114:2317" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=default, danger=true, ghost=false", id="114:2320" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=default, danger=true, ghost=false", id="114:2323" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=default, danger=true, ghost=false", id="114:2326" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=default, danger=true, ghost=false", id="114:2329" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=default, danger=true, ghost=false", id="114:2332" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=default, danger=true, ghost=false", id="114:2335" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=default, danger=true, ghost=false", id="114:2338" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=default, danger=true, ghost=false", id="114:2341" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=default, danger=true, ghost=false", id="114:2344" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=default, danger=true, ghost=false", id="114:2347" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=default, danger=true, ghost=false", id="114:2350" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=default, danger=true, ghost=false", id="114:2353" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=default, danger=true, ghost=false", id="114:2356" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=default, danger=true, ghost=false", id="114:2359" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=default, danger=true, ghost=false", id="114:2362" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=default, danger=true, ghost=false", id="114:2365" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=default, danger=true, ghost=false", id="114:2368" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=default, danger=true, ghost=false", id="114:2371" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding: "4px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=default, danger=true, ghost=false", id="114:2374" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=default, danger=true, ghost=false", id="114:2377" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=default, danger=true, ghost=false", id="114:2380" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=default, danger=true, ghost=false", id="114:2383" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=default, danger=true, ghost=false", id="114:2386" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "4px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=default, danger=false, ghost=true", id="114:2465" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=default, content=default, danger=false, ghost=true", id="114:2468" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=default, danger=false, ghost=true", id="114:2471" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=default, content=default, danger=false, ghost=true", id="114:2474" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=default, content=default, danger=false, ghost=true", id="114:2477" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=default, danger=false, ghost=true", id="114:2480" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=default, content=default, danger=false, ghost=true", id="114:2483" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=default, danger=false, ghost=true", id="114:2486" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=default, content=default, danger=false, ghost=true", id="114:2489" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=default, content=default, danger=false, ghost=true", id="114:2492" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=default, danger=false, ghost=true", id="114:2495" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=default, content=default, danger=false, ghost=true", id="114:2498" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=default, danger=false, ghost=true", id="114:2501" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=default, content=default, danger=false, ghost=true", id="114:2504" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=default, content=default, danger=false, ghost=true", id="114:2507" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=default, danger=false, ghost=true", id="114:2510" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=default, danger=false, ghost=true", id="114:2513" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=default, danger=false, ghost=true", id="114:2516" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=default, danger=false, ghost=true", id="114:2519" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=default, danger=false, ghost=true", id="114:2522" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=default, danger=false, ghost=true", id="114:2525" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=default, danger=false, ghost=true", id="114:2528" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=default, danger=false, ghost=true", id="114:2531" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=default, danger=false, ghost=true", id="114:2534" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=default, danger=false, ghost=true", id="114:2537" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=default, danger=false, ghost=true", id="114:2540" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=default, danger=false, ghost=true", id="114:2543" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=default, danger=false, ghost=true", id="114:2546" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=default, danger=false, ghost=true", id="114:2549" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=default, danger=false, ghost=true", id="114:2552" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=default, danger=false, ghost=true", id="114:2555" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=default, danger=false, ghost=true", id="114:2559" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=default, danger=false, ghost=true", id="114:2563" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=default, danger=false, ghost=true", id="114:2567" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=default, danger=false, ghost=true", id="114:2571" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=default, danger=false, ghost=true", id="114:2575" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=default, danger=false, ghost=true", id="114:2579" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=default, danger=false, ghost=true", id="114:2583" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=default, danger=false, ghost=true", id="114:2587" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=default, danger=false, ghost=true", id="114:2591" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=default, danger=false, ghost=true", id="114:2595" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=default, danger=false, ghost=true", id="114:2599" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=default, danger=false, ghost=true", id="114:2603" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=default, danger=false, ghost=true", id="114:2607" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=default, danger=false, ghost=true", id="114:2611" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=default, danger=false, ghost=true", id="114:2615" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=default, danger=false, ghost=true", id="114:2618" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=default, danger=false, ghost=true", id="114:2621" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=default, danger=false, ghost=true", id="114:2624" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=default, danger=false, ghost=true", id="114:2627" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=default, danger=false, ghost=true", id="114:2630" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=default, danger=false, ghost=true", id="114:2633" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=default, danger=false, ghost=true", id="114:2636" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=default, danger=false, ghost=true", id="114:2639" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=default, danger=false, ghost=true", id="114:2642" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=default, danger=false, ghost=true", id="114:2645" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=default, danger=false, ghost=true", id="114:2648" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=default, danger=false, ghost=true", id="114:2651" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=default, danger=false, ghost=true", id="114:2654" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=default, danger=false, ghost=true", id="114:2657" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=default, danger=false, ghost=true", id="114:2660" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=default, danger=false, ghost=true", id="114:2663" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=default, danger=false, ghost=true", id="114:2666" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=default, danger=false, ghost=true", id="114:2669" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=default, danger=false, ghost=true", id="114:2672" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=default, danger=false, ghost=true", id="114:2675" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=default, danger=false, ghost=true", id="114:2678" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=default, danger=false, ghost=true", id="114:2681" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=default, danger=false, ghost=true", id="114:2684" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=default, danger=false, ghost=true", id="114:2687" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=default, danger=false, ghost=true", id="114:2690" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=default, danger=false, ghost=true", id="114:2693" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=default, danger=false, ghost=true", id="114:2696" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=default, danger=false, ghost=true", id="114:2699" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=default, danger=false, ghost=true", id="114:2702" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=default, danger=true, ghost=true", id="114:2705" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=default, content=default, danger=true, ghost=true", id="114:2708" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=default, danger=true, ghost=true", id="114:2711" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=default, content=default, danger=true, ghost=true", id="114:2714" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=default, content=default, danger=true, ghost=true", id="114:2717" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=default, danger=true, ghost=true", id="114:2720" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=default, content=default, danger=true, ghost=true", id="114:2723" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=default, danger=true, ghost=true", id="114:2726" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=default, content=default, danger=true, ghost=true", id="114:2729" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=default, content=default, danger=true, ghost=true", id="114:2732" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=default, danger=true, ghost=true", id="114:2735" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=default, content=default, danger=true, ghost=true", id="114:2738" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=default, danger=true, ghost=true", id="114:2741" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=default, content=default, danger=true, ghost=true", id="114:2744" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=default, content=default, danger=true, ghost=true", id="114:2747" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=default, danger=true, ghost=true", id="114:2750" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=default, danger=true, ghost=true", id="114:2753" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=default, danger=true, ghost=true", id="114:2756" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=default, danger=true, ghost=true", id="114:2759" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=default, danger=true, ghost=true", id="114:2762" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=default, danger=true, ghost=true", id="114:2765" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=default, danger=true, ghost=true", id="114:2768" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=default, danger=true, ghost=true", id="114:2771" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=default, danger=true, ghost=true", id="114:2774" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=default, danger=true, ghost=true", id="114:2777" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=default, danger=true, ghost=true", id="114:2780" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=default, danger=true, ghost=true", id="114:2783" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=default, danger=true, ghost=true", id="114:2786" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=default, danger=true, ghost=true", id="114:2789" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=default, danger=true, ghost=true", id="114:2792" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=default, danger=true, ghost=true", id="114:2795" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=default, danger=true, ghost=true", id="114:2799" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=default, danger=true, ghost=true", id="114:2803" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=default, danger=true, ghost=true", id="114:2807" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=default, danger=true, ghost=true", id="114:2811" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=default, danger=true, ghost=true", id="114:2815" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=default, danger=true, ghost=true", id="114:2819" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=default, danger=true, ghost=true", id="114:2823" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=default, danger=true, ghost=true", id="114:2827" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=default, danger=true, ghost=true", id="114:2831" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=default, danger=true, ghost=true", id="114:2835" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=default, danger=true, ghost=true", id="114:2839" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=default, danger=true, ghost=true", id="114:2843" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=default, danger=true, ghost=true", id="114:2847" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=default, danger=true, ghost=true", id="114:2851" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=default, danger=true, ghost=true", id="114:2855" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=default, danger=true, ghost=true", id="114:2858" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=default, danger=true, ghost=true", id="114:2861" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=default, danger=true, ghost=true", id="114:2864" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=default, danger=true, ghost=true", id="114:2867" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=default, danger=true, ghost=true", id="114:2870" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=default, danger=true, ghost=true", id="114:2873" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=default, danger=true, ghost=true", id="114:2876" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=default, danger=true, ghost=true", id="114:2879" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=default, danger=true, ghost=true", id="114:2882" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=default, danger=true, ghost=true", id="114:2885" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=default, danger=true, ghost=true", id="114:2888" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=default, danger=true, ghost=true", id="114:2891" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=default, danger=true, ghost=true", id="114:2894" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=default, danger=true, ghost=true", id="114:2897" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=default, danger=true, ghost=true", id="114:2900" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=default, danger=true, ghost=true", id="114:2903" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=default, danger=true, ghost=true", id="114:2906" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=default, danger=true, ghost=true", id="114:2909" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=default, danger=true, ghost=true", id="114:2912" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=default, danger=true, ghost=true", id="114:2915" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=default, danger=true, ghost=true", id="114:2918" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=default, danger=true, ghost=true", id="114:2921" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=default, danger=true, ghost=true", id="114:2924" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=default, danger=true, ghost=true", id="114:2927" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=default, danger=true, ghost=true", id="114:2930" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=default, danger=true, ghost=true", id="114:2933" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=default, danger=true, ghost=true", id="114:2936" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=default, danger=true, ghost=true", id="114:2939" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=default, danger=true, ghost=true", id="114:2942" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxxs, 4px)",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "default",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            children: <span style={{color: 'inherit'}}>{"Button"}</span>,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=icon, danger=false, ghost=false", id="114:3096" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=default, content=icon, danger=false, ghost=false", id="114:3099" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=icon, danger=false, ghost=false", id="114:3102" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=default, content=icon, danger=false, ghost=false", id="114:3105" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=default, content=icon, danger=false, ghost=false", id="114:3108" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=icon, danger=false, ghost=false", id="114:3111" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=default, content=icon, danger=false, ghost=false", id="114:3114" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=icon, danger=false, ghost=false", id="114:3117" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=default, content=icon, danger=false, ghost=false", id="114:3120" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=default, content=icon, danger=false, ghost=false", id="114:3123" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=icon, danger=false, ghost=false", id="114:3126" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=default, content=icon, danger=false, ghost=false", id="114:3129" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=icon, danger=false, ghost=false", id="114:3132" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=default, content=icon, danger=false, ghost=false", id="114:3135" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=default, content=icon, danger=false, ghost=false", id="114:3138" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=icon, danger=false, ghost=false", id="114:3141" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=icon, danger=false, ghost=false", id="114:3144" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=icon, danger=false, ghost=false", id="114:3147" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=icon, danger=false, ghost=false", id="114:3150" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=icon, danger=false, ghost=false", id="114:3153" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=icon, danger=false, ghost=false", id="114:3156" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=icon, danger=false, ghost=false", id="114:3159" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=icon, danger=false, ghost=false", id="114:3162" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=icon, danger=false, ghost=false", id="114:3165" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=icon, danger=false, ghost=false", id="114:3168" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=icon, danger=false, ghost=false", id="114:3171" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=icon, danger=false, ghost=false", id="114:3174" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=icon, danger=false, ghost=false", id="114:3177" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=icon, danger=false, ghost=false", id="114:3180" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=icon, danger=false, ghost=false", id="114:3183" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=icon, danger=false, ghost=false", id="114:3186" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=icon, danger=false, ghost=false", id="114:3190" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=icon, danger=false, ghost=false", id="114:3194" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=icon, danger=false, ghost=false", id="114:3198" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=icon, danger=false, ghost=false", id="114:3202" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=icon, danger=false, ghost=false", id="114:3206" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=icon, danger=false, ghost=false", id="114:3210" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=icon, danger=false, ghost=false", id="114:3214" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=icon, danger=false, ghost=false", id="114:3218" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=icon, danger=false, ghost=false", id="114:3222" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=icon, danger=false, ghost=false", id="114:3226" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=icon, danger=false, ghost=false", id="114:3230" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=icon, danger=false, ghost=false", id="114:3234" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=icon, danger=false, ghost=false", id="114:3238" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=icon, danger=false, ghost=false", id="114:3242" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=icon, danger=false, ghost=false", id="114:3246" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=icon, danger=false, ghost=false", id="114:3249" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=icon, danger=false, ghost=false", id="114:3252" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=icon, danger=false, ghost=false", id="114:3255" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=icon, danger=false, ghost=false", id="114:3258" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=icon, danger=false, ghost=false", id="114:3261" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=icon, danger=false, ghost=false", id="114:3264" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=icon, danger=false, ghost=false", id="114:3267" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=icon, danger=false, ghost=false", id="114:3270" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=icon, danger=false, ghost=false", id="114:3273" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=icon, danger=false, ghost=false", id="114:3276" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=icon, danger=false, ghost=false", id="114:3279" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=icon, danger=false, ghost=false", id="114:3282" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=icon, danger=false, ghost=false", id="114:3285" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=icon, danger=false, ghost=false", id="114:3288" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=icon, danger=false, ghost=false", id="114:3291" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=icon, danger=false, ghost=false", id="114:3294" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=icon, danger=false, ghost=false", id="114:3297" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=icon, danger=false, ghost=false", id="114:3300" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=icon, danger=false, ghost=false", id="114:3303" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=icon, danger=false, ghost=false", id="114:3306" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=icon, danger=false, ghost=false", id="114:3309" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=icon, danger=false, ghost=false", id="114:3312" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=icon, danger=false, ghost=false", id="114:3315" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=icon, danger=false, ghost=false", id="114:3318" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=icon, danger=false, ghost=false", id="114:3321" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=icon, danger=false, ghost=false", id="114:3324" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=icon, danger=false, ghost=false", id="114:3327" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=icon, danger=false, ghost=false", id="114:3330" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=icon, danger=false, ghost=false", id="114:3333" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=icon, danger=true, ghost=false", id="114:3336" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=default, content=icon, danger=true, ghost=false", id="114:3339" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=icon, danger=true, ghost=false", id="114:3342" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=default, content=icon, danger=true, ghost=false", id="114:3345" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=default, content=icon, danger=true, ghost=false", id="114:3348" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=icon, danger=true, ghost=false", id="114:3351" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=default, content=icon, danger=true, ghost=false", id="114:3354" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=icon, danger=true, ghost=false", id="114:3357" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=default, content=icon, danger=true, ghost=false", id="114:3360" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=default, content=icon, danger=true, ghost=false", id="114:3363" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=icon, danger=true, ghost=false", id="114:3366" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=default, content=icon, danger=true, ghost=false", id="114:3369" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=icon, danger=true, ghost=false", id="114:3372" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=default, content=icon, danger=true, ghost=false", id="114:3375" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=default, content=icon, danger=true, ghost=false", id="114:3378" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=icon, danger=true, ghost=false", id="114:3381" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=icon, danger=true, ghost=false", id="114:3384" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=icon, danger=true, ghost=false", id="114:3387" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=icon, danger=true, ghost=false", id="114:3390" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=icon, danger=true, ghost=false", id="114:3393" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=icon, danger=true, ghost=false", id="114:3396" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=icon, danger=true, ghost=false", id="114:3399" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=icon, danger=true, ghost=false", id="114:3402" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=icon, danger=true, ghost=false", id="114:3405" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=icon, danger=true, ghost=false", id="114:3408" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=icon, danger=true, ghost=false", id="114:3411" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=icon, danger=true, ghost=false", id="114:3414" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=icon, danger=true, ghost=false", id="114:3417" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=icon, danger=true, ghost=false", id="114:3420" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=icon, danger=true, ghost=false", id="114:3423" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=icon, danger=true, ghost=false", id="114:3426" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=icon, danger=true, ghost=false", id="114:3430" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=icon, danger=true, ghost=false", id="114:3434" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=icon, danger=true, ghost=false", id="114:3438" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=icon, danger=true, ghost=false", id="114:3442" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=icon, danger=true, ghost=false", id="114:3446" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=icon, danger=true, ghost=false", id="114:3450" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=icon, danger=true, ghost=false", id="114:3454" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=icon, danger=true, ghost=false", id="114:3458" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=icon, danger=true, ghost=false", id="114:3462" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=icon, danger=true, ghost=false", id="114:3466" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=icon, danger=true, ghost=false", id="114:3470" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=icon, danger=true, ghost=false", id="114:3474" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=icon, danger=true, ghost=false", id="114:3478" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=icon, danger=true, ghost=false", id="114:3482" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=icon, danger=true, ghost=false", id="114:3486" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=icon, danger=true, ghost=false", id="114:3489" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=icon, danger=true, ghost=false", id="114:3492" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=icon, danger=true, ghost=false", id="114:3495" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=icon, danger=true, ghost=false", id="114:3498" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=icon, danger=true, ghost=false", id="114:3501" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=icon, danger=true, ghost=false", id="114:3504" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=icon, danger=true, ghost=false", id="114:3507" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=icon, danger=true, ghost=false", id="114:3510" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=icon, danger=true, ghost=false", id="114:3513" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=icon, danger=true, ghost=false", id="114:3516" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=icon, danger=true, ghost=false", id="114:3519" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=icon, danger=true, ghost=false", id="114:3522" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=icon, danger=true, ghost=false", id="114:3525" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=icon, danger=true, ghost=false", id="114:3528" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=icon, danger=true, ghost=false", id="114:3531" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=icon, danger=true, ghost=false", id="114:3534" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=icon, danger=true, ghost=false", id="114:3537" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=icon, danger=true, ghost=false", id="114:3540" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=icon, danger=true, ghost=false", id="114:3543" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=icon, danger=true, ghost=false", id="114:3546" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=icon, danger=true, ghost=false", id="114:3549" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=icon, danger=true, ghost=false", id="114:3552" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=icon, danger=true, ghost=false", id="114:3555" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=icon, danger=true, ghost=false", id="114:3558" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=icon, danger=true, ghost=false", id="114:3561" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=icon, danger=true, ghost=false", id="114:3564" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=icon, danger=true, ghost=false", id="114:3567" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=icon, danger=true, ghost=false", id="114:3570" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=icon, danger=true, ghost=false", id="114:3573" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: false,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=icon, danger=false, ghost=true", id="114:3576" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=default, content=icon, danger=false, ghost=true", id="114:3579" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=icon, danger=false, ghost=true", id="114:3582" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=default, content=icon, danger=false, ghost=true", id="114:3585" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=default, content=icon, danger=false, ghost=true", id="114:3588" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=icon, danger=false, ghost=true", id="114:3591" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=default, content=icon, danger=false, ghost=true", id="114:3594" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=icon, danger=false, ghost=true", id="114:3597" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=default, content=icon, danger=false, ghost=true", id="114:3600" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=default, content=icon, danger=false, ghost=true", id="114:3603" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=icon, danger=false, ghost=true", id="114:3606" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=default, content=icon, danger=false, ghost=true", id="114:3609" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=icon, danger=false, ghost=true", id="114:3612" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=default, content=icon, danger=false, ghost=true", id="114:3615" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=default, content=icon, danger=false, ghost=true", id="114:3618" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=icon, danger=false, ghost=true", id="114:3621" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=icon, danger=false, ghost=true", id="114:3624" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=icon, danger=false, ghost=true", id="114:3627" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=icon, danger=false, ghost=true", id="114:3630" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=icon, danger=false, ghost=true", id="114:3633" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=icon, danger=false, ghost=true", id="114:3636" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=icon, danger=false, ghost=true", id="114:3639" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=icon, danger=false, ghost=true", id="114:3642" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=icon, danger=false, ghost=true", id="114:3645" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=icon, danger=false, ghost=true", id="114:3648" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=icon, danger=false, ghost=true", id="114:3651" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=icon, danger=false, ghost=true", id="114:3654" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=icon, danger=false, ghost=true", id="114:3657" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=icon, danger=false, ghost=true", id="114:3660" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            background: "rgba(0, 0, 0, 0.06)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=icon, danger=false, ghost=true", id="114:3663" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=icon, danger=false, ghost=true", id="114:3666" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=icon, danger=false, ghost=true", id="114:3670" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=icon, danger=false, ghost=true", id="114:3674" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=icon, danger=false, ghost=true", id="114:3678" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=icon, danger=false, ghost=true", id="114:3682" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=icon, danger=false, ghost=true", id="114:3686" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=icon, danger=false, ghost=true", id="114:3690" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=icon, danger=false, ghost=true", id="114:3694" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=icon, danger=false, ghost=true", id="114:3698" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=icon, danger=false, ghost=true", id="114:3702" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=icon, danger=false, ghost=true", id="114:3706" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=icon, danger=false, ghost=true", id="114:3710" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=icon, danger=false, ghost=true", id="114:3714" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=icon, danger=false, ghost=true", id="114:3718" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=icon, danger=false, ghost=true", id="114:3722" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=icon, danger=false, ghost=true", id="114:3726" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=icon, danger=false, ghost=true", id="114:3729" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=icon, danger=false, ghost=true", id="114:3732" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=icon, danger=false, ghost=true", id="114:3735" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=icon, danger=false, ghost=true", id="114:3738" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=icon, danger=false, ghost=true", id="114:3741" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=icon, danger=false, ghost=true", id="114:3744" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=icon, danger=false, ghost=true", id="114:3747" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=icon, danger=false, ghost=true", id="114:3750" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=icon, danger=false, ghost=true", id="114:3753" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=icon, danger=false, ghost=true", id="114:3756" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=icon, danger=false, ghost=true", id="114:3759" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=icon, danger=false, ghost=true", id="114:3762" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=icon, danger=false, ghost=true", id="114:3765" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=icon, danger=false, ghost=true", id="114:3768" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=icon, danger=false, ghost=true", id="114:3771" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=icon, danger=false, ghost=true", id="114:3774" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=icon, danger=false, ghost=true", id="114:3777" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=icon, danger=false, ghost=true", id="114:3780" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=icon, danger=false, ghost=true", id="114:3783" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=icon, danger=false, ghost=true", id="114:3786" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=icon, danger=false, ghost=true", id="114:3789" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=icon, danger=false, ghost=true", id="114:3792" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=icon, danger=false, ghost=true", id="114:3795" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=icon, danger=false, ghost=true", id="114:3798" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=icon, danger=false, ghost=true", id="114:3801" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=icon, danger=false, ghost=true", id="114:3804" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=icon, danger=false, ghost=true", id="114:3807" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=icon, danger=false, ghost=true", id="114:3810" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=icon, danger=false, ghost=true", id="114:3813" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: false,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=default, content=icon, danger=true, ghost=true", id="114:3816" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=default, content=icon, danger=true, ghost=true", id="114:3819" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=default, content=icon, danger=true, ghost=true", id="114:3822" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=default, content=icon, danger=true, ghost=true", id="114:3825" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=default, content=icon, danger=true, ghost=true", id="114:3828" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=default, content=icon, danger=true, ghost=true", id="114:3831" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=default, content=icon, danger=true, ghost=true", id="114:3834" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=default, content=icon, danger=true, ghost=true", id="114:3837" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=default, content=icon, danger=true, ghost=true", id="114:3840" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=default, content=icon, danger=true, ghost=true", id="114:3843" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=default, content=icon, danger=true, ghost=true", id="114:3846" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=default, content=icon, danger=true, ghost=true", id="114:3849" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=default, content=icon, danger=true, ghost=true", id="114:3852" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=default, content=icon, danger=true, ghost=true", id="114:3855" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=default, content=icon, danger=true, ghost=true", id="114:3858" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "default",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=hover, content=icon, danger=true, ghost=true", id="114:3861" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=hover, content=icon, danger=true, ghost=true", id="114:3864" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=hover, content=icon, danger=true, ghost=true", id="114:3867" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=hover, content=icon, danger=true, ghost=true", id="114:3870" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=hover, content=icon, danger=true, ghost=true", id="114:3873" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=hover, content=icon, danger=true, ghost=true", id="114:3876" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=hover, content=icon, danger=true, ghost=true", id="114:3879" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=hover, content=icon, danger=true, ghost=true", id="114:3882" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=hover, content=icon, danger=true, ghost=true", id="114:3885" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=hover, content=icon, danger=true, ghost=true", id="114:3888" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=hover, content=icon, danger=true, ghost=true", id="114:3891" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=hover, content=icon, danger=true, ghost=true", id="114:3894" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=hover, content=icon, danger=true, ghost=true", id="114:3897" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=hover, content=icon, danger=true, ghost=true", id="114:3900" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=hover, content=icon, danger=true, ghost=true", id="114:3903" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "hover",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=focus, content=icon, danger=true, ghost=true", id="114:3906" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=focus, content=icon, danger=true, ghost=true", id="114:3910" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=focus, content=icon, danger=true, ghost=true", id="114:3914" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=focus, content=icon, danger=true, ghost=true", id="114:3918" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=focus, content=icon, danger=true, ghost=true", id="114:3922" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=focus, content=icon, danger=true, ghost=true", id="114:3926" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=focus, content=icon, danger=true, ghost=true", id="114:3930" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=focus, content=icon, danger=true, ghost=true", id="114:3934" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=focus, content=icon, danger=true, ghost=true", id="114:3938" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=focus, content=icon, danger=true, ghost=true", id="114:3942" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=focus, content=icon, danger=true, ghost=true", id="114:3946" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=focus, content=icon, danger=true, ghost=true", id="114:3950" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=focus, content=icon, danger=true, ghost=true", id="114:3954" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=focus, content=icon, danger=true, ghost=true", id="114:3958" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=focus, content=icon, danger=true, ghost=true", id="114:3962" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "focus",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=pressed, content=icon, danger=true, ghost=true", id="114:3966" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=pressed, content=icon, danger=true, ghost=true", id="114:3969" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=pressed, content=icon, danger=true, ghost=true", id="114:3972" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=pressed, content=icon, danger=true, ghost=true", id="114:3975" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=pressed, content=icon, danger=true, ghost=true", id="114:3978" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=pressed, content=icon, danger=true, ghost=true", id="114:3981" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=pressed, content=icon, danger=true, ghost=true", id="114:3984" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=pressed, content=icon, danger=true, ghost=true", id="114:3987" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=pressed, content=icon, danger=true, ghost=true", id="114:3990" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=pressed, content=icon, danger=true, ghost=true", id="114:3993" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=pressed, content=icon, danger=true, ghost=true", id="114:3996" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=pressed, content=icon, danger=true, ghost=true", id="114:3999" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=pressed, content=icon, danger=true, ghost=true", id="114:4002" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=pressed, content=icon, danger=true, ghost=true", id="114:4005" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=pressed, content=icon, danger=true, ghost=true", id="114:4008" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "pressed",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=default, state=disabled, content=icon, danger=true, ghost=true", id="114:4011" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=default, state=disabled, content=icon, danger=true, ghost=true", id="114:4014" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=default, state=disabled, content=icon, danger=true, ghost=true", id="114:4017" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=default, state=disabled, content=icon, danger=true, ghost=true", id="114:4020" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=default, state=disabled, content=icon, danger=true, ghost=true", id="114:4023" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "middle",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=large, state=disabled, content=icon, danger=true, ghost=true", id="114:4026" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=large, state=disabled, content=icon, danger=true, ghost=true", id="114:4029" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=large, state=disabled, content=icon, danger=true, ghost=true", id="114:4032" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=large, state=disabled, content=icon, danger=true, ghost=true", id="114:4035" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=large, state=disabled, content=icon, danger=true, ghost=true", id="114:4038" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "large",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=primary, size=small, state=disabled, content=icon, danger=true, ghost=true", id="114:4041" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "primary",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=default, size=small, state=disabled, content=icon, danger=true, ghost=true", id="114:4044" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "default",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=dashed, size=small, state=disabled, content=icon, danger=true, ghost=true", id="114:4047" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",

          }}
          {...{
            type: "dashed",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=text, size=small, state=disabled, content=icon, danger=true, ghost=true", id="114:4050" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "text",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
        {/* name="type=link, size=small, state=disabled, content=icon, danger=true, ghost=true", id="114:4053" type="COMPONENT" */}
        <QodeButton
          style={{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
          }}
          {...{
            type: "link",
            size: "small",
            state: "disabled",
            content: "icon",
            selectIconLeft: <Icon.QodeMagnifyingGlass />,
            danger: true,
            ghost: true,
          }}
        />
      </Flex>
    </>
  )
}

export default QButton
