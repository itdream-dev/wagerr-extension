# Wagerr

## Installation

- Firefox and Chrome: Download the most recent release from https://wagerr.bitcoin.com
- Brave: Install from chrome store

## API Documentation



## Docker build distribution

Notes:
- Recent docker version needed to build.
- OSX or Linux build environment preferred.
- Execute commands from the source directory.

Steps:
1. Build and run the image, run command:
docker build -f Dockerfile -t wagerr:0.7.16 .  && docker run --name wagerr0716 wagerr:0.7.16

2. After the build is complete, copy the distribution files to your local folder:
docker cp wagerr0716:/app/builds/. ./

3. A distribution file for each supported browser will be copied, such as wagerrwallet-firefox-0.7.16.zip for Firefox browsers.

## Intro

Wagerr is a secure identity vault for WAGERR. It allows you to hold BCH & tokens, and serves as your bridge to decentralized applications (dapps).

WAGERR and tokens enable an entirely new dimension to the web with micro-payments, smart-assets, decentralized exchanges, distributed autonomous organizations and much more.

Wagerr is your identity on this new web. You can pay for premium content, run smart contracts and experience dapps seemlessly and trust free.

Powered by BITBOX, Wagerr is 100% non-custodial. Your private keys never leave your computer.

## Wagerr Button

Wagerr Button is a library of open source UI components which content creators and entrepreneurs can drop in to their site to enable micro payments, premium content, tipping, e-commerce and much more.

- Usage: https://old.reddit.com/r/btc/comments/9l9j1t/how_to_create_your_own_custom_wagerr_button/
- Example buttons visible on articles at https://coinspice.io/

## CashID

- Allows dapps to authenticate an account and provide previously purchased content
- CashID react component and example usage by paOol: https://github.com/paOol/react-cashid

## Credits

- [SpendBCH](https://twitter.com/SpendBCH_io)
- [Gabriel Cardona](https://twitter.com/cgcardona)
- [SLP](https://twitter.com/simpleledger)
- [bitcoin.com](https://developer.bitcoin.com)
- Wagerr is originally forked from the excellent MetaMask project
