type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>;
}
