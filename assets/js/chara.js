let current_chara_index = 0
let current_chara_area = 'yasha'
let current_chara_diagram_modal_index = 0
const IMG_DIR = "assets/images/top/chara"
const VOICE_DIR = "assets/voices/top/chara"
const MAX_DIAFRAM_INDEX = 9

/***
 * 
 * 캐릭터 이미지 폴더 격납 규칙
 *  
 * 아래 규칙으로 이미지를 취득했습니다.
 * PC이미지 : /assets/images/top/chara/국명/파일명
 * SP이미지: /assets/images/top/chara/국가명/sp/sp_{PC이미지의 파일명}
 * ※ SP의 이미지는 PC이미지의 파일명에 sp_프리픽스를 붙이는 형식으로 부탁드립니다.
 * 
 * 캐릭터를 업데이트 하고 싶은 경우
 * CHARA_INFO오브젝트에 정보를 추가하시면 html를 수정하지 않고 반영됩니다
 * 이미지에 대해서는, 상기의 화상 폴더에 격납하고, 파일명을 CHARA_INFO 오브젝트에 기재해 주세요.
 * 
 ***/
let CHARA_INFO = {
  yasha: {
    bg: 'Home4CharacterBg1.jpg',
    diagram: 'Diagram1.png',
    diagram_btn: 'diagrambtn_yasha.png',
    chara: [
      {
        index: 0,
        select_img: 'yasha_nurikabe_thumb.png',
        main_img: `yasha_nurikabe.png`,
        roll_img: `yasha_nurikabe_`,
        chara_sub_img: 'CharacterInfo_img.png',
        chara_name: 'yasha_nurikabe_name.png',
        voice: 'yasha_nurikabe.mp3',
        cv: '미나세 이노리',
        title: '「당신을 반드시 지키기로 했어!」타키야샤히메의 시중 담당​',
        detail: '누리카베 일족에서 태어나 자랐다. 부모를 일찍 여의고 조부모님의 손에 오냐오냐 자랐다​.<br><br>타키야샤히메를 필두로 자유분방한 수많은 요괴 속에서 얌전하고 남을 잘 챙긴다는 이유로 다른 이들에게 잘 휘둘린다.<br><br>요리도 잘하고 씩씩하고 배려심 넘치고 안 보이는 곳에서 늘 노력하는 그녀는 없어서는 안 될 존재<br><br>좌우의 「돌벽」은 자유롭게 꺼내고 넣을 수 있다.<br><br>​익숙하지 않은 탓인지 돌벽이 너무 무거워 균형을 잃고 넘어지기도 한다.'
      },
      {
        index: 1,
        select_img: 'yasha_izuna_thumb.png',
        main_img: 'yasha_izuna.png',
        roll_img: `yasha_izuna_`,
        chara_name: 'yasha_izuna_name.png',
        voice: 'yasha_izuna.mp3',
        cv: '히가사 요코',
        title: '​「목숨 바쳐 지켜 드리겠어요!」',
        detail: '타키야샤히메 저택의 수호자이자 동시에 공격의 중심이기도 하다​.<br><br>본인 키만한 태도를 뜻대로 휘두르는 힘,<br>그리고 재빠른 몸놀림으로<br>적에게 접근하는 전투력은 아주 빼어나다​.<br><br>너무 강직한 성격 탓에<br><br>약점을 찔러오는 적에게는 취약하지만 함께하는 쿠다가 주의하는 것으로 보완하고 있다.'
      },
      {
        index: 2,
        select_img: 'yasha_konakijii_thumb.png',
        main_img: 'yasha_konakijii.png',
        chara_name: 'yasha_konakijii_name.png',
        voice: 'yasha_konakijii.mp3',
        cv: '하나에 나츠키',
        title: '「자─알 들어라! 내 이름은 우는 아이도 입을 다무는 코나키지지」',
        detail: '사카이국에서 자랐지만<br>사정이 있어 타키야샤히메의 힘을 꼭 빌려야 해<br>야샤국에 왔다​.<br><br>현재는 타키야샤히메의 저택에서 호위와 잡일 등을 하고 있다​.<br><br>성실하게 일하는데, 전부 다 사카이국에서 기른 처세술 덕이 틀림없다.<br>​멋있게 보이고 싶어 하는데 마무리가 어설퍼<br>다른 사람들이 그 점을 지적하면 곧잘 울음을 터뜨린다.<br>결과적으로(주로 놋페라보에게) 놀림당하기를 반복'
      },
      {
        index: 3,
        select_img: 'yasha_nopperabou_thumb.png',
        main_img: 'yasha_nopperabou.png',
        chara_name: 'yasha_nopperabou_name.png',
        voice: 'yasha_nopperabou.mp3',
        cv: '하나자와 카나',
        title: '「흐흥. 당신, 내 장난의 제자가 되지 않을래?」',
        detail: '타키야샤히메의 제일가는 신하(자칭)<br><br>주로 정보 수집과 수색 등 닌자로서 암약하고 있다​.<br><br>독설가에다 무뚝뚝하다.<br>그리고 사소한 거짓말과 장난을 좋아한다.<br><br>기본적으로 무표정하며 가면으로 얼굴 일부를 늘 가리고 있다​.<br><br>얼굴 전체를 보이게 되면<br>반드시 결혼해야 하는 관습이 있다​.<br><br>코나키지지는 금방 울기 때문에 가장 장난을 많이 치는 대상이다.'
      },
      {
        index: 4,
        select_img: 'yasha_kurda_thumb.png',
        main_img: 'yasha_kurda.png',
        chara_name: 'yasha_kurda_name.png',
        voice: 'yasha_kurda.mp3',
        cv: '후쿠야마 쥰',
        title: '「‘어이 이즈나 조금은 진정하라고, 보고있는 내가 다 어지럽네‘」',
        detail: '쿠다는 이즈나의 보조자이면서 감시자역할이기도 하다​.<br><br>이즈나가 사카이국에 갈 때 텐코로부터 명을 받고<br><br>그 이후로 행동을 함께하고 있다.'
      },
      {
        index: 5,
        select_img: 'yasha_takiyashahime_thumb.png',
        main_img: 'yasha_takiyashahime.png',
        chara_name: 'yasha_takiyashahime_name.png',
        voice: 'yasha_takiyashahime.mp3',
        cv: 'Lynn',
        title: '「마침 잘 왔어! 흐흥, 좀 재밌는 생각이 떠올랐거든」',
        detail: '​즐거운 것을 아주 좋아하고 호기심이 왕성하다.<br>정무는 시시하다고 하면서<br>신하의 눈을 피해 변장하고 거리에 나간다​.<br>「이 몸이 어떻게든 해 주마!」​그러면서 온갖 문제를 해결하고 다닌다.<br>두려워하고 경배하기보다는<br>사모하고 의지하게 되는 사람이다.<br>그리고 남들의 애를 먹인다​.<br>천 년도 더 예전에<br>사츠키히메였던 시절, 아버지 마사카도와 함께 싸우지 못했던<br>무력한 자신에 대한 후회가 지금도 가시지 않는다​.' 
      },
      {
        index: 6,
        select_img: 'yasha_zashikiwarashi_thumb.png',
        main_img: 'yasha_zashikiwarashi.png',
        chara_name: 'yasha_zashikiwarashi_name.png',
        voice: 'yasha_zashikiwarashi.mp3',
        cv: '오오모리 니치카',
        title: '「살이 있다는 것 만으로도 훌륭해」',
        detail: '자시키와라시가 살았던 집에는 행운이 찾아온다는 그런 정설이 있다.<br><br>실제로 그 정설은 사실과는 조금 다른데,<br>자시키와라시의 능력에 의해 자동적으로 행운이 찾아오는 게 아니라​<br>자시키와라시를 살게 해준 사람들에게 뒤에서 몰래 자력으로 은혜를 갚고 있는 것 뿐이다.<br><br>그럼에도 불구하고 누구나 "좀 더 행운을" 달라며 원한다.<br>자시키와라시는 그 때마다 모습을 감출 수밖에 없었다​.<br>‘행운을 주는 것‘을 계속 요구 받다보니<br>‘나는 아무것도 못해‘ 라고 주장하는 듯한 성격이 되어버렸다​.<br>처음에는 절반즘 연기였지만 지금은 제법 익숙해져버렸다.<br>타키야사의 저택에서 살고있다.<br><br>명목상 운가이쿄의 돌보미 역할이지만 곁에서 보기엔 아무것도 안하고 있다.' 
      },
      {
        index: 7,
        select_img: 'yasha_ungaikyo_thumb.png',
        main_img: 'yasha_ungaikyo.png',
        chara_name: 'yasha_ungaikyo_name.png',
        voice: 'yasha_ungaikyo.mp3',
        cv: '와키 아즈미',
        title: '「너무 칭찬하는걸~♡ 누나가 다 해주고 싶어지잖아 ♡」',
        detail: '야샤국의 요괴들 중 실은 제법 고참이며 타키야사히메와도 오래 알고 지낸 사이<br><br>때문에 타키야샤히메의 과거도 어느정도 파악하고 있으며<br>그녀의 저택에 사는 대신 자신의 능력을 빌려주고 있다.<br><br>미용과 건강에 신경을 많이 쓰지만 어딘가 나사가 빠진 안타까운 아가씨<br>누가 뭐라 할 지언정 나는 소녀. 그래 이 나라에서도 최고참 요괴소녀, 소녀.<br>힘이 있는 요괴인 만큼 자신감이 넘치는 부분도 있지만<br>강하게 밀어부쳐오는 스타일엔 약하다. 쉬운 여자<br>마구 칭찬하면 여러가지 부탁을 들어준다.<br><br>평소에는 밝은 누나지만 그러한 점들이 약간 모자라게 느껴진다​.'
      },
      {
        index: 8,
        select_img: 'yasha_azukiarai_thumb.png',
        main_img: 'yasha_azukiarai.png',
        chara_name: 'yasha_azukiarai_name.png',
        voice: 'yasha_azukiarai.mp3',
        cv: '센토치히로・칫치',
        title: '「맛있어~! 내 팥 한번 먹어 봐!」',
        detail: '맛있는 팥을<br>많은 사람에게 먹여 주고 기쁘게 해 주는 것이 삶의 보람이며<br>팥을 맛있게 먹는 법을 매일 추구하고 있다.<br><br>요즘에는 인간계에서 흘러들어 온<br>카레 스파이스를 열심히 연구 중이며<br>팥 카레를 개발하여<br>자시키와라시와 쿠라봇코에게 억지로 시식을 시킨다고 한다.'
      },
      {
        index: 9,
        select_img: 'yasha_kurabokko_thumb.png',
        main_img: 'yasha_kurabokko.png',
        chara_name: 'yasha_kurabokko_name.png',
        voice: 'yasha_kurabokko.mp3',
        cv: '아유니・D',
        title: '「있잖아, 있잖아. 내 컬렉션에 대해서 얘기해도 돼~?」',
        detail: '​소극적이고 부끄러움이 많다<br>잡동사니로만 보이는 특이한 "보물"을 모으는 게 취미이며 보물 얘기만 나오면 달변이 된다.<br>노래 부르는 것도 매우 좋아해서<br>완벽히 방음이 된 창고 안에서 몰래 연습한다고 하는데 부끄럼쟁이라서 남들 앞에서 피로한 적은 없다.<br>​자시키와라시, 아즈키아라이와 친하다.'
      },
    ]
  },
  sangoku: {
    bg: 'Home4CharacterBg2.jpg',
    diagram: 'Diagram2.png',
    diagram_btn: 'diagrambtn_sangaku.png',
    chara: [
      {
        index: 0,
        select_img: 'sangaku_jami_thumb.png',
        main_img: 'sangaku_jami.png',
        chara_name: 'sangaku_jami_name.png',
        voice: 'sangaku_jami.mp3',
        cv: '유우키 아오이',
        title: '「자, 가자, 마미. 나한테서 떨어지지 말렴」',
        detail: '동생 마미와 함께​<br>산가쿠국의 실질적 지배자로서 군림한다.<br><br>비할 데 없이 강력한 주술을 사용하며<br>사용만 했다 하면 적 대부분은 쉽게 전멸시킬 수 있다.<br><br>나라의 운영에도 권력에도 그다지 관심은 없다.<br>통치하는 산가쿠국에 대해서도<br>자신과 마미가 영겁의 세월 동안 함께하기 위한 장소 정도로만 인식하고 있다.<br><br>마미와 단둘이<br>평온하고 자유롭게 살 수 있는 곳이라면<br>그게 산가쿠국일 필요는 없다고도 생각한다.' 
      },
      {
        index: 1,
        select_img: 'sangaku_mami_thumb.png',
        main_img: 'sangaku_mami.png',
        chara_name: 'sangaku_mami_name.png',
        voice: 'sangaku_mami.mp3',
        cv: '타케타츠 아야나',
        title: '「방해하는 녀석은 없앨 거야, 한 마리도 남김 없이」',
        detail: '언니인 쟈미와 함께<br>산가쿠국의 실질적 지배자로서 군림한다.<br><br>단<br>마미는 보좌 역의 인상이 강하다.<br><br>언니와 함께 영겁을 살아가는 것이 그녀의 바람이다.<br><br>두 사람의 영원을 침해하는 자에 대해서는<br>압도적인 광기와 잔인함으로 대항한다.'
      },
      {
        index: 2,
        select_img: 'sangaku_satori_thumb.png',
        main_img: 'sangaku_satori.png',
        chara_name: 'sangaku_satori_name.png',
        voice: 'sangaku_satori.mp3',
        cv: '타카하시 리에',
        title: '「마음을 읽어 봤자 좋은 일은 없어…」',
        detail: '산속에 숨어 살며<br>죽은 듯이 지내고 있다.<br><br>요주인 쟈미와 마미를 비롯해<br>사토리의 능력과 거처를 아는 사람은 몇 명 존재하지만<br>사토리가 적극적인 관계를 거절하기 때문에<br>교류는 최소한에 그치고 있다.<br><br>독심 능력을 사용하려면<br>상응하는 대상을 지불해야 하므로<br>강한 자가 힘으로 능력을 사용하게 할까 두려워한다.'
      },
      {
        index: 3,
        select_img: 'sangaku_amanojaku_thumb.png',
        main_img: 'sangaku_amanojaku.png',
        chara_name: 'sangaku_amanojaku_name.png',
        voice: 'sangaku_amanojaku.mp3',
        cv: '코마츠 미카코',
        title: '「나를 믿을지 말지는 네게 달렸어!」',
        detail: '생각한 것과 반대로 말하는 비뚤어진 사람<br><br>산가쿠국에서 제멋대로 살고 있다.<br><br>일단<br>산속에 스러져 가는 집이 있기는 한데<br>휘적휘적 온 나라를 떠돌기 때문에<br>부재중일 때가 많다.<br><br>많은 자가 그녀를 꺼리는데<br>본인의 전투 능력은 높지 않아서<br>악행을 저지른 끝에 추격자에게 쫓기며 도망 다닐 때도 많다.​'
      },
      {
        index: 4,
        select_img: 'sangaku_hihi_thumb.png',
        main_img: 'sangaku_hihi.png',
        chara_name: 'sangaku_hihi_name.png',
        voice: 'sangaku_hihi.mp3',
        cv: '미야케 켄타',
        title: '「잘 왔다, 형제여! 오늘도 이 몸과 일대일로 승부를 겨뤄 보자!」',
        detail: '실질적으로는 쟈미와 마미의 부하<br>쟈미와 마미에게 2대1로 흠씬 두들겨 맞은 뒤<br>결과적으로 두 사람의 부하로 일하기로 됐다.<br><br>쟈미, 마미가 "단독으로는 당신이 제일 강해. 천하무적이지. 수많은 요괴를 통솔하는 백귀의 왕── 즉, 요괴의 왕이야“ 하고 띄워 주면서<br>"왕의 도량으로 우리 소원을 들어주길 바래"<br>하며 실질적으로 매일 명령을 내린다.<br><br>부탁을 들어주는 형태로 늘 명령을 받고 있어서<br>히히 본인은 자신이 두 사람의 부하 외의 무엇도 아니라는 걸 아직도 눈치채지 못했다.'
      },
    ]
  },
  oiran: {
    bg: 'Home4CharacterBg3.jpg',
    diagram: 'Diagram3.png',
    diagram_btn: 'diagrambtn_oiran.png',
    chara: [
      {
        index: 0,
        select_img: 'oiran_momiji_thumb.png',
        main_img: 'oiran_momiji.png',
        chara_name: 'oiran_momiji_name.png',
        voice: 'oiran_momiji.mp3',
        cv: '이토 시즈카',
        title: '「꽃이 나올지 오니가 나올지, 이 쿠레하와 놀아 보시지요」',
        detail: '제6 천마왕의 피를 이은 여자 오니<br>어머니를 일찍 여의고<br>철이 들었을 때는 고아나 다름없었기 때문에<br>쿠레하 본인은 자신의 출생을 모른다.<br>전 요주가 똑똑한 머리와 관찰력,<br>깊이를 알 수 없이 숨겨진 영압을 높이 사 젊어서 요주를 이어받게 됐다.<br>자신의 힘으로 일을 해결하려 하는 마음이 강하고<br>본성부터 매우 올곧은 성격<br><br>​남자도 여자도 가리지 않고<br>반한 상대에겐 충실히 하고 싶다는 마음이 있다.'
      },
      {
        index: 1,
        select_img: 'oiran_kejourou_thumb.png',
        main_img: 'oiran_kejourou.png',
        chara_name: 'oiran_kejourou_name.png',
        voice: 'oiran_kejourou.mp3',
        cv: '우치다 마아야',
        title: '「우후후♪ 여자의 머리카락엔 요기가 깃든답니다… 만져 보실래요?」',
        detail: '쿠레하를 보필하는 자로서 늘 곁에 함께 있다.<br><br>조르는 데도 능하고 어리광도 잘 부린다​.<br>혼자 있기보다는 누구랑 함께하고 싶은 성격<br>약삭빠른 면도 있지만<br>그것은 오이란으로서 잘해 보고자 하는 중에 몸에 밴 것이다.<br><br>두 언니를 잘 따르는 세 자매의 막내​'
      },
      {
        index: 2,
        select_img: 'oiran_jorougumo_thumb.png',
        main_img: 'oiran_jorougumo.png',
        chara_name: 'oiran_jorougumo_name.png',
        voice: 'oiran_jorougumo.mp3',
        cv: '타카모리 나츠미',
        title: '「즐거워 보이네♪ 나도 좀 신경 써 줘♪」',
        detail: '​쿠레하의 언니, 오이란 겸 쿠노이치<br>자유분방하게 행동하지만 임무에는 충실하다.<br><br>답답하게 생각하기보다는 먼저<br>관심 가는 상대에게 몸이 움직이고 마는 성격<br>너무 돌아다녀서 방랑 기질이 있다.<br><br>그 덕에 케조로가<br>"어디 갈 거면 한마디 하고 가세요!"<br>하고 늘 말한다.<br><br>또한 맘에 드는 자에게는 거미 요괴 특유의 매우 심한 집착 경향이 있는데, 이게 발동하면 다른 것이 눈에 들어오지 않게 된다.'
      },
      {
        index: 3,
        select_img: 'oiran_akaname_thumb.png',
        main_img: 'oiran_akaname.png',
        chara_name: 'oiran_akaname_name.png',
        voice: 'oiran_akaname.mp3',
        cv: '아카오 히카루',
        title: '「하아, 하아… 왠지 근사한 분위기가~」',
        detail: '오이란국에 있는 종업원<br>주로 청소를 하는 말단 직원<br>밝고 태연한 성격에<br>히노키탕의 청소를 더없이 사랑한다.<br>아침에 일어나 모든 방과 복도 청소하기<br>손님 방문 시에는 손님 세신하기<br>적이 나타나면 적 청소하기<br>몸에서 나오는 때는 삶의 증거라고도 생각한다.<br>빗자루는 어머니에게 선물 받은 것으로 아껴 쓰고 있다.<br>가끔 장식을 달기도 한다.<br><br>​격렬한 전투를 펼치고 돌아온 자의 때를 좋아하며<br>그런 세신을 상상하면 흥분을 감출 수 없게 된다.'
      },
      {
        index: 4,
        select_img: 'oiran_makuragaeshi_thumb.png',
        main_img: 'oiran_makuragaeshi.png',
        chara_name: 'oiran_makuragaeshi_name.png',
        voice: 'oiran_makuragaeshi.mp3',
        cv: '나가나와 마리아',
        title: '「아직은 NO!입니다.」',
        detail: '오이란국에 있는 종업원<br>주로 침소의 청소와 정리정돈을 하는 말단 직원<br><br>고지식해 보이는데 호기심은 왕성하다.<br>제 호기심을 깨달으면 숨기려고 하는데<br>주위 동료가 마쿠라가에시의 호기심을 눈치챈 뒤에 숨기기 때문에 매우 알기 쉬운 성격이다.<br><br>네, 아니오로 대답할 수 있는 질문이면<br>손에 든 "Yes No 베개"로 대답한다. 의무라고 생각한다.'
      },
      {
        index: 5,
        select_img: 'oiran_sazaeoni_thumb.png',
        main_img: 'oiran_sazaeoni.png',
        chara_name: 'oiran_sazaeoni_name.png',
        voice: 'oiran_sazaeoni.mp3',
        cv: '오오마츠 에미',
        title: '「오늘 밤의 제안은 받아들여 줄 거지?」',
        detail: '오이란국에 온 손님을 안내하는 사람<br>안목이 뛰어난 덕에 안내하는 중에 손님이 어떤 성격인지 파악해<br>오이란에게 정보를 넘기는 역할을 맡고 있다.<br>가게의 경호원이기도 해서<br>무술 숙련도는 상당히 높다.<br>아카나메, 마쿠라가에시와 동기로 셋 다 같은 방을 쓴다.<br>잘 때는 알몸으로 자서<br>마쿠라가에시를 은근슬쩍 곤란하게 한다.<br>아카나메도 사자에오니를 따라 하려고 해서<br>마쿠라가에시를 더 곤란하게 한다​.<br><br>마쿠라가에시도, 아카나메도<br>동생 같은 존재로 여긴다.'
      },
    ],
  },
  sakai: {
    bg: 'Home4CharacterBg4.jpg',
    diagram: 'Diagram4.png',
    diagram_btn: 'diagrambtn_sakai.png',
    chara: [
      {
        index: 0,
        select_img: 'sakai_inugamigyoubu_thumb.png',
        main_img: 'sakai_inugamigyoubu.png',
        chara_name: 'sakai_inugamigyoubu_name.png',
        voice: 'sakai_inugamigyoubu.mp3',
        cv: '코야스 타케히토',
        title: '「후우, 나랑 한잔하고 갈래? 대환영이야♪」',
        detail: '사카이국의 바깥세상을 통솔하는 정식 요주<br>가벼워 보이는 망나니로 보이지만<br>깊이를 알 수 없는 실력을 갖추었다.<br><br>좀처럼 싸우지 않지만 싸우면 강하다<br>전투할 때는<br>희귀한 물건을 수집할 때 손에 넣은<br>"리볼버"를 애용한다.<br>눈만 떼면 장난을 시작하는 귀여운 부하들의 뒤치다꺼리를 하면서<br>네코마타와 장래의 일을 상의하거나<br>나라에 새로 들어온 요괴를 찾아가기도 하는 등<br>바쁜 나날을 보내고 있다<br>'
      },
      {
        index: 1,
        select_img: 'sakai_tesso_thumb.png',
        main_img: 'sakai_tesso.png',
        chara_name: 'sakai_tesso_name.png',
        voice: 'sakai_tesso.mp3',
        cv: '이시카와 카이토',
        title: '「이런 이런, 놀래지 마세요. 실수로 죽여 버릴 뻔했거든요」',
        detail: '이누가미교부의 부하. 네코마타에 비견되는 간부<br>힘으로 해결하려는 슈노본과는 다르게<br>지혜를 사용하는 타입<br>뒤에서는 도리에 어긋나는 짓도 한다<br><br>인의 등은 없어서<br>더 효율적인 방법으로<br>제게 좋은 일을 하려고 한다<br><br>슈노본과는 항상 의견이 맞지 않아 서로 반발한다.'
      },
      {
        index: 2,
        select_img: 'sakai_nekomata_thumb.png',
        main_img: 'sakai_nekomata.png',
        chara_name: 'sakai_nekomata_name.png',
        voice: 'sakai_nekomata.mp3',
        cv: '키토 아카리',
        title: '「냥냥냥! 왠지 돈벌이 냄새가 난다냥~♪」',
        detail: '이누가미교부의 부하. 텟소에게 필적하는 간부<br><br>​네코마타의 목적은<br>사카이국을 더 발전시키는 것과<br>미소와 돈이 마구 넘치는 나라를 만드는 것이다<br><br>늘 웃는 얼굴이며 제 약점을 내비치지 않는다.<br>항상 웃고 있으면 마음이 풀어지기 쉬워<br>지갑 끈도 쉽게 풀리기 십상이다<br><br>하지만 그 이상으로<br>남들과 친해지고 싶다는 마음이 그녀의 가슴 깊이 더 크게 존재한다<br>남들과 이어지는 것도 즐겁다<br>돈이 느는 것도 즐겁다<br><br>그녀가 늘 웃는 것은<br>실은 신기한 일이 아니었다.'
      },
      {
        index: 3,
        select_img: 'sakai_ittanmomen_thumb.png',
        main_img: 'sakai_ittanmomen.png',
        chara_name: 'sakai_ittanmomen_name.png',
        voice: 'sakai_ittanmomen.mp3',
        cv: '타카다 유우키',
        title: '「와─! 잘 왔어!」',
        detail: '사카이국에서 포목점을 운영하고 있다<br>환요계 유일의 패션 디자이너​<br><br>네코마타 밑에서 일하는 거나 다름없는 위치지만<br>두 사람은 절친이지 주종 관계가 아니다<br>굳이 따지자면 협력 관계이며<br>성격이 다른 부분도 있지만<br>서로를 잘 돕고 있는 듯하다<br>마이페이스에 사소한 것을 신경 쓰지 않는 성격이다<br><br>기본적으로는<br>옷만 만들 수 있으면 그걸로 행복하다<br><br>단 음식을 좋아하고<br>쉬는 날엔 네코마타와 함께 달콤한 디저트를 파는 곳에 자주 간다.​'
      },
      {
        index: 4,
        select_img: 'sakai_nurarihyon_thumb.png',
        main_img: 'sakai_nurarihyon.png',
        chara_name: 'sakai_nurarihyon_name.png',
        voice: 'sakai_nurarihyon.mp3',
        cv: '스기타 토모카즈',
        title: '「자, 백귀야행에 나서 볼까」',
        detail: '사카이국의 무력을 통솔하는 숨겨진 우두머리이며<br>천 년 전에 백귀야행을 이끈 8대 요제 중 한 명<br><br>남들 앞에 모습을 드러내기를 싫어해 기본적으로는 저택에 틀어박혀 있다.<br>……그렇게 여겨지나 사실은 다르다<br>저택에 있는 척하고 마을을 산책하거나<br>멋대로 차를 마시고<br>과자를 먹고는 떠나 버린다<br>하지만 이것은<br>동시에 국내 사정을 조사하는 것으로<br>교활한 성격임을 엿볼 수 있다<br>그에게 아군인 뒷세계의 부하들은 가족이다<br><br>가족은 꼭 지키기로 했다.'
      },
      {
        index: 5,
        select_img: 'sakai_shunobon_thumb.png',
        main_img: 'sakai_shunobon.png',
        chara_name: 'sakai_shunobon_name.png',
        voice: 'sakai_shunobon.mp3',
        cv: '우치다 유마',
        title: '「네놈도 붉은 색으로 물들여 줄까?」',
        detail: '뒷세계의 우두머리인 대요제 누라리횬의 측근<br>차기 두목이자 오른팔<br><br>누라리횬이 모습을 별로 드러내지 않기 때문에<br>그 대행으로서 나설 때가 많다<br><br>「누라리횬에게 도움이 되고 싶다」<br><br>그 이상의 목적 같은 건 없으며<br>그 외의 목적은 슈노본에게 필요 없다<br><br>하지만<br>텟소를 흠씬 두들겨 패 주고 싶단 생각도 한다​.'
      },
      {
        index: 6,
        select_img: 'sakai_enenra_thumb.png',
        main_img: 'sakai_enenra.png',
        chara_name: 'sakai_enenra_name.png',
        voice: 'sakai_enenra.mp3',
        cv: '다카하시 미나미',
        title: '「후후, 빨아들이면 안 돼」',
        detail: '뒷세계의 우두머리인 누라리횬의 부하<br>연초에서 뿜어져 나온 연기 속에서 태어났다고 한다<br><br>첩보원으로 활동한다<br>평소에는 신참을 조사할 때가 많다<br><br>나라의 입구에 자주 있는 것은<br>어떤 요괴가 드나드는지 조사하기 위해서다<br><br>술과 연초를 좋아하는 그녀는<br>주점 등지에서 취한 듯 보여도 청각을 곤두세우고 있다.​'
      },
      {
        index: 7,
        select_img: 'sakai_ippondatara_thumb.png',
        main_img: 'sakai_ippondatara.png',
        chara_name: 'sakai_ippondatara_name.png',
        voice: 'sakai_ippondatara.mp3',
        cv: '파이루즈 아이',
        title: '「이야~호☆ 나 오늘 완전 멋있지 않아?」',
        detail: '실력은 확실하다<br>누라리횬과 이누가미교부가 보증했다<br>사카이국 전역에서 대장간을 하고 있으며<br>바깥세상과 뒷세계 양쪽에 연줄이 있는 특이한 요괴<br><br>사소한 것엔 신경 쓰지 않고<br>"큰일 났네~☆"<br>하고 웃으며 넘겨 버린다<br><br>자기가 다가가는 건 괜찮지만<br>상대가 성큼성큼 다가오는 데는 약하다<br><br>자기는 편하게 스킨십을 하지만<br>상대방이 모르는 사이에 자신의 어깨를 터치하거나 하면 놀라서 펄쩍 뛴다​'
      },
    ],
  },
  oni: {
    bg: 'Home4CharacterBg5.jpg',
    diagram: 'Diagram5.png',
    diagram_btn: 'diagrambtn_oni.png',
    chara: [
      {
        index: 0,
        select_img: 'oni_shutendouji_thumb.png',
        main_img: 'oni_shutendouji.png',
        chara_name: 'oni_shutendouji_name.png',
        voice: 'oni_shutendouji.mp3',
        cv: '오노 다이스케',
        title: '「봐주지 않겠다, 그것이 격식이다!」',
        detail: '오니국의 요주이자 제일 강한 존재<br>혈기왕성하고 지능이 부족한 오니들을 통솔한다<br>「의견은 자유롭게 말해라. 다만 정하는 건 나다<br>내 결정에 불만이 있다면 덤벼라<br>이기면 네놈이 법(룰)이 된다」 이런 말버릇이 있다<br>몇 번씩 도전하는 젊은이들을 모두 이겨 버리기 때문에<br>「슈텐도지에게는 못 당한다」고 오니국의 모두가 인정한다<br>그래도 포기하지 않고 도전하는 녀석을 몰래 인정하고 귀여워한다<br><br>지시는 늘 호쾌한데, 오니들이 이해할 수 있도록<br>알기 쉽게 말하기 때문이며​<br>실제로는 나름대로 머리를 굴려서 얘기하고 있다<br>인간 여성과 맺어져 그 여성과의 사이에 키도마루라는 아들이 있다<br><br>천 년 전의 전투에서는 오니 군을 이끌었다'
      },
      {
        index: 1,
        select_img: 'oni_kidoumaru_thumb.png',
        main_img: 'oni_kidoumaru.png',
        chara_name: 'oni_kidoumaru_name.png',
        voice: 'oni_kidoumaru.mp3',
        cv: '오노 켄쇼',
        title: '「오니의 피를 이어받아 태어난 이상. 내 모자란 힘을 한탄하게 되는군. 무심코 말이야」',
        detail: '오니와 인간 사이에서 태어난 반요<br>능력은 있지만 자신감이 생기지 않는 소년<br>제일 강한 존재인 아버지<br>슈텐도지의 실력을 따라잡고자 밤낮을 가리지 않고 노력 중이다<br>하지만 결과가 따르지 않아 초조해하고 있다<br>원래는 아버지보다도 총명하고 머리가 좋다<br>오니의 피는 옅어도 지식과 노력으로 어떻게든 싸우고는 있지만<br>「오니답지 않다」는 이유로 주위에선 별로 이해받지 못해 따르는 자도 없다<br>그런 키도마루는 힘이 전부인 오니국에서<br>자신의 자리를 만들지 못했다<br>반요이자 오니 기준으로(단순히 무력 면에서) 약한 키도마루는<br>자신이 원래 가진 전략성과 유연성,<br>성장성 등을 무기로 삼지 못하고<br>자기 자신을 「오니로서 약하다」고 생각하고 있다'
      },
      {
        index: 2,
        select_img: 'oni_ibarakidouji_thumb.png',
        main_img: 'oni_ibarakidouji.png',
        chara_name: 'oni_ibarakidouji_name.png',
        voice: 'oni_ibarakidouji.mp3',
        cv: '오자와 아리',
        title: '「슈텐도지 님께 접근하는 자는 내가 용서하지 않는다!」',
        detail: '오니국의 No.2이자 슈텐도지의 오른팔<br>옛날 옛날, 자신을 이길 수 있는 자가 아무도 없어<br>이바라키도지는 모르는 사이에 거만해지고 말았다<br>그러던 중, 저보다도 강한 오니가 있다는 소문을 듣고<br>슈텐도지에게 도전했는데 너무나 손쉽게 꺾여 버렸다<br>그때, 슈텐도지의 압도적인 힘에 절망보다는 경애를 느꼈다<br>연심보다는 동경에 가까운 감정<br>이분께 덤비는 건 얼토당토 않다<br>내가 해야 할 일은 이분 곁에서 이분을 보필하는 것이라는 결론을 내린다<br>슈텐도지에게 도움이 되고자 노력을 게을리하지 않는다<br>더 강해져서 더 도움을 드릴 수 있다면<br>슈텐도지 님도 나를 칭찬해 주실 거라고<br>늘 생각한다'
      },
      {
        index: 3,
        select_img: 'oni_suzukagozen_thumb.png',
        main_img: 'oni_suzukagozen.png',
        chara_name: 'oni_suzukagozen_name.png',
        voice: 'oni_suzukagozen.mp3',
        cv: '우에다 레이나',
        title: '「키도마루, 아직 더 강해질 수 있습니다. 저도, 당신도요」',
        detail: '​오니로서는 드물게 몸짓이나 행동에 기품이 있다<br>태연한 성격으로 제대로 된 상식을 갖추었다<br>그 때문에 엉뚱한 행동을 하는 이바라키도지나<br>귀찮은 일을 떠맡기는 슈텐도지에게 늘 휘둘린다<br>외모에 걸맞게 현명하고 까다로운 계산 등이 특기다<br>그 현명함으로 실질적인 정무를<br>거의 혼자서 해치우고 있으며 슈텐도지의 신뢰도 두텁다<br>이런 식으로 남을 잘 챙기다 보니 "누님"이라며 사모하는 오니도 많다<br>강한 실력이 곧 위대함을 뜻하는 오니국에서<br>슈텐도지, 이바라키도지에 이어 실력이 강한 삼인자이기도 하다<br>오니로서의 위력이나 내구력에는 별로 자신이 없어서<br>기교 위주로 싸워 그다지 오니답지는 않다<br>그래서 더욱 자신과 닮은 키도마루에게 공감하며 훈련을 도와주고 있다'
      },
    ],
  },
  jigoku: {
    bg: 'Home4CharacterBg9.jpg',
    diagram: 'Diagram9.png',
    diagram_btn: 'diagrambtn_jigoku.png',
    chara: [
      {
        index: 0,
        select_img: 'jigoku_enmaou_thumb.png',
        main_img: 'jigoku_enmaou.png',
        chara_name: 'jigoku_enmaou_name.png',
        voice: 'jigoku_enmaou.mp3',
        cv: '東山奈央',
        title: '「我は閻魔。我が問いにはすべて正直に応えよ、良いな」',
        detail: '亡者の行き先を判断する裁判官<br>生前の行いを浄玻璃鏡に映し出し、判別を言い渡す<br><br>裁判官という性質上、嘘をもっとも嫌う<br><br>犯罪者に慈悲などなく徹底的に追い詰めるが、<br>逆に正しきものには相応の態度で接する<br><br>他者に対して優しい言葉などをかけることは少ないものの、<br>部下たちのことをきちんと考え見守っている<br><br>これらが基本的な閻魔としての彼女<br><br>素でのコミュニケーション能力はゼロに等しく、<br>オフの時は基本無言<br><br>必要な台詞でも単語を一言二言しか発しない<br><br>たまにある休暇は一日中寝て過ごすため、<br>引きこもり体質に早変わり<br><br>仕事と食事以外に何かをする気力が湧いてこない'
      },
      {
        index: 1,
        select_img: 'jigoku_gozu_thumb.png',
        main_img: 'jigoku_gozu.png',
        chara_name: 'jigoku_gozu_name.png',
        voice: 'jigoku_gozu.mp3',
        cv: '伊東健人',
        title: '「地獄の門を叩くのは、どこのどいつだ？」',
        detail: '地獄の門番のひとりであり、<br>暴れる亡者を取り押さえるのが彼の役目<br><br>亡者がいない時は<br>相棒の馬頭などと訓練したりするが<br>最近は亡者の人数も増え、そんな余裕は少なくなってきている<br><br>給与などに不満はなく、<br>ときたま現れる現世の強い奴と戦えることが楽しい<br><br>宵越しの金は持たない主義<br><br>給料日後の休暇には、<br>遊び歩いている彼の姿を見かけるが<br>普段はあまりお金をもっていない'
      },
      {
        index: 2,
        select_img: 'jigoku_mezu_thumb.png',
        main_img: 'jigoku_mezu.png',
        chara_name: 'jigoku_mezu_name.png',
        voice: 'jigoku_mezu.mp3',
        cv: '中島ヨシキ',
        title: '「地獄の責め苦とは、こんな生易しいものではないぞ？」',
        detail: '地獄の門番のひとりであり、<br>暴れる亡者を取り押さえるのが彼の役目<br><br>実力は地獄を管理する獄卒の中でも、<br>上位に位置する武力要員……であるが、<br>基本的ことはなんでも出来てしまうために<br><br>よく助っ人要因として<br>様々な部署にまわされている<br><br>仕事の鬼といわれることもあり、<br>休日返上でよく働く仕事中毒<br><br>本人からしてみれば<br>仕事そのものが天職に近く、<br>特に疲れたりすることはないようだ<br><br>そのお陰で給与のほとんどは<br>手つかずのままで資産総額はかなりの物<br><br>その見た目も相まって、<br>優良物件故に女性の人気は結構高いが、<br><br>彼が見ている女性と言えば<br>もっぱら閻魔王ただひとりである'
      },
      {
        index: 3,
        select_img: 'jigoku_kasha_thumb.png',
        main_img: 'jigoku_kasha.png',
        chara_name: 'jigoku_kasha_name.png',
        voice: 'jigoku_kasha.mp3',
        cv: '鈴代紗弓',
        title: '「前方よーし！今日も安全運転で、時にサボりながら、生きていきましょ～う♪」',
        detail: '地獄で亡者が最初に出会う案内人であり、<br>基本的にいつも忙しい<br><br>忙しいあまり、<br>寝ているときも仕事に終われる夢を見たりしている<br><br>それに加え、<br>たまに閻魔王にお使いを頼まれるほどに重用されている<br><br>基本的に仕事は真面目にこなすが<br>常に楽したいと考える怠け者の一面もある<br><br>仕事を効率的に楽にして自分の時間を楽しみたい<br><br>現世の流行を追いたい<br><br>新しい物はすぐに試したくなるのでお金も欲しい<br><br>密かな欲望はたくさんあるけど<br>大望はまったくといっていいほどに存在していない<br><br>いわゆるその日暮らしを楽しんでいる猫である'
      },
      {
        index: 4,
        select_img: 'jigoku_hakutaku_thumb.png',
        main_img: 'jigoku_hakutaku.png',
        chara_name: 'jigoku_hakutaku_name.png',
        cv: '？',
        title: '「ボクは未知を愛してる、ただそれだけだよ」',
        detail: '未知を心より愛する妖怪<br><br>当時誰よりも多くの知識を集めたがゆえに<br>知らない事が無くなってしまい、退屈を持て余すようになる<br><br>怠惰な日々を過ごす白澤であったが、<br>とある人間の起こした戦乱によってその認識を改める<br><br>戦争を続ける事で人間は武器や戦術といった<br>自らが知らない新しいものを次々と生み出す<br><br>更に死を前にした人間達の行動は、<br>同じ人間でも今までと全く違う人間の行動に見えて、<br>白澤を興奮させた<br><br>そんな経験を得た事から、<br>白澤は戦争こそ至高の娯楽と考えるようになる<br><br>以後白澤は何の変化の起きない平和を嫌うようになり、<br>変化をもたらす戦乱を愛するようになる'
      },
    ],
  },
  tengu: {
    bg: 'Home4CharacterBg6.jpg',
    diagram: 'Diagram6.png',
    diagram_btn: 'diagrambtn_tengu.png',
    chara: [
      {
        index: 0,
        select_img: 'tengu_kuramatengu_thumb.png',
        main_img: 'tengu_kuramatengu.png',
        chara_name: 'tengu_kuramatengu_name.png',
        voice: 'tengu_kuramatengu.mp3',
        cv: '小倉唯',
        title: '「わたしはお父様のような妖主には、きっと、なれないのです…」',
        detail: '蒼坊主や鴉天狗に支えられ、妖主として国を治めている<br><br>現在までは妖主としてはそれなりに上手くやっている<br>でも突発的な事件や想定外の出来事、逆境に弱く、<br>パニックになってしまうことも<br><br>控え目で弱気<br><br>自分に自信がなく、申し訳なさそうに喋る<br>話すのも苦手<br><br>とても優しく健気な心を持っていて、誰かを傷付けるのは嫌<br><br>みんなが幸せに暮らせる國にしたい<br>彼女自身とても賢く、才もあるため<br>上手く治められているのだが、自分では自信がない<br><br>剣の才能にとても優れているが、<br>そのせいで父親との真剣勝負で父を傷つけてしまった<br>以降、鞍馬天狗は刀を封印している<br><br>自然が好き、草花や木があると落ち着く'
      },
      {
        index: 1,
        select_img: 'tengu_aobouzu_thumb.png',
        main_img: 'tengu_aobouzu.png',
        chara_name: 'tengu_aobouzu_name.png',
        voice: 'tengu_aobouzu.mp3',
        cv: '武内駿輔',
        title: '「この力は誰かを傷つけるためではなく、守るための力だ」',
        detail: '妖主である鞍馬天狗の護衛を務める<br><br>寡黙であるが<br>見た目のゴツさとは裏腹に、心優しい<br>よく微笑む<br><br>自分はあまり喋らないが、<br>他人が喋っているのを聞くのは好き<br><br>聞き上手なので、相談を受けることもある<br><br>武器は一通り扱うことができ、格闘もこなす<br>かなり強いのだが、守るためにしか力を行使しない<br><br>自分にはなかったので、家族に対して憧れがある<br><br>鞍馬天狗を娘のように思っている<br>鞍馬天狗を守るためなら命さえ惜しくない'
      },
      {
        index: 2,
        select_img: 'tengu_karasutengu_thumb.png',
        main_img: 'tengu_karasutengu.png',
        chara_name: 'tengu_karasutengu_name.png',
        voice: 'tengu_karasutengu.mp3',
        cv: '前野智昭',
        title: '「誰であろうと油断はせん」',
        detail: '天狗の国を守る軍隊の司令官であり、<br>前線で直接指揮を執る部隊長でもある<br><br>烏天狗は強く、また賢い<br>しかし傲慢にはならず、常に冷静<br><br>丁寧に喋るが気が強い<br>発言の所々にその気の強さが滲み出ることも<br><br>敵対する者に対しての慈悲は持ち合わせていない<br><br>特に、天狗ノ國を害する者は許さない<br><br>天狗ノ國に住む者のことは、大切に想っている<br>元々は、自分が妖主になり導くつもりだったのもある<br><br>鞍馬天狗に対しては自信をつけて欲しい<br>そして、その才能を活かして欲しいと思っている<br><br>まだ幼いのに妖主に推され、可哀想に思うこともあるが、<br>鴉天狗は妖主として認めているおり<br>支えたいと思っている'
      },
      {
        index: 3,
        select_img: 'tengu_hakuroutengu_thumb.png',
        main_img: 'tengu_hakuroutengu.png',
        chara_name: 'tengu_hakuroutengu_name.png',
        voice: 'tengu_hakuroutengu.mp3',
        cv: '近藤玲奈',
        title: '「この身を犠牲にしようとも、私が守る」',
        detail: '天狗ノ國の部隊長<br><br>白狼は自分の命を捨ててでも部下を守ろうとする<br><br>だから部隊内では<br>「俺たちも命を張って隊長を守ろう」という強い団結がある<br><br>寂しがり屋で、ひとりにはなりたくない<br><br>基本的には部下と一緒にいる<br>部下達のことが大好き<br><br>ひとりになると急に不安になってしまう<br><br>だから常に自分の周囲に誰かがいて欲しい<br><br>幼い頃は注目して欲しいと思っていたが、<br>今は周囲に人がいることが多いので、<br>あまり強く思っていない<br><br>時々、薬を売りに来る鎌鼬と話すのも<br>彼女の楽しみのひとつ'
      },
      {
        index: 4,
        select_img: 'tengu_konoha_thumb.png',
        main_img: 'tengu_konoha.png',
        chara_name: 'tengu_konoha_name.png',
        voice: 'tengu_konoha.mp3',
        cv: '土岐隼一',
        title: '「オレは、鞍馬様にふさわしい漢になる！」',
        detail: '下っ端の天狗で雑用係<br><br>だが、大きな夢を持っている<br>どんな困難があってもめげずに、目標に向かって進んでいく<br><br>雑用をこなしながら、<br>空いた時間に剣術の稽古をしている<br><br>鞍馬天狗に憧れている<br><br>鞍馬天狗と話すキッカケをいつも探しているのだが<br>鞍馬天狗が他人を寄せ付けないので、なかなか会話する機会がない<br><br>蒼坊主の事を尊敬している<br>強く、身体が大きく、鞍馬天狗の護衛官なので、木の葉天狗の理想の姿の為'
      },
      {
        index: 5,
        select_img: 'tengu_kamaitachi_thumb.png',
        main_img: 'tengu_kamaitachi.png',
        chara_name: 'tengu_kamaitachi_name.png',
        voice: 'tengu_kamaitachi.mp3',
        cv: '夏吉ゆうこ',
        title: '「はいはーい、ちゅうもーく！お薬持ってきたよー！」',
        detail: '旅の薬売り<br><br>今は天狗ノ國に滞在して薬売りをしている、出身は妖狐ノ國<br><br>薬が完売すると、<br>薬の素材を入手するために買い物をしたり<br>山に入ったりしている<br><br>稀に山賊に襲われるが、<br>両親に教わった戦闘術で撃退する<br><br>素材が集まったら薬の製作それからまた行商、という生活<br><br>基本的に、宿暮らしで、國から國を渡り歩いている<br><br>天狗ノ國で妖主である鞍馬天狗と仲良くなり<br>しばらく滞在して欲しいとお願いされたから<br>天狗ノ國には割と長く滞在している<br><br>長く滞在したせいで、顔見知りも増えた<br>この國を離れ辛くなったなぁと思っているが<br><br>「ま、いっかー！　人との繋がりは大事だもんね！」<br>と前向きに捉えている<br><br>ヒマができると鞍馬天狗を訪ねて、<br>お茶したり、楽しい時間を過ごしている'
      },
    ],
  },
  daija: {
    bg: 'Home4CharacterBg7.jpg',
    diagram: 'Diagram7.png',
    diagram_btn: 'diagrambtn_daija.png',
    chara: [
      {
        index: 0,
        select_img: 'daija_yamatanoorochi_thumb.png',
        main_img: 'daija_yamatanoorochi.png',
        chara_name: 'daija_yamatanoorochi_name.png',
        voice: 'daija_yamatanoorochi.mp3',
        cv: '沢城みゆき',
        title: '「八岐大蛇が娘、遠呂智。我に忠誠を誓いなさい」',
        detail: '大蛇ノ國で、偉大な父<br>八岐大蛇の後を継いで、國を総べる妖主として君臨している<br><br>最も優秀な自分こそが幻妖界を支配するべき、<br>という建前で行動しているが、<br><br>実際には父の統治時代より国を繁栄させる事で、<br>さすが八岐大蛇の娘だと<br>周囲に認められる事を目的としている<br><br>物事を論理的に考え、<br>個々の情よりも全体の利益を優先する<br>統治者的思考の持ち主<br><br>尊大かつ冷静で、<br>敵には冷酷に振る舞う事で恐れられてもいる<br><br>しかし部下の働きを正しく評価する事から、<br>民の評判は悪くない<br><br>遠呂智は自分の立場を幼いうちから理解していた為、<br>弱みを見せない様に人に甘える事をせず、<br>またそれ故に甘え方を知らない'
      },
      {
        index: 1,
        select_img: 'daija_ameonna_thumb.png',
        main_img: 'daija_ameonna.png',
        chara_name: 'daija_ameonna_name.png',
        voice: 'daija_ameonna.mp3',
        cv: '諏訪ななか',
        title: '「アタシが強くなるのは全部遠呂智ちゃんのためだから」',
        detail: '遠呂智姫、直属の個人的な部下で腹心<br><br>そのイタズラ好きな性格のせいで、<br>他の者の下に付けても御する事が出来ないからと、<br>遠呂智の縁者が、遠呂智の部下になるように仕向けた<br><br>だが実際には、遠呂智姫の力が暴走した際に<br>即座に駆けつける事が出来る<br>立ち位置にしたいという思いから<br><br>周囲からは、<br>優秀だが厄介な人物、と認識されている<br><br>遠呂智ちゃんが幸せに暮らせる國を作りたい<br>あとは楽しくイタズラして暮らせればそれで良い<br>と思っている<br><br>遠呂智姫に対しては、友達、というよりは<br>推しに近い感情を抱いている<br><br>ちなみに、<br>手にした傘は唐傘という妖怪で、<br>雨女一族に代々使える執事役'
      },
      {
        index: 2,
        select_img: 'daija_kiyohime_thumb.png',
        main_img: 'daija_kiyohime.png',
        chara_name: 'daija_kiyohime_name.png',
        voice: 'daija_kiyohime.mp3',
        cv: '相坂優歌',
        title: '「私が美しく完璧である事に変わりありませんわ」',
        detail: '大蛇の國のNo.2の地位を与えられており<br>國に攻めてくる敵と戦う迎撃戦力として活躍している<br><br>自信満々で、有能な自分が大好きという自分大好きっ子<br>自分は優秀で素晴らしい貴族なので愛想を安売りしない様にしているが、自分を褒め称える者が好きなので大変チョロい<br><br>遠呂智からは結構無茶振りをされて怒る事が多いのだが、内心では自分が有能だからこれだけの無茶を頼まれるとも思っている。褒めるとホイホイ手伝ってくれるので、同僚部下問わず頼れる便利屋扱いされる事も<br><br>自覚はないが頼りないダメ男が好み。特に自分無しでは生きていけないような男だとなお良い<br><br>同様に、禰々子河童の優れた力を持っているのに自分に自信が無さすぎるダメな部分がお気に入り'
      },
      {
        index: 3,
        select_img: 'daija_nenekogappa_thumb.png',
        main_img: 'daija_nenekogappa.png',
        chara_name: 'daija_nenekogappa_name.png',
        voice: 'daija_nenekogappa.mp3',
        cv: '岡咲美保',
        title: '「禰々子参上！であります！」',
        detail: '河童一族の次期頭領兼、大蛇ノ國の偵察部隊の隊長<br><br>河童一族の次期頭領だが、完璧超人の母の影響で少々自信に欠ける性格に育った<br>接近戦は怖いのでもっぱら後方支援を好む<br><br>現在は、頻繁に引っ越しを繰り返して、各地の情報収集を行っている<br>場合によっては他国に隠れ家を作ってそこを拠点に偵察も行う。<br>また偵察任務では戦いだけでなく自然災害の情報も集まってくる為、河童の怪力と得意の薬作りを活かして救助活動を行う事も少なくない<br>寧ろ本人的には戦いよりもこうした活動の方が好ましく思っている<br><br>母から忍びとして忠義を尽くすにふさわしい運命の殿と出会ったら、その人物を生涯の主としてお仕えせよと教わっており、自分も母のように運命の殿に出会う事を夢見ている'
      },
    ],
  },
  youko: {
    bg: 'Home4CharacterBg8.jpg',
    diagram: 'Diagram8.png',
    diagram_btn: 'diagrambtn_youko.png',
    chara: [
      {
        index: 0,
        select_img: 'youko_tenko_thumb.png',
        main_img: 'youko_tenko.png',
        chara_name: 'youko_tenko_name.png',
        voice: 'youko_tenko.mp3',
        cv: '早見沙織',
        title: '「九尾、どうする？　わたくしは何をすればいい？」',
        detail: '妖主代理として妖狐の上に立つ<br><br>部下たちに慕われているが、<br>自分が関わってしまうと「間違ってしまう」<br>と考えてしまうので個人的な関わりは一切ない<br><br>私生活に関しても、隔離された場所を持ち、<br>部下の立ち入りを完全に禁止している<br><br>従者のような世話係りすら存在しない<br><br>そのため、部下および国民からは謎多き御仁として、<br>神秘的な指導者だと思われている<br><br>常に静かに微笑んでいるおり、顔に本音を覗かせない<br>秘密主義であり個人主義者であり、<br>決して他者に心を開かない<br><br>九尾が安心して國を任せているほどの求心力を持つ、<br>天性の指導者'
      },
      {
        index: 1,
        select_img: 'youko_kinko_thumb.png',
        main_img: 'youko_kinko.png',
        chara_name: 'youko_kinko_name.png',
        voice: 'youko_kinko.mp3',
        cv: '西山宏太朗',
        title: '「オレらマブダチっしょ！」',
        detail: '妖狐ノ國の幹部であり、主に戦闘専門の隊長格<br>単純な戦闘能力でいえば<br>妖主たちにも匹敵すると言われている<br><br>ただ少し頭が悪いため、搦め手に弱い。色香にも弱い<br><br>イヅナに戦闘のいろはを教えたのも彼なため、<br>イヅナ自身も同じように搦め手に弱い<br><br>基本は楽しければ何でもいいと思っていて、<br>騒ぐのが好き。ただし、根は真面目<br><br>モテる男になるために、<br>チャラいのがモテると勘違いして、<br>全力でチャラチャラしてる<br><br>ヒト付き合いが若干強引だが、<br>優しい心を持っているので<br>基本的には誰とでも仲良くなれる明るい性格<br><br>天狐に憧れている<br>彼と同じく天狐を慕っており、何かにつけて金狐の真逆を行く銀狐は不倶戴天の敵'
      },
      {
        index: 2,
        select_img: 'youko_ginko_thumb.png',
        main_img: 'youko_ginko.png',
        chara_name: 'youko_ginko_name.png',
        voice: 'youko_ginko.mp3',
        cv: '梅原裕一郎',
        title: '「やれやれですね。レディの扱い方、私がお教えしましょうか？」',
        detail: '妖狐ノ國の幹部であり、参謀の立場<br>頭の良さで金狐と対等な戦力を持つ<br><br>イヅナに憑いているクダには、<br>戦術や敵の罠についての知識を教えたこともある<br><br>いつ何時も冷静な態度<br>丁寧で理知的な雰囲気を纏っている<br><br>二面性があり、超絶有能な面と、<br>ドMな面（天狐に対してのみ）がある<br><br>ドＭな一面があることに自分自身でショックを受けており、葛藤している<br><br>普段はキザであるものの紳士的な態度を崩さず、<br>かつその才から異性同性問わずに人気がある<br><br>天狐に憧れていて、<br>辛辣なご褒美をもらいたいと思っている<br><br>同じく天狐を慕っており、<br>自由奔放すぎる金狐は不倶戴天の敵'
      },
      {
        index: 3,
        select_img: 'youko_ten_thumb.png',
        main_img: 'youko_ten.png',
        chara_name: 'youko_ten_name.png',
        voice: 'youko_ten.mp3',
        cv: '加隈亜衣',
        title: '「イヅナちゃん、見てて。わたし、前よりずっと強くなったんだよ！」',
        detail: '妖狐ノ國の戦闘要員<br><br>まだまだ新兵だが、幹部からは将来を期待されている<br><br>金狐や銀狐は彼女のことを、<br>いつか、この妖狐ノ国でも指折りの頭角を表すほどの才能があると考えている<br><br>精神的には未熟で、生意気な性格をしている<br><br>イヅナ以上に真面目なため、融通が利かない部分がある<br><br>イヅナを思い、彼女の後に続こうと自分に鞭打って努力を重ねている<br><br>金狐と銀狐の両方からの指導を仰いでいるため、実力をぐんぐん上げていっている<br><br>でも、私生活で金狐と銀狐と付き合うのはためらいがあり、距離を置いている'
      },
    ],
  },
  yuukaku: {
    bg: 'Home4CharacterBg3.jpg',
    diagram: '',
    diagram_btn: 'diagrambtn_yuukaku.png',
    chara: [
      {
        index: 0,
        select_img: 'yuukaku_gyokuto_thumb.png',
        main_img: 'yuukaku_gyokuto.png',
        chara_name: 'yuukaku_gyokuto_name.png',
        voice: 'yuukaku_gyokuto.mp3',
        cv: '荒井レイラ',
        title: '「ぴょぴょぴょ～ん♪アタシと遊んでいかなーい？」',
        detail: ''
      },
      {
        index: 1,
        select_img: 'yuukaku_rokurokubi_thumb.png',
        main_img: 'yuukaku_rokurokubi.png',
        chara_name: 'yuukaku_rokurokubi_name.png',
        voice: 'yuukaku_rokurokubi.mp3',
        cv: '宮崎理奈',
        title: '「では、ようござんすね？」',
        detail: ''
      },
      {
        index: 2,
        select_img: 'yuukaku_harionna_thumb.png',
        main_img: 'yuukaku_harionna.png',
        chara_name: 'yuukaku_harionna_name.png',
        voice: 'yuukaku_harionna.mp3',
        cv: '髙橋果鈴',
        title: '「楽しい時間にしましょうね」',
        detail: ''
      },
      {
        index: 3,
        select_img: 'yuukaku_itsumade_thumb.png',
        main_img: 'yuukaku_itsumade.png',
        chara_name: 'yuukaku_itsumade_name.png',
        voice: 'yuukaku_itsumade.mp3',
        cv: '嶋梨夏',
        title: '「手加減は無用ですので！」',
        detail: ''
      },
      {
        index: 4,
        select_img: 'yuukaku_sekiko_thumb.png',
        main_img: 'yuukaku_sekiko.png',
        chara_name: 'yuukaku_sekiko_name.png',
        voice: 'yuukaku_sekiko.mp3',
        cv: '半澤楓',
        title: '「あの、私と遊んで下さいませんかぁ？」',
        detail: ''
      },
      {
        index: 5,
        select_img: 'yuukaku_sudama_thumb.png',
        main_img: 'yuukaku_sudama.png',
        chara_name: 'yuukaku_sudama_name.png',
        voice: 'yuukaku_sudama.mp3',
        cv: '田代明',
        title: '「緊張してるのぉ？可愛い～♡」',
        detail: ''
      },
      {
        index: 6,
        select_img: 'yuukaku_nureonna_thumb.png',
        main_img: 'yuukaku_nureonna.png',
        chara_name: 'yuukaku_nureonna_name.png',
        voice: 'yuukaku_nureonna.mp3',
        cv: '本西彩希帆',
        title: '「そ、そんなに見つめられると照れますわ……」',
        detail: ''
      },
    ],
  },
  seimei: {
    bg: 'Home4CharacterBg9.jpg',
    diagram: '',
    diagram_btn: 'diagrambtn_seimei.png',
    chara: [
      {
        index: 0,
        select_img: 'seimei_abenoseimei_thumb.png',
        main_img: 'seimei_abenoseimei.png',
        chara_name: 'seimei_abenoseimei_name.png',
        voice: 'seimei_abenoseimei.mp3',
        cv: '速水奨',
        title: '「全てを無に還そう…」',
        detail: '千年前、<ruby>妖怪の黄昏<rt>ラグナドール</rt></ruby><br><br>彼は多くの敵を屠った<br>その大戦では、多くの人が、多くの妖怪が<br>傷つき倒れていった<br><br>彼は今、配下の四聖獣を率いて<br>幻妖界を戦火に包もうとしている'
      },
      {
        index: 1,
        select_img: 'seimei_suzaku_thumb.png',
        main_img: 'seimei_suzaku.png',
        chara_name: 'seimei_suzaku_name.png',
        voice: 'seimei_suzaku.mp3',
        cv: '井上喜久子',
        title: '「破壊。蹂躙。焼却。滅亡。ああ！なんて甘美な喜び！」',
        detail: '己の強さに絶対的な自信があり、<br>それをもって他者を弄るのが何より楽しい<br>そのため争いの火種を感じては我先にと向かっていく<br><br>好戦的でいつも強気、<br>炎の術を使った大規模な破壊をとても好む<br><br>燃え、崩れ落ちる建物を見ているのが<br>たまらないと考えている<br><br>自分で引き起こした破壊に酔いしれるのは常である<br><br>晴明の命とは関係なく、朱雀自身がただ楽しいというだけで、<br>他者を脅迫し、尊厳を踏みにじり、屠る<br><br>破壊したい。焼き払いたい。虐めたい<br>朱雀にとってはそれが全てである'
      },
      {
        index: 2,
        select_img: 'seimei_byakko_thumb.png',
        main_img: 'seimei_byakko.png',
        chara_name: 'seimei_byakko_name.png',
        voice: 'seimei_byakko.mp3',
        cv: '森川智之',
        title: '「弱いなぁ、つまらん。酒の肴にもならねぇ。もっと強い奴はいねえのか？」',
        detail: '戦闘狂<br>とにかく強そうな奴を見つけると戦う<br>術を使って戦うよりも肉弾戦で戦う事を好む<br><br>戦えればなんでも良い<br><br>善や悪、理由の有無、<br>それらは白虎にとって気に掛けることではない'
      },
      {
        index: 3,
        select_img: 'seimei_genbu_thumb.png',
        main_img: 'seimei_genbu.png',
        chara_name: 'seimei_genbu_name.png',
        voice: 'seimei_genbu.mp3',
        cv: '佐倉綾音',
        title: '「もー、ほっといてよー」',
        detail: 'とにかく面倒なことが大嫌い<br>動きたくもないし喋りたくもない<br><br>玄武には罪悪感が存在せず、<br>殺すという行為に対して何の感情も抱かない<br><br>めんどうごとを持ってくるやつは、<br>死んでしまえば良い<br><br>殺す労力と話し合う労力を天秤にかけて、<br>殺す方が楽だし早い、だから彼女は話すことを選ばない'
      },
      {
        index: 4,
        select_img: 'seimei_seiryu_thumb.png',
        main_img: 'seimei_seiryu.png',
        chara_name: 'seimei_seiryu_name.png',
        voice: 'seimei_seiryu.mp3',
        cv: '諏訪部順一',
        title: '「常に秩序を求める。それがあるべき姿だ」',
        detail: '真面目で几帳面で潔癖で極端<br>大きな体を活かした力押しをするかに見えて技巧派<br>隙のない戦い方をする<br><br>戦闘そのものはあまり好きではないが<br>秩序を乱す者には積極的に攻撃しようとする<br>規則を破るものに厳しく、時には暴力まで振るう<br><br>青龍の配下は信賞必罰を徹底されている<br>おかげで四聖獣の中でも練度が高く、上下関係に厳しい<br><br>苛烈な一面も併せ持ち、目的のためには手段を選ばない、<br>弱者でも怪我人でも使えるのなら前線に投入するし、<br>必要があれば村や町を焼き払う<br><br>逆に戦力が減るのを避けるために<br>味方を自身の体を張って、庇うこともする'
      },
      {
        index: 5,
        select_img: 'seimei_miminashihouichi_thumb.png',
        main_img: 'seimei_miminashihouichi.png',
        chara_name: 'seimei_miminashihouichi_name.png',
        voice: 'seimei_miminashihouichi.mp3',
        cv: '関根明良',
        title: '「──これは此の世のことならず 夜叉ノ國の片隅の 聞くも憐れな物語」',
        detail: '芳一は、晴明に付き従う道具<br>自らの意志を示すことはない<br><br>晴明にとって、<br>耳なし芳一は「呪」を増幅する”管”のような存在<br>得難い道具である<br><br>なぜなら、晴明が使用する「言霊の術」を、<br>琵琶と歌声で広範囲に拡大することができるためだ'
      },
    ],
  },
  youtei: {
    bg: 'Home4CharacterBg9.jpg',
    diagram: '',
    diagram_btn: 'diagrambtn_hachidaiyoutei.png',
    chara: [
      {
        index: 0,
        select_img: 'youtei_yamashidaizya_thumb.png',
        main_img: 'youtei_yamashidaizya.png',
        chara_name: 'youtei_yamashidaizya_name.png',
        voice: 'youtei_yamatanoorochi.mp3',
        cv: '興津和幸',
        title: '「我が覇道は何者にも止められはせん！」',
        detail: '言葉の少ない、謹厳なる支配者<br><br>その統治体制は、厳しいが血と心の通ったものであり、<br>民の訴えには真摯に耳を傾ける<br><br>外敵に対しては果断な将<br>荒れ狂う水の力を宿す伝説の大妖怪<br><br>その本質は、浸食し打ち砕く「制御不能の貪欲」<br>その力の雄大さ、そして存在の古さから、<br>ダイダラボッチ、太郎坊天狗と並び、<br>「妖帝」の名を最初に冠した妖怪である<br><br>自然の猛威が妖怪として形を結んだ存在であり、<br>起源は遙か神代にまで遡る<br><br>千年前の戦いで没したと伝えられている'
      },
      {
        index: 1,
        select_img: 'youtei_atagotengu_thumb.png',
        main_img: 'youtei_atagotengu.png',
        chara_name: 'youtei_atagotengu_name.png',
        voice: 'youtei_atagotengu.mp3',
        cv: '？',
        title: '「力持つ者よ、己の力を畏れるべし。高きにある者よ、己の心を省みるべし」',
        detail: '人では及びもつかない昔、<br>後に「愛宕（あたご）山」<br>と呼ばれることになる山が生まれた頃<br><br>その山の頂に、ある夜、大火球<br>（人の書に「天つ狗」と記される現象）が降り注いだ<br><br>それはまさしく火の神の化身にして、<br>荒ぶる力を制御する叡智持つ存在であった。<br>その存在は「太郎坊天狗」と名乗り、山の主として君臨した<br><br>平穏と秩序を好む<br>権威主義的というわけではなく、<br>叡智と感情に基づいた、穏健な保守である<br><br>伝統を尊ぶが、<br>それに固執しては流れが淀み腐ることを理解しており、<br>革新的なものが生まれたなら、<br>それを守り育んでいきたいとも考えている<br><br>千年前の戦いで没したと伝えられている'
      },
      {
        index: 2,
        select_img: 'youtei_daidarabocchi_thumb.png',
        main_img: 'youtei_daidarabocchi.png',
        chara_name: 'youtei_daidarabocchi_name.png',
        voice: 'youtei_daidarabocchi.mp3',
        cv: '？',
        title: '「オオォォォーーーーン…………」',
        detail: 'ダイダラボッチは、遥か過去、<br>天と地の境目が定かならぬ頃に生まれた妖怪である<br><br>最初は漂う雲のようであったが、<br>人々が流れる雲の形に人の姿を見たり、<br><br>霧に移る影に巨人を見たりするうちに、<br>人を真似た姿をとれるようになった<br><br>普段は形を持たず、<br>なんらかの条件が整うと巨人の姿を得て、<br>山や大地に大きな影響を及ぼしては消える<br><br>そんな自然現象のような存在だった<br><br>「途方もなく大きな、人型の妖怪」という概念が<br>人々の間に生まれることで、<br>ダイダラボッチの存在は確固たるものになっていき、<br>妖怪としての存在を確立した<br><br>性格は茫洋としており、物静か<br>穏やかな時の流れの中に、ただ在ることを好む<br><br>千年前の戦いで没したと伝えられている'
      },
      {
        index: 3,
        select_img: 'youtei_kyuubi_thumb.png',
        main_img: 'youtei_kyuubi.png',
        chara_sub_img: 'CharacterInfo_img.png',
        chara_name: 'youtei_kyuubi_name.png',
        voice: 'youtei_kyuubi.mp3',
        cv: '田中理恵',
        title: '「わらわは、そなたの絶望を愉しみたいのだ」',
        detail: '遙か古代より生きる妖怪<br><br>現在の九尾は殺生石に閉じ込められたままだ<br>ただ、狐の眷属に意志を伝えることはできるため、<br>天狐を通じて間接的に妖狐ノ國を統括している'
      },
      {
        index: 4,
        select_img: 'youtei_ootakemaru_thumb.png',
        main_img: 'youtei_ootakemaru.png',
        chara_name: 'youtei_ootakemaru_name.png',
        voice: 'youtei_ootakemaru.mp3',
        cv: '江口拓也',
        title: '「腕一本。それで相手をしてやろう。死力を尽くして愉しませろよ？」',
        detail: '大嶽丸は、最も若い妖帝である<br><br>彼は武官の子として生まれた<br>つまり、人間なのだ<br><br>幼い頃より、自分の個人的戦闘力を磨くことにしか<br>興味がなく、勉学も出仕もせず、<br>ただひたすらにその技量を磨き続けた<br><br>人間との戦いがつまらなく感じるほど強くなってしまったころ、強い鬼や妖怪を倒して食らう狩人となった<br><br>そしていつしか、<br>彼自身の肉体もまた、妖怪へと変じていった<br>そして、妖帝と呼ばれるようになった<br><br>戦いと蹂躙が好き<br>弱い奴には興味がない<br><br>挑んできた者は殺すが、<br>愉しませたならば気まぐれで許すこともある<br><br>傲岸不遜であり、<br>自分だけがこの世の至上と考えている<br>そのため、娑婆の身分の上下には関心がない<br><br>王であろうと弱ければ小虫、<br>何も持たざるものだろうと強さと面白さを持っていれば<br>興味の対象となる<br><br>千年前の戦いで没したと伝えられている'
      },
      {
        index: 5,
        select_img: 'youtei_tsuchigumo_thumb.png',
        main_img: 'youtei_tsuchigumo.png',
        chara_name: 'youtei_tsuchigumo_name.png',
        voice: 'youtei_tsuchigumo.mp3',
        cv: '？',
        title: '「私は私の生き方を貫くだけ。さぁて、好き勝手暴れさせてもらうわ！」',
        detail: '「人間ではなく妖怪がこの世を支配する」<br><br>という信念の持ち主<br>妖怪を守るより人間を殺す方を優先する<br><br>その信念故か、太郎坊天狗とは相反しあっており、<br>ついには戦うことに<br><br>その際に封印され、そこから長く眠っていたが<br>いつしか復活を果たした<br><br>千年前の戦いにおいては、<br>ある事件を切っ掛けに人間側についた<br><br>千年前の戦いで没したと伝えられている'
      },
    ],
  },
  other: {
    bg: 'Home4CharacterBg1.jpg',
    diagram: '',
    diagram_btn: 'diagrambtn_other.png',
    chara: [
      {
        index: 0,
        select_img: 'other_makina_thumb.png',
        main_img: 'other_makina.png',
        chara_name: 'other_makina_name.png',
        voice: 'other_makina.mp3',
        cv: '古賀葵',
        title: '「ぬりかべちゃんは、ぬりりん！それから、のっぺとおじじ！」',
        detail: '突如光とともに現れた少女<br>学校の制服を着ていることから現代の人間だと思われるが、<br>記憶を無くしている模様<br><br>感情の盛り上がりが早いため、<br>思いついたら即行動<br><br>行動力はあるが、後のことを考えないため、<br>時間が経ってから不安や恐怖が襲ってくるタイプ<br><br>正義感や善性は強い方<br>相手の事情に共感して泣くこともしばしば<br><br>変なあだ名つけがち'
      },
      {
        index: 1,
        select_img: 'other_keukegen_thumb.png',
        main_img: 'other_keukegen.png',
        chara_name: 'other_keukegen_name.png',
        voice: 'other_keukegen.mp3',
        cv: '花守ゆみり',
        title: '「我こそは！全知全毛の神ですぞぉ～！」',
        detail: '毛倡妓を始めとする花魁たちの髪結師<br><br>この世の髪を知り尽くし、<br>全知全毛（ぜんちぜんもう）の美容師になるのが夢<br><br>口下手だけど、<br>好きな髪の毛の話題になると途端に饒舌になる<br><br>争いごとは好まないが、<br>必要とあれば立ち向かっていく気概がある<br><br>キレイな櫛や簪の収集家でもあり、<br>これらを贈るととても喜ぶ<br><br>けうけげん、毛髪妖怪一族の名門に属している<br>サラサラ家、モコモコ家、フワフワ家、モリモリ家等、<br>毛統（けっとう）により分けられた無数の家系は、<br>衝突と婚姻を繰り返しながら、<br>毛髪妖怪界隈に君臨し続けてきたのだ<br><br>だが、けうけげんは単にその<br>親戚一家の召使同然の扱いだった<br><br>そんな中お店にやってきた毛倡妓に<br>腕を披露する機会があり、あっという間に気に入られ、<br>あれよあれよという間に花魁の國で現在の役割どころへ<br><br>性格は、口は上手い方ではないのだけれど、<br>物怖じしない性格である<br><br>なるべく多くの人の髪の毛に触りたいということから、<br>気になる髪質の人を見ると通りすがりでも<br>「その髪、見せてくれー」とすがりつく'
      },
      {
        index: 2,
        select_img: 'other_ushioni_thumb.png',
        main_img: 'other_ushioni.png',
        chara_name: 'other_ushioni_name.png',
        voice: 'other_ushioni.mp3',
        cv: '古川慎',
        title: '「近づくなよ、この『牛鬼』に食われたくなけりゃなぁ！！」',
        detail: '放浪する妖怪<br><br>詳細不明の恐ろしい妖怪『牛鬼』に取り憑かれている、<br>彼自身は名もなき妖怪<br><br>自ら望んで『牛鬼』にとり憑かせ、<br>通常であればすでに自我を奪われていても<br>おかしくないところを、ギリギリの一線で保ち続けている<br><br>粗暴・乱暴・凶暴<br>常に何かに対して、恨みや憎悪を募らせており、<br>気に入らないものを打ち倒すために、<br>より強くなることを望んでいる<br><br>その過程で、無秩序に暴れまわっている<br><br>彼の憎悪の対象は、平和の裏で<br>弱者を虐げてきた世間そのものであるため、<br>暴力によってそれが解決されることはない<br><br>しかし、当然、欺瞞を口にする者を<br>腕力で黙らせることにも躊躇しない<br><br>彼は最終的に<br>『自分が一番強くなる』ことを目的にしている'
      },
      {
        index: 3,
        select_img: 'other_nue_thumb.png',
        main_img: 'other_nue.png',
        chara_name: 'other_nue_name.png',
        voice: 'other_nue.mp3',
        cv: '松岡禎丞',
        title: '「鵺の鳴く夜は恐ろしい。キミたちの望むままに、ボクはこの夜を恐ろしく彩ろう」',
        detail: '鵺は、作られた妖怪である<br><br>哲学的で深く思考するタイプだが、柔軟性に欠ける<br><br>自分の嗜好ひとつとっても、<br>『妖怪「鵺」とはどうあるべきか？』<br>という考え方をしてしまい、<br>彼自身の自我に基づく好悪の判断が薄い<br><br>しかし、<br>「鵺」という妖怪自体が正体不明のものであるため、<br>「鵺らしい鵺」という目標自体が結論のないものとなり<br>彼を余計に混乱させている'
      },
      {
        index: 4,
        select_img: 'other_yukionna_thumb.png',
        main_img: 'other_yukionna.png',
        chara_name: 'other_yukionna_name.png',
        voice: 'other_yukionna.mp3',
        cv: '上坂すみれ',
        title: '「素敵な感覚、もっともっと凍えさせてみせるわ！」',
        detail: 'はぐれの妖怪で、所在不明<br><br>はるか北国の大地にて生まれた雪の妖怪である<br><br>彼女が『おじい様』と呼ぶ妖怪は、<br>毎年師走の暮に空を飛ぶソリに乗って世界中を飛び回り、人々にプレゼントを配って回っていた<br><br>彼女もそんな祖父の姿に憧れ、<br>いつしか自分も祖父のように<br>誰かを喜ばせられるような素敵な存在になりたい、と思っている<br><br>他人のために何かをしてあげたいと常に思っているが、<br>少しばかりおおらかで大雑把にすぎるところがある<br><br>特に、初めて雪を降らせたときに<br>他の妖怪たちに喜ばれたことから気をよくし、<br>猛吹雪を呼び込んでしまったりする<br><br>天真爛漫な笑顔で『嬉しいでしょ？』<br>といわれるので、周りは『困る』とはなかなか言いづらい<br>'
      },
      {
        index: 5,
        select_img: 'other_amabie_thumb.png',
        main_img: 'other_amabie.png',
        chara_name: 'other_amabie_name.png',
        voice: 'other_amabie.mp3',
        cv: '内山夕実',
        title: '「ぷぷぅッと、パァン！どんな疫病もパチンと解決！」',
        detail: 'その姿を描き写すことで<br>疫病の流行を防ぐご利益があると伝えられている妖怪<br><br>夜叉ノ國を本拠地としてあちこちへ行商に出ている<br><br>華やかなシャボン玉の芸を披露しながら、<br>石鹸を売ったり、手洗い手もみ接客を行う<br><br>晴明の勢力によって各地が荒廃し、<br>石鹸の原材料が不足しており困っている'
      },
      {
        index: 6,
        select_img: 'other_baku_thumb.png',
        main_img: 'other_baku.png',
        chara_name: 'other_baku_name.png',
        voice: 'other_baku.mp3',
        cv: '指出毬亜',
        title: '「その夢、美味しく頂いてみせる～」',
        detail: '堺ノ國、夢料理「獏屋」の店主兼料理長<br><br>ただし、<br>金勘定は興味がないのでどんぶり勘定が過ぎ、<br>見かねた隠神刑部によって猫又がお目付け役としてつけられた<br><br>まず第一に美食家であり、<br>料理人としての自分にはあまり興味がない<br><br>美味しい夢さえあれば、それで満足<br><br>基本的にふわふわとした人格で、<br>強い感情を見せることはあまりない<br><br>ただ、<br>最後に味わった夢に影響を受けることがあり、勇ましい夢なら勇ましく、恋の夢なら艶やかな振る舞いが増える<br><br>映画を見た直後に、<br>立ち居振る舞いがその映画っぽくなる系'
      },
    ]
  }
}

