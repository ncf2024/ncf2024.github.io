var dragging = false;
var day = false;
var offset = { x: 0, y: 0 };

var map = document.getElementById("map");
var info = document.getElementById("info");
var btn = document.getElementById("day");
var btn_name = document.getElementById("day_name");
var background = document.getElementById("back");
var stall_name = document.getElementById("stall_name");
var stall_pic = document.getElementById("stall_pic");
var stall_pic2 = document.getElementById("stall_pic2");
var stall_num = document.getElementById("stall_num");
var stall_date = document.getElementById("stall_date");
var stall_type = document.getElementById("stall_type");
var stall_bg = document.getElementById("stall_bg");

var stalls = document.querySelectorAll(".stall_1");
var stalls_1 = document.querySelectorAll(".stall_2");

const day1_info = {
    "A1": {
        "url": "./picture/group/group_photo/01.webp",
        "name": "もりトピア",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A2": {
        "url": "./picture/group/group_photo/03.webp",
        "name": "社畜也想跳舞",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A3": {
        "url": "./picture/group/group_photo/04.webp",
        "name": "無限のスターダスト",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A4": {
        "url": "./picture/group/group_photo/05.webp",
        "name": "同担拒否",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A5": {
        "url": "./picture/group/group_photo/06.webp",
        "name": "Under the Rose 守密者",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A6": {
        "url": "./picture/group/group_photo/07.webp",
        "name": "存在証明",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A7": {
        "url": "./picture/group/group_photo/08.webp",
        "name": "虹綿菓子",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A8": {
        "url": "./picture/group/group_photo/10.webp",
        "name": "薄荷彈珠汽水",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A9": {
        "url": "./picture/group/group_photo/11.webp",
        "name": "悠洛",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },

    // D1 B area
    "B1 & B2": {
        "url": "./stall_pics/大江戶外萌-場刊圖.webp",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },

    "B3 & B4": {
        "url": "./stall_pics/W場刊圖.webp",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)(Hololive)"
    },

    "B5": {
        "url": "./stall_pics/楓玥小築-場刊圖.webp",
        "name": "楓玥小築",
        "stall": "1",
        "day": "2",
        "type": "一般向(商業攤)(Hololive)"
    },
    "B6": {
        "url": "./stall_pics/EYE就是愛玩金屬書籤.webp",
        "name": "EYE就是愛玩金屬書籤",
        "stall": "1",
        "day": "2",
        "type": "女性向(商業攤)(刀劍亂舞)"
    },
    // D1 C area



    "C1 & C2": {
        "url": "./stall_pics/+貓耳園+-場刊圖.webp",
        "name": "+喵耳園+",
        "stall": "2",
        "day": "2",
        "type": "一般向(原創)"
    },
    "C3": {
        "url": "./stall_pics/微光創造-場刊圖.webp",
        "name": "微光創造",
        "stall": "2",
        "day": "2",
        "type": "一般向(鬼滅 魔道)"
    },
    "C4": {
        "url": "./stall_pics/同人社團-葉子貓-場刊圖.webp",
        "name": "同人社團-葉子貓",
        "stall": "1",
        "day": "2",
        "type": "一般向（孤獨 明日 夢想成為魔法少女)"
    },
    "C5 & C6": {
        "url": "./stall_pics/妄秋香-場刊圖.webp",
        "name": "妄秋香",
        "stall": "2",
        "day": "2",
        "type": "一般向(原神 崩鐵 holo 原創小說)"
    },
    "C7 & C8": {
        "url": "./stall_pics/神奇山羊飛起來-場刊圖.webp",
        "name": "神奇山羊飛起來",
        "stall": "2",
        "day": "2",
        "type": "一般向(彩虹 光戀 崩鐵 原神 賽馬娘)"
    },
    "C9 & C10": {
        "url": "./stall_pics/MOEMOE-場刊圖.webp",
        "name": "Moe*Moe",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 陰陽 劍三）"
    },
    "C11 & C12": {
        "url": "./stall_pics/班妮動漫-場刊圖.webp",
        "name": "班妮動漫",
        "stall": "2",
        "day": "2",
        "type": "一般向(原神 崩鐵 墨三)"
    },
    "C13": {
        "url": "./stall_pics/甲卍甲甲卍-場刊圖.webp",
        "name": "甲卍甲甲卍",
        "stall": "1",
        "day": "2",
        "type": "女性向（偶像夢幻祭 催麥 迪士尼扭曲仙境 無期迷途 東方）"
    },
    "C14 & C15": {
        "url": "./stall_pics/Tabibito-場刊圖.webp",
        "name": "Tabibito",
        "stall": "2",
        "day": "2",
        "type": "一般向(niji en)"
    },

    "C16 & C17": {
        "url": "./stall_pics/手殘黨-場刊圖.webp",
        "name": "手殘黨",
        "stall": "2",
        "day": "1",
        "type": "一般向（手作 獵人 niji ）"
    },



    // D1 D area
    "D1 & D2": {
        "url": "./stall_pics/可可貓的房子-場刊圖.webp",
        "name": "可可貓的房子",
        "stall": "2",
        "day": "2",
        "type": "一般向（手作）"
    },
    "D3": {
        "url": "./stall_pics/山根書店-場刊圖.webp",
        "name": "山根書店",
        "stall": "1",
        "day": "2",
        "type": "一般向（畫集明信片 花）"
    },
    "D4": {
        "url": "./stall_pics/魚吃草-場刊圖.webp",
        "name": "魚吃草的日常風景",
        "stall": "1",
        "day": "2",
        "type": "一般向（空間場景、日常風景、插畫轉3D)"
    },
    "D5": {
        "url": "./stall_pics/慢慢鳥-場刊圖.webp",
        "name": "慢慢鳥",
        "stall": "1",
        "day": "2",
        "type": "一般向（原創鳥鳥)"
    },
    "D6 & D7": {
        "url": "./stall_pics/恐怖白果醬-場刊圖.webp",
        "name": "恐怖白果醬",
        "stall": "2",
        "day": "2",
        "type": "一般向（孤獨)"
    },
    "D8": {
        "url": "./stall_pics/紫乃沒有乃-場刊圖.webp",
        "name": "紫乃沒有乃",
        "stall": "1",
        "day": "1",
        "type": "一般向（異世界流浪美食家 L團 水星的魔女）"
    },
    "D9": {
        "url": "./stall_pics/藥屋找左邊剩下右邊-場刊圖.webp",
        "name": "藥屋找左邊剩下右邊",
        "stall": "1",
        "day": "1",
        "type": "女性向（藥師 偶像夢幻祭 排少a3)"
    },
    "D10": {
        "url": "./stall_pics/海帶阿海帶-場刊圖.webp",
        "name": "海帶阿海帶",
        "stall": "1",
        "day": "1",
        "type": "女性向（餅國 新世界狂歡)"
    },
    "D11": {
        "url": "./stall_pics/關於蕉民肝硬化那件事-場刊圖.webp",
        "name": "關於蕉民肝硬化那件事",
        "stall": "1",
        "day": "1",
        "type": "女性向(nijien)"
    },
    "D12 & D13": {
        "url": "./stall_pics/野清記事-場刊圖.webp",
        "name": "野清記事",
        "stall": "2",
        "day": "1",
        "type": "女性向(vtuber)"
    },
    "D14": {
        "url": "./stall_pics/炸蝦加工廠-場刊圖.webp",
        "name": "炸蝦加工廠",
        "stall": "1",
        "day": "1",
        "type": "一般向（Niji plave)"
    },
    "D15": {
        "url": "./stall_pics/卯卯島的卯卯君-場刊圖.webp",
        "name": "卯卯島的卯卯君",
        "stall": "1",
        "day": "1",
        "type": "女性向(nijien 新世界狂歡）"
    },

    // D1 E area

    "E1 & E2": {
        "url": "./stall_pics/有害蕈類集會所-場刊圖.webp",
        "name": "有害蕈類集會所",
        "stall": "2",
        "day": "1",
        "type": "男性向(成人)(愛玩幼奴系列)"
    },
    "E3 & E4": {
        "url": "./stall_pics/A_D-場刊圖.webp",
        "name": "【A&D】Angels&Devils",
        "stall": "2",
        "day": "2",
        "type": "女性向(成人)(新世界狂歡、偶像夢幻祭、原創繪本)"
    },
    "E5": {
        "url": "./stall_pics/一般路過天五推-場刊圖.webp",
        "name": "一般路過天五推",
        "stall": "1",
        "day": "1",
        "type": "女性向(成人)(刀劍、原創)"
    },
    // D1 F area


    "F1 & F2": {
        "url": "./stall_pics/旋轉馬鈴薯-場刊圖.webp",
        "name": "旋轉馬鈴薯",
        "stall": "2",
        "day": "1",
        "type": "一般向（進巨 美人魚"
    },
    "F3": {
        "url": "./stall_pics/阿金金的骷髏攤攤-場刊圖.webp",
        "name": "阿金金的骷髏攤攤",
        "stall": "1",
        "day": "1",
        "type": "一般向（咒迴 派對咖 原創)"
    },

    "F4": {
        "url": "./stall_pics/今天也要吃飯糰嗎-場刊圖.webp",
        "name": "今天也要吃飯糰嗎",
        "stall": "1",
        "day": "1",
        "type": "一般向（排少 咒迴)"
    },

    "F5 & F6": {
        "url": "./stall_pics/動漫貓宅屋&繪閣攝影棚-場刊圖.webp",
        "name": "動漫貓宅屋&繪閣攝影棚",
        "stall": "2",
        "day": "1",
        "type": "一般向（花亦山 鬼滅 刀亂)"
    },

    "F7": {
        "url": "./stall_pics/清野君後援會-場刊圖.webp",
        "name": "青野君後援會",
        "stall": "1",
        "day": "1",
        "type": "一般向(niji vocaloid 槍彈辯駁 芙莉蓮 阪本）"
    },


    // D1 G area

    "G1 & G2": {
        "url": "./stall_pics/紡雲織坊-場刊圖.webp",
        "name": "紡雲織坊",
        "stall": "2",
        "day": "1",
        "type": "一般向（娃娃）"
    },

    "G3": {
        "url": "./stall_pics/歐洲人的社團-場刊圖.webp",
        "name": "歐洲人的社團",
        "stall": "1",
        "day": "1",
        "type": "一般向（輕小說)"
    },

    "G4": {
        "url": "./stall_pics/海苔遊戲工房-場刊圖.webp",
        "name": "海苔遊戲工房",
        "stall": "1",
        "day": "1",
        "type": "一般向（人造機械之翼 遊戲週邊)"
    },
    "G5": {
        "url": "./stall_pics/小祭 幻想精靈工坊-場刊圖.webp",
        "name": "小祭 - 幻想妖精工坊",
        "stall": "1",
        "day": "1",
        "type": "一般向（寶可夢 妖錶 動森 獨立遊戲）"
    },
    "G6": {
        "url": "./stall_pics/好朋友工作室-場刊圖.webp",
        "name": "好朋友工作室",
        "stall": "1",
        "day": "1",
        "type": "一般向 (原創 寶可夢)"
    },

    // H area
    "H1": {
        "url": "./stall_pics/H1.webp",
        "name": "嫣媣居 、杜恩恩的魔法衣櫥 、遙之雪",
        "stall": "3",
        "day": "2",
        "type": "古風服飾出租"
    },
    "H2": {
        "url": "./stall_pics/H2.webp",
        "name": "寧淵閣、宇宙薔薇",
        "stall": "2",
        "day": "2",
        "type": "漢服造型工作室、情境攝影工作室"
    },
    "H3": {
        "url": "./stall_pics/H3.webp",
        "name": "菟·手伯 、影閣、尋他記工作室",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H4": {
        "url": "./stall_pics/H4.webp",
        "name": "木顏手作 、妘飾所、媠媠",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H5 & H6": {
        "url": "./stall_pics/H5.webp",
        "url2": "./stall_pics/H6.webp",
        "name": "愛花妍工作室 、 奈何奈生手作坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H7 & H8": {
        "url": "./stall_pics/H7.webp",
        "url2": "./stall_pics/H8.webp",
        "name": "幀實作、あ今A-Jin",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H9 & H10": {
        "url": "./stall_pics/H9.webp",
        "url2": "./stall_pics/H10.webp",
        "name": "墨書皇章、鏡花園",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H11 & H12": {
        "url": "./stall_pics/H11.webp",
        "url2": "./stall_pics/H12.webp",
        "name": "貓月亮、貓語醉古風",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H13": {
        "url": "./stall_pics/H13.webp",
        "name": "墨染閣寫真攝影棚 、 中華傳統文化藝文協會",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H14 & H15": {
        "url": "./stall_pics/H14.webp",
        "url2": "./stall_pics/H15.webp",
        "name": "鋁孩會館、MAX工作室",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H16": {
        "url": "./stall_pics/H16.webp",
        "name": "懿植花手作花坊",
        "stall": "2",
        "day": "2",
        "type": ""
    }
}
const day2_info = {
    "A1": {
        "url": "./picture/group/group_photo/末廣町女僕咖啡.webp",
        "name": "末廣町",
        "stall": "1",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },
    "A2 & A3": {
        "url": "./picture/group/group_photo/星辰偶像練習生.webp",
        "name": "Kirabase",
        "stall": "2",
        "day": "1",
        "type": "-詳情見「舞台活動」專區-"
    },

    // B area
    "B1 & B2": {
        "url": "./stall_pics/大江戶外萌-場刊圖.webp",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "B3 & B4": {
        "url": "./stall_pics/W場刊圖.webp",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)(Hololive)"
    },
    "B5": {
        "url": "./stall_pics/楓玥小築-場刊圖.webp",
        "name": "楓玥小築",
        "stall": "1",
        "day": "2",
        "type": "一般向(商業攤)(Hololive)"
    },
    "B6": {
        "url": "./stall_pics/EYE就是愛玩金屬書籤.webp",
        "name": "EYE就是愛玩金屬書籤",
        "stall": "1",
        "day": "2",
        "type": "女性向(商業攤)(刀劍亂舞)"
    },

    "B7 & B8": {
        "url": "./stall_pics/Deity-Mark-祇印工作室-場刊圖.webp",
        "name": "Deity Mark 祇印工作室",
        "stall": "2",
        "day": "1",
        "type": "一般向(商業攤)(Hololive、彩虹社、排球少年)"
    },

    //D2 C area
    "C1 & C2": {
        "url": "./stall_pics/+貓耳園+-場刊圖.webp",
        "name": "+喵耳園+",
        "stall": "2",
        "day": "2",
        "type": "一般向(原創)"
    },
    "C3": {
        "url": "./stall_pics/微光創造-場刊圖.webp",
        "name": "微光創造",
        "stall": "2",
        "day": "2",
        "type": "一般向(鬼滅 魔道)"
    },
    "C4": {
        "url": "./stall_pics/同人社團-葉子貓-場刊圖.webp",
        "name": "同人社團-葉子貓",
        "stall": "1",
        "day": "2",
        "type": "一般向（孤獨 明日 夢想成為魔法少女)"
    },
    "C5 & C6": {
        "url": "./stall_pics/妄秋香-場刊圖.webp",
        "name": "妄秋香",
        "stall": "2",
        "day": "2",
        "type": "一般向(原神 崩鐵 holo 原創小說)"
    },
    "C7 & C8": {
        "url": "./stall_pics/神奇山羊飛起來-場刊圖.webp",
        "name": "神奇山羊飛起來",
        "stall": "2",
        "day": "2",
        "type": "一般向(彩虹 光戀 崩鐵 原神 賽馬娘)"
    },
    "C9 & C10": {
        "url": "./stall_pics/MOEMOE-場刊圖.webp",
        "name": "Moe*Moe",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 陰陽 劍三）"
    },
    "C11 & C12": {
        "url": "./stall_pics/班妮動漫-場刊圖.webp",
        "name": "班妮動漫",
        "stall": "2",
        "day": "2",
        "type": "一般向(原神 崩鐵 墨三)"
    },
    "C13": {
        "url": "./stall_pics/甲卍甲甲卍-場刊圖.webp",
        "name": "甲卍甲甲卍",
        "stall": "1",
        "day": "2",
        "type": "女性向(偶像夢幻祭 催麥 迪士尼扭曲仙境 無期迷途 東方)"
    },
    "C14 & C15": {
        "url": "./stall_pics/Tabibito-場刊圖.webp",
        "name": "Tabibito",
        "stall": "2",
        "day": "2",
        "type": "一般向(niji en)"
    },
    "C16": {
        "url": "./stall_pics/塔董今年沒辦法買小島-場刊圖.webp",
        "name": "塔董今年沒辦法買小島",
        "stall": "1",
        "day": "1",
        "type": "女性向(彩虹社)"
    },
    "C17": {
        "url": "./stall_pics/不透船屋-場刊圖.webp",
        "name": "不透船屋",
        "stall": "1",
        "day": "1",
        "type": "一般向(芙莉蓮 holo 扳機社)"
    },

    //D2 D area
    "D1 & D2": {
        "url": "./stall_pics/可可貓的房子-場刊圖.webp",
        "name": "可可貓的房子",
        "stall": "2",
        "day": "2",
        "type": "一般向（手作）"
    },
    "D3": {
        "url": "./stall_pics/山根書店-場刊圖.webp",
        "name": "山根書店",
        "stall": "1",
        "day": "2",
        "type": "一般向（畫集明信片 花）"
    },
    "D4": {
        "url": "./stall_pics/魚吃草-場刊圖.webp",
        "name": "魚吃草的日常風景",
        "stall": "1",
        "day": "2",
        "type": "一般向（空間場景、日常風景、插畫轉3D)"
    },
    "D5": {
        "url": "./stall_pics/慢慢鳥-場刊圖.webp",
        "name": "慢慢鳥",
        "stall": "1",
        "day": "2",
        "type": "一般向（原創鳥鳥)"
    },
    "D6 & D7": {
        "url": "./stall_pics/恐怖白果醬-場刊圖.webp",
        "name": "恐怖白果醬",
        "stall": "2",
        "day": "2",
        "type": "一般向（孤獨)"
    },
    "D8": {
        "url": "./stall_pics/南方四重奏-場刊圖.webp",
        "name": "南方四重奏",
        "stall": "1",
        "day": "1",
        "type": "一般向(東方project)"
    },
    "D9": {
        "url": "./stall_pics/都進來鏟屎-場刊圖.webp",
        "name": "都進來鏟屎",
        "stall": "1",
        "day": "1",
        "type": "一般向(貓咪)"
    },
    "D10": {
        "url": "./stall_pics/嘟嚕啦咘嗒-場刊圖.webp",
        "name": "嘟嚕啦咘嗒",
        "stall": "1",
        "day": "1",
        "type": "一般向(jojo的奇妙冒險)"
    },
    "D11": {
        "url": "./stall_pics/吐血貓小P-場刊圖.webp",
        "name": "吐血貓小P",
        "stall": "1",
        "day": "1",
        "type": "女性向(黑執事 東京復仇者)"
    },

    "D12": {
        "url": "./stall_pics/Victor-場刊圖.webp",
        "name": "frieren fan art",
        "stall": "1",
        "day": "1",
        "type": "一般向(芙莉蓮)"
    },
    "D13": {
        "url": "./stall_pics/喇密時區入境處-場刊圖.webp",
        "name": "喇密時區入境處",
        "stall": "1",
        "day": "1",
        "type": "一般向(原創 VTuber 喇密時區入境處)"
    },
    "D14": {
        "url": "./stall_pics/小碗手作工作坊-場刊圖.webp",
        "name": "小宛手作工作坊",
        "stall": "1",
        "day": "1",
        "type": "一般向(主題性手工穿戴甲)"
    },

    // D2 E area
    "E1": {
        "url": "./stall_pics/玟或珉-場刊圖.webp",
        "name": "玟或珉",
        "stall": "2",
        "day": "1",
        "type": "女性向(成人 原創小說)"
    },
    "E2": {
        "url": "./stall_pics/離月-場刊圖.webp",
        "name": "離月",
        "stall": "2",
        "day": "1",
        "type": "女性向(成人 灌籃高手同人誌)"
    },
    "E3 & E4": {
        "url": "./stall_pics/A_D-場刊圖.webp",
        "name": "【A&D】Angels&Devils",
        "stall": "2",
        "day": "2",
        "type": "女性向(成人)(新世界狂歡、偶像夢幻祭、原創繪本)"
    },
    // H area
    "H1": {
        "url": "./stall_pics/H1.webp",
        "name": "嫣媣居 、杜恩恩的魔法衣櫥 、遙之雪",
        "stall": "3",
        "day": "2",
        "type": "古風服飾出租"
    },
    "H2": {
        "url": "./stall_pics/H2.webp",
        "name": "寧淵閣、宇宙薔薇",
        "stall": "2",
        "day": "2",
        "type": "漢服造型工作室、情境攝影工作室"
    },
    "H3": {
        "url": "./stall_pics/H3.webp",
        "name": "菟·手伯 、影閣、尋他記工作室",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H4": {
        "url": "./stall_pics/H4.webp",
        "name": "木顏手作 、妘飾所、媠媠",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H5 & H6": {
        "url": "./stall_pics/H5.webp",
        "url2": "./stall_pics/H6.webp",
        "name": "愛花妍工作室 、 奈何奈生手作坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H7 & H8": {
        "url": "./stall_pics/H7.webp",
        "url2": "./stall_pics/H8.webp",
        "name": "幀實作、あ今A-Jin",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H9 & H10": {
        "url": "./stall_pics/H9.webp",
        "url2": "./stall_pics/H10.webp",
        "name": "墨書皇章、鏡花園",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H11 & H12": {
        "url": "./stall_pics/H11.webp",
        "url2": "./stall_pics/H12.webp",
        "name": "貓月亮、貓語醉古風",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H13": {
        "url": "./stall_pics/H13.webp",
        "name": "墨染閣寫真攝影棚 、 中華傳統文化藝文協會",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H14 & H15": {
        "url": "./stall_pics/H14.webp",
        "url2": "./stall_pics/H15.webp",
        "name": "鋁孩會館、MAX工作室",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H16": {
        "url": "./stall_pics/H16.webp",
        "name": "懿植花手作花坊",
        "stall": "2",
        "day": "2",
        "type": ""
    }
}

if (info) {
    info.style.display = "none";
}

btn.onmousedown = function () {
    if (!day) {
        btn_name.textContent = "切換日期 (4/21->4/20)";
        background.src = "./map_d2.webp";
        stalls_1.forEach(function (stall) {
            stall.style.display = "block";
        })
        stalls.forEach(function (stall) {
            stall.style.display = "none";
        })
    }
    else {
        btn_name.textContent = "切換日期 (4/20->4/21)";
        background.src = "./map_d1.webp";
        stalls_1.forEach(function (stall) {
            stall.style.display = "none";
        })
        stalls.forEach(function (stall) {
            stall.style.display = "block";
        })
    }
    day = !day;
};

if (info) {
    // map.addEventListener('mousedown', function (e) {
    //     if (info.style.display == "none") dragging = true;
    //     else dragging = false;

    //     offset.x = e.clientX - map.getBoundingClientRect().left;
    //     offset.y = e.clientY - map.getBoundingClientRect().top;
    // })

    info.onmousedown = function () {
        info.style.display = "none";
    };


}



stalls.forEach(function (stall) {
    stall.addEventListener('mousedown', function () {
        var num = stall.id;
        var name = day1_info[num].name;
        var src = day1_info[num].url;
        var date = day1_info[num].day;
        var type = day1_info[num].type;
        if (day1_info[num].url2) {
            stall_bg.classList.add('stallpic-bg2');
            stall_bg.classList.remove('stall_pic_bg');
            stall_pic.classList.add('with_stallpic2');
            stall_pic.classList.remove('stallpic');



            stall_pic2.src = day1_info[num].url2;
            stall_pic2.style.display = 'block';

        } else {
            stall_bg.classList.add('stall_pic_bg');
            stall_bg.classList.remove('stallpic-bg2');
            stall_pic.classList.remove('with_stallpic2');
            stall_pic.classList.add('stallpic');

            stall_pic2.style.display = 'none';
        }

        stall_name.textContent = name;
        stall_num.textContent = num;
        stall_date.textContent = date;
        stall_type.textContent = type;
        stall_pic.src = src;
        info.style.display = "block";
    })
})

stalls_1.forEach(function (stall) {
    stall.style.display = "none";
    stall.addEventListener('mousedown', function () {
        var num = stall.id;
        var name = day2_info[num].name;
        var src = day2_info[num].url;
        var date = day2_info[num].day;
        var type = day2_info[num].type;

        if (day2_info[num].url2) {
            stall_bg.classList.add('stallpic-bg2');
            stall_bg.classList.remove('stall_pic_bg');
            stall_pic.classList.add('with_stallpic2');
            stall_pic.classList.remove('stallpic');



            stall_pic2.src = day1_info[num].url2;
            stall_pic2.style.display = 'block';

        } else {
            stall_bg.classList.add('stall_pic_bg');
            stall_bg.classList.remove('stallpic-bg2');
            stall_pic.classList.remove('with_stallpic2');
            stall_pic.classList.add('stallpic');

            stall_pic2.style.display = 'none';
        }


        stall_name.textContent = name;
        stall_num.textContent = num;
        stall_date.textContent = date;
        stall_type.textContent = type;
        stall_pic.src = src;
        info.style.display = "block";
    })
})