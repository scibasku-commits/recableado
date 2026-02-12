---
title: "He buceado con tiburones martillo. Hoy luché con una base de datos."
description: "O cómo un agente de viajes que perdió 20 kilos decidió también perder 2 bases de datos"
pubDate: 2026-02-09
tags: ["🔥 Ahora", "🛠️ Taller", "😂 Anécdota"]
heroImage: ""
translationKey: "sharks-databases"
---

Hay una cosa que no te cuentan cuando decides reinventarte a los 72: que despegar se parece mucho a soltar lastre.

He perdido 20 kilos en los últimos meses. Literalmente. Dieta, bicicleta, dejar el gin tonic (eso ya lo conté). El médico está contento. Yo estoy contento. Mi bicicleta, probablemente también.

Pero resulta que perder peso no fue suficiente. También tenía que perder bases de datos.

## Cinco bases de datos. Yo creía que tenía una.

Cuando me senté con Claude a auditar mi sistema de gestión —ese sistema que llevo construyendo a trompicones desde que descubrí que la IA puede hacer cosas más útiles que escribir poemas sobre atardeceres—, descubrí algo fascinante.

Tenía cinco bases de datos en Airtable.

Cinco.

Yo creía que tenía una. Quizás dos, siendo generoso. Pero cinco es el número de un hombre que ha ido creando tablas como quien abre pestañas en el navegador: con entusiasmo y sin intención de cerrar ninguna.

La primera era mi CRM. Expedientes de clientes, destinos, fechas. Legítima. Necesaria. Correcta. Hasta aquí, todo bien.

La segunda era un catálogo de cruceros de buceo. 74 barcos. 31 rutas. Datos reales. Útil. Me hizo sentir un poco profesional.

La tercera... bueno, la tercera era la misma que la segunda pero en otro formato. Como quien tiene el mismo jersey en azul marino y en azul oscuro y jura que son diferentes.

La cuarta era una "demo" que creé un día para probar algo. Tenía campos que se llamaban "Nmbre" y "Apllido". Sin la e. Sin la e, por favor. La había creado a las once de la noche, claramente.

Y la quinta era un CSV importado que en algún momento pensé que necesitaría "por si acaso". El "por si acaso" nunca llegó. El CSV sí.

Cinco bases. 42 años vendiendo viajes y mi infraestructura digital parecía el cajón de esa cómoda que todos tenemos: el que no abres nunca pero sabes que ahí dentro hay un cargador de Nokia, tres bolígrafos sin tinta y una pila que no sabes si es nueva o usada.

## La contraseña era literalmente PENDIENTE

Pero lo mejor no fueron las bases de datos fantasma. Lo mejor fue la contraseña.

Llevaba dos meses intentando conectar Airtable con Claude. Dos meses. El token de acceso —esa llave digital que permite que un sistema hable con otro— no funcionaba. Probaba, fallaba. Probaba otra vez, fallaba otra vez. Cambiaba una cosa, rompía otra.

Un martes a las once de la noche, después de un enésimo intento fallido, me levanté de la silla, fui a la cocina, me serví un vaso de agua (en otra época habría sido un Larios) y emití un sonido que mi vecina probablemente interpretó como un grito existencial.

Lo era.

El problema, descubrí al día siguiente con la cabeza fría y la ayuda de Claude, era que estaba usando un token antiguo. Uno que había expirado hacía semanas. La nueva clave llevaba todo ese tiempo esperándome en un archivo de configuración, guardada, lista, funcional.

Era como buscar las llaves del coche durante una hora y descubrir que estaban en el bolsillo de la chaqueta que llevas puesta. Ese nivel de humillación productiva.

Cuando por fin conecté el token correcto —`pat2iGc08...` para los curiosos técnicos— fue como si alguien hubiera encendido las luces en una habitación donde llevaba meses tropezando con los muebles. De repente, Claude podía leer mis datos. Y lo primero que hizo fue decirme, con esa educación británica que tienen las IAs, que tenía cinco bases de datos y que dos de ellas no servían para nada.

Gracias, Claude. Muy amable.

## De 5 a 3 y 141 campos después

La limpieza fue quirúrgica. Bueno, tan quirúrgica como puede ser un señor de 72 años decidiendo qué bases de datos merecen vivir. Fue más bien como esos programas de Marie Kondo pero para nerds.

"¿Esta base de datos te produce alegría?"

"No."

"Pues fuera."

Eliminamos la base duplicada de rutas. Eliminamos la demo con los campos sin vocales. Y lo que quedó fueron tres bases limpias, organizadas, con sentido:

**El CRM** — 17 expedientes reales, 27 campos cada uno. Clientes, destinos, fechas, estados. Todo lo que necesito para gestionar un viaje desde la primera llamada hasta el "Giora, ha sido el mejor viaje de mi vida".

**Los presupuestos** — Tres tablas interconectadas. Presupuestos, líneas de desglose, opciones de precio. Para cuando un cliente quiere saber exactamente por qué Maldivas cuesta lo que cuesta (spoiler: porque las Maldivas están lejos y son bonitas).

**El catálogo de buceo** — 74 liveaboards con sus fotos, sus highlights, sus precios. 31 rutas con temporadas y niveles. Esta base es mi orgullo secreto. Porque si hay algo que sé hacer después de 42 años, es saber exactamente en qué barco tienes que subirte para ver tiburones martillo en Galápagos, mantas en Maldivas o mandarinfish en Filipinas.

En total: 141 campos auditados. Cada uno verificado, tipado, documentado. Sé qué hay en cada celda, qué formato tiene y para qué sirve. Es la primera vez en mi vida que puedo decir eso de mi sistema informático.

141 campos. Suena a mucho. Pero es que un viaje tiene muchas piezas: el vuelo, el hotel, el transfer, el seguro, las fechas, las preferencias del cliente, si quiere ventanilla o pasillo, si es alérgico a algo, si su aniversario cae durante el viaje y hay que preparar algo especial. Cada campo es un detalle. Y los detalles son lo que separa un viaje bueno de uno que tu cliente cuenta en todas las cenas durante los próximos cinco años.

## Soltar lastre, despegar

Así que aquí estoy. 20 kilos menos. 2 bases de datos menos. Un token que funciona. Y 141 campos que por primera vez en mi vida puedo ver, tocar y entender sin tener que llamar a nadie.

No sé si esto es lo que la gente llama "transformación digital". Suena demasiado grandilocuente para un señor que básicamente pasó de tener un cajón revuelto a tener tres estantes ordenados. Pero funciona. Y cuando algo funciona, no necesita un nombre bonito.

He buceado con tiburones martillo en Darwin, corrientes que te arrastraban como si fueras una hoja. Eso da miedo. Pero también da miedo abrir una base de datos a las once de la noche y descubrir que llevas meses alimentando una tabla que se llama "Imported table" y tiene cero registros.

El miedo es el mismo. La adrenalina, curiosamente, también.

La diferencia es que de los tiburones sales con una historia que contar. De una auditoría de Airtable sales con un sistema que funciona.

Y honestamente, a los 72 años, las dos cosas me parecen igual de valiosas.

---

*Giora | Viajes Scibasku | CICMA 2283*