// 현재 일시를 조건으로 캐릭터 전환 처리
let gimmick_chara_time_before = new Date();
gimmick_chara_time_before.setHours(2, 00, 00);

let gimmick_chara_time_after = new Date();
gimmick_chara_time_after.setHours(2, 30, 00);

const gimmick_chara_now = new Date();

if (gimmick_chara_time_before < gimmick_chara_now && gimmick_chara_now < gimmick_chara_time_after) {
  CHARA_INFO.yasha.chara[0].title = '「守らなきゃ……ここは……誰も……通さない」'
  CHARA_INFO.yasha.chara[0].main_img = 'yasha_bousounurikabe.png'
}

const CHARA_AREA_LENGTH = Object.keys(CHARA_INFO).length
const CHARA_SELECT_ON_IMG_DOM = '<img id="chara-select-on-img-js" class="chara-select-list-img-on" src="assets/images/top/chara/Charathumb_on.png">'

// 캐릭터 선택 목록 초기 표시
setCharaInfo(0)
setCharaList('yasha')

// 캐릭터 에어리어(국가) 클릭 시 캐릭터 에어리어 정보와 캐릭터 정보를 전환 PC용
$(document).on('click', '#chara-area-select-js li', function () {
  const select_area = $(this).data("chara-area")

  if (select_area === current_chara_area) return

  setCharaArea(select_area)
  setActiveCharaArea(select_area)
})

