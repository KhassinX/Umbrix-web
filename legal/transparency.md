---
layout: prose
title: Transparency Report
description: "How Hermod works, what we can and cannot see, the threat model, and the honest limits of our protections."
permalink: /legal/transparency/
lang: en
canonical_en: /legal/transparency/
canonical_es: /es/legal/transparency/
updated: 2026-07-01
---
<!-- DRAFT — pending legal review. Crypto specifics stay at protocol level until the primitive
     selection is finalized (internal decision) and independently audited pre-launch. -->

Most privacy policies ask for trust. This report is written so you need as little of it as possible: it describes the architecture, what each party can technically see, and — just as important — what our protections **cannot** do.

## The architecture in one paragraph

Hermod has **no servers of its own**. Messages are end-to-end encrypted on your device using a Signal-style protocol (X3DH key agreement + double ratchet, giving forward secrecy) built on Apple's CryptoKit, with private keys held in your device's secure hardware or system keychain. Ciphertext travels through an ephemeral CloudKit mailbox that deletes each message on delivery, and APNs wakes the recipient's device without carrying content. Your identity is a key pair generated locally — there is no account, no directory, and no registry of users.

## What each party can see

| Party | Can see | Cannot see |
|---|---|---|
| **You & your contact** | Everything in your conversation | — |
| **KHASSINX LLC (us)** | Nothing. We operate no infrastructure in the message path. | Message content, metadata, contact graph, identities |
| **Apple (CloudKit/APNs)** | Operational metadata: device push tokens, delivery timing, ciphertext blobs in transit | Message content, your Hermod identity keys |
| **Your mobile carrier / network** | That your device talks to Apple's servers (like millions of apps) | Content, recipients |

## Verifiable claims

- **Empty privacy label.** The App Store label reads "Data Not Collected" — a public, binding declaration reviewed by Apple.
- **Privacy manifest.** The app bundle declares zero collected data types, zero tracking domains.
- **Safety numbers.** Each conversation exposes a verification code both parties can compare in person or over another channel to rule out interception.
- **Independent audit.** The cryptographic implementation will undergo an independent security audit before public launch; results will be summarized here.

## Honest limits — read this section

- **Anti-screenshot is best-effort.** Hermod detects screenshots and warns the other person, and applies platform tricks to resist capture, but **no app can guarantee** the person you write to won't photograph the screen with another device. Treat it as a courtesy signal, not a guarantee.
- **The endpoint is the boundary.** End-to-end encryption protects data in transit and at rest in the mailbox. If a device itself is compromised — malware, coerced unlock, someone knowing your passcode — encryption cannot help. Use a strong device passcode; enable Hermod's app lock.
- **Apple's infrastructure sees operational metadata.** We chose Apple's rails precisely so *we* can hold nothing, but delivery timing and push tokens necessarily exist at Apple, under Apple's privacy terms and applicable law.
- **Availability depends on Apple.** Distribution is via the App Store, and transport via CloudKit/APNs. A takedown or infrastructure block in a jurisdiction can make Hermod unavailable there; it cannot retroactively expose past messages.

## Government requests

Two different things are sometimes called a "government request", and we treat them separately. **Requests for data** have nothing to reach: we hold no message content, no metadata archive, and no user registry, so we can only produce what we possess — designed to be nothing. **Requests to make Hermod unavailable** in a territory are handled as a neutral compliance matter. Both are described at [Government & Legal Requests](/legal/requests/); withdrawals are recorded at [Availability](/legal/availability/). We publish a standing [Warrant Canary](/legal/canary/).

## Questions

[`security@khassinx.com`](mailto:security@khassinx.com) for security research (see [responsible disclosure](/security/)), [`legal@khassinx.com`](mailto:legal@khassinx.com) for everything else.
