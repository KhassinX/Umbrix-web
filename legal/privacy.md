---
layout: prose
title: Privacy Policy
description: "Hermod collects no personal data. No account, no phone number, no analytics — and no servers of ours that could store your messages."
permalink: /legal/privacy/
lang: en
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-07-01
---
<!-- DRAFT — pending legal review before first publish. Must stay aligned, word for word in substance,
     with the App Store privacy label ("Data Not Collected") and app/Resources/PrivacyInfo.xcprivacy. -->

**Hermod collects no personal data. None.** This policy is short because there is genuinely nothing to disclose — and we explain below why you don't have to take our word for it.

## What we collect

Nothing.

- **No account.** Hermod has no sign-up. There is no phone number, email address, username, or password anywhere in the system.
- **Your identity is a key, not a record.** Your Hermod identity is a cryptographic key pair generated on your device. The private key never leaves your device. We never see it, and we keep no directory of who uses Hermod.
- **No analytics, no tracking, no ads.** Zero third-party SDKs. No crash-reporting service, no advertising identifiers, no fingerprinting. Hermod's App Store privacy label is **Data Not Collected**, and the app's privacy manifest declares no collected data types, no tracking, and no tracking domains.

## How your messages travel

Messages are end-to-end encrypted on your device before anything is transmitted. In transit they exist only as opaque ciphertext.

- Encrypted messages are handed to an **ephemeral mailbox** built on Apple's CloudKit, addressed to the recipient's key. The mailbox stores ciphertext only, and each message is **deleted from the mailbox on delivery**.
- Apple Push Notification service (APNs) is used only to **wake the recipient's device**. Push payloads carry no message content.
- We operate **no servers of our own**. There is no Hermod backend, no message archive, and no logs of who talks to whom held by us. We could not produce your messages or your contact graph in response to any request, because we never possess them.

## What we technically cannot see

- The content of your messages, photos, or files (end-to-end encrypted; keys only on your devices).
- Your contact list, your conversation partners as an identified social graph, your name, number, or email (they don't exist in the system).

## What Apple's infrastructure necessarily observes

Honesty requires stating this clearly: Hermod runs on Apple's infrastructure, and like any app using CloudKit and APNs, that infrastructure observes operational metadata — for example, device push tokens and the timing of deliveries — under [Apple's privacy terms](https://www.apple.com/legal/privacy/). Apple sees ciphertext, never content. See the [Transparency Report](/legal/transparency/) for the full threat model.

## Anti-abuse without identification

To keep bots and device farms out **without** identifying you, Hermod uses Apple's **App Attest**, which lets Apple attest that a request comes from a genuine app on a genuine device. This proves "real device, real app" — it does not tell us who you are.

## Your rights

Because Hermod processes no personal data on our side, most data-subject rights (access, portability, correction) have nothing to operate on: **your data lives only on your devices**. Deleting the app deletes your keys and your local message history. For the rights you hold under GDPR (EU/EEA), the UK, Spain's LOPDGDD, California's CCPA, other US states, and elsewhere — and how to exercise them — see the publisher's [Privacy Rights center](https://khassinx.com/legal/your-rights/), or email [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Children

Hermod is rated 17+ and is not directed at children.

## Data controller

Hermod is published by **KHASSINX LLC**, a Florida limited liability company (United States). To the extent any processing is attributable to us at all, KHASSINX LLC is the controller. Contact: [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Changes

Material changes are reflected in the "Last updated" date above. Because the app collects nothing, changes to this policy can only make that statement more precise — never quietly weaker. If Hermod ever changed what it collects, the App Store privacy label would have to change with it, publicly.
