// Based on MAIL_CARD_TEMPLATE_CONCEPTS_V1; curated to three designs.
// Text coordinates remain the base anchors; titles follow the rendered name.
const APP_VERSION = "V7.1.0 · TEMPLATE COLLECTION";
const CARD_TEMPLATES = {
  default: {
    id: "default",
    name: "기본형",
    description: "기존 V7.0.0 기본 디자인",
    background: "assets/template.png",
    thumbnail: "assets/templates/thumbnails/default.webp",
    layout: {
      width: 2048,
      height: 706,
      logos: {"erica":{"src":"assets/logos/hyu_erica.png","x":1642,"y":54,"w":340,"h":70},"hanyang":{"src":"assets/logos/hyu.png","x":1666,"y":56,"w":300,"h":72}},
      name: {"x":120,"y":142,"maxWidth":610,"startSize":142,"minSize":56,"color":"#0f4c81"},
      title: {"x":725,"y":236,"maxWidth":240,"startSize":68,"minSize":34,"color":"#333333"},
      teamWithWork: {"x":118,"y":356,"maxWidth":790,"startSize":42,"minSize":22,"color":"#333333"},
      teamWithoutWork: {"x":118,"y":376,"maxWidth":790,"startSize":46,"minSize":24,"color":"#333333"},
      work: {"x":118,"y":414,"maxWidth":860,"startSize":30,"minSize":16,"color":"#555555"},
      et: {"x":1005,"emailY":316,"phoneY":396,"size":44,"color":"#333333"},
      email: {"x":1074,"y":316,"maxWidth":460,"startSize":42,"minSize":28,"color":"#333333"},
      phone: {"x":1074,"y":396,"maxWidth":460,"startSize":42,"minSize":22,"color":"#333333"},
      addressWithWork: {"x":118,"y":522,"maxWidth":1370,"startSize":40,"minSize":22,"color":"#333333"},
      addressWithoutWork: {"x":118,"y":505,"maxWidth":1370,"startSize":40,"minSize":22,"color":"#333333"},
      characterBox: {"x":1570,"y":150,"w":360,"h":430},
      nameTitleGap: 24,
    }
  },
  gold_rule: {
    id: "gold_rule",
    name: "골드 룰 클래식",
    description: "금색 선과 여백만 사용한 차분한 교수·보직자·대외업무형",
    background: "assets/templates/mailcard_template_02_gold_rule.png",
    thumbnail: "assets/templates/thumbnails/gold_rule.webp",
    layout: {
      logos: {"erica":{"x":1600,"y":42,"w":370,"h":76,"src":"assets/logos/hyu_erica.png"},"hanyang":{"x":1640,"y":44,"w":320,"h":72,"src":"assets/logos/hyu.png"}},
      name: {"x":100,"y":144,"maxWidth":680,"startSize":124,"minSize":54,"color":"#0E4A84"},
      title: {"x":700,"y":211,"maxWidth":195,"startSize":54,"minSize":30,"color":"#88774F"},
      teamWithWork: {"x":102,"y":346,"maxWidth":760,"startSize":39,"minSize":22,"color":"#3F3D42"},
      teamWithoutWork: {"x":102,"y":366,"maxWidth":760,"startSize":43,"minSize":24,"color":"#3F3D42"},
      work: {"x":102,"y":408,"maxWidth":760,"startSize":29,"minSize":17,"color":"#68676A"},
      et: {"x":980,"emailY":270,"phoneY":360,"size":42,"color":"#88774F"},
      email: {"x":1050,"y":270,"maxWidth":510,"startSize":40,"minSize":24,"color":"#3F3D42"},
      phone: {"x":1050,"y":360,"maxWidth":510,"startSize":40,"minSize":22,"color":"#3F3D42"},
      addressWithWork: {"x":980,"y":470,"maxWidth":950,"startSize":34,"minSize":20,"color":"#3F3D42"},
      addressWithoutWork: {"x":980,"y":450,"maxWidth":950,"startSize":35,"minSize":21,"color":"#3F3D42"},
      characterBox: {"x":1625,"y":170,"w":300,"h":355},
      nameTitleGap: 24,
    }
  },
  blue_signal: {
    id: "blue_signal",
    name: "블루 시그널 라인",
    description: "블루 하단 바와 옐로그린 신호선을 쓴 산학·기술·프로젝트형",
    background: "assets/templates/mailcard_template_05_blue_signal.png",
    thumbnail: "assets/templates/thumbnails/blue_signal.webp",
    layout: {
      logos: {"erica":{"x":1600,"y":42,"w":370,"h":74,"src":"assets/logos/hyu_erica.png"},"hanyang":{"x":1640,"y":44,"w":320,"h":72,"src":"assets/logos/hyu.png"}},
      name: {"x":100,"y":142,"maxWidth":690,"startSize":124,"minSize":54,"color":"#0E4A84"},
      title: {"x":720,"y":210,"maxWidth":190,"startSize":52,"minSize":29,"color":"#7DB928"},
      teamWithWork: {"x":102,"y":336,"maxWidth":780,"startSize":38,"minSize":21,"color":"#3F3D42"},
      teamWithoutWork: {"x":102,"y":360,"maxWidth":780,"startSize":42,"minSize":23,"color":"#3F3D42"},
      work: {"x":102,"y":400,"maxWidth":800,"startSize":28,"minSize":16,"color":"#626469"},
      et: {"x":992,"emailY":278,"phoneY":360,"size":42,"color":"#0E4A84"},
      email: {"x":1062,"y":278,"maxWidth":470,"startSize":40,"minSize":24,"color":"#3F3D42"},
      phone: {"x":1062,"y":360,"maxWidth":470,"startSize":40,"minSize":22,"color":"#3F3D42"},
      addressWithWork: {"x":102,"y":627,"maxWidth":1800,"startSize":30,"minSize":18,"color":"#FFFFFF"},
      addressWithoutWork: {"x":102,"y":627,"maxWidth":1800,"startSize":30,"minSize":18,"color":"#FFFFFF"},
      characterBox: {"x":1602,"y":150,"w":340,"h":350},
      nameTitleGap: 24,
    }
  },
};
