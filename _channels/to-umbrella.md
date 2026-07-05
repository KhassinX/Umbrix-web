# Canal web -> umbrella

> **OPSEC — regla dura:** este board lleva SOLO pedidos de capacidad / info **universal**.
> **NUNCA** cifras, cuentas, saldos ni datos financieros. Si dudas, no lo escribas.
> Lo lee umbrella read-only en su safe-start. No edites el _channels/ del otro lado.

| id | fecha | título | detalle | estado |
|---|---|---|---|---|
| WEB-001 | 2026-07-01 | base.html: flag config para la nota de ecosistema del footer (apps de marca independiente) | El base.html canónico renderiza 'Part of the KhassinX ecosystem' con {% unless site.is_umbrella %} — siempre visible para apps. Umbrix es marca pública INDEPENDIENTE (Decisión #8: solo © KHASSINX LLC en superficie pública) y tuvo que adaptar su copia gateando el bloque con {% if site.show_ecosystem_note %}. Propuesta universal: adoptar ese flag (default true para no romper sitios existentes) en _template/web/templates/base.html, para que futuras apps de marca independiente no re-descubran el problema. Ref: Umbrix/web/_layouts/base.html (adaptación local ya funcionando). | abierto |
| WEB-002 | 2026-07-02 | Icon Composer: capas SVG deben ir outlined (fill), nunca stroke | Lección de Umbrix (2026-07-02): un layer SVG con stroke (grillete de candado como arco stroked) renderiza en Icon Composer como slab translúcido deforme en la appearance Dark — detectado por Abraham en review visual. Fix: outlinear el path (anillo relleno, misma silueta). Candidato a: (1) sección anti-patterns de APP_ICON_DESIGN_PROCESS.md + skill design-app-icon (Fase B: 'SVGs siempre con fill, cero strokes'), (2) agente icon-composer-designer. Evidencia: Umbrix/design/icon/2026-07-02-proposal/ + app/App/AppIcon.icon. | abierto |
