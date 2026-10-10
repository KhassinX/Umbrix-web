---
layout: prose
title: Infrastructure Providers
description: "The only companies whose infrastructure touches (encrypted) Umbrix traffic or serves this website."
permalink: /legal/subprocessors/
lang: en
canonical_en: /legal/subprocessors/
canonical_es: /es/legal/subprocessors/
updated: 2026-07-11
---

Umbrix collects no personal data, so there is no processing chain in the usual sense. For full transparency, this page lists **every** company whose infrastructure is involved — separating the app's message path from this website.

## The app's message path

| Provider | Role | What it handles |
|---|---|---|
| **Apple Inc.** | App distribution (App Store) · message relay (CloudKit ephemeral mailbox) · device wake-ups (APNs) | End-to-end encrypted ciphertext in transit (deleted on delivery) and operational metadata such as push tokens and delivery timing — under [Apple's privacy policy](https://www.apple.com/legal/privacy/) |

That is the entire list for the app. One company, and it is the platform itself.

## This website only

| Provider | Role | What it handles |
|---|---|---|
| **GitHub, Inc.** | Static hosting (GitHub Pages) for umbrix.khassinx.com | Standard web request data needed to serve pages, under [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| **Cloudflare, Inc.** | DNS, TLS, and content delivery for umbrix.khassinx.com | Standard web request data needed to route and protect the site, under [Cloudflare's privacy policy](https://www.cloudflare.com/privacypolicy/) |

The app itself never talks to GitHub or Cloudflare. We do not receive or keep the technical logs these providers process to operate their networks.

No analytics vendors, no advertising networks, no crash-reporting services, no cloud AI. If this list ever grows, this page — and the app's public privacy label — change first.
