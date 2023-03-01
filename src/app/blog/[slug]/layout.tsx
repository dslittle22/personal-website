type Props = { children: JSX.Element };

export default function RootLayout({ children }: Props) {
  return <div style={{ maxWidth: "700px", margin: "0 auto" }}>{children}</div>;
}
