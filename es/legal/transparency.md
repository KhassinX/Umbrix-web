---
layout: prose
title: Informe de Transparencia
description: "Cómo funciona Hermod, qué podemos y no podemos ver, el modelo de amenazas y los límites honestos de nuestras protecciones."
permalink: /es/legal/transparency/
lang: es
canonical_en: /legal/transparency/
canonical_es: /es/legal/transparency/
updated: 2026-07-01
---
<!-- DRAFT — pendiente de revisión legal. Los detalles crypto se mantienen a nivel de protocolo
     hasta finalizar la selección de primitivas (decisión interna) y auditarla independientemente pre-launch. -->

La mayoría de las políticas de privacidad piden confianza. Este informe está escrito para que necesites la menor posible: describe la arquitectura, qué puede ver técnicamente cada parte y — igual de importante — qué **no** pueden hacer nuestras protecciones.

## La arquitectura en un párrafo

Hermod **no tiene servidores propios**. Los mensajes se cifran de extremo a extremo en tu dispositivo con un protocolo estilo Signal (acuerdo de claves X3DH + doble ratchet, con forward secrecy) construido sobre CryptoKit de Apple, con las claves privadas guardadas en el hardware seguro del dispositivo o el llavero del sistema. El texto cifrado viaja por un buzón efímero de CloudKit que borra cada mensaje al entregarlo, y APNs despierta el dispositivo del destinatario sin transportar contenido. Tu identidad es un par de claves generado localmente — no hay cuenta, ni directorio, ni registro de usuarios.

## Qué puede ver cada parte

| Parte | Puede ver | No puede ver |
|---|---|---|
| **Tú y tu contacto** | Todo lo de su conversación | — |
| **KHASSINX LLC (nosotros)** | Nada. No operamos infraestructura en el camino del mensaje. | Contenido, metadatos, grafo de contactos, identidades |
| **Apple (CloudKit/APNs)** | Metadatos operativos: tokens de push, timing de entregas, blobs cifrados en tránsito | Contenido de mensajes, tus claves de identidad |
| **Tu operadora / red** | Que tu dispositivo habla con servidores de Apple (como millones de apps) | Contenido, destinatarios |

## Afirmaciones verificables

- **Etiqueta de privacidad vacía.** La etiqueta del App Store dice "Datos no recopilados" — una declaración pública y vinculante revisada por Apple.
- **Manifiesto de privacidad.** El bundle de la app declara cero tipos de datos recolectados y cero dominios de tracking.
- **Safety numbers.** Cada conversación expone un código de verificación que ambas partes pueden comparar en persona o por otro canal para descartar interceptación.
- **Auditoría independiente.** La implementación criptográfica pasará por una auditoría de seguridad independiente antes del lanzamiento público; los resultados se resumirán aquí.

## Límites honestos — lee esta sección

- **El anti-captura es best-effort.** Hermod detecta capturas de pantalla y avisa a la otra persona, y aplica trucos de plataforma para resistir la captura, pero **ninguna app puede garantizar** que quien recibe tu mensaje no fotografíe la pantalla con otro dispositivo. Tómalo como una señal de cortesía, no una garantía.
- **El límite es el dispositivo.** El cifrado de extremo a extremo protege los datos en tránsito y en el buzón. Si el dispositivo mismo está comprometido — malware, desbloqueo forzado, alguien que conoce tu código — el cifrado no puede ayudar. Usa un código fuerte; activa el bloqueo de app de Hermod.
- **La infraestructura de Apple ve metadatos operativos.** Elegimos los rieles de Apple precisamente para que *nosotros* no retengamos nada, pero el timing de entregas y los tokens de push existen necesariamente en Apple, bajo sus términos de privacidad y la ley aplicable.
- **La disponibilidad depende de Apple.** La distribución es vía App Store y el transporte vía CloudKit/APNs. Un retiro o bloqueo de infraestructura en una jurisdicción puede hacer que Hermod no esté disponible ahí; no puede exponer retroactivamente mensajes pasados.

## Solicitudes gubernamentales

Publicamos un [Warrant Canary](/es/legal/canary/) permanente. Estructuralmente hay muy poco que solicitar: no retenemos contenido, ni archivo de metadatos, ni registro de usuarios. Si alguna vez recibimos una solicitud legalmente vinculante, solo podemos entregar lo que poseemos — que está diseñado para ser nada.

## Preguntas

[`security@khassinx.com`](mailto:security@khassinx.com) para investigación de seguridad (ver [divulgación responsable](/es/security/)), [`legal@khassinx.com`](mailto:legal@khassinx.com) para todo lo demás.
