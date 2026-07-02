---
layout: prose
title: Infrastructure Providers
description: "The only two companies whose infrastructure touches (encrypted) Hermod traffic."
permalink: /legal/subprocessors/
lang: en
canonical_en: /legal/subprocessors/
canonical_es: /es/legal/subprocessors/
updated: 2026-07-01
---
<!-- DRAFT — pending legal review. "Infrastructure providers" (not "sub-processors"): with no
     personal data processed by us, the GDPR processor chain has nothing to process. -->

Hermod collects no personal data, so there is no processing chain in the usual sense. For full transparency, these are the **only** companies whose infrastructure Hermod traffic touches:

| Provider | Role | What it handles |
|---|---|---|
| **Apple Inc.** | App distribution (App Store) · message relay (CloudKit ephemeral mailbox) · device wake-ups (APNs) | End-to-end encrypted ciphertext in transit (deleted on delivery) and operational metadata such as push tokens and delivery timing — under [Apple's privacy policy](https://www.apple.com/legal/privacy/) |
| **Cloudflare, Inc.** | DNS and hosting for **this website only** | Standard web request data for hermod.khassinx.com. The app itself never talks to Cloudflare. |

That's the whole list. No analytics vendors, no advertising networks, no crash-reporting services, no cloud AI. If this list ever grows, this page — and the app's public privacy label — change first.
