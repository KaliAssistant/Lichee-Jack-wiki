import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'
import gpioCard from 'public/assets/20pgpio.png'
import wifiCard from 'public/assets/wifi.png'

export const metadata: Metadata = {
  description:
    ''
}


const IndexPage: FC = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          A low-cost, <br className="max-sm:hidden" />
          DIY social-engineering  <br className="max-sm:hidden" />
          LAN Attack & Penetration Testing <br className="max-sm:hidden" />
          Army knife <br className="max-sm:hidden" />
          <br className="max-sm:hidden" />
        </h1>
        <p className="subtitle">
          100% open-source hardware & software{''}
          <br className="max-md:hidden" />
          Built for hackers, auditors, and embedded developers{''}
          .
          <br className="max-md:hidden" />
          <br className="max-md:hidden" />
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href="/docs">
            Get started <span>→</span>
          </Link>
        </p>
      </div>
      <div className="features-container x:border-b nextra-border">
        <div className="content-container">
          <Features>
            <Feature
              index={0}
              large
              id="rgb-card"
              href="/docs/hardware/3_features/1_rgbled"
            >
            <h3>
              Full Color RGB
              <br />
              LED
            </h3>
            <br /><br />
            <p className="z-2">
              Onboard 10/100M ETH, with ws2812b NeoPixel RGB LED.{''}
            </p>
            <div className="absolute inset-0 z-1 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="x:focus-visible:nextra-focus block dark:hidden"
            >
              <source src={`${basePath}/assets/rgb_white.mp4`} type="video/mp4" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"
            >
              <source src={`${basePath}/assets/rgb_dark.mp4`} type="video/mp4" />
            </video>
            </Feature>

            <Feature
              index={1}
              //large
              centered
              id="gpio-card"
              href="/docs/hardware/3_features/3_gpio"
              style={{
                backgroundSize: 850,
                backgroundRepeat: 'no-repeat',
                minHeight: 270
              }}
            >
              <h3>20-Pin GPIO Expansion</h3>
              <br/>
              <p className="z-2">
                Extend Lichee-Jack with LEDs, <br className="show-on-mobile" />
                sensors, UART, SPI, I²C,or <br className="show-on-mobile" />
                custom hardware modules.
              </p>
            </Feature>

            <Feature
              index={2}
              //large
              centered
              id="wifi-card"
              href="/docs/hardware/3_features/4_wireless"
              style={{
                backgroundSize: 850,
                backgroundRepeat: 'no-repeat',
                minHeight: 370
              }}
            >
              <h3>WiFi6 & BT5.2 Supported</h3>
              <br/>
              <p className="z-2">
                Modern wireless connectivity for <br className="show-on-mobile" />
                advanced payloads,management access, <br className="show-on-mobile" />
                and future expansion.
              </p>
            </Feature>

            <Feature
              index={3}
              large
              
              id="switch-card"
              href="/docs/hardware/3_features/5_modsw"
            >
            <h3>
              Physical Mode Switch
              <br />
              Control
            </h3>
            <br /><br />
            <p className="z-2">
              Choose your attack or operation mode using the hardware
              switch — plug in, flip, and execute.{' '}
            </p>
            
            <div className="absolute inset-0 z-1 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />

            <video
              autoPlay
              loop
              muted
              playsInline
              className="x:focus-visible:nextra-focus block dark:hidden"
            >
              <source src={`${basePath}/assets/test_white.mp4`} type="video/mp4" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"
            >
              <source src={`${basePath}/assets/test_dark.mp4`} type="video/mp4" />
            </video>
            
            </Feature>
            
            <Feature
              index={4}
              id="debian-card"
              href="/docs/software/1_system"
            >
              <h3>
                Debian GNU/Linux <br className="show-on-mobile" />
              </h3>
              <br/>
              <p>
              Runs Debian with standard GNU/Linux userspace.
              No vendor OS, no custom distro — just Debian, 
              fully under your control.
              </p>
            </Feature>

            <Feature
              index={5}
              //large
              centered
              id="battery-card"
              href="/docs/hardware/3_features/6_battery"
              style={{
                backgroundSize: 850,
                backgroundRepeat: 'no-repeat',
                minHeight: 370
              }}
            >
              <h3>Built-in Battery</h3>
              <br/>
              <p className="z-2">
                200 mAh internal Li-po battery providing 1+ hour of <br className="show-on-mobile" />
                standalone operation for field use.
              </p>
            </Feature>

            <Feature
              index={6}
              //large
              centered
              id="usb-card"
              href="/docs/hardware/3_features/7_usb"
              style={{
                backgroundSize: 850,
                backgroundRepeat: 'no-repeat',
                minHeight: 370
              }}
            >
              <h3>USB 2.0 OTG Supported</h3>
              <br/>
              <p className="z-2">
                USB 2.0 OTG using kernel <b>configfs</b>. <br className="show-on-mobile" />
                Gadget profiles are defined via structured configuration files <br className="show-on-mobile" />
                and managed by <Link href="https://github.com/linux-usb-gadgets/gt">gt</Link>, <br className="show-on-mobile" />
                not fragile sysfs echo chains.
              </p>
            </Feature>

            <Feature index={7} href="/docs/hardware/3_features/8_audio">
              <h3>
                Onboard Audio I/O
              </h3>
              <br/>
              <br/>
              <p className="mr-6">
                Integrated 1 W speaker and onboard 16-bit microphone for
                audio feedback, alerts, and audio-based payloads.
                Fully accessible from userspace via standard Linux
                audio interfaces.
              </p>
              <br/>
            </Feature>
            <Feature index={8} large>
              <h3>And more...</h3>
              <br/><br/>
              <p>
                USB gadget modes, RGB RJ45 status LED, payload framework,
                GPIO automation, kernel hacking, and community-driven
                extensions.
              </p>
              <br/>
              <p className="subtitle">
                <Link className="no-underline" href="/docs">
                  Start using Lichee-Jack →
                </Link>
              </p>
              </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
