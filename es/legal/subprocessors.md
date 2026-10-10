---
layout: prose
title: Proveedores de Infraestructura
description: "Las únicas empresas cuya infraestructura toca tráfico (cifrado) de Umbrix o sirve este sitio web."
permalink: /es/legal/subprocessors/
lang: es
canonical_en: /legal/subprocessors/
canonical_es: /es/legal/subprocessors/
updated: 2026-07-11
---

Umbrix no recolecta datos personales, así que no existe una cadena de tratamiento en el sentido habitual. Por transparencia total, esta página lista **todas** las empresas cuya infraestructura interviene — separando el camino de los mensajes de la app de este sitio web.

## El camino de los mensajes de la app

| Proveedor | Rol | Qué maneja |
|---|---|---|
| **Apple Inc.** | Distribución de la app (App Store) · relevo de mensajes (buzón efímero de CloudKit) · despertar dispositivos (APNs) | Texto cifrado de extremo a extremo en tránsito (borrado al entregar) y metadatos operativos como tokens de push y timing de entregas — bajo la [política de privacidad de Apple](https://www.apple.com/legal/privacy/) |

Esa es la lista completa para la app. Una sola empresa, y es la plataforma misma.

## Solo este sitio web

| Proveedor | Rol | Qué maneja |
|---|---|---|
| **GitHub, Inc.** | Hosting estático (GitHub Pages) de umbrix.khassinx.com | Datos técnicos estándar de las peticiones, necesarios para servir las páginas, bajo la [declaración de privacidad de GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| **Cloudflare, Inc.** | DNS, TLS y entrega de contenido de umbrix.khassinx.com | Datos técnicos estándar de las peticiones, necesarios para enrutar y proteger el sitio, bajo la [política de privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/) |

La app en sí nunca habla con GitHub ni con Cloudflare. Nosotros no recibimos ni guardamos los registros técnicos que estos proveedores procesan para operar sus redes.

Sin proveedores de analytics, sin redes publicitarias, sin servicios de crash-reporting, sin IA en la nube. Si esta lista alguna vez crece, esta página — y la etiqueta pública de privacidad de la app — cambian primero.
