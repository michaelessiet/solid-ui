import { mergeProps } from "solid-js"
import { Head, Link, Meta, Title } from "solid-start"

const BASE_URL = "https://www.solid-ui.com"

export interface HeadProps {
  title?: string
  description?: string
}

export function MetaHead(props: HeadProps) {
  props = mergeProps(
    {
      title: "solid-ui",
      description: "Beautifully designed components built with Kobalte and Tailwind CSS."
    },
    props
  )
  return (
    <Head>
      <Title>{props.title}</Title>

      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />

      <Meta name="title" content={props.title} />
      <Meta name="description" content={props.description} />
      <Meta
        name="keywords"
        content="shadcn,Solid,SolidJS,SolidStart,UI,Components,TailwindCSS,Kobalte"
      />
      <Meta name="author" content="Stefan E-K" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content={BASE_URL} />
      <Meta name="twitter:title" content={props.title} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={`${BASE_URL}/og.png`} />
      <Meta name="twitter:image:alt" content={props.title} />
      <Meta name="twitter:creator" content="stefan_e_k" />

      <Meta name="og:title" content={props.title} />
      <Meta name="og:type" content="article" />
      <Meta name="og:url" content={BASE_URL} />
      <Meta name="og:image" content={`${BASE_URL}/og.png`} />
      <Meta name="og:image:alt" content={props.title} />
      <Meta name="og:image:width" content="1200" />
      <Meta name="og:image:height" content="630" />

      <Link rel="manifest" href={`${BASE_URL}/site.webmanifest`} />
      <Link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <Link rel="shortcut icon" href="/favicon-16x16.png" />
      <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
