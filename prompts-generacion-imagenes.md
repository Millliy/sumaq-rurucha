# PROMPT MAESTRO — Generación en bloque de imágenes de producto
## Sumaq Rurucha · E-commerce de alimentos andinos peruanos

> **Instrucción para la IA de generación de imágenes:**
> Genera las imágenes de TODOS los productos listados abajo y guárdalas siguiendo
> exactamente la estructura de carpetas indicada. Cada producto tiene su carpeta
> con su nombre. Usa siempre el BLOQUE DE ESTILO GLOBAL + la plantilla de vista
> correspondiente, rellenando `[PRODUCTO]`, `[CONTENIDO]` y `[USO]` con los datos
> de la tabla de cada producto.

---

## 1. ESTRUCTURA DE CARPETAS Y ARCHIVOS (obligatoria)

Carpeta raíz: `D:\DISEÑO INTERACTIVO\SumaqRurucha\productos\`

Por cada producto crear una carpeta con su nombre (columna **Carpeta** de las tablas)
y dentro **3 archivos** (4 para los productos de la sección 6):

```text
productos/
└── <carpeta-del-producto>/
    ├── detalle.png       ← vista macro del contenido
    ├── perspectiva.png   ← empaque en ángulo 3/4
    └── uso.png           ← lifestyle / producto preparado
