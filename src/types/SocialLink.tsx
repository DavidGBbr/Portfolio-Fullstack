interface SocialLinkType {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  target: boolean;
  download?: boolean;
  type?: string;
}
