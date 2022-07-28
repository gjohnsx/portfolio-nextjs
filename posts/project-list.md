---
title: 'Projects to build'
date: '2022-07-27'
description: 'Ideas for potential portfolio projects.'
tags: ['Ideas']
---

*The 'ideas' posts are unfinished, quick ideas that I want to write down somewhere and revisit later if it's a good enough idea to remember it.*

## NFT web app to show images and rarity
- should be similar to Azuki Gallery but with any NFT project
- long term - turn it into a fee free marketplace with phunks marketplace code
- For any of these NFT sites, maybe you could use GraphQL and Next.js to have super fast filters on big collections of NFTs
- filters that make graphql requests for different criteria, and it's searching all the pre-rendered objects

## Twitter API web app to allow grabbing likers and retweeters
- users will enter their own API key to be able to use it
- export to CSV or other database
- it all runs client side so there's no storing of user data on my backend

## Website with my book highlights
- inspirational quotes from books I've read that I want to be reminded of
- can link to a page with all the quotes from that book that I highlighted
- maybe just add a page to this site for my book notes like I used to have

## Quit one habit web app with email reminders
- Web app to show you how many calories you are eating and drinking over time for one food or drink you indulge in
- it tells you how many calories you're eating per week
- tells you how many pounds you would lose and how quickly if you just change this one habit
- inputs:
    - height
    - weight
    - age
    - sex
    - food inputs:
        - food type?
        - calories per serving
        - servings per day
        - or servings per week on average
            - maybe it's a drop down
- paid features:
    - replace with other foods
    - email alerts and reminders
        - send emails or texts reminding them to not do something
        - or give them a happy reminder weekly
- build email list for free
    - then do affiliate marketing stuff for health and weight loss to these people
- Technology:
    - https://www.nutritionix.com/business/api
    - https://rapidapi.com/collection/nutrition
        - use the api to search foods

## Chrome extension - redesign OneTab to have a better user interface
- when you click the button, ask for a name for the tab group, and a category, and an importance level
- the new onetab page will be sortable, able to view categories, sorted by importance within each category
- other features:
    - email reminders for a tab group so you don't forget about it
        - schedule a reminder for x days from now sent to your email with a list of all the links you put in that tab group
- stretch goals:
    - interval learning reminders for each article you saved
    - when you read, highlight key points and add them to storage
    - then quiz you at intervals on what you learned from each article 
    - helps with knowledge retention

## search page for NFTs
- the google of NFT data dashboard and provenance
- tracker for single nft provenance
    - brings up beautiful dashboard of all the history of the contract and specific ID
        - sales, dates, $ value
        - chart of increase or decrease
            - 2 y axes of USD and Eth (or other chain) value
- other search ideas
    - if you don't want to see a single NFT, you can view a collection dashboard
    - pulls up NFT nerds single asset Feed + flips finance charts or tables
- payment methods
    - option web3 integration
        - pay in eth
        - log in with metamask
    - web2 method
        - pay monthly with credit card
        - sign up with email, password
        - still can log in with web3 metamask, once you are logged in with email
            - but you dont have to
            - only if you want to transact through our dashboard, which is possible
- must be decentralized
    - we won't curate
    - we won't promote anything
    - we won't remove or censor anything