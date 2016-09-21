$(function() {
    // Global variables
    var NUMBER = {
        posts: 4,
        gallery: 12
    };
    if (typeof Array.prototype.forEach != 'function') {
        Array.prototype.forEach = function(callback){
          for (var i = 0; i < this.length; i++){
            callback.apply(this, [this[i], i, this]);
          }
        };
    }
    // Compile all templates to functions, see jsrender docs
    $('script[type="text/template"]').each(function() {
        var $elem = $(this);
        $.templates($elem.attr('data-name'), $elem.html());
    });

    // Define an object that will hold all the dynamic data needed by application
    var dataBase = {
        route: 'posts',
        posts: [{
            id: '14',
            title: 'Врата: Там бьются наши воины / Gate: Jieitai Kanochi nite, Kaku Tatakaeri [12 из 12]',
            date: '30-09-2015, 20:10',
            author:'Planokyr128',
            poster_scr:'img/posters/5a677934af.jpg',
            year:'2015',
            genre:'приключения, фэнтези',
            country:'Япония',
            number:'12',
            release:'c 04.07.2015 по 19.09.2015',
            producer:'Кёгоку Такахико',
            original_author:'Янай Такуми',
            scoring:'JAM, 9й Неизвестный, Oriko, Гамлетка Цезаревна, Cuba77',
            translators:'Zool, Seiya Loveless',
            description:'В один погожий день в Японии вдруг открылись Врата, откуда повалилось полчище несметное и агрессивно настроенное. Орды рас разных доселе людям известных лишь из книг да игр с киношками - драконы, эльфы, гоблины, орки и человеки с шашками наголо. Герою этой эпичной истории, Ёджи, предстоит стать героем - миротворцем, который должен наладить контакт миров и разрулить непонятки разные. ПРОДОЛЖЕНИЕ БУДЕТ В ЯНВАРЕ...',
            category:'TV',
            ongoing: false
        },
        {
            id: '13',
            title: 'Ванпанчмен / One-Punch Man [12 из 12 + SP]',
            date: '28-12-2015, 21:22',
            author:'Ex-ia',
            poster_scr:'img/posters/10253df40c.jpg',
            year:'2015',
            genre:'боевик, фэнтези, приключения, повседневность, комедия, сверхъестественное, фантастика',
            country:'Япония',
            number:'12',
            release:'c 05.10.2015 по 21.12.2015',
            producer:'Нацумэ Синго',
            original_author:'ONE',
            scoring:'JAM',
            translators:'AleX_MytH, BO3DYX, Reaper, Anku, mutagenb',
            description:'История повествует о юноше по имени Саитама, который живет в мире, иронично похожем на наш. Ему 25, он лыс и прекрасен, к тому же, силен настолько, что с одного удара аннигилирует все опасности для человечества. Он ищет себя на нелегком жизненном пути, попутно раздавая подзатыльники монстрам и злодеям.',
            category:'TV',
            ongoing: false
        },
        {
            id: '12',
            title: 'Класс Убийц / Ansatsu Kyoushitsu [22 из 22]',
            date: '1-01-2016, 14:00',
            author:'Sheenegarmi',
            poster_scr:'img/posters/e6998218d2.jpg',
            year:'2015',
            genre:'комедия, мистика, школа',
            country:'Япония',
            number:'12',
            release:'c 10.01.2015 по 20.06.2015',
            producer:'Киси Сэйдзи',
            original_author:'Мацуи Юсэй',
            scoring:'Shina, FruKt, Jade',
            translators:'FooBoo, Шампусик, Oni',
            description:'В книгах написано «чти учителя своего», но скажите честно: разве вам в школе не попадались педагоги, которых хотелось чем-то от души приголубить… с летальным исходом? Вы-то наверняка удержались, а вот ребятам из 9-го «Е» японской школы «Дубовые холмы» сдерживаться противопоказано. Последний в параллели класс хулиганов, лентяев и чудиков внезапно получает в свои руки судьбу мира, а задача у него одна – любым способом и с чьей угодно помощью убить собственного классного руководителя в течение учебного года! Зачем так резко? Да затем, что Коро-сэнсэй, вообще-то – тыквоголовый пришелец, обожающий уничтожать планеты. С Луной маньяк справился на раз, а Земле дал отсрочку, предложив сыграть в описанную выше игру. Учитель он, кстати, хороший: спокоен, позитивен, всегда поможет, объяснит, разберет ошибки, в том числе и в науке устранения ближнего и дальнего. Только до самого не доберешься – добрый наставник быстрее пуль, а любого супермена скрутит щупальцами в бараний рог. Одна надежда на японскую культуру – может, удастся на сэппуку уговорить?',
            category:'TV',
            ongoing: false
        },
        {
            id: '11',
            title: 'Наруто: Ураганные хроники / Naruto: Shippuuden [443 из xxx]',
            date: '22-12-2015, 11:47',
            author:'kOsjaK',
            poster_scr:'img/posters/1179f9a8e1.jpg',
            year:'2007',
            genre:'приключения, боевые искусства, сёнэн',
            country:'Япония',
            number:'100+',
            release:'c 15.02.2007',
            producer:'Датэ Хаято',
            original_author:'Кисимото Масаси',
            scoring:'Ancord',
            translators:'Mr.Well, DarkDragon, Palladis Tamia, Deep Kamate, Weiss, Hit, Make',
            description:"В мире Наруто незаметно пролетели два года. Бывшие новички пополнили ряды опытных синоби в ранге тюнин и дзёнин. Главные герои не сидели на месте – каждый стал учеником одного из легендарных Саннин – трех великих ниндзя Конохи. Парень в оранжевом продолжил обучение у мудрого, но эксцентричного Дзирайи, постепенно восходя на новую ступень боевого мастерства. Сакура выдвинулась в помощницы и доверенные лица целительницы Цунадэ – нового вождя Деревни Листвы. Ну а Саскэ, чья гордыня привела к изгнанию из Конохи, вступил во временный союз со зловещим Оротимару, причем каждый считает, что лишь использует другого до поры до времени. <br /> Краткая передышка закончилась, и события в очередной раз понеслись с ураганной быстротой. В Конохе вновь прорастают семена старых раздоров, посеянные первыми Хокагэ. Таинственный лидер Акацуки привел в действие план обретения мирового господства. Неспокойно в Деревне Песка и соседних странах, везде всплывают старые тайны, и ясно, что когда-то придется платить по счетам. Долгожданное продолжение манги вдохнуло новую жизнь в сериал и новую надежду в сердца бесчисленных фанатов!",
            category:'TV',
            ongoing: true
        },
        {
            id: '10',
            title: 'Сказка о Хвосте Феи ТВ-2 / Fairy Tail TV-2 [90 (265) из xxx]',
            date: '26-12-2015, 18:09',
            author:'Sheenegarmi',
            poster_scr:'img/posters/d0330548ea.jpg',
            year:'2014, 2015',
            genre:'приключения, комедия, фэнтези, сёнэн',
            country:'Япония',
            number:'100+',
            release:'c 04.07.2015 по 19.09.2015',
            producer:'Кёгоку Такахико',
            original_author:'Масима Хиро',
            scoring:'Ancord',
            translators:'Advokat, Jenia aka Zub, Мария Гостюхина, Bel-chan, Blazing Wizard, sild',
            description:'Фейри Тейл – знаменитая на весь мир своими безбашенными выходками Гильдия волшебников по найму. Молодая волшебница Люси была уверена, что, став одним из её членов, попала в самую замечательную на свете Гильдию… до тех пор, пока не познакомилась со своими камрадами – взрывным огнедышащим и сметающим всё на своём пути Нацу, летающим говорящим котом Хэппи, эксгибиционистом Греем, занудой-берсерком Эльзой, гламурным и любвеобильным Локи… Вместе им предстоит одолеть немало врагов и пережить множество незабываемых приключений!',
            category:'TV',
            ongoing: true
        },
        {
            id: '9',
            title: 'Удар крови OVA / Strike the Blood OVA [01 из 02]',
            date: '6-12-2015, 22:26',
            author:'Darker',
            poster_scr:'img/posters/5505b3ab22.jpg',
            year:'2015',
            genre:'приключения, фэнтези, комедия, этти',
            country:'Япония',
            number:'2',
            release:'c 25.11.2015 по 23.12.2015',
            producer:'Ямамото Хидэё',
            original_author:'Микумо Гакуто',
            scoring:'JAM, Ancord, Nika Lenina',
            translators:'Jeka',
            description:'Человечество заключило с демоническими силами нерушимый мирный договор, который от имени нечисти и нежити заверили три Истинных Предка, высшие князья вампиров. Только мало кто знает, что существует и Четвертый Предок, сильнейший вампир в истории, и уж совсем узкому кругу известно, что она, то ли по воле судьбы, то ли по собственному капризу, недавно передала свой дух и силу японскому старшекласснику Кодзё Акацуки. Парень в один миг превратился в угрозу мировому равновесию и, понимая это, изо всех сил пытается вести привычную жизнь, не открываясь ни старым друзьям, ни младшей сестренке Нагисе. Пытается-то он пытается, да кто же такому поверит?! <br /><br />Акацуки учится в островном городе Итогами, специально созданном для совместного проживания людей и демонов. Мало того, что его лоли-учительница Нацуки – сильный боевой маг, так еще правительство отправляет следить за бедным Кодзё школьницу-мико Юкину Химэраги, вооруженную чудо-копьем «Снежный вальс». 15-летняя Юкина, воспитанная в лесном монастыре, видит задачу просто – с объектом надо всегда быть рядом, остальное не важно. Наивная девочка не понимает, что при этом подопечный может и не выжить от потери крови… э-э, в основном через нос. Ничего, природа возьмет свое, и красавица вернет милому вампиру кровь с лихвой! И, поверьте, не она одна!',
            category:'OVA',
            ongoing: false
        },
        {
            id: '8',
            title: 'Импульс мира / World Trigger [44 из 60]',
            date: '3-12-2015, 05:15',
            author:'Sheenegarmi',
            poster_scr:'img/posters/61f6899bf0.jpg',
            year:'2014, 2015',
            genre:'приключения, фантастика',
            country:'Япония',
            number:'60',
            release:'c 05.10.2014',
            producer:'Хонго Мицуру',
            original_author:'Асихара Дайсукэ',
            scoring:'Holly, Manaoki, SpasmSound',
            translators:'Инна Астафьева',
            description:'В японском городе Микадо открылись ворота в параллельный мир. А кто там живет? Правильно, такие же люди, вот и назвали их Соседями. У них тоже нет единства, идут войны и конфликты, как следствие – на Землю проникают чужие боевые машины, похожие на гигантских насекомых. Были жертвы, город хотели эвакуировать, но наладилось отношения с некоей фракцией Соседей, которые поделились технологиями - и теперь покой Микадо хранит «Граница», организация супербойцов, чья главная база видна отовсюду. Горожане постепенно привыкли к тревогам, а «пограничники» стали телезвездами и местными героями. <br /><br />Четыре года спустя 15-летний нелюдимый очкарик Осаму Микумо вступился за новенького, которого самозваные «крутые» потащили разбираться на пустырь в запретной зоне. Хулиганов они отшили, но внезапно открылись врата, явились чудища, и Осаму вынужден был засветиться, применив «триггер» - чудесное оружие чужаков. К удивлению парня, его новый знакомый по имени Юма Куга сделал то же самое, а бойцом оказался на две головы выше, ибо сам он – не стажер «Границы», а настоящий пришелец. И что теперь? Все отрицать или каяться и сдавать нового друга? В любом случае, с такими «соседями» точно не соскучишься!',
            category:'TV',
            ongoing: true
        },
        {
            id: '7',
            title: 'Судьба/Ночь Схватки: Бесконечных клинков край ТВ-2 / Fate/Stay Night: Unlimited Blade Works TV-2 [13 из 13 + SP]',
            date: '8-11-2015, 22:45',
            author:'Sheenegarmi',
            poster_scr:'img/posters/ecc4f17f99.jpg',
            year:'2015',
            genre:'приключения, фэнтези, романтика, драма',
            country:'Япония',
            number:'13',
            release:'c 05.04.2015 по 28.06.2015',
            producer:'Миура Такахиро',
            original_author:'Насу Киноко',
            scoring:'JAM, Гамлетка Цезаревна',
            translators:'YakuSub Studio, GMC',
            description:'В городке Фуюки вдали от людских глаз кипит Пятая магическая война за Святой Грааль. Начало игры позади, участники давно понесли первые потери, и даже наивный новичок Сиро Эмия начал понимать, что правил и обязательств в смертельной борьбе нет – за исключением тех, что добровольно принимают на себя Мастера и призванные героические духи. Не зря сказано: «по делам узнаете их» - на слово верить нельзя никому, а дела показали, что судьба Сиро неразрывно связана с Рин, наследницей рода Тосака… а также кое-кем еще! <br /><br />Как ни крутись, а Грааль надо получать, хотя бы для того, чтобы таинственный сосуд желаний не натворил зла в чужих руках. Ради этого главные герои не щадят себя, не сдаваясь после поражений и предательства. Если раньше Рин хотела выполнить долг перед семьей, а Сиро – осчастливить человечество, то теперь ребята уже не задумываются о высоких материях, а просто знают – так надо. Надо вставать и снова идти в бой, пускай нет ни сил, ни шансов. В игру вступила сама магия, и она будет решать – наказать ли мир за опасные игрушки или дать еще один шанс. Ну а где все решится, вы и так знаете - в Бесконечном Крае Клинков!',
            category:'TV',
            ongoing: false
        },
        {
            id: '6',
            title: 'Двуличная сестрёнка Умару / Himouto! Umaru-chan [12 из 12]',
            date: '3-11-2015, 02:26',
            author:'Planokyr128',
            poster_scr:'img/posters/30407a1972.jpg',
            year:'2007',
            genre:'комедия',
            country:'Япония',
            number:'12',
            release:'c 09.07.2015 по 24.09.20155',
            producer:'Ота Масахико',
            original_author:'Санкаку Хэд',
            scoring:'Гамлетка Цезаревна, 9й Неизвестный',
            translators:'eX_fr0sT',
            description:'Моя младшая сестра Умару (16 лет) – красивая и известная девушка в городе. Идеальная сестра с добрым сердцем, умная и популярная, все ею восхищаются… Или по крайней мере это то, во что люди верят, но как только она заходит в свою комнату, она становится...',
            category:'TV',
            ongoing: false
        },
        {
            id: '5',
            title: 'На самом деле я... / Jitsu wa Watashi wa... [13 из 13]',
            date: '18-10-2015, 19:27',
            author:'Planokyr128',
            poster_scr:'img/posters/c6474e3f79.jpg',
            year:'2015',
            genre:'комедия, школа, мистика, романтика',
            country:'Япония',
            number:'15',
            release:'c 07.07.2015 по 29.09.2015',
            producer:'Ямамото Ясутака',
            original_author:'Масуда Эйдзи',
            scoring:'JAM, Trina_D',
            translators:'Kladium',
            description:'Куроминэ не умеет врать. Но у всех есть свои секреты, и сам Куроминэ - не исключение. Он влюблён в элегантную и таинственную Сирагами... Но почему когда никто не видит, она расправляет крылья за спиной и обнажает острые клыки? Эта девушка определённо не такая, как остальные...',
            category:'TV',
            ongoing: false
        },
        {
            id: '4',
            title: 'Рыцари Зодиака: Легенда о святилище / Seinto Seiya: Legend of Sanctuary',
            date: '3-01-2015, 10:55',
            author:'Wendeo',
            poster_scr:'img/posters/cccf4b23c0.jpg',
            year:'2014',
            genre:'приключения, фэнтези',
            country:'Япония',
            number:'1',
            release:'21.06.2014',
            producer:'Сато Кэйити',
            original_author:'Сато Кэйити',
            scoring:'Студийная Банда AD, Ancord, Давид Петросян, Jade, Торгиль, BalFor, 9й Неизвестный, Cuba77',
            translators:'Cuba77',
            description:'Простая девушка из не бедной семьи по имени Саори в день своего шестнадцатилетия узнаёт, что она воплощение богини Афины. Злые дядьки хотят её замочить, потому что она может им обломать всю малину. Но молодые парнишки, которых воспитывал дедушка Саори встают на её защиту. Они обладают силой "космо" и зовутся Рыцарями Зодиака! Не лёгкий путь им предстоит пройти через 12 домов Золотых рыцарей, чтобы доказать, что эта Афина настоящая, а та, что у злодеев - нет! Вот такая замануха!',
            category:'Фильмы',
            ongoing: false
        },
        {
            id: '3',
            title: 'История цветов / Hanamonogatari',
            date: '23-11-2014, 23:06',
            author:'Sheenegarmi',
            poster_scr:'img/posters/f794bf8ae8.jpg',
            year:'2014',
            genre:'приключения, драма',
            country:'Япония',
            number:'1',
            release:'16.08.2014',
            producer:'Нисио Исин',
            original_author:'Симбо Акиюки',
            scoring:'Sadzurami, Nika Lenina',
            translators:'Anipaladin, Cuba77',
            description:'Истории цветов - это история Канбару Суруги после того, как Коёми Арараги закончил старшую школу.',
            category:'Фильмы',
            ongoing: false
        },
        {
            id: '2',
            title: 'Магический Индекс: Чудо Эндимиона / Gekijouban Toaru Majutsu no Index: Endymion no Kiseki',
            date: '6-10-2014, 11:49',
            author:'Sheenegarmi',
            poster_scr:'img/posters/b281790e8e.jpg',
            year:'201',
            genre:'приключения, комедия, фантастика',
            country:'Япония',
            number:'1',
            release:'23.02.2013',
            producer:'Нисикиори Хироси',
            original_author:'Камати Кадзума',
            scoring:'Lonely Dragon, Wolfys, Shina, Nika Lenina, Reina',
            translators:'OMG-Subs, Wolfys',
            description:'Незадолго до окончания строительства космического лифта "Эндимион" - Камидзё и Индекс встречают девушку нулевого уровня по имени Мейго Ариса. Вскоре после этого, преследуя Арису, Маги совершают нападение на Академград. В ответ на агрессию со стороны магов - Академград высылает специальный высокотехнологичный отряд, во главе которого стоит Шаттаура Секвенция. Пока на улицах Академграда разгораются бои - Тома узнает от Стейла, что из за необычной способности Арисы может разгореться полномасштабная война между Научной и Магической сторонами конфликта.',
            category:'Фильмы',
            ongoing: false
        },
        {
            id: '1',
            title: 'Хантер Х Хантер - фильм второй / Gekijouban Hunter x Hunter: The Last Mission',
            date: '21-09-2014, 18:40',
            author:'bonifatso',
            poster_scr:'img/posters/287814b529.jpg',
            year:'2013',
            genre:'приключения, фэнтези, сёнэн',
            country:'Япония',
            number:'1',
            release:'27.11.13',
            producer:'Сато Юдзо',
             original_author:'Тогаси Ёсихиро',
            scoring:'JAM',
            translators:'Anku, mutagenb.',
            description:'После довольно продолжительных каникул, проведенных с Кайто на природе, Гон и Киллуа вернулись в лоно цивилизации. Они получили от своего учителя Винга приглашение посетить проводимый в Небесной арене турнир между мастерами двадцати одного этажа, в числе которых будет еще один ученик Винга и товарищ Гона и Киллуа по тренировкам, Зуши. Не успел турнир начаться, а Гон с Киллуа – пообщаться с Биске и навестить Нетеро, также прибывших понаблюдать за боями, – как в Небесной Арене начали твориться странные вещи. <br /> <br />Таинственные люди в черных плащах обездвижили Нетеро и взяли в заложники всех, кроме Гона , Киллуа, Курапики, сопровождающего госпожу Неон, и Леорию, приглашенного Вингом в качестве медика Зуши и заблудившегося неподалеку от арены. Теперь только от них, пожалуй, и зависит исход борьбы с решительно настроенными террористами, которым подвластна странная и могущественная сила, известная как «Он» и превосходящая Нэн во многих отношениях. Проблема в том, что потенциал Он – настоящая загадка для Гона и его друзей, а Нетеро, давным-давно победивший единственного пользователя Он, и сам не слишком уверен в успехе охотников.',
            category:'Фильмы',
            ongoing: false
        },
        {
            id: '0',
            title: 'Падшая с небес: Ангел Прихоти - Вечный хозяин / Sora no Otoshimono Final',
            date: '10-09-2014, 15:16',
            author:'Sheenegarmi',
            poster_scr:'img/posters/ce578ca17d.jpg',
            year:'2014',
            genre:'комедия, приключения, драма',
            country:'Япония',
            number:'1',
            release:'26.04.2014',
            producer:'Сайто Хисаси',
            original_author:'Минадзуки Суу',
            scoring:'Cuba77',
            translators:'SRBImperator13, Adis, Esito',
            description:'Последняя глава не простой истории Томоки и его дружной компашки ангелойдов. <br /><br /> Суть фильма - Мы в ответе за тех кого приручили. Ну и о любви немного.',
            category:'Фильмы',
            ongoing: false
        }],

    gallery: [
        {
            id:'21',
            src:'img/gallery/024f45fbf624747f217f668bfef51b4f.jpg',
            category:'WarCraft',
            rating:'25'
        },
        {
            id:'20',
            src:'img/gallery/8jv6HQ9.png',
            category:'all',
            rating:'22'
        },
        {
            id:'19',
            src:'img/gallery/1024x768_201473_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'11'
        },
        {
            id:'18',
            src:'img/gallery/1280x800_201926_[www.ArtFile.ru].jpeg',
            category:'Soul Eater',
            rating:'12'
        },
        {
            id:'17',
            src:'img/gallery/1280x800_202929_[www.ArtFile.ru].jpeg',
            category:'To Love-Ru',
            rating:'5'
        },
        {
            id:'16',
            src:'img/gallery/1280x800_207913_[www.ArtFile.ru].jpeg',
            category:'To Aru Majutsu no Index',
            rating:'35'
        },
        {
            id:'15',
            src:'img/gallery/1280x800_430255_[www.ArtFile.ru].jpeg',
            category:'Ore no Imouto ga Konna ni Kawaii Wake ga Nai',
            rating:'45'
        },
        {
            id:'14',
            src:'img/gallery/1280x800_806533_[www.ArtFile.ru].jpeg',
                category:'Naruto',
                rating:'46'
        },
        {
            id:'13',
            src:'img/gallery/1280x800_851338_[www.ArtFile.ru].jpeg',
            category:'Code Geass',
            rating:'74'
        },
        {
            id:'12',
            src:'img/gallery/1280x800_862817_[www.ArtFile.ru].jpeg',
            category:'Neon Genesis Evangelion',
            rating:'5'
        },
        {
            id:'11',
            src:'img/gallery/1280x800_872047_[www.ArtFile.ru].jpeg',
            category:'One Piece',
            rating:'9'
        },
        {
            id:'10',
            src:'img/gallery/1280x800_873440_[www.ArtFile.ru].jpeg',
            category:'The Melancholy of Haruhi Suzumiya',
            rating:'17'
        },
        {
            id:'9',
            src:'img/gallery/1280x800_894207_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'45'
        },
        {
            id:'8',
            src:'img/gallery/1280x800_902302_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'22'
        },
        {
            id:'7',
            src:'img/gallery/1280x800_902635_[www.ArtFile.ru].jpeg',
            category:'Tokyo Ghoul',
            rating:'125'
        },
        {
            id:'6',
            src:'img/gallery/1280x800_920427_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'115'
        },
        {
            id:'5',
            src:'img/gallery/1280x800_920433_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'99'
        },
        {
            id:'4',
            src:'img/gallery/1280x800_924107_[www.ArtFile.ru].jpeg',
            category:'Bakemonogatari',
            rating:'39'
        },
        {
            id:'3',
            src:'img/gallery/1280x800_944177_[www.ArtFile.ru].jpeg',
            category:'No Game No Life',
            rating:'225'
        },
        {
            id:'2',
            src:'img/gallery/1280x800_948743_[www.ArtFile.ru].jpeg',
            category:'all',
            rating:'25'
        },
        {
            id:'1',
            src:'img/gallery/gun-gale-online-asada-shino-quasixi-1920x1080.jpg',
            category:'Sword Art Online',
            rating:'29'
        },
        {
            id:'0',
            src:'img/gallery/multifandom.ru-415.jpg',
            category:'all',
            rating:'39'
            },
        {
            id:'add',
            src:'img/plus_add_green.png',
            category: 'all',
            rating:'-1'
        }
    ]
    };

        var dataFilter = dataBase;
        var applicationState = {};

        //Set up navigation buttons
        $('.content').on('click', '.navi span', function(){
            $this = $(this);
            var NUMBER_OF_PAGES = $('.navi span').length/2;
            var num = $('.navi span').index($this) % NUMBER_OF_PAGES;
            var route = applicationState.route;
            applicationState[route] = dataFilter[route].slice(NUMBER[route]*num, NUMBER[route]*num + NUMBER[route]);
            $('.navi span').removeAttr('class');
            $('.navi span').eq(num).addClass('active');
            $('.navi span').eq(NUMBER_OF_PAGES + num).addClass('active');
            render();
        });

        $('.content').on('click', '.navibut .next', function(){
            $('.navi span.active').next().click();
            if($('html').hasClass('lt-ie9')){
                $('.navi span.active').next().next().click();
            }
        });
        $('.content').on('click', '.navibut .prev', function(){
            $('.navi span.active').prev().click();
            if($('html').hasClass('lt-ie9')){
                $('.navi span.active').prev().prev().click();
            }
        });

        // Set up right-menu buttons
        function isEmpty(){
            var route = applicationState.route;
            if(dataFilter[route].length == 0){
                $content.html('<div class="info"><em>Информация</em><p>К сожалению, поиск по сайту не дал никаких результатов. Попробуйте изменить или сократить Ваш запрос.</p></div>');
                $('.navibut').attr('style', 'display:none');
                $('.navi').empty();
            } else {
                $('.navibut').removeAttr('style');
            }
        }
        $('.right .button').on('click', function(e){
            e.preventDefault();
            var route = applicationState.route;
            dataFilter = {};
            dataFilter[route] = [];
            var text = $('.right input').val().toLowerCase();
            dataBase[route].forEach(function(item){
                if(item.title.toLowerCase().indexOf(text) != -1){
                    dataFilter[route].push(item);
                }
            });
            applicationState[route] = dataFilter[route].slice(0, NUMBER[route]);

            navigation();
            render();
            isEmpty();
        });
        $('.right .submenu span').on('click', function(){
            $this = $(this);
            var route = applicationState.route;
            if(route == 'add-picture'){
                applicationState.route = 'gallery';
                route = 'gallery';
            }
            if(route == 'add-post'){
                applicationState.route = 'posts';
                route = 'posts';
            }
            dataFilter = {};
            dataFilter[route] = [];
            var name = $this.parent().parent().attr('data-name');
            var text = $this.text().toLowerCase();
            dataBase[route].forEach(function(item){
                if(item[name].toLowerCase().indexOf(text) != -1){
                    dataFilter[route].push(item);
                }
            });
            applicationState[route] = dataFilter[route].slice(0, NUMBER[route]);
            if(route == 'gallery'){
                var speedbar = $('.speedbar span');
                speedbar.html('<span data-name="gallery">Галерея</span> » <span data-name="'+ $this.text() +'"> '+ $this.text() +'</span>');
            }
            navigation();
            render();
            isEmpty();
        });
        $('.category li').on('click', function(){
            $('#anime').click();
            $this = $(this);
            var route = applicationState.route;
            dataFilter = {};
            dataFilter[route] = [];
            var name = $this.attr('data-name');
            dataBase.posts.forEach(function(item){
                if(item.category == name){
                    dataFilter[route].push(item);
                }
            });
            applicationState[route] = dataFilter[route].slice(0, NUMBER[route]);

            var speedbar = $('.speedbar span');
            speedbar.html('<span data-name="anime">Аниме Онлайн</span> » <span data-name="'+ name +'">Аниме '+ name +' Онлайн</span>');
            navigation();
        });
        function revers(arr){
            var item;
            for(i=0; i<arr.length; i++){
                item = arr.splice(i, 1);
                arr.unshift(item[0]);
            }
            return arr;
        }
        $('.right .rating').on('click', function(){
            $this = $(this);
            var route = applicationState.route;
            if(route == 'add-picture'){
                applicationState.route = 'gallery';
                route = 'gallery';
                $('.right .rating').removeClass('reverse').addClass('straight').attr('title', 'Сортировать по убыванию');
            }
            dataFilter = {};
            dataFilter.gallery = [];
            dataBase.gallery.forEach(function(item){
                dataFilter.gallery.push(item);
            });
            if($this.hasClass('straight')){
                dataFilter.gallery.sort(function(a, b){
                    return (+(a.rating) > +(b.rating) ? -1 : 1);
                });
                $this.addClass('reverse').removeClass('straight').attr('title', 'Сортировать по возрастанию');
            } else {
                dataFilter.gallery.sort(function(a, b){
                    return (+(a.rating) > +(b.rating) ? -1 : 1);
                });
                revers(dataFilter.gallery);
                var add = dataFilter.gallery.shift();
                dataFilter.gallery.push(add);
                $this.removeClass('reverse').addClass('straight').attr('title', 'Сортировать по убыванию');
            }
            applicationState[route] = dataFilter[route].slice(0, NUMBER[route]);
            if(route == 'gallery'){
                var speedbar = $('.speedbar span');
                speedbar.html('<span data-name="gallery">Галерея</span> » <span data-name="'+ $this.text() +'"> '+ $this.text() +'</span>');
            }
            navigation();
            render();
        });

        // Set up speedbar
        $('.speedbar').on('click', 'span span', function(){
            var name = $(this).attr('data-name');
            if(name == 'anime'){
                $('#anime').click();
            } else if(name == 'gallery'){
                $('#gallery').click();
            } else {
                $('.category li[data-name ="' + name +'"]').click();
            }

        });
        $('.start').on('click', function(){
            $('#anime').click();
            var route = applicationState.route;
            dataFilter = {};
            dataFilter[route] = [];
            dataBase[route].forEach(function(item){
                if(item.ongoing){
                    dataFilter[route].push(item);
                }
            });
            applicationState[route] = dataFilter[route].slice(0, NUMBER[route]);
            navigation();
        });
        //Set up navigation event listeners
        function showRightMenu(){
            if(applicationState.route == 'posts'){
                $('.right form').removeClass('disabled');
                $('.right .navigation').eq(0).removeClass('disabled');
                $('.right .navigation').eq(1).addClass('disabled');
            }
            if(applicationState.route == 'gallery'){
                $('.right .navigation').eq(0).addClass('disabled');
                $('.right .navigation').eq(1).removeClass('disabled');
                $('.right form').addClass('disabled');
                $('.right .rating').addClass('straight').removeClass('reverse');
            }
            if(applicationState.route == 'contacts'){
                $('.navibut').addClass('disabled');
                $('.right .navigation').addClass('disabled');
                $('.right form').addClass('disabled');
            }
        }
        $('nav').on('click', 'a', function() {
            var route = $(this).attr('class');
            var speedbar = $('.speedbar span');
            dataFilter = dataBase;
            if(route == 'posts'){
                applicationState = {
                    route: 'posts',
                    posts: dataFilter.posts.slice(0, NUMBER.posts)
                };
                speedbar.html('<span data-name="anime">Аниме Онлайн</span>');
            }
            if(route == 'gallery'){
                applicationState = {
                    route: 'gallery',
                    gallery: dataFilter.gallery.slice(0, NUMBER.gallery)
                };
                speedbar.html('<span data-name="gallery">Галерея</span>');
            }

            if(route == 'contacts'){
                applicationState = {
                    route: 'contacts'
                };
                dataFilter = {contacts:''};
                speedbar.html('<span data-name="contacts">Контакты</span>');
            }
            showRightMenu();
            isEmpty();
            render();
            navigation();
        });

        // Set up add/edit/delete buttons
        $('.content').on('click', '.post .delete', function(){
            var $this = $(this);
            var $parent = $this.parent().parent();
            var pos = $parent.attr('data-position');
            dataBase.posts.forEach(function(item, i){
                if (item.id == pos){
                    dataBase.posts.splice(i, 1);
                }
            });
            $('#anime').click();
        });
        $('.content').on('click', '.new', function(){
            applicationState = {
                route: 'add-post'
            };
            $('form').attr('data-id', +dataBase.posts[0].id + 1);
            $('.navibut').addClass('disabled');
            $('.navi').addClass('disabled');
            render();
        });
        $('.content').on('click', '.edit', function(){
            applicationState = {
                route: 'add-post'
            };
            $('.navibut').addClass('disabled');
            $('.navi').addClass('disabled');
            render();
            var $this = $(this);
            var $parent = $this.parent().parent();
            var post_id = $parent.attr('data-position');
            $('form').attr('data-id', post_id);
            dataBase.posts.forEach(function(item, i){
                if (item.id == post_id){
                    $('input[name="title"]').val(item.title);
                    $('input[name="author"]').val(item.author);
                    $('input[name="poster_scr"]').val(item.poster_scr);
                    $('input[name="number"]').val(item.number);
                    $('input[name="release"]').val(item.release);
                    $('input[name="original_author"]').val(item.original_author);
                    $('input[name="translators"]').val(item.translators);
                    $('input[name="producer"]').val(item.producer);
                    item.year.split(', ').forEach(function(item){
                        $('select[name="year"]').find("option:contains(" +item+")").attr('selected', 'selected');
                    });
                    item.genre.split(', ').forEach(function(item){
                        $('select[name="genre"]').find("option:contains(" +item+")").attr('selected', 'selected');
                    });
                    $('select[name="country"]').val(item.country);
                    item.scoring.split(', ').forEach(function(item){
                        $('select[name="scoring"]').find("option:contains(" +item+")").attr('selected', 'selected');
                    });
                    $('textarea').val(item.description);
                    $('select[name="ongoing"]').val(item.ongoing.toString());
                    $('select[name="category"]').val(item.category);
                }
            });
        });

        // Добавляем каждому проверяемому полю, указание что поле пустое
        $('.rf').addClass('empty_field');
        $('.rs').addClass('empty_field');

        // Функция проверки полей формы
        function checkInput(){
            $('.rf').each(function(){
                if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');
                } else {
                // Если поле пустое добавляем класс-указание
                    $(this).addClass('empty_field');
                }
            });
            $('.rs').each(function(){
               if($(this).val() != null){
                // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');
                } else {
                // Если поле пустое добавляем класс-указание
                    $(this).addClass('empty_field');
                }
            });
        }

        // Функция подсветки незаполненных полей
        function lightEmpty(){
            $('.empty_field').attr('style', 'border:1px solid #d8512d');
            // Через 3 секунды удаляем подсветку
            setTimeout(function(){
                $('.empty_field').removeAttr('style');
            },3000);
        }

        // Событие клика по кнопке отправить
        $('.content').on('click', '.add-post .save', function(e){
            e.preventDefault();
            checkInput();
            // Считаем к-во незаполненных полей
            var sizeEmpty = $('.empty_field').size();
            if(sizeEmpty > 0){
                lightEmpty();
            } else {
                var post_id = $('form').attr('data-id');
                var date = new Date();
                var newPost ={
                   id: post_id,
                    title: $('input[name="title"]').val(),
                    author: $('input[name="author"]').val(),
                    date: date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()+', '+date.getHours()+':'+date.getMinutes(),                    poster_scr: $('input[name="poster_scr"]').val(),
                    number: $('input[name="number"]').val(),
                    release: $('input[name="release"]').val(),
                    original_author: $('input[name="original_author"]').val(),
                    translators: $('input[name="translators"]').val(),
                    producer: $('input[name="producer"]').val(),
                    year: $('select[name="year"]').val().join(', '),
                    genre: $('select[name="genre"]').val().join(', '),
                    country: $('select[name="country"]').val(),
                    scoring: $('select[name="scoring"]').val().join(', '),
                    description: $('textarea').val(),
                    category: $('select[name="category"]').val(),
                    ongoing: $('select[name="ongoing"]').val() == true
                }
                if(post_id > dataBase.posts[0].id){
                    dataBase.posts.unshift(newPost);
                } else {
                    dataBase.posts.forEach(function(post, i){
                    if (post.id == post_id){
                        for (var key in post) {
                        post[key] = newPost[key];
                        }}
                    });
                }
                $('#anime').click();
            }
        });

        $('.content').on('click', '.wallpapers .delete', function(){
            var $this = $(this);
            var $parent = $this.parent();
            var pos = $parent.attr('data-position');
            dataBase.gallery.forEach(function(item, i){
                if (item.id == pos){
                    dataBase.gallery.splice(i, 1);
                }
            });
            $('#gallery').click();
        });
        $('.content').on('click', '.add', function(){
            applicationState = {
                route: 'add-picture'
            };
            $('.speedbar span').html('<span data-name="gallery">Галерея</span>');
            $('.navibut').addClass('disabled');
            $('.navi').addClass('disabled');
            $('.right .rating').removeClass('reverse').addClass('straight').attr('title', 'Сортировать по убыванию');
            render();
        });
        $('.content').on('click', '.add-picture .save', function(e){
            e.preventDefault();
            var src = $('.content input').val();
            var category = $('select').val();
            var length = dataBase.gallery.length;
            if($('.content input').val() == ''){
                $('input').attr('style', 'border:1px solid #d8512d');
                // Через 3 секунды удаляем подсветку
                setTimeout(function(){
                    $('input').removeAttr('style');
                },3000);
            } else {
                dataBase.gallery.unshift({
                id: +dataBase.gallery[0].id + 1,
                src: src,
                category: category,
                rating:'0'
                });
                $('#gallery').click();
            }
        });
        $('.content').on('click', '.rating span', function(){
            var $this = $(this);
            var $parent = $this.parent().parent();
            var pos = $parent.attr('data-position');
            dataBase.gallery.forEach(function(item, i){
                if (item.id == pos){
                    if($this.hasClass('up')){
                        item.rating++;
                    }
                    if($this.hasClass('down')){
                        item.rating--;
                    }
                }
            });
            render();
        });
        var $content = $('.content-2');

        // render function will be called every time content needs an update
        function render() {
            var content = $.templates[applicationState.route](applicationState);
            $content.html(content);
            if(applicationState.route != 'posts'){
                $('.new').addClass('disabled');
            }else{
                $('.new').removeClass('disabled');
            }
          }

          function navigation(){
            var $navi = $('.navi');
            var route = applicationState.route;
            if(dataFilter[route] == undefined){
                $navi.addClass('disabled');
                $('.navibut').addClass('disabled');
            } else {
                var NUMBER_OF_PAGES = $('.navi span').length/2;
                $navi.empty();
                $navi.removeClass('disabled');
                $('.navibut').removeClass('disabled');
                var route = applicationState.route;
                for(i=1; i<dataFilter[route].length/NUMBER[route] + 1; i++){
                    $('.navi').append('<span>' + i + '</span>');
                }
                $('.navi span').eq(0).click();
            }
          }
          // Call it immediately to render the default part
          $('#anime').click();

        $('.navigation').on('click', '.menu >li>span', function(){
            $this = $(this);
            if($this.hasClass('active')) {
                $this.removeAttr('class');
            }else{
                $('.navigation .active').removeAttr('class');
                $this.addClass('active');
            }
        });
        $('nav li:first-child a').on('mouseenter', function(){
            $('nav .submenu').addClass('hover');
        });
        $('nav li:first-child a').on('mouseleave', function(){
            setTimeout("$('nav .submenu').removeClass('hover')", 1000);
        });
        $('.left-arrow').click(function(){
            if($('.slides li:first-child').hasClass('active')){
                $('.slides .active').removeAttr('style').removeAttr('class');
                $('.slides li:last-child').animate({opacity: "1"}, 1000).addClass('active');
            } else {
                $('.slides .active').removeAttr('style').removeAttr('class')
                .prev().animate({opacity: "1"}, 1000).addClass('active');
            }
        })

        $('.right-arrow').click(function(){
            if($('.slides li:last-child').hasClass('active')){
                $('.slides .active').removeAttr('style').removeAttr('class');
                $('.slides li:first-child').animate({opacity: "1"}, 1000).addClass('active')
            }else{
                $('.slides .active').removeAttr('style').removeAttr('class')
                .next().animate({opacity: "1"}, 1000).addClass('active');
            }
        })

        $('footer .up').fadeOut();
        $(window).scroll(function() {
            if($(this).scrollTop() > 1800) {
                $('footer .up').fadeIn();
            } else {
                $('footer .up').fadeOut();
            }
        });
        $('footer .up').click(function() {
            $('body,html').animate({scrollTop:530},500);
        });
    });
