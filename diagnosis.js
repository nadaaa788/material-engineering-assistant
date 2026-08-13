// ===== Failure Causes Database =====
// Each entry links a (category + failureType) combination
// to a list of likely engineering causes.
const failureCausesDB = [

  // ----- METALS -----
  {
    category: "metals",
    failureType: "fracture",
    causes: [
      {
        cause: {
          en: "Sudden overload beyond the material's yield or ultimate strength",
          ar: "حمولة مفاجئة تتجاوز حد المرونة أو المقاومة القصوى للمادة",
          fr: "Surcharge soudaine dépassant la limite d'élasticité ou la résistance ultime du matériau",
          es: "Sobrecarga repentina que supera el límite elástico o la resistencia última del material"
        },
        solution: {
          en: "Re-check load calculations and apply an adequate safety factor, or switch to a higher-strength alloy.",
          ar: "أعد التحقق من حسابات الحمولة وطبّق معامل أمان مناسب، أو استخدم سبيكة ذات مقاومة أعلى.",
          fr: "Revérifier les calculs de charge et appliquer un facteur de sécurité adéquat, ou opter pour un alliage à plus haute résistance.",
          es: "Revise los cálculos de carga y aplique un factor de seguridad adecuado, o utilice una aleación de mayor resistencia."
        }
      },
      {
        cause: {
          en: "Stress concentration at sharp corners, notches, or holes",
          ar: "تركّز الإجهاد عند الزوايا الحادة أو الشقوق أو الثقوب",
          fr: "Concentration de contrainte au niveau des angles vifs, entailles ou trous",
          es: "Concentración de esfuerzos en esquinas agudas, muescas u orificios"
        },
        solution: {
          en: "Redesign geometry with fillets and smooth transitions to reduce local stress peaks.",
          ar: "أعد تصميم الشكل الهندسي باستخدام انحناءات وانتقالات ناعمة لتقليل ذروة الإجهاد الموضعي.",
          fr: "Reconcevoir la géométrie avec des congés et des transitions douces pour réduire les pics de contrainte locaux.",
          es: "Rediseñe la geometría con radios de acuerdo y transiciones suaves para reducir los picos de esfuerzo local."
        }
      },
      {
        cause: {
          en: "Internal defect (void, inclusion, porosity) acting as a crack initiator",
          ar: "عيب داخلي (فراغ، شائبة، مسامية) يعمل كنقطة بداية للتشقق",
          fr: "Défaut interne (vide, inclusion, porosité) agissant comme amorce de fissure",
          es: "Defecto interno (vacío, inclusión, porosidad) que actúa como iniciador de grietas"
        },
        solution: {
          en: "Use non-destructive testing (X-ray, ultrasonic) during quality control to detect defects before service.",
          ar: "استخدم الفحص غير التخريبي (الأشعة السينية، الموجات فوق الصوتية) أثناء مراقبة الجودة لاكتشاف العيوب قبل الاستخدام.",
          fr: "Utiliser des essais non destructifs (rayons X, ultrasons) lors du contrôle qualité pour détecter les défauts avant la mise en service.",
          es: "Utilice ensayos no destructivos (rayos X, ultrasonido) durante el control de calidad para detectar defectos antes del servicio."
        }
      }
    ]
  },
  {
    category: "metals",
    failureType: "corrosion",
    causes: [
      {
        cause: {
          en: "Exposure to a corrosive or humid environment without adequate protection",
          ar: "التعرض لبيئة أكالة أو رطبة دون حماية كافية",
          fr: "Exposition à un environnement corrosif ou humide sans protection adéquate",
          es: "Exposición a un ambiente corrosivo o húmedo sin protección adecuada"
        },
        solution: {
          en: "Apply a protective coating (paint, galvanizing, or plating) suited to the environment.",
          ar: "استخدم طلاء واقيا (دهان، تجليف، أو طلاء معدني) مناسبا للبيئة.",
          fr: "Appliquer un revêtement protecteur (peinture, galvanisation ou placage) adapté à l'environnement.",
          es: "Aplique un recubrimiento protector (pintura, galvanizado o chapado) adecuado al ambiente."
        }
      },
      {
        cause: {
          en: "Galvanic corrosion from contact with a dissimilar metal",
          ar: "تآكل جلفاني ناتج عن التلامس مع معدن مختلف",
          fr: "Corrosion galvanique due au contact avec un métal dissemblable",
          es: "Corrosión galvánica por contacto con un metal diferente"
        },
        solution: {
          en: "Insulate contact points between dissimilar metals or use compatible metal pairings.",
          ar: "اعزل نقاط التلامس بين المعادن المختلفة أو استخدم أزواجا معدنية متوافقة.",
          fr: "Isoler les points de contact entre métaux dissemblables ou utiliser des associations de métaux compatibles.",
          es: "Aísle los puntos de contacto entre metales diferentes o use combinaciones de metales compatibles."
        }
      },
      {
        cause: {
          en: "Breakdown of a protective oxide layer or coating",
          ar: "انهيار طبقة الأكسيد أو الطلاء الواقي",
          fr: "Dégradation de la couche d'oxyde protectrice ou du revêtement",
          es: "Deterioro de la capa de óxido protectora o del recubrimiento"
        },
        solution: {
          en: "Select a more corrosion-resistant alloy (e.g. higher chromium content) or renew the coating periodically.",
          ar: "اختر سبيكة أكثر مقاومة للتآكل (مثل نسبة كروم أعلى) أو جدّد الطلاء بشكل دوري.",
          fr: "Choisir un alliage plus résistant à la corrosion (ex. teneur en chrome plus élevée) ou renouveler le revêtement périodiquement.",
          es: "Seleccione una aleación más resistente a la corrosión (por ejemplo, mayor contenido de cromo) o renueve el recubrimiento periódicamente."
        }
      }
    ]
  },
  {
    category: "metals",
    failureType: "fatigue",
    causes: [
      {
        cause: {
          en: "Repeated cyclic loading below the yield strength over time",
          ar: "حمولة دورية متكررة أقل من حد المرونة على مدى الزمن",
          fr: "Chargement cyclique répété en dessous de la limite d'élasticité sur la durée",
          es: "Carga cíclica repetida por debajo del límite elástico a lo largo del tiempo"
        },
        solution: {
          en: "Reduce peak stress amplitude or increase component cross-section to lower cyclic stress.",
          ar: "قلّل من ذروة سعة الإجهاد أو زد المقطع العرضي للجزء لتقليل الإجهاد الدوري.",
          fr: "Réduire l'amplitude de contrainte maximale ou augmenter la section du composant pour diminuer la contrainte cyclique.",
          es: "Reduzca la amplitud máxima del esfuerzo o aumente la sección del componente para disminuir el esfuerzo cíclico."
        }
      },
      {
        cause: {
          en: "Crack initiation at a surface flaw or machining mark",
          ar: "بداية التشقق عند عيب سطحي أو أثر تشغيل آلي",
          fr: "Amorçage de fissure au niveau d'un défaut de surface ou d'une marque d'usinage",
          es: "Inicio de grieta en un defecto superficial o marca de mecanizado"
        },
        solution: {
          en: "Improve surface finish (polishing, shot peening) to remove stress-raising surface flaws.",
          ar: "حسّن التشطيب السطحي (تلميع، قصف كروي) لإزالة العيوب السطحية المسببة للإجهاد.",
          fr: "Améliorer l'état de surface (polissage, grenaillage) pour éliminer les défauts de surface générateurs de contrainte.",
          es: "Mejore el acabado superficial (pulido, granallado) para eliminar defectos superficiales que elevan el esfuerzo."
        }
      },
      {
        cause: {
          en: "Vibration or repeated thermal cycling causing progressive damage",
          ar: "الاهتزاز أو التغيرات الحرارية المتكررة التي تسبب تلفا تدريجيا",
          fr: "Vibrations ou cycles thermiques répétés provoquant des dommages progressifs",
          es: "Vibración o ciclos térmicos repetidos que causan daño progresivo"
        },
        solution: {
          en: "Add vibration damping or isolate the component from cyclic thermal sources.",
          ar: "أضف تخميدا للاهتزاز أو اعزل الجزء عن مصادر التغير الحراري الدوري.",
          fr: "Ajouter un amortissement des vibrations ou isoler le composant des sources thermiques cycliques.",
          es: "Añada amortiguación de vibraciones o aísle el componente de las fuentes térmicas cíclicas."
        }
      }
    ]
  },
  {
    category: "metals",
    failureType: "wear",
    causes: [
      {
        cause: {
          en: "Continuous friction between contacting metal surfaces",
          ar: "احتكاك مستمر بين الأسطح المعدنية المتلامسة",
          fr: "Friction continue entre surfaces métalliques en contact",
          es: "Fricción continua entre superficies metálicas en contacto"
        },
        solution: {
          en: "Introduce a wear-resistant coating or bushing between contacting surfaces.",
          ar: "أضف طلاء أو بطانة مقاومة للتآكل بين الأسطح المتلامسة.",
          fr: "Introduire un revêtement ou une bague résistant à l'usure entre les surfaces en contact.",
          es: "Introduzca un recubrimiento o casquillo resistente al desgaste entre las superficies en contacto."
        }
      },
      {
        cause: {
          en: "Insufficient lubrication in moving mechanical parts",
          ar: "تشحيم غير كافٍ في الأجزاء الميكانيكية المتحركة",
          fr: "Lubrification insuffisante des pièces mécaniques mobiles",
          es: "Lubricación insuficiente en las piezas mecánicas móviles"
        },
        solution: {
          en: "Establish a proper lubrication schedule and use a lubricant rated for the operating conditions.",
          ar: "ضع جدولا مناسبا للتشحيم واستخدم مادة تشحيم ملائمة لظروف التشغيل.",
          fr: "Établir un calendrier de lubrification approprié et utiliser un lubrifiant adapté aux conditions de fonctionnement.",
          es: "Establezca un programa de lubricación adecuado y use un lubricante apto para las condiciones de operación."
        }
      },
      {
        cause: {
          en: "Presence of abrasive particles between sliding surfaces",
          ar: "وجود جسيمات كاشطة بين الأسطح المنزلقة",
          fr: "Présence de particules abrasives entre les surfaces glissantes",
          es: "Presencia de partículas abrasivas entre superficies deslizantes"
        },
        solution: {
          en: "Add sealing or filtration to keep abrasive contaminants away from moving parts.",
          ar: "أضف عزلا أو ترشيحا لإبعاد الملوثات الكاشطة عن الأجزاء المتحركة.",
          fr: "Ajouter une étanchéité ou une filtration pour éloigner les contaminants abrasifs des pièces mobiles.",
          es: "Añada sellado o filtración para mantener los contaminantes abrasivos alejados de las piezas móviles."
        }
      }
    ]
  },
  {
    category: "metals",
    failureType: "deformation",
    causes: [
      {
        cause: {
          en: "Load exceeding the elastic limit, causing permanent plastic deformation",
          ar: "حمولة تتجاوز الحد المرن، مما يسبب تشوها بلاستيكيا دائما",
          fr: "Charge dépassant la limite élastique, provoquant une déformation plastique permanente",
          es: "Carga que supera el límite elástico, provocando una deformación plástica permanente"
        },
        solution: {
          en: "Increase section thickness or switch to a material with a higher yield strength.",
          ar: "زد سماكة المقطع أو استخدم مادة ذات حد مرونة أعلى.",
          fr: "Augmenter l'épaisseur de la section ou utiliser un matériau à limite d'élasticité plus élevée.",
          es: "Aumente el espesor de la sección o utilice un material con mayor límite elástico."
        }
      },
      {
        cause: {
          en: "Prolonged exposure to high temperature, causing creep",
          ar: "التعرض المطوّل لدرجة حرارة عالية، مما يسبب الزحف",
          fr: "Exposition prolongée à une température élevée, provoquant du fluage",
          es: "Exposición prolongada a alta temperatura, causando fluencia (creep)"
        },
        solution: {
          en: "Select a creep-resistant alloy rated for the operating temperature, or reduce sustained load.",
          ar: "اختر سبيكة مقاومة للزحف ملائمة لدرجة حرارة التشغيل، أو قلّل الحمولة المستمرة.",
          fr: "Choisir un alliage résistant au fluage adapté à la température de service, ou réduire la charge soutenue.",
          es: "Seleccione una aleación resistente a la fluencia adecuada para la temperatura de servicio, o reduzca la carga sostenida."
        }
      },
      {
        cause: {
          en: "Insufficient material thickness or cross-section for the applied load",
          ar: "سماكة أو مقطع عرضي غير كافٍ للمادة بالنسبة للحمولة المطبقة",
          fr: "Épaisseur ou section insuffisante du matériau pour la charge appliquée",
          es: "Espesor o sección transversal insuficiente del material para la carga aplicada"
        },
        solution: {
          en: "Redesign the part with a larger cross-section or add reinforcing ribs.",
          ar: "أعد تصميم الجزء بمقطع عرضي أكبر أو أضف أضلاعا تقوية.",
          fr: "Reconcevoir la pièce avec une section plus grande ou ajouter des nervures de renfort.",
          es: "Rediseñe la pieza con una sección transversal mayor o añada nervaduras de refuerzo."
        }
      }
    ]
  },

  // ----- POLYMERS -----
  {
    category: "polymers",
    failureType: "fracture",
    causes: [
      {
        cause: {
          en: "Brittle failure at low temperature (below the glass transition point)",
          ar: "كسر هش عند درجة حرارة منخفضة (تحت درجة الانتقال الزجاجي)",
          fr: "Rupture fragile à basse température (en dessous de la température de transition vitreuse)",
          es: "Fallo frágil a baja temperatura (por debajo de la temperatura de transición vítrea)"
        },
        solution: {
          en: "Select a polymer grade rated for the minimum service temperature, or add impact modifiers.",
          ar: "اختر نوعا من البوليمر ملائما لأدنى درجة حرارة تشغيل، أو أضف معدّلات مقاومة للصدمات.",
          fr: "Choisir une nuance de polymère adaptée à la température de service minimale, ou ajouter des modificateurs anti-choc.",
          es: "Seleccione un grado de polímero apto para la temperatura mínima de servicio, o añada modificadores de impacto."
        }
      },
      {
        cause: {
          en: "Stress cracking caused by exposure to certain chemicals",
          ar: "تشقق إجهادي ناتج عن التعرض لبعض المواد الكيميائية",
          fr: "Fissuration sous contrainte causée par l'exposition à certains produits chimiques",
          es: "Agrietamiento por esfuerzo causado por la exposición a ciertos productos químicos"
        },
        solution: {
          en: "Verify chemical compatibility with the polymer, or switch to a more resistant grade.",
          ar: "تحقق من التوافق الكيميائي مع البوليمر، أو استخدم نوعا أكثر مقاومة.",
          fr: "Vérifier la compatibilité chimique avec le polymère, ou passer à une nuance plus résistante.",
          es: "Verifique la compatibilidad química con el polímero, o utilice un grado más resistente."
        }
      },
      {
        cause: {
          en: "Poor weld line or joint strength from manufacturing",
          ar: "ضعف خط اللحام أو قوة الوصلة الناتج عن التصنيع",
          fr: "Faible résistance de la ligne de soudure ou du joint due à la fabrication",
          es: "Baja resistencia en la línea de soldadura o unión debido a la fabricación"
        },
        solution: {
          en: "Optimize processing parameters (temperature, pressure) or redesign gate/joint locations.",
          ar: "حسّن معايير التصنيع (الحرارة، الضغط) أو أعد تصميم مواقع البوابة أو الوصلة.",
          fr: "Optimiser les paramètres de mise en œuvre (température, pression) ou repenser l'emplacement des points d'injection/joints.",
          es: "Optimice los parámetros de procesamiento (temperatura, presión) o rediseñe la ubicación de las compuertas/uniones."
        }
      }
    ]
  },
  {
    category: "polymers",
    failureType: "corrosion",
    causes: [
      {
        cause: {
          en: "Chemical degradation from prolonged contact with solvents or acids",
          ar: "تدهور كيميائي ناتج عن التلامس المطوّل مع المذيبات أو الأحماض",
          fr: "Dégradation chimique due à un contact prolongé avec des solvants ou des acides",
          es: "Degradación química por contacto prolongado con disolventes o ácidos"
        },
        solution: {
          en: "Choose a chemically resistant polymer grade suited to the specific fluid exposure.",
          ar: "اختر نوعا من البوليمر مقاوما كيميائيا مناسبا لنوع السائل المتعرض له.",
          fr: "Choisir une nuance de polymère chimiquement résistante adaptée au fluide spécifique.",
          es: "Elija un grado de polímero químicamente resistente adecuado a la exposición al fluido específico."
        }
      },
      {
        cause: {
          en: "UV exposure breaking down polymer chains over time",
          ar: "التعرض للأشعة فوق البنفسجية يكسر سلاسل البوليمر مع مرور الوقت",
          fr: "L'exposition aux UV dégrade les chaînes polymères au fil du temps",
          es: "La exposición a los rayos UV degrada las cadenas del polímero con el tiempo"
        },
        solution: {
          en: "Add UV stabilizers or use a protective coating/pigment for outdoor applications.",
          ar: "أضف مثبتات للأشعة فوق البنفسجية أو استخدم طلاء أو صبغة واقية للتطبيقات الخارجية.",
          fr: "Ajouter des stabilisants UV ou utiliser un revêtement/pigment protecteur pour les applications extérieures.",
          es: "Añada estabilizantes UV o utilice un recubrimiento/pigmento protector para aplicaciones exteriores."
        }
      },
      {
        cause: {
          en: "Environmental stress cracking under combined load and chemical exposure",
          ar: "تشقق إجهادي بيئي تحت تأثير الحمولة والتعرض الكيميائي معا",
          fr: "Fissuration sous contrainte environnementale due à la combinaison charge et exposition chimique",
          es: "Agrietamiento por esfuerzo ambiental bajo carga combinada con exposición química"
        },
        solution: {
          en: "Reduce sustained stress in service and avoid combining known aggressive chemicals with load.",
          ar: "قلّل الإجهاد المستمر أثناء الاستخدام وتجنّب الجمع بين المواد الكيميائية العدوانية والحمولة.",
          fr: "Réduire la contrainte soutenue en service et éviter de combiner des produits chimiques agressifs connus avec une charge.",
          es: "Reduzca el esfuerzo sostenido en servicio y evite combinar productos químicos agresivos conocidos con carga."
        }
      }
    ]
  },
  {
    category: "polymers",
    failureType: "fatigue",
    causes: [
      {
        cause: {
          en: "Repeated flexing causing progressive microcrack growth",
          ar: "الانثناء المتكرر يسبب نموا تدريجيا للشقوق الدقيقة",
          fr: "Flexions répétées entraînant une croissance progressive de microfissures",
          es: "La flexión repetida causa un crecimiento progresivo de microgrietas"
        },
        solution: {
          en: "Reduce flex amplitude or select a polymer with higher fatigue/flex resistance.",
          ar: "قلّل سعة الانثناء أو اختر بوليمرا ذا مقاومة أعلى للتعب والانثناء.",
          fr: "Réduire l'amplitude de flexion ou choisir un polymère à meilleure résistance à la fatigue/flexion.",
          es: "Reduzca la amplitud de flexión o elija un polímero con mayor resistencia a la fatiga/flexión."
        }
      },
      {
        cause: {
          en: "Heat build-up from cyclic loading due to poor thermal conductivity",
          ar: "تراكم الحرارة الناتج عن الحمولة الدورية بسبب ضعف التوصيل الحراري",
          fr: "Accumulation de chaleur due au chargement cyclique en raison d'une faible conductivité thermique",
          es: "Acumulación de calor por carga cíclica debido a la baja conductividad térmica"
        },
        solution: {
          en: "Lower the cyclic loading frequency or allow cooling periods between cycles.",
          ar: "قلّل تردد الحمولة الدورية أو اسمح بفترات تبريد بين الدورات.",
          fr: "Réduire la fréquence de chargement cyclique ou prévoir des périodes de refroidissement entre les cycles.",
          es: "Reduzca la frecuencia de carga cíclica o permita periodos de enfriamiento entre ciclos."
        }
      },
      {
        cause: {
          en: "Loss of elasticity from material aging",
          ar: "فقدان المرونة بسبب تقادم المادة",
          fr: "Perte d'élasticité due au vieillissement du matériau",
          es: "Pérdida de elasticidad por el envejecimiento del material"
        },
        solution: {
          en: "Add anti-aging stabilizers and plan periodic replacement based on service life.",
          ar: "أضف مثبتات مضادة للتقادم وخطّط لاستبدال دوري حسب عمر الخدمة.",
          fr: "Ajouter des stabilisants anti-vieillissement et planifier un remplacement périodique selon la durée de vie en service.",
          es: "Añada estabilizantes antienvejecimiento y planifique un reemplazo periódico según la vida útil."
        }
      }
    ]
  },
  {
    category: "polymers",
    failureType: "wear",
    causes: [
      {
        cause: {
          en: "Surface abrasion from repeated sliding contact",
          ar: "كشط سطحي ناتج عن التلامس الانزلاقي المتكرر",
          fr: "Abrasion de surface due à un contact glissant répété",
          es: "Abrasión superficial por contacto deslizante repetido"
        },
        solution: {
          en: "Use a wear-resistant polymer grade (e.g. filled with PTFE or glass fiber).",
          ar: "استخدم نوعا من البوليمر مقاوما للتآكل (مثل المحشو بـ PTFE أو ألياف زجاجية).",
          fr: "Utiliser une nuance de polymère résistante à l'usure (ex. chargée en PTFE ou fibre de verre).",
          es: "Utilice un grado de polímero resistente al desgaste (por ejemplo, con relleno de PTFE o fibra de vidrio)."
        }
      },
      {
        cause: {
          en: "Softening at elevated temperature increasing wear rate",
          ar: "التليّن عند درجة حرارة مرتفعة يزيد من معدل التآكل",
          fr: "Ramollissement à température élevée augmentant le taux d'usure",
          es: "El ablandamiento a temperatura elevada aumenta la tasa de desgaste"
        },
        solution: {
          en: "Select a polymer with a higher heat deflection temperature for this application.",
          ar: "اختر بوليمرا ذا درجة انحراف حراري أعلى لهذا التطبيق.",
          fr: "Choisir un polymère avec une température de déflexion thermique plus élevée pour cette application.",
          es: "Seleccione un polímero con mayor temperatura de deflexión térmica para esta aplicación."
        }
      },
      {
        cause: {
          en: "Degradation of surface finish from UV or chemical exposure",
          ar: "تدهور التشطيب السطحي بسبب التعرض للأشعة فوق البنفسجية أو المواد الكيميائية",
          fr: "Dégradation de l'état de surface due à l'exposition aux UV ou aux produits chimiques",
          es: "Degradación del acabado superficial por exposición a UV o productos químicos"
        },
        solution: {
          en: "Apply a protective coating or select a more resistant polymer for exposed surfaces.",
          ar: "طبّق طلاء واقيا أو اختر بوليمرا أكثر مقاومة للأسطح المعرّضة.",
          fr: "Appliquer un revêtement protecteur ou choisir un polymère plus résistant pour les surfaces exposées.",
          es: "Aplique un recubrimiento protector o elija un polímero más resistente para superficies expuestas."
        }
      }
    ]
  },
  {
    category: "polymers",
    failureType: "deformation",
    causes: [
      {
        cause: {
          en: "Creep under sustained load, common in polymers even at room temperature",
          ar: "الزحف تحت الحمولة المستمرة، شائع في البوليمرات حتى في درجة حرارة الغرفة",
          fr: "Fluage sous charge soutenue, courant chez les polymères même à température ambiante",
          es: "Fluencia bajo carga sostenida, común en polímeros incluso a temperatura ambiente"
        },
        solution: {
          en: "Reduce sustained stress or select a polymer with better creep resistance for the application.",
          ar: "قلّل الإجهاد المستمر أو اختر بوليمرا ذا مقاومة أفضل للزحف مناسبا للتطبيق.",
          fr: "Réduire la contrainte soutenue ou choisir un polymère à meilleure résistance au fluage pour l'application.",
          es: "Reduzca el esfuerzo sostenido o seleccione un polímero con mejor resistencia a la fluencia para la aplicación."
        }
      },
      {
        cause: {
          en: "Softening due to operating temperature approaching the glass transition point",
          ar: "التليّن بسبب اقتراب درجة حرارة التشغيل من نقطة الانتقال الزجاجي",
          fr: "Ramollissement dû à une température de service proche du point de transition vitreuse",
          es: "Ablandamiento debido a que la temperatura de servicio se acerca al punto de transición vítrea"
        },
        solution: {
          en: "Select a polymer grade with a higher glass transition temperature.",
          ar: "اختر نوعا من البوليمر ذا درجة انتقال زجاجي أعلى.",
          fr: "Choisir une nuance de polymère avec une température de transition vitreuse plus élevée.",
          es: "Seleccione un grado de polímero con mayor temperatura de transición vítrea."
        }
      },
      {
        cause: {
          en: "Insufficient stiffness for the applied load",
          ar: "صلابة غير كافية بالنسبة للحمولة المطبقة",
          fr: "Rigidité insuffisante pour la charge appliquée",
          es: "Rigidez insuficiente para la carga aplicada"
        },
        solution: {
          en: "Add reinforcing fillers (glass or carbon fiber) or increase wall thickness.",
          ar: "أضف حشوات تقوية (ألياف زجاجية أو كربونية) أو زد سماكة الجدار.",
          fr: "Ajouter des charges de renfort (fibre de verre ou de carbone) ou augmenter l'épaisseur de paroi.",
          es: "Añada cargas de refuerzo (fibra de vidrio o de carbono) o aumente el espesor de pared."
        }
      }
    ]
  },

  // ----- CERAMICS -----
  {
    category: "ceramics",
    failureType: "fracture",
    causes: [
      {
        cause: {
          en: "Brittle fracture from a small surface flaw or microcrack under load",
          ar: "كسر هش ناتج عن عيب سطحي صغير أو شق دقيق تحت الحمولة",
          fr: "Rupture fragile due à un petit défaut de surface ou une microfissure sous charge",
          es: "Fractura frágil por un pequeño defecto superficial o microgrieta bajo carga"
        },
        solution: {
          en: "Apply surface treatments (e.g. compressive glazing) and avoid surface damage during handling.",
          ar: "طبّق معالجات سطحية (مثل الطلاء الضاغط) وتجنّب إتلاف السطح أثناء المناولة.",
          fr: "Appliquer des traitements de surface (ex. glaçure en compression) et éviter d'endommager la surface lors de la manipulation.",
          es: "Aplique tratamientos superficiales (por ejemplo, vidriado a compresión) y evite dañar la superficie durante la manipulación."
        }
      },
      {
        cause: {
          en: "Thermal shock from rapid temperature change",
          ar: "صدمة حرارية ناتجة عن تغير سريع في درجة الحرارة",
          fr: "Choc thermique dû à un changement rapide de température",
          es: "Choque térmico por un cambio rápido de temperatura"
        },
        solution: {
          en: "Limit heating/cooling rates or select a ceramic with higher thermal shock resistance.",
          ar: "حدّ من معدلات التسخين والتبريد أو اختر سيراميكا ذا مقاومة أعلى للصدمة الحرارية.",
          fr: "Limiter les taux de chauffage/refroidissement ou choisir une céramique à meilleure résistance au choc thermique.",
          es: "Limite las tasas de calentamiento/enfriamiento o elija una cerámica con mayor resistencia al choque térmico."
        }
      },
      {
        cause: {
          en: "Impact loading, since ceramics have very low fracture toughness",
          ar: "حمولة صدمية، لأن السيراميك يتمتع بمتانة كسر منخفضة جدا",
          fr: "Charge d'impact, les céramiques ayant une très faible ténacité à la rupture",
          es: "Carga de impacto, ya que las cerámicas tienen una tenacidad a la fractura muy baja"
        },
        solution: {
          en: "Add protective housing or cushioning to avoid direct impact on the ceramic component.",
          ar: "أضف غطاء واقيا أو توسيدا لتجنّب الصدم المباشر على الجزء السيراميكي.",
          fr: "Ajouter un boîtier protecteur ou un amortisseur pour éviter tout impact direct sur le composant céramique.",
          es: "Añada una carcasa protectora o amortiguación para evitar el impacto directo sobre el componente cerámico."
        }
      }
    ]
  },
  {
    category: "ceramics",
    failureType: "corrosion",
    causes: [
      {
        cause: {
          en: "Chemical attack from strong acids or molten salts at high temperature",
          ar: "هجوم كيميائي من أحماض قوية أو أملاح منصهرة عند درجة حرارة عالية",
          fr: "Attaque chimique par des acides forts ou des sels fondus à haute température",
          es: "Ataque químico por ácidos fuertes o sales fundidas a alta temperatura"
        },
        solution: {
          en: "Select a ceramic grade with proven resistance to the specific chemical environment.",
          ar: "اختر نوعا من السيراميك ذا مقاومة مثبتة للبيئة الكيميائية المحددة.",
          fr: "Choisir une nuance de céramique à résistance prouvée pour l'environnement chimique spécifique.",
          es: "Seleccione un grado de cerámica con resistencia comprobada al ambiente químico específico."
        }
      },
      {
        cause: {
          en: "Slow degradation from prolonged exposure to a reactive environment",
          ar: "تدهور بطيء ناتج عن التعرض المطوّل لبيئة تفاعلية",
          fr: "Dégradation lente due à une exposition prolongée à un environnement réactif",
          es: "Degradación lenta por exposición prolongada a un ambiente reactivo"
        },
        solution: {
          en: "Apply a protective coating or schedule periodic inspection for early signs of attack.",
          ar: "طبّق طلاء واقيا أو خطّط لفحص دوري للكشف المبكر عن علامات التآكل.",
          fr: "Appliquer un revêtement protecteur ou planifier une inspection périodique pour détecter les premiers signes d'attaque.",
          es: "Aplique un recubrimiento protector o programe inspecciones periódicas para detectar signos tempranos de ataque."
        }
      },
      {
        cause: {
          en: "Grain boundary attack in a corrosive atmosphere",
          ar: "هجوم على حدود الحبيبات في جو أكال",
          fr: "Attaque des joints de grains dans une atmosphère corrosive",
          es: "Ataque en los límites de grano en una atmósfera corrosiva"
        },
        solution: {
          en: "Use a higher-purity ceramic grade with fewer grain boundary impurities.",
          ar: "استخدم نوعا من السيراميك ذا نقاء أعلى وشوائب أقل في حدود الحبيبات.",
          fr: "Utiliser une nuance de céramique de plus haute pureté avec moins d'impuretés aux joints de grains.",
          es: "Utilice un grado de cerámica de mayor pureza con menos impurezas en los límites de grano."
        }
      }
    ]
  },
  {
    category: "ceramics",
    failureType: "fatigue",
    causes: [
      {
        cause: {
          en: "Slow crack growth under cyclic or sustained load (static fatigue)",
          ar: "نمو بطيء للشقوق تحت حمولة دورية أو مستمرة (تعب ساكن)",
          fr: "Croissance lente de fissures sous charge cyclique ou soutenue (fatigue statique)",
          es: "Crecimiento lento de grietas bajo carga cíclica o sostenida (fatiga estática)"
        },
        solution: {
          en: "Reduce sustained stress levels and inspect regularly for crack initiation.",
          ar: "قلّل مستويات الإجهاد المستمر وافحص بانتظام لاكتشاف بداية التشقق.",
          fr: "Réduire les niveaux de contrainte soutenue et inspecter régulièrement l'amorçage de fissures.",
          es: "Reduzca los niveles de esfuerzo sostenido e inspeccione regularmente el inicio de grietas."
        }
      },
      {
        cause: {
          en: "Cyclic thermal stresses from repeated heating and cooling",
          ar: "إجهادات حرارية دورية ناتجة عن التسخين والتبريد المتكررين",
          fr: "Contraintes thermiques cycliques dues à des chauffages et refroidissements répétés",
          es: "Esfuerzos térmicos cíclicos por calentamiento y enfriamiento repetidos"
        },
        solution: {
          en: "Reduce thermal cycling rate or use a ceramic with better thermal shock resistance.",
          ar: "قلّل معدل الدورات الحرارية أو استخدم سيراميكا ذا مقاومة أفضل للصدمة الحرارية.",
          fr: "Réduire le taux de cyclage thermique ou utiliser une céramique à meilleure résistance au choc thermique.",
          es: "Reduzca la tasa de ciclado térmico o utilice una cerámica con mejor resistencia al choque térmico."
        }
      },
      {
        cause: {
          en: "Pre-existing microcracks growing progressively under repeated stress",
          ar: "شقوق دقيقة موجودة مسبقا تنمو تدريجيا تحت الإجهاد المتكرر",
          fr: "Microfissures préexistantes croissant progressivement sous contrainte répétée",
          es: "Microgrietas preexistentes que crecen progresivamente bajo esfuerzo repetido"
        },
        solution: {
          en: "Use proof-testing before service to screen out parts with critical flaws.",
          ar: "استخدم اختبار الإثبات قبل الاستخدام لاستبعاد الأجزاء ذات العيوب الحرجة.",
          fr: "Utiliser un essai de validation avant mise en service pour écarter les pièces présentant des défauts critiques.",
          es: "Utilice pruebas de validación antes del servicio para descartar piezas con defectos críticos."
        }
      }
    ]
  },
  {
    category: "ceramics",
    failureType: "wear",
    causes: [
      {
        cause: {
          en: "Surface erosion from abrasive particles or contact sliding",
          ar: "تآكل سطحي ناتج عن جسيمات كاشطة أو انزلاق التلامس",
          fr: "Érosion de surface due à des particules abrasives ou au glissement de contact",
          es: "Erosión superficial por partículas abrasivas o deslizamiento de contacto"
        },
        solution: {
          en: "Add a protective liner or reduce abrasive particle exposure at contact surfaces.",
          ar: "أضف بطانة واقية أو قلّل من تعرض أسطح التلامس للجسيمات الكاشطة.",
          fr: "Ajouter une doublure protectrice ou réduire l'exposition aux particules abrasives sur les surfaces de contact.",
          es: "Añada un revestimiento protector o reduzca la exposición a partículas abrasivas en las superficies de contacto."
        }
      },
      {
        cause: {
          en: "Grain pull-out at the surface under repeated contact stress",
          ar: "انتزاع الحبيبات من السطح تحت إجهاد التلامس المتكرر",
          fr: "Arrachement de grains en surface sous contrainte de contact répétée",
          es: "Arranque de granos en la superficie bajo esfuerzo de contacto repetido"
        },
        solution: {
          en: "Select a finer-grained ceramic microstructure for improved wear resistance.",
          ar: "اختر بنية سيراميكية ذات حبيبات أدق لتحسين مقاومة التآكل.",
          fr: "Choisir une microstructure céramique à grains plus fins pour une meilleure résistance à l'usure.",
          es: "Seleccione una microestructura cerámica de grano más fino para mejorar la resistencia al desgaste."
        }
      },
      {
        cause: {
          en: "Micro-chipping from repeated impact or vibration",
          ar: "تقشر دقيق ناتج عن الصدم أو الاهتزاز المتكرر",
          fr: "Micro-écaillage dû à des impacts ou vibrations répétés",
          es: "Microdesconchado por impactos o vibraciones repetidas"
        },
        solution: {
          en: "Reduce vibration exposure or add cushioning at contact points.",
          ar: "قلّل التعرض للاهتزاز أو أضف توسيدا عند نقاط التلامس.",
          fr: "Réduire l'exposition aux vibrations ou ajouter un amortissement aux points de contact.",
          es: "Reduzca la exposición a vibraciones o añada amortiguación en los puntos de contacto."
        }
      }
    ]
  },
  {
    category: "ceramics",
    failureType: "deformation",
    causes: [
      {
        cause: {
          en: "Deformation is rare in ceramics; more likely indicates cracking rather than plastic bending",
          ar: "التشوه نادر في السيراميك؛ الأرجح أنه يشير إلى تشقق وليس انحناء بلاستيكيا",
          fr: "La déformation est rare dans les céramiques ; elle indique plus probablement une fissuration qu'une flexion plastique",
          es: "La deformación es poco común en cerámicas; probablemente indique agrietamiento en lugar de flexión plástica"
        },
        solution: {
          en: "Re-inspect the part for cracking rather than assuming plastic deformation occurred.",
          ar: "أعد فحص الجزء بحثا عن التشقق بدلا من افتراض حدوث تشوه بلاستيكي.",
          fr: "Réinspecter la pièce à la recherche de fissures plutôt que de supposer une déformation plastique.",
          es: "Vuelva a inspeccionar la pieza en busca de grietas en lugar de asumir que hubo deformación plástica."
        }
      },
      {
        cause: {
          en: "High-temperature creep in some advanced ceramics under sustained load",
          ar: "زحف عند درجة حرارة عالية في بعض السيراميك المتقدم تحت حمولة مستمرة",
          fr: "Fluage à haute température dans certaines céramiques avancées sous charge soutenue",
          es: "Fluencia a alta temperatura en algunas cerámicas avanzadas bajo carga sostenida"
        },
        solution: {
          en: "Reduce sustained load at high temperature or select a creep-resistant advanced ceramic.",
          ar: "قلّل الحمولة المستمرة عند درجة الحرارة العالية أو اختر سيراميكا متقدما مقاوما للزحف.",
          fr: "Réduire la charge soutenue à haute température ou choisir une céramique avancée résistante au fluage.",
          es: "Reduzca la carga sostenida a alta temperatura o seleccione una cerámica avanzada resistente a la fluencia."
        }
      },
      {
        cause: {
          en: "Dimensional change from phase transformation at high temperature",
          ar: "تغير في الأبعاد ناتج عن تحول طوري عند درجة حرارة عالية",
          fr: "Changement dimensionnel dû à une transformation de phase à haute température",
          es: "Cambio dimensional por transformación de fase a alta temperatura"
        },
        solution: {
          en: "Verify the operating temperature stays below the material's phase transformation threshold.",
          ar: "تحقق من أن درجة حرارة التشغيل تبقى أقل من عتبة التحول الطوري للمادة.",
          fr: "Vérifier que la température de service reste inférieure au seuil de transformation de phase du matériau.",
          es: "Verifique que la temperatura de servicio se mantenga por debajo del umbral de transformación de fase del material."
        }
      }
    ]
  },

  // ----- COMPOSITES -----
  {
    category: "composites",
    failureType: "fracture",
    causes: [
      {
        cause: {
          en: "Delamination between layers under impact or bending load",
          ar: "انفصال طبقي بين الطبقات تحت حمولة الصدم أو الانحناء",
          fr: "Délaminage entre couches sous charge d'impact ou de flexion",
          es: "Delaminación entre capas bajo carga de impacto o flexión"
        },
        solution: {
          en: "Improve layup design and interlaminar bonding, or add impact-resistant surface layers.",
          ar: "حسّن تصميم الطبقات والترابط بينها، أو أضف طبقات سطحية مقاومة للصدم.",
          fr: "Améliorer la conception du drapage et l'adhésion interlaminaire, ou ajouter des couches de surface résistantes aux impacts.",
          es: "Mejore el diseño del laminado y la adhesión interlaminar, o añada capas superficiales resistentes al impacto."
        }
      },
      {
        cause: {
          en: "Fiber breakage from overload beyond the composite's tensile strength",
          ar: "كسر الألياف بسبب حمولة زائدة تتجاوز مقاومة الشد للمركب",
          fr: "Rupture des fibres due à une surcharge dépassant la résistance en traction du composite",
          es: "Rotura de fibras por sobrecarga que supera la resistencia a la tracción del compuesto"
        },
        solution: {
          en: "Increase fiber content or switch to a higher-strength fiber reinforcement.",
          ar: "زد نسبة الألياف أو استخدم تسليحا ليفيا ذا مقاومة أعلى.",
          fr: "Augmenter la teneur en fibres ou passer à un renfort fibreux de résistance plus élevée.",
          es: "Aumente el contenido de fibra o utilice un refuerzo de fibra de mayor resistencia."
        }
      },
      {
        cause: {
          en: "Matrix cracking due to poor fiber-matrix bonding",
          ar: "تشقق المصفوفة بسبب ضعف الترابط بين الألياف والمصفوفة",
          fr: "Fissuration de la matrice due à une mauvaise adhésion fibre-matrice",
          es: "Agrietamiento de la matriz por deficiente adhesión fibra-matriz"
        },
        solution: {
          en: "Improve fiber surface treatment (sizing) to enhance matrix adhesion.",
          ar: "حسّن معالجة سطح الألياف (التحجيم) لتعزيز الترابط مع المصفوفة.",
          fr: "Améliorer le traitement de surface des fibres (ensimage) pour renforcer l'adhésion à la matrice.",
          es: "Mejore el tratamiento superficial de la fibra (ensimaje) para reforzar la adhesión a la matriz."
        }
      }
    ]
  },
  {
    category: "composites",
    failureType: "corrosion",
    causes: [
      {
        cause: {
          en: "Matrix degradation from moisture absorption over time",
          ar: "تدهور المصفوفة بسبب امتصاص الرطوبة مع مرور الوقت",
          fr: "Dégradation de la matrice due à l'absorption d'humidité au fil du temps",
          es: "Degradación de la matriz por absorción de humedad con el tiempo"
        },
        solution: {
          en: "Use a moisture-resistant resin system or apply a protective surface sealant.",
          ar: "استخدم نظام راتنج مقاوما للرطوبة أو طبّق مانعا سطحيا واقيا.",
          fr: "Utiliser un système de résine résistant à l'humidité ou appliquer un scellant de surface protecteur.",
          es: "Utilice un sistema de resina resistente a la humedad o aplique un sellador superficial protector."
        }
      },
      {
        cause: {
          en: "Chemical attack weakening the resin matrix",
          ar: "هجوم كيميائي يضعف مصفوفة الراتنج",
          fr: "Attaque chimique affaiblissant la matrice résineuse",
          es: "Ataque químico que debilita la matriz de resina"
        },
        solution: {
          en: "Select a resin system with proven chemical resistance to the service environment.",
          ar: "اختر نظام راتنج ذا مقاومة كيميائية مثبتة لبيئة الاستخدام.",
          fr: "Choisir un système de résine à résistance chimique prouvée pour l'environnement de service.",
          es: "Seleccione un sistema de resina con resistencia química comprobada al ambiente de servicio."
        }
      },
      {
        cause: {
          en: "Galvanic corrosion at fastener points between composite and metal parts",
          ar: "تآكل جلفاني عند نقاط التثبيت بين المركب والأجزاء المعدنية",
          fr: "Corrosion galvanique aux points de fixation entre composite et pièces métalliques",
          es: "Corrosión galvánica en los puntos de fijación entre el compuesto y las piezas metálicas"
        },
        solution: {
          en: "Use isolating washers or corrosion-resistant fasteners at metal-composite interfaces.",
          ar: "استخدم فواصل عازلة أو مثبتات مقاومة للتآكل عند وصلات المعدن والمركب.",
          fr: "Utiliser des rondelles isolantes ou des fixations résistantes à la corrosion aux interfaces métal-composite.",
          es: "Utilice arandelas aislantes o sujetadores resistentes a la corrosión en las interfaces metal-compuesto."
        }
      }
    ]
  },
  {
    category: "composites",
    failureType: "fatigue",
    causes: [
      {
        cause: {
          en: "Progressive delamination growth under cyclic loading",
          ar: "نمو تدريجي للانفصال الطبقي تحت الحمولة الدورية",
          fr: "Croissance progressive du délaminage sous chargement cyclique",
          es: "Crecimiento progresivo de la delaminación bajo carga cíclica"
        },
        solution: {
          en: "Reduce cyclic stress amplitude or reinforce critical interlaminar regions.",
          ar: "قلّل سعة الإجهاد الدوري أو قوِّ المناطق الحرجة بين الطبقات.",
          fr: "Réduire l'amplitude de contrainte cyclique ou renforcer les zones interlaminaires critiques.",
          es: "Reduzca la amplitud del esfuerzo cíclico o refuerce las regiones interlaminares críticas."
        }
      },
      {
        cause: {
          en: "Matrix microcracking accumulating over repeated load cycles",
          ar: "تراكم شقوق دقيقة في المصفوفة عبر دورات الحمولة المتكررة",
          fr: "Accumulation de microfissures dans la matrice au fil des cycles de charge répétés",
          es: "Acumulación de microgrietas en la matriz durante ciclos de carga repetidos"
        },
        solution: {
          en: "Select a tougher resin matrix with higher fatigue resistance.",
          ar: "اختر مصفوفة راتنج أكثر متانة وذات مقاومة أعلى للتعب.",
          fr: "Choisir une matrice résineuse plus tenace avec une meilleure résistance à la fatigue.",
          es: "Seleccione una matriz de resina más tenaz con mayor resistencia a la fatiga."
        }
      },
      {
        cause: {
          en: "Fiber-matrix debonding from repeated stress",
          ar: "انفصال الألياف عن المصفوفة بسبب الإجهاد المتكرر",
          fr: "Décohésion fibre-matrice due à des contraintes répétées",
          es: "Desunión fibra-matriz por esfuerzo repetido"
        },
        solution: {
          en: "Improve fiber sizing/treatment to strengthen the fiber-matrix interface.",
          ar: "حسّن معالجة/تحجيم الألياف لتقوية الترابط بين الألياف والمصفوفة.",
          fr: "Améliorer l'ensimage/traitement des fibres pour renforcer l'interface fibre-matrice.",
          es: "Mejore el ensimaje/tratamiento de la fibra para reforzar la interfaz fibra-matriz."
        }
      }
    ]
  },
  {
    category: "composites",
    failureType: "wear",
    causes: [
      {
        cause: {
          en: "Surface abrasion exposing and damaging fibers",
          ar: "كشط سطحي يعرّض الألياف للتلف",
          fr: "Abrasion de surface exposant et endommageant les fibres",
          es: "Abrasión superficial que expone y daña las fibras"
        },
        solution: {
          en: "Add a protective surface coating or sacrificial wear layer.",
          ar: "أضف طلاء سطحيا واقيا أو طبقة تآكل تضحوية.",
          fr: "Ajouter un revêtement de surface protecteur ou une couche d'usure sacrificielle.",
          es: "Añada un recubrimiento superficial protector o una capa de desgaste sacrificial."
        }
      },
      {
        cause: {
          en: "Matrix erosion from repeated contact or particle impact",
          ar: "تآكل المصفوفة بسبب التلامس المتكرر أو صدم الجسيمات",
          fr: "Érosion de la matrice due à un contact répété ou à l'impact de particules",
          es: "Erosión de la matriz por contacto repetido o impacto de partículas"
        },
        solution: {
          en: "Use an abrasion-resistant resin or gel coat on exposed surfaces.",
          ar: "استخدم راتنجا مقاوما للكشط أو طلاء هلامي على الأسطح المعرّضة.",
          fr: "Utiliser une résine résistante à l'abrasion ou un gel coat sur les surfaces exposées.",
          es: "Utilice una resina resistente a la abrasión o un gel coat en las superficies expuestas."
        }
      },
      {
        cause: {
          en: "Fiber pull-out at the worn surface",
          ar: "انتزاع الألياف عند السطح المتآكل",
          fr: "Arrachement des fibres au niveau de la surface usée",
          es: "Arranque de fibras en la superficie desgastada"
        },
        solution: {
          en: "Improve fiber-matrix bonding to reduce fiber pull-out under wear.",
          ar: "حسّن الترابط بين الألياف والمصفوفة لتقليل انتزاع الألياف تحت التآكل.",
          fr: "Améliorer l'adhésion fibre-matrice pour réduire l'arrachement des fibres sous usure.",
          es: "Mejore la adhesión fibra-matriz para reducir el arranque de fibras bajo desgaste."
        }
      }
    ]
  },
  {
    category: "composites",
    failureType: "deformation",
    causes: [
      {
        cause: {
          en: "Excessive bending or buckling under compressive load",
          ar: "انحناء أو انبعاج مفرط تحت الحمولة الانضغاطية",
          fr: "Flexion ou flambage excessif sous charge de compression",
          es: "Flexión o pandeo excesivo bajo carga de compresión"
        },
        solution: {
          en: "Increase laminate thickness or add stiffening ribs to resist buckling.",
          ar: "زد سماكة الصفائح أو أضف أضلاعا تصليبية لمقاومة الانبعاج.",
          fr: "Augmenter l'épaisseur du stratifié ou ajouter des nervures de rigidification pour résister au flambage.",
          es: "Aumente el espesor del laminado o añada nervaduras de rigidez para resistir el pandeo."
        }
      },
      {
        cause: {
          en: "Creep in the resin matrix under sustained load, especially at elevated temperature",
          ar: "زحف في مصفوفة الراتنج تحت الحمولة المستمرة، خاصة عند درجة حرارة مرتفعة",
          fr: "Fluage de la matrice résineuse sous charge soutenue, surtout à température élevée",
          es: "Fluencia en la matriz de resina bajo carga sostenida, especialmente a temperatura elevada"
        },
        solution: {
          en: "Select a resin with better creep resistance, or reduce sustained load and temperature.",
          ar: "اختر راتنجا ذا مقاومة أفضل للزحف، أو قلّل الحمولة المستمرة ودرجة الحرارة.",
          fr: "Choisir une résine à meilleure résistance au fluage, ou réduire la charge soutenue et la température.",
          es: "Seleccione una resina con mejor resistencia a la fluencia, o reduzca la carga sostenida y la temperatura."
        }
      },
      {
        cause: {
          en: "Permanent shape change from load beyond the composite's elastic limit",
          ar: "تغير دائم في الشكل ناتج عن حمولة تتجاوز الحد المرن للمركب",
          fr: "Changement de forme permanent dû à une charge dépassant la limite élastique du composite",
          es: "Cambio de forma permanente por carga que supera el límite elástico del compuesto"
        },
        solution: {
          en: "Redesign the laminate layup to increase stiffness for the applied load.",
          ar: "أعد تصميم ترتيب الصفائح لزيادة الصلابة بالنسبة للحمولة المطبقة.",
          fr: "Repenser le drapage du stratifié pour augmenter la rigidité vis-à-vis de la charge appliquée.",
          es: "Rediseñe la disposición del laminado para aumentar la rigidez frente a la carga aplicada."
        }
      }
    ]
  }

];

