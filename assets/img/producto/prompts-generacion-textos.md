# PROMPT MAESTRO — Generación en masa de textos de fichas de producto
## Sumaq Rurucha · E-commerce de alimentos andinos peruanos

> **Instrucción para la IA de texto:**
> Genera las fichas de producto de TODOS los productos listados en la sección 3,
> en un único archivo JSON, siguiendo EXACTAMENTE la estructura de la sección 2.
> Los campos marcados como FIJOS ya vienen dados en el listado (cópialos tal cual).
> Los campos marcados como GENERAR los redactas tú siguiendo las reglas de tono.

---

## 1. TONO Y REGLAS DE REDACCIÓN

- Marca peruana artesanal-premium: cercana, honesta, sin exagerar.
- Español de Perú. Menciona origen andino/regional cuando aplique (Puno, Cusco,
  valles interandinos, Amazonía para castaña/sacha inchi, costa norte para mango).
- `description`: 2-3 oraciones. Qué es, de dónde viene, qué lo hace especial.
- `usage`: 1-2 oraciones prácticas. Cómo consumirlo o en qué recetas.
- `badge`: elegir UNA: "TOP VENTAS", "NUEVO", "ORGÁNICO", "CLÁSICO", "RECOMENDADO".
- `rating`: número entre 4.5 y 4.9 (un decimal), variado entre productos.
- `reviews`: entre 80 y 320, formato "N reseñas verificadas", variado.
- `facts`: siempre las 4 filas con estos labels exactos:
  "Ingredientes", "Origen", "Cocción", "Conservación".
  Para productos listos para comer usar Cocción: "Listo para consumo".
- NO inventes certificaciones ni beneficios medicinales.

---

## 2. ESTRUCTURA JSON (una entrada por producto, clave = slug)

```json
{
  "slug-del-producto": {
    "slug": "slug-del-producto",                    // FIJO (columna Slug)
    "category": "Cereales",                          // FIJO (columna Categoría)
    "breadcrumbs": ["Inicio", "Catálogo", "<Categoría>", "<Título>"],  // construir
    "title": "Título del producto",                  // FIJO (columna Producto)
    "badge": "TOP VENTAS",                           // GENERAR
    "rating": "4.8",                                 // GENERAR (string)
    "reviews": "184 reseñas verificadas",            // GENERAR
    "price": "S/ 14",                                // FIJO (columna Precio)
    "presentationTitle": "PRESENTACIÓN",             // FIJO (siempre este texto)
    "presentations": [                               // FIJO (columna Presentaciones)
      { "label": "Bolsa 100 g", "selected": true },
      { "label": "Bolsa 250 g" },
      { "label": "Bolsa 500 g" }
    ],
    "availability": "En stock",                      // FIJO (siempre)
    "quantity": 1,                                   // FIJO (siempre 1)
    "description": "…",                              // GENERAR (2-3 oraciones)
    "usage": "…",                                    // GENERAR (1-2 oraciones)
    "facts": [                                       // GENERAR values, labels fijos
      { "label": "Ingredientes", "value": "100% …" },
      { "label": "Origen", "value": "…, Perú" },
      { "label": "Cocción", "value": "…" },
      { "label": "Conservación", "value": "Lugar fresco y seco" }
    ]
  }
}
```

**Ejemplo real ya existente en el sitio (úsalo como referencia de calidad):**

```json
{
  "quinua-real-blanca": {
    "slug": "quinua-real-blanca",
    "category": "Cereales",
    "breadcrumbs": ["Inicio", "Catálogo", "Cereales", "Quinua real blanca"],
    "title": "Quinua real blanca",
    "badge": "TOP VENTAS",
    "rating": "4.9",
    "reviews": "312 reseñas verificadas",
    "price": "S/ 24",
    "presentationTitle": "PRESENTACIÓN",
    "presentations": [
      { "label": "Bolsa 100 g", "selected": true },
      { "label": "Bolsa 250 g" },
      { "label": "Bolsa 500 g" }
    ],
    "availability": "En stock",
    "quantity": 1,
    "description": "Quinua real blanca cultivada en comunidades del altiplano de Puno, a más de 3,800 m s.n.m. Grano grande, de cocción rápida y sabor limpio.",
    "usage": "Ideal para ensaladas, bowls, guarniciones calientes o como reemplazo de arroz.",
    "facts": [
      { "label": "Ingredientes", "value": "100% quinua" },
      { "label": "Origen", "value": "Puno, Perú" },
      { "label": "Cocción", "value": "15 minutos" },
      { "label": "Conservación", "value": "Lugar fresco y seco" }
    ]
  }
}
```

**Regla de presentaciones:** salvo indicación distinta en la tabla, usar
`Bolsa 100 g (selected) / Bolsa 250 g / Bolsa 500 g`.

---

## 3. LISTADO DE PRODUCTOS FALTANTES (46)

