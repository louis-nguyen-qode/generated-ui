// id="204:403"
import React from "react"
import { Flex } from "antd"
import { Result, ResultProps } from "antd"

export interface QodeResultProps
  extends Omit<
    ResultProps,
    | "icon"
    | "showButtons"
    | "showButtonSecondary"
    | "description"
    | "showDescription"
    | "title"
    | "state"
  > {
  icon?: React.ReactNode
  showButtons?: boolean
  showButtonSecondary?: boolean
  description?: string
  showDescription?: boolean
  title?: string
  state?:
    | "Success"
    | "Info"
    | "Warning"
    | "Error"
    | "403"
    | "404"
    | "500"
    | "Custom Icon"
}

export const QodeResult: React.FC<QodeResultProps> = ({
  icon = undefined,
  showButtons = true,
  showButtonSecondary = true,
  description = "Objectively scale orthogonal collaboration and idea-sharing after enterprise-wide manufactured products. Compellingly strategize high-quality niche markets through sustainable.",
  showDescription = true,
  title = "Title of the result",
  state = "Success",
  ...rest
}) => {
  return (
    <Result
      icon={icon}
      showButtons={showButtons}
      showButtonSecondary={showButtonSecondary}
      description={description}
      showDescription={showDescription}
      title={title}
      state={state}
      {...rest}
    />
  )
}