// ===== Grab HTML elements =====

// Grab the material name text input
const materialNameInput = document.getElementById("materialName");

// Grab the material category select
const materialCategoryInput = document.getElementById("materialCategory");

// Grab the failure type select
const failureTypeInput = document.getElementById("failureType");

// Grab the temperature input
const diagTemperatureInput = document.getElementById("diagTemperature");

// Grab the environment select
const diagEnvironmentInput = document.getElementById("diagEnvironment");

// Grab the button
const diagnoseBtn = document.getElementById("diagnoseBtn");

// Grab the elements where we'll display the result
const diagResultTitle = document.getElementById("diagResultTitle");
const diagResultText = document.getElementById("diagResultText");

// Grab the new solutions-related elements
const suggestBtn = document.getElementById("suggestBtn");
const solutionsTitle = document.getElementById("solutionsTitle");
const solutionsResultCard = document.getElementById("solutionsResultCard");
const solutionsResultText = document.getElementById("solutionsResultText");

// Grab the language selector
const languageSelect = document.getElementById("languageSelect");

// Helper function: given either a plain string (old format, English only)
// or a {en, ar, fr, es} object (new translated format), return the text
// in the requested language. Falls back to English if the translation
// for that language isn't available yet.
function getText(text, lang) {
  if (typeof text === "string") {
    return text; // old format: just English, return as-is
  }
  return text[lang] || text.en;
}

