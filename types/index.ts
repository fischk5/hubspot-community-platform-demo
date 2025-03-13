export interface ProfileData {
    name: string,
    bio: string
}

export type NavItem = {
    displayName: string;
    targetNav: string;
    key: string;
}

export type SidebarProps = {
    navigationLinks: NavItem[];
}