// 캐릭터 에어리어(국가) 클릭 선택 시 캐릭터 에어리어 정보와 캐릭터 정보를 전환 SP용
$(document).on('click', '#chara-area-select-sp-js .swiper-slide', function () {
  const select_area = $(this).children('img').data("chara-area")

  if (select_area === current_chara_area) return

  const slider_index = $(this).index();
  charaAreaSwiper.slideToClickedSlide(slider_index);

  setCharaArea(select_area)
  setActiveCharaArea(select_area)
})

// 캐릭터 콘텐츠 왼쪽 화살표 클릭 시 처리 PC용
$(document).on('click', '#chara-arr-back-js', function () {
  const chara_length = CHARA_INFO[current_chara_area].chara.length
  current_chara_index = current_chara_index === 0 ? chara_length - 1 : current_chara_index - 1
  setActiveChara(current_chara_index)
  setCharaInfo(current_chara_index)
})

// 캐릭터 콘텐츠 오른쪽 화살표 클릭 시 처리
$(document).on('click', '#chara-arr-next-js', function () {
  const chara_length = CHARA_INFO[current_chara_area].chara.length
  current_chara_index = current_chara_index === chara_length - 1 ? 0 : current_chara_index + 1
  setActiveChara(current_chara_index)
  setCharaInfo(current_chara_index)
})



