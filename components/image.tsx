import { Image as NextraImage } from 'nextra/components'

export function Img({ src, alt='', ...props }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return <NextraImage src={`${basePath}${src}`} alt={alt} {...props} />
}
