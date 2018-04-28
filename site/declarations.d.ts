



declare module "react-containers" {
    import * as React from 'react'

    export interface IReactContainersProps {
        children: React.ReactNode
    }
        
    const LeftRightSection: React.SFC<IReactContainersProps>
    const Center: React.SFC<IReactContainersProps>
    const InlineItems: React.SFC<IReactContainersProps>
}

declare module "react-markings" {
    import * as React from 'react'

    function md(s: TemplateStringsArray, ...interpolations: any[]): React.ReactElement<string>    
    export default md
}

declare module "react-icons-kit" {
    import * as React from 'react'

    const Icon: React.ComponentClass<any>
    
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