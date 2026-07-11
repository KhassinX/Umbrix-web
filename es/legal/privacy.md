---
layout: prose
title: Política de Privacidad
description: "Umbrix no recolecta datos personales. Sin cuenta, sin número de teléfono, sin analytics — y sin servidores nuestros que pudieran guardar tus mensajes."
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-07-11
---

**Fecha de vigencia: 2026-07-11.** Esta política cubre la app Umbrix y este sitio web, umbrix.khassinx.com. Es corta porque genuinamente no hay casi nada que revelar — y abajo explicamos por qué no tienes que creernos por fe.

## La app: qué recolectamos

Nada.

- **Sin cuenta.** Umbrix no tiene registro. No existe número de teléfono, email, nombre de usuario ni contraseña en ninguna parte del sistema.
- **Tu identidad es una clave, no un registro.** Tu identidad en Umbrix es un par de claves criptográficas generado en tu dispositivo. La clave privada nunca sale de tu dispositivo. Nunca la vemos, y no mantenemos ningún directorio de quién usa Umbrix.
- **Sin analytics, sin tracking, sin publicidad.** Cero SDKs de terceros. Sin servicio de crash-reporting, sin identificadores publicitarios, sin fingerprinting. La etiqueta de privacidad de Umbrix en el App Store es **Datos no recopilados**, y el manifiesto de privacidad de la app declara cero tipos de datos recolectados, cero tracking y cero dominios de tracking.

## Cómo viajan tus mensajes

Los mensajes se cifran de extremo a extremo en tu dispositivo antes de transmitir nada. En tránsito existen solo como texto cifrado opaco.

- Los mensajes cifrados se entregan a un **buzón efímero** construido sobre CloudKit de Apple, dirigido a la clave del destinatario. El buzón almacena solo texto cifrado, y cada mensaje se **borra del buzón al entregarse**. Esa infraestructura pertenece a Apple y la opera Apple, no nosotros.
- El servicio de notificaciones push de Apple (APNs) se usa únicamente para **despertar el dispositivo del destinatario**. Los payloads de push no llevan contenido de mensajes.
- No operamos **ningún servidor propio**. No hay backend de Umbrix, no hay archivo de mensajes, y no guardamos registros de quién habla con quién. No podríamos entregar tus mensajes ni tu grafo de contactos ante ninguna solicitud, porque nunca los poseemos. El proceso legal sobre datos en tránsito por la infraestructura de Apple es asunto de Apple, bajo sus políticas y la ley aplicable.

## Qué no podemos ver técnicamente

- El contenido de tus mensajes, fotos o archivos (cifrado de extremo a extremo; las claves solo en tus dispositivos).
- Tu lista de contactos, tus interlocutores como grafo social identificado, tu nombre, número o email (no existen en el sistema).

## Qué observa necesariamente la infraestructura de Apple

La honestidad exige decirlo claro: Umbrix corre sobre infraestructura de Apple y, como cualquier app que usa CloudKit y APNs, esa infraestructura observa metadatos operativos — por ejemplo, tokens de push del dispositivo y el timing de las entregas — bajo los [términos de privacidad de Apple](https://www.apple.com/legal/privacy/). Apple ve texto cifrado, nunca contenido. Consulta el [Informe de Transparencia](/es/legal/transparency/) para el modelo de amenazas completo.

## Anti-abuso sin identificación

Para mantener fuera bots y granjas de dispositivos **sin** identificarte, Umbrix usa **App Attest** de Apple, que permite a Apple certificar que una solicitud proviene de una app genuina en un dispositivo genuino. Eso prueba "dispositivo real, app real" — no nos dice quién eres.

## Este sitio web

Este sitio es estático. **No usa cookies**, no corre **ningún tipo de analytics ni tracking**, no incrusta scripts, fuentes ni píxeles de terceros, y no tiene formularios — no recolecta nada sobre ti.

- **Do Not Track:** no rastreamos a nadie en primer lugar, así que no hay nada que una señal DNT pueda apagar. Ningún tercero está autorizado a recolectar información sobre tu actividad en otros sitios a través de este sitio web.
- **Hosting:** el sitio lo sirve GitHub Pages, con DNS y entrega a cargo de Cloudflare. Como cualquier host web, esos proveedores procesan datos técnicos estándar de las solicitudes (como tu dirección IP) para servir y proteger el sitio, como empresas independientes bajo sus propias políticas de privacidad. Nosotros no recibimos, guardamos ni usamos esos datos. Ver [Proveedores de Infraestructura](/es/legal/subprocessors/).

## Los emails que nos envías

La única información personal que llegamos a tener es la que incluyes voluntariamente al escribirnos (tu dirección de email y tu mensaje). La usamos solo para responderte y arreglar lo que reportaste. No la agregamos a ninguna lista, no la compartimos con nadie y no la usamos para marketing — nunca. La correspondencia de soporte se conserva solo el tiempo necesario para ayudarte y para nuestras obligaciones legales, y puedes pedirnos borrarla en cualquier momento en [`legal@khassinx.com`](mailto:legal@khassinx.com). Por favor, nunca incluyas el contenido de tus conversaciones privadas en un email de soporte.

## Tus derechos

Como Umbrix no procesa datos personales de nuestro lado, la mayoría de los derechos (acceso, portabilidad, rectificación) no tienen sobre qué operar: **tus datos viven solo en tus dispositivos**, y borrar la app borra tus claves y tu historial local de mensajes. No hay cuenta que borrar porque no existe ninguna. Lo que siempre puedes hacer:

- **Revisar, corregir o borrar** cualquier correspondencia de soporte que nos hayas enviado — escribe a [`legal@khassinx.com`](mailto:legal@khassinx.com).
- **Nunca vendemos ni compartimos información personal** — por política y por arquitectura. No alcanzamos los umbrales de aplicabilidad de leyes como la California Consumer Privacy Act, y honramos su espíritu de todos modos porque no hay nada que vender.
- Para un panorama de los derechos que tienes bajo el RGPD (UE/EEE), el Reino Unido, la LOPDGDD de España, la CCPA de California, otros estados de EE. UU. y el resto del mundo — y cómo ejercerlos — consulta el [centro de Derechos de Privacidad](https://khassinx.com/legal/your-rights/) del editor, o escribe a [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Menores

Umbrix no está dirigida a niños, y no recolectamos conscientemente información personal de nadie — incluidos los menores de 13 años. La app no tiene cuentas, ni registro, ni analytics: no existe mecanismo por el cual pudiéramos recolectar, recibir o almacenar información personal de ningún usuario, de ninguna edad. Si crees que un menor nos envió información personal (por ejemplo, escribiendo a soporte), contacta a [`legal@khassinx.com`](mailto:legal@khassinx.com) y la borraremos.

## Responsable del tratamiento

Umbrix es publicado por **KHASSINX LLC**, una sociedad de responsabilidad limitada de Florida (Estados Unidos). En la medida en que algún tratamiento nos sea atribuible, KHASSINX LLC es el responsable. Contacto: [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Cambios a esta política

Los cambios materiales se anuncian en esta página y se reflejan en la fecha de vigencia de arriba. Como la app no recolecta nada, los cambios a esta política solo pueden hacer esa afirmación más precisa — nunca silenciosamente más débil. Si Umbrix alguna vez cambiara lo que recolecta, la etiqueta de privacidad del App Store tendría que cambiar con ello, públicamente.
