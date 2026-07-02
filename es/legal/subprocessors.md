---
layout: prose
title: Proveedores de Infraestructura
description: "Las únicas dos empresas cuya infraestructura toca tráfico (cifrado) de Hermod."
permalink: /es/legal/subprocessors/
lang: es
canonical_en: /legal/subprocessors/
canonical_es: /es/legal/subprocessors/
updated: 2026-07-01
---
<!-- DRAFT — pendiente de revisión legal. "Proveedores de infraestructura" (no "subencargados"):
     al no procesar nosotros datos personales, la cadena de encargados RGPD no tiene qué procesar. -->

Hermod no recolecta datos personales, así que no existe una cadena de tratamiento en el sentido habitual. Por transparencia total, estas son las **únicas** empresas cuya infraestructura toca tráfico de Hermod:

| Proveedor | Rol | Qué maneja |
|---|---|---|
| **Apple Inc.** | Distribución de la app (App Store) · relevo de mensajes (buzón efímero de CloudKit) · despertar dispositivos (APNs) | Texto cifrado de extremo a extremo en tránsito (borrado al entregar) y metadatos operativos como tokens de push y timing de entregas — bajo la [política de privacidad de Apple](https://www.apple.com/legal/privacy/) |
| **Cloudflare, Inc.** | DNS y hosting **solo de este sitio web** | Datos estándar de peticiones web de hermod.khassinx.com. La app en sí nunca habla con Cloudflare. |

Esa es toda la lista. Sin proveedores de analytics, sin redes publicitarias, sin servicios de crash-reporting, sin IA en la nube. Si esta lista alguna vez crece, esta página — y la etiqueta pública de privacidad de la app — cambian primero.