```

**Especificaciones de todas las imágenes:**
- Formato: PNG, cuadrado 1:1, mínimo 1120 × 1120 px
- La columna **Imagen de referencia** de cada producto es la foto real del empaque
  (ruta relativa a `D:\DISEÑO INTERACTIVO\SumaqRurucha\`). Úsala SIEMPRE como imagen
  de referencia para que el empaque, etiqueta y colores salgan idénticos al real.

---

## 2. BLOQUE DE ESTILO GLOBAL (anteponer a todo prompt)

> Fotografía profesional de producto para e-commerce de alimentos andinos peruanos
> artesanales. Luz natural cálida y suave desde un costado, fondo limpio en tonos
> crema y beige (#f8f4ed), superficie de madera clara o textil andino sutil.
> Estética rústica-premium, colores tierra con acentos vino tinto (#7a1f3d).
> Alta nitidez, profundidad de campo suave, sin texto sobreimpreso, sin logos
> inventados, sin personas salvo que se indique. Formato cuadrado 1:1.

---

## 3. PLANTILLAS DE LAS 3 VISTAS

### Vista A — `detalle.png` (macro del contenido)
> Usando la imagen adjunta como referencia del producto: fotografía macro extrema
> de [CONTENIDO] en primer plano, sin empaque, mostrando textura, color y calidad.
> Iluminación natural suave lateral, fondo beige desenfocado, profundidad de campo
> muy corta, alta nitidez en el centro. Sin manos.

### Vista B — `perspectiva.png` (empaque en ángulo)
> Usando la imagen adjunta como referencia EXACTA del empaque: el mismo envase de
> [PRODUCTO] fotografiado en ángulo de tres cuartos (rotado ~30°), de pie sobre
> superficie de madera clara, mostrando volumen y lateral del empaque. Mantener
> idénticos el diseño, colores y etiqueta del empaque de referencia. Sombra suave.

### Vista C — `uso.png` (lifestyle / preparado)
> Fotografía editorial de estilo de vida: [USO] servido en cerámica artesanal sobre
> mesa de madera clara con textil andino sutil, luz natural de mañana, ambiente
> cálido y saludable. El empaque de [PRODUCTO] (idéntico a la referencia adjunta)
> aparece parcialmente visible al fondo, desenfocado.

---

## 4. TABLA DE PRODUCTOS

### CEREALES

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `ajonjoli-tostado` | assets/img/catalogo/Cereales/cereales-ajonjoli-tostado-100g.png | semillas de ajonjolí tostado, doradas y brillantes | pan artesanal y ensalada espolvoreados con ajonjolí tostado |
| `ajonjoli-blanca` | assets/img/catalogo/Cereales/cereales-ajonjoli-blanca-100g.png | semillas de ajonjolí blanco crudas, color marfil | bowl de tahini casero con pan pita y semillas alrededor |
| `chia-en-granos` | assets/img/catalogo/Cereales/cereales-chia-gramos-500g.png | semillas de chía negras y grises diminutas | pudín de chía con leche, mango y arándanos en vaso de vidrio |
| `crema-de-habas` | assets/img/catalogo/Cereales/cereales-Crema-de-habas-100g.png | polvo fino de habas color amarillo pálido | plato hondo de crema de habas caliente con hierbas frescas |
| `harina-de-arvejas` | assets/img/catalogo/Cereales/cereales-Harina-de-arvejas-100g.png | harina fina de arvejas color verde pálido | sopa cremosa de arvejas servida con pan rústico |
| `harina-de-canihua` | assets/img/catalogo/Cereales/cereales-Harina-de-cañihua-100g.png | harina de cañihua color marrón claro tostado | panqueques de cañihua con miel y plátano |
| `harina-de-quinua-tostada` | assets/img/catalogo/Cereales/cereales-Harina-de-quinua-tostada-100g.png | harina de quinua tostada color beige dorado | bebida caliente de quinua en taza artesanal con canela |
| `hojuela-de-kiwicha-organica` | assets/img/catalogo/Cereales/cereales-Hojuela-de-kiwicha-orgánica-100g.png | hojuelas finas y ligeras de kiwicha | bowl de desayuno con hojuelas de kiwicha, leche y fruta fresca |
| `hojuelas-de-quinua` | assets/img/catalogo/Cereales/cereales-hojuelasdequinua-100g.png | hojuelas de quinua doradas y ligeras | porridge cremoso de hojuelas de quinua con frutos rojos |
| `kiwicha` | assets/img/catalogo/Cereales/cereales-kiwicha-100g.png | granos diminutos de kiwicha color crema | turrón artesanal de kiwicha inflada con miel |

### DESHIDRATADOS

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `aguaymanto-fino` | assets/img/catalogo/Deshidratados/deshidratados-Aguaymanto-Fino-100g.png | aguaymanto deshidratado color naranja intenso, arrugado y brillante | ensalada verde con aguaymanto deshidratado y queso fresco |
| `arandanos-deshidratados` | assets/img/catalogo/Deshidratados/deshidratados-Arándanos-deshidratados-100g.png | arándanos deshidratados color púrpura oscuro | yogurt con granola y arándanos deshidratados en vaso |
| `coco-rallado-grueso` | assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-grueso-100g.png | hojuelas gruesas de coco blanco rallado | trufas de chocolate rebozadas en coco rallado grueso |
| `guindones` | assets/img/catalogo/Deshidratados/deshidratados-Guindones-100g.png | guindones (ciruelas pasas) oscuros y carnosos | compota de guindones en copa con crema |
| `higo` | assets/img/catalogo/Deshidratados/deshidratados-Higo-100g.png | higos deshidratados enteros color marrón violáceo | tabla de quesos con higos deshidratados y nueces |
| `higos-secos` | assets/img/catalogo/Deshidratados/deshidratados-Higos-Secos-100g.png | higos secos partidos mostrando su interior rojizo con semillas | tostada con queso ricotta, higos secos y miel |
| `kiwi-deshidratado` | assets/img/catalogo/Deshidratados/Deshidratados-kiwi-100g.png | rodajas de kiwi deshidratado color verde translúcido | jarra de agua infusionada con rodajas de kiwi deshidratado |
| `pera-deshidratada` | assets/img/catalogo/Deshidratados/deshidratados-Pera-deshidradata-100g.png | láminas de pera deshidratada color dorado pálido | avena caliente con láminas de pera deshidratada y canela |
| `toronja-deshidratada` | assets/img/catalogo/Deshidratados/deshitrados-toronja-dishidratado-100g.png | rodajas de toronja deshidratada color rosado translúcido | té helado decorado con rodajas de toronja deshidratada |

### ESPECIAS

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `airampo` | assets/img/catalogo/Especias/Especias-Airampo-100g.png | semillas de airampo color rojo carmín intenso | refresco andino de airampo color fucsia en vaso de vidrio |
| `aji-amarillo` | assets/img/catalogo/Especias/Especias-Aji-amarillo-100g.png | ají amarillo seco entero color naranja amarillento | causa limeña con salsa de ají amarillo |
| `aji-panca` | assets/img/catalogo/Especias/Especias-Ají-panca-100g.png | ají panca seco entero color rojo oscuro profundo | anticuchos marinados en adobo de ají panca |
| `aji-panca-molido` | assets/img/catalogo/Especias/Especias-ají-panca-molido-100g.png | polvo de ají panca color rojo ladrillo | guiso peruano con ají panca molido en olla de barro |
| `anis` | assets/img/catalogo/Especias/Especias-Anís-100g.png | semillas de anís pequeñas color verde grisáceo | infusión de anís humeante en taza de vidrio con semillas |
| `bicarbonato` | assets/img/catalogo/Especias/Especias-bicarbonato-100g.png | polvo blanco fino de bicarbonato | mesa de repostería con bizcocho esponjoso y bicarbonato en cuchara |
| `canela-molida` | assets/img/catalogo/Especias/Especias-canela-molida-100g.png | canela molida color marrón rojizo con ramas de canela | chocolate caliente espolvoreado con canela molida |
| `clavo-de-olor` | assets/img/catalogo/Especias/Especias-Clavo-de-olor-100g.png | clavos de olor enteros color marrón oscuro | vino caliente especiado con clavos de olor y naranja |

### FRUTOS SECOS

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `almendras` | assets/img/catalogo/Frutos secos/Fruto-secos-Almendras-100g.png | almendras enteras crudas color marrón claro | bowl de almendras como snack junto a leche de almendras |
| `caju-cruda` | assets/img/catalogo/Frutos secos/Fruto-secos-cajú-cruda-100g.png | castañas de cajú crudas color marfil curvadas | crema de cajú untada en tostada integral |
| `caju-tostado` | assets/img/catalogo/Frutos secos/Fruto-secos-cajú-tostado-100g.png | castañas de cajú tostadas doradas | salteado asiático con cajú tostado en sartén |
| `castana` | assets/img/catalogo/Frutos secos/Fruto-secos-castaña-100g.png | castañas amazónicas enteras color crema | bowl de castañas con chocolate oscuro en trozos |
| `nueces` | assets/img/catalogo/Frutos secos/Fruto-secos-nueces-100g.png | nueces peladas en mitades color marrón dorado | brownie casero con nueces sobre tabla de madera |
| `pecanas` | assets/img/catalogo/Frutos secos/Fruto-secos-Pecanas-100g.png | pecanas en mitades color marrón rojizo | tarta de pecanas con miel recién horneada |
| `pistachos` | assets/img/catalogo/Frutos secos/Fruto-secos-pistachos-100g.png | pistachos con cáscara entreabierta verde y beige | helado artesanal de pistacho con pistachos triturados |
| `sacha-inchi` | assets/img/catalogo/Frutos secos/Fruto-secos-sacha-inca-100g.png | semillas de sacha inchi tostadas en forma de estrella | snack de sacha inchi en bowl pequeño junto a laptop, break saludable |
| `pasas-morenas-importadas` | assets/img/catalogo/Frutos secos/Fruto-secos-Pasas-morenas-importadas-grandes-100g.png | pasas morenas grandes y carnosas | arroz árabe con pasas morenas en plato hondo |
| `pasas-morenas-nacionales` | assets/img/catalogo/Frutos secos/Fruto-secos-pasas-morenas-nacionales-100g.png | pasas morenas medianas color marrón oscuro | panetón artesanal en rodajas mostrando pasas |
| `pasas-rubias-pequenas` | assets/img/catalogo/Frutos secos/Fruto-secos-Pasas-rubias-pequeñas-100g.png | pasas rubias pequeñas color ámbar dorado | ensalada de zanahoria rallada con pasas rubias |
| `semillas-de-calabaza` | assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-calabaza-100g.png | semillas de calabaza peladas color verde oliva | sopa de zapallo decorada con semillas de calabaza tostadas |

### MIXES PARA TI

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `mixes-saludables` | assets/img/catalogo/Mixes para ti/mixes-saludables.png | mezcla de frutos secos, semillas y frutas deshidratadas variadas | persona sirviendo mix saludable en bowl antes de hacer yoga, luz de mañana |
| `mixes-premium` | assets/img/catalogo/Mixes para ti/Mixes-premium.png | mezcla premium de nueces, pecanas, castañas, arándanos y aguaymanto | tabla de picoteo elegante con mix premium y copa de vino |
| `mixes-energeticos` | assets/img/catalogo/Mixes para ti/Mixes-energéticos.png | mezcla energética de maní, pasas, cajú y chocolate en trozos | mochila de trekking con mix energético en bolsa abierta, contexto outdoor andino |

---

## 5. PRODUCTOS DEL HOME (generar 4 vistas: agregar `principal.png`)

Estos 4 productos solo tienen foto ambiental del home. Además de las 3 vistas
estándar, generar `principal.png`: **empaque frontal centrado, de pie, fondo beige
limpio, estilo idéntico a las fotos de catálogo existentes** (bolsa artesanal kraft
o doypack con ventana, coherente con la referencia).

| Carpeta | Imagen de referencia | [CONTENIDO] | [USO] |
|---|---|---|---|
| `mango-deshidratado` | assets/img/home/03-mini-mango-deshidratado.png | tiras de mango deshidratado color ámbar dorado, fibrosas y brillantes | bowl de yogurt con granola y tiras de mango deshidratado |
| `curcuma-molida` | assets/img/home/04-mini-curcuma.png | polvo fino de cúrcuma color naranja dorado intenso | taza de leche dorada (golden milk) humeante espolvoreada con cúrcuma |
| `mix-andino-premium` | assets/img/home/05-mini-miel-andina.png | mezcla premium de frutos secos andinos y frutas deshidratadas | mano tomando un puñado de mix desde bowl de madera, merienda casual |
| `infusion-natural` | assets/img/home/06-mini-infusion.png | hierbas secas andinas: muña, manzanilla y anís estrella | taza de vidrio con infusión dorada humeante e infusor, ambiente acogedor |

---

## 6. CHECKLIST FINAL PARA LA IA GENERADORA

- [ ] 42 productos de catálogo × 3 imágenes = **126 imágenes**
- [ ] 4 productos del home × 4 imágenes = **16 imágenes**
- [ ] **Total: 142 imágenes en 46 carpetas**
- [ ] Todas cuadradas 1:1, mínimo 1120 × 1120 px, formato PNG
- [ ] Nombres de archivo exactos: `detalle.png`, `perspectiva.png`, `uso.png` (+ `principal.png` sección 5)
- [ ] Nombres de carpeta exactos según columna "Carpeta" (minúsculas, guiones, sin tildes ni ñ)
- [ ] Empaque siempre idéntico a la imagen de referencia del producto
- [ ] Mismo estilo de luz, fondo y paleta en TODAS las imágenes
