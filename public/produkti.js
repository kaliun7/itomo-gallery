// src="grivna_20.jpg"
const products = [
    // No1
    {
        price      : 198,
        name       : 'Сребърна мъжка гривна с кожа',
        id         : '20GRV',
        slug       : 'sreburna-mujka-grivna-s-koja',
        oldSlug    : '/large/20grv.html',
        desc       : '',
        sku        : '20GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '20grv.jpg' // !!!!!!!!
    },
    // No2
    {
        price      : 179,
        name       : 'Сребърна гривна, изработена от въже за катерене (алпинистко) с инкрустиран лазурит',
        id         : '25GRV',
        slug       : 'sreburna-grivna-izrabotena-ot-vuzhe-za-katerene',
        oldSlug    : '/large/25grv.html',
        desc       : '',
        sku        : '25GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '25grv.jpg'
    },
    // No3
    {
        price      : 449,
        name       : 'Ръчно изработена (кована) сребърна гривна',
        id         : '21GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna-inkrustiran-brilyant-sus-zlaten-obkov',
        oldSlug    : '/large/21grv.html',
        desc       : 'Инкрустиран брилянт със златен обков',
        sku        : '21GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '21grv.jpg'
    },
    // No4
    {
        price      : 598,
        name       : 'Ръчно изработена (кована) сребърна гривна;',
        id         : '22GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna',
        oldSlug    : '/large/22grv.html',
        desc       : 'инкрустиран брилянт със златен обков (14к); златни апликации',
        sku        : '22GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '22grv.jpg'
    },
    // No5
    {
        price      : 279,
        name       : 'Мъжка гривна от сребро и естествена кожа с ахат и черни циркони (2 бр.)',
        id         : '23GRV',
        slug       : 'muzhka-grivna-ot-srebro-i-estestvena-kozha-s-ahat-i-cherni-cirkoni-2-br',
        oldSlug    : '/large/23grv.html ',
        desc       : '',
        sku        : '23GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '23grv.jpg'
    },
    // No6
    {
        price      : 449,
        name       : 'Ръчно изработена (кована) сребърна гривна със златни апликации и инкрустиран брилянт със златен обков;',
        id         : '24GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna-sus-zlatni-aplikacii-i-inkrustiran-brilyant-sus-zlaten-obkov',
        oldSlug    : '/large/24grv.html',
        desc       : 'Ръчно изработена (кована) сребърна гривна със златни апликации и инкрустиран брилянт със златен обков; Злато 14к',
        sku        : '24GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '24grv.jpg'
    },
    // No7
    {
        price      : 98,
        name       : 'Сребро и естествена кожа (черна, кафява и бордо)',
        id         : '1GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna-kafyava-i-bordo',
        oldSlug    : '/large/large1.htm',
        desc       : '',
        sku        : '1GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '1grv.jpg'
    },
    // No8
    {
        price      : 189,
        name       : 'Кована сребърна гривна с емайли от малахит и лазурит',
        id         : '2GRV',
        slug       : 'kovana-sreburna-grivna-s-emajli-ot-malahit-i-lazurit',
        oldSlug    : '/large/large2.htm',
        desc       : '',
        sku        : '2GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '2grv.jpg'
    },
    // No9
    {
        price      : 219,
        name       : 'Сребърна гривна с естествена кожа (черна или кафява)',
        id         : '13GRV',
        slug       : 'sreburna-grivna-s-estestvena-kozha-cherna-ili-kafyava',
        oldSlug    : '/large/large13l.htm',
        desc       : '',
        sku        : '13GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '13grv.jpg'
    },
    // No10
    {
        price      : 469,
        name       : 'Ръчно изработена (кована) сребърна гривна, инкрустирана със злато 14к',
        id         : '16GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna-inkrustirana-sus-zlato-14k',
        oldSlug    : '/large/16gr_large.html',
        desc       : '',
        sku        : '16GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '16grv.jpg'
    },
    // No11
    {
        price      : 529,
        name       : 'Ръчно изработена (кована) сребърна гривна, инкрустирана със злато 14к и брилянт - 0.03k-VS-FG',
        id         : '17GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna-inkrustirana-sus-zlato-14k-i-brilyant-003k-vs-fg',
        oldSlug    : '/large/17gr_large.html',
        desc       : '',
        sku        : '17GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '17grv.jpg'
    },
    // No12
    {
        price      : 279,
        name       : 'Ръчно изработена (кована) сребърна гривна;',
        id         : '18GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna',
        oldSlug    : '/large/18gr_large.html',
        desc       : 'Инкрустиран смарагд със златен обков',
        sku        : '18GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '18grv.jpg'
    },
    // No13
    {
        price      : 268,
        name       : 'Масивна сребърна гривна',
        id         : '7GR',
        slug       : 'masivna-sreburna-grivna',
        oldSlug    : '/large/large7.htm',
        desc       : '',
        sku        : '7GR',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '7grv.jpg'
    },
    // No14
    {
        price      : 329,
        name       : 'Сребро и естествена кожа (черна)',
        id         : '8GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna',
        oldSlug    : '/large/large8.htm',
        desc       : '',
        sku        : '8GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '8grv.jpg'
    },
    // No15
    {
        price      : 369,
        name       : 'Сребърна гривна с хематит',
        id         : '9GRV',
        slug       : 'sreburna-grivna-s-hematit',
        oldSlug    : '/large/large9.htm',
        desc       : '',
        sku        : '9GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '9grv.jpg'
    },
    // No16
    {
        price      : 129,
        name       : 'Сребро и естествена кожа (черна, кафява и бордо)',
        id         : '10GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna-kafyava-i-bordo',
        oldSlug    : '/large/large10.htm',
        desc       : '',
        sku        : '10GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '10grv.jpg'
    },
    // No17
    {
        price      : 269,
        name       : 'Гривна, изработена от огъната сребърна вилица и емайли',
        id         : '11GRV',
        slug       : 'grivna-izrabotena-ot-ogunata-sreburna-vilica-i-emajli',
        oldSlug    : '/large/large11.htm',
        desc       : '',
        sku        : '11GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '11grv.jpg'
    },
    // No18
    {
        price      : 98,
        name       : 'Сребро и естествена кожа (черна, кафява и бордо)',
        id         : '12GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna-kafyava-i-bordo',
        oldSlug    : '/large/large12.htm',
        desc       : '',
        sku        : '12GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '12grv.jpg'
    },
    // No19
    {
        price      : 189,
        name       : 'Сребро и чемширово дърво с кожа, 2бр. кубични циркони',
        id         : '14GRV',
        slug       : 'srebro-i-chemshirovo-durvo-s-kozha-2br-kubichni-cirkoni',
        oldSlug    : '/large/large14l.htm',
        desc       : '',
        sku        : '14GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '14grv.jpg'
    },
    // No19
    {
        price      : 179,
        name       : 'Сребро и естествена кожа (черна, кафява и бордо)',
        id         : '15GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna-kafyava-i-bordo',
        oldSlug    : '/large/large15l.htm',
        desc       : '',
        sku        : '15GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '15grv'
    },
    // No20
    {
        price      : 198,
        name       : 'Сребърна гривна с емайли от яспис (по поръчка се изработват с различни цветове емайли )',
        id         : '3GRV',
        slug       : 'sreburna-grivna-s-emajli-ot-yaspis-po-poruchka-se-izrabotvat-s-razlichni-cvetove-emajli',
        oldSlug    : '/large/large3.htm',
        desc       : '',
        sku        : '3GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '3grv.jpg'
    },
    // No21
    {
        price      : 198,
        name       : 'Ажурна сребърна гривна',
        id         : '4GRV',
        slug       : 'azhurna-sreburna-grivna',
        oldSlug    : '/large/large4.htm',
        desc       : '',
        sku        : '4GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '4grv.jpg'
    },
    // No22
    {
        price      : 169,
        name       : 'Сребърна гривна с малахит (по поръчка се изработват с различни камъни )',
        id         : '5GRV',
        slug       : 'sreburna-grivna-s-malahit-po-poruchka-se-izrabotvat-s-razlichni-kamuni',
        oldSlug    : '/large/large5.htm',
        desc       : '',
        sku        : '5GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '5grv.jpg'
    },
    // No23
    {
        price      : 179,
        name       : 'Сребро и естествена кожа (черна, кафява и бордо)',
        id         : '6GRV',
        slug       : 'srebro-i-estestvena-kozha-cherna-kafyava-i-bordo',
        oldSlug    : '/large/large6.htm',
        desc       : '',
        sku        : '6GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '6grv.jpg'
    },
    // No24
    {
        price      : 519,
        name       : 'Масивна сребърна гривна със златни апликации 14 к',
        id         : '31GRV',
        slug       : 'masivna-sreburna-grivna-sus-zlatni-aplikacii-14-k',
        oldSlug    : '/large/31GRV.html',
        desc       : '',
        sku        : '31GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '31grv.jpg'
    },
    // No25
    {
        price      : 189,
        name       : 'Сребърна гривна с чемширово дърво и кожа',
        id         : '26GRV',
        slug       : 'sreburna-grivna-s-chemshirovo-durvo-i-kozha',
        oldSlug    : '/large/26grv.html',
        desc       : '',
        sku        : '26GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '26grv.jpg'
    },
    // No26
    {
        price      : 139,
        name       : 'Сребърна гривна в комбинация с естествена черна кожа',
        id         : '27GRV',
        slug       : 'sreburna-grivna-v-kombinaciya-s-estestvena-cherna-kozha',
        oldSlug    : '/large/27grv.html',
        desc       : '',
        sku        : '27GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '27grv.jpg'
    },
        // No27
    {
        price      : 128,
        name       : 'Сребърна гривна с тюркоаз (по поръчка се изработват с различни камъни)',
        id         : '28GRV',
        slug       : 'sreburna-grivna-s-tyurkoaz-po-poruchka-se-izrabotvat-s-razlichni-kamuni',
        oldSlug    : '/large/28grv.html',
        desc       : '',
        sku        : '28GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '28grv.jpg'
    },
        // No28
    {
        price      : 169,
        name       : 'Сребърна гривна, изработена от въже за катерене (алпинистко)',
        id         : '29GRV',
        slug       : 'sreburna-grivna-izrabotena-ot-vuzhe-za-katerene-alpinistko',
        oldSlug    : '/large/29grv.html',
        desc       : '',
        sku        : '27GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '29grv.jpg'
    },
        // No29
    {
        price      : 298,
        name       : 'Ръчно изработена (кована) сребърна гривна, инкрустирана със злато 14к',
        id         : '30GRV',
        slug       : 'ruchno-izrabotena-kovana-sreburna-grivna-inkrustirana-sus-zlato-14k',
        oldSlug    : '/large/30grv.html',
        desc       : '',
        sku        : '30GRV',
        category   : 'sreburni grivni',
        attributes : null,
        image      : '30grv.jpg'
        },
    // No1
    {
        price      : 219,
        name       : 'Ръчно изработен патиниран сребърен пръстен със златна инкрустация (14к) и брилянт (1,8mm)',
        id         : '25PR',
        slug       : 'ruchno-izraboten-patiniran-sreburen-prusten-sus-zlatna-inkrustaciya-14k-i-brilyant-18mm',
        oldSlug    : '/large/rings/pr25.html',
        desc       : '',
        sku        : '25PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '25PR.jpg'
    },
    // No2
    {
        price      : 89,
        name       : 'Сребърен пръстен с емайли от малахит и хематит;',
        id         : '26PR',
        slug       : 'sreburen-prusten-s-emajli-ot-malahit-i-hematit',
        oldSlug    : '/large/rings/pr26.html',
        desc       : 'Ширина на пръстена: 12 мм',
        sku        : '26PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '26PR (1).jpg'
    },
    // No3
    {
        price      : 282,
        name       : 'Ръчно изработен патиниран сребърен пръстен със златни апликации и инкрустиран брилянт (1,8 мм)',
        id         : '27PR',
        slug       : 'ruchno-izraboten-patiniran-sreburen-prusten-sus-zlatni-aplikacii-i-inkrustiran-brilyant-18-mm',
        oldSlug    : '/large/rings/pr27.html',
        desc       : 'Ширина на пръстена: 9 мм; Злато: 14к',
        sku        : '27PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '27pr.jpg'
    },
    // No4
    {
        price      : 76,
        name       : 'Ръчно изработен патиниран сребърен пръстен с класически емайли',
        id         : '28PR',
        slug       : 'ruchno-izraboten-patiniran-sreburen-prusten-s-klasicheski-emajli',
        oldSlug    : '/large/rings/pr28.html',
        desc       : '',
        sku        : '28PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '28pr.jpg'
    },
    // No5
    {
        price      : 69,
        name       : 'Патиниран сребърен пръстен',
        id         : '29PR',
        slug       : 'patiniran-sreburen-prusten',
        oldSlug    : '/large/rings/pr29.html',
        desc       : '',
        sku        : '29PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '29pr.jpg'
    },
    // No6
    {
        price      : 69,
        name       : 'Патиниран сребърен пръстен',
        id         : '30 PR',
        slug       : 'patiniran-sreburen-prusten',
        oldSlug    : '/large/rings/pr30.html',
        desc       : '',
        sku        : '30 PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '30pr.jpg'
    },
    // No7
    {
        price      : 169,
        name       : 'Сребърен пръстен с кубичен циркон и златна апликация -14к',
        id         : '19PR',
        slug       : 'sreburen-prusten-s-kubichen-cirkon-i-zlatna-aplikaciya-14k',
        oldSlug    : '/large/rings/pr19.html',
        desc       : 'диаметър - 38 мм',
        sku        : '19PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '19pr.jpg'
    },
    // No8
    {
        price      : 74,
        name       : 'Ръчно изработен сребърен пръстен с кубичен циркон',
        id         : '20PR',
        slug       : 'ruchno-izraboten-sreburen-prusten-s-kubichen-cirkon',
        oldSlug    : '/large/rings/pr20.html',
        desc       : '',
        sku        : '20PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '20pr.jpg'
    },
    // No9
    {
        price      : 149,
        name       : 'Масивен сребърен пръстен с кубичен циркон и емайли от хематит и яспис',
        id         : '21PR',
        slug       : 'masiven-sreburen-prusten-s-kubichen-cirkon-i-emajli-ot-hematit-i-yaspis',
        oldSlug    : '/large/rings/pr21.html',
        desc       : '',
        sku        : '21PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '21pr.jpg'
    },
    // No10
    {
        price      : 116,
        name       : 'Ръчно изработен сребърен пръстен Комбинация от чемширово дърво, сребро и тигрово око',
        id         : '16PR',
        slug       : 'ruchno-izraboten-sreburen-prusten-kombinaciya-ot-chemshirovo-durvo-srebro-i-tigrovo-oko',
        oldSlug    : '/large/rings/pr16.htm',
        desc       : 'Ръчно изработен сребърен пръстен Комбинация от чемширово дърво, сребро и тигрово око',
        sku        : '16PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '16pr.jpg'
    },
    // No11
    {
        price      : 198,
        name       : 'Ръчно изработен сребърен пръстен Комбинация от слонова кост, абанос и кехлибар (в средата)',
        id         : '17PR',
        slug       : 'ruchno-izraboten-sreburen-prusten-kombinaciya-ot-slonova-kost-abanos-i-kehlibar-v-sredata',
        oldSlug    : '/large/rings/pr17.htm',
        desc       : '',
        sku        : '17PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '17pr.jpg'
    },
    // No12
    {
        price      : 219,
        name       : 'Ръчно изработен сребърен пръстен със златни апликации - 14к и брилянт - 1,5 мм',
        id         : '18PR',
        slug       : 'ruchno-izraboten-sreburen-prusten-sus-zlatni-aplikacii-14k-i-brilyant-15-mm',
        oldSlug    : '/large/rings/pr18.htm',
        desc       : '',
        sku        : '18PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '18pr.jpg'
    },
    // No13
    {
        price      : 89,
        name       : 'Сребърен пръстен с емайли от естествени камъни - "СЕМЕЙСТВО"',
        id         : '1PR',
        slug       : 'sreburen-prusten-s-emajli-ot-estestveni-kamuni-semejstvo',
        oldSlug    : '/large/rings/pr1.htm',
        desc       : '',
        sku        : '1PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : 'pr1.jpg'
    },
    // No14
    {
        price      : 65,
        name       : 'Сребърен пръстен с емайли от малахит',
        id         : '2PR',
        slug       : 'sreburen-prusten-s-emajli-ot-malahit',
        oldSlug    : '/large/rings/pr2.htm',
        desc       : '',
        sku        : '2PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : 'pr2.jpg'
    },
    // No15
    {
        price      : 79,
        name       : 'Сребърен пръстен с емайли',
        id         : '3PR',
        slug       : 'sreburen-prusten-s-emajli',
        oldSlug    : '/large/rings/pr3.htm',
        desc       : '',
        sku        : '3PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : 'pr3.jpg'
    },
    // No16
    {
        price      : 57,
        name       : 'Сребърен пръстен с емайли',
        id         : '22PR',
        slug       : 'sreburen-prusten-s-emajli',
        oldSlug    : '/large/rings/pr22.html',
        desc       : '',
        sku        : '22PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '22pr.jpg'
    },
    // No17
    {
        price      : 96,
        name       : 'Сребърен пръстен с дърво от чемшир',
        id         : '23PR',
        slug       : 'sreburen-prusten-s-durvo-ot-chemshir',
        oldSlug    : '/large/rings/pr23.html',
        desc       : '',
        sku        : '23PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '23pr.jpg'
    },
    // No18
    {
        price      : 139,
        name       : 'Сребърен пръстен с въртяща се вътрешна част',
        id         : '24PR',
        slug       : 'sreburen-prusten-s-vurtyasha-se-vutreshna-chast',
        oldSlug    : '/large/rings/pr24.html',
        desc       : '',
        sku        : '24PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '24pr.jpg'
    },
    // No19
    {
        price      : 119,
        name       : 'Сребърен пръстен с чемшир',
        id         : '13PR',
        slug       : 'sreburen-prusten-s-chemshir',
        oldSlug    : '/large/rings/pr13pr.htm',
        desc       : '',
        sku        : '13PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '13pr.jpg'
    },
    // No20
    {
        price      : 139,
        name       : 'Ръчно изработени сребърни пръстени с чемширово дърво и кубични циркони',
        id         : '14PR',
        slug       : 'ruchno-izraboteni-sreburni-prusteni-s-chemshirovo-durvo-i-kubichni-cirkoni',
        oldSlug    : '/large/rings/pr14.htm',
        desc       : '',
        sku        : '14PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : 'pr14.jpg'
    },
    // No21
    {
        price      : 129,
        name       : 'Сребърен пръстен с емайли',
        id         : '15PR',
        slug       : 'sreburen-prusten-s-emajli',
        oldSlug    : '/large/rings/pr13.htm',
        desc       : '',
        sku        : '15PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '15pr.jpg'
    },
    // No22
    {
        price      : 149,
        name       : 'Сребърен пръстен',
        id         : '4PR',
        slug       : 'sreburen-prusten',
        oldSlug    : '/large/rings/pr4.htm',
        desc       : '',
        sku        : '4PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '4pr.jpg'
    },
    // No23
    {
        price      : 89,
        name       : 'Сребърен пръстен с емайли (по поръчка се изработват с различни цветове емайли)',
        id         : '5PR',
        slug       : 'sreburen-prusten-s-emajli-po-poruchka-se-izrabotvat-s-razlichni-cvetove-emajli',
        oldSlug    : '/large/rings/pr5.htm',
        desc       : '',
        sku        : '5PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '5pr.jpg'
    },
    // No24
    {
        price      : 89,
        name       : 'Сребърен пръстен',
        id         : '6PR',
        slug       : 'sreburen-prusten',
        oldSlug    : '/large/rings/pr6.htm',
        desc       : '',
        sku        : '6PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '6pr.jpg'
    },
    // No25
    {
        price      : 96,
        name       : 'Сребърен пръстен с емайли (по поръчка може да се изработи с различни цветове емайли)',
        id         : '7PR',
        slug       : 'sreburen-prusten-s-emajli-po-poruchka-mozhe-da-se-izraboti-s-razlichni-cvetove-emajli',
        oldSlug    : '/large/rings/pr7.htm',
        desc       : '',
        sku        : '7PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '7pr.jpg'
    },
    // No26
    {
        price      : 98,
        name       : 'Сребърен пръстен от две части с емайли от естествени камъни',
        id         : '8PR',
        slug       : 'sreburen-prusten-ot-dve-chasti-s-emajli-ot-estestveni-kamuni',
        oldSlug    : '/large/rings/pr8.htm',
        desc       : '',
        sku        : '8PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '8pr.jpg'
    },
    // No27
    {
        price      : 149,
        name       : 'Патиниран сребърен пръстен със сапфир, инкрустиран в златен обков (по поръчка може и с камък по избор)',
        id         : '10PR',
        slug       : 'patiniran-sreburen-prusten-sus-sapfir-inkrustiran-v-zlaten-obkov-po-poruchka-mozhe-i-s-kamuk-po-izbor',
        oldSlug    : '/large/rings/pr10.htm',
        desc       : '',
        sku        : '10PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '10pr.jpg'
    },
    // No29
    {
        price      : 109,
        name       : 'Сребърен пръстен от две частиот две части с емайли от малахит и лазурит',
        id         : '11PR',
        slug       : 'sreburen-prusten-ot-dve-chastiot-dve-chasti-s-emajli-ot-malahit-i-lazurit',
        oldSlug    : '/large/rings/pr11.htm',
        desc       : '',
        sku        : '11PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '11pr.jpg'
    },
    // No30
    {
        price      : 89,
        name       : 'Сребърен пръстен с емайли "СЕМЕЙСТВО"',
        id         : '12PR',
        slug       : 'sreburen-prusten-s-emajli-semejstvo',
        oldSlug    : '/large/rings/pr12.htm',
        desc       : '',
        sku        : '12PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '12pr.jpg'
    },
    // No31
    {
        price      : 239,
        name       : 'Сребърен пръстен (риба)',
        id         : '31PR',
        slug       : 'sreburen-prusten-riba',
        oldSlug    : '/rings2/large/fishring.html',
        desc       : 'Сребърен пръстен с черен диамант ( 0.1 k )със златен обков 14к',
        sku        : '31PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '31pr.jpg'
    },
    // No32
    {
        price      : 169,
        name       : 'Сребърен пръстен (халка)',
        id         : '32PR',
        slug       : 'sreburen-prusten-halka',
        oldSlug    : '/large/rings/pr32.html',
        desc       : 'Ръчно изработен сребърен пръстен, инкрустиран със злато и емайли от лазурит',
        sku        : '32PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '32pr.jpg'
    },
    // No33
    {
        price      : 363,
        name       : 'Сребърен пръстен с Танзанит,златен обков 18 карата',
        id         : '33PRT',
        slug       : 'sreburen-prusten-s-tanzanitzlaten-obkov-18-karata',
        oldSlug    : '/large/rings/tanzanitering.html',
        desc       : '',
        sku        : '33PRT',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '33pr.jpg'
    },
    // No34
    {
        price      : 169,
        name       : 'Сребърен пръстен от 2 части - син Тораз',
        id         : '34PR',
        slug       : 'sreburen-prusten-ot-2-chasti-sin-toraz',
        oldSlug    : '/large/rings/2partsring.html',
        desc       : 'Може да се изработи и с други камъни.',
        sku        : '34PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '34pr .jpg'
    },
    // No35
    {
        price      : 194,
        name       : 'Сребърен пръстен от 2 части с черен диамант - 0,1к',
        id         : '35PR',
        slug       : 'sreburen-prusten-ot-2-chasti-s-cheren-diamant-01k',
        oldSlug    : '/large/rings/partsring2.html',
        desc       : '',
        sku        : '35PR',
        category   : 'sreburni prusteni',
        attributes : null,
        image      : '35pr.jpg'
    },
    // No36
    {
        price      : 168,
        name       : 'Авторски сребърни бижута',
        id         : '36PR',
        slug       : 'avtorski-sreburni-bizhuta',
        oldSlug    : '/large/rings/partsring3.html',
        desc       : 'Сребърен пръстен от 2 части със естествен Сапфир- 0,1к',
        sku        : '36PR',
        category   : 'sreburni prusteni',
        attributes : 'размер 65/43 мм',
        image      : '36pr.jpg'
    },
    // No1
    {
        price      : 169,
        name       : 'Комплект обици и пръстен с емайли.',
        id         : '13KM',
        slug       : 'komplekt-obici-i-prusten-s-emajli',
        oldSlug    : '/large/lset/set13.html',
        desc       : 'Комплект обици и пръстен с емайли.',
        sku        : '13KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '13km.jpg'
    },
    // No2
    {
        price      : 96,
        name       : 'Сребърно колие и обици с емайли от яспис и хематит',
        id         : '4KM',
        slug       : 'sreburno-kolie-i-obici-s-emajli-ot-yaspis-i-hematit',
        oldSlug    : '/large/lset/set4.htm',
        desc       : 'Сребърно колие и обици с емайли от яспис и хематит',
        sku        : '4KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '4km.jpg'
    },
    // No3
    {
        price      : 253,
        name       : 'Сребърно колие, пръстен и обици с емайли от лазурит и малахит',
        id         : '6 KM',
        slug       : 'sreburno-kolie-prusten-i-obici-s-emajli-ot-lazurit-i-malahit',
        oldSlug    : '/large/lset/set6.htm',
        desc       : 'Сребърно колие, пръстен и обици с емайли от лазурит и малахит',
        sku        : '6 KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '6km.jpg'
    },
    // No4
    {
        price      : 141,
        name       : 'Сребърни обици и пръстен с кубични циркони',
        id         : '12KM',
        slug       : 'sreburni-obici-i-prusten-s-kubichni-cirkoni',
        oldSlug    : '/large/lset/set12.html',
        desc       : '',
        sku        : '12KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '12km.jpg'
    },
    // No5
    {
        price      : 174,
        name       : 'Сребърно колие и обици',
        id         : '8KM',
        slug       : 'sreburno-kolie-i-obici',
        oldSlug    : '/large/lset/set8.htm',
        desc       : '',
        sku        : '8KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '8km.jpg'
    },
    // No6
    {
        price      : 298,
        name       : 'Сребърно колие и пръстен в комбинация със злато - 14к и лазурит',
        id         : '7KM',
        slug       : 'sreburno-kolie-i-prusten-v-kombinaciya-sus-zlato-14k-i-lazurit',
        oldSlug    : '/large/lset/set7.htm',
        desc       : '',
        sku        : '7KM',
        category   : 'sreburni bijuta-komplekti',
        attributes : null,
        image      : '7km.jpg'
    },
    //No1
    {
        price      : 289,
        name       : 'Ръчно изравотена сребърна врошка със златна апликация . Сребро 925 и злато 14 к',
        id         : '9BR',
        slug       : 'ruchno-izravotena-sreburna-vroshka-sus-zlatna-aplikaciya-srebro-925-i-zlato-14-k',
        oldSlug    : '/large/brooch/broochfish.html',
        desc       : 'Сребро 925 и злато 14 к размер 65/43 мм',
        sku        : '9BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : 'fish.jpg'
    },
    //No2
    {
        price      : 129,
        name       : 'Сребърна брошка с емайли.',
        id         : '2BR',
        slug       : 'sreburna-broshka-s-emajli',
        oldSlug    : '/large/brooch/brooch2.htm',
        desc       : 'Диаметър: 5см',
        sku        : '2BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : '2br.jpg'
    },
    //No3
    {
        price      : 135,
        name       : 'Сребърна брошка със злато 14к и емайли',
        id         : '3BR',
        slug       : 'sreburna-broshka-sus-zlato-14k-i-emajli',
        oldSlug    : '/large/brooch/brooch3.htm',
        desc       : '',
        sku        : '3BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : '3br.jpg'
    },
    //No4
    {
        price      : 968,
        name       : 'Ръчно изработена брошка от титан и злато с брилянт - 2,2mm.',
        id         : '5BR',
        slug       : 'ruchno-izrabotena-broshka-ot-titan-i-zlato-s-brilyant-22mm',
        oldSlug    : '/large/brooch/brooch5.html',
        desc       : 'Размер: 55/45mm',
        sku        : '5 BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : '5br.jpg'
    },
    //No5
    {
        price      : 135,
        name       : 'Сребърна брошка със златни инкрустации (14 к)',
        id         : '6BR',
        slug       : 'sreburna-broshka-sus-zlatni-inkrustacii-14-k',
        oldSlug    : '/large/brooch/brooch6.html',
        desc       : '',
        sku        : '6BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : '6br.jpg'
    },
    // No6
    {
        price      : 1039,
        name       : 'Ръчно изработена брошка от титан и злато с брилянт (2,2mm)',
        id         : '7BR',
        slug       : 'ruchno-izrabotena-broshka-ot-titan-i-zlato-s-brilyant-22mm',
        oldSlug    : '/large/brooch/brooch7.html',
        desc       : 'диаметър: 55/45mm',
        sku        : '7BR',
        category   : 'sreburni broshki',
        attributes : null,
        image      : '7br.jpg'
    },
// No7
{
    price      : 135,
    name       : 'Сребърна брошка с емайли.',
    id         : '1BR',
    slug       : 'sreburna-broshka-s-emajli',
    oldSlug    : '/large/brooch/brooch1.htm',
    desc       : 'Размер 5/5см',
    sku        : '1BR',
    category   : 'sreburni broshki',
    attributes : null,
    image      : '1br.jpg'
},
// No8
{
    price      : 131,
    name       : 'Патинирана сребърна брошка с емайли',
    id         : '8BR',
    slug       : 'patinirana-sreburna-broshka-s-emajli',
    oldSlug    : '/large/brooch/brooch8.html',
    desc       : '',
    sku        : '8BR',
    category   : 'sreburni broshki',
    attributes : null,
    image      : '8br.jpg'
},
// No9
{
    price      : 118,
    name       : 'Патинирана сребърна брошка със седеф',
    id         : '10BR',
    slug       : 'patinirana-sreburna-broshka-sus-sedef',
    oldSlug    : '/large/brooch/brooch10.html',
    desc       : 'диаметър-45мм',
    sku        : '10BR',
    category   : 'sreburni broshki',
    attributes : null,
    image      : '10br.jpg'
},
// No1
{
    price      : 159,
    name       : 'Златен кръст (меч) с циркон.',
    id         : '1GL',
    slug       : 'zlaten-krust-mech-s-cirkon',
    oldSlug    : '/Gold/cross2.html',
    desc       : 'Размери: 31/16 мм. По поръчка може да се изработи с камък по избор: сапфир, диамант, рубин',
    sku        : '1GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '1gl.jpg'
},
// No2
{
    price      : 599,
    name       : 'Златен пръстен - 14к',
    id         : '2GL',
    slug       : 'zlaten-prusten-14k',
    oldSlug    : '/Gold/ring%20ametist.html',
    desc       : '- аметист ( 7 мм)   - брилянт 0.02к SI 1-F      По поръчка може да се изработи с камъни по избор',
    sku        : '2GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '2gl.jpg'
},
// No3
{
    price      : 379,
    name       : 'Пръстен от бяло злато(14k) брилянт VS-F (0.03k)',
    id         : '3GL',
    slug       : 'prusten-ot-byalo-zlato14k-brilyant-vs-f-003k',
    oldSlug    : '/Gold/ring%20heart.html',
    desc       : 'По поръчка може да се изработи с камък по избор',
    sku        : '3GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '3gl.jpg'
},
// No4
{
    price      : 899,
    name       : 'Златно колие (14к)',
    id         : '4GL',
    slug       : 'zlatno-kolie-14k',
    oldSlug    : '/Gold/pendant.html',
    desc       : '- аквамарин    - брилянти-02 k-SI1     По поръчка може да се изработи с камъни по избор',
    sku        : '4GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '4gl.jpg'
},
// No5
{
    price      : 169,
    name       : 'Златно кръстче (14к) с циркон',
    id         : '5GL',
    slug       : 'zlatno-krustche-14k-s-cirkon',
    oldSlug    : '/Gold/cross.html',
    desc       : 'По поръчка може да се изработи с камък по избор',
    sku        : '5GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '5gl.jpg'
},
// No6
{
    price      : 1189,
    name       : 'Златен пръстен от бяло и жълто злато (14к)',
    id         : '6GL',
    slug       : 'zlaten-prusten-ot-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Gold/6GL.html',
    desc       : '- с брилянт (0,25ct),SI, F/G (цената на пръстен само в един цвят, бяло или жълто злато, е с 49 лв по-ниска)',
    sku        : '6GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '6gl.jpg'
},
// No7
{
    price      : 745,
    name       : 'Златен пръстен от бяло и жълто злато (14к) с естествен рубин и брилянт (1,8мм)',
    id         : '7GL',
    slug       : 'zlaten-prusten-ot-byalo-i-zhulto-zlato-14k-s-estestven-rubin-i-brilyant-18mm',
    oldSlug    : '/Gold/7GL.html',
    desc       : 'По поръчка може да се изработи с камъни по избор',
    sku        : '7GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '7gl.jpg'
},
// No8
{
    price      : 689,
    name       : 'Златен пръстен с Аметист и брилянт-SI 1 -FG - 0.02 k',
    id         : '16GL',
    slug       : 'zlaten-prusten-s-ametist-i-brilyant-si-1-fg-002-k',
    oldSlug    : '/Gold/Gold2.html',
    desc       : '',
    sku        : '16GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '16gl.jpg'
},
// No9
{
    price      : 729,
    name       : 'Златен пръстен(14к) със сапфир и брилянти VS, F/G, 0,06 ct',
    id         : '9GL',
    slug       : 'zlaten-prusten14k-sus-sapfir-i-brilyanti-vs-fg-006-ct',
    oldSlug    : '/Gold/9GL.html',
    desc       : 'По поръчка може да се изработи с камък по избор',
    sku        : '9GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '9gl.jpg'
},
// No10
{
    price      : 1280,
    name       : 'пръстен "компас"- бяло и жълто злато 12 гр(14k)',
    id         : '19GL',
    slug       : 'prusten-kompas-byalo-i-zhulto-zlato-12-gr14k',
    oldSlug    : '/Gold/19GL.html',
    desc       : 'при въртене на малкото зъбно колело стрелката се върти- брилянти - 0,04ct и 0,02ct SI-F/G',
    sku        : '19GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '19gl.jpg'
},
// No11
{
    price      : 1149,
    name       : 'Златен пръстен - бяло и жълто злато (14к)',
    id         : '11GL',
    slug       : 'zlaten-prusten-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Gold/11GL.html',
    desc       : '- аквамарин 3,5ct- брилянти 10 бр. SI1, F/G (общо: 0,2ct) По поръчка може да се изработи със син топаз, аметист, цитрин.',
    sku        : '11GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '11gl.jpg'
},
// No12
{
    price      : 899,
    name       : 'Златен пръстен - бяло и жълто злато (14k) със сапфир и брилянти - общо 0,1ct (5 бр. по 0,02ct)',
    id         : '12GL',
    slug       : 'zlaten-prusten-byalo-i-zhulto-zlato-14k-sus-sapfir-i-brilyanti-obsho-01ct-5-br-po-002ct',
    oldSlug    : '/Gold/12GL.html',
    desc       : '- със сапфир - цена: 899 лв - с рубин -        *Цената на пръстена може да варира според качеството и вида на камъка',
    sku        : '12GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '12gl.jpg'
},
// No9
{
    price      : null,
    name       : 'Златен пръстен - бяло и жълто злато (14k):',
    id         : '13GL',
    slug       : 'zlaten-prusten-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Gold/13GL.html',
    desc       : '-син топаз и брилянт 0,1ct- SI2 H - цена: 719 лв - сапфир и брилянт0,1ct- SI2 H- цена:789 лв (цената на пръстена може да варира според качеството и вида на камъка )',
    sku        : '13GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '13gl.jpg'
},
// No9
{
    price      : 698,
    name       : 'Златен пръстен - бяло и жълто злато (14k):',
    id         : '14GL',
    slug       : 'zlaten-prusten-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Gold/14GL.html',
    desc       : 'Златен пръстен - бяло и жълто злато (14k): -аметист -брилянти 2бр. - VS, F/G, 0,04ct общо  По поръчка може да се изработи със син топаз, аквамарин, турмалин.',
    sku        : '14GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '14gl.jpg'
},
// No9
{
    price      : 525,
    name       : 'Златна игла за вратовръзка',
    id         : '15GL',
    slug       : 'zlatna-igla-za-vratovruzka',
    oldSlug    : '/Gold/Pin.html',
    desc       : 'Може да се изработи с камък по избор',
    sku        : '15GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '15gl.jpg'
},
// No9
{
    price      : 749,
    name       : 'Златно колие Лилия (висулка) 3',
    id         : '17GL',
    slug       : 'zlatno-kolie-liliya-visulka-3',
    oldSlug    : '/Gold/Lilia.html',
    desc       : 'брилянта-SI 1 -FG - 0.1k 25 мм-диаметър',
    sku        : '17GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '17gl.jpg'
},
// No9
{
    price      : 769,
    name       : 'Златен пръстен с Танзанит',
    id         : '18GL',
    slug       : 'zlaten-prusten-s-tanzanit',
    oldSlug    : '/Gold/tanzanitring.html',
    desc       : 'брилянт-SI 1 -FG - 0.02 k',
    sku        : '18GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '18gl.jpg'
},
// No9
{
    price      : 469,
    name       : 'Златен пръстен с Цитрин',
    id         : '20GL',
    slug       : 'zlaten-prusten-s-citrin',
    oldSlug    : '/Gold/20zring.html',
    desc       : 'брилянт-SI 1 -FG - 0.02 k',
    sku        : '20GL',
    category   : 'zlatni bizhuta',
    attributes : null,
    image      : '20gl.jpg'
},
// No9
{
    price      : 488,
    name       : 'Ръчно изработено сребърно колие с масивен синджир (58см)',
    id         : '5KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-masiven-sindzhir-58sm',
    oldSlug    : '/large/largekl/kl5.htm',
    desc       : '',
    sku        : '5KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '5kl.jpg'
},
// No9
{
    price      : 155 ,
    name       : 'Ръчно изработено сребърно колие с чемширово дърво и кубични циркони',
    id         : '23KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-chemshirovo-durvo-i-kubichni-cirkoni',
    oldSlug    : '/large/largekl/kl23.htm',
    desc       : '',
    sku        : '23KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '23kl.jpg'
},
// No9
{
    price      : 135 ,
    name       : 'Сребърно колие с емайли от Лазурит и Яспис',
    id         : '24KL',
    slug       : 'sreburno-kolie-s-emajli-ot-lazurit-i-yaspis',
    oldSlug    : '/large/largekl/kl24.htm',
    desc       : '',
    sku        : '24KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '24kl.jpg'
},
// No9
{
    price      : 468,
    name       : 'Сребърно колие -ръчна изработка',
    id         : '25KL',
    slug       : 'sreburno-kolie-ruchna-izrabotka',
    oldSlug    : '/large/largekl/kl25.htm',
    desc       : '',
    sku        : '25KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '25kl.jpg'
},
// No9
{
    price      : 99,
    name       : 'Сребърно колие с естествена кожа',
    id         : '26KL',
    slug       : 'sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/largekl/kl26.htm',
    desc       : '',
    sku        : '26KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '26kl.jpg'
},
// No9
{
    price      : 189,
    name       : 'Ръчно изработено сребърно колие',
    id         : '27KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie',
    oldSlug    : '/large/largekl/kl27.html',
    desc       : '',
    sku        : '27KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '27kl.jpg'
},
// No9
{
    price      : 45,
    name       : 'Ръчно изработено сребърно колие с кожа',
    id         : '7KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-kozha',
    oldSlug    : '/large/largekl/kl7.htm',
    desc       : '',
    sku        : '7KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '7kl.jpg'
},
// No9
{
    price      : 98,
    name       : 'Ръчно изработено сребърно колие със седеф - 40 мм диаметър',
    id         : '8KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-sus-sedef-40-mm-diametur',
    oldSlug    : '/large/largekl/kl8.htm',
    desc       : '',
    sku        : '8KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '8kl.jpg'
},
// No9
{
    price      : 135,
    name       : 'Ръчно изработено сребърно колие със слонова кост и естествена кожа',
    id         : '9KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-sus-slonova-kost-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl9.htm',
    desc       : '',
    sku        : '9KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '9kl.jpg'
},
// No9
{
    price      : 74,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '10KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/nec10.htm',
    desc       : '',
    sku        : '10KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '10kl.jpg'
},
// No9
{
    price      : 129,
    name       : 'Ръчно изработено сребърно колие с емайли',
    id         : '11KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-emajli',
    oldSlug    : '/large/nec11.htm',
    desc       : '',
    sku        : '11KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '11kl.jpg'
},
// No9
{
    price      : 51,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '12 KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-emajli',
    oldSlug    : '/large/nec12.htm',
    desc       : '',
    sku        : '12 KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : ''
},
// No9
{
    price      : 51,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '12KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/nec12.htm',
    desc       : '',
    sku        : '12KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '12kl.jpg'
},
// No9
{
    price      : 135,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '13KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/nec13.htm',
    desc       : '',
    sku        : '13KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '13kl.jpg'
},
// No9
{
    price      : 57,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '14KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/nec14.htm',
    desc       : '',
    sku        : '14KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '14kl.jpg'
},
// No9
{
    price      : 76,
    name       : 'Ссребърно колие с естествена кожа',
    id         : '15KL',
    slug       : 'ssreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/nec15.htm',
    desc       : '',
    sku        : '15KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '15kl.jpg'
},
// No9
{
    price      : 174,
    name       : 'Ръчно изработено сребърно мъжко колие с кожа',
    id         : '16КL',
    slug       : 'ruchno-izraboteno-sreburno-muzhko-kolie-s-kozha',
    oldSlug    : '/large/largekl/large13.htm',
    desc       : '',
    sku        : '16КL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '16kl.jpg'
},
// No9
{
    price      : 189,
    name       : 'Сребърно колие с чемшир и слонова кост',
    id         : '17KL',
    slug       : 'sreburno-kolie-s-chemshir-i-slonova-kost',
    oldSlug    : '/large/largekl/kl17.htm',
    desc       : '',
    sku        : '17KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '17kl.jpg'
},
// No9
{
    price      : 135,
    name       : 'Ръчно изработено сребърно колие. Комбинация от абаносово дърво, корал, слонова кост и естествена кожа',
    id         : '18KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-kombinaciya-ot-abanosovo-durvo-koral-slonova-kost-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl18.htm',
    desc       : '',
    sku        : '18KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '18kl.jpg'
},
// No9
{
    price      : 171,
    name       : 'Ръчно изработено сребърно колие. Комбинация от корал, слонова кост и естествена кожа',
    id         : '19KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-kombinaciya-ot-koral-slonova-kost-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl19.htm',
    desc       : '',
    sku        : '19KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '19kl.jpg'
},
// No9
{
    price      : 194,
    name       : 'Ръчно изработено сребърно колие. Комбинация от абаносово дърво, слонова кост и естествена кожа',
    id         : '20KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-kombinaciya-ot-abanosovo-durvo-slonova-kost-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl20.htm',
    desc       : '',
    sku        : '20KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '20kl.jpg'
},
// No9
{
    price      : 94,
    name       : 'Сребърно колие със златнa инкрустация и естествена кожа',
    id         : '21KL',
    slug       : 'sreburno-kolie-sus-zlatna-inkrustaciya-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl21.htm',
    desc       : '',
    sku        : '21KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '21kl.jpg'
},
// No9
{
    price      : 51,
    name       : 'ruchno-izraboteno-sreburno-kolie-s-rozov-emajl-ot-koral-razmer-33',
    id         : '6KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-rozov-emajl-ot-koral-razmer-33',
    oldSlug    : '/large/largekl/kl6.htm',
    desc       : '',
    sku        : '6KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '6kl.jpg'
},
// No9
{
    price      : 135,
    name       : 'Ръчно изработено сребърно колие с естествена кожа',
    id         : '22KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-estestvena-kozha',
    oldSlug    : '/large/largekl/kl22.htm',
    desc       : '',
    sku        : '22KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '22kl.jpg'
},
// No9
{
    price      : 254,
    name       : 'Патинирано сребърно колие с мъхест ахат',
    id         : '4KL',
    slug       : 'patinirano-sreburno-kolie-s-muhest-ahat',
    oldSlug    : '/large/largekl/kl4.htm',
    desc       : 'Синджир - ръчна изработка',
    sku        : '4KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '4kl.jpg'
},
// No9
{
    price      : 129,
    name       : 'Сребърно колие1',
    id         : '2KL',
    slug       : 'sreburno-kolie1',
    oldSlug    : '/large/largekl/kl2.htm',
    desc       : '-18мм диаметър -50мм дължина',
    sku        : '2KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '2kl.jpg'
},
// No9
{
    price      : 114,
    name       : 'Ръчно изработено патинирано сребърно колие',
    id         : '3KL',
    slug       : 'ruchno-izraboteno-patinirano-sreburno-kolie',
    oldSlug    : '/large/largekl/kl3.htm',
    desc       : '',
    sku        : '3KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '3kl.jpg'
},
// No9
{
    price      : 155,
    name       : 'Сребърно колие с емайли и естествена кожа',
    id         : '28KL',
    slug       : 'sreburno-kolie-s-emajli-i-estestvena-kozha',
    oldSlug    : '/large/largekl/kl28.html',
    desc       : '',
    sku        : '28KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '28kl.jpg'
},
// No9
{
    price      : 192,
    name       : 'Ръчно изработено сребърно колие със златна инкрустация и емайли',
    id         : '29KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-sus-zlatna-inkrustaciya-i-emajli',
    oldSlug    : '/large/largekl/kl29.html',
    desc       : '',
    sku        : '29KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '29kl.jpg'
},
// No9
{
    price      : 96,
    name       : 'Ръчно изработено сребърно колие с емайли от малахит и лазурит, размер: 23/36 мм',
    id         : '30KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-emajli-ot-malahit-i-lazurit-razmer-2336-mm',
    oldSlug    : '/large/largekl/kl30.html',
    desc       : '',
    sku        : '30KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '30kl.jpg'
},
// No9
{
    price      : 139,
    name       : 'Ръчно изработено сребърно колие с емайли1',
    id         : '38KL',
    slug       : '',
    oldSlug    : '/large/largekl/kl38.html',
    desc       : 'ruchno-izraboteno-sreburno-kolie-s-emajli1',
    sku        : '38KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '38kl.jpg'
},
// No9
{
    price      : 253,
    name       : 'Ръчно изработено сребърно колие с емайли и златни инкрустации',
    id         : '32KL',
    slug       : '',
    oldSlug    : '/large/largekl/kl32.html',
    desc       : 'ruchno-izraboteno-sreburno-kolie-s-emajli-i-zlatni-inkrustacii',
    sku        : '32KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '32kl.jpg'
},
// No9
{
    price      : [96, 51],
    name       : 'Сребърно колие с емайли от лазурит',
    id         : ['34', '33KL'],
    slug       : 'sreburno-kolie-s-emajli-ot-lazurit',
    oldSlug    : '/large/largekl/kl33.html',
    desc       : ['Размер: 32/32 мм', 'Размер: 19/19 мм'],
    sku        : ['34', '33KL'],
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '34i33kl.jpg'
},
// No9
{
    price      : 229,
    name       : 'Ръчно изработено (патинирано) сребърно колие със златни апликации 14к',
    id         : '34KL',
    slug       : 'ruchno-izraboteno-patinirano-sreburno-kolie-sus-zlatni-aplikacii-14k',
    oldSlug    : '/large/largekl/kl34.html',
    desc       : '',
    sku        : '34KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '34kl.jpg'
},
// No9
{
    price      : 135,
    name       : 'Сребърно колие с емайли от малахит, лазурит и тюркоаз;',
    id         : '35KL',
    slug       : 'sreburno-kolie-s-emajli-ot-malahit-lazurit-i-tyurkoaz',
    oldSlug    : '/large/largekl/kl35.html',
    desc       : 'Размер: 33/33 мм',
    sku        : '35KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '35kl.jpg'
},
// No9
{
    price      : 174,
    name       : 'Ръчно изработено сребърно колие с чемширово дърво и кубични циркони',
    id         : '36KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-chemshirovo-durvo-i-kubichni-cirkoni',
    oldSlug    : '/large/largekl/kl36.html',
    desc       : '',
    sku        : '36KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '36kl.jpg'
},
// No9
{
    price      : 116,
    name       : 'Ръчно изработено сребърно колие с чемширово дърво',
    id         : '37KL',
    slug       : 'ruchno-izraboteno-sreburno-kolie-s-chemshirovo-durvo',
    oldSlug    : '/large/largekl/kl37.html',
    desc       : '',
    sku        : '37KL',
    category   : 'sreburni kolieta',
    attributes : null,
    image      : '37kl.jpg'
},
// No9
{
    price      : 119,
    name       : 'Сребърни обици - авторска бижутерия 21мм диаметър -55 мм дължина',
    id         : '1OB',
    slug       : 'sreburni-obici-avtorska-bizhuteriya-21mm-diametur-55-mm-dulzhina',
    oldSlug    : '/large/ob/earrings.html',
    desc       : '',
    sku        : '1OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '10b.jpg'
},
// No9
{
    price      : 128,
    name       : 'Сребърни обици с емайли',
    id         : '2OB',
    slug       : 'sreburni-obici-s-emajli',
    oldSlug    : '/large/ob/largeob2.htm',
    desc       : '',
    sku        : '2OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '2ob.jpg'
},
// No9
{
    price      : 89,
    name       : 'Сребърни обици с емайли от яспис и хематит',
    id         : '3OB',
    slug       : 'sreburni-obici-s-emajli-ot-yaspis-i-hematit',
    oldSlug    : '/large/ob/largeob3.htm',
    desc       : '',
    sku        : '3OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '3ob.jpg'
},
// No9
{
    price      : 79,
    name       : 'Сребърни обиции с емайли от яспис и хематит',
    id         : '4OB',
    slug       : 'sreburni-obicii-s-emajli-ot-yaspis-i-hematit',
    oldSlug    : '/large/ob/largeob4.htm',
    desc       : '',
    sku        : '4OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '4ob.jpg'
},
// No9
{
    price      : 129,
    name       : 'Сребърни обици3',
    id         : '5OB',
    slug       : 'sreburni-obici3',
    oldSlug    : '/large/ob/largeob5.htm',
    desc       : '',
    sku        : '5OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '5ob.jpg'
},
// No9
{
    price      : 167,
    name       : 'Патинирани сребърни обици със златни апликации',
    id         : '6OB',
    slug       : 'patinirani-sreburni-obici-sus-zlatni-aplikacii',
    oldSlug    : '/large/ob/largeob6.htm',
    desc       : '',
    sku        : '6OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '6ob.jpg'
},
// No9
{
    price      : 79,
    name       : 'Патинирани сребърни обици с циркони1',
    id         : '9OB',
    slug       : 'patinirani-sreburni-obici-s-cirkoni1',
    oldSlug    : '/large/ob/largeob9.html',
    desc       : '',
    sku        : '9OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '9ob.jpg'
},
// No9
{
    price      : 128,
    name       : 'Авторски сребърни бижута - обици',
    id         : '7OB',
    slug       : 'avtorski-sreburni-bizhuta-obici',
    oldSlug    : '/large/ob/largeob7.html',
    desc       : 'диаметър - 24мм -ширина-10мм',
    sku        : '7OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '7ob.jpg'
},
// No9
{
    price      : 239,
    name       : 'Сребърни обици със златни апликации',
    id         : '8OB',
    slug       : 'sreburni-obici-sus-zlatni-aplikacii',
    oldSlug    : '/large/ob/largeob8.html',
    desc       : '',
    sku        : '8OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '8ob.jpg'
},
// No9
{
    price      : 89,
    name       : '',
    id         : '10OB',
    slug       : 'sreburni-obici-s-emajli-ot-lazurit',
    oldSlug    : '/large/ob/largeob10.html',
    desc       : '',
    sku        : '10OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '10ob.jpg'
},
// No9
{
    price      : 69,
    name       : 'Патинирани сребърни обици (celtic).',
    id         : '11OB',
    slug       : 'patinirani-sreburni-obici-celtic',
    oldSlug    : '/large/ob/earrings11.html',
    desc       : '',
    sku        : '11OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '11ob.jpg'
},
// No9
{
    price      : 239,
    name       : 'Патинирани сребърни обици, инкрустирани със злато 14к',
    id         : '12OB',
    slug       : 'patinirani-sreburni-obici-inkrustirani-sus-zlato-14k',
    oldSlug    : '/large/ob/earrings12.html',
    desc       : '',
    sku        : '12OB',
    category   : 'sreburni obici',
    attributes : null,
    image      : '12ob.jpg'
},
// No9
{
    price      : 269,
    name       : 'Фотоапарат надпис на глаголица на обектива',
    id         : '1DR',
    slug       : 'fotoaparat-nadpis-na-glagolica-na-obektiva',
    oldSlug    : '/large/others1.htm',
    desc       : 'авторски сребърни бижута - галерия ИТОМО',
    sku        : '1DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '1dr.jpg'
},
// No9
{
    price      : 71,
    name       : 'Сребърен кръст (патинирано сребро)',
    id         : '2DR',
    slug       : 'sreburen-krust-patinirano-srebro',
    oldSlug    : '/large/others2.htm',
    desc       : '',
    sku        : '2DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '2dr.jpg'
},
// No9
{
    price      : 110,
    name       : 'Ръчно изработена кована сребърна лъжичка. Дължина: 11 см',
    id         : '3DR',
    slug       : 'ruchno-izrabotena-kovana-sreburna-luzhichka-dulzhina-11-sm',
    oldSlug    : '/large/others3.html',
    desc       : '',
    sku        : '3DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '3dr.jpg'
},
// No9
{
    price      : 159,
    name       : 'Златен кръст -14 k (меч) с циркон. Размери: 31/16 мм',
    id         : '1GL',
    slug       : 'zlaten-krust-14-k-mech-s-cirkon-razmeri-3116-mm',
    oldSlug    : '/large/mech%20gold.html',
    desc       : 'По поръчка може да се изработи с камък по избор: сапфир, диамант, рубин',
    sku        : '1GL',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '1gl.jpg'
},
// No9
{
    price      : 67,
    name       : 'Сребърен кръст (патинирано сребро)',
    id         : '6DR',
    slug       : 'sreburen-krust-patinirano-srebro',
    oldSlug    : '/large/others6.html',
    desc       : '',
    sku        : '6DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '6dr.jpg'
},
// No9
{
    price      : 190,
    name       : 'Ръчно изработена кована сребърна лъжичка. Дължина: 14 см',
    id         : '4DR',
    slug       : 'ruchno-izrabotena-kovana-sreburna-luzhichka-dulzhina-14-sm',
    oldSlug    : '/large/others4.html',
    desc       : '',
    sku        : '4DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '4dr.jpg'
},
// No9
{
    price      : 135,
    name       : 'Сребърна висулка (тенис ракета)',
    id         : '5DR',
    slug       : 'sreburna-visulka-tenis-raketa',
    oldSlug    : '/large/others5.html',
    desc       : '',
    sku        : '5DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '5dr.jpg'
},
// No9
{
    price      : 69,
    name       : 'Сребърен кръст меч',
    id         : '7DR',
    slug       : 'sreburen-krust-mech',
    oldSlug    : '/large/sword.html',
    desc       : '',
    sku        : '7DR',
    category   : 'drugi sreburni bijuta',
    attributes : null,
    image      : '7dr.jpg'
},
// No13
{
    price      : 679,
    name       : 'Брачни халки от титан и злато (14k)',
    id         : '1TG',
    slug       : 'brachni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/1tg.htm',
    desc       : '',
    sku        : '1TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '1tg.jpg'
},
// No13
{
    price      : 784,
    name       : 'Ръчно изравотено колие от титан и злато (14k)',
    id         : '2TG',
    slug       : 'ruchno-izravoteno-kolie-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/2tg.htm',
    desc       : '- брилянти (2бр.)-SI 1-F -0.05к.',
    sku        : '2TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '2tg.jpg'
},
// No13
{
    price      : 449,
    name       : 'Комбинация от титан, злато (14k) и сребро (патинирано)',
    id         : '3TG',
    slug       : 'kombinaciya-ot-titan-zlato-14k-i-srebro-patinirano',
    oldSlug    : '/Titanium/3tg.htm',
    desc       : '',
    sku        : '3TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '3tg.jpg'
},
// No13
{
    price      : 608,
    name       : 'Пръстен, обици и колие от титан, злато - 14k и брилянти',
    id         : '4TG',
    slug       : 'prusten-obici-i-kolie-ot-titan-zlato-14k-i-brilyanti',
    oldSlug    : '/Titanium/4tg.htm',
    desc       : '',
    sku        : '4TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '4tg.jpg'
},
// No13
{
    price      : 468,
    name       : 'Титан, злато - 14k и брилянт',
    id         : '5TG',
    slug       : 'titan-zlato-14k-i-brilyant',
    oldSlug    : '/Titanium/5tg.htm',
    desc       : '',
    sku        : '5TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '5tg.jpg'
},
// No13
{
    price      : 586,
    name       : 'Титан, злато (14k) и брилянти (2 бр.)',
    id         : '6TG',
    slug       : 'titan-zlato-14k-i-brilyanti-2-br',
    oldSlug    : '/Titanium/6tg.htm',
    desc       : '',
    sku        : '6TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '6tg.jpg'
},
// No13
{
    price      : 898,
    name       : 'Пръстен отТитан, злато (14k) и брилянти (2 бр.)',
    id         : '7TG',
    slug       : 'prusten-ottitan-zlato-14k-i-brilyanti-2-br',
    oldSlug    : '/Titanium/7tg.htm',
    desc       : '-0.06 к - SI-F/G',
    sku        : '7TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '7tg.jpg'
},
// No14
{
    price      : 840,
    name       : 'Титан, злато - 14k и брилянт - 2,5 mm',
    id         : '8TG',
    slug       : 'titan-zlato-14k-i-brilyant-25-mm',
    oldSlug    : '/Titanium/8tg.html',
    desc       : '',
    sku        : '8TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '8tg.jpg'
},
// No15
{
    price      : 860,
    name       : 'Пръстен от Титан, злато (14k) и брилянт (2,5 mm)',
    id         : '9TG',
    slug       : 'prusten-ot-titan-zlato-14k-i-brilyant-25-mm',
    oldSlug    : '/Titanium/9tg.html',
    desc       : '',
    sku        : '9TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '9tg.jpg'
},
// No9
{
    price      : 1037,
    name       : 'Титан, злато (14k) и брилянт (2,9 mm)',
    id         : '10TG',
    slug       : 'titan-zlato-14k-i-brilyant-29-mm',
    oldSlug    : '/Titanium/10tg.html',
    desc       : '',
    sku        : '10TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '10tg.jpg'
},
// No9
{
    price      : 1154,
    name       : 'Титан, платина и брилянт (2,5 mm)',
    id         : '11TG',
    slug       : 'titan-platina-i-brilyant-25-mm',
    oldSlug    : '/Titanium/11tg.html',
    desc       : 'ширина на пръстена - 12 mm',
    sku        : '11TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '11tg.jpg'
},
// No9
{
    price      : 841,
    name       : 'Титан, сребро, злато ( 14k) и брилянт (2,5 mm)',
    id         : '12TG',
    slug       : 'titan-srebro-zlato-14k-i-brilyant-25-mm',
    oldSlug    : '/Titanium/12tg.html',
    desc       : 'ширина на пръстена - 11 mm',
    sku        : '12TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '12tg.jpg'
},
// No9
{
    price      : 968,
    name       : 'Ръчно изработена брошка от титан и злато с брилянт (2,2mm)',
    id         : '13TG',
    slug       : 'ruchno-izrabotena-broshka-ot-titan-i-zlato-s-brilyant-22mm',
    oldSlug    : '/Titanium/brooch5_titan.html',
    desc       : 'диаметър: 55/45mm',
    sku        : '13TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '13tg.jpg'
},
// No9
{
    price      : 645,
    name       : 'Обици от титан и злато (14k)',
    id         : '14TG',
    slug       : 'obici-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/14TG.html',
    desc       : 'диаметър - 19мм, ширина - 10мм',
    sku        : '14TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '14tg.jpg'
},
// No9
{
    price      : 1546,
    name       : 'Обици от титан и злато (14к), брилянти - 2,3мм и 1,8мм',
    id         : '15TG',
    slug       : 'obici-ot-titan-i-zlato-14k-brilyanti-23mm-i-18mm',
    oldSlug    : '/Titanium/15TG.html',
    desc       : 'диаметър - 19мм, ширина -12мм',
    sku        : '15TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '15tg.jpg'
},
// No9
{
    price      : 958,
    name       : 'Ръчно изработен пръстен от титан, злато (14k), сребро и брилянти (2 бр.)',
    id         : '16TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-zlato-14k-srebro-i-brilyanti-2-br',
    oldSlug    : '/Titanium/16TG.html',
    desc       : '',
    sku        : '16TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '16tg.jpg'
},
// No9
{
    price      : 1039,
    name       : 'Ръчно изработена брошка от титан и злато с брилянт (2,2mm-0.04к)',
    id         : '17TG',
    slug       : 'ruchno-izrabotena-broshka-ot-titan-i-zlato-s-brilyant-22mm-004k',
    oldSlug    : '/Titanium/17TG.html',
    desc       : 'диаметър: 55/45mm',
    sku        : '17TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '17tg.jpg'
},
// No9
{
    price      : 1159,
    name       : 'Ръчно изработени обици от титан, злато (14k) и брилянти (2mm)',
    id         : '18TG',
    slug       : 'ruchno-izraboteni-obici-ot-titan-zlato-14k-i-brilyanti-2mm',
    oldSlug    : '/Titanium/18TG.html',
    desc       : 'диаметър: 35mm',
    sku        : '18TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '18tg.jpg'
},
// No9
{
    price      : 939,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) с брилянт',
    id         : '19TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-s-brilyant',
    oldSlug    : '/Titanium/19TG.html',
    desc       : '',
    sku        : '19TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '19tg.jpg'
},
// No9
{
    price      : 860,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) със Сапфир-0.20к',
    id         : '20TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-sus-sapfir-020k',
    oldSlug    : '/Titanium/20TG.html',
    desc       : '',
    sku        : '20TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '20tg.jpg'
},
// No9
{
    price      : 958,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) с брилянт',
    id         : '21TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-s-brilyant',
    oldSlug    : '/Titanium/21TG.html',
    desc       : '',
    sku        : '21TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '21tg.jpg'
},
// No9
{
    price      : 760,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) с брилянти (2 бр.)',
    id         : '22TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-s-brilyanti-2-br',
    oldSlug    : '/Titanium/22TG.html',
    desc       : '',
    sku        : '22TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '22tg.jpg'
},
// No9
{
    price      : 839,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) с брилянт',
    id         : '23TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-s-brilyant',
    oldSlug    : '/Titanium/23TG.html',
    desc       : '- SI 1-0.04 к F/G',
    sku        : '23TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '23tg.jpg'
},
// No9
{
    price      : 460,
    name       : 'Ръчно изработени халки от титан и злато (14к)',
    id         : '25TG',
    slug       : 'ruchno-izraboteni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/25TG.html',
    desc       : '',
    sku        : '25TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '25tg.jpg'
},
// No9
{
    price      : 460,
    name       : 'Ръчно изработени халки от титан и злато (14к )',
    id         : '26TG',
    slug       : 'ruchno-izraboteni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/26TG.html',
    desc       : '',
    sku        : '26TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '26tg.jpg'
},
// No9
{
    price      : 789,
    name       : 'Ръчно изработени халки от титан и злато (14k)',
    id         : '27TG',
    slug       : 'ruchno-izraboteni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/27TG.html',
    desc       : '',
    sku        : '27TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '27tg.jpg'
},
// No9
{
    price      : 762,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) с три брилянта',
    id         : '28TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-s-tri-brilyanta',
    oldSlug    : '/Titanium/28TG.html',
    desc       : '',
    sku        : '28TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '28tg.jpg'
},
// No9
{
    price      : 490,
    name       : 'Ръчно изработен пръстен от титан и злато (14k)',
    id         : '29TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/29TG.html',
    desc       : '',
    sku        : '29TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '29tg.jpg'
},
// No9
{
    price      : 689,
    name       : 'Ръчно изработен пръстен: - титан - бяло и жълто злато (14k), - сребро - брилянт 0,03 ct, VS, F/G',
    id         : '30TG',
    slug       : 'ruchno-izraboten-prusten-titan-byalo-i-zhulto-zlato-14k-srebro-brilyant-003-ct-vs-fg',
    oldSlug    : '/Titanium/30TG.html',
    desc       : '',
    sku        : '30TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '30tg.jpg'
},
// No9
{
    price      : 579,
    name       : 'Ръчно изработен пръстен: - титан - злато (14k) - брилянт 0,02 ct, VS, F/G',
    id         : '31TG',
    slug       : 'ruchno-izraboten-prusten-titan-zlato-14k-brilyant-002-ct-vs-fg',
    oldSlug    : '/Titanium/31TG.html',
    desc       : '',
    sku        : '31TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '31tg.jpg'
},
// No9
{
    price      : 739,
    name       : 'Ръчно изработен пръстен: - титан - злато (14k) - брилянт 0,03 ct, VS, F/G',
    id         : '32TG',
    slug       : 'ruchno-izraboten-prusten-titan-zlato-14k-brilyant-003-ct-vs-fg',
    oldSlug    : '/Titanium/32TG.html',
    desc       : '',
    sku        : '32TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '32tg.jpg'
},
// No9
{
    price      : 859,
    name       : 'Ръчно изработен пръстен от титан и злато (14k) със сапфир',
    id         : '33TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-zlato-14k-sus-sapfir',
    oldSlug    : '/Titanium/33TG.html',
    desc       : '',
    sku        : '33TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '33tg.jpg'
},
// No9
{
    price      : 798,
    name       : 'Ръчно изработени обици от титан и злато (14k) - диаманти-0.06 к VS-FG',
    id         : '34ETG',
    slug       : 'ruchno-izraboteni-obici-ot-titan-i-zlato-14k-diamanti-006-k-vs-fg',
    oldSlug    : '/Titanium/34ETG.html',
    desc       : '',
    sku        : '34ETG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '34etg.jpg'
},
// No9
{
    price      : 489,
    name       : 'Ръчно изработен пръстен от титан и бяло злато (14k) - диамант -0.04 к-SI-FG',
    id         : '35TG',
    slug       : 'ruchno-izraboten-prusten-ot-titan-i-byalo-zlato-14k-diamant-004-k-si-fg',
    oldSlug    : '/Titanium/35TG.html',
    desc       : '',
    sku        : '35TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '35tg.jpg'
},
// No9
{
    price      : 1258,
    name       : 'Пръстен от титан и злато (14k)',
    id         : '36TG',
    slug       : 'prusten-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/36TG.html',
    desc       : '',
    sku        : '36TG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '36tg.jpg'
},
// No9
{
    price      : 190,
    name       : 'обица от титан и злато (14k)',
    id         : '37ЕTG',
    slug       : 'obica-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/37ERTG.html',
    desc       : '',
    sku        : '37ЕTG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '37etg.jpg'
},
// No9
{
    price      : 980,
    name       : 'хапки от титан,злато и сребро',
    id         : '38RTG',
    slug       : 'hapki-ot-titanzlato-i-srebro',
    oldSlug    : '/Titanium/38RTG.html',
    desc       : '',
    sku        : '38RTG',
    category   : 'bijuta ot titan i zlato',
    attributes : null,
    image      : '38rtg.jpg'
},
// No9
{
    price      : 679,
    name       : 'Ръчно изработени брачни халки от титан и злато (14к )',
    id         : '1TG',
    slug       : 'ruchno-izraboteni-brachni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Wedding%20rings/1WTG.html',
    desc       : '',
    sku        : '1TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '1tg.jpg'
},
// No9
{
    price      : 679,
    name       : 'Ръчно изработени брачни халки от титан и злато (14к)',
    id         : '1TG',
    slug       : 'ruchno-izraboteni-brachni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Wedding%20rings/1WTG.html',
    desc       : '',
    sku        : '1TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '1tgBH.jpg'
},
// No9
{
    price      : 880,
    name       : 'Ръчно изработени брачни халки от титан и злато (14k )- 880 лв -чифт',
    id         : '24TG',
    slug       : 'ruchno-izraboteni-brachni-halki-ot-titan-i-zlato-14k-880-lv-chift',
    oldSlug    : '/Wedding%20rings/24WTG.html',
    desc       : '',
    sku        : '24TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '24tgBH.jpg'
},
// No9
{
    price      : 460,
    name       : 'Ръчно изработени брачни халки от титан и злато (14k) Цена: 460лв-чифт',
    id         : '25TG',
    slug       : 'ruchno-izraboteni-brachni-halki-ot-titan-i-zlato-14k-cena-460lv-chift',
    oldSlug    : '/Wedding%20rings/25WTG.html',
    desc       : '',
    sku        : '25TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '25tg.jpg'
},
// No9
{
    price      : 460,
    name       : 'Ръчно изработени брачни халки от титан и злато (14к )',
    id         : '26TG',
    slug       : 'ruchno-izraboteni-brachni-halki-ot-titan-i-zlato-14k',
    oldSlug    : '/Wedding%20rings/26WTG.html',
    desc       : '',
    sku        : '26TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '26tg.jpg'
},
// No9
{
    price      : 789,
    name       : 'Брачни халки от титан и злато (14k) Цена: 789 лв. -чифт',
    id         : '27TG',
    slug       : 'brachni-halki-ot-titan-i-zlato-14k-cena-789-lv-chift',
    oldSlug    : '/Wedding%20rings/27WTG.html',
    desc       : '',
    sku        : '27TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '27tg.jpg'
},
// No9
{
    price      : 460,
    name       : 'Сватбените халки от Титан могат да бъдат изработени с жълто или бяло злато. . Цена - 460 лв. двете',
    id         : '28TGW',
    slug       : 'svatbenite-halki-ot-titan-mogat-da-budat-izraboteni-s-zhulto-ili-byalo-zlato-cena-460-lv-dvete',
    oldSlug    : '/Wedding%20rings/Large/titanium/Wedding.html',
    desc       : '',
    sku        : '28TGW',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '28tgw.jpg'
},
// No9
{
    price      : null,
    name       : 'Брачни халки от бяло злато (14к)',
    id         : '1WR',
    slug       : 'brachni-halki-ot-byalo-zlato-14k',
    oldSlug    : '/Wedding%20rings/Large/Wedding1.html',
    desc       : 'Сватбените халки могат да бъдат изработени в жълто или комбинация от бяло и жълто злато(със или без брилянти). - брилянти (6-бр.),SI, F/G - грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 14 до18 грама двете цена за работа 650лв +1 брилянт (0.03ct) ,SI, F/G-85лв . Цена за работа без бриланти в един цвят- 350лв',
    sku        : '1WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '1wr.jpg'
},
// No9
{
    price      : null,
    name       : 'Брачни халки от бяло и жълто злато (14к)',
    id         : '2WR',
    slug       : 'brachni-halki-ot-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Wedding%20rings/Wedding_gold.html',
    desc       : '- дамската халка е с брилянт (0.03ct),SI, F/G - грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 14 до18 грама двете цена за работа 450лв + брилянт (0.03ct) 85лв',
    sku        : '2WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '2wr.jpg'
},
// No9
{
    price      : null,
    name       : 'Сватбени халки от бяло злато (14к)',
    id         : '3WR',
    slug       : 'svatbeni-halki-ot-byalo-zlato-14k',
    oldSlug    : '/Wedding%20rings/Large/Wedding3.html',
    desc       : 'Сватбените халки могат да бъдат изработени от жълто или комбинация от бяло и жълто злато. грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 14 до18 грама двете Цена за работа в комбинация от бяло и жълто-650лв . Цена за работа в един цвят- 450лв',
    sku        : '3WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '3wr.jpg'
},
// No9
{
    price      : null,
    name       : 'Сватбени халки с релефни текстури',
    id         : '4WR',
    slug       : 'svatbeni-halki-s-relefni-teksturi',
    oldSlug    : '/Wedding%20rings/Large/Wedding4.html',
    desc       : 'Сватбените халки могат да бъдат изработени от жълто, бяло или комбинация от бяло и жълто злато.  Цена за работа в комбинация от бяло и жълто-550лв . Цена за работа в един цвят- 350лв. Грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 12 до18 грама двете. Ако имате интересна идея за дизайна на вашите сватбени халки, с наша помощ бихте могли да я осъществите.  Крайната цена зависи от грамажа и цената на златото в момента на поръчката . Ако халките са изработени със злато на клиента се заплаща само работата.  За повече информация моля звънете на GSM 0888 588 968 или пишете на itomo@abv.bg',
    sku        : '4WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '4wr.jpg'
},
// No9
{
    price      : null,
    name       : 'Сватбени халки от бяло злато (14к)',
    id         : '5WR',
    slug       : 'svatbeni-halki-ot-byalo-zlato-14k',
    oldSlug    : '/Wedding%20rings/Large/Wedding5.html',
    desc       : '',
    sku        : '5WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '5wr.jpg'
},
// No9 (S dobaveno ime)
{
    price      : null,
    name       : 'Сватбени халки',
    id         : '6WR',
    slug       : 'svatbeni-halki',
    oldSlug    : '/Wedding%20rings/Large/Wedding6.html',
    desc       : 'Сватбените халки могат да бъдат изработени от жълто или комбинация от бяло и жълто злато. грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 8 до15 грама двете Цена за работа в комбинация от бяло и жълто-650лв . Цена за работа в един цвят- 450лв. Крайната цена зависи от грамажа и цената на златото в момента на поръчката . Ако сватбените халки са изработени със злато на клиента се заплаща само работата.',
    sku        : '6WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '6wr.jpg'
},
// No9 (S dobaveno ime)
{
    price      : null,
    name       : 'Сватбени халки1',
    id         : '7WR',
    slug       : 'svatbeni-halki1',
    oldSlug    : '/Wedding%20rings/Large/Wedding7.html',
    desc       : 'Сватбените халки могат да бъдат изработени от жълто или комбинация от бяло и жълто злато. грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 11 до15 грама двете Цена за работа в комбинация от бяло и жълто-500лв . Цена за работа в един цвят- 350лв. Крайната цена зависи от грамажа и цената на златото в момента на поръчката . Ако сватбените халки са изработени със злато на клиента се заплаща само работата.',
    sku        : '7WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '7wr.jpg'
},
// No9
{
    price      : 379,
    name       : 'Годежен пръстен от бяло злато(14k)',
    id         : '3GL',
    slug       : 'godezhen-prusten-ot-byalo-zlato14k',
    oldSlug    : '/Wedding%20rings/engagement1.html',
    desc       : '- брилянт VS-F (0.03k) По поръчка може да се изработи с камък по избор',
    sku        : '3GL',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '3gl.jpg'
},
// No9
{
    price      : null,
    name       : 'Годежен пръстен от бяло и жълто злато (14к)',
    id         : '6GL',
    slug       : 'godezhen-prusten-ot-byalo-i-zhulto-zlato-14k',
    oldSlug    : '',
    desc       : '- брилянт (0,25ct),SI, F/G - цена: 1189 лв (цената на пръстен само в един цвят, бяло или жълто злато, е с 49 лв. по-ниска)',
    sku        : '6GL',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '6gl.jpg'
},
// No9
{
    price      : 745,
    name       : 'Годежен пръстен от бяло и жълто злато (14к)',
    id         : '7GL',
    slug       : 'godezhen-prusten-ot-byalo-i-zhulto-zlato-14k',
    oldSlug    : '/Wedding%20rings/engagement3.html',
    desc       : 'естествен рубин и брилянт-VS/FG-0.02k По поръчка може да се изработи с камъни по избор',
    sku        : '7GL',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '7gl.jpg'
},
// No9
{
    price      : null,
    name       : 'Годежен пръстен от бяло злато (14к)',
    id         : '8EGR',
    slug       : 'godezhen-prusten-ot-byalo-zlato-14k',
    oldSlug    : '/Wedding%20rings/engagement4.html',
    desc       : '- с брилянти (0,15ct),SI, F/G - цена: 639лв - с брилянти (0,15ct),VS,F/G - цена: 729лв - с брилянти (0,15ct),VVS,F/G - цена: 869 лв',
    sku        : '8EGR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '8EGR.jpg'
},
// No9
{
    price      : 380,
    name       : 'годежни пръстени с диаманнти',
    id         : '9ЕGR',
    slug       : 'godezhni-prusteni-s-diamannti',
    oldSlug    : '/Wedding%20rings/engagement/engagement-5.html',
    desc       : 'Годежен пръстен от бяло злато 14 к - цена- 380 лв  диамант - SI, G - 0.03к  Моделът може да се изработи и с по-големи диаманти  Годежните пръстени се изработват от жълто, бяло или комбинация от бяло и жълто злато.     .  За повече информация моля звънете на GSM 0888 588 968 или пишете на itomo@abv.bg',
    sku        : '9ЕGR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '9ЕGR.jpg'
},
// No9
{
    price      : null,
    name       : 'Сватбени халки с релефни надписи',
    id         : '1LR',
    slug       : 'svatbeni-halki-s-relefni-nadpisi',
    oldSlug    : '/rings2/large/letterrings.html',
    desc       : 'Халките които виждате са примерни модели. Могат да бъдат изработени от злато ,сребро или комбинация от титан и злато.  халки от сребро- цена 310 лв чифт  златни халки - 500 лв за работа + цената на златото като материал в 14 к (по борсови цени в момента на поръчката) . Ако поръчката е със злато на клиента се заплаща само изработката.  За повече информация моля звънете на GSM 0888 588 968 или пишете на itomo@abv.bg',
    sku        : '1LR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '1lr.jpg'
},
// No9
{
    price      : null,
    name       : 'Класически брачни халки',
    id         : '1KWR',
    slug       : 'svatbeni-halki-s-relefni-nadpisi',
    oldSlug    : '/Wedding%20rings/weddingstandart.html',
    desc       : 'При поръчка със злато на ателието- 87 лв за грам (включва изработката) .  При поръчка със злато на клиента- цена за изработка - 25 лв на грам',
    sku        : '1KWR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '1kwr.jpg'
},
// No9
{
    price      : null,
    name       : 'Сватбени халки от бяло злато (14к)',
    id         : '3WR',
    slug       : 'svatbeni-halki-ot-byalo-zlato-14k',
    oldSlug    : '/Wedding%20rings/Large/Wedding3.html',
    desc       : 'Сватбените халки могат да бъдат изработени от жълто или комбинация от бяло и жълто злато. грамажа на брачните халки може варира в зависимост от ширината и размера( обиколка )от 14 до18 грама двете Цена за работа в комбинация от бяло и жълто-650лв . Цена за работа в един цвят- 450лв',
    sku        : '3WR',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '3wr.jpg'
},
// No9
{
    price      : 1258,
    name       : 'Пръстен от титан и злато (14k)',
    id         : '36TG',
    slug       : 'prusten-ot-titan-i-zlato-14k',
    oldSlug    : '/Titanium/36TG.html',
    desc       : '',
    sku        : '36TG',
    category   : 'dizainerski brachni halki',
    attributes : null,
    image      : '36tg.jpg'
},
// No9
{
    price      :  2509,
    name       : 'СРЕБЪРЕН РЪЧЕН ЧАСОВНИК',
    id         : '1CH',
    slug       : 'sreburen-ruchen-chasovnik',
    oldSlug    : '/watch/watches.htm',
    desc       : 'Корпус: сребро и злато с инкрустиран брилянт Циферблат: сребро, злато и 1бр. брилянт на 12h Капак от титан Швейцарски кварцов механизъм " ETA" със седем камъка (18 месеца гаранция) Верижка: ръчно изработена от телешка кожа със сребърна закопчалка Сапфирено стъкло Водоустойчив',
    sku        : '1CH',
    category   : 'sreburni chasovnici',
    attributes : null,
    images     : ['1ch.jpg', '1ch-2.jpg', '1ch-3.jpg.jpg'] 
},
// No9
{
    price      : 2313,
    name       : 'ЧАСОВНИК КОЛИЕ',
    id         : '2CH',
    slug       : 'chasovnik-kolie',
    oldSlug    : '/watch/watches_2.htm',
    desc       : 'Корпус: сребро и злато с инкрустиран брилянт Циферблат: сребро, злато и 4бр. брилянти Швейцарски кварцов механизъм "ETA" със седем камъка (18 месеца гаранция) Сребърен капак Сапфирено стъкло Водоустойчив',
    sku        : '2CH',
    category   : 'sreburni chasovnici',
    attributes : null,
    images      : ['2ch.jpg', '2ch-2.jpg']
},
// No9
{
    price      : 1280,
    name       : 'пръстен "компас"- бяло и жълто злато 12 гр(14k)',
    id         : '19GL',
    slug       : 'prusten-kompas-byalo-i-zhulto-zlato-12-gr14k',
    oldSlug    : '/Gold/19GL.html',
    desc       : 'при въртене на малкото зъбно колело стрелката се върти - брилянти - 0,04ct и 0,02ct SI-F/G',
    sku        : '19GL',
    category   : '',
    attributes : null,
    image      : '19gl.jpg'
}
]