// 캐릭터 목록 클릭 시 캐릭터 고유 정보 설정, 선택 캐릭터에 액티브 이미지 부여
$(document).on('click', '.chara-select-js', function () {
  const select_chara_index = $(this).data('chara-index')

  if (select_chara_index === current_chara_index) return

  $(`#chara-select-area-js li`).removeClass("active");
  $(this).addClass("active");

  setCharaInfo(select_chara_index)
 
});

// 캐릭터 에어리어(국가)가 선택된 국가에 active 클래스를 붙이다
function setActiveCharaArea(chara_area) {
  $(`#chara-area-select-js li`).removeClass("active");
  $(`[data-chara-area="${chara_area}"]`).addClass("active")
}

// 캐릭터 일람의 선택된 캐릭터에 active 클래스를 붙이다
function setActiveChara(index) {
  $(`#chara-select-area-js li`).removeClass("active");
  $(`[data-chara-index="${index}"]`).addClass("active")
}

// 캐릭터 영역(국가)에 관한 정보를 설정하다
function setCharaArea(chara_area) {
  // 캐릭터 배경 설정
  $('#chara-bg-sp-js').attr('src', `${IMG_DIR}/sp/sp_${CHARA_INFO[chara_area].bg}`);
  $('#chara-bg-pc-js').attr('srcset', `${IMG_DIR}/${CHARA_INFO[chara_area].bg}`)

  // 캐릭터 영역(국가) 설정
  current_chara_area = chara_area
  setCharaList(chara_area)

  // 캐릭터 상관도 설정
  current_chara_diagram_modal_index = Object.keys(CHARA_INFO).indexOf(chara_area)
  setDiagram(current_chara_diagram_modal_index)

  // 캐릭터 설정 : 국가 전환 시 캐릭터 표시(맨 처음 캐릭터)
  setCharaInfo(0)
}

