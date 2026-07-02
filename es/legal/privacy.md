---
layout: prose
title: Política de Privacidad
description: "Hermod no recolecta datos personales. Sin cuenta, sin número de teléfono, sin analytics — y sin servidores nuestros que pudieran guardar tus mensajes."
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-07-01
---
<!-- DRAFT — aún no publicado. -->

**Hermod no recolecta datos personales. Ninguno.** Esta política es corta porque genuinamente no hay nada que revelar — y abajo explicamos por qué no tienes que creernos por fe.

## Qué recolectamos

Nada.

- **Sin cuenta.** Hermod no tiene registro. No existe número de teléfono, email, nombre de usuario ni contraseña en ninguna parte del sistema.
- **Tu identidad es una clave, no un registro.** Tu identidad en Hermod es un par de claves criptográficas generado en tu dispositivo. La clave privada nunca sale de tu dispositivo. Nunca la vemos, y no mantenemos ningún directorio de quién usa Hermod.
- **Sin analytics, sin tracking, sin publicidad.** Cero SDKs de terceros. Sin servicio de crash-reporting, sin identificadores publicitarios, sin fingerprinting. La etiqueta de privacidad de Hermod en el App Store es **Datos no recopilados**, y el manifiesto de privacidad de la app declara cero tipos de datos recolectados, cero tracking y cero dominios de tracking.

## Cómo viajan tus mensajes

Los mensajes se cifran de extremo a extremo en tu dispositivo antes de transmitir nada. En tránsito existen solo como texto cifrado opaco.

- Los mensajes cifrados se entregan a un **buzón efímero** construido sobre CloudKit de Apple, dirigido a la clave del destinatario. El buzón almacena solo texto cifrado, y cada mensaje se **borra del buzón al entregarse**.
- El servicio de notificaciones push de Apple (APNs) se usa únicamente para **despertar el dispositivo del destinatario**. Los payloads de push no llevan contenido de mensajes.
- No operamos **ningún servidor propio**. No hay backend de Hermod, no hay archivo de mensajes, y no guardamos registros de quién habla con quién. No podríamos entregar tus mensajes ni tu grafo de contactos ante ninguna solicitud, porque nunca los poseemos.

## Qué no podemos ver técnicamente

- El contenido de tus mensajes, fotos o archivos (cifrado de extremo a extremo; las claves solo en tus dispositivos).
- Tu lista de contactos, tus interlocutores como grafo social identificado, tu nombre, número o email (no existen en el sistema).

## Qué observa necesariamente la infraestructura de Apple

La honestidad exige decirlo claro: Hermod corre sobre infraestructura de Apple y, como cualquier app que usa CloudKit y APNs, esa infraestructura observa metadatos operativos — por ejemplo, tokens de push del dispositivo y el timing de las entregas — bajo los [términos de privacidad de Apple](https://www.apple.com/legal/privacy/). Apple ve texto cifrado, nunca contenido. Consulta el [Informe de Transparencia](/es/legal/transparency/) para el modelo de amenazas completo.

## Anti-abuso sin identificación

Para mantener fuera bots y granjas de dispositivos **sin** identificarte, Hermod usa **App Attest** de Apple, que permite a Apple certificar que una solicitud proviene de una app genuina en un dispositivo genuino. Eso prueba "dispositivo real, app real" — no nos dice quién eres.

## Tus derechos

Como Hermod no procesa datos personales de nuestro lado, la mayoría de los derechos (acceso, portabilidad, rectificación) no tienen sobre qué operar: **tus datos viven solo en tus dispositivos**. Borrar la app borra tus claves y tu historial local de mensajes. Para los derechos que tienes bajo el RGPD (UE/EEE), el Reino Unido, la LOPDGDD de España, la CCPA de California, otros estados de EE. UU. y el resto del mundo — y cómo ejercerlos — consulta el [centro de Derechos de Privacidad](https://khassinx.com/legal/your-rights/) del editor, o escribe a [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Menores

Hermod tiene clasificación 17+ y no está dirigida a menores.

## Responsable del tratamiento

Hermod es publicado por **KHASSINX LLC**, una sociedad de responsabilidad limitada de Florida (Estados Unidos). En la medida en que algún tratamiento nos sea atribuible, KHASSINX LLC es el responsable. Contacto: [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Cambios

Los cambios materiales se reflejan en la fecha de "Última actualización" de arriba. Como la app no recolecta nada, los cambios a esta política solo pueden hacer esa afirmación más precisa — nunca silenciosamente más débil. Si Hermod alguna vez cambiara lo que recolecta, la etiqueta de privacidad del App Store tendría que cambiar con ello, públicamente.
