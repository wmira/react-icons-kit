

declare module "react-icons-kit" {
    import * as React from 'react'


    interface IconProps {
        size?: number | string
        style?: object
        className?: string
        icon: object
    }
    const Icon: React.SFC<any>
    const withBaseIcon: (props: IconProps) => React.SFC<any>
}

declare module "react-icons-kit/icomoon" {
}
declare module "react-icons-kit/md" {
}
declare module "react-icons-kit/fa" {
}
declare module "react-icons-kit/iconic" {
}
declare module "react-icons-kit/entypo" {
}
declare module "react-icons-kit/metrize" {
}
declare module "react-icons-kit/ikons" {
}
declare module "react-icons-kit/linea" {
}
declare module "react-icons-kit/ionicons" {
}
declare module "react-icons-kit/oct" {
}
declare module "react-icons-kit/typicons" {
}
declare module "react-icons-kit/noto_emoji_regular" {
}
declare module "react-icons-kit/feather" {
}