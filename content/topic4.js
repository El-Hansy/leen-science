/* ============================================================
   Topic 4 — Earth's Features   (Grade 4 · 1st Term booklet, p.1–20)
   Source: "Booklet Gr.4 , 1st term" pages 1-20
   ------------------------------------------------------------
   To add a new booklet: copy this file, change the `id`, fill in
   lessons/cards/skills, then add a <script> tag in index.html.
   See README.md for the full format.
   ============================================================ */

SC.registerTopic({
  id: 'gr4-t4',
  title: "Topic 4 · Earth's Features",
  titleAr: 'الموضوع الرابع · معالم سطح الأرض',
  grade: 'Grade 4',
  term: '1st Term',
  color: '#1f7a5c',
  cover: 'assets/cover-landforms.png',
  source: 'Booklet Gr.4 — 1st term, pages 1–20',

  lessons: [

    /* ========================================================
       LESSON 2 — Patterns of Earth's Features
       ======================================================== */
    {
      id: 'l2',
      num: 2,
      title: "Patterns of Earth's Features",
      titleAr: 'أنماط معالم سطح الأرض',
      blurb: 'Landforms on land, patterns of earthquakes and volcanoes, and landforms under the ocean.',
      blurbAr: 'التضاريس على اليابسة، وأنماط الزلازل والبراكين، وتضاريس قاع المحيط.',

      cards: [
        { t: 'hero', img: 'assets/cover-landforms.png',
          en: "Earth's surface is covered with <b>landforms</b> — mountains, canyons, plateaus and more. Scientists look for <b>patterns</b> in where these features appear.",
          ar: 'سطح الأرض مغطى بـ<b>التضاريس</b> — جبال ووديان وهضاب وغيرها. ويبحث العلماء عن <b>أنماط</b> في أماكن وجود هذه المعالم.' },

        { t: 'heading', en: 'Landform Features', ar: 'أشكال التضاريس' },

        { t: 'terms', items: [
          { term: 'Mountains', termAr: 'الجبال', img: 'assets/mountain.png',
            def: 'Are a type of landform found on Earth’s surface.',
            defAr: 'نوع من التضاريس يوجد على سطح الأرض، وهي مرتفعة جدًا وقمتها مدببة.' },
          { term: 'Mountain Ranges', termAr: 'السلاسل الجبلية', img: 'assets/mountain-range.png',
            def: 'Lines of mountains connected by high ground.',
            defAr: 'صفوف من الجبال متصلة ببعضها بأرض مرتفعة.' },
          { term: 'Canyons', termAr: 'الأخاديد (الوديان الضيقة)', img: 'assets/canyon.png',
            def: 'Deep, narrow areas surrounded by a mountain’s steep sides.',
            defAr: 'مناطق عميقة وضيقة محاطة بجوانب الجبل شديدة الانحدار.' },
          { term: 'Buttes', termAr: 'التلال المنعزلة', img: 'assets/butte.png',
            def: 'Single hills with steep sides and a flat top.',
            defAr: 'تل منفرد له جوانب شديدة الانحدار وقمة مسطحة صغيرة.' },
          { term: 'Plateaus', termAr: 'الهضاب', img: 'assets/plateau.png',
            def: 'Large, raised areas of flat land extending over long distances.',
            defAr: 'مساحات كبيرة مرتفعة من الأرض المسطحة تمتد لمسافات طويلة.' },
          { term: 'Cliffs', termAr: 'الجروف (المنحدرات الصخرية)', img: 'assets/cliff.png',
            def: 'Steep rock faces located at the edge of bodies of water.',
            defAr: 'وجوه صخرية شديدة الانحدار توجد عند حافة المسطحات المائية.' }
        ]},

        { t: 'note', en: '<b>Pattern:</b> is something that appears or occurs again and again in the same way.',
          ar: '<b>النمط:</b> شيء يظهر أو يحدث مرة بعد مرة بالطريقة نفسها.' },

        { t: 'heading', en: 'Patterns of Earthquakes and Volcanoes', ar: 'أنماط الزلازل والبراكين' },

        { t: 'bullets', items: [
          { en: 'Both occur along <b>faults</b>, which are <b>cracks in Earth’s crust caused by moving plates</b>.',
            ar: 'كلاهما يحدث على طول <b>الصدوع</b>، وهي <b>شقوق في قشرة الأرض ناتجة عن حركة الصفائح</b>.' },
          { en: 'Volcanoes form where <b>magma</b> (molten rock) reaches the surface.',
            ar: 'تتكون البراكين حيث يصل <b>الماجما</b> (الصخر المنصهر) إلى السطح.' },
          { en: '<b>The Ring of Fire:</b> a specific section of plate boundaries surrounding the Pacific Ocean where earthquakes and volcanoes are exceptionally common.',
            ar: '<b>حزام النار:</b> جزء من حدود الصفائح يحيط بالمحيط الهادئ، وتكثر فيه الزلازل والبراكين بشكل غير عادي.' },
          { en: 'As the plates <b>crash</b> together, mountains and volcanoes form.',
            ar: 'عندما <b>تصطدم</b> الصفائح ببعضها تتكون الجبال والبراكين.' }
        ]},

        { t: 'heading', en: 'Patterns Under the Ocean', ar: 'الأنماط تحت المحيط' },
        { t: 'note', en: 'The ocean floor contains landforms similar to those on land.',
          ar: 'يحتوي قاع المحيط على تضاريس تشبه تلك الموجودة على اليابسة.' },

        { t: 'bullets', items: [
          { en: '<b>Trenches:</b> long, narrow, sunken areas in the ocean floor. (like <i>canyons</i> on land)',
            ar: '<b>الأخاديد البحرية:</b> مناطق طويلة وضيقة وغائرة في قاع المحيط. (تشبه <i>الوديان الضيقة</i> على اليابسة)' },
          { en: '<b>Underwater canyons:</b> low areas surrounded by steep sides.',
            ar: '<b>الوديان الضيقة تحت الماء:</b> مناطق منخفضة محاطة بجوانب شديدة الانحدار.' },
          { en: '<b>Sea floor ridges and basins:</b> broad basins which are like large, flat plains. (ridges are like <i>mountain ranges</i>)',
            ar: '<b>حيود وأحواض قاع البحر:</b> أحواض عريضة تشبه السهول المسطحة الكبيرة. (الحيود تشبه <i>السلاسل الجبلية</i>)' }
        ]}
      ],

      glossary: [
        { term: 'Mountain', def: 'A type of landform found on Earth’s surface.', defAr: 'نوع من التضاريس على سطح الأرض.', img: 'assets/mountain.png' },
        { term: 'Mountain range', def: 'Lines of mountains connected by high ground.', defAr: 'صفوف من الجبال متصلة بأرض مرتفعة.', img: 'assets/mountain-range.png' },
        { term: 'Canyon', def: 'A deep, narrow area surrounded by a mountain’s steep sides.', defAr: 'منطقة عميقة ضيقة محاطة بجوانب جبل منحدرة.', img: 'assets/canyon.png' },
        { term: 'Butte', def: 'A single hill with steep sides and a flat top.', defAr: 'تل منفرد بجوانب منحدرة وقمة مسطحة.', img: 'assets/butte.png' },
        { term: 'Plateau', def: 'A large, raised area of flat land extending over long distances.', defAr: 'مساحة كبيرة مرتفعة ومسطحة تمتد لمسافات طويلة.', img: 'assets/plateau.png' },
        { term: 'Cliff', def: 'A steep rock face at the edge of a body of water.', defAr: 'وجه صخري منحدر عند حافة مسطح مائي.', img: 'assets/cliff.png' },
        { term: 'Pattern', def: 'Something that appears or occurs again and again in the same way.', defAr: 'شيء يتكرر بالطريقة نفسها مرة بعد مرة.' },
        { term: 'Fault', def: 'A crack in Earth’s crust caused by moving plates.', defAr: 'شق في قشرة الأرض بسبب حركة الصفائح.' },
        { term: 'Magma', def: 'Molten (melted) rock below Earth’s surface.', defAr: 'صخر منصهر تحت سطح الأرض.' },
        { term: 'Ring of Fire', def: 'Plate boundaries around the Pacific Ocean with many earthquakes and volcanoes.', defAr: 'حدود الصفائح حول المحيط الهادئ وبها زلازل وبراكين كثيرة.' },
        { term: 'Trench', def: 'A long, narrow, sunken area in the ocean floor.', defAr: 'منطقة طويلة ضيقة غائرة في قاع المحيط.' },
        { term: 'Underwater canyon', def: 'A low area surrounded by steep sides on the ocean floor.', defAr: 'منطقة منخفضة محاطة بجوانب منحدرة في قاع المحيط.' }
      ],

      skills: [
        {
          id: 'l2s1', title: 'Name the landform', titleAr: 'سمِّ التضاريس', icon: '🏔️',
          questions: [
            { t:'mcq', img:'assets/canyon-photo.png', q:'What landform is shown in the picture?', qAr:'ما التضاريس الموضحة في الصورة؟',
              choices:['a butte','a fault','a trench','a canyon'], a:3,
              ex:'A canyon is a deep, narrow area surrounded by a mountain’s steep sides.',
              exAr:'الوادي الضيق (Canyon) منطقة عميقة وضيقة محاطة بجوانب جبل شديدة الانحدار.' },

            { t:'mcq', q:'__________ are lines of mountains connected by high ground.', qAr:'__________ صفوف من الجبال متصلة بأرض مرتفعة.',
              choices:['Mountain ranges','a butte','a fault','a trench'], a:0,
              ex:'Mountain ranges = lines of mountains connected by high ground.',
              exAr:'السلاسل الجبلية = صفوف من الجبال متصلة ببعضها بأرض مرتفعة.' },

            { t:'mcq', q:'__________, found in mountain ranges, are deep, narrow areas surrounded by a mountain’s steep sides.', qAr:'__________ توجد في السلاسل الجبلية، وهي مناطق عميقة ضيقة محاطة بجوانب منحدرة.',
              choices:['Canyons','a butte','a fault','a trench'], a:0,
              ex:'Canyons are deep and narrow, with steep mountain sides around them.',
              exAr:'الوديان الضيقة عميقة وضيقة وتحيط بها جوانب الجبل المنحدرة.' },

            { t:'mcq', q:'__________ is a single hill that has steep sides and a flat top.', qAr:'__________ تل منفرد له جوانب منحدرة وقمة مسطحة.',
              choices:['Mountain ranges','A butte','A pattern','A trench'], a:1,
              ex:'A butte is a single hill — narrow, with steep sides and a small flat top.',
              exAr:'التل المنعزل (Butte) تل منفرد ضيق بجوانب منحدرة وقمة مسطحة صغيرة.' },

            { t:'mcq', img:'assets/plateau.png', q:'Which landform is a large, raised area of flat land extending over long distances?', qAr:'أي تضاريس هي مساحة كبيرة مرتفعة ومسطحة تمتد لمسافات طويلة؟',
              choices:['A canyon','A cliff','A plateau','A trench'], a:2,
              ex:'A plateau is wide and flat on top, and it extends a great distance. A butte is much narrower.',
              exAr:'الهضبة عريضة ومسطحة من الأعلى وتمتد لمسافة كبيرة، أما التل المنعزل فهو أضيق بكثير.' },

            { t:'mcq', img:'assets/cliff.png', q:'Steep rock faces located at the edge of bodies of water are called __________.', qAr:'الوجوه الصخرية المنحدرة عند حافة المسطحات المائية تسمى __________.',
              choices:['buttes','cliffs','trenches','plateaus'], a:1,
              ex:'Cliffs are steep rock faces at the edge of a body of water.',
              exAr:'الجروف وجوه صخرية منحدرة عند حافة مسطح مائي.' },

            { t:'mcq', img:'assets/butte.png', q:'What landform is shown in the picture?', qAr:'ما التضاريس الموضحة في الصورة؟',
              choices:['a plateau','a canyon','a butte','a mountain range'], a:2,
              ex:'One single hill with steep sides and a small flat top = a butte.',
              exAr:'تل واحد منفرد بجوانب منحدرة وقمة مسطحة صغيرة = Butte.' },

            { t:'mcq', img:'assets/mountain-range.png', q:'What landform is shown in the picture?', qAr:'ما التضاريس الموضحة في الصورة؟',
              choices:['a mountain range','a plateau','a cliff','a canyon'], a:0,
              ex:'Many mountains in a line, connected by high ground = a mountain range.',
              exAr:'جبال كثيرة في صف متصلة بأرض مرتفعة = سلسلة جبلية.' },

            { t:'tf', q:'A butte is wider than a plateau.', qAr:'التل المنعزل أعرض من الهضبة.', a:false,
              ex:'False — a plateau is much wider. A butte is a single narrow hill.',
              exAr:'خطأ — الهضبة أعرض بكثير، أما التل المنعزل فهو تل واحد ضيق.' },

            { t:'tf', q:'Mountains are a type of landform found on Earth’s surface.', qAr:'الجبال نوع من التضاريس الموجودة على سطح الأرض.', a:true,
              ex:'True — mountains are landforms.', exAr:'صح — الجبال من التضاريس.' },

            { t:'term', q:'Steep rock faces at the edge of a body of water.', qAr:'وجوه صخرية منحدرة عند حافة مسطح مائي.',
              a:['cliff','cliffs'], bank:['Cliffs','Canyons','Buttes','Plateaus','Trenches'],
              ex:'Cliffs.', exAr:'الجروف Cliffs.' },

            { t:'term', q:'Lines of mountains connected by high ground.', qAr:'صفوف من الجبال متصلة بأرض مرتفعة.',
              a:['mountain range','mountain ranges','mountainranges'], bank:['Mountain ranges','Cliffs','Plateaus','Trenches','Buttes'],
              ex:'Mountain ranges.', exAr:'السلاسل الجبلية Mountain ranges.' },

            { t:'term', q:'A single hill that has steep sides and a flat top.', qAr:'تل منفرد بجوانب منحدرة وقمة مسطحة.',
              a:['butte','buttes'], bank:['Butte','Plateau','Canyon','Cliff','Trench'],
              ex:'A butte.', exAr:'Butte — التل المنعزل.' },

            { t:'term', q:'Large area of raised land that extends over a great distance.', qAr:'مساحة كبيرة من الأرض المرتفعة تمتد لمسافة كبيرة.',
              a:['plateau','plateaus'], bank:['Plateau','Butte','Canyon','Mountain range','Cliff'],
              ex:'A plateau.', exAr:'الهضبة Plateau.' },

            { t:'match', q:'Match each landform with its definition.', qAr:'وصّل كل تضاريس بتعريفها.',
              pairs:[
                { l:'Canyon', r:'Deep, narrow area with steep sides' },
                { l:'Butte', r:'Single hill, steep sides, flat top' },
                { l:'Plateau', r:'Large raised area of flat land' },
                { l:'Cliff', r:'Steep rock face at the edge of water' }
              ],
              ex:'Review the landform table in the lesson.', exAr:'راجعي جدول التضاريس في الدرس.' },

            { t:'fill', q:'Mountains are a type of ______ found on Earth’s surface.', qAr:'الجبال نوع من ______ يوجد على سطح الأرض.',
              bank:['Landform','Crash','rock','pattern','a body of water'], a:[['landform','landforms']],
              ex:'Mountains are a type of landform.', exAr:'الجبال نوع من التضاريس Landform.' },

            { t:'fill', q:'Cliffs are steep rock faces found at the edge of ______.', qAr:'الجروف وجوه صخرية منحدرة توجد عند حافة ______.',
              bank:['a body of water','Landform','Fault','Trench','pattern'], a:[['a body of water','body of water','water']],
              ex:'At the edge of a body of water.', exAr:'عند حافة مسطح مائي.' }
          ]
        },

        {
          id: 'l2s2', title: 'Plates, faults, volcanoes', titleAr: 'الصفائح والصدوع والبراكين', icon: '🌋',
          questions: [
            { t:'mcq', q:'A __________ is something that appears or occurs again and again in the same way.', qAr:'__________ شيء يظهر أو يحدث مرة بعد مرة بالطريقة نفسها.',
              choices:['Mountain range','butte','pattern','trench'], a:2,
              ex:'That is the definition of a pattern.', exAr:'هذا هو تعريف النمط Pattern.' },

            { t:'mcq', q:'__________ form at places where magma, or molten rock, reaches Earth’s surface.', qAr:'__________ تتكون في الأماكن التي يصل فيها الماجما (الصخر المنصهر) إلى سطح الأرض.',
              choices:['Earthquakes','Volcanoes','Buttes','Mountains'], a:1,
              ex:'Volcanoes form where magma reaches the surface.', exAr:'تتكون البراكين حيث يصل الماجما إلى السطح.' },

            { t:'mcq', q:'Cracks in Earth’s crust caused by moving plates are called __________.', qAr:'الشقوق في قشرة الأرض الناتجة عن حركة الصفائح تسمى __________.',
              choices:['faults','trenches','canyons','patterns'], a:0,
              ex:'Faults are cracks in Earth’s crust.', exAr:'الصدوع Faults شقوق في قشرة الأرض.' },

            { t:'mcq', q:'Where are earthquakes and volcanoes exceptionally common?', qAr:'أين تكثر الزلازل والبراكين بشكل غير عادي؟',
              choices:['The Ring of Fire','The Atlantic Ocean','Inside canyons','On plateaus'], a:0,
              ex:'The Ring of Fire surrounds the Pacific Ocean.', exAr:'حزام النار يحيط بالمحيط الهادئ.' },

            { t:'tf', q:'As the plates crash together, mountains and volcanoes form.', qAr:'عندما تصطدم الصفائح ببعضها تتكون الجبال والبراكين.', a:true,
              ex:'True.', exAr:'صح.' },

            { t:'tf', q:'Both earthquakes and hurricanes are the result of plates moving along these faults.', qAr:'كل من الزلازل والأعاصير ناتج عن حركة الصفائح على طول الصدوع.', a:false,
              ex:'False — earthquakes and <b>volcanoes</b>, not hurricanes. Hurricanes are weather, not plate movement.',
              exAr:'خطأ — الزلازل و<b>البراكين</b> وليست الأعاصير. الأعاصير ظاهرة جوية وليست حركة صفائح.' },

            { t:'tf', q:'The whole Earth crust is made of 1 big plate that shakes and moves.', qAr:'قشرة الأرض كلها مكونة من صفيحة واحدة كبيرة تهتز وتتحرك.', a:false,
              ex:'False — Earth’s crust is divided into many plates.', exAr:'خطأ — قشرة الأرض مقسمة إلى صفائح كثيرة.' },

            { t:'tf', q:'Volcanoes form at places where magma, or molten rock, reaches Earth’s surface.', qAr:'تتكون البراكين حيث يصل الماجما إلى سطح الأرض.', a:true,
              ex:'True.', exAr:'صح.' },

            { t:'tf', q:'The plates move up and down only.', qAr:'الصفائح تتحرك لأعلى ولأسفل فقط.', a:false,
              ex:'False — plates move in many directions: they crash together, pull apart and slide past each other.',
              exAr:'خطأ — الصفائح تتحرك في اتجاهات كثيرة: تصطدم، وتتباعد، وتنزلق بجانب بعضها.' },

            { t:'fill', q:'______ are cracks in Earth’s crust.', qAr:'______ شقوق في قشرة الأرض.',
              bank:['Fault','Crash','rock','pattern','Canyon'], a:[['fault','faults']],
              ex:'Faults.', exAr:'الصدوع Faults.' },

            { t:'fill', q:'Earth’s surface is divided into plates made up of ______.', qAr:'سطح الأرض مقسم إلى صفائح مكونة من ______.',
              bank:['rock','Crash','Fault','pattern','a body of water'], a:[['rock','rocks']],
              ex:'Plates are made of rock.', exAr:'الصفائح مكونة من صخور.' },

            { t:'fill', q:'Mountains and volcanoes form when plates ______ together.', qAr:'تتكون الجبال والبراكين عندما ______ الصفائح معًا.',
              bank:['Crash','rock','Fault','pattern','Trench'], a:[['crash']],
              ex:'When plates crash together.', exAr:'عندما تصطدم الصفائح ببعضها.' },

            { t:'fill', q:'A ______ is something that appears or occurs again and again in the same way.', qAr:'______ شيء يتكرر بالطريقة نفسها مرة بعد مرة.',
              bank:['pattern','Crash','Fault','rock','Butte'], a:[['pattern','patterns']],
              ex:'A pattern.', exAr:'النمط Pattern.' },

            { t:'written', q:'What is the Ring of Fire?', qAr:'ما هو حزام النار؟',
              keys:[['plate','boundar'],['pacific'],['earthquake','volcano']],
              model:'The Ring of Fire is a section of plate boundaries surrounding the Pacific Ocean where earthquakes and volcanoes are exceptionally common.',
              modelAr:'حزام النار جزء من حدود الصفائح يحيط بالمحيط الهادئ وتكثر فيه الزلازل والبراكين بشكل كبير.' },

            { t:'written', q:'How do the features of a mountain differ from the features of a plateau?', qAr:'كيف تختلف صفات الجبل عن صفات الهضبة؟',
              keys:[['mountain'],['high','tall','peak','pointed','slop'],['plateau'],['flat','raised','wide','distance']],
              model:'A mountain is high with sloping sides and a pointed peak, while a plateau is a large raised area that is flat on top and extends over long distances.',
              modelAr:'الجبل مرتفع وله جوانب مائلة وقمة مدببة، أما الهضبة فهي مساحة كبيرة مرتفعة ومسطحة من الأعلى وتمتد لمسافات طويلة.' }
          ]
        },

        {
          id: 'l2s3', title: 'Under the ocean', titleAr: 'تحت المحيط', icon: '🌊',
          questions: [
            { t:'mcq', q:'__________ are long, narrow, sunken areas in the ocean floor.', qAr:'__________ مناطق طويلة وضيقة وغائرة في قاع المحيط.',
              choices:['Canyons','a butte','a fault','Trenches'], a:3,
              ex:'Trenches are the long, narrow, sunken areas of the ocean floor.',
              exAr:'الأخاديد البحرية Trenches مناطق طويلة ضيقة غائرة في قاع المحيط.' },

            { t:'mcq', q:'Trenches found in the ocean floor are similar to __________ on land.', qAr:'الأخاديد البحرية في قاع المحيط تشبه __________ على اليابسة.',
              choices:['canyons','plateaus','cliffs','buttes'], a:0,
              ex:'Both are deep, narrow and sunken — trenches ≈ canyons.',
              exAr:'كلاهما عميق وضيق وغائر — الأخدود البحري يشبه الوادي الضيق.' },

            { t:'mcq', q:'Underwater ridges are similar to __________ on land.', qAr:'الحيود تحت الماء تشبه __________ على اليابسة.',
              choices:['plains','mountain ranges','canyons','cliffs'], a:1,
              ex:'Ridges are long raised lines — like mountain ranges.',
              exAr:'الحيود خطوط مرتفعة طويلة — تشبه السلاسل الجبلية.' },

            { t:'mcq', q:'Underwater canyons are __________.', qAr:'الوديان الضيقة تحت الماء هي __________.',
              choices:['low areas surrounded by steep sides','flat raised land','cracks in the crust','sheets of ice'], a:0,
              ex:'Underwater canyons are low areas surrounded by steep sides.',
              exAr:'مناطق منخفضة محاطة بجوانب شديدة الانحدار.' },

            { t:'mcq', q:'Sea floor basins are like __________.', qAr:'أحواض قاع البحر تشبه __________.',
              choices:['large, flat plains','tall volcanoes','narrow buttes','deep faults'], a:0,
              ex:'Broad basins are like large, flat plains.', exAr:'الأحواض العريضة تشبه السهول المسطحة الكبيرة.' },

            { t:'term', q:'Low areas surrounded by steep sides (on the ocean floor).', qAr:'مناطق منخفضة محاطة بجوانب منحدرة في قاع المحيط.',
              a:['underwater canyon','underwater canyons','canyon','canyons'], bank:['Underwater canyons','Trenches','Ridges','Basins','Cliffs'],
              ex:'Underwater canyons.', exAr:'الوديان الضيقة تحت الماء.' },

            { t:'term', q:'Large, narrow, sunken areas in the ocean floor.', qAr:'مناطق طويلة ضيقة غائرة في قاع المحيط.',
              a:['trench','trenches'], bank:['Trenches','Ridges','Basins','Cliffs','Buttes'],
              ex:'Trenches.', exAr:'الأخاديد البحرية Trenches.' },

            { t:'fill', q:'______ are deep, narrow areas surrounded by a mountain’s steep sides.', qAr:'______ مناطق عميقة ضيقة محاطة بجوانب الجبل المنحدرة.',
              bank:['Canyon','Trench','Butte','Plateau','Fault'], a:[['canyon','canyons']],
              ex:'Canyons.', exAr:'الوديان الضيقة Canyons.' },

            { t:'fill', q:'______ are long, narrow, sunken areas in the ocean floor.', qAr:'______ مناطق طويلة ضيقة غائرة في قاع المحيط.',
              bank:['Trench','Canyon','Butte','Plateau','Fault'], a:[['trench','trenches']],
              ex:'Trenches.', exAr:'الأخاديد البحرية Trenches.' },

            { t:'fill', q:'A steep hill with a small, flat top is a ______.', qAr:'التل المنحدر ذو القمة المسطحة الصغيرة هو ______.',
              bank:['Butte','Trench','Canyon','Plateau','Fault'], a:[['butte','buttes']],
              ex:'A butte.', exAr:'Butte.' },

            { t:'match', q:'Match the ocean floor feature with the matching landform on land.', qAr:'وصّل معلم قاع المحيط بما يشبهه على اليابسة.',
              pairs:[
                { l:'Trench', r:'Canyon' },
                { l:'Ridge', r:'Mountain range' },
                { l:'Basin', r:'Flat plain' }
              ],
              ex:'The ocean floor has landforms similar to those on land.',
              exAr:'قاع المحيط به تضاريس تشبه تضاريس اليابسة.' }
          ]
        }
      ]
    },

    /* ========================================================
       LESSON 3 — Rocks, Minerals, and Soil
       ======================================================== */
    {
      id: 'l3',
      num: 3,
      title: 'Rocks, Minerals, and Soil',
      titleAr: 'الصخور والمعادن والتربة',
      blurb: 'The three types of rock, the rock cycle, the properties of minerals, and what soil is made of.',
      blurbAr: 'أنواع الصخور الثلاثة، ودورة الصخر، وخواص المعادن، ومما تتكون التربة.',

      cards: [
        { t:'hero', img:'assets/rock-types-chart.png',
          en:'There are <b>three main types of rocks</b>. Scientists classify them by <b>how they are formed</b>.',
          ar:'توجد <b>ثلاثة أنواع رئيسية من الصخور</b>. ويصنفها العلماء حسب <b>طريقة تكوّنها</b>.' },

        { t:'heading', en:'1. Igneous Rocks', ar:'١. الصخور النارية' },
        { t:'bullets', items:[
          { en:'<b>Formation:</b> form from molten rock — <b>magma</b> when it is underground and <b>lava</b> when it breaks through to Earth’s surface.',
            ar:'<b>التكوّن:</b> تتكون من الصخر المنصهر — <b>ماجما</b> تحت الأرض و<b>لافا</b> عندما تخرج إلى سطح الأرض.' },
          { en:'<b>Process:</b> igneous rock is created when this molten material <b>cools and hardens</b>.',
            ar:'<b>العملية:</b> يتكون الصخر الناري عندما <b>يبرد ويتصلب</b> هذا الصخر المنصهر.' },
          { en:'<b>Location:</b> commonly found along <b>plate boundaries</b>, where volcanoes and earthquakes are active and magma can reach the surface.',
            ar:'<b>المكان:</b> توجد عادة على <b>حدود الصفائح</b> حيث تنشط البراكين والزلازل ويستطيع الماجما الوصول للسطح.' }
        ]},

        { t:'heading', en:'2. Sedimentary Rocks', ar:'٢. الصخور الرسوبية' },
        { t:'bullets', items:[
          { en:'<b>Formation:</b> form from <b>sediment</b> — particles from the environment that settle into layers in basins or on flat surfaces.',
            ar:'<b>التكوّن:</b> تتكون من <b>الرواسب</b> — جسيمات من البيئة تستقر في طبقات في الأحواض أو على الأسطح المستوية.' },
          { en:'<b>Process:</b> over time the layers of sediment become stuck together as if they were glued.',
            ar:'<b>العملية:</b> مع الوقت تلتصق طبقات الرواسب ببعضها كأنها مُلصقة بالغراء.' }
        ]},
        { t:'terms', items:[
          { term:'Sandstone', termAr:'الحجر الرملي', img:'assets/sandstone.png',
            def:'Forms from ribbons of different sand.', defAr:'يتكون من شرائط من الرمال المختلفة.' },
          { term:'Limestone', termAr:'الحجر الجيري', img:'assets/limestone.png',
            def:'Gray or white limestone is made from bones and shells of sea creatures.', defAr:'حجر رمادي أو أبيض يتكون من عظام وأصداف الكائنات البحرية.' },
          { term:'Conglomerate', termAr:'الصخر المدمج', img:'assets/conglomerate.png',
            def:'Made from chunks of rock glued together by other rock.', defAr:'يتكون من قطع صخرية ملتصقة ببعضها بواسطة صخر آخر.' }
        ]},

        { t:'heading', en:'3. Metamorphic Rocks', ar:'٣. الصخور المتحولة' },
        { t:'bullets', items:[
          { en:'<b>Formation:</b> "changed" rocks that form when existing igneous, sedimentary or metamorphic rocks are put under <b>great pressure and very high temperature</b>. The rock changes form and usually develops new crystals.',
            ar:'<b>التكوّن:</b> صخور "متغيرة" تتكون عندما تتعرض صخور نارية أو رسوبية أو متحولة لـ<b>ضغط كبير ودرجة حرارة عالية جدًا</b>، فيتغير شكل الصخر وتتكون فيه بلورات جديدة.' },
          { en:'<b>Marble</b> is made when <b>limestone or chalk</b> is heated and squeezed.',
            ar:'<b>الرخام</b> يتكون عندما يُسخَّن ويُضغط <b>الحجر الجيري أو الطباشير</b>.' },
          { en:'<b>Slate</b> comes from the sedimentary rock <b>shale</b>; it breaks along neat, smooth lines and is used for roofing.',
            ar:'<b>الأردواز</b> يأتي من الصخر الرسوبي <b>الشيل</b>، وينكسر في خطوط مستقيمة ناعمة ويُستخدم في الأسقف.' },
          { en:'<b>Gneiss</b> is formed from the igneous rock <b>granite</b>; used in construction for stairs and arches.',
            ar:'<b>النيس</b> يتكون من الصخر الناري <b>الجرانيت</b>، ويُستخدم في البناء للسلالم والأقواس.' }
        ]},

        { t:'heading', en:'The Rock Cycle', ar:'دورة الصخر' },
        { t:'image', img:'assets/rock-cycle.png',
          caption:'Rocks continually change from one type to another. This process is called the rock cycle.',
          captionAr:'تتغير الصخور باستمرار من نوع إلى آخر، وتسمى هذه العملية دورة الصخر.' },

        { t:'heading', en:'Minerals', ar:'المعادن' },
        { t:'note', en:'Rocks are made of <b>one or more minerals</b>. Minerals have properties including colour, texture, luster, streak, cleavage and hardness.',
          ar:'الصخور مكونة من <b>معدن واحد أو أكثر</b>. وللمعادن خواص منها اللون والملمس والبريق والمخدش والانفصام والصلادة.' },
        { t:'image', img:'assets/mineral-luster-streak.png',
          caption:'Luster = how a mineral’s surface reflects light. Streak = a mineral’s colour in powdered form.',
          captionAr:'البريق = كيف يعكس سطح المعدن الضوء. المخدش = لون المعدن وهو مسحوق.' },
        { t:'image', img:'assets/mineral-hardness.png',
          caption:'Hardness = how easily a mineral can be scratched. Talc is the softest, diamond is the hardest.',
          captionAr:'الصلادة = مدى سهولة خدش المعدن. التلك هو الأنعم والألماس هو الأصلب.' },
        { t:'bullets', items:[
          { en:'Minerals can be sorted into <b>metals</b> and <b>gems</b>.', ar:'يمكن تقسيم المعادن إلى <b>فلزات</b> و<b>أحجار كريمة</b>.' },
          { en:'Gold and silver are <b>metals</b>. Diamonds are <b>gems</b>.', ar:'الذهب والفضة <b>فلزات</b>. والألماس <b>حجر كريم</b>.' }
        ]},

        { t:'heading', en:'Soil', ar:'التربة' },
        { t:'bullets', items:[
          { en:'Soil is a mixture of <b>rock particles, air, water and decomposing matter</b>.', ar:'التربة خليط من <b>جسيمات الصخر والهواء والماء والمواد المتحللة</b>.' },
          { en:'The main rock particles in soil are <b>sand, silt and clay</b>.', ar:'جسيمات الصخر الرئيسية في التربة هي <b>الرمل والطمي والطين</b>.' },
          { en:'Rich <b>topsoil</b> supports plant growth.', ar:'التربة السطحية الغنية تساعد على نمو النبات.' },
          { en:'Water pours <b>quickly</b> through <b>sandy</b> soil and <b>less quickly</b> through <b>clay</b> soil.', ar:'يمر الماء <b>بسرعة</b> خلال التربة <b>الرملية</b> و<b>ببطء أكثر</b> خلال التربة <b>الطينية</b>.' }
        ]},
        { t:'image', img:'assets/soil-layers.png',
          caption:'Layers of soil: A humus · B topsoil · C subsoil · D bedrock',
          captionAr:'طبقات التربة: A الدبال · B التربة السطحية · C التربة التحتية · D الصخر الأم' }
      ],

      glossary: [
        { term:'Igneous rock', def:'Rock that forms when magma or lava cools and hardens.', defAr:'صخر يتكون عندما يبرد الماجما أو اللافا ويتصلب.' },
        { term:'Sedimentary rock', def:'Rock that forms as sediment collects in layers and sticks together.', defAr:'صخر يتكون عندما تتجمع الرواسب في طبقات وتلتصق.' },
        { term:'Metamorphic rock', def:'Rock changed by great pressure and very high temperature.', defAr:'صخر تغيّر بفعل الضغط الكبير والحرارة العالية.' },
        { term:'Magma', def:'Hot liquid rock below Earth’s surface.', defAr:'صخر سائل ساخن تحت سطح الأرض.' },
        { term:'Lava', def:'Molten rock that has broken through to Earth’s surface.', defAr:'صخر منصهر خرج إلى سطح الأرض.' },
        { term:'Sandstone', def:'A sedimentary rock formed from ribbons of different sand.', defAr:'صخر رسوبي يتكون من شرائط رمل مختلفة.', img:'assets/sandstone.png' },
        { term:'Limestone', def:'A sedimentary rock made from bones and shells of sea creatures.', defAr:'صخر رسوبي يتكون من عظام وأصداف الكائنات البحرية.', img:'assets/limestone.png' },
        { term:'Conglomerate', def:'A sedimentary rock made of chunks of rock glued together by other rock.', defAr:'صخر رسوبي من قطع صخرية ملتصقة بصخر آخر.', img:'assets/conglomerate.png' },
        { term:'Marble', def:'A metamorphic rock made when limestone or chalk is heated and squeezed.', defAr:'صخر متحول يتكون من الحجر الجيري أو الطباشير بالحرارة والضغط.' },
        { term:'Slate', def:'A metamorphic rock from shale that breaks along neat, smooth lines.', defAr:'صخر متحول من الشيل ينكسر في خطوط ناعمة مستقيمة.' },
        { term:'Gneiss', def:'A metamorphic rock formed from granite.', defAr:'صخر متحول يتكون من الجرانيت.' },
        { term:'Rock cycle', def:'The process in which rocks change from one type to another.', defAr:'العملية التي تتحول فيها الصخور من نوع لآخر.', img:'assets/rock-cycle.png' },
        { term:'Mineral', def:'A natural material that rocks are made of; has colour, luster, streak and hardness.', defAr:'مادة طبيعية تتكون منها الصخور ولها لون وبريق ومخدش وصلادة.' },
        { term:'Luster', def:'How a mineral’s surface reflects light (glassy or metallic).', defAr:'كيف يعكس سطح المعدن الضوء (زجاجي أو فلزي).' },
        { term:'Streak', def:'A mineral’s colour in powdered form, seen on a streak plate.', defAr:'لون المعدن وهو مسحوق، ويظهر على لوح المخدش.' },
        { term:'Hardness', def:'How easily the surface of a mineral can be scratched.', defAr:'مدى سهولة خدش سطح المعدن.' },
        { term:'Soil', def:'A mixture of rock particles, air, water and decomposing matter.', defAr:'خليط من جسيمات الصخر والهواء والماء والمواد المتحللة.' }
      ],

      skills: [
        {
          id:'l3s1', title:'The three types of rock', titleAr:'أنواع الصخور الثلاثة', icon:'🪨',
          questions:[
            { t:'mcq', q:'When and how do metamorphic rocks form?', qAr:'متى وكيف تتكون الصخور المتحولة؟',
              choices:[
                'When lava is released from volcanoes, the lava cools and becomes rock.',
                'When sediment is deposited in layers, the sediment sticks together and becomes rock.',
                'When rock is worn away by rainfall, the particles collect on flat surfaces.',
                'When heat and pressure act on rock, the rock changes form.'], a:3,
              ex:'Metamorphic = "changed" rock. Heat + pressure change its form.',
              exAr:'الصخر المتحول = صخر "متغير"؛ الحرارة والضغط يغيران شكله.' },

            { t:'mcq', q:'Which statement best describes how sedimentary rocks form?', qAr:'أي عبارة تصف بشكل أفضل كيفية تكون الصخور الرسوبية؟',
              choices:[
                'They form from molten rock, or magma.',
                'They are squeezed under heat and pressure until new crystals form.',
                'They form inside Earth’s crust.',
                'They form as sediment collects in layers that become stuck together.'], a:3,
              ex:'Sediment settles in layers and sticks together as if glued.',
              exAr:'تستقر الرواسب في طبقات وتلتصق كأنها بالغراء.' },

            { t:'mcq', q:'__________ rocks form from molten rock, or magma.', qAr:'الصخور __________ تتكون من الصخر المنصهر أو الماجما.',
              choices:['Igneous','Sedimentary','Metamorphic','Volcano'], a:0,
              ex:'Igneous rock forms when magma or lava cools and hardens.',
              exAr:'يتكون الصخر الناري عندما يبرد الماجما أو اللافا ويتصلب.' },

            { t:'mcq', q:'__________ heats up below or inside Earth’s crust.', qAr:'__________ يسخن تحت أو داخل قشرة الأرض.',
              choices:['Igneous','Sedimentary','Metamorphic','Magma'], a:3,
              ex:'Magma is the hot liquid rock below the surface.',
              exAr:'الماجما هو الصخر السائل الساخن تحت السطح.' },

            { t:'mcq', q:'__________ rock forms from particles in the environment that settle to form layers.', qAr:'الصخر __________ يتكون من جسيمات في البيئة تستقر مكونة طبقات.',
              choices:['Igneous','Sedimentary','Metamorphic','Volcano'], a:1,
              ex:'Sedimentary rock.', exAr:'الصخر الرسوبي.' },

            { t:'mcq', q:'Rock can be changed by heat, pressure, or both. Rock that forms this way is called __________ rock.', qAr:'يمكن أن يتغير الصخر بالحرارة أو الضغط أو كليهما، ويسمى الصخر الناتج __________.',
              choices:['igneous','sedimentary','metamorphic','volcano'], a:2,
              ex:'Metamorphic rock.', exAr:'الصخر المتحول.' },

            { t:'mcq', q:'Which rock is made when limestone or chalk is heated and squeezed?', qAr:'أي صخر يتكون عندما يُسخَّن ويُضغط الحجر الجيري أو الطباشير؟',
              choices:['Slate','Marble','Gneiss','Sandstone'], a:1,
              ex:'Marble comes from limestone or chalk.', exAr:'الرخام يأتي من الحجر الجيري أو الطباشير.' },

            { t:'mcq', q:'The igneous rock granite becomes which metamorphic rock?', qAr:'الصخر الناري الجرانيت يتحول إلى أي صخر متحول؟',
              choices:['Marble','Slate','Gneiss','Limestone'], a:2,
              ex:'Granite → gneiss.', exAr:'الجرانيت ← النيس.' },

            { t:'mcq', q:'Which metamorphic rock breaks along neat, smooth lines and is used for roofing?', qAr:'أي صخر متحول ينكسر في خطوط ناعمة مستقيمة ويُستخدم في الأسقف؟',
              choices:['Slate','Marble','Gneiss','Conglomerate'], a:0,
              ex:'Slate, which comes from shale.', exAr:'الأردواز Slate ويأتي من الشيل.' },

            { t:'tf', q:'Gneiss and slate are igneous rocks.', qAr:'النيس والأردواز صخور نارية.', a:false,
              ex:'False — they are metamorphic rocks.', exAr:'خطأ — هما صخران متحولان.' },
            { t:'tf', q:'Marble is a metamorphic rock.', qAr:'الرخام صخر متحول.', a:true, ex:'True.', exAr:'صح.' },
            { t:'tf', q:'Igneous rocks can be found at plate boundaries.', qAr:'توجد الصخور النارية عند حدود الصفائح.', a:true,
              ex:'True — plate boundaries are active areas where magma reaches the surface.',
              exAr:'صح — حدود الصفائح مناطق نشطة يصل فيها الماجما إلى السطح.' },
            { t:'tf', q:'Scientists classify rocks on how they are formed.', qAr:'يصنف العلماء الصخور حسب طريقة تكوّنها.', a:true, ex:'True.', exAr:'صح.' },
            { t:'tf', q:'Igneous rocks form only above the Earth’s surface.', qAr:'تتكون الصخور النارية فوق سطح الأرض فقط.', a:false,
              ex:'False — magma can also cool and harden below the surface.',
              exAr:'خطأ — يمكن أن يبرد الماجما ويتصلب تحت السطح أيضًا.' },
            { t:'tf', q:'It takes a short time for magma to cool into igneous rocks.', qAr:'يحتاج الماجما وقتًا قصيرًا ليبرد ويصبح صخرًا ناريًا.', a:false,
              ex:'False — cooling and hardening usually takes a very long time.',
              exAr:'خطأ — التبريد والتصلب يستغرق عادة وقتًا طويلًا جدًا.' },
            { t:'tf', q:'Igneous, sedimentary, and metamorphic rock are formed in one way.', qAr:'تتكون الصخور النارية والرسوبية والمتحولة بطريقة واحدة.', a:false,
              ex:'False — each type forms in a different way.', exAr:'خطأ — كل نوع يتكون بطريقة مختلفة.' },
            { t:'tf', q:'Heat and pressure change the rock.', qAr:'الحرارة والضغط يغيران الصخر.', a:true, ex:'True — that makes metamorphic rock.', exAr:'صح — وهذا يكوّن الصخر المتحول.' },

            { t:'term', q:'A sedimentary rock that forms from ribbons of different sand.', qAr:'صخر رسوبي يتكون من شرائط رمل مختلفة.',
              a:['sandstone','sand stone'], bank:['Sandstone','Limestone','Conglomerate','Marble','Slate'],
              ex:'Sandstone.', exAr:'الحجر الرملي.' },
            { t:'term', q:'A sedimentary rock that forms from chunks of rock glued together by other rock.', qAr:'صخر رسوبي يتكون من قطع صخرية ملتصقة بصخر آخر.',
              a:['conglomerate'], bank:['Conglomerate','Sandstone','Limestone','Gneiss','Shale'],
              ex:'Conglomerate.', exAr:'الصخر المدمج Conglomerate.' },
            { t:'term', q:'A sedimentary rock that forms from bones and shells of sea creatures.', qAr:'صخر رسوبي يتكون من عظام وأصداف الكائنات البحرية.',
              a:['limestone','lime stone'], bank:['Limestone','Sandstone','Conglomerate','Marble','Slate'],
              ex:'Limestone.', exAr:'الحجر الجيري.' },
            { t:'term', q:'A type of rock that forms when lava or magma cools.', qAr:'نوع من الصخور يتكون عندما يبرد اللافا أو الماجما.',
              a:['igneous','igneous rock','igneous rocks'], bank:['Igneous rock','Sedimentary rock','Metamorphic rock','Marble','Soil'],
              ex:'Igneous rock.', exAr:'الصخر الناري.' },
            { t:'term', q:'Rock that forms when sedimentary, igneous, or other metamorphic rock is put under great pressure and very high temperature.', qAr:'صخر يتكون عندما تتعرض صخور رسوبية أو نارية أو متحولة لضغط كبير وحرارة عالية.',
              a:['metamorphic','metamorphic rock','metamorphic rocks'], bank:['Metamorphic rock','Igneous rock','Sedimentary rock','Magma','Soil'],
              ex:'Metamorphic rock.', exAr:'الصخر المتحول.' },

            { t:'match', q:'Match each metamorphic rock with the rock it came from.', qAr:'وصّل كل صخر متحول بالصخر الذي جاء منه.',
              pairs:[
                { l:'Marble', r:'Limestone or chalk' },
                { l:'Slate', r:'Shale' },
                { l:'Gneiss', r:'Granite' }
              ],
              ex:'Marble ← limestone/chalk, slate ← shale, gneiss ← granite.',
              exAr:'الرخام ← الحجر الجيري، الأردواز ← الشيل، النيس ← الجرانيت.' },

            { t:'match', q:'Match each rock type with how it forms.', qAr:'وصّل كل نوع صخر بطريقة تكوّنه.',
              pairs:[
                { l:'Igneous', r:'Magma or lava cools and hardens' },
                { l:'Sedimentary', r:'Sediment settles in layers and sticks together' },
                { l:'Metamorphic', r:'Heat and pressure change existing rock' }
              ],
              ex:'Rocks are classified by how they form.', exAr:'تُصنَّف الصخور حسب طريقة تكوّنها.' },

            { t:'fill', q:'When magma or lava cools, ______ rock forms.', qAr:'عندما يبرد الماجما أو اللافا يتكون الصخر ______.',
              bank:['igneous','sedimentary','metamorphic','magma','soil'], a:[['igneous']],
              ex:'Igneous rock.', exAr:'الصخر الناري.' },
            { t:'fill', q:'Common sedimentary rocks include ______, ______ and ______.', qAr:'من الصخور الرسوبية الشائعة ______ و ______ و ______.',
              bank:['sandstone','limestone','conglomerate','marble','slate','gneiss'],
              a:[['sandstone'],['limestone'],['conglomerate']], anyOrder:true,
              ex:'Sandstone, limestone and conglomerate.', exAr:'الحجر الرملي والحجر الجيري والصخر المدمج.' },
            { t:'fill', q:'A metamorphic rock which breaks along neat lines is ______.', qAr:'الصخر المتحول الذي ينكسر في خطوط مستقيمة هو ______.',
              bank:['slate','marble','gneiss','shale','granite'], a:[['slate']],
              ex:'Slate.', exAr:'الأردواز.' },
            { t:'fill', q:'Igneous granite becomes the metamorphic rock ______.', qAr:'الجرانيت الناري يتحول إلى الصخر المتحول ______.',
              bank:['gneiss','slate','marble','shale','sandstone'], a:[['gneiss']],
              ex:'Gneiss.', exAr:'النيس.' },
            { t:'fill', q:'______ is made when limestone or chalk is heated and squeezed.', qAr:'______ يتكون عندما يُسخَّن ويُضغط الحجر الجيري أو الطباشير.',
              bank:['Marble','Slate','Gneiss','Sandstone','Magma'], a:[['marble']],
              ex:'Marble.', exAr:'الرخام.' },
            { t:'fill', q:'______ is hot liquid rock.', qAr:'______ صخر سائل ساخن.',
              bank:['Magma','Marble','Soil','Sediment','Streak'], a:[['magma']],
              ex:'Magma.', exAr:'الماجما.' },
            { t:'fill', q:'The rocks continually change from one type to another type of rock. This process is called the ______.', qAr:'تتغير الصخور باستمرار من نوع لآخر، وتسمى هذه العملية ______.',
              bank:['rock cycle','rock','soil','streak','luster'], a:[['rock cycle','rockcycle','the rock cycle']],
              ex:'The rock cycle.', exAr:'دورة الصخر.' },
            { t:'fill', q:'Weather, such as ______, can change rocks into bits of rocks.', qAr:'الطقس، مثل ______، يمكن أن يحوّل الصخور إلى قطع صغيرة.',
              bank:['rain','marble','magma','soil','streak'], a:[['rain','wind','rainfall']],
              ex:'Rain (or wind) breaks rock into smaller bits.', exAr:'المطر (أو الرياح) يفتت الصخور إلى قطع أصغر.' },
            { t:'fill', q:'Rocks are often sorted by their ______.', qAr:'تُصنَّف الصخور غالبًا حسب ______.',
              bank:['properties','streak','soil','magma','cycle'], a:[['properties','property']],
              ex:'By their properties (colour, texture, hardness…).', exAr:'حسب خواصها (اللون، الملمس، الصلادة…).' }
          ]
        },

        {
          id:'l3s2', title:'Minerals', titleAr:'المعادن', icon:'💎',
          questions:[
            { t:'mcq', q:'Rocks are made of one or more __________.', qAr:'الصخور مكونة من __________ واحد أو أكثر.',
              choices:['minerals','sands','toys','shells'], a:0,
              ex:'Rocks are made of minerals.', exAr:'الصخور مكونة من معادن.' },
            { t:'mcq', q:'__________ is how a mineral’s surface reflects light.', qAr:'__________ هو كيفية عكس سطح المعدن للضوء.',
              choices:['Streak','Luster','Hardness','Texture'], a:1,
              ex:'Luster — glassy (shiny like glass) or metallic (like polished metal).',
              exAr:'البريق Luster — زجاجي (لامع كالزجاج) أو فلزي (كالمعدن المصقول).' },
            { t:'mcq', q:'A mineral’s colour in powdered form is its __________.', qAr:'لون المعدن وهو مسحوق يسمى __________.',
              choices:['luster','hardness','streak','texture'], a:2,
              ex:'Streak — seen by rubbing the mineral across a streak plate.',
              exAr:'المخدش Streak — ويظهر بحك المعدن على لوح المخدش.' },
            { t:'mcq', q:'__________ is how easily the surface of a mineral can be scratched.', qAr:'__________ هي مدى سهولة خدش سطح المعدن.',
              choices:['Luster','Streak','Hardness','Colour'], a:2,
              ex:'Hardness.', exAr:'الصلادة.' },
            { t:'mcq', q:'Which mineral is the hardest?', qAr:'أي معدن هو الأصلب؟',
              choices:['Talc','Quartz','Calcite','Diamond'], a:3,
              ex:'Diamond is the hardest mineral and may be used to make cutting tools.',
              exAr:'الألماس أصلب المعادن ويُستخدم في صنع أدوات القطع.' },
            { t:'mcq', q:'Which mineral is the softest?', qAr:'أي معدن هو الأنعم؟',
              choices:['Talc','Diamond','Quartz','Gold'], a:0,
              ex:'Talc is the softest mineral.', exAr:'التلك هو أنعم المعادن.' },
            { t:'mcq', q:'Gold and silver are __________, and diamonds are __________.', qAr:'الذهب والفضة __________، والألماس __________.',
              choices:['gems, metals','metals, gems','rocks, soil','soil, rocks'], a:1,
              ex:'Minerals can be sorted into metals and gems.', exAr:'يمكن تقسيم المعادن إلى فلزات وأحجار كريمة.' },
            { t:'tf', q:'A mineral with greater hardness can scratch a mineral with lower hardness.', qAr:'المعدن الأصلب يستطيع خدش المعدن الأقل صلادة.', a:true,
              ex:'True — for example quartz scratches calcite.', exAr:'صح — مثلًا الكوارتز يخدش الكالسيت.' },
            { t:'tf', q:'A glassy luster looks like polished metal.', qAr:'البريق الزجاجي يبدو كالمعدن المصقول.', a:false,
              ex:'False — a glassy luster is shiny like glass; a <b>metallic</b> luster looks like polished metal.',
              exAr:'خطأ — البريق الزجاجي لامع كالزجاج، أما البريق <b>الفلزي</b> فيشبه المعدن المصقول.' },
            { t:'fill', q:'______ have properties, including color, texture, luster, streak, cleavage, and hardness.', qAr:'______ لها خواص تشمل اللون والملمس والبريق والمخدش والانفصام والصلادة.',
              bank:['Minerals','Soil','Magma','Sediment','Plates'], a:[['mineral','minerals']],
              ex:'Minerals.', exAr:'المعادن.' },
            { t:'fill', q:'______ is how a mineral’s surface reflects light.', qAr:'______ هو كيفية عكس سطح المعدن للضوء.',
              bank:['Luster','Streak','Hardness','Soil','Magma'], a:[['luster','lustre']],
              ex:'Luster.', exAr:'البريق.' },
            { t:'match', q:'Match each mineral property with its meaning.', qAr:'وصّل كل خاصية معدنية بمعناها.',
              pairs:[
                { l:'Luster', r:'How the surface reflects light' },
                { l:'Streak', r:'The colour of the mineral in powder' },
                { l:'Hardness', r:'How easily it can be scratched' }
              ],
              ex:'Review the minerals table.', exAr:'راجعي جدول المعادن.' }
          ]
        },

        {
          id:'l3s3', title:'Soil', titleAr:'التربة', icon:'🌱',
          questions:[
            { t:'mcq', q:'Soil is a mixture of rock particles, air, water, and __________.', qAr:'التربة خليط من جسيمات الصخر والهواء والماء و__________.',
              choices:['minerals.','decomposing matter.','sand only.','shell.'], a:1,
              ex:'Soil = rock particles + air + water + decomposing matter.',
              exAr:'التربة = جسيمات صخر + هواء + ماء + مواد متحللة.' },
            { t:'mcq', q:'The main rock particles in soil are __________.', qAr:'جسيمات الصخر الرئيسية في التربة هي __________.',
              choices:['sand, silt, and clay.','gravel, pebbles, and stones.','sand, gravel, and dust.','stones, dust.'], a:0,
              ex:'Sand, silt and clay.', exAr:'الرمل والطمي والطين.' },
            { t:'mcq', q:'Rich topsoil supports __________.', qAr:'التربة السطحية الغنية تدعم __________.',
              choices:['water flow.','air quality.','plant growth.','animal growth.'], a:2,
              ex:'Rich topsoil supports plant growth.', exAr:'التربة السطحية الغنية تساعد على نمو النبات.' },
            { t:'mcq', q:'Water pours quickly through __________ soil and less quickly through __________ soil.', qAr:'يمر الماء بسرعة خلال التربة __________ وببطء أكثر خلال التربة __________.',
              choices:['Clay, sandy','sandy, clay','silty, sandy','silty, clay'], a:1,
              ex:'Sandy soil has big spaces, so water passes quickly. Clay is packed tightly, so water is slow.',
              exAr:'التربة الرملية بها فراغات كبيرة فيمر الماء بسرعة، أما الطينية فمتماسكة فيمر الماء ببطء.' },
            { t:'tf', q:'The main rock particles in soil are sand, silt, and clay.', qAr:'جسيمات الصخر الرئيسية في التربة هي الرمل والطمي والطين.', a:true, ex:'True.', exAr:'صح.' },
            { t:'fill', q:'______ is a mixture of rock particles, air, water, and decomposing matter.', qAr:'______ خليط من جسيمات الصخر والهواء والماء والمواد المتحللة.',
              bank:['Soil','Magma','Mineral','Sediment','Luster'], a:[['soil']],
              ex:'Soil.', exAr:'التربة.' },
            { t:'label', q:'Identify and label the parts of the soil diagram.', qAr:'حددي وسمّي أجزاء مخطط التربة.',
              img:'assets/soil-layers.png',
              bank:['Humus','Topsoil','Subsoil','Bedrock'],
              points:[
                { id:'A', a:['humus'] },
                { id:'B', a:['topsoil'] },
                { id:'C', a:['subsoil'] },
                { id:'D', a:['bedrock'] }
              ],
              ex:'A = humus (dark decomposing matter), B = topsoil (roots grow here), C = subsoil, D = bedrock.',
              exAr:'A = الدبال (مواد متحللة داكنة)، B = التربة السطحية (تنمو فيها الجذور)، C = التربة التحتية، D = الصخر الأم.' }
          ]
        }
      ]
    },

    /* ========================================================
       LESSON 4 — Weathering and Erosion
       ======================================================== */
    {
      id: 'l4',
      num: 4,
      title: 'Weathering and Erosion',
      titleAr: 'التجوية والتعرية',
      blurb: 'How rock is broken down, carried away, and dropped in a new place to build new landforms.',
      blurbAr: 'كيف تتفتت الصخور وتُنقل وتستقر في مكان جديد لتكوّن تضاريس جديدة.',

      cards: [
        { t:'hero', img:'assets/pitted-rock.png',
          en:'<b>Weathering</b> is the process that wears away or breaks down rock into smaller pieces. There are two primary types: <b>chemical</b> and <b>physical</b>.',
          ar:'<b>التجوية</b> هي العملية التي تفتت الصخر إلى قطع أصغر. ولها نوعان رئيسيان: <b>كيميائية</b> و<b>فيزيائية</b>.' },

        { t:'compare',
          headers:['Feature','Chemical Weathering','Physical Weathering'],
          headersAr:['البند','التجوية الكيميائية','التجوية الفيزيائية'],
          rows:[
            { k:'Definition', kAr:'التعريف',
              a:'Causes rock materials to turn into new kinds of materials due to a chemical reaction between the rock and another material.',
              aAr:'تجعل مواد الصخر تتحول إلى مواد جديدة بسبب تفاعل كيميائي بين الصخر ومادة أخرى.',
              b:'Happens when rock is forced to flake or crack into smaller pieces without changing the material itself.',
              bAr:'تحدث عندما يتقشر الصخر أو يتشقق إلى قطع أصغر دون تغير المادة نفسها.' },
            { k:'Main causes', kAr:'الأسباب الرئيسية',
              a:'1. When rain mixes with chemicals in the air and interacts with the rock.<br>2. When plants rot and produce chemicals that interact with rock.',
              aAr:'١. عندما يختلط المطر بكيماويات الهواء ويتفاعل مع الصخر.<br>٢. عندما تتعفن النباتات وتنتج كيماويات تتفاعل مع الصخر.',
              b:'1. Wind<br>2. Water<br>3. Plant roots<br>4. Ice<br>5. Glaciers (large sheets of slow-moving ice)',
              bAr:'١. الرياح<br>٢. الماء<br>٣. جذور النبات<br>٤. الجليد<br>٥. الأنهار الجليدية (ألواح كبيرة من الجليد بطيء الحركة)' },
            { k:'Observable evidence', kAr:'الدليل الملاحَظ',
              a:'Surfaces become rough or pitted; deep pits or holes appear in the rock.',
              aAr:'تصبح الأسطح خشنة أو مثقبة، وتظهر حفر أو ثقوب عميقة في الصخر.',
              b:'Rocks showing visible cracks, flakes, or being broken into smaller fragments.',
              bAr:'صخور بها شقوق مرئية أو تقشر أو مكسورة إلى قطع أصغر.' },
            { k:'Example', kAr:'مثال',
              a:'A statue changing colour because its rock reacted with chemicals to form a new material.',
              aAr:'تمثال يتغير لونه لأن صخره تفاعل مع كيماويات وكوّن مادة جديدة.',
              b:'Glaciers cutting and cracking rock as they scrape over land.',
              bAr:'أنهار جليدية تقطع الصخر وتشققه وهي تحتك بالأرض.' }
          ]},

        { t:'note', en:'<b>Evidence:</b> is observable information that you can use to answer questions.',
          ar:'<b>الدليل:</b> معلومات يمكن ملاحظتها وتستخدمينها للإجابة عن الأسئلة.' },

        { t:'heading', en:'Erosion', ar:'التعرية' },
        { t:'note', en:'<b>Erosion:</b> is the process by which weathered particles are <b>removed</b> from the land.',
          ar:'<b>التعرية:</b> العملية التي تُنقل بها جسيمات الصخر المتجوية <b>بعيدًا</b> عن اليابسة.' },
        { t:'bullets', items:[
          { en:'<b>Water:</b> constant waves against the land can erode cliffs and shorelines.', ar:'<b>الماء:</b> الأمواج المستمرة تآكل الجروف والشواطئ.' },
          { en:'<b>Wind:</b> winds can move small particles over great distances.', ar:'<b>الرياح:</b> تنقل الجسيمات الصغيرة لمسافات كبيرة.' },
          { en:'<b>Glaciers:</b> move slowly, carrying particles with them to new places.', ar:'<b>الأنهار الجليدية:</b> تتحرك ببطء حاملة الجسيمات لأماكن جديدة.' },
          { en:'<b>Gravity:</b> pulls glaciers downward, causing particles to be picked up.', ar:'<b>الجاذبية:</b> تسحب الأنهار الجليدية لأسفل فتلتقط الجسيمات.' }
        ]},
        { t:'image', img:'assets/sea-cave.png',
          caption:'Waves can carve structures, such as sea caves, along the shore.',
          captionAr:'يمكن للأمواج أن تنحت تكوينات مثل الكهوف البحرية على الشاطئ.' },

        { t:'heading', en:'Deposition', ar:'الترسيب' },
        { t:'note', en:'<b>Deposition:</b> is the process in which particles removed by erosion are deposited or settled in a new place. It creates new landforms, such as <b>deltas</b>.',
          ar:'<b>الترسيب:</b> العملية التي تستقر فيها الجسيمات التي نقلتها التعرية في مكان جديد، وهي تكوّن تضاريس جديدة مثل <b>الدلتا</b>.' },
        { t:'image', img:'assets/delta.png',
          caption:'A delta: a place where a river flows into a larger body of water.',
          captionAr:'الدلتا: المكان الذي يصب فيه النهر في مسطح مائي أكبر.' },

        { t:'heading', en:'Changes in Landforms over Time', ar:'تغير التضاريس عبر الزمن' },
        { t:'bullets', items:[
          { en:'Weathering, erosion and deposition work together over <b>thousands of years</b> to constantly change and shape Earth’s surface.',
            ar:'تعمل التجوية والتعرية والترسيب معًا عبر <b>آلاف السنين</b> لتغير شكل سطح الأرض باستمرار.' },
          { en:'1. A large rock is weathered away by water and wind.', ar:'١. صخرة كبيرة تتفتت بفعل الماء والرياح.' },
          { en:'2. The weathered rock particles are removed from the rock by erosion.', ar:'٢. تُنقل جسيمات الصخر المتجوية بعيدًا بفعل التعرية.' },
          { en:'3. Then the particles get carried away and settle over time in a new place.', ar:'٣. ثم تُحمل الجسيمات وتستقر مع الوقت في مكان جديد.' }
        ]},
        { t:'image', img:'assets/arch.png',
          caption:'A large rock can take thousands of years to become an arch-like structure.',
          captionAr:'قد تستغرق الصخرة الكبيرة آلاف السنين لتصبح على شكل قوس.' }
      ],

      glossary: [
        { term:'Weathering', def:'The process that wears away or breaks down rock into smaller pieces.', defAr:'العملية التي تفتت الصخر إلى قطع أصغر.' },
        { term:'Chemical weathering', def:'Rock materials turn into new kinds of materials because of a chemical reaction.', defAr:'تحول مواد الصخر إلى مواد جديدة بسبب تفاعل كيميائي.' },
        { term:'Physical weathering', def:'Rock flakes or cracks into smaller pieces without the material changing.', defAr:'تقشر الصخر أو تشققه إلى قطع أصغر دون تغير المادة.' },
        { term:'Evidence', def:'Observable information you can use to answer questions.', defAr:'معلومات يمكن ملاحظتها وتستخدم للإجابة عن الأسئلة.' },
        { term:'Erosion', def:'The process by which weathered particles are removed from the land.', defAr:'العملية التي تُنقل بها الجسيمات المتجوية بعيدًا عن اليابسة.' },
        { term:'Deposition', def:'The process in which particles removed by erosion settle in a new place.', defAr:'العملية التي تستقر فيها الجسيمات المنقولة في مكان جديد.' },
        { term:'Delta', def:'A place where a river flows into a larger body of water.', defAr:'مكان يصب فيه النهر في مسطح مائي أكبر.', img:'assets/delta.png' },
        { term:'Glacier', def:'A large sheet of slow-moving ice.', defAr:'لوح كبير من الجليد بطيء الحركة.' }
      ],

      skills: [
        {
          id:'l4s1', title:'Weathering', titleAr:'التجوية', icon:'🪨',
          questions:[
            { t:'mcq', q:'__________ is the process that wears away or breaks down rock.', qAr:'__________ هي العملية التي تفتت الصخر.',
              choices:['Erosion','Weathering','Deposition','Evidence'], a:1,
              ex:'Weathering breaks rock into smaller pieces.', exAr:'التجوية تفتت الصخر إلى قطع أصغر.' },
            { t:'mcq', q:'__________ is observable information that you can use to answer questions.', qAr:'__________ معلومات يمكن ملاحظتها وتستخدم للإجابة عن الأسئلة.',
              choices:['Erosion','Weathering','Deposition','Evidence'], a:3,
              ex:'Evidence.', exAr:'الدليل Evidence.' },
            { t:'mcq', q:'__________ causes rock materials to turn into new kinds of materials.', qAr:'__________ تجعل مواد الصخر تتحول إلى مواد جديدة.',
              choices:['Erosion','Deposition','Physical weathering','Chemical weathering'], a:3,
              ex:'Only chemical weathering makes a NEW material.',
              exAr:'التجوية الكيميائية فقط هي التي تكوّن مادة جديدة.' },
            { t:'mcq', q:'__________ are large sheets of slow-moving ice that cut and crack rock as they scrape over land.', qAr:'__________ ألواح كبيرة من الجليد بطيء الحركة تقطع الصخر وتشققه.',
              choices:['Deposition','Glaciers','Weathering','Erosion'], a:1,
              ex:'Glaciers.', exAr:'الأنهار الجليدية Glaciers.' },
            { t:'mcq', q:'Which is an example of physical weathering?', qAr:'أي مما يلي مثال على التجوية الفيزيائية؟',
              choices:['A statue changing colour after reacting with chemicals','Plant roots cracking a rock apart','Rain mixing with chemicals in the air','Rock turning into a new material'], a:1,
              ex:'Physical weathering breaks rock without changing the material.',
              exAr:'التجوية الفيزيائية تكسر الصخر دون تغير المادة نفسها.' },
            { t:'mcq', img:'assets/pitted-rock.png', q:'Deep pits and holes in this rock are evidence of which kind of weathering?', qAr:'الحفر والثقوب العميقة في هذا الصخر دليل على أي نوع من التجوية؟',
              choices:['Physical weathering','Chemical weathering','Deposition','Erosion'], a:1,
              ex:'Rough, pitted surfaces are evidence of chemical weathering.',
              exAr:'الأسطح الخشنة المثقبة دليل على التجوية الكيميائية.' },
            { t:'tf', q:'Physical weathering happens when rain mixes with chemicals in the air and interacts with rocks.', qAr:'تحدث التجوية الفيزيائية عندما يختلط المطر بكيماويات الهواء ويتفاعل مع الصخور.', a:false,
              ex:'False — that is <b>chemical</b> weathering.', exAr:'خطأ — هذه هي التجوية <b>الكيميائية</b>.' },
            { t:'tf', q:'Water can break down rocks into smaller pieces.', qAr:'يمكن للماء أن يفتت الصخور إلى قطع أصغر.', a:true, ex:'True.', exAr:'صح.' },
            { t:'tf', q:'Chemical weathering can happen when plants rot and produce chemicals.', qAr:'يمكن أن تحدث التجوية الكيميائية عندما تتعفن النباتات وتنتج كيماويات.', a:true, ex:'True.', exAr:'صح.' },
            { t:'tf', q:'Chemical weathering cannot change rock materials.', qAr:'التجوية الكيميائية لا تستطيع تغيير مواد الصخر.', a:false,
              ex:'False — chemical weathering turns rock into new kinds of materials.',
              exAr:'خطأ — التجوية الكيميائية تحول الصخر إلى مواد جديدة.' },
            { t:'tf', q:'Deep holes in rocks are evidence of chemical change.', qAr:'الثقوب العميقة في الصخور دليل على تغير كيميائي.', a:true, ex:'True.', exAr:'صح.' },
            { t:'tf', q:'The two basic types of weathering are chemical and physical.', qAr:'النوعان الأساسيان للتجوية هما الكيميائية والفيزيائية.', a:true, ex:'True.', exAr:'صح.' },
            { t:'term', q:'The process that wears away or breaks down rocks.', qAr:'العملية التي تفتت الصخور.',
              a:['weathering'], bank:['Weathering','Erosion','Deposition','Evidence','Glaciers'],
              ex:'Weathering.', exAr:'التجوية.' },
            { t:'term', q:'A type of weathering that happens when wind, water, ice, or plants cause rock to break into smaller pieces.', qAr:'نوع من التجوية يحدث عندما تسبب الرياح أو الماء أو الجليد أو النبات تكسر الصخر.',
              a:['physical weathering','physical'], bank:['Physical weathering','Chemical weathering','Erosion','Deposition','Evidence'],
              ex:'Physical weathering.', exAr:'التجوية الفيزيائية.' },
            { t:'term', q:'A type of weathering that happens when rain mixes with chemicals in the air and interacts with the rock.', qAr:'نوع من التجوية يحدث عندما يختلط المطر بكيماويات الهواء ويتفاعل مع الصخر.',
              a:['chemical weathering','chemical'], bank:['Chemical weathering','Physical weathering','Erosion','Deposition','Evidence'],
              ex:'Chemical weathering.', exAr:'التجوية الكيميائية.' },
            { t:'term', q:'Large sheets of slow-moving ice that cut and crack rock as they scrape over land.', qAr:'ألواح كبيرة من الجليد بطيء الحركة تقطع الصخر وتشققه.',
              a:['glacier','glaciers'], bank:['Glaciers','Deltas','Trenches','Sediment','Evidence'],
              ex:'Glaciers.', exAr:'الأنهار الجليدية.' },
            { t:'order', q:'Number the four rocks in the correct order to show the process of physical weathering.', qAr:'رتبي الصخور الأربعة لتوضيح عملية التجوية الفيزيائية.',
              items:[
                { id:'s1', img:'assets/weather-step1.png', label:'A small crack appears' },
                { id:'s2', img:'assets/weather-step2.png', label:'The crack grows longer' },
                { id:'s3', img:'assets/weather-step3.png', label:'The crack opens wide' },
                { id:'s4', img:'assets/weather-step4.png', label:'The rock breaks apart' }
              ],
              a:['s1','s2','s3','s4'],
              ex:'Water gets into a small crack, freezes and expands, pushing the rock apart until it breaks.',
              exAr:'يدخل الماء في شق صغير ثم يتجمد ويتمدد ويدفع الصخر حتى ينكسر.' },
            { t:'fill', q:'The frozen water in the cracks ______ and pushes against the rock, breaking it.', qAr:'الماء المتجمد في الشقوق ______ ويضغط على الصخر فيكسره.',
              bank:['expands','slow','delta','erosion','build up'], a:[['expands','expand']],
              ex:'Frozen water expands.', exAr:'الماء المتجمد يتمدد.' },
            { t:'fill', q:'A large rock can be weathered away by ______ and ______.', qAr:'يمكن أن تتفتت صخرة كبيرة بفعل ______ و ______.',
              bank:['water','wind','ice','Gravity','delta','slow'], a:[['water'],['wind']], anyOrder:true,
              ex:'Water and wind.', exAr:'الماء والرياح.' }
          ]
        },

        {
          id:'l4s2', title:'Erosion & deposition', titleAr:'التعرية والترسيب', icon:'🏞️',
          questions:[
            { t:'mcq', img:'assets/erosion-diagram.png', q:'Erosion is shown in the picture by the letter …', qAr:'التعرية موضحة في الصورة بالحرف …',
              choices:['X','Y','Z'], a:1,
              ex:'Y is where the particles are being carried down the slope — that is erosion.',
              exAr:'الحرف Y هو مكان نقل الجسيمات أسفل المنحدر — وهذه هي التعرية.' },
            { t:'mcq', img:'assets/erosion-diagram.png', q:'Deposition is shown in the picture by the letter …', qAr:'الترسيب موضح في الصورة بالحرف …',
              choices:['X','Y','Z'], a:2,
              ex:'Z is at the bottom where the particles settle — that is deposition.',
              exAr:'الحرف Z في الأسفل حيث تستقر الجسيمات — وهذا هو الترسيب.' },
            { t:'mcq', img:'assets/erosion-diagram.png', q:'Weathering is shown in the picture by the letter …', qAr:'التجوية موضحة في الصورة بالحرف …',
              choices:['X','Y','Z'], a:0,
              ex:'X is at the top where the rain is breaking the rock apart — that is weathering.',
              exAr:'الحرف X في الأعلى حيث يفتت المطر الصخر — وهذه هي التجوية.' },
            { t:'mcq', q:'__________ is the process in which these weathered particles are removed from land.', qAr:'__________ هي العملية التي تُنقل بها الجسيمات المتجوية بعيدًا عن اليابسة.',
              choices:['Erosion','Weathering','Deposition','Evidence'], a:0,
              ex:'Erosion = removed / carried away.', exAr:'التعرية = النقل بعيدًا.' },
            { t:'mcq', q:'__________ is the process in which particles removed by erosion are deposited in a new place.', qAr:'__________ هي العملية التي تستقر فيها الجسيمات المنقولة في مكان جديد.',
              choices:['Erosion','Weathering','Deposition','Evidence'], a:2,
              ex:'Deposition = dropped / settled in a new place.', exAr:'الترسيب = الاستقرار في مكان جديد.' },
            { t:'mcq', q:'Erosion can cause __________ changes over time.', qAr:'يمكن أن تسبب التعرية تغيرات __________ مع الوقت.',
              choices:['Fast','Slow','Small','Big'], a:1,
              ex:'Erosion works slowly, over thousands of years.', exAr:'التعرية تعمل ببطء عبر آلاف السنين.' },
            { t:'mcq', q:'Choose the statement that best predicts what will happen to the weathered rock particles under a glacier when the glacier melts.', qAr:'اختاري العبارة التي تتنبأ بما يحدث لجسيمات الصخر المتجوية تحت النهر الجليدي عندما يذوب.',
              choices:[
                'The weathered rock particles will be deposited in a new place producing a new landform.',
                'The weathered rock particles will move to the top side of the melting glacier.',
                'The weathered rock particles will become a river.',
                'The weathered rock particles will also melt.'], a:0,
              ex:'The glacier carried them; when it melts it drops them — that is deposition, and it can build a new landform.',
              exAr:'النهر الجليدي حملها، وعندما يذوب يتركها — وهذا هو الترسيب، وقد يكوّن تضاريس جديدة.' },
            { t:'mcq', q:'A delta is formed where __________.', qAr:'تتكون الدلتا حيث __________.',
              choices:['a river flows into a larger body of water','a volcano erupts','two plates crash','a glacier starts'], a:0,
              ex:'A delta forms where a river flows into a larger body of water.',
              exAr:'تتكون الدلتا حيث يصب النهر في مسطح مائي أكبر.' },
            { t:'mcq', q:'Which is NOT a cause of erosion?', qAr:'أي مما يلي ليس سببًا للتعرية؟',
              choices:['Water','Wind','Gravity','Sunlight colour'], a:3,
              ex:'The causes of erosion are water, wind, glaciers and gravity.',
              exAr:'أسباب التعرية هي الماء والرياح والأنهار الجليدية والجاذبية.' },
            { t:'term', q:'The process in which weathered particles are removed from land.', qAr:'العملية التي تُنقل بها الجسيمات المتجوية بعيدًا عن اليابسة.',
              a:['erosion'], bank:['Erosion','Deposition','Weathering','Evidence','Delta'],
              ex:'Erosion.', exAr:'التعرية.' },
            { t:'term', q:'The process in which the particles settle in new locations.', qAr:'العملية التي تستقر فيها الجسيمات في أماكن جديدة.',
              a:['deposition'], bank:['Deposition','Erosion','Weathering','Evidence','Delta'],
              ex:'Deposition.', exAr:'الترسيب.' },
            { t:'fill', q:'A ______ can be formed at a place where a river flows into a large body of water.', qAr:'يمكن أن تتكون ______ في المكان الذي يصب فيه النهر في مسطح مائي كبير.',
              bank:['delta','erosion','slow','expands','build up'], a:[['delta']],
              ex:'A delta.', exAr:'الدلتا.' },
            { t:'fill', q:'As particles are deposited in one place over time, the particles can ______ producing new landforms.', qAr:'عندما تترسب الجسيمات في مكان واحد مع الوقت فإنها ______ مكوّنة تضاريس جديدة.',
              bank:['build up','expands','slow','delta','erosion'], a:[['build up','buildup','build-up']],
              ex:'They build up.', exAr:'تتراكم.' },
            { t:'fill', q:'The weathered rock particles are removed by the ______ process.', qAr:'تُنقل جسيمات الصخر المتجوية بواسطة عملية ______.',
              bank:['erosion','deposition','weathering','delta','slow'], a:[['erosion']],
              ex:'Erosion.', exAr:'التعرية.' },
            { t:'fill', q:'All the processes of ______, ______ and ______ can change a landform’s shape.', qAr:'كل عمليات ______ و ______ و ______ يمكن أن تغير شكل التضاريس.',
              bank:['weathering','erosion','deposition','delta','gravity','slow'],
              a:[['weathering'],['erosion'],['deposition']], anyOrder:true,
              ex:'Weathering, erosion and deposition.', exAr:'التجوية والتعرية والترسيب.' },
            { t:'fill', q:'Factors that cause particles of weathered rocks to be removed are ______, ______, ______ or ______.', qAr:'العوامل التي تنقل جسيمات الصخور المتجوية هي ______ و ______ و ______ أو ______.',
              bank:['water','wind','ice','Gravity','delta','slow','build up'],
              a:[['water'],['wind'],['ice'],['gravity']], anyOrder:true,
              ex:'Water, wind, ice (glaciers) and gravity.', exAr:'الماء والرياح والجليد (الأنهار الجليدية) والجاذبية.' },
            { t:'fill', q:'Erosion can cause ______ changes over time.', qAr:'يمكن أن تسبب التعرية تغيرات ______ مع الوقت.',
              bank:['slow','delta','erosion','expands','build up'], a:[['slow']],
              ex:'Slow changes.', exAr:'تغيرات بطيئة.' },
            { t:'order', q:'Put the three processes in the order they happen.', qAr:'رتبي العمليات الثلاث حسب ترتيب حدوثها.',
              items:[
                { id:'w', label:'Weathering — rock is broken into pieces' },
                { id:'e', label:'Erosion — the pieces are carried away' },
                { id:'d', label:'Deposition — the pieces settle in a new place' }
              ],
              a:['w','e','d'],
              ex:'First the rock breaks, then the pieces move, then they settle.',
              exAr:'أولًا يتفتت الصخر، ثم تُنقل القطع، ثم تستقر.' },
            { t:'match', q:'Match each process with what it does.', qAr:'وصّلي كل عملية بما تفعله.',
              pairs:[
                { l:'Weathering', r:'Breaks rock into smaller pieces' },
                { l:'Erosion', r:'Removes the pieces from the land' },
                { l:'Deposition', r:'Settles the pieces in a new place' }
              ],
              ex:'Break → carry → drop.', exAr:'تفتيت ← نقل ← استقرار.' },
            { t:'written', q:'How are weathering, erosion, and deposition related?', qAr:'ما العلاقة بين التجوية والتعرية والترسيب؟',
              keys:[['weather','break'],['erosion','remov','carri'],['deposit','settle','new place'],['landform','change','shape','surface']],
              model:'Weathering breaks rock into smaller pieces. Erosion then removes those weathered particles from the land and carries them away. Deposition settles the particles in a new place. Working together over thousands of years, they change the shape of landforms on Earth’s surface.',
              modelAr:'التجوية تفتت الصخر إلى قطع أصغر، ثم تنقل التعرية هذه الجسيمات بعيدًا عن اليابسة، ثم يرسبها الترسيب في مكان جديد. وهي تعمل معًا عبر آلاف السنين لتغيّر شكل تضاريس سطح الأرض.' }
          ]
        }
      ]
    }
  ]
});
