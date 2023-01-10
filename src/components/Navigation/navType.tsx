export type NavItemType = {
    id: String,
    link: String,
    label: String,
    items?: Array<NavItemType>
}