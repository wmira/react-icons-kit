
// async import cant use variables so this is hard coded
export type AsyncIconsLoader = () => Promise<any>
export const iconSetsLoaders: { [key: string]: AsyncIconsLoader } = {
    icomoon: () => import('react-icons-kit/icomoon'),
    md: () => import('react-icons-kit/md'),
    fa: () => import('react-icons-kit/fa'),
    iconic: () => import('react-icons-kit/iconic'),
    entypo: () => import('react-icons-kit/entypo'),
    metrize: () => import('react-icons-kit/metrize'),
    ikons: () => import('react-icons-kit/ikons'),
    linea: () => import('react-icons-kit/linea'),
    ionicons: () => import('react-icons-kit/ionicons'),
    oct: () => import('react-icons-kit/oct'),
    typicons: () => import('react-icons-kit/typicons'),
    noto_emoji_regular: () => import('react-icons-kit/noto_emoji_regular')
}