// 캐릭터 목록 DOM 추가
function setCharaList(chara_area) {
  $("#chara-select-area-js").hide();
  $("#chara-select-area-js").empty();

  CHARA_INFO[chara_area].chara.forEach(function (val, key) {
    const active_class = key === 0 ? 'active' : ''
    $("#chara-select-area-js").append(`<li class="chara-select-bg chara-select-js ${active_class}" data-chara-index="${key}" style="cursor: pointer;"><img class="chara-img" src="${IMG_DIR}/${chara_area}/${val.select_img}?v=2">${CHARA_SELECT_ON_IMG_DOM}</li>`)
  })

  $("#chara-select-area-js").fadeIn();
}

// 캐릭터 선택 시 캐릭터 고유 정보를 설정한다.
function setCharaInfo(chara_index) {
  current_chara_index = chara_index
  const target_chara = CHARA_INFO[current_chara_area].chara[chara_index]
  $('#chara-info-cv').text('CV ' + target_chara.cv)
  $('#chara-info-title').text(target_chara.title)
  $('#chara-info-detail').html(target_chara.detail)
  $('.chara-select-info-detail-body').scrollTop(0)
 
  $('#chara-main-sp-img').hide()
  $('#chara-main-pc-img').attr('srcset', `${IMG_DIR}/${current_chara_area}/${target_chara.main_img}?v=2`)
  $('#chara-main-sp-img').attr('src', `${IMG_DIR}/${current_chara_area}/sp/sp_${target_chara.main_img}?v=2`)
  $('#chara-main-sp-img').fadeIn(1000)

  $('#chara-info-name-sp-js').attr('src', `${IMG_DIR}/${current_chara_area}/sp/sp_${target_chara.chara_name}?v=2`)
  $('#chara-info-name-pc-js').attr('srcset', `${IMG_DIR}/${current_chara_area}/${target_chara.chara_name}?v=2`)
  
  // voice 버튼 제어
  if(target_chara.voice)
  {
    $('#voice').attr('src', `${VOICE_DIR}/${current_chara_area}/${target_chara.voice}`)
    $('#chara-voice-area').fadeIn()
  }
  else{
    $('#chara-voice-area').hide();
  }
}


