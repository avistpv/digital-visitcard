export const metadata = {
  title: "appYour Visit Card",
  description: "Let the world be in touch with you",
}
//TODO#0 What difference between this layout and in website folder
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