// ===== Lookup function =====
// This function searches failureCausesDB for the entry that matches
// BOTH the selected category AND the selected failure type.
// .find() returns the first matching object, or undefined if none matches.
function findFailureCauses(category, failureType) {
  return failureCausesDB.find(function(entry) {
    return entry.category === category && entry.failureType === failureType;
  });
}

// We store the last matched entry here so the "Suggest Solutions"
// button can reuse it without repeating the form-reading and lookup logic.
let currentMatch = null;

// ===== Event listener on Diagnose button =====

diagnoseBtn.addEventListener("click", function() {

  // Read all form values
  const materialName = materialNameInput.value.trim();
  const selectedCategory = materialCategoryInput.value;
  const selectedFailureType = failureTypeInput.value;
  const selectedTemperature =
    diagTemperatureInput.value === "" ? null : Number(diagTemperatureInput.value);
  const selectedEnvironment = diagEnvironmentInput.value;

  // Look up the matching entry in our database
  const match = findFailureCauses(selectedCategory, selectedFailureType);

  // Hide the solutions card/button every time a new diagnosis runs,
  // so old solutions don't stay visible for a different diagnosis
  suggestBtn.style.display = "none";
  solutionsTitle.style.display = "none";
  solutionsResultCard.style.display = "none";

  // If somehow no entry was found (shouldn't happen since we cover
  // all combinations, but it's good practice to handle it anyway)
  if (!match) {
    diagResultTitle.textContent = "No diagnosis available";
    diagResultText.textContent =
      "We couldn't find information for this combination. Please try different options.";
    currentMatch = null;
    return;
  }

  // Save this match so the Suggest Solutions button can use it later
  currentMatch = match;

  // Build the title: use the material name if the user typed one,
  // otherwise just describe the category
  const displayName = materialName !== "" ? materialName : selectedCategory;
  diagResultTitle.textContent =
    "Possible causes of " + selectedFailureType + " in " + displayName;

  // Turn the causes into a readable bullet-style text.
  // Each item is now an object {cause, solution}, so we read item.cause
  // in the currently selected language.
  const selectedLang = languageSelect.value;

  let causesText = match.causes.map(function(item) {
    return "- " + getText(item.cause, selectedLang);
  }).join("\n");

  // Add a short note about the operating conditions, since they can
  // make certain causes more or less likely
  causesText +=
    "\n\nOperating conditions: " +
    (selectedTemperature !== null ? selectedTemperature + "°C" : "not specified") +
    ", " + selectedEnvironment + " environment.";

  diagResultText.textContent = causesText;

  // Now that a diagnosis exists, reveal the "Suggest Solutions" button
  suggestBtn.style.display = "inline-block";

});

// ===== Event listener on Suggest Solutions button =====

suggestBtn.addEventListener("click", function() {

  // Safety check: if there's no diagnosis stored, do nothing
  if (!currentMatch) return;

  // Build a readable list pairing each cause with its solution,
  // in the currently selected language.
  const selectedLang = languageSelect.value;

  const solutionsText = currentMatch.causes.map(function(item) {
    return "- " + getText(item.cause, selectedLang) +
      "\n  -> " + getText(item.solution, selectedLang);
  }).join("\n\n");

  solutionsResultText.textContent = solutionsText;

  // Reveal the solutions title and card
  solutionsTitle.style.display = "block";
  solutionsResultCard.style.display = "block";

});
