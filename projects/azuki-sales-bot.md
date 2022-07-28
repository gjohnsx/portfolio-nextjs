---
title: 'Azuki Sales Twitter Bot'
date: '2022-02-21'
description: 'Azuki Twitter Sales Notification bot using Python, Tweepy, AWS Lambda, and Etherscan API.'
tags: ['Python', 'Twitter', 'NFT']
techStack: ['Python']
image: '/images/azuki-sales-bot.png'
imageHeight: 928
imageWidth: 586
imageLink: 'https://twitter.com/AzukiOfficial'
productionLink: 'https://twitter.com/azukisales'
githubLink: 'https://github.com/gjohnsx/Azuki-Sales-Bot'
published: true
---

## Notes
This version uses the following APIs:

- OpenSea API (need a key)
- LooksRare API (free)
- Etherscan API (free)
- Ethplorer API (free)
- Twitter API (you need elevated access to be able to post images using the v1 auth)

## 💰 Marketplaces Supported
It currently supports sales on OpenSea, LooksRare, and Gem.xyz.

## 🤖 How It Works
I run it on AWS Lambda using a 5 minute trigger. Every 5 minutes, it gets the Ethereum block number that was mined 5 minutes ago. Then it checks all interactions with a given contract or contracts, and checks if they are a sale and if so, from which marketplace they came.

If you want to use it for other contracts, you'll need to change the contracts in lambda_handler and the metadata image link in get_img_url_gem_sweep.