### CEREALES (10)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `ajonjoli-tostado` | Ajonjolí tostado | Cereales | S/ 14 | estándar |
| `ajonjoli-blanca` | Ajonjolí blanca | Cereales | S/ 12 | Bolsa 100 g (selected) / Bolsa 1 kg — S/ 38 |
| `chia-en-granos` | Chía en granos | Cereales | S/ 26 | Bolsa 500 g (selected) / Bolsa 100 g / Bolsa 1 kg |
| `crema-de-habas` | Crema de habas | Cereales | S/ 11 | estándar |
| `harina-de-arvejas` | Harina de arvejas | Cereales | S/ 10 | estándar |
| `harina-de-canihua` | Harina de cañihua | Cereales | S/ 12 | estándar |
| `harina-de-quinua-tostada` | Harina de quinua tostada | Cereales | S/ 12 | estándar |
| `hojuela-de-kiwicha-organica` | Hojuela de kiwicha orgánica | Cereales | S/ 13 | Bolsa 100 g (selected) / Bolsa 1 kg — S/ 38 |
| `hojuelas-de-quinua` | Hojuelas de quinua | Cereales | S/ 13 | estándar |
| `kiwicha` | Kiwicha | Cereales | S/ 12 | estándar |

### DESHIDRATADOS (9)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `aguaymanto-fino` | Aguaymanto fino | Deshidratados | S/ 18 | estándar |
| `arandanos-deshidratados` | Arándanos deshidratados | Deshidratados | S/ 20 | estándar |
| `coco-rallado-grueso` | Coco rallado grueso | Deshidratados | S/ 12 | estándar |
| `guindones` | Guindones | Deshidratados | S/ 16 | estándar |
| `higo` | Higo | Deshidratados | S/ 15 | estándar |
| `higos-secos` | Higos secos | Deshidratados | S/ 15 | estándar |
| `kiwi-deshidratado` | Kiwi deshidratado | Deshidratados | S/ 18 | estándar |
| `pera-deshidratada` | Pera deshidratada | Deshidratados | S/ 17 | estándar |
| `toronja-deshidratada` | Toronja deshidratada | Deshidratados | S/ 17 | estándar |

### ESPECIAS (8)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `airampo` | Airampo | Especias | S/ 11 | estándar |
| `aji-amarillo` | Ají amarillo | Especias | S/ 13 | estándar |
| `aji-panca` | Ají panca | Especias | S/ 13 | estándar |
| `aji-panca-molido` | Ají panca molido | Especias | S/ 13 | estándar |
| `anis` | Anís | Especias | S/ 12 | estándar |
| `bicarbonato` | Bicarbonato | Especias | S/ 8 | estándar |
| `canela-molida` | Canela molida | Especias | S/ 15 | estándar |
| `clavo-de-olor` | Clavo de olor | Especias | S/ 14 | estándar |

### FRUTOS SECOS (12)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `almendras` | Almendras | Frutos secos | S/ 18 | estándar |
| `caju-cruda` | Cajú cruda | Frutos secos | S/ 20 | estándar |
| `caju-tostado` | Cajú tostado | Frutos secos | S/ 21 | estándar |
| `castana` | Castaña | Frutos secos | S/ 22 | estándar |
| `nueces` | Nueces | Frutos secos | S/ 20 | estándar |
| `pecanas` | Pecanas | Frutos secos | S/ 24 | estándar |
| `pistachos` | Pistachos | Frutos secos | S/ 26 | estándar |
| `sacha-inchi` | Sacha inchi | Frutos secos | S/ 18 | estándar |
| `pasas-morenas-importadas` | Pasas morenas importadas | Frutos secos | S/ 14 | estándar |
| `pasas-morenas-nacionales` | Pasas morenas nacionales | Frutos secos | S/ 12 | estándar |
| `pasas-rubias-pequenas` | Pasas rubias pequeñas | Frutos secos | S/ 13 | estándar |
| `semillas-de-calabaza` | Semillas de calabaza | Frutos secos | S/ 15 | estándar |

### MIXES PARA TI (3)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `mixes-saludables` | Mixes saludables | Mixes para ti | S/ 32 | Bolsa 250 g (selected) / Bolsa 500 g |
| `mixes-premium` | Mixes premium | Mixes para ti | S/ 36 | Bolsa 250 g (selected) / Bolsa 500 g |
| `mixes-energeticos` | Mixes energéticos | Mixes para ti | S/ 34 | Bolsa 250 g (selected) / Bolsa 500 g |

### PRODUCTOS DEL HOME (4)

| Slug | Producto | Categoría | Precio | Presentaciones |
|---|---|---|---|---|
| `mango-deshidratado` | Mango deshidratado | Deshidratados | S/ 18 | Pack 250 g (selected) / Bolsa 100 g |
| `curcuma-molida` | Cúrcuma molida | Especias | S/ 15 | Frasco 120 g (selected) / Bolsa 100 g |
| `mix-andino-premium` | Mix andino premium | Mixes para ti | S/ 32 | Bolsa 500 g (selected) / Bolsa 250 g |
| `infusion-natural` | Infusión natural | Especias | S/ 18 | Bolsa 50 g (selected) / Bolsa 100 g |

---

## 4. FORMATO DE ENTREGA

- Un único archivo: `fichas-productos.json`
- Objeto raíz con las **46 entradas**, clave = slug.
- JSON válido (UTF-8, comillas dobles, sin comentarios ni comas finales).
- Guardar en: `D:\DISEÑO INTERACTIVO\SumaqRurucha\productos\fichas-productos.json`