// 캐릭터 콘텐츠 상관도 이미지 전환
$(document).on('click', '#chara-diagram-modal-arr-back-js', function () {
  current_chara_diagram_modal_index = current_chara_diagram_modal_index === 0 ? MAX_DIAFRAM_INDEX - 1 : current_chara_diagram_modal_index - 1
  setDiagram(current_chara_diagram_modal_index)
})


$(document).on('click', '#chara-diagram-modal-arr-next-js', function () {
  current_chara_diagram_modal_index = current_chara_diagram_modal_index === MAX_DIAFRAM_INDEX - 1 ? 0 : current_chara_diagram_modal_index + 1
  setDiagram(current_chara_diagram_modal_index)
})

function setDiagram(chara_diagram_modal_index) {
  const chara_area = Object.keys(CHARA_INFO)[chara_diagram_modal_index]

  // 상관도가 없는 국가의 경우 버튼을 숨김
  if (CHARA_INFO[chara_area].diagram === '') {
    $('[id^=chara-diagram-img-js]').hide()
  } else {
    $('[id^=chara-diagram-img-js]').fadeIn()
  }

  // 상관도 버튼 설정
  $('[id^=chara-diagram-img-js]').attr('src', `${IMG_DIR}/${CHARA_INFO[chara_area].diagram_btn}`);

  $('#chara-diagram-modal-img-pc-js').hide()
  $('#chara-diagram-modal-img-sp-js').hide()

  $('#chara-diagram-modal-img-pc-js').attr('srcset', `${IMG_DIR}/${CHARA_INFO[chara_area].diagram}?v=2`)
  $('#chara-diagram-modal-img-sp-js').attr('src', `${IMG_DIR}/sp/sp_${CHARA_INFO[chara_area].diagram}?v=2`)

  $('#chara-diagram-modal-img-pc-js').fadeIn(700)
  $('#chara-diagram-modal-img-sp-js').fadeIn(700)
}

// 상관도 모달
$('.chara-diagram-modal').modaal({
  animation_speed: '500',
  overlay_opacity: '0.7',
  hide_close: true,
});

// 상관도 모달 닫기 버튼
$(document).on('click', '#chara-diagram-modal-close', function () {
  $('.chara-diagram-modal').modaal('close');
})

// sp의 캐릭터 영역에는 swiper를 사용한다
const charaAreaSwiper = new Swiper('.chara-area-swiper-container-sp', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 3,
  slidesPerView: 3.8,
});

// 캐릭터 에어리어의 스와이프:sp
charaAreaSwiper.on('slideChange', function () {
  const chara_area = $(`[data-swiper-slide-index="${charaAreaSwiper.realIndex}"]`).children('img').data('chara-area')
  setCharaArea(chara_area)
  setActiveCharaArea(chara_area)
});

// 보이스 재생
$(document).on('click', '#play-chara-voice-sp', function () {
  voice.play();
})
$(document).on('click', '#play-chara-voice-pc', function () {
  voice.play();
})