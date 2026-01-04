import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    // ... Other Next.js config options
    // output: 'export'
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/Lichee-Jack-wiki' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Lichee-Jack-wiki/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
});

