(() => {
  'use strict';

  const LANGS = [
    { code: 'en', native: 'English', english: 'English' },
    { code: 'ko', native: '한국어', english: 'Korean' },
    { code: 'si', native: 'සිංහල', english: 'Sinhala' },
    { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
    { code: 'ne', native: 'नेपाली', english: 'Nepali' },
    { code: 'hi', native: 'हिन्दी', english: 'Hindi' },
    { code: 'zh', native: '中文', english: 'Chinese' },
    { code: 'ja', native: '日本語', english: 'Japanese' },
    { code: 'es', native: 'Español', english: 'Spanish' },
    { code: 'de', native: 'Deutsch', english: 'German' }
  ];

  const P = {
    en: {
      sub: 'Language research & learning', announce: 'New 2026 intake — Korean for Sinhala speakers', announceLink: 'View programs', signIn: 'Sign in', account: 'My account', menu: 'Menu', language: 'Language',
      nav: ['Home','Programs','Research','Courses','Videos','Materials','Quiz','Assignments','Culture','About'],
      hero: ['Language research, made human.','We study how Korean is spoken, learned and lived — then turn evidence into clearer teaching for learners across Asia and beyond.','Explore our work','Find your course','Research-led • Culture-connected • Learner-first','Korean language & culture','Field notes','Meaning lives in context.','Research seminar, Seoul × Colombo'],
      metrics: [['10','interface languages'],['4','learning pathways'],['CEFR + TOPIK','aligned outcomes'],['1','connected community']],
      home: ['Choose your way into Korean','Different goals need different routes. Every pathway connects language, culture and evidence—not memorisation alone.','How we work','From real voices to better learning','We examine speech, grammar, meaning and cross-cultural use, then build practical teaching around what learners actually need.','Inside 언어랩','Learn with researchers, not just lessons','Short, focused resources connect today’s class with everyday Korean.','Korean, explained in your language','Switch the entire experience at any time. Learning begins with being understood.','Start from where you are','Take a short level check or browse our upcoming live courses.'],
      paths: [['Everyday Korean','Build a confident foundation for daily life and conversation.'],['TOPIK & EPS-TOPIK','Exam strategy with contextual language and Sinhala support.'],['Academic Korean','Read, write and present for university and research.'],['Workplace Korean','Communicate safely and respectfully in Korean workplaces.']],
      insights: [['Contrastive linguistics','We map where Korean differs from Sinhala and other Asian languages.'],['Language in context','Workplace, migration and everyday culture shape every curriculum.'],['Open learning design','Captions, transcripts and home-language explanations widen access.']],
      cards: [['Pronunciation clinic','Why Korean final consonants change in real speech.'],['Grammar in context','은/는 and 이/가 through meaning, not formulas.'],['Culture brief','Reading hierarchy and politeness in Korean workplaces.']],
      pages: {
        programs:['Programs','Purpose-built routes for conversation, exams, academic study and work. Choose a pathway, then learn with clear outcomes and multilingual support.','Find your pathway'],
        research:['Research','Applied linguistics for the real conditions in which Korean is learned, spoken and negotiated across cultures.','Our research agenda'],
        courses:['Courses','Live and blended Korean courses from first Hangul to advanced academic communication.','Upcoming cohorts'],
        videos:['Video library','Captioned micro-lessons, research explainers and culture conversations, ready when you are.','Watch and learn'],
        materials:['Class materials','Downloadable lesson notes, worksheets, transcripts and vocabulary packs organised by level.','Your learning shelf'],
        quiz:['Quiz studio','Check what you know with instant feedback and a practical recommendation for your next step.','Five-minute check'],
        assignments:['Assignments','See current tasks, upload your work and keep track of feedback in one place.','Student workspace'],
        culture:['Korean culture','Language makes sense inside culture. Explore the values, histories and everyday practices behind the words.','Beyond vocabulary'],
        about:['About 언어랩','An independent bridge between language research and meaningful Korean education for global learners.','Research that teaches'],
        admin:['Institute dashboard','Manage multilingual content, learners, assignments and research updates.','Admin workspace']
      },
      common: { explore:'Explore', learnMore:'Learn more', viewAll:'View all', search:'Search', all:'All', beginner:'Beginner', intermediate:'Intermediate', advanced:'Advanced', download:'Download', watch:'Watch lesson', enroll:'View course', start:'Start quiz', submit:'Submit', save:'Save', published:'Published', draft:'Draft', back:'Back', next:'Next', finish:'Finish', retry:'Try again', close:'Close', due:'Due', minutes:'min', featured:'Featured lesson', transcript:'Transcript', filters:'Filters', category:'Category', level:'Level', contact:'Contact us' },
      footer: ['Researching Korean language and culture, then translating insight into inclusive learning across borders.','Explore','For students','Institute','Privacy','Accessibility','© 2026 언어랩. Built for language, culture and connection.'],
      global: 'Ten interface languages. One shared curiosity.',
      translationNote: 'Interface and learning previews are available in ten languages. Academic materials should be reviewed by native-language editors before publication.'
    },
    ko: {
      sub:'언어 연구와 교육', announce:'2026년 신입 모집 — 싱할라어 화자를 위한 한국어', announceLink:'과정 보기', signIn:'로그인', account:'내 계정', menu:'메뉴', language:'언어',
      nav:['홈','프로그램','연구','강좌','영상','학습자료','퀴즈','과제','문화','소개'],
      hero:['언어 연구를, 사람답게.','한국어가 어떻게 말해지고 학습되며 삶 속에서 사용되는지 연구하고, 그 근거를 아시아와 전 세계 학습자를 위한 더 나은 교육으로 연결합니다.','우리의 연구 보기','내 강좌 찾기','연구 기반 • 문화 연결 • 학습자 중심','한국어와 한국 문화','현장 기록','의미는 맥락 속에 있습니다.','연구 세미나, 서울 × 콜롬보'],
      metrics:[['10','지원 언어'],['4','학습 경로'],['CEFR + TOPIK','연계 학습 목표'],['1','연결된 공동체']],
      home:['나에게 맞는 한국어 학습 경로','목표가 다르면 길도 달라야 합니다. 모든 과정은 언어와 문화, 연구 근거를 연결합니다.','연구 방식','실제 목소리에서 더 나은 교육으로','발음·문법·의미·문화 간 소통을 연구하고 학습자에게 필요한 수업을 설계합니다.','언어랩 콘텐츠','단순한 수업이 아닌, 연구자와 함께 배우기','짧고 집중된 자료로 오늘의 수업과 실제 한국어를 연결합니다.','내 언어로 이해하는 한국어','언제든 전체 화면 언어를 바꿀 수 있습니다. 이해받는 순간 학습이 시작됩니다.','지금 수준에서 시작하세요','짧은 레벨 테스트를 하거나 다가오는 실시간 강좌를 살펴보세요.'],
      paths:[['생활 한국어','일상과 대화를 위한 자신감 있는 기초를 만듭니다.'],['TOPIK·EPS-TOPIK','맥락 중심 언어와 싱할라어 지원으로 시험을 준비합니다.'],['학문 목적 한국어','대학과 연구를 위한 읽기·쓰기·발표를 배웁니다.'],['직장 한국어','한국 직장에서 안전하고 존중 있게 소통합니다.']],
      insights:[['대조언어학','한국어와 싱할라어 및 아시아 언어의 차이를 분석합니다.'],['맥락 속 언어','직장, 이주, 일상문화가 교육과정의 바탕이 됩니다.'],['열린 학습 설계','자막, 대본, 모어 설명으로 접근성을 높입니다.']],
      cards:[['발음 클리닉','실제 발화에서 한국어 받침이 달라지는 이유.'],['맥락 속 문법','공식이 아닌 의미로 배우는 은/는과 이/가.'],['문화 브리프','한국 직장의 위계와 높임말 이해하기.']],
      pages:{programs:['프로그램','회화·시험·학문·직무 목적에 맞춘 연구 기반 학습 경로입니다.','학습 경로 찾기'],research:['연구','한국어가 문화 간에 학습되고 사용되는 실제 조건을 탐구하는 응용언어학 연구입니다.','연구 의제'],courses:['강좌','한글 입문부터 고급 학문 소통까지, 실시간 및 혼합형 한국어 강좌입니다.','개강 예정'],videos:['영상 자료실','자막이 있는 마이크로 수업, 연구 해설, 문화 대화를 언제든 시청하세요.','보고 배우기'],materials:['학습 자료','수준별 수업 노트, 활동지, 대본, 어휘 자료를 내려받으세요.','나의 학습 서가'],quiz:['퀴즈 스튜디오','즉시 피드백과 다음 학습 단계를 확인하세요.','5분 진단'],assignments:['과제','현재 과제를 확인하고 제출하며 피드백을 관리하세요.','학생 학습 공간'],culture:['한국 문화','언어는 문화 속에서 이해됩니다. 말 뒤의 가치와 역사, 일상을 탐구하세요.','어휘 너머'],about:['언어랩 소개','언어 연구와 세계 학습자를 위한 의미 있는 한국어 교육을 잇습니다.','가르치는 연구'],admin:['기관 대시보드','다국어 콘텐츠, 학습자, 과제, 연구 소식을 관리합니다.','관리자 공간']},
      common:{explore:'살펴보기',learnMore:'더 알아보기',viewAll:'전체 보기',search:'검색',all:'전체',beginner:'초급',intermediate:'중급',advanced:'고급',download:'다운로드',watch:'수업 보기',enroll:'강좌 보기',start:'퀴즈 시작',submit:'제출',save:'저장',published:'게시됨',draft:'초안',back:'이전',next:'다음',finish:'완료',retry:'다시 하기',close:'닫기',due:'마감',minutes:'분',featured:'추천 수업',transcript:'대본',filters:'필터',category:'분류',level:'수준',contact:'문의하기'},
      footer:['한국어와 문화를 연구하고, 그 통찰을 국경을 넘는 포용적 학습으로 연결합니다.','탐색','학생','기관','개인정보','접근성','© 2026 언어랩. 언어와 문화, 연결을 위해 만들었습니다.'], global:'열 가지 언어, 하나의 호기심.', translationNote:'인터페이스와 학습 미리보기는 10개 언어로 제공됩니다. 전문 자료는 게시 전 원어민 검토를 권장합니다.'
    },
    si: {
      sub:'භාෂා පර්යේෂණ සහ ඉගෙනීම', announce:'2026 නව බඳවා ගැනීම — සිංහල කථිකයන් සඳහා කොරියානු', announceLink:'පාඨමාලා බලන්න', signIn:'පිවිසෙන්න', account:'මගේ ගිණුම', menu:'මෙනුව', language:'භාෂාව',
      nav:['මුල් පිටුව','වැඩසටහන්','පර්යේෂණ','පාඨමාලා','වීඩියෝ','ද්‍රව්‍ය','ප්‍රශ්නාවලිය','පැවරුම්','සංස්කෘතිය','අප ගැන'],
      hero:['භාෂා පර්යේෂණයට මනුෂ්‍ය අරුතක්.','කොරියානු භාෂාව කතා කරන, ඉගෙන ගන්නා සහ ජීවත් වන ආකාරය අපි අධ්‍යයනය කරමු. එම සාක්ෂි ආසියාවේ සහ ලොව පුරා ඉගෙන ගන්නන් සඳහා පැහැදිලි ඉගැන්වීමක් බවට පත් කරමු.','අපේ කාර්යය බලන්න','ඔබේ පාඨමාලාව සොයන්න','පර්යේෂණ මූලික • සංස්කෘතික • ශිෂ්‍ය කේන්ද්‍රීය','කොරියානු භාෂාව සහ සංස්කෘතිය','ක්ෂේත්‍ර සටහන්','අර්ථය ජීවත් වන්නේ සන්දර්භය තුළයි.','පර්යේෂණ සම්මන්ත්‍රණය, සෝල් × කොළඹ'],
      metrics:[['10','අතුරුමුහුණත් භාෂා'],['4','ඉගෙනුම් මාර්ග'],['CEFR + TOPIK','ගැළපෙන ප්‍රතිඵල'],['1','සම්බන්ධිත ප්‍රජාව']],
      home:['කොරියානු භාෂාවට ඔබේ මාර්ගය තෝරන්න','විවිධ අරමුණු සඳහා විවිධ මාර්ග අවශ්‍යය. සෑම මාර්ගයක්ම භාෂාව, සංස්කෘතිය සහ සාක්ෂි සම්බන්ධ කරයි.','අපි වැඩ කරන ආකාරය','සැබෑ හඬවලින් වඩා හොඳ ඉගෙනීමකට','උච්චාරණය, ව්‍යාකරණය, අර්ථය සහ සංස්කෘතික භාවිතය අධ්‍යයනය කර ප්‍රායෝගික පාඩම් නිර්මාණය කරමු.','언어랩 ඇතුළත','පාඩම් පමණක් නොව, පර්යේෂකයන් සමඟ ඉගෙන ගන්න','කෙටි හා පැහැදිලි සම්පත් පන්තිය සැබෑ කොරියානු භාවිතයට සම්බන්ධ කරයි.','ඔබේ භාෂාවෙන් කොරියානු තේරුම් ගන්න','ඕනෑම වේලාවක මුළු අත්දැකීමේ භාෂාව මාරු කරන්න. තේරුම් ගැනීමෙන් ඉගෙනීම ඇරඹේ.','ඔබ සිටින තැනින් අරඹන්න','කෙටි මට්ටම් පරීක්ෂණයක් කරන්න හෝ සජීවී පාඨමාලා බලන්න.'],
      paths:[['දෛනික කොරියානු','දෛනික ජීවිතය සහ සංවාදයට විශ්වාසවත් පදනමක් ගොඩනඟන්න.'],['TOPIK සහ EPS-TOPIK','සිංහල සහාය සහ සන්දර්භය සමඟ විභාගයට සූදානම් වන්න.'],['අධ්‍යයන කොරියානු','විශ්වවිද්‍යාල සහ පර්යේෂණ සඳහා කියවීම, ලිවීම සහ ඉදිරිපත් කිරීම.'],['රැකියා ස්ථාන කොරියානු','කොරියානු වැඩපලවල ආරක්ෂිතව හා ගෞරවයෙන් සන්නිවේදනය කරන්න.']],
      insights:[['ප්‍රතිවිරුද්ධ භාෂා විද්‍යාව','කොරියානු සහ සිංහල ඇතුළු ආසියානු භාෂා අතර වෙනස්කම් සිතියම්ගත කරමු.'],['සන්දර්භයේ භාෂාව','රැකියා, සංක්‍රමණය සහ දෛනික සංස්කෘතිය විෂය මාලාව හැඩගස්වයි.'],['විවෘත ඉගෙනුම් නිර්මාණය','උපසිරැසි, පිටපත් සහ මව්භාෂා පැහැදිලි කිරීම් ප්‍රවේශය පුළුල් කරයි.']],
      cards:[['උච්චාරණ සායනය','සැබෑ කථනයේදී කොරියානු අවසන් ව්‍යංජන වෙනස් වන්නේ ඇයි?'],['සන්දර්භයේ ව්‍යාකරණ','සූත්‍ර වෙනුවට අර්ථයෙන් 은/는 සහ 이/가.'],['සංස්කෘතික සටහන','කොරියානු සේවා ස්ථානවල ධුරාවලිය සහ ගෞරව භාෂාව.']],
      pages:{programs:['වැඩසටහන්','සංවාද, විභාග, අධ්‍යයන සහ රැකියා අරමුණු සඳහා බහුභාෂා සහාය ඇති මාර්ග.','ඔබේ මාර්ගය සොයන්න'],research:['පර්යේෂණ','කොරියානු භාෂාව සංස්කෘතීන් අතර ඉගෙන ගන්නා හා භාවිත කරන සැබෑ තත්ත්වයන් පිළිබඳ ව්‍යවහාරික භාෂා විද්‍යාව.','පර්යේෂණ න්‍යාය පත්‍රය'],courses:['පාඨමාලා','හංගුල් ආරම්භයේ සිට උසස් අධ්‍යයන සන්නිවේදනය දක්වා සජීවී හා මිශ්‍ර පාඨමාලා.','ඉදිරි කණ්ඩායම්'],videos:['වීඩියෝ පුස්තකාලය','උපසිරැසි සහිත කෙටි පාඩම්, පර්යේෂණ පැහැදිලි කිරීම් සහ සංස්කෘතික සංවාද.','නරඹා ඉගෙන ගන්න'],materials:['පන්ති ද්‍රව්‍ය','මට්ටම අනුව සටහන්, වැඩපත්‍ර, පිටපත් සහ වචන මාලා බාගන්න.','ඔබේ ඉගෙනුම් රාක්කය'],quiz:['ප්‍රශ්නාවලි ස්ටුඩියෝ','ක්ෂණික ප්‍රතිචාර සමඟ ඔබේ දැනුම පරීක්ෂා කර ඊළඟ පියවර සොයන්න.','මිනිත්තු පහක පරීක්ෂණය'],assignments:['පැවරුම්','වර්තමාන කාර්ය බලන්න, වැඩ උඩුගත කරන්න, ප්‍රතිචාර පසුපස යන්න.','ශිෂ්‍ය වැඩබිම'],culture:['කොරියානු සංස්කෘතිය','වචන පිටුපස ඇති වටිනාකම්, ඉතිහාසය සහ දෛනික ජීවිතය සොයන්න.','වචන මාලාවෙන් ඔබ්බට'],about:['언어랩 ගැන','භාෂා පර්යේෂණය සහ ගෝලීය කොරියානු අධ්‍යාපනය අතර ස්වාධීන පාලමක්.','උගන්වන පර්යේෂණය'],admin:['ආයතන පුවරුව','බහුභාෂා අන්තර්ගතය, ශිෂ්‍යයන්, පැවරුම් සහ පර්යේෂණ යාවත්කාලීන කළමනාකරණය කරන්න.','පරිපාලක අවකාශය']},
      common:{explore:'සොයන්න',learnMore:'තව දැනගන්න',viewAll:'සියල්ල බලන්න',search:'සොයන්න',all:'සියල්ල',beginner:'ආරම්භක',intermediate:'මධ්‍යම',advanced:'උසස්',download:'බාගන්න',watch:'පාඩම නරඹන්න',enroll:'පාඨමාලාව බලන්න',start:'ආරම්භ කරන්න',submit:'යොමු කරන්න',save:'සුරකින්න',published:'පළ කර ඇත',draft:'කෙටුම්පත',back:'ආපසු',next:'ඊළඟ',finish:'අවසන්',retry:'නැවත උත්සාහ කරන්න',close:'වසන්න',due:'අවසාන දිනය',minutes:'මිනි',featured:'විශේෂ පාඩම',transcript:'පිටපත',filters:'පෙරහන්',category:'වර්ගය',level:'මට්ටම',contact:'අමතන්න'},
      footer:['කොරියානු භාෂාව හා සංස්කෘතිය පර්යේෂණ කර එම දැනුම සීමා රහිත ඉගෙනීමක් බවට පත් කරමු.','සොයන්න','ශිෂ්‍යයන්','ආයතනය','පෞද්ගලිකත්වය','ප්‍රවේශතාව','© 2026 언어랩. භාෂාව, සංස්කෘතිය සහ සම්බන්ධතාව සඳහා.'], global:'භාෂා දහයක්. එකම කුතුහලයක්.', translationNote:'අතුරුමුහුණත සහ ඉගෙනුම් පෙරදසුන් භාෂා දහයකින් ඇත. ප්‍රකාශයට පෙර වෘත්තීය අන්තර්ගතය ස්වදේශික සංස්කාරකවරුන් විසින් සමාලෝචනය කළ යුතුය.'
    },
    vi: {
      sub:'Nghiên cứu & học ngôn ngữ', announce:'Tuyển sinh 2026 — Tiếng Hàn cho người nói tiếng Sinhala', announceLink:'Xem chương trình', signIn:'Đăng nhập', account:'Tài khoản', menu:'Trình đơn', language:'Ngôn ngữ',
      nav:['Trang chủ','Chương trình','Nghiên cứu','Khóa học','Video','Tài liệu','Trắc nghiệm','Bài tập','Văn hóa','Giới thiệu'],
      hero:['Nghiên cứu ngôn ngữ, vì con người.','Chúng tôi nghiên cứu cách tiếng Hàn được nói, học và sống, rồi biến bằng chứng thành phương pháp giảng dạy rõ ràng hơn cho người học khắp châu Á và thế giới.','Khám phá công việc','Tìm khóa học','Dựa trên nghiên cứu • Gắn với văn hóa • Lấy người học làm trung tâm','Ngôn ngữ & văn hóa Hàn Quốc','Ghi chép thực địa','Ý nghĩa sống trong ngữ cảnh.','Hội thảo nghiên cứu, Seoul × Colombo'],
      metrics:[['10','ngôn ngữ giao diện'],['4','lộ trình học'],['CEFR + TOPIK','mục tiêu liên kết'],['1','cộng đồng kết nối']],
      home:['Chọn con đường vào tiếng Hàn','Mục tiêu khác nhau cần lộ trình khác nhau. Mỗi lộ trình kết nối ngôn ngữ, văn hóa và bằng chứng.','Cách chúng tôi làm việc','Từ tiếng nói thực tế đến việc học tốt hơn','Chúng tôi nghiên cứu âm thanh, ngữ pháp, ý nghĩa và giao tiếp liên văn hóa để xây dựng bài học thiết thực.','Bên trong 언어랩','Học cùng nhà nghiên cứu, không chỉ học bài','Tài nguyên ngắn và tập trung kết nối lớp học với tiếng Hàn đời thực.','Tiếng Hàn, giải thích bằng ngôn ngữ của bạn','Chuyển toàn bộ trải nghiệm bất cứ lúc nào. Học tập bắt đầu từ sự thấu hiểu.','Bắt đầu từ nơi bạn đang đứng','Kiểm tra trình độ ngắn hoặc xem các lớp trực tuyến sắp tới.'],
      paths:[['Tiếng Hàn hằng ngày','Xây nền tảng tự tin cho đời sống và hội thoại.'],['TOPIK & EPS-TOPIK','Chiến lược thi với ngôn ngữ theo ngữ cảnh và hỗ trợ tiếng Sinhala.'],['Tiếng Hàn học thuật','Đọc, viết và thuyết trình cho đại học và nghiên cứu.'],['Tiếng Hàn nơi làm việc','Giao tiếp an toàn và tôn trọng trong môi trường làm việc Hàn Quốc.']],
      insights:[['Ngôn ngữ học đối chiếu','Lập bản đồ khác biệt giữa tiếng Hàn và các ngôn ngữ châu Á.'],['Ngôn ngữ trong ngữ cảnh','Công việc, di cư và văn hóa hằng ngày định hình chương trình.'],['Thiết kế học tập mở','Phụ đề, bản chép và giải thích bằng tiếng mẹ đẻ mở rộng khả năng tiếp cận.']],
      cards:[['Phòng luyện phát âm','Vì sao phụ âm cuối tiếng Hàn thay đổi trong lời nói.'],['Ngữ pháp trong ngữ cảnh','Hiểu 은/는 và 이/가 qua ý nghĩa, không qua công thức.'],['Ghi chú văn hóa','Thứ bậc và kính ngữ trong nơi làm việc Hàn Quốc.']],
      pages:{programs:['Chương trình','Lộ trình cho hội thoại, kỳ thi, học thuật và công việc, với hỗ trợ đa ngôn ngữ.','Tìm lộ trình'],research:['Nghiên cứu','Ngôn ngữ học ứng dụng cho bối cảnh thực tế nơi tiếng Hàn được học và sử dụng xuyên văn hóa.','Chương trình nghiên cứu'],courses:['Khóa học','Các khóa trực tiếp và kết hợp từ Hangul cơ bản đến giao tiếp học thuật nâng cao.','Lớp sắp mở'],videos:['Thư viện video','Bài học ngắn có phụ đề, giải thích nghiên cứu và đối thoại văn hóa.','Xem và học'],materials:['Tài liệu lớp học','Tải ghi chú, phiếu bài tập, bản chép và bộ từ vựng theo trình độ.','Kệ học tập'],quiz:['Phòng trắc nghiệm','Kiểm tra kiến thức với phản hồi tức thì và gợi ý bước tiếp theo.','Kiểm tra năm phút'],assignments:['Bài tập','Xem nhiệm vụ, tải bài và theo dõi phản hồi tại một nơi.','Không gian học viên'],culture:['Văn hóa Hàn Quốc','Khám phá giá trị, lịch sử và đời sống thường ngày phía sau lời nói.','Vượt ngoài từ vựng'],about:['Về 언어랩','Cầu nối độc lập giữa nghiên cứu ngôn ngữ và giáo dục tiếng Hàn có ý nghĩa.','Nghiên cứu để giảng dạy'],admin:['Bảng điều khiển','Quản lý nội dung đa ngôn ngữ, học viên, bài tập và nghiên cứu.','Không gian quản trị']},
      common:{explore:'Khám phá',learnMore:'Tìm hiểu thêm',viewAll:'Xem tất cả',search:'Tìm kiếm',all:'Tất cả',beginner:'Sơ cấp',intermediate:'Trung cấp',advanced:'Cao cấp',download:'Tải xuống',watch:'Xem bài học',enroll:'Xem khóa học',start:'Bắt đầu',submit:'Gửi',save:'Lưu',published:'Đã đăng',draft:'Bản nháp',back:'Quay lại',next:'Tiếp',finish:'Hoàn tất',retry:'Thử lại',close:'Đóng',due:'Hạn',minutes:'phút',featured:'Bài học nổi bật',transcript:'Bản chép',filters:'Bộ lọc',category:'Danh mục',level:'Trình độ',contact:'Liên hệ'},
      footer:['Nghiên cứu ngôn ngữ và văn hóa Hàn Quốc, biến hiểu biết thành học tập hòa nhập xuyên biên giới.','Khám phá','Học viên','Viện','Riêng tư','Khả năng tiếp cận','© 2026 언어랩. Vì ngôn ngữ, văn hóa và kết nối.'], global:'Mười ngôn ngữ. Một niềm tò mò chung.', translationNote:'Giao diện và bản xem trước học tập có bằng mười ngôn ngữ. Tài liệu chuyên môn cần được biên tập viên bản ngữ duyệt trước khi xuất bản.'
    },
    ne: {
      sub:'भाषा अनुसन्धान र सिकाइ', announce:'२०२६ नयाँ भर्ना — सिंहला भाषीका लागि कोरियन', announceLink:'कार्यक्रम हेर्नुहोस्', signIn:'साइन इन', account:'मेरो खाता', menu:'मेनु', language:'भाषा',
      nav:['गृहपृष्ठ','कार्यक्रम','अनुसन्धान','पाठ्यक्रम','भिडियो','सामग्री','क्विज','कार्यहरू','संस्कृति','हाम्रो बारेमा'],
      hero:['भाषा अनुसन्धान, मानवीय ढंगले.','कोरियन कसरी बोलिन्छ, सिकिन्छ र जीवनमा प्रयोग हुन्छ भन्ने अध्ययन गरी प्रमाणलाई एसिया र विश्वका विद्यार्थीका लागि स्पष्ट शिक्षणमा बदल्छौँ।','हाम्रो काम हेर्नुहोस्','पाठ्यक्रम खोज्नुहोस्','अनुसन्धानमा आधारित • संस्कृतिसँग जोडिएको • विद्यार्थी केन्द्रित','कोरियन भाषा र संस्कृति','मैदानी टिपोट','अर्थ सन्दर्भमा बाँच्छ।','अनुसन्धान सेमिनार, सोल × कोलम्बो'],
      metrics:[['१०','इन्टरफेस भाषा'],['४','सिकाइ मार्ग'],['CEFR + TOPIK','मिलाइएका नतिजा'],['१','जोडिएको समुदाय']],
      home:['कोरियनतर्फ आफ्नो बाटो छान्नुहोस्','फरक लक्ष्यका लागि फरक मार्ग चाहिन्छ। प्रत्येक मार्गले भाषा, संस्कृति र प्रमाण जोड्छ।','हाम्रो कार्यविधि','वास्तविक आवाजबाट राम्रो सिकाइतर्फ','ध्वनि, व्याकरण, अर्थ र अन्तरसांस्कृतिक प्रयोग अध्ययन गरेर व्यवहारिक पाठ बनाउँछौँ।','언어랩 भित्र','पाठ मात्र होइन, अनुसन्धानकर्तासँग सिक्नुहोस्','छोटा स्रोतले कक्षालाई वास्तविक कोरियनसँग जोड्छन्।','तपाईंको भाषामा बुझाइएको कोरियन','कुनै पनि बेला अनुभवको भाषा बदल्नुहोस्। बुझाइबाट सिकाइ सुरु हुन्छ।','जहाँ हुनुहुन्छ त्यहीँबाट सुरु गर्नुहोस्','छोटो स्तर जाँच गर्नुहोस् वा आगामी प्रत्यक्ष कक्षा हेर्नुहोस्।'],
      paths:[['दैनिक कोरियन','दैनिक जीवन र संवादका लागि आत्मविश्वासी आधार बनाउनुहोस्।'],['TOPIK र EPS-TOPIK','सन्दर्भयुक्त भाषा र सिंहला सहयोगसहित परीक्षा रणनीति।'],['शैक्षिक कोरियन','विश्वविद्यालय र अनुसन्धानका लागि पढाइ, लेखाइ र प्रस्तुति।'],['कार्यस्थल कोरियन','कोरियन कार्यस्थलमा सुरक्षित र सम्मानजनक सञ्चार।']],
      insights:[['तुलनात्मक भाषाविज्ञान','कोरियन र अन्य एसियाली भाषाबीचको भिन्नता नक्साङ्कन गर्छौँ।'],['सन्दर्भमा भाषा','काम, आप्रवासन र दैनिक संस्कृतिले पाठ्यक्रम बनाउँछन्।'],['खुला सिकाइ डिजाइन','उपशीर्षक, प्रतिलेख र मातृभाषा व्याख्याले पहुँच बढाउँछन्।']],
      cards:[['उच्चारण क्लिनिक','वास्तविक बोलीमा कोरियन अन्तिम व्यञ्जन किन बदलिन्छ?'],['सन्दर्भमा व्याकरण','सूत्र होइन, अर्थबाट 은/는 र 이/가.'],['संस्कृति संक्षेप','कोरियन कार्यस्थलको पदक्रम र आदरसूचक भाषा।']],
      pages:{programs:['कार्यक्रम','संवाद, परीक्षा, अध्ययन र कामका लागि बहुभाषी सहयोगसहितका मार्ग।','आफ्नो मार्ग खोज्नुहोस्'],research:['अनुसन्धान','कोरियन भाषा संस्कृतिबीच सिकिने र प्रयोग हुने वास्तविक अवस्थाको प्रयुक्त भाषाविज्ञान।','अनुसन्धान कार्यसूची'],courses:['पाठ्यक्रम','आधारभूत हाङ्गुलदेखि उन्नत शैक्षिक सञ्चारसम्म प्रत्यक्ष र मिश्रित पाठ्यक्रम।','आगामी समूह'],videos:['भिडियो पुस्तकालय','उपशीर्षकयुक्त छोटा पाठ, अनुसन्धान व्याख्या र संस्कृति संवाद।','हेर्नुहोस् र सिक्नुहोस्'],materials:['कक्षा सामग्री','स्तरअनुसार नोट, कार्यपत्र, प्रतिलेख र शब्दावली डाउनलोड गर्नुहोस्।','सिकाइ शेल्फ'],quiz:['क्विज स्टुडियो','तत्काल प्रतिक्रियासहित ज्ञान जाँच्नुहोस् र अर्को कदम पाउनुहोस्।','पाँच मिनेट जाँच'],assignments:['कार्यहरू','हालका काम हेर्नुहोस्, अपलोड गर्नुहोस् र प्रतिक्रिया ट्र्याक गर्नुहोस्।','विद्यार्थी कार्यक्षेत्र'],culture:['कोरियन संस्कृति','शब्दपछाडिका मूल्य, इतिहास र दैनिक अभ्यास अन्वेषण गर्नुहोस्।','शब्दावलीभन्दा पर'],about:['언어랩 बारे','भाषा अनुसन्धान र अर्थपूर्ण विश्वव्यापी कोरियन शिक्षाबीचको स्वतन्त्र पुल।','सिकाउने अनुसन्धान'],admin:['संस्थान ड्यासबोर्ड','बहुभाषी सामग्री, विद्यार्थी, कार्य र अनुसन्धान अपडेट व्यवस्थापन गर्नुहोस्।','व्यवस्थापक क्षेत्र']},
      common:{explore:'अन्वेषण',learnMore:'थप जान्नुहोस्',viewAll:'सबै हेर्नुहोस्',search:'खोज्नुहोस्',all:'सबै',beginner:'प्रारम्भिक',intermediate:'मध्यम',advanced:'उन्नत',download:'डाउनलोड',watch:'पाठ हेर्नुहोस्',enroll:'पाठ्यक्रम हेर्नुहोस्',start:'सुरु गर्नुहोस्',submit:'पेस गर्नुहोस्',save:'सुरक्षित गर्नुहोस्',published:'प्रकाशित',draft:'मस्यौदा',back:'पछाडि',next:'अर्को',finish:'समाप्त',retry:'फेरि प्रयास',close:'बन्द',due:'म्याद',minutes:'मिनेट',featured:'विशेष पाठ',transcript:'प्रतिलेख',filters:'फिल्टर',category:'वर्ग',level:'स्तर',contact:'सम्पर्क'},
      footer:['कोरियन भाषा र संस्कृतिको अनुसन्धान गरी अन्तरदेशीय समावेशी सिकाइमा रूपान्तरण गर्छौँ।','अन्वेषण','विद्यार्थी','संस्थान','गोपनीयता','पहुँचयोग्यता','© २०२६ 언어랩. भाषा, संस्कृति र सम्बन्धका लागि।'], global:'दश भाषा। एउटै जिज्ञासा।', translationNote:'इन्टरफेस र सिकाइ पूर्वावलोकन दश भाषामा उपलब्ध छन्। प्रकाशनअघि व्यावसायिक सामग्री मातृभाषी सम्पादकबाट समीक्षा गरिनुपर्छ।'
    },
    hi: {
      sub:'भाषा शोध और शिक्षण', announce:'2026 प्रवेश — सिंहला भाषियों के लिए कोरियाई', announceLink:'कार्यक्रम देखें', signIn:'साइन इन', account:'मेरा खाता', menu:'मेनू', language:'भाषा',
      nav:['मुखपृष्ठ','कार्यक्रम','शोध','पाठ्यक्रम','वीडियो','सामग्री','क्विज़','असाइनमेंट','संस्कृति','परिचय'],
      hero:['भाषा शोध, मानवीय दृष्टि से।','हम अध्ययन करते हैं कि कोरियाई कैसे बोली, सीखी और जी जाती है—फिर प्रमाण को एशिया और दुनिया के विद्यार्थियों के लिए बेहतर शिक्षण में बदलते हैं।','हमारा काम देखें','पाठ्यक्रम खोजें','शोध-आधारित • संस्कृति से जुड़ा • विद्यार्थी-केंद्रित','कोरियाई भाषा और संस्कृति','क्षेत्रीय टिप्पणियाँ','अर्थ संदर्भ में रहता है।','शोध संगोष्ठी, सियोल × कोलंबो'],
      metrics:[['10','इंटरफ़ेस भाषाएँ'],['4','सीखने के मार्ग'],['CEFR + TOPIK','संरेखित परिणाम'],['1','जुड़ा समुदाय']],
      home:['कोरियाई सीखने का अपना रास्ता चुनें','अलग लक्ष्यों के लिए अलग मार्ग चाहिए। हर मार्ग भाषा, संस्कृति और प्रमाण को जोड़ता है।','हम कैसे काम करते हैं','वास्तविक आवाज़ों से बेहतर सीखने तक','हम ध्वनि, व्याकरण, अर्थ और अंतर-सांस्कृतिक प्रयोग का अध्ययन कर व्यावहारिक पाठ बनाते हैं।','언어랩 के भीतर','केवल पाठ नहीं—शोधकर्ताओं के साथ सीखें','छोटे और केंद्रित संसाधन कक्षा को वास्तविक कोरियाई से जोड़ते हैं।','कोरियाई, आपकी भाषा में समझाई गई','पूरा अनुभव कभी भी बदलें। सीखना समझे जाने से शुरू होता है।','जहाँ हैं वहीं से शुरू करें','छोटी स्तर जाँच करें या आने वाली लाइव कक्षाएँ देखें।'],
      paths:[['दैनिक कोरियाई','दैनिक जीवन और बातचीत के लिए आत्मविश्वासी आधार।'],['TOPIK और EPS-TOPIK','संदर्भित भाषा और सिंहला सहायता के साथ परीक्षा रणनीति।'],['अकादमिक कोरियाई','विश्वविद्यालय और शोध के लिए पढ़ना, लिखना और प्रस्तुति।'],['कार्यस्थल कोरियाई','कोरियाई कार्यस्थलों में सुरक्षित और सम्मानजनक संवाद।']],
      insights:[['तुलनात्मक भाषाविज्ञान','कोरियाई और एशियाई भाषाओं के अंतर का मानचित्रण।'],['संदर्भ में भाषा','काम, प्रवासन और दैनिक संस्कृति पाठ्यक्रम को आकार देते हैं।'],['खुला शिक्षण डिज़ाइन','कैप्शन, प्रतिलेख और मातृभाषा व्याख्या पहुँच बढ़ाते हैं।']],
      cards:[['उच्चारण क्लिनिक','वास्तविक बोलचाल में अंतिम व्यंजन क्यों बदलते हैं?'],['संदर्भ में व्याकरण','सूत्र नहीं, अर्थ से 은/는 और 이/가।'],['संस्कृति संक्षेप','कोरियाई कार्यस्थलों में पदानुक्रम और सम्मान।']],
      pages:{programs:['कार्यक्रम','संवाद, परीक्षा, अध्ययन और काम के लिए बहुभाषी सहायता वाले मार्ग।','अपना मार्ग खोजें'],research:['शोध','कोरियाई के वास्तविक अंतर-सांस्कृतिक शिक्षण और प्रयोग पर अनुप्रयुक्त भाषाविज्ञान।','शोध एजेंडा'],courses:['पाठ्यक्रम','मूल हंगुल से उन्नत अकादमिक संवाद तक लाइव और मिश्रित पाठ्यक्रम।','आगामी समूह'],videos:['वीडियो लाइब्रेरी','कैप्शनयुक्त छोटे पाठ, शोध व्याख्याएँ और संस्कृति संवाद।','देखें और सीखें'],materials:['कक्षा सामग्री','स्तर के अनुसार नोट्स, कार्यपत्र, प्रतिलेख और शब्दावली डाउनलोड करें।','आपकी शिक्षण शेल्फ'],quiz:['क्विज़ स्टूडियो','तुरंत प्रतिक्रिया के साथ ज्ञान जाँचें और अगला कदम पाएँ।','पाँच मिनट की जाँच'],assignments:['असाइनमेंट','कार्य देखें, अपना काम अपलोड करें और प्रतिक्रिया ट्रैक करें।','विद्यार्थी कार्यक्षेत्र'],culture:['कोरियाई संस्कृति','शब्दों के पीछे के मूल्य, इतिहास और दैनिक जीवन को जानें।','शब्दावली से आगे'],about:['언어랩 के बारे में','भाषा शोध और सार्थक वैश्विक कोरियाई शिक्षा के बीच स्वतंत्र पुल।','शोध जो सिखाता है'],admin:['संस्थान डैशबोर्ड','बहुभाषी सामग्री, विद्यार्थी, असाइनमेंट और शोध अपडेट प्रबंधित करें।','व्यवस्थापक क्षेत्र']},
      common:{explore:'खोजें',learnMore:'और जानें',viewAll:'सभी देखें',search:'खोजें',all:'सभी',beginner:'प्रारंभिक',intermediate:'मध्यवर्ती',advanced:'उन्नत',download:'डाउनलोड',watch:'पाठ देखें',enroll:'पाठ्यक्रम देखें',start:'शुरू करें',submit:'जमा करें',save:'सहेजें',published:'प्रकाशित',draft:'मसौदा',back:'पीछे',next:'अगला',finish:'समाप्त',retry:'फिर प्रयास',close:'बंद',due:'अंतिम तिथि',minutes:'मिनट',featured:'विशेष पाठ',transcript:'प्रतिलेख',filters:'फ़िल्टर',category:'श्रेणी',level:'स्तर',contact:'संपर्क'},
      footer:['कोरियाई भाषा और संस्कृति का शोध, और अंतर्दृष्टि को सीमाओं के पार समावेशी शिक्षा में बदलना।','खोजें','विद्यार्थी','संस्थान','गोपनीयता','सुलभता','© 2026 언어랩. भाषा, संस्कृति और संबंध के लिए।'], global:'दस भाषाएँ। एक साझा जिज्ञासा।', translationNote:'इंटरफ़ेस और शिक्षण पूर्वावलोकन दस भाषाओं में उपलब्ध हैं। प्रकाशन से पहले पेशेवर सामग्री की मूल-भाषी संपादक समीक्षा आवश्यक है।'
    },
    zh: {
      sub:'语言研究与学习', announce:'2026年招生——为僧伽罗语者开设的韩语课', announceLink:'查看项目', signIn:'登录', account:'我的账户', menu:'菜单', language:'语言',
      nav:['首页','项目','研究','课程','视频','资料','测验','作业','文化','关于'],
      hero:['让语言研究回到人本。','我们研究韩语如何被说出、习得并融入生活，再把证据转化为面向亚洲及全球学习者的清晰教学。','探索我们的工作','寻找课程','研究驱动 • 文化连接 • 学习者优先','韩国语言与文化','田野笔记','意义存在于语境之中。','研究研讨会，首尔 × 科伦坡'],
      metrics:[['10','种界面语言'],['4','条学习路径'],['CEFR + TOPIK','对齐成果'],['1','个连接的社群']],
      home:['选择你的韩语之路','不同目标需要不同路径。每条路径都连接语言、文化与证据。','我们的工作方式','从真实声音到更好的学习','我们研究语音、语法、意义和跨文化使用，并据此设计实用教学。','走进 언어랩','不只上课，更与研究者一起学习','简短而专注的资源把课堂与真实韩语连接起来。','用你的语言理解韩语','你可以随时切换整个体验。学习从被理解开始。','从你所在的位置开始','进行简短水平测试，或浏览即将开始的直播课程。'],
      paths:[['日常韩语','为生活和会话建立自信的基础。'],['TOPIK 与 EPS-TOPIK','以语境化语言与僧伽罗语支持准备考试。'],['学术韩语','面向大学与研究的阅读、写作和表达。'],['职场韩语','在韩国职场中安全、尊重地沟通。']],
      insights:[['对比语言学','分析韩语与其他亚洲语言之间的差异。'],['语境中的语言','工作、迁移与日常文化共同塑造课程。'],['开放学习设计','字幕、文本稿与母语解释让学习更易获得。']],
      cards:[['发音诊所','为什么韩语收音在真实语流中会变化。'],['语境语法','从意义而非公式理解 은/는 与 이/가。'],['文化简报','理解韩国职场的层级与敬语。']],
      pages:{programs:['项目','为会话、考试、学术和工作打造的多语支持学习路径。','寻找你的路径'],research:['研究','关注韩语跨文化学习与使用真实条件的应用语言学。','研究议程'],courses:['课程','从韩文字母入门到高级学术沟通的直播与混合课程。','即将开班'],videos:['视频库','随时观看有字幕的微课、研究解读和文化对话。','边看边学'],materials:['课堂资料','按级别下载讲义、练习、文本稿和词汇包。','学习书架'],quiz:['测验工作室','通过即时反馈检查知识，并获得下一步建议。','五分钟检测'],assignments:['作业','查看任务、上传作品并集中跟踪反馈。','学生空间'],culture:['韩国文化','探索语言背后的价值、历史与日常实践。','超越词汇'],about:['关于 언어랩','连接语言研究与全球韩语教育的独立桥梁。','能够教学的研究'],admin:['机构控制台','管理多语内容、学习者、作业和研究动态。','管理空间']},
      common:{explore:'探索',learnMore:'了解更多',viewAll:'查看全部',search:'搜索',all:'全部',beginner:'初级',intermediate:'中级',advanced:'高级',download:'下载',watch:'观看课程',enroll:'查看课程',start:'开始测验',submit:'提交',save:'保存',published:'已发布',draft:'草稿',back:'返回',next:'下一步',finish:'完成',retry:'再试一次',close:'关闭',due:'截止',minutes:'分钟',featured:'精选课程',transcript:'文本稿',filters:'筛选',category:'类别',level:'级别',contact:'联系我们'},
      footer:['研究韩国语言与文化，把洞见转化为跨越边界的包容学习。','探索','学生','机构','隐私','无障碍','© 2026 언어랩。为语言、文化与连接而建。'], global:'十种语言，同一种好奇。', translationNote:'界面与学习预览提供十种语言。专业材料在发布前应由母语编辑审核。'
    },
    ja: {
      sub:'言語研究と学び', announce:'2026年新規募集 — シンハラ語話者のための韓国語', announceLink:'プログラムを見る', signIn:'ログイン', account:'マイアカウント', menu:'メニュー', language:'言語',
      nav:['ホーム','プログラム','研究','コース','動画','教材','クイズ','課題','文化','紹介'],
      hero:['言語研究を、人のために。','韓国語がどのように話され、学ばれ、生活の中で使われるかを研究し、その根拠をアジアと世界の学習者のための明確な教育へつなげます。','活動を見る','コースを探す','研究に基づく • 文化とつながる • 学習者中心','韓国語と韓国文化','フィールドノート','意味は文脈の中にある。','研究セミナー、ソウル × コロンボ'],
      metrics:[['10','対応言語'],['4','学習パス'],['CEFR + TOPIK','連携した成果'],['1','つながるコミュニティ']],
      home:['自分に合う韓国語への道','目標が違えば道も違います。すべてのパスが言語・文化・根拠を結びます。','私たちの方法','実際の声から、より良い学びへ','音声、文法、意味、異文化使用を研究し、実践的な授業を設計します。','언어랩 の中へ','授業だけでなく、研究者と学ぶ','短く集中した教材が、教室と実際の韓国語をつなぎます。','あなたの言語でわかる韓国語','いつでも体験全体の言語を切り替えられます。理解されることから学びは始まります。','今いる場所から始めよう','短いレベルチェック、または開講予定のライブコースをご覧ください。'],
      paths:[['日常韓国語','生活と会話のための自信ある基礎を作ります。'],['TOPIK・EPS-TOPIK','文脈的な言語とシンハラ語支援で試験に備えます。'],['学術韓国語','大学と研究のための読解・作文・発表。'],['職場の韓国語','韓国の職場で安全かつ丁寧に伝えます。']],
      insights:[['対照言語学','韓国語とアジア諸語の違いを分析します。'],['文脈の中の言語','仕事、移住、日常文化がカリキュラムを形作ります。'],['開かれた学習設計','字幕、文字起こし、母語説明でアクセスを広げます。']],
      cards:[['発音クリニック','実際の発話で韓国語の終声が変化する理由。'],['文脈の中の文法','公式ではなく意味から学ぶ 은/는 と 이/가。'],['文化ブリーフ','韓国の職場における上下関係と敬語。']],
      pages:{programs:['プログラム','会話・試験・学術・仕事の目的に合わせた多言語支援パス。','学習パスを探す'],research:['研究','韓国語が異文化間で学ばれ使われる現実を扱う応用言語学。','研究課題'],courses:['コース','ハングル入門から高度な学術コミュニケーションまでのライブ・混合コース。','開講予定'],videos:['動画ライブラリー','字幕付きの短い授業、研究解説、文化対話をいつでも。','見て学ぶ'],materials:['クラス教材','レベル別のノート、ワークシート、台本、語彙集をダウンロード。','学びの棚'],quiz:['クイズスタジオ','即時フィードバックで理解を確認し、次の一歩を見つけます。','5分チェック'],assignments:['課題','現在の課題を確認し、提出とフィードバックを一か所で管理。','学生ワークスペース'],culture:['韓国文化','言葉の背景にある価値観、歴史、日常の実践を探ります。','語彙の先へ'],about:['언어랩 について','言語研究と世界の学習者のための韓国語教育をつなぐ独立した橋。','教える研究'],admin:['機関ダッシュボード','多言語コンテンツ、学習者、課題、研究情報を管理。','管理スペース']},
      common:{explore:'見る',learnMore:'詳しく見る',viewAll:'すべて見る',search:'検索',all:'すべて',beginner:'初級',intermediate:'中級',advanced:'上級',download:'ダウンロード',watch:'授業を見る',enroll:'コースを見る',start:'クイズ開始',submit:'提出',save:'保存',published:'公開済み',draft:'下書き',back:'戻る',next:'次へ',finish:'完了',retry:'もう一度',close:'閉じる',due:'締切',minutes:'分',featured:'注目の授業',transcript:'文字起こし',filters:'フィルター',category:'カテゴリ',level:'レベル',contact:'お問い合わせ'},
      footer:['韓国語と文化を研究し、その知見を国境を越えた包摂的な学びへ。','探す','学生向け','研究所','プライバシー','アクセシビリティ','© 2026 언어랩。言語、文化、つながりのために。'], global:'10の言語、ひとつの好奇心。', translationNote:'インターフェースと学習プレビューは10言語で利用できます。専門教材は公開前にネイティブ編集者の確認が必要です。'
    },
    es: {
      sub:'Investigación y aprendizaje', announce:'Admisión 2026 — Coreano para hablantes de cingalés', announceLink:'Ver programas', signIn:'Acceder', account:'Mi cuenta', menu:'Menú', language:'Idioma',
      nav:['Inicio','Programas','Investigación','Cursos','Vídeos','Materiales','Prueba','Tareas','Cultura','Nosotros'],
      hero:['Investigación lingüística, hecha humana.','Estudiamos cómo se habla, aprende y vive el coreano, y convertimos la evidencia en una enseñanza más clara para estudiantes de Asia y del mundo.','Explorar nuestro trabajo','Buscar un curso','Con investigación • Con cultura • Para el estudiante','Lengua y cultura coreanas','Notas de campo','El significado vive en el contexto.','Seminario de investigación, Seúl × Colombo'],
      metrics:[['10','idiomas de interfaz'],['4','rutas de aprendizaje'],['CEFR + TOPIK','resultados alineados'],['1','comunidad conectada']],
      home:['Elige tu camino hacia el coreano','Metas distintas requieren rutas distintas. Cada camino conecta lengua, cultura y evidencia.','Cómo trabajamos','De voces reales a un mejor aprendizaje','Estudiamos sonido, gramática, significado y uso intercultural para crear clases prácticas.','Dentro de 언어랩','Aprende con investigadores, no solo con lecciones','Recursos breves conectan la clase de hoy con el coreano cotidiano.','Coreano explicado en tu idioma','Cambia toda la experiencia cuando quieras. Aprender empieza por ser comprendido.','Empieza desde donde estás','Haz una breve prueba de nivel o explora los próximos cursos en vivo.'],
      paths:[['Coreano cotidiano','Construye una base segura para la vida diaria y la conversación.'],['TOPIK y EPS-TOPIK','Estrategia de examen con lengua contextual y apoyo en cingalés.'],['Coreano académico','Lee, escribe y presenta para la universidad y la investigación.'],['Coreano laboral','Comunícate con seguridad y respeto en lugares de trabajo coreanos.']],
      insights:[['Lingüística contrastiva','Trazamos diferencias entre el coreano y otras lenguas asiáticas.'],['Lengua en contexto','Trabajo, migración y cultura diaria dan forma al currículo.'],['Diseño abierto','Subtítulos, transcripciones y explicaciones en la lengua materna amplían el acceso.']],
      cards:[['Clínica de pronunciación','Por qué cambian las consonantes finales en el habla real.'],['Gramática en contexto','은/는 e 이/가 a través del significado, no de fórmulas.'],['Nota cultural','Jerarquía y cortesía en los lugares de trabajo coreanos.']],
      pages:{programs:['Programas','Rutas para conversación, exámenes, estudio y trabajo con apoyo multilingüe.','Encuentra tu ruta'],research:['Investigación','Lingüística aplicada para las condiciones reales en que el coreano se aprende y usa entre culturas.','Agenda de investigación'],courses:['Cursos','Cursos en vivo y mixtos desde Hangul inicial hasta comunicación académica avanzada.','Próximos grupos'],videos:['Biblioteca de vídeos','Microlecciones subtituladas, explicaciones de investigación y conversaciones culturales.','Mira y aprende'],materials:['Material de clase','Descarga apuntes, fichas, transcripciones y vocabulario por nivel.','Tu estantería'],quiz:['Estudio de pruebas','Comprueba lo que sabes con respuesta inmediata y un próximo paso práctico.','Prueba de cinco minutos'],assignments:['Tareas','Consulta, entrega tu trabajo y sigue los comentarios en un solo lugar.','Espacio del estudiante'],culture:['Cultura coreana','Explora valores, historias y prácticas cotidianas detrás de las palabras.','Más allá del vocabulario'],about:['Sobre 언어랩','Un puente independiente entre investigación lingüística y educación coreana significativa.','Investigación que enseña'],admin:['Panel del instituto','Gestiona contenido multilingüe, estudiantes, tareas y noticias de investigación.','Espacio administrativo']},
      common:{explore:'Explorar',learnMore:'Saber más',viewAll:'Ver todo',search:'Buscar',all:'Todo',beginner:'Inicial',intermediate:'Intermedio',advanced:'Avanzado',download:'Descargar',watch:'Ver lección',enroll:'Ver curso',start:'Comenzar',submit:'Enviar',save:'Guardar',published:'Publicado',draft:'Borrador',back:'Atrás',next:'Siguiente',finish:'Finalizar',retry:'Reintentar',close:'Cerrar',due:'Fecha límite',minutes:'min',featured:'Lección destacada',transcript:'Transcripción',filters:'Filtros',category:'Categoría',level:'Nivel',contact:'Contacto'},
      footer:['Investigamos la lengua y cultura coreanas y transformamos el conocimiento en aprendizaje inclusivo.','Explorar','Estudiantes','Instituto','Privacidad','Accesibilidad','© 2026 언어랩. Para lengua, cultura y conexión.'], global:'Diez idiomas. Una curiosidad compartida.', translationNote:'La interfaz y las vistas previas están disponibles en diez idiomas. Los materiales profesionales deben ser revisados por editores nativos antes de publicarse.'
    },
    de: {
      sub:'Sprachforschung & Lernen', announce:'Neue Kurse 2026 — Koreanisch für Singhalesischsprachige', announceLink:'Programme ansehen', signIn:'Anmelden', account:'Mein Konto', menu:'Menü', language:'Sprache',
      nav:['Start','Programme','Forschung','Kurse','Videos','Materialien','Quiz','Aufgaben','Kultur','Über uns'],
      hero:['Sprachforschung, menschlich gedacht.','Wir erforschen, wie Koreanisch gesprochen, gelernt und gelebt wird – und machen daraus klareren Unterricht für Lernende in Asien und weltweit.','Unsere Arbeit entdecken','Kurs finden','Forschungsbasiert • Kulturverbunden • Lernendenzentriert','Koreanische Sprache & Kultur','Feldnotizen','Bedeutung lebt im Kontext.','Forschungsseminar, Seoul × Colombo'],
      metrics:[['10','Oberflächensprachen'],['4','Lernwege'],['CEFR + TOPIK','abgestimmte Ziele'],['1','verbundene Gemeinschaft']],
      home:['Wähle deinen Weg ins Koreanische','Unterschiedliche Ziele brauchen unterschiedliche Wege. Jeder verbindet Sprache, Kultur und Evidenz.','Wie wir arbeiten','Von echten Stimmen zu besserem Lernen','Wir untersuchen Klang, Grammatik, Bedeutung und interkulturellen Gebrauch und entwickeln praxisnahen Unterricht.','Im 언어랩','Mit Forschenden lernen, nicht nur Lektionen','Kurze Ressourcen verbinden den Unterricht mit gelebtem Koreanisch.','Koreanisch in deiner Sprache erklärt','Wechsle jederzeit die gesamte Oberfläche. Lernen beginnt mit Verstandenwerden.','Starte, wo du bist','Mach einen kurzen Einstufungstest oder entdecke kommende Live-Kurse.'],
      paths:[['Alltagskoreanisch','Sichere Grundlagen für Alltag und Gespräch aufbauen.'],['TOPIK & EPS-TOPIK','Prüfungsstrategie mit Kontext und Unterstützung auf Singhalesisch.'],['Akademisches Koreanisch','Lesen, schreiben und präsentieren für Hochschule und Forschung.'],['Koreanisch im Beruf','Sicher und respektvoll am koreanischen Arbeitsplatz kommunizieren.']],
      insights:[['Kontrastive Linguistik','Wir kartieren Unterschiede zwischen Koreanisch und asiatischen Sprachen.'],['Sprache im Kontext','Arbeit, Migration und Alltagskultur prägen jedes Curriculum.'],['Offenes Lerndesign','Untertitel, Transkripte und muttersprachliche Erklärungen erweitern den Zugang.']],
      cards:[['Ausspracheklinik','Warum sich koreanische Endkonsonanten im Sprechen verändern.'],['Grammatik im Kontext','은/는 und 이/가 über Bedeutung statt Formeln.'],['Kultur kompakt','Hierarchie und Höflichkeit an koreanischen Arbeitsplätzen.']],
      pages:{programs:['Programme','Lernwege für Gespräch, Prüfungen, Studium und Beruf mit mehrsprachiger Unterstützung.','Lernweg finden'],research:['Forschung','Angewandte Linguistik für reale Bedingungen des interkulturellen Koreanischlernens.','Forschungsagenda'],courses:['Kurse','Live- und Blended-Kurse von Hangul-Grundlagen bis zur akademischen Kommunikation.','Nächste Kurse'],videos:['Videothek','Untertitelte Mikrolektionen, Forschungsimpulse und Kulturgespräche.','Ansehen und lernen'],materials:['Kursmaterialien','Notizen, Arbeitsblätter, Transkripte und Wortschatzpakete nach Niveau.','Dein Lernregal'],quiz:['Quizstudio','Wissen mit sofortigem Feedback prüfen und den nächsten Schritt finden.','Fünf-Minuten-Check'],assignments:['Aufgaben','Aufgaben sehen, Arbeiten hochladen und Feedback verfolgen.','Lernbereich'],culture:['Koreanische Kultur','Werte, Geschichten und Alltagspraktiken hinter den Worten entdecken.','Mehr als Wortschatz'],about:['Über 언어랩','Eine unabhängige Brücke zwischen Sprachforschung und sinnvoller Koreanischbildung.','Forschung, die lehrt'],admin:['Instituts-Dashboard','Mehrsprachige Inhalte, Lernende, Aufgaben und Forschung verwalten.','Adminbereich']},
      common:{explore:'Entdecken',learnMore:'Mehr erfahren',viewAll:'Alle ansehen',search:'Suchen',all:'Alle',beginner:'Anfänger',intermediate:'Mittelstufe',advanced:'Fortgeschritten',download:'Herunterladen',watch:'Lektion ansehen',enroll:'Kurs ansehen',start:'Quiz starten',submit:'Absenden',save:'Speichern',published:'Veröffentlicht',draft:'Entwurf',back:'Zurück',next:'Weiter',finish:'Beenden',retry:'Noch einmal',close:'Schließen',due:'Fällig',minutes:'Min.',featured:'Empfohlene Lektion',transcript:'Transkript',filters:'Filter',category:'Kategorie',level:'Niveau',contact:'Kontakt'},
      footer:['Wir erforschen koreanische Sprache und Kultur und machen Erkenntnisse grenzüberschreitend zugänglich.','Entdecken','Lernende','Institut','Datenschutz','Barrierefreiheit','© 2026 언어랩. Für Sprache, Kultur und Verbindung.'], global:'Zehn Sprachen. Eine gemeinsame Neugier.', translationNote:'Oberfläche und Lernvorschauen sind in zehn Sprachen verfügbar. Fachmaterialien sollten vor Veröffentlichung muttersprachlich redigiert werden.'
    }
  };

  // Reuse the full Spanish pack as a semantic fallback and localize Portuguese-free content for every supported locale.
  // All ten requested locale packs are explicit; this fallback only guards accidental missing keys.
  const locale = () => P[state.lang] || P.en;
  const routes = ['home','programs','research','courses','videos','materials','quiz','assignments','culture','about'];
  const href = (route) => `#/${route === 'home' ? '' : route}`;
  const currentRoute = () => {
    const clean = location.hash.replace(/^#\/?/, '').split('?')[0] || 'home';
    return [...routes, 'admin'].includes(clean) ? clean : 'home';
  };

  const storedLang = localStorage.getItem('eoneolab-lang');
  const browserLang = (navigator.language || 'en').slice(0,2);
  const state = {
    lang: LANGS.some(x => x.code === storedLang) ? storedLang : (LANGS.some(x => x.code === browserLang) ? browserLang : 'en'),
    menuOpen: false, langOpen: false, modal: null, loginRole: 'student', loggedIn: localStorage.getItem('eoneolab-session') || '',
    quiz: { started: false, index: 0, answers: [], complete: false },
    adminTab: 'overview', materialFilter: 'all', videoFilter: 'all', courseFilter: 'all'
  };

  const l = (map) => map[state.lang] || map.en;
  const safe = (str='') => String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  const CONTENT = {
    programTitles: {
      en:['Korean Foundations','TOPIK / EPS-TOPIK','Academic Korean','Korean for Work'], ko:['한국어 기초','TOPIK·EPS-TOPIK','학문 목적 한국어','직장 한국어'], si:['කොරියානු මූලික පාඨමාලාව','TOPIK / EPS-TOPIK','අධ්‍යයන කොරියානු','රැකියා කොරියානු'], vi:['Nền tảng tiếng Hàn','TOPIK / EPS-TOPIK','Tiếng Hàn học thuật','Tiếng Hàn công việc'], ne:['कोरियन आधार','TOPIK / EPS-TOPIK','शैक्षिक कोरियन','कामका लागि कोरियन'], hi:['कोरियाई आधार','TOPIK / EPS-TOPIK','अकादमिक कोरियाई','काम के लिए कोरियाई'], zh:['韩语基础','TOPIK / EPS-TOPIK','学术韩语','职场韩语'], ja:['韓国語基礎','TOPIK・EPS-TOPIK','学術韓国語','仕事の韓国語'], es:['Fundamentos de coreano','TOPIK / EPS-TOPIK','Coreano académico','Coreano para el trabajo'], de:['Koreanische Grundlagen','TOPIK / EPS-TOPIK','Akademisches Koreanisch','Koreanisch im Beruf']
    },
    programDesc: {
      en:['Hangul, sound, sentence patterns and everyday interaction for complete beginners.','Targeted reading, listening and strategy with multilingual explanation.','Evidence-based reading, writing, discussion and presentation for university.','Safety, teamwork, hierarchy and real communication for Korean workplaces.'],
      ko:['한글, 발음, 문장 구조, 일상 상호작용을 처음부터 배웁니다.','다국어 설명과 함께 읽기·듣기·시험 전략을 집중 훈련합니다.','대학을 위한 읽기·쓰기·토론·발표를 근거 기반으로 배웁니다.','안전, 협업, 위계, 실제 직장 소통을 연습합니다.'],
      si:['හංගුල්, ශබ්ද, වාක්‍ය රටා සහ දෛනික සංවාද මුල සිට ඉගෙන ගන්න.','බහුභාෂා පැහැදිලි කිරීම් සමඟ කියවීම, ඇසීම සහ විභාග උපාය.','විශ්වවිද්‍යාලයට කියවීම, ලිවීම, සාකච්ඡාව සහ ඉදිරිපත් කිරීම.','කොරියානු වැඩපලේ ආරක්ෂාව, කණ්ඩායම් වැඩ සහ සැබෑ සන්නිවේදනය.'],
      vi:['Học Hangul, âm thanh, mẫu câu và giao tiếp hằng ngày từ đầu.','Luyện đọc, nghe và chiến lược thi với giải thích đa ngôn ngữ.','Đọc, viết, thảo luận và thuyết trình dựa trên nghiên cứu.','An toàn, làm việc nhóm, thứ bậc và giao tiếp thực tế tại nơi làm việc.'],
      ne:['हाङ्गुल, ध्वनि, वाक्य ढाँचा र दैनिक संवाद सुरुदेखि।','बहुभाषी व्याख्यासहित पढाइ, सुनाइ र परीक्षा रणनीति।','विश्वविद्यालयका लागि पढाइ, लेखाइ, छलफल र प्रस्तुति।','सुरक्षा, टोली, पदक्रम र वास्तविक कार्यस्थल सञ्चार।'],
      hi:['हंगुल, ध्वनि, वाक्य संरचना और दैनिक संवाद बिल्कुल शुरुआत से।','बहुभाषी व्याख्या के साथ पढ़ना, सुनना और परीक्षा रणनीति।','विश्वविद्यालय के लिए शोध-आधारित पढ़ना, लिखना और प्रस्तुति।','कोरियाई कार्यस्थल में सुरक्षा, टीम और वास्तविक संवाद।'],
      zh:['从零学习韩文字母、语音、句型和日常互动。','通过多语解释集中练习阅读、听力和应试策略。','面向大学的循证阅读、写作、讨论和演示。','学习韩国职场中的安全、协作、层级与真实沟通。'],
      ja:['ハングル、音、文型、日常のやり取りをゼロから学びます。','多言語説明とともに読解・聴解・試験戦略を集中練習。','大学のための読解・作文・議論・発表を研究に基づいて学習。','韓国の職場における安全、協働、上下関係、実践的な会話。'],
      es:['Hangul, sonido, patrones y conversación diaria desde cero.','Lectura, escucha y estrategia de examen con explicación multilingüe.','Lectura, escritura, debate y presentación para la universidad.','Seguridad, equipo, jerarquía y comunicación real en el trabajo.'],
      de:['Hangul, Laute, Satzmuster und Alltagsinteraktion von Grund auf.','Lesen, Hören und Prüfungsstrategien mit mehrsprachiger Erklärung.','Evidenzbasiertes Lesen, Schreiben, Diskutieren und Präsentieren.','Sicherheit, Teamarbeit, Hierarchie und echte Kommunikation im Beruf.']
    },
    researchTitles: {
      en:['Korean–Sinhala contrast','Speech & pronunciation','Migration and workplace language','Multilingual learning design'], ko:['한국어–싱할라어 대조','음성·발음 연구','이주와 직장 언어','다언어 학습 설계'], si:['කොරියානු–සිංහල සංසන්දනය','කථනය සහ උච්චාරණය','සංක්‍රමණ සහ රැකියා භාෂාව','බහුභාෂා ඉගෙනුම් නිර්මාණය'], vi:['Đối chiếu Hàn–Sinhala','Lời nói và phát âm','Di cư và ngôn ngữ công sở','Thiết kế học đa ngôn ngữ'], ne:['कोरियन–सिंहला तुलना','बोली र उच्चारण','आप्रवासन र कार्यस्थल भाषा','बहुभाषी सिकाइ डिजाइन'], hi:['कोरियाई–सिंहला तुलना','वाक् और उच्चारण','प्रवासन और कार्यस्थल भाषा','बहुभाषी शिक्षण डिज़ाइन'], zh:['韩语—僧伽罗语对比','语音与发音','迁移与职场语言','多语学习设计'], ja:['韓国語・シンハラ語対照','音声と発音','移住と職場の言語','多言語学習設計'], es:['Contraste coreano–cingalés','Habla y pronunciación','Migración y lengua laboral','Diseño multilingüe'], de:['Koreanisch–Singhalesisch','Sprechen & Aussprache','Migration und Arbeitssprache','Mehrsprachiges Lerndesign']
    },
    researchDesc: {
      en:['Grammar, word order and meaning differences that shape learner errors and insight.','Real speech patterns, sound change and intelligibility across first languages.','The language people need for safety, rights, teamwork and belonging.','Accessible interfaces, translation workflows and culturally relevant examples.'],
      ko:['학습자의 오류와 이해를 만드는 문법·어순·의미 차이를 연구합니다.','실제 발화의 패턴, 음운 변동, 모어별 이해도를 분석합니다.','안전, 권리, 협업, 소속감에 필요한 언어를 탐구합니다.','접근 가능한 화면, 번역 과정, 문화적으로 적절한 예를 설계합니다.'],
      si:['ශිෂ්‍ය වැරදි හා අවබෝධය හැඩගස්වන ව්‍යාකරණ, වචන පිළිවෙළ සහ අර්ථ වෙනස්කම්.','සැබෑ කථන රටා, ශබ්ද වෙනස්වීම් සහ මව්භාෂාව අනුව තේරුම් ගැනීම.','ආරක්ෂාව, අයිතිවාසිකම්, කණ්ඩායම් වැඩ සහ අයත් වීම සඳහා අවශ්‍ය භාෂාව.','ප්‍රවේශ විය හැකි අතුරුමුහුණත් සහ සංස්කෘතිකව අදාළ උදාහරණ.'],
      vi:['Khác biệt về ngữ pháp, trật tự từ và ý nghĩa tạo nên lỗi và hiểu biết của người học.','Mẫu lời nói thật, biến đổi âm và độ dễ hiểu giữa các tiếng mẹ đẻ.','Ngôn ngữ cần cho an toàn, quyền lợi, làm việc nhóm và hòa nhập.','Giao diện dễ tiếp cận, quy trình dịch và ví dụ phù hợp văn hóa.'],
      ne:['विद्यार्थीको त्रुटि र बुझाइ बनाउने व्याकरण, शब्दक्रम र अर्थका भिन्नता।','वास्तविक बोली, ध्वनि परिवर्तन र मातृभाषाअनुसार बुझिने क्षमता।','सुरक्षा, अधिकार, टोली र अपनत्वका लागि चाहिने भाषा।','पहुँचयोग्य इन्टरफेस, अनुवाद प्रक्रिया र सांस्कृतिक उदाहरण।'],
      hi:['व्याकरण, शब्दक्रम और अर्थ के अंतर जो सीखने की गलतियाँ और समझ बनाते हैं।','वास्तविक बोलचाल, ध्वनि परिवर्तन और मातृभाषा के अनुसार बोधगम्यता।','सुरक्षा, अधिकार, टीम और अपनापन के लिए आवश्यक भाषा।','सुलभ इंटरफ़ेस, अनुवाद प्रक्रिया और सांस्कृतिक रूप से उचित उदाहरण।'],
      zh:['研究影响学习者偏误与理解的语法、语序和意义差异。','分析真实语流、语音变化及不同母语背景下的可懂度。','聚焦安全、权利、协作与归属所需的语言。','设计无障碍界面、翻译流程及符合文化的例子。'],
      ja:['学習者の誤りと理解を形作る文法・語順・意味の違い。','実際の発話、音変化、母語別の明瞭度を分析します。','安全、権利、協働、所属感に必要な言語を研究します。','アクセシブルな画面、翻訳工程、文化に合う例を設計します。'],
      es:['Diferencias de gramática, orden y significado que explican errores y comprensión.','Habla real, cambio sonoro e inteligibilidad entre lenguas maternas.','La lengua necesaria para seguridad, derechos, equipo y pertenencia.','Interfaces accesibles, flujos de traducción y ejemplos culturales.'],
      de:['Unterschiede in Grammatik, Wortstellung und Bedeutung, die Lernen prägen.','Echte Sprechmuster, Lautwandel und Verständlichkeit je Erstsprache.','Sprache für Sicherheit, Rechte, Teamarbeit und Zugehörigkeit.','Barrierefreie Oberflächen, Übersetzungsabläufe und passende Beispiele.']
    },
    courseTitles: {
      en:['Hangul Zero','Korean 1A','Korean 2B','EPS-TOPIK Sprint','TOPIK Writing Lab','Academic Korean Seminar'], ko:['한글 제로','한국어 1A','한국어 2B','EPS-TOPIK 집중반','TOPIK 쓰기 워크숍','학문 한국어 세미나'], si:['හංගුල් ශුන්‍යයෙන්','කොරියානු 1A','කොරියානු 2B','EPS-TOPIK වේගවත් පාඨමාලාව','TOPIK ලිවීමේ වැඩමුළුව','අධ්‍යයන කොරියානු සම්මන්ත්‍රණය'], vi:['Hangul từ số 0','Tiếng Hàn 1A','Tiếng Hàn 2B','EPS-TOPIK tăng tốc','Xưởng viết TOPIK','Hội thảo tiếng Hàn học thuật'], ne:['हाङ्गुल शून्यबाट','कोरियन 1A','कोरियन 2B','EPS-TOPIK द्रुत कक्षा','TOPIK लेखन कार्यशाला','शैक्षिक कोरियन सेमिनार'], hi:['हंगुल शून्य से','कोरियाई 1A','कोरियाई 2B','EPS-TOPIK स्प्रिंट','TOPIK लेखन कार्यशाला','अकादमिक कोरियाई संगोष्ठी'], zh:['零基础韩文字母','韩语 1A','韩语 2B','EPS-TOPIK 冲刺','TOPIK 写作工坊','学术韩语研讨课'], ja:['ゼロからハングル','韓国語 1A','韓国語 2B','EPS-TOPIK 集中','TOPIK 作文ラボ','学術韓国語セミナー'], es:['Hangul desde cero','Coreano 1A','Coreano 2B','Intensivo EPS-TOPIK','Taller de escritura TOPIK','Seminario de coreano académico'], de:['Hangul ab Null','Koreanisch 1A','Koreanisch 2B','EPS-TOPIK Intensiv','TOPIK Schreibwerkstatt','Akademisches Seminar']
    },
    videoTitles: {
      en:['Batchim without fear','Choosing 은/는 or 이/가','A day at a Korean workplace','Research note: learner errors','Politeness beyond 요','TOPIK listening strategy'], ko:['받침, 어렵지 않아요','은/는 또는 이/가 선택하기','한국 직장의 하루','연구 노트: 학습자 오류','요 너머의 높임 표현','TOPIK 듣기 전략'], si:['බචිම් බිය නැතිව','은/는 ද 이/가 ද?','කොරියානු වැඩපලක දවසක්','පර්යේෂණ සටහන: ශිෂ්‍ය වැරදි','요 ට එහා ගෞරව භාෂාව','TOPIK ශ්‍රවණ උපාය'], vi:['Batchim không còn đáng sợ','Chọn 은/는 hay 이/가','Một ngày ở nơi làm việc Hàn Quốc','Ghi chú nghiên cứu: lỗi người học','Lịch sự ngoài 요','Chiến lược nghe TOPIK'], ne:['बाचिमसँग नडराउनुहोस्','은/는 वा 이/가?','कोरियन कार्यस्थलको एक दिन','अनुसन्धान टिपोट: विद्यार्थी त्रुटि','요 भन्दा परको आदर','TOPIK सुनाइ रणनीति'], hi:['बाचिम से न डरें','은/는 या 이/가?','कोरियाई कार्यस्थल का एक दिन','शोध नोट: विद्यार्थी त्रुटियाँ','요 से आगे विनम्रता','TOPIK सुनने की रणनीति'], zh:['轻松学收音','选择 은/는 还是 이/가','韩国职场的一天','研究札记：学习者偏误','요 之外的礼貌','TOPIK 听力策略'], ja:['怖くないパッチム','은/는 と 이/가 の選び方','韓国の職場の一日','研究ノート：学習者の誤り','요 だけではない丁寧さ','TOPIK 聴解戦略'], es:['Batchim sin miedo','Elegir 은/는 o 이/가','Un día de trabajo en Corea','Nota de investigación: errores','Cortesía más allá de 요','Estrategia de escucha TOPIK'], de:['Batchim ohne Angst','은/는 oder 이/가 wählen','Ein Tag am koreanischen Arbeitsplatz','Forschungsnotiz: Lernfehler','Höflichkeit jenseits von 요','TOPIK Hörstrategie']
    },
    materialTitles: {
      en:['Hangul sound map','Essential Korean–Sinhala glossary','Beginner grammar workbook','EPS-TOPIK safety vocabulary','TOPIK II writing frames','Academic presentation checklist'], ko:['한글 소리 지도','한국어–싱할라어 핵심 어휘집','초급 문법 워크북','EPS-TOPIK 안전 어휘','TOPIK II 쓰기 틀','학술 발표 체크리스트'], si:['හංගුල් ශබ්ද සිතියම','අත්‍යවශ්‍ය කොරියානු–සිංහල ශබ්දකෝෂය','ආරම්භක ව්‍යාකරණ වැඩපොත','EPS-TOPIK ආරක්ෂක වචන','TOPIK II ලිවීමේ ආකෘති','අධ්‍යයන ඉදිරිපත් කිරීමේ ලැයිස්තුව'], vi:['Bản đồ âm Hangul','Từ điển Hàn–Sinhala thiết yếu','Sổ bài tập ngữ pháp sơ cấp','Từ vựng an toàn EPS-TOPIK','Khung viết TOPIK II','Danh sách thuyết trình học thuật'], ne:['हाङ्गुल ध्वनि नक्सा','आवश्यक कोरियन–सिंहला शब्दसूची','प्रारम्भिक व्याकरण कार्यपुस्तिका','EPS-TOPIK सुरक्षा शब्दावली','TOPIK II लेखन ढाँचा','शैक्षिक प्रस्तुति सूची'], hi:['हंगुल ध्वनि मानचित्र','आवश्यक कोरियाई–सिंहला शब्दावली','प्रारंभिक व्याकरण कार्यपुस्तिका','EPS-TOPIK सुरक्षा शब्द','TOPIK II लेखन ढाँचे','अकादमिक प्रस्तुति सूची'], zh:['韩文字母语音图','韩语—僧伽罗语核心词汇','初级语法练习册','EPS-TOPIK 安全词汇','TOPIK II 写作框架','学术演示检查表'], ja:['ハングル音声マップ','韓国語・シンハラ語必須語彙','初級文法ワークブック','EPS-TOPIK 安全語彙','TOPIK II 作文フレーム','学術発表チェックリスト'], es:['Mapa de sonidos Hangul','Glosario esencial coreano–cingalés','Cuaderno de gramática inicial','Vocabulario de seguridad EPS-TOPIK','Marcos de escritura TOPIK II','Lista de presentación académica'], de:['Hangul-Lautkarte','Koreanisch–Singhalesisch Grundwortschatz','Grammatik-Arbeitsbuch A1','EPS-TOPIK Sicherheitswortschatz','TOPIK II Schreibrahmen','Checkliste für Präsentationen']
    },
    cultureTitles: {
      en:['More than “hello”','The table as language','Work, age and respect'], ko:['‘안녕하세요’ 그 이상','식탁이라는 언어','일, 나이, 존중'], si:['“ආයුබෝවන්”ට වඩා වැඩි යමක්','ආහාර මේසය භාෂාවක් ලෙස','වැඩ, වයස සහ ගෞරවය'], vi:['Hơn cả lời “xin chào”','Bàn ăn như một ngôn ngữ','Công việc, tuổi tác và sự tôn trọng'], ne:['“नमस्ते” भन्दा धेरै','खाने टेबल एउटा भाषा','काम, उमेर र सम्मान'], hi:['“नमस्ते” से कहीं आगे','भोजन की मेज़ एक भाषा','काम, आयु और सम्मान'], zh:['不只是“你好”','餐桌也是一种语言','工作、年龄与尊重'], ja:['「こんにちは」以上のこと','食卓という言語','仕事、年齢、敬意'], es:['Más que “hola”','La mesa como lenguaje','Trabajo, edad y respeto'], de:['Mehr als „Hallo“','Der Tisch als Sprache','Arbeit, Alter und Respekt']
    }
  };

  const genericVideoDesc = () => l({en:'A captioned micro-lesson with transcript, key expressions and a short practice prompt.',ko:'자막, 대본, 핵심 표현과 짧은 연습이 있는 마이크로 수업입니다.',si:'උපසිරැසි, පිටපත, ප්‍රධාන ප්‍රකාශන සහ කෙටි පුහුණුවක් ඇති පාඩමකි.',vi:'Bài học ngắn có phụ đề, bản chép, cụm từ chính và bài luyện tập.',ne:'उपशीर्षक, प्रतिलेख, मुख्य अभिव्यक्ति र छोटो अभ्यास भएको पाठ।',hi:'कैप्शन, प्रतिलेख, मुख्य अभिव्यक्तियाँ और छोटा अभ्यास वाला पाठ।',zh:'配有字幕、文本稿、核心表达和简短练习的微课。',ja:'字幕、文字起こし、重要表現、短い練習付きのマイクロレッスン。',es:'Microlección con subtítulos, transcripción, expresiones clave y práctica.',de:'Mikrolektion mit Untertiteln, Transkript, Redemitteln und Übung.'});

  function brand(inFooter=false) {
    return `<a class="brand" href="#/" aria-label="언어랩 home">
      <span class="brand-mark" aria-hidden="true">언</span>
      <span><span class="brand-name">언어랩</span><span class="brand-sub">${safe(locale().sub)}</span></span>
    </a>`;
  }

  function languagePicker(id='lang-menu') {
    const active = LANGS.find(x => x.code === state.lang);
    return `<div class="language-select-wrap">
      <button class="language-btn" data-action="toggle-language" aria-expanded="${state.langOpen}" aria-controls="${id}" aria-label="${safe(locale().language)}">
        <span aria-hidden="true">文</span><span class="lang-label">${safe(active.native)}</span><span class="chev">▼</span>
      </button>
      <div class="language-menu" id="${id}" ${state.langOpen ? '' : 'hidden'}>
        ${LANGS.map(x => `<button class="lang-option ${x.code===state.lang?'active':''}" data-language="${x.code}"><strong>${safe(x.native)}</strong><span>${safe(x.english)}</span></button>`).join('')}
      </div>
    </div>`;
  }

  function header() {
    const loc = locale();
    const r = currentRoute();
    return `<div class="announcement"><div class="container announcement-inner"><span class="announcement-label">언어랩 update</span><span>${safe(loc.announce)}</span><a href="#/courses">${safe(loc.announceLink)} →</a></div></div>
      <header class="header">
        <div class="container header-main">
          ${brand()}
          <nav class="nav" aria-label="Main navigation">
            ${routes.map((route,i)=>`<a class="nav-link ${r===route?'active':''}" href="${href(route)}">${safe(loc.nav[i])}</a>`).join('')}
          </nav>
          <div class="header-actions">
            ${languagePicker()}
            <button class="btn btn-sm" data-action="open-login">${state.loggedIn ? safe(loc.account) : safe(loc.signIn)}</button>
            <button class="menu-btn" data-action="toggle-menu" aria-label="${safe(loc.menu)}" aria-expanded="${state.menuOpen}"><span class="menu-lines"></span></button>
          </div>
        </div>
      </header>
      <nav class="mobile-menu" ${state.menuOpen?'':'hidden'} aria-label="Mobile navigation">
        ${routes.map((route,i)=>`<a href="${href(route)}">${safe(loc.nav[i])}</a>`).join('')}
        <button class="btn btn-wide" style="margin-top:16px" data-action="open-login">${state.loggedIn ? safe(loc.account) : safe(loc.signIn)}</button>
      </nav>`;
  }

  function footer() {
    const loc = locale();
    const f = loc.footer;
    return `<footer class="footer"><div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">${brand(true)}<p class="footer-about">${safe(f[0])}</p></div>
        <div><h3>${safe(f[1])}</h3><div class="footer-links"><a href="#/programs">${safe(loc.nav[1])}</a><a href="#/research">${safe(loc.nav[2])}</a><a href="#/culture">${safe(loc.nav[8])}</a></div></div>
        <div><h3>${safe(f[2])}</h3><div class="footer-links"><a href="#/courses">${safe(loc.nav[3])}</a><a href="#/videos">${safe(loc.nav[4])}</a><a href="#/materials">${safe(loc.nav[5])}</a><a href="#/assignments">${safe(loc.nav[7])}</a></div></div>
        <div><h3>${safe(f[3])}</h3><div class="footer-links"><a href="#/about">${safe(loc.nav[9])}</a><a href="#/admin">Admin</a><a href="#/about">${safe(f[4])}</a><a href="#/about">${safe(f[5])}</a></div></div>
      </div>
      <div class="footer-bottom"><span>${safe(f[6])}</span><span>Seoul · Colombo · Global online</span></div>
    </div></footer>`;
  }

  function pageHero(route, watermark='언') {
    const p = locale().pages[route];
    return `<section class="page-hero" data-watermark="${safe(watermark)}"><div class="container page-hero-grid">
      <div><div class="breadcrumb"><a href="#/">${safe(locale().nav[0])}</a><span>／</span><span>${safe(p[0])}</span></div><p class="kicker">${safe(p[2])}</p><h1 class="h1">${safe(p[0])}</h1><p class="lead">${safe(p[1])}</p></div>
      <aside class="page-hero-aside"><b>${safe(locale().language)} · ${safe(LANGS.find(x=>x.code===state.lang).native)}</b>${safe(locale().translationNote)}</aside>
    </div></section>`;
  }

  function homePage() {
    const loc = locale(), h=loc.home;
    const langs = [...LANGS, ...LANGS];
    return `<main id="main-content">
      <section class="hero"><div class="container hero-grid">
        <div class="hero-copy"><p class="kicker">${safe(loc.hero[5])}</p><h1 class="display hero-title">${formatHeroTitle(loc.hero[0])}</h1><p class="lead">${safe(loc.hero[1])}</p>
          <div class="hero-actions"><a class="btn btn-red" href="#/research">${safe(loc.hero[2])} <span class="arrow">↗</span></a><a class="btn btn-light" href="#/courses">${safe(loc.hero[3])} <span class="arrow">→</span></a></div>
          <div class="hero-note"><span class="live-dot"></span>${safe(loc.hero[4])}</div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-frame"><img class="hero-image" src="/Users/sangwookim/Desktop/onolab website/language-bridge.jpg" alt="Korean language researcher and adult learners discussing language around a table" /><div class="hero-caption"><strong>${safe(loc.hero[8])}</strong><span>© 언어랩 editorial</span></div></div>
          <div class="floating-card"><div class="hangul">말 ↔ 뜻</div><small>${safe(loc.hero[6])}<br>speech ↔ meaning</small></div>
          <div class="floating-note"><span class="dot"></span> 10 languages</div>
          <div class="floating-quote">“${safe(loc.hero[7])}”</div>
        </div>
      </div></section>
      <section class="metrics"><div class="container metrics-grid">${loc.metrics.map(m=>`<div class="metric"><strong>${safe(m[0])}</strong><span>${safe(m[1])}</span></div>`).join('')}</div></section>

      <section class="section"><div class="container intro-grid">
        <div class="intro-sticky"><p class="kicker">${safe(loc.pages.programs[2])}</p><h2 class="h2">${safe(h[0])}</h2><p class="lead">${safe(h[1])}</p><a class="btn btn-ghost" style="margin-top:28px" href="#/programs">${safe(loc.common.viewAll)} <span>→</span></a></div>
        <div class="path-list">${loc.paths.map((x,i)=>`<a class="path-row" href="#/programs"><span class="path-num">0${i+1}</span><span><h3>${safe(x[0])}</h3><p>${safe(x[1])}</p></span><span class="path-go">↗</span></a>`).join('')}</div>
      </div></section>

      <section class="section research-band"><div class="container research-grid">
        <div class="research-canvas"><div class="sound-wave">${waveBars()}</div><div class="transcript-chip"><b>00:14</b> /안녕하세요/ → [안녕하세용]</div><div class="research-canvas-copy"><span class="eyebrow">Speech × meaning × context</span><h3>말소리에서 배움까지</h3></div></div>
        <div><p class="kicker">${safe(h[2])}</p><h2 class="h2">${safe(h[3])}</h2><p class="lead">${safe(h[4])}</p><div class="insight-list">${loc.insights.map(x=>`<div class="insight"><i></i><div><h4>${safe(x[0])}</h4><p>${safe(x[1])}</p></div></div>`).join('')}</div><a href="#/research" class="btn btn-ghost" style="margin-top:24px">${safe(loc.common.learnMore)} →</a></div>
      </div></section>

      <section class="section"><div class="container"><div class="section-heading"><div><p class="kicker">${safe(h[5])}</p><h2 class="h2">${safe(h[6])}</h2></div><p class="lead">${safe(h[7])}</p></div>
        <div class="card-grid">${loc.cards.map((x,i)=>`<article class="content-card"><div class="card-art type-${['a','b','c'][i]}">${i===0?'<span class="play">▶</span>':''}</div><div class="card-body"><div class="card-meta"><span>${['PHONETICS','GRAMMAR','CULTURE'][i]}</span><span>${[7,9,5][i]} ${safe(loc.common.minutes)}</span></div><h3>${safe(x[0])}</h3><p>${safe(x[1])}</p><a class="card-link" href="${i===2?'#/culture':'#/videos'}">${safe(i===2?loc.common.explore:loc.common.watch)} →</a></div></article>`).join('')}</div>
      </div></section>

      <section class="global-section"><div class="container"><p class="kicker" style="color:#fff">Global by design</p><h2 class="h2">${safe(loc.global)}</h2></div><div class="global-marquee">${langs.map(x=>`<button class="lang-pill" data-language="${x.code}"><b>${safe(x.native)}</b><span>${safe(x.english)}</span></button>`).join('')}</div></section>

      <section class="section-sm"><div class="container"><div class="cta-block"><div><h2 class="h2">${safe(h[10])}</h2><p>${safe(h[11])}</p></div><a class="btn" href="#/quiz">${safe(loc.common.start)} →</a></div></div></section>
    </main>`;
  }

  function formatHeroTitle(text) {
    const words = safe(text).split(' ');
    if (words.length < 3) return `${words.slice(0,-1).join(' ')} <span class="accent">${words.at(-1)}</span>`;
    return `${words.slice(0,-1).join(' ')} <span class="accent">${words.at(-1)}</span>`;
  }
  function waveBars() {
    const heights=[26,54,82,39,71,112,46,98,62,29,76,128,45,86,118,55,33,94,67,119,75,42,105,56,31,83,126,63,48,92,37,71,108,52,30,89,69,116,58,38,79,131,64,48,98,54,34,76,106,43,80];
    return heights.map((h,i)=>`<span class="wave-line" style="left:${i*2}%;height:${h}px"></span>`).join('');
  }

  function programsPage() {
    const titles=CONTENT.programTitles[state.lang], desc=CONTENT.programDesc[state.lang], levels=[locale().common.beginner,'TOPIK 1–2','TOPIK 3–6',locale().common.intermediate];
    return `<main id="main-content">${pageHero('programs','길')}<section class="section"><div class="container"><div class="program-grid">${titles.map((x,i)=>`<article class="program-card"><div class="program-index"><strong>0${i+1}</strong><span>PATHWAY</span></div><div class="program-copy"><span class="eyebrow">${safe(levels[i])}</span><h3>${safe(x)}</h3><p>${safe(desc[i])}</p><div class="tags"><span class="tag">${i===1?'Exam':'12 weeks'}</span><span class="tag">Live + online</span><span class="tag">Multilingual</span></div><a class="card-link" href="#/courses">${safe(locale().common.enroll)} →</a></div></article>`).join('')}</div></div></section>${homeCta()}</main>`;
  }

  function researchPage() {
    const titles=CONTENT.researchTitles[state.lang], desc=CONTENT.researchDesc[state.lang];
    const methods=l({en:[['01','Listen','Record authentic speech and learner experience.'],['02','Compare','Find patterns across Korean and learners’ first languages.'],['03','Test','Pilot explanations and tasks with real learners.'],['04','Share','Publish useful findings in accessible formats.']],ko:[['01','듣기','실제 발화와 학습자 경험을 기록합니다.'],['02','비교','한국어와 학습자 모어의 패턴을 찾습니다.'],['03','검증','실제 학습자와 설명 및 과제를 시험합니다.'],['04','공유','유용한 결과를 접근 가능한 형식으로 나눕니다.']],si:[['01','සවන් දීම','සැබෑ කථනය සහ ශිෂ්‍ය අත්දැකීම් වාර්තා කරමු.'],['02','සංසන්දනය','කොරියානු සහ මව්භාෂා අතර රටා සොයමු.'],['03','පරීක්ෂා කිරීම','සැබෑ ශිෂ්‍යයන් සමඟ පැහැදිලි කිරීම් අත්හදා බලමු.'],['04','බෙදා ගැනීම','ප්‍රයෝජනවත් ප්‍රතිඵල ප්‍රවේශ විය හැකි ලෙස පළ කරමු.']]});
    const m=methods || [['01','Listen','Record'],['02','Compare','Find patterns'],['03','Test','Pilot'],['04','Share','Publish']];
    return `<main id="main-content">${pageHero('research','말')}<section class="section"><div class="container"><div class="section-heading"><div><p class="kicker">Applied linguistics</p><h2 class="h2">${safe(locale().pages.research[2])}</h2></div><p class="lead">Language is not isolated data. It is voice, identity, access and action.</p></div><div class="research-focus-grid">${titles.map((x,i)=>`<article class="focus-card"><span class="focus-num">FOCUS 0${i+1}</span><h3>${safe(x)}</h3><p>${safe(desc[i])}</p><span class="focus-letter">${['말','소','삶','문'][i]}</span></article>`).join('')}</div></div></section>
      <section class="section research-band"><div class="container research-method"><div><p class="kicker">Method, not mystique</p><h2 class="h2">Evidence into practice.</h2><p class="lead">Our cycle keeps research accountable to the people who use it.</p><div class="source-note" style="margin-top:28px">Global Korean study continues to grow: King Sejong Institutes reported 239,020 learners in 2025. <a href="https://www.koreatimes.co.kr/lifestyle/trends/20260225/sejong-institutes-overseas-enrollment-tops-230000-for-first-time" target="_blank" rel="noopener">Source: The Korea Times, 25 Feb 2026</a>.</div></div><div class="method-stack">${m.map(x=>`<div class="method-row"><strong>${x[0]}</strong><div><h4>${safe(x[1])}</h4><p>${safe(x[2])}</p></div></div>`).join('')}</div></div></section>${homeCta()}</main>`;
  }

  function coursesPage() {
    const loc=locale(), titles=CONTENT.courseTitles[state.lang];
    const levels=[loc.common.beginner,loc.common.beginner,loc.common.intermediate,loc.common.intermediate,loc.common.advanced,loc.common.advanced];
    const filtered=titles.map((x,i)=>({x,i})).filter(({i})=>state.courseFilter==='all'||state.courseFilter===['beginner','beginner','intermediate','intermediate','advanced','advanced'][i]);
    return `<main id="main-content">${pageHero('courses','배')}<section class="section"><div class="container"><div class="filter-bar"><div class="filter-group">${[['all',loc.common.all],['beginner',loc.common.beginner],['intermediate',loc.common.intermediate],['advanced',loc.common.advanced]].map(x=>`<button class="filter-btn ${state.courseFilter===x[0]?'active':''}" data-course-filter="${x[0]}">${safe(x[1])}</button>`).join('')}</div><div class="search-box"><input id="course-search" placeholder="${safe(loc.common.search)}" /><span class="search-symbol">⌕</span></div></div><div class="course-grid" id="course-grid">${filtered.map(({x,i})=>courseCard(x,i,levels[i])).join('')}</div></div></section>${homeCta()}</main>`;
  }
  function courseCard(title,i,level){
    const loc=locale();
    const descriptions=CONTENT.programDesc[state.lang];
    return `<article class="course-card" data-search="${safe(title.toLowerCase())}"><div class="course-top"><span class="course-level">${['A0','A1','A2','E','T','C1'][i]}</span><span class="course-script">${['가나다','안녕하세요','-고 싶어요','취업','쓰기 54','발표·토론'][i]}</span></div><div class="course-copy"><span class="eyebrow">${safe(level)}</span><h3>${safe(title)}</h3><p>${safe(descriptions[Math.min(Math.floor(i/1.5),3)])}</p><div class="course-details"><span>Format<b>${i%2?'Blended':'Live online'}</b></span><span>Next intake<b>${i<3?'Nov 2026':'Jan 2027'}</b></span></div><button class="btn btn-light btn-wide" data-action="course-interest" data-title="${safe(title)}">${safe(loc.common.enroll)} →</button></div></article>`;
  }

  function videosPage() {
    const loc=locale(), titles=CONTENT.videoTitles[state.lang];
    const videos=titles.map((x,i)=>({title:x, level:['beginner','beginner','intermediate','research','intermediate','advanced'][i], duration:[7,9,12,6,8,11][i], glyph:['ㄱ','는','일','R','요','듣'][i]}));
    const filtered=videos.filter(v=>state.videoFilter==='all'||v.level===state.videoFilter);
    return `<main id="main-content">${pageHero('videos','보')}<section class="section"><div class="container"><article class="video-featured"><div class="video-screen"><img src="assets/language-bridge.jpg" alt="Korean language discussion"/><button class="big-play" data-video="0" aria-label="Play">▶</button></div><div class="video-feature-copy"><span class="eyebrow" style="color:var(--gold)">${safe(loc.common.featured)}</span><h2>${safe(titles[0])}</h2><p>${safe(genericVideoDesc())}</p><button class="btn btn-red" style="align-self:flex-start;margin-top:25px" data-video="0">${safe(loc.common.watch)} →</button></div></article>
      <div class="filter-bar"><div class="filter-group">${[['all',loc.common.all],['beginner',loc.common.beginner],['intermediate',loc.common.intermediate],['advanced',loc.common.advanced],['research','Research']].map(x=>`<button class="filter-btn ${state.videoFilter===x[0]?'active':''}" data-video-filter="${x[0]}">${safe(x[1])}</button>`).join('')}</div></div>
      <div class="video-grid">${filtered.map((v)=>`<article class="video-card" data-video="${videos.indexOf(v)}" tabindex="0"><div class="video-thumb"><span class="lettering">${v.glyph}</span><span class="mini-play">▶</span><span class="duration">${v.duration}:00</span></div><div class="video-copy"><span class="eyebrow">${safe(v.level)}</span><h3>${safe(v.title)}</h3><p>${safe(genericVideoDesc())}</p></div></article>`).join('')}</div></div></section>${homeCta()}</main>`;
  }

  function materialsPage() {
    const loc=locale(), titles=CONTENT.materialTitles[state.lang];
    const types=['PDF','PDF','DOCX','XLSX','PDF','PDF'];
    const levels=['beginner','beginner','beginner','intermediate','advanced','advanced'];
    const filtered=titles.map((x,i)=>({x,i})).filter(({i})=>state.materialFilter==='all'||state.materialFilter===levels[i]);
    return `<main id="main-content">${pageHero('materials','책')}<section class="section"><div class="container material-layout"><aside class="side-filter"><h3>${safe(loc.common.filters)}</h3>${[['all',loc.common.all],['beginner',loc.common.beginner],['intermediate',loc.common.intermediate],['advanced',loc.common.advanced]].map(x=>`<label class="check-row"><input type="radio" name="material-level" value="${x[0]}" ${state.materialFilter===x[0]?'checked':''}/> ${safe(x[1])}</label>`).join('')}<div class="source-note" style="margin-top:18px">${safe(loc.translationNote)}</div></aside><div><div class="filter-bar"><p class="micro">${filtered.length} resources</p><div class="search-box"><input id="material-search" placeholder="${safe(loc.common.search)}"/><span class="search-symbol">⌕</span></div></div><div class="material-list" id="material-list">${filtered.map(({x,i})=>`<article class="material-item" data-search="${safe(x.toLowerCase())}"><span class="file-icon">${types[i]}</span><div><h3>${safe(x)}</h3><p>언어랩 · ${safe(loc.common[levelKey(levels[i])])} · Updated Sep 2026</p><div class="material-meta"><span class="tag">${types[i]}</span><span class="tag">${[1.2,2.4,.8,1.8,3.1,.6][i]} MB</span><span class="tag">CC BY-NC</span></div></div><button class="btn btn-light btn-sm" data-download="${i}">${safe(loc.common.download)} ↓</button></article>`).join('')}</div></div></div></section>${homeCta()}</main>`;
  }
  function levelKey(x){ return x; }

  const QUIZ = [
    {q:'Which greeting is appropriate in most polite first meetings?', k:'처음 만났을 때 알맞은 인사는?', opts:['안녕!','안녕하세요?','잘 자요.','미안.'], a:1},
    {q:'Choose the natural sentence for “I am a student.”', k:'자연스러운 문장을 고르세요.', opts:['저는 학생이에요.','저를 학생이 있어요.','제가 학생을 해요.','저는 학생에 가요.'], a:0},
    {q:'What does the particle 에 mark in “학교에 가요”?', k:'“학교에 가요”에서 ‘에’의 기능은?', opts:['Object','Destination','Topic','Possession'], a:1},
    {q:'Which ending is the most polite?', k:'가장 공손한 표현은?', opts:['먹어.','먹자.','먹습니다.','먹니?'], a:2},
    {q:'Choose the workplace safety expression.', k:'작업장 안전 표현을 고르세요.', opts:['조심하세요.','맛있어요.','오랜만이에요.','축하해요.'], a:0}
  ];

  function quizPage() {
    const loc=locale(), q=state.quiz;
    let body='';
    if(!q.started) body=`<div class="quiz-card quiz-result"><span class="eyebrow">TOPIK A1 · 5 questions</span><h2 class="h2" style="margin-top:25px">${safe(loc.pages.quiz[2])}</h2><p class="lead" style="margin-inline:auto">${safe(loc.pages.quiz[1])}</p><button class="btn btn-red" style="margin-top:30px" data-action="quiz-start">${safe(loc.common.start)} →</button></div>`;
    else if(q.complete){ const score=QUIZ.reduce((s,x,i)=>s+(q.answers[i]===x.a?1:0),0); body=`<div class="quiz-card quiz-result"><div class="result-ring" style="--score:${score/QUIZ.length*100}%"><strong>${score}/${QUIZ.length}</strong></div><h2 class="h2">${score>=4?'잘했어요!':'Keep learning.'}</h2><p class="lead" style="margin-inline:auto">${score>=4?'You are ready for a structured beginner course.':'Review the beginner materials, then try again.'}</p><div class="hero-actions" style="justify-content:center"><button class="btn btn-light" data-action="quiz-retry">${safe(loc.common.retry)}</button><a class="btn btn-red" href="#/courses">${safe(loc.common.enroll)} →</a></div></div>`;
    } else { const item=QUIZ[q.index]; body=`<div class="quiz-card"><span class="question-count">${q.index+1} / ${QUIZ.length}</span><h2 class="question-text">${safe(item.q)}<span class="question-korean">${safe(item.k)}</span></h2><div class="option-list">${item.opts.map((o,i)=>`<button class="option-btn ${q.answers[q.index]===i?'selected':''}" data-quiz-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${safe(o)}</span></button>`).join('')}</div><div class="quiz-nav"><button class="btn btn-light" data-action="quiz-back" ${q.index===0?'disabled':''}>← ${safe(loc.common.back)}</button><button class="btn btn-red" data-action="quiz-next" ${q.answers[q.index]===undefined?'disabled':''}>${q.index===QUIZ.length-1?safe(loc.common.finish):safe(loc.common.next)} →</button></div></div>`; }
    return `<main id="main-content">${pageHero('quiz','문')}<section class="section"><div class="container quiz-shell"><aside class="quiz-sidebar"><h3>${safe(loc.pages.quiz[2])}</h3><p>Korean foundations · TOPIK A1</p><div class="quiz-progress"><span style="width:${q.started?(q.complete?100:(q.index+1)/QUIZ.length*100):0}%"></span></div><p>${q.started?(q.complete?QUIZ.length:q.index+1):0} / ${QUIZ.length}</p><div class="question-dots">${QUIZ.map((_,i)=>`<span class="question-dot ${q.complete||q.answers[i]!==undefined?'done':''} ${q.index===i&&!q.complete?'current':''}">${i+1}</span>`).join('')}</div></aside>${body}</div></section></main>`;
  }

  function assignmentsPage() {
    const loc=locale();
    const saved=JSON.parse(localStorage.getItem('eoneolab-submissions')||'[]');
    const titles=l({en:['Record your self-introduction','Workplace safety dialogue','Culture reflection'],ko:['자기소개 녹음','작업장 안전 대화','문화 성찰문'],si:['ඔබේ හැඳින්වීම පටිගත කරන්න','රැකියා ආරක්ෂක සංවාදය','සංස්කෘතික පරාවර්තනය'],vi:['Ghi âm tự giới thiệu','Hội thoại an toàn nơi làm việc','Suy ngẫm văn hóa'],ne:['आफ्नो परिचय रेकर्ड गर्नुहोस्','कार्यस्थल सुरक्षा संवाद','संस्कृति प्रतिबिम्ब'],hi:['अपना परिचय रिकॉर्ड करें','कार्यस्थल सुरक्षा संवाद','संस्कृति चिंतन'],zh:['录制自我介绍','职场安全对话','文化反思'],ja:['自己紹介を録音','職場安全の会話','文化リフレクション'],es:['Graba tu presentación','Diálogo de seguridad laboral','Reflexión cultural'],de:['Selbstvorstellung aufnehmen','Dialog zur Arbeitssicherheit','Kulturreflexion']});
    const desc=l({en:'Complete the task in Korean. You may plan notes in your home language.',ko:'한국어로 과제를 완성하세요. 계획은 모어로 작성해도 됩니다.',si:'කාර්යය කොරියානු භාෂාවෙන් සම්පූර්ණ කරන්න. සටහන් ඔබේ මව්භාෂාවෙන් සැලසුම් කළ හැක.',vi:'Hoàn thành bằng tiếng Hàn. Bạn có thể lập ghi chú bằng tiếng mẹ đẻ.',ne:'कार्य कोरियनमा पूरा गर्नुहोस्। योजना मातृभाषामा बनाउन सक्नुहुन्छ।',hi:'कार्य कोरियाई में पूरा करें। नोट्स मातृभाषा में बना सकते हैं।',zh:'请用韩语完成任务，可用母语准备笔记。',ja:'韓国語で課題を完成してください。計画メモは母語でも構いません。',es:'Completa la tarea en coreano. Puedes planificar en tu lengua materna.',de:'Bearbeite die Aufgabe auf Koreanisch. Notizen dürfen in der Erstsprache sein.'});
    return `<main id="main-content">${pageHero('assignments','씀')}<section class="section"><div class="container assignment-layout"><div class="assignment-list"><div class="panel-head"><h2>${safe(loc.pages.assignments[2])}</h2><span class="tag">${titles.length} open</span></div>${titles.map((x,i)=>`<article class="assignment-item"><span class="eyebrow">${['Speaking','Role-play','Writing'][i]}</span><h3>${safe(x)}</h3><p>${safe(desc)}</p><div class="assignment-status"><span class="status"><span class="dot" style="background:${i===0?'#e64a32':'#58a87f'}"></span>${safe(loc.common.due)} ${['Oct 12','Oct 19','Oct 28'][i]}</span><span class="tag">${[20,30,40][i]} pts</span></div></article>`).join('')}</div><form class="submission-panel" id="assignment-form"><div class="panel-head"><h2>${safe(loc.common.submit)}</h2>${saved.length?`<span class="tag">${saved.length} saved</span>`:''}</div><div class="form-group"><label>${safe(loc.pages.assignments[0])}</label><select class="input" name="assignment" required>${titles.map(x=>`<option>${safe(x)}</option>`).join('')}</select></div><div class="form-group"><label>Name</label><input class="input" name="name" required placeholder="Your name"/></div><div class="form-group"><label>Note</label><textarea class="input" name="note" placeholder="A short note for your teacher"></textarea></div><div class="form-group"><label>File</label><div class="upload-zone"><input id="assignment-file" name="file" type="file" required accept=".pdf,.doc,.docx,.mp3,.mp4,.m4a,.wav"/><strong id="upload-label">Choose a file or drop it here</strong><small>PDF, DOCX, MP3, MP4 · max 50 MB in production</small></div></div><button class="btn btn-red btn-wide" type="submit">${safe(loc.common.submit)} →</button><p class="micro" style="margin-top:13px">Prototype note: only file metadata is stored locally in this demo.</p></form></div></section></main>`;
  }

  function culturePage() {
    const loc=locale(), titles=CONTENT.cultureTitles[state.lang];
    const desc=l({en:'A short field guide to the values and everyday practices that give Korean expressions their meaning.',ko:'한국어 표현에 의미를 더하는 가치와 일상 관습을 살펴보는 짧은 안내서입니다.',si:'කොරියානු ප්‍රකාශනවලට අර්ථය දෙන වටිනාකම් සහ දෛනික සිරිත් ගැන කෙටි මාර්ගෝපදේශයකි.',vi:'Hướng dẫn ngắn về giá trị và thực hành hằng ngày tạo nghĩa cho cách diễn đạt Hàn Quốc.',ne:'कोरियन अभिव्यक्तिलाई अर्थ दिने मूल्य र दैनिक अभ्यासको छोटो मार्गदर्शिका।',hi:'कोरियाई अभिव्यक्तियों को अर्थ देने वाले मूल्यों और दैनिक व्यवहार की छोटी मार्गदर्शिका।',zh:'介绍赋予韩语表达以意义的价值观和日常实践。',ja:'韓国語表現に意味を与える価値観と日常習慣の短いガイド。',es:'Breve guía de valores y prácticas cotidianas que dan sentido al coreano.',de:'Ein kurzer Wegweiser zu Werten und Alltagspraxis hinter koreanischen Ausdrücken.'});
    return `<main id="main-content">${pageHero('culture','삶')}<section class="section"><div class="container"><div class="story-grid"><article class="story-card"><div class="story-card-art">안녕</div><div class="story-copy"><span class="eyebrow">Greeting × relationship</span><h3>${safe(titles[0])}</h3><p>${safe(desc)}</p></div></article><div class="story-stack"><article class="story-card small"><div class="story-card-art" style="font-size:5rem;background:radial-gradient(circle at 70% 30%,#695131,var(--ink))">밥</div><div class="story-copy"><h3>${safe(titles[1])}</h3><p>${safe(desc)}</p></div></article><article class="story-card small"><div class="story-card-art" style="font-size:5rem;background:radial-gradient(circle at 40% 35%,#653729,var(--ink))">존중</div><div class="story-copy"><h3>${safe(titles[2])}</h3><p>${safe(desc)}</p></div></article></div></div></div></section>
      <section class="section research-band"><div class="container"><div class="section-heading"><div><p class="kicker">Culture in language</p><h2 class="h2">Read the room, not only the words.</h2></div><p class="lead">We teach culture as changing, diverse and contextual—not as a list of fixed rules.</p></div><div class="value-grid"><div class="value-card"><strong>01</strong><h3>Observe</h3><p>Notice who is speaking, where, and with what relationship.</p></div><div class="value-card"><strong>02</strong><h3>Ask</h3><p>Replace stereotypes with curiosity and specific questions.</p></div><div class="value-card"><strong>03</strong><h3>Adapt</h3><p>Choose language that fits the person, place and purpose.</p></div></div></div></section>${homeCta()}</main>`;
  }

  function aboutPage() {
    const loc=locale();
    const values=l({en:[['Evidence before assumption','We test what helps instead of repeating inherited teaching habits.'],['Access through language','A learner’s first language is a resource—not a problem to erase.'],['Culture without stereotypes','We teach context, change and diversity with intellectual honesty.']],ko:[['가정보다 근거','오래된 습관을 반복하기보다 실제로 도움이 되는지 검증합니다.'],['언어를 통한 접근','학습자의 모어는 없애야 할 문제가 아니라 자원입니다.'],['고정관념 없는 문화','맥락, 변화, 다양성을 정직하게 가르칩니다.']],si:[['අනුමානයට පෙර සාක්ෂි','පැරණි පුරුදු නැවත කියා නොදී සැබවින්ම උපකාරී දේ පරීක්ෂා කරමු.'],['භාෂාවෙන් ප්‍රවේශය','ශිෂ්‍යයාගේ මව්භාෂාව මකා දැමිය යුතු ගැටලුවක් නොව සම්පතකි.'],['ස්ටීරියෝටයිප් නැති සංස්කෘතිය','සන්දර්භය, වෙනස්වීම සහ විවිධත්වය අවංකව උගන්වමු.']]});
    const v=values||[[loc.insights[0][0],loc.insights[0][1]],[loc.insights[1][0],loc.insights[1][1]],[loc.insights[2][0],loc.insights[2][1]]];
    return `<main id="main-content">${pageHero('about','언')}<section class="section"><div class="container"><div class="manifesto"><q>Language is not a barrier to cross. It is the bridge we build together.</q><p>${safe(loc.footer[0])}</p></div></div></section><section class="section-sm"><div class="container"><div class="section-heading"><div><p class="kicker">Our principles</p><h2 class="h2">Rigorous. Open. Human.</h2></div></div><div class="value-grid">${v.map((x,i)=>`<article class="value-card"><strong>0${i+1}</strong><h3>${safe(x[0])}</h3><p>${safe(x[1])}</p></article>`).join('')}</div></div></section>
      <section class="section research-band"><div class="container contact-grid"><div><p class="kicker">${safe(loc.common.contact)}</p><h2 class="h2">Start a conversation.</h2><p class="lead">For course partnerships, research collaboration, translation review or learner support.</p><div class="contact-details"><div class="contact-detail"><span>Email</span><b>hello@eoneolab.org</b></div><div class="contact-detail"><span>Research</span><b>research@eoneolab.org</b></div><div class="contact-detail"><span>Regions</span><b>Seoul · Colombo · Global online</b></div></div></div><form class="contact-form" id="contact-form"><div class="form-row"><div class="form-group"><label>Name</label><input class="input" name="name" required/></div><div class="form-group"><label>Email</label><input class="input" type="email" name="email" required/></div></div><div class="form-group"><label>Topic</label><select class="input" name="topic"><option>Courses</option><option>Research collaboration</option><option>Translation review</option><option>Other</option></select></div><div class="form-group"><label>Message</label><textarea class="input" name="message" required></textarea></div><button class="btn btn-red" type="submit">${safe(loc.common.submit)} →</button></form></div></section></main>`;
  }

  function homeCta(){ const loc=locale(); return `<section class="section-sm"><div class="container"><div class="cta-block"><div><h2 class="h2">${safe(loc.home[10])}</h2><p>${safe(loc.home[11])}</p></div><a class="btn" href="#/quiz">${safe(loc.common.start)} →</a></div></div></section>`; }

  function loginModal(){
    if(state.modal!=='login') return '';
    const loc=locale();
    return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="login-title" data-modal-panel><button class="modal-close" data-action="close-modal">×</button><span class="eyebrow">Student + Institute portal</span><h2 id="login-title">${state.loggedIn?safe(loc.account):safe(loc.signIn)}</h2><p>Access courses, submissions and the institute content dashboard.</p>${state.loggedIn?`<div class="demo-note">Signed in as <b>${safe(state.loggedIn)}</b>. This session is stored only in your browser.</div><div class="hero-actions"><a class="btn btn-red" href="#/admin" data-action="close-modal">Open dashboard</a><button class="btn btn-light" data-action="logout">Sign out</button></div>`:`<div class="role-tabs"><button class="role-tab ${state.loginRole==='student'?'active':''}" data-login-role="student">Student</button><button class="role-tab ${state.loginRole==='admin'?'active':''}" data-login-role="admin">Institute admin</button></div><form id="login-form"><div class="form-group"><label>Email</label><input class="input" type="email" name="email" required value="${state.loginRole==='admin'?'admin@eoneolab.org':'student@example.com'}"/></div><div class="form-group"><label>Password</label><input class="input" type="password" name="password" required value="demo123"/></div><div class="demo-note"><b>Interactive prototype:</b> use the pre-filled demo credentials. A production build must use server-side authentication, encrypted sessions and role-based permissions.</div><button class="btn btn-red btn-wide" type="submit">${safe(loc.signIn)} →</button></form>`}</div></div>`;
  }

  function videoModal(){
    if(!String(state.modal).startsWith('video:')) return '';
    const i=Number(state.modal.split(':')[1]), title=CONTENT.videoTitles[state.lang][i]||CONTENT.videoTitles[state.lang][0];
    return `<div class="modal-backdrop" data-action="close-modal"><div class="modal wide" role="dialog" aria-modal="true" data-modal-panel><button class="modal-close" data-action="close-modal">×</button><span class="eyebrow">Captioned micro-lesson · ${[7,9,12,6,8,11][i]||7} min</span><h2>${safe(title)}</h2><div class="video-dialog-frame"><button class="pulse-play" data-action="simulate-play">▶</button></div><h3>${safe(locale().common.transcript)}</h3><div class="transcript"><b>선생님:</b> 안녕하세요. 오늘은 자연스러운 한국어 발음을 연습해 봅시다.<br><b>Teacher:</b> Hello. Today, let’s practise natural Korean pronunciation.<br><br><span class="micro">Caption and transcript controls are ready for a real hosted video source in production.</span></div></div></div>`;
  }

  function adminPage() {
    if(!state.loggedIn || !state.loggedIn.includes('admin')) {
      setTimeout(()=>{ state.modal='login'; state.loginRole='admin'; render(); },0);
      return `<main id="main-content">${pageHero('admin','관')}<section class="section"><div class="container empty-state">Admin authentication is required.</div></section></main>`;
    }
    const loc=locale();
    const submissions=JSON.parse(localStorage.getItem('eoneolab-submissions')||'[]');
    return `<div class="admin-shell"><header class="admin-top">${brand()}<div style="display:flex;gap:9px;align-items:center">${languagePicker('admin-lang-menu')}<a class="btn btn-light btn-sm" href="#/">View site</a><button class="btn btn-sm" data-action="logout">Sign out</button></div></header><main class="admin-main"><div class="admin-welcome"><div><span class="eyebrow">Friday · 2 October 2026</span><h1>${safe(loc.pages.admin[0])}</h1><p>${safe(loc.pages.admin[1])}</p></div><button class="btn btn-red" data-admin-tab="content">＋ New content</button></div><nav class="admin-nav">${[['overview','Overview'],['content','Content'],['students','Students & submissions'],['research','Research'],['settings','Settings']].map(x=>`<button class="${state.adminTab===x[0]?'active':''}" data-admin-tab="${x[0]}">${x[1]}</button>`).join('')}</nav>${adminTabContent(submissions)}</main></div>`;
  }

  function adminTabContent(submissions){
    if(state.adminTab==='overview') return `<div class="stat-grid">${[['Active learners','1,284','↑ 12% this month'],['Course completion','78%','↑ 4.2%'],['Learning resources','146','8 drafts'],['Interface languages','10','All active']].map(x=>`<div class="stat-card"><span>${x[0]}</span><strong>${x[1]}</strong><div class="stat-trend">${x[2]}</div></div>`).join('')}</div><div class="admin-grid"><section class="admin-panel"><div class="panel-head"><h2>Learning activity</h2><span class="tag">Last 7 days</span></div><div class="chart">${[43,61,54,78,68,90,74].map((h,i)=>`<div class="chart-bar" style="height:${h}%"><span>${['M','T','W','T','F','S','S'][i]}</span></div>`).join('')}</div></section><section class="admin-panel"><div class="panel-head"><h2>Recent activity</h2></div>${[['AS','Ayesha submitted an assignment','2 min ago'],['MN','Minh completed Korean 1A','18 min ago'],['KR','Research note published','1 hr ago'],['NP','New learner from Nepal','3 hrs ago']].map(x=>`<div class="activity-row"><span class="activity-avatar">${x[0]}</span><div><b>${x[1]}</b><span>Learning platform</span></div><time>${x[2]}</time></div>`).join('')}</section></div>`;
    if(state.adminTab==='content') {
      const custom=JSON.parse(localStorage.getItem('eoneolab-content')||'[]');
      return `<section class="admin-panel"><div class="panel-head"><h2>Create multilingual content</h2><span class="tag">Prototype CMS</span></div><form class="admin-form" id="content-form"><div class="form-group"><label>Content type</label><select class="input" name="type"><option>Video lesson</option><option>Class material</option><option>Research update</option><option>Culture article</option></select></div><div class="form-group"><label>Primary language</label><select class="input" name="language">${LANGS.map(x=>`<option value="${x.code}">${safe(x.native)}</option>`).join('')}</select></div><div class="form-group full"><label>Title</label><input class="input" name="title" required placeholder="Content title"/></div><div class="form-group full"><label>Summary</label><textarea class="input" name="summary" required placeholder="Short learner-friendly summary"></textarea></div><div class="form-group"><label>Status</label><select class="input" name="status"><option>Draft</option><option>Published</option></select></div><div class="form-group" style="display:flex;align-items:end"><button class="btn btn-red btn-wide" type="submit">Save content</button></div></form></section><section class="admin-panel" style="margin-top:16px"><div class="panel-head"><h2>Content library</h2><span class="tag">${custom.length+4} items</span></div><div class="table-scroll"><table class="content-table"><thead><tr><th>Title</th><th>Type</th><th>Language</th><th>Status</th><th>Updated</th></tr></thead><tbody>${custom.map(x=>`<tr><td>${safe(x.title)}</td><td>${safe(x.type)}</td><td>${safe(x.language)}</td><td><span class="tag">${safe(x.status)}</span></td><td>${safe(x.date)}</td></tr>`).join('')}${[['Batchim without fear','Video lesson','English + 9','Published'],['한글 소리 지도','Class material','Korean','Published'],['Workplace language study','Research update','English','Draft'],['식탁이라는 언어','Culture article','Korean','Published']].map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td><td><span class="tag">${x[3]}</span></td><td>2 Oct 2026</td></tr>`).join('')}</tbody></table></div></section>`;
    }
    if(state.adminTab==='students') return `<section class="admin-panel"><div class="panel-head"><h2>Student submissions</h2><span class="tag">${submissions.length} local demo submissions</span></div><div class="table-scroll"><table class="content-table"><thead><tr><th>Student</th><th>Assignment</th><th>File</th><th>Submitted</th><th>Status</th></tr></thead><tbody>${submissions.length?submissions.map(x=>`<tr><td>${safe(x.name)}</td><td>${safe(x.assignment)}</td><td>${safe(x.file)}</td><td>${safe(x.date)}</td><td><span class="tag">Needs review</span></td></tr>`).join(''):`<tr><td colspan="5">No local submissions yet. Try the Assignments page.</td></tr>`}</tbody></table></div></section>`;
    if(state.adminTab==='research') return `<div class="admin-grid"><section class="admin-panel"><div class="panel-head"><h2>Research pipeline</h2><button class="btn btn-light btn-sm">＋ Add study</button></div>${[['Korean–Sinhala particle transfer','Data collection','68%'],['Workplace safety language corpus','Analysis','45%'],['Multilingual caption comprehension','Pilot','24%'],['TOPIK writing feedback study','Design','12%']].map(x=>`<div class="activity-row"><span class="activity-avatar">${x[2]}</span><div><b>${x[0]}</b><span>${x[1]}</span></div><time>2026</time></div>`).join('')}</section><section class="admin-panel"><div class="panel-head"><h2>Research ethics</h2></div><p class="micro">Consent templates, anonymisation checks and multilingual participant information should be completed before every study.</p><div class="source-note" style="margin-top:18px">No participant data is stored in this front-end prototype.</div></section></div>`;
    return `<div class="settings-grid">${[['Multilingual publishing','Require one language reviewer before publishing.',true],['Student email alerts','Send assignment and feedback reminders.',true],['Public research index','Show approved projects on the public site.',true],['Open registration','Allow new students to create accounts.',false]].map((x,i)=>`<div class="setting-card"><h3>${x[0]}</h3><p>${x[1]}</p><button class="switch ${x[2]?'on':''}" data-setting="${i}" aria-label="Toggle ${x[0]}"></button></div>`).join('')}</div>`;
  }

  function shell(content){ return `${header()}${content}${footer()}${loginModal()}${videoModal()}`; }

  function render() {
    document.documentElement.lang=state.lang;
    document.body.classList.toggle('no-scroll', !!state.modal || state.menuOpen);
    const route=currentRoute();
    const pages={home:homePage, programs:programsPage, research:researchPage, courses:coursesPage, videos:videosPage, materials:materialsPage, quiz:quizPage, assignments:assignmentsPage, culture:culturePage, about:aboutPage};
    const app=document.getElementById('app');
    if(route==='admin' && state.loggedIn && state.loggedIn.includes('admin')) app.innerHTML=adminPage()+loginModal();
    else app.innerHTML=shell((pages[route]||homePage)());
    bindForms();
  }

  function toast(message,type='success') {
    const el=document.createElement('div'); el.className=`toast ${type}`; el.textContent=message;
    document.getElementById('toast-region').appendChild(el); setTimeout(()=>el.remove(),3400);
  }

  document.addEventListener('click', e=>{
    const panel=e.target.closest('[data-modal-panel]');
    let actionEl=e.target.closest('[data-action]');
    // A click inside a dialog must not inherit the backdrop's close action.
    if(panel && actionEl?.classList.contains('modal-backdrop')) actionEl=null;
    const action=actionEl?.dataset.action;
    if(action==='toggle-language'){ state.langOpen=!state.langOpen; render(); return; }
    if(action==='toggle-menu'){ state.menuOpen=!state.menuOpen; render(); return; }
    if(action==='open-login'){ state.modal='login'; state.menuOpen=false; render(); return; }
    if(action==='close-modal'){ state.modal=null; render(); return; }
    if(action==='logout'){ localStorage.removeItem('eoneolab-session'); state.loggedIn=''; state.modal=null; if(currentRoute()==='admin') location.hash='#/'; else render(); toast('Signed out.'); return; }
    if(action==='course-interest'){ toast(`${e.target.closest('[data-title]').dataset.title} — interest saved in this demo.`); return; }
    if(action==='quiz-start'){ state.quiz={started:true,index:0,answers:[],complete:false}; render(); return; }
    if(action==='quiz-back'){ if(state.quiz.index>0) state.quiz.index--; render(); return; }
    if(action==='quiz-next'){ if(state.quiz.answers[state.quiz.index]===undefined) return; if(state.quiz.index===QUIZ.length-1) state.quiz.complete=true; else state.quiz.index++; render(); return; }
    if(action==='quiz-retry'){ state.quiz={started:true,index:0,answers:[],complete:false}; render(); return; }
    if(action==='simulate-play'){ e.target.textContent='❚❚'; toast('Playback simulated. Connect your video host or LMS in production.'); return; }
    const lang=e.target.closest('[data-language]')?.dataset.language;
    if(lang){ state.lang=lang; state.langOpen=false; localStorage.setItem('eoneolab-lang',lang); render(); return; }
    const role=e.target.closest('[data-login-role]')?.dataset.loginRole;
    if(role){ state.loginRole=role; render(); return; }
    const option=e.target.closest('[data-quiz-option]')?.dataset.quizOption;
    if(option!==undefined){ state.quiz.answers[state.quiz.index]=Number(option); render(); return; }
    const vf=e.target.closest('[data-video-filter]')?.dataset.videoFilter;
    if(vf){ state.videoFilter=vf; render(); return; }
    const cf=e.target.closest('[data-course-filter]')?.dataset.courseFilter;
    if(cf){ state.courseFilter=cf; render(); return; }
    const vid=e.target.closest('[data-video]')?.dataset.video;
    if(vid!==undefined){ state.modal=`video:${vid}`; render(); return; }
    const dl=e.target.closest('[data-download]')?.dataset.download;
    if(dl!==undefined){ downloadMaterial(Number(dl)); return; }
    const at=e.target.closest('[data-admin-tab]')?.dataset.adminTab;
    if(at){ state.adminTab=at; render(); return; }
    const sw=e.target.closest('.switch'); if(sw){ sw.classList.toggle('on'); toast('Setting updated locally.'); }
  });

  document.addEventListener('change', e=>{
    if(e.target.name==='material-level'){ state.materialFilter=e.target.value; render(); }
    if(e.target.id==='assignment-file'){ document.getElementById('upload-label').textContent=e.target.files[0]?.name||'Choose a file or drop it here'; }
  });
  document.addEventListener('input', e=>{
    if(e.target.id==='course-search') filterCards('#course-grid .course-card',e.target.value);
    if(e.target.id==='material-search') filterCards('#material-list .material-item',e.target.value);
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&(state.modal||state.menuOpen)){ state.modal=null; state.menuOpen=false; state.langOpen=false; render(); }
    if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('video-card')){ state.modal=`video:${e.target.dataset.video}`; render(); }
  });
  window.addEventListener('hashchange',()=>{ state.menuOpen=false; state.langOpen=false; state.modal=null; window.scrollTo(0,0); render(); });

  function filterCards(selector,query){
    const q=query.trim().toLowerCase(); document.querySelectorAll(selector).forEach(el=>{ el.style.display=(el.dataset.search||el.textContent.toLowerCase()).includes(q)?'':'none'; });
  }
  function downloadMaterial(i){
    const title=CONTENT.materialTitles[state.lang][i];
    const text=`언어랩 — ${title}\n\nPrototype learning material\nLanguage: ${state.lang}\nLevel: ${['A0','A1','A1','A2','B2','C1'][i]}\n\nThis downloadable sample demonstrates the material-library workflow. Connect approved PDF/DOCX files and secure student permissions in production.\n\n© 2026 언어랩`;
    const blob=new Blob([text],{type:'text/plain;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`eoneolab-${i+1}-${state.lang}.txt`; a.click(); URL.revokeObjectURL(url); toast('Sample material downloaded.');
  }

  function bindForms(){
    const login=document.getElementById('login-form'); if(login) login.addEventListener('submit',e=>{ e.preventDefault(); const data=new FormData(login); const email=String(data.get('email')); state.loggedIn=state.loginRole==='admin'?`admin:${email}`:`student:${email}`; localStorage.setItem('eoneolab-session',state.loggedIn); state.modal=null; toast('Signed in successfully.'); if(state.loginRole==='admin') location.hash='#/admin'; else render(); });
    const assignment=document.getElementById('assignment-form'); if(assignment) assignment.addEventListener('submit',e=>{ e.preventDefault(); const data=new FormData(assignment); const file=e.target.querySelector('[name=file]').files[0]; const rows=JSON.parse(localStorage.getItem('eoneolab-submissions')||'[]'); rows.unshift({assignment:data.get('assignment'),name:data.get('name'),note:data.get('note'),file:file?.name||'file',date:new Date().toLocaleDateString()}); localStorage.setItem('eoneolab-submissions',JSON.stringify(rows)); toast('Assignment submitted in this prototype.'); render(); });
    const contact=document.getElementById('contact-form'); if(contact) contact.addEventListener('submit',e=>{e.preventDefault(); toast('Message received in this prototype.'); e.target.reset();});
    const content=document.getElementById('content-form'); if(content) content.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(content);const rows=JSON.parse(localStorage.getItem('eoneolab-content')||'[]');rows.unshift({type:d.get('type'),language:d.get('language'),title:d.get('title'),summary:d.get('summary'),status:d.get('status'),date:'2 Oct 2026'});localStorage.setItem('eoneolab-content',JSON.stringify(rows));toast('Content saved locally.');render();});
  }

  render();
})();
