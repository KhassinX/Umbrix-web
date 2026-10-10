---
layout: prose
title: Privacy Policy
description: "Umbrix collects no personal data. No account, no phone number, no analytics — and no servers of ours that could store your messages."
permalink: /legal/privacy/
lang: en
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-07-11
---

**Effective date: 2026-07-11.** This policy covers the Umbrix app and this website, umbrix.khassinx.com. It is short because there is genuinely almost nothing to disclose — and we explain below why you don't have to take our word for it.

## The app: what we collect

Nothing.

- **No account.** Umbrix has no sign-up. There is no phone number, email address, username, or password anywhere in the system.
- **Your identity is a key, not a record.** Your Umbrix identity is a cryptographic key pair generated on your device. The private key never leaves your device. We never see it, and we keep no directory of who uses Umbrix.
- **No analytics, no tracking, no ads.** Zero third-party SDKs. No crash-reporting service, no advertising identifiers, no fingerprinting. Umbrix's App Store privacy label is **Data Not Collected**, and the app's privacy manifest declares no collected data types, no tracking, and no tracking domains.

## How your messages travel

Messages are end-to-end encrypted on your device before anything is transmitted. In transit they exist only as opaque ciphertext.

- Encrypted messages are handed to an **ephemeral mailbox** built on Apple's CloudKit, addressed to the recipient's key. The mailbox stores ciphertext only, and each message is **deleted from the mailbox on delivery**. That infrastructure belongs to and is operated by Apple, not by us.
- Apple Push Notification service (APNs) is used only to **wake the recipient's device**. Push payloads carry no message content.
- We operate **no servers of our own**. There is no Umbrix backend, no message archive, and no logs of who talks to whom held by us. We could not produce your messages or your contact graph in response to any request, because we never possess them. Legal process concerning data in transit through Apple's infrastructure is a matter for Apple, under Apple's policies and applicable law.

## What we technically cannot see

- The content of your messages, photos, or files (end-to-end encrypted; keys only on your devices).
- Your contact list, your conversation partners as an identified social graph, your name, number, or email (they don't exist in the system).

## What Apple's infrastructure necessarily observes

Honesty requires stating this clearly: Umbrix runs on Apple's infrastructure, and like any app using CloudKit and APNs, that infrastructure observes operational metadata — for example, device push tokens and the timing of deliveries — under [Apple's privacy terms](https://www.apple.com/legal/privacy/). Apple sees ciphertext, never content. See the [Transparency Report](/legal/transparency/) for the full threat model.

## Anti-abuse without identification

To keep bots and device farms out **without** identifying you, Umbrix uses Apple's **App Attest**, which lets Apple attest that a request comes from a genuine app on a genuine device. This proves "real device, real app" — it does not tell us who you are.

## This website

This site is static. It sets **no cookies**, runs **no analytics or tracking of any kind**, embeds no third-party scripts, fonts, or pixels, and has no forms — it collects nothing about you.

- **Do Not Track:** we do not track anyone in the first place, so there is nothing for a DNT signal to turn off. No third party is permitted to collect information about your activity across sites through this website.
- **Hosting:** the site is served by GitHub Pages with DNS and delivery by Cloudflare. Like any web host, those providers process standard technical request data (such as your IP address) to deliver and protect the site, as independent companies under their own privacy policies. We do not receive, keep, or use that data. See [Infrastructure Providers](/legal/subprocessors/).

## Email you send us

The only personal information we ever hold is what you voluntarily include when you email us (your email address and your message). We use it solely to reply and to fix what you reported. We do not add it to any list, share it with anyone, or use it for marketing — ever. Support correspondence is kept only as long as needed to help you and for our legal obligations, and you can ask us to delete it at any time at [`legal@khassinx.com`](mailto:legal@khassinx.com). Please never include the content of your private conversations in a support email.

## Your rights

Because Umbrix processes no personal data on our side, most data-subject rights (access, portability, correction) have nothing to operate on: **your data lives only on your devices**, and deleting the app deletes your keys and your local message history. There is no account to delete because none exists. What you can always do:

- **Review, correct, or delete** any support correspondence you sent us — email [`legal@khassinx.com`](mailto:legal@khassinx.com).
- **We never sell or share personal information** — as a matter of policy and of architecture. We do not meet the applicability thresholds of laws like the California Consumer Privacy Act, and we honor their spirit anyway because there is nothing to sell.
- For an overview of the rights you hold under GDPR (EU/EEA), the UK, Spain's LOPDGDD, California's CCPA, other US states, and elsewhere — and how to exercise them — see the publisher's [Privacy Rights center](https://khassinx.com/legal/your-rights/), or email [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Children

Umbrix is not directed to children, and we do not knowingly collect personal information from anyone — including children under 13. The app has no accounts, no registration, and no analytics: there is no mechanism by which we could collect, receive, or store personal information from any user, of any age. If you believe a child has sent us personal information (for example, by emailing support), contact [`legal@khassinx.com`](mailto:legal@khassinx.com) and we will delete it.

## Data controller

Umbrix is published by **KHASSINX LLC**, a Florida limited liability company (United States). To the extent any processing is attributable to us at all, KHASSINX LLC is the controller. Contact: [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Changes to this policy

Material changes are announced on this page and reflected in the effective date above. Because the app collects nothing, changes to this policy can only make that statement more precise — never quietly weaker. If Umbrix ever changed what it collects, the App Store privacy label would have to change with it, publicly.
