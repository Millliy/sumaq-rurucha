# Prompts para generar imágenes de producto — Sumaq Rurucha

## Cómo usarlos
Cada imagen = **BLOQUE DE ESTILO + prompt específico**. Copia siempre el bloque de estilo
y pégale a continuación el prompt de la imagen que quieras generar.
Genera en formato **cuadrado (1:1), mínimo 1120 × 1120 px**.

---

## ⭐ LAS 3 VISTAS FALTANTES (cuando YA tienes la foto principal del empaque)

**Importante:** sube tu foto principal como **imagen de referencia** en el generador
(Midjourney: `--sref` o imagen adjunta / DALL-E, Gemini, Firefly: "usa esta imagen como referencia")
para que el empaque salga idéntico al real. Reemplaza `[PRODUCTO]` por el nombre
y `[CONTENIDO]` por lo que se ve (granos, polvo, tiras de fruta, hierbas...).

### img_03 — Detalle del producto (macro, 1:1)

> Usando la imagen adjunta como referencia del producto: fotografía macro extrema de [CONTENIDO]
> de [PRODUCTO] en primer plano, sin empaque, mostrando textura, color y calidad del grano/polvo/fruta.
> Iluminación natural suave lateral, fondo beige desenfocado (#f8f4ed), profundidad de campo muy corta,
> alta nitidez en el centro. Formato cuadrado 1:1. Sin texto, sin logos, sin manos.

*EN:* Using the attached image as product reference: extreme macro photography of [PRODUCT]'s [CONTENT]
close-up, no packaging, showing texture, color and quality. Soft natural side light, blurred beige
background (#f8f4ed), very shallow depth of field, sharp center focus. Square 1:1. No text, no logos, no hands.

### img_04 — Empaque en perspectiva (1:1)

> Usando la imagen adjunta como referencia exacta del empaque: el mismo envase de [PRODUCTO]
> fotografiado en ángulo de tres cuartos (rotado ~30°), de pie sobre superficie de madera clara,
> mostrando volumen y lateral del empaque. Mantener idénticos el diseño, colores y etiqueta del
> empaque de referencia. Luz natural cálida, fondo beige limpio, sombra suave. Formato cuadrado 1:1.

*EN:* Using the attached image as exact packaging reference: the same [PRODUCT] package shot at a
three-quarter angle (~30° rotation), standing on light wood surface, showing volume and package side.
Keep the reference packaging design, colors and label identical. Warm natural light, clean beige
background, soft shadow. Square 1:1.

### img_05 — Producto preparado / lifestyle (1:1)

> Fotografía editorial de estilo de vida: [DESCRIBE LA RECETA O USO, ej. "plato de ensalada tibia con
> quinua blanca cocida, palta y vegetales frescos"] servido en cerámica artesanal sobre mesa de madera
> clara con textil andino sutil, luz natural de mañana, ambiente cálido y saludable. El empaque de
> [PRODUCTO] (idéntico a la imagen de referencia adjunta) aparece parcialmente visible al fondo,
> desenfocado. Formato cuadrado 1:1. Sin texto sobreimpreso.

*EN:* Editorial lifestyle photography: [DESCRIBE RECIPE OR USE] served on artisanal ceramics on a light
wood table with subtle Andean textile, natural morning light, warm healthy mood. The [PRODUCT] package
(identical to attached reference) partially visible in the blurred background. Square 1:1. No overlay text.

**Ejemplo relleno para Quinua Real Blanca:**
- img_03: `[CONTENIDO]` → "granos de quinua blanca crudos"
- img_04: `[PRODUCTO]` → "Quinua Real Blanca"
- img_05: receta → "plato de ensalada tibia con quinua blanca cocida, palta, tomates cherry y hierbas frescas"

---

## BLOQUE DE ESTILO (pégalo al inicio de cada prompt)

> Fotografía profesional de producto para e-commerce de alimentos andinos peruanos artesanales.
> Luz natural cálida y suave desde un costado, fondo limpio en tonos crema y beige (#f8f4ed),
> superficie de madera clara o textil andino sutil. Estética rústica-premium, colores tierra
> con acentos vino tinto (#7a1f3d). Alta nitidez, profundidad de campo suave, sin texto ni logos,
> sin personas salvo que se indique. Estilo consistente de catálogo, toma a nivel de producto.

**Versión en inglés** (muchos generadores funcionan mejor así):

> Professional food e-commerce product photography, artisanal Peruvian Andean foods brand.
> Soft warm natural side light, clean cream/beige background (#f8f4ed), light wood surface or
> subtle Andean textile. Rustic-premium aesthetic, earthy tones with deep wine red accents (#7a1f3d).
> Sharp focus, soft depth of field, no text, no logos, no people unless specified.
> Consistent catalog style, product-level shot, square 1:1.

---

## 1. MANGO DESHIDRATADO → `producto-mango-deshidratado/`

| Archivo | Prompt |
|---|---|
| `producto-mango-vista1.png` | Bolsa kraft artesanal abierta con tiras de mango deshidratado color ámbar dorado asomando, de pie sobre superficie de madera clara, toma frontal centrada. / *Open kraft paper pouch standing upright, golden amber dried mango strips peeking out, front centered shot.* |
| `producto-mango-vista2.png` | Tiras de mango deshidratado dispuestas en abanico sobre plato de cerámica artesanal beige, vista cenital 45°. / *Dried mango strips fanned out on a beige artisanal ceramic plate, 45° overhead view.* |
| `producto-mango-detalle.png` | Macro extremo de la textura fibrosa y brillante de tiras de mango deshidratado, color ámbar intenso, retroiluminación suave. / *Extreme macro of glossy fibrous dried mango texture, deep amber color, soft backlight.* |
| `producto-mango-uso.png` | Bowl de yogurt con granola y tiras de mango deshidratado encima, mesa de desayuno con luz de mañana, una mano femenina sosteniendo una tira. / *Yogurt bowl with granola topped with dried mango strips, morning breakfast table, one female hand holding a strip.* |

## 2. CÚRCUMA MOLIDA → `producto-curcuma-molida/`

| Archivo | Prompt |
|---|---|
| `producto-curcuma-vista1.png` | Frasco de vidrio con tapa de bambú lleno de cúrcuma molida naranja intenso, de pie sobre madera clara, toma frontal centrada. / *Glass jar with bamboo lid filled with vivid orange turmeric powder, standing on light wood, front centered shot.* |
| `producto-curcuma-vista2.png` | Cúrcuma molida en montículo sobre cuchara de madera junto a raíces frescas de cúrcuma cortadas, vista cenital. / *Ground turmeric heaped on a wooden spoon next to fresh cut turmeric roots, overhead view.* |
| `producto-curcuma-detalle.png` | Macro extremo del polvo fino de cúrcuma color naranja dorado, textura aterciopelada con pequeños montículos. / *Extreme macro of fine golden-orange turmeric powder, velvety texture with small mounds.* |
| `producto-curcuma-uso.png` | Taza de leche dorada (golden milk) humeante con espolvoreado de cúrcuma, junto al frasco abierto, luz cálida de tarde. / *Steaming golden milk latte dusted with turmeric, open jar beside it, warm afternoon light.* |

## 3. MIX ANDINO PREMIUM → `producto-mix-andino-premium/`

| Archivo | Prompt |
|---|---|
| `producto-mix-vista1.png` | Bolsa artesanal transparente con etiqueta kraft llena de mix de frutos secos y frutas deshidratadas (nueces, castañas, pasas, aguaymanto), de pie, toma frontal. / *Clear artisanal pouch with kraft label filled with premium trail mix (walnuts, Brazil nuts, raisins, golden berries), standing, front shot.* |
| `producto-mix-vista2.png` | Mix premium esparcido generosamente sobre superficie de madera: nueces, pecanas, castañas, pasas rubias y morenas, aguaymanto deshidratado, vista cenital. / *Premium mix scattered generously on wood: walnuts, pecans, Brazil nuts, golden and dark raisins, dried golden berries, overhead view.* |
| `producto-mix-detalle.png` | Macro extremo de frutos secos y pasas mezclados, texturas contrastantes, tonos marrones cálidos y dorados. / *Extreme macro of mixed nuts and raisins, contrasting textures, warm brown and golden tones.* |
| `producto-mix-uso.png` | Mano tomando un puñado de mix de frutos secos desde un bowl de madera, escena de merienda casual, luz natural. / *Hand grabbing a handful of trail mix from a wooden bowl, casual snack scene, natural light.* |

## 4. INFUSIÓN NATURAL → `producto-infusion-natural/`

| Archivo | Prompt |
|---|---|
| `producto-infusion-vista1.png` | Bolsa kraft con ventana transparente mostrando hierbas secas andinas (muña, manzanilla, anís), de pie sobre madera clara, toma frontal. / *Kraft pouch with clear window showing dried Andean herbs (muña mint, chamomile, anise), standing on light wood, front shot.* |
| `producto-infusion-vista2.png` | Hierbas secas sueltas dispuestas en pequeños montones sobre lino beige: flores de manzanilla, hojas de muña, estrellas de anís, vista cenital. / *Loose dried herbs in small piles on beige linen: chamomile flowers, muña leaves, star anise, overhead view.* |
| `producto-infusion-detalle.png` | Macro extremo de flores de manzanilla secas y hojas aromáticas, textura delicada, tonos verde seco y amarillo. / *Extreme macro of dried chamomile flowers and aromatic leaves, delicate texture, dry green and yellow tones.* |
| `producto-infusion-uso.png` | Taza de vidrio con infusión dorada humeante e infusor de hierbas, hierbas secas alrededor, luz cálida de tarde, ambiente acogedor. / *Glass cup of steaming golden herbal tea with infuser, dried herbs scattered around, warm afternoon light, cozy mood.* |

---

## Consejos finales

- **Genera las 4 imágenes de un mismo producto en la misma sesión/chat** para mantener coherencia.
- Si el generador lo permite (Midjourney `--sref`, o "usar como referencia"), usa la `vista1`
  aprobada como referencia de estilo para las otras 3 vistas.
- Renombra cada archivo exactamente como aparece en la tabla y colócalo en su carpeta:
  `assets/img/producto/<carpeta>/<archivo>.png`
- Cuando estén listas, avísame y creo las 4 fichas de producto conectadas a estas imágenes.
