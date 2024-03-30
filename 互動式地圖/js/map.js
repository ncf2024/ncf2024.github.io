var dragging = false;
var day = false;
var offset = {x: 0, y: 0};

var map = document.getElementById("map");
var info = document.getElementById("info");
var btn = document.getElementById("day");
var btn_name = document.getElementById("day_name");
var background = document.getElementById("back");
var stall_name = document.getElementById("stall_name");
var stall_pic = document.getElementById("stall_pic");
var stall_num = document.getElementById("stall_num");
var stall_date = document.getElementById("stall_date");
var stall_type = document.getElementById("stall_type");

var stalls   = document.querySelectorAll(".stall_1");
var stalls_1 = document.querySelectorAll(".stall_2");

const day1_info = {
    "A1": {
        "url": "./stall_pics/01もりトピアLOGO.png",
        "name": "もりトピア",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A3": {
        "url": "./stall_pics/03社畜也想跳舞-宣傳照.jpg",
        "name": "社畜也想跳舞",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A4": {
        "url": "./stall_pics/04無限のスターダスト.jpg",
        "name": "無限のスターダスト",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A5": {
        "url": "./stall_pics/05同担拒否團體照.jpg",
        "name": "同担拒否",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A6": {
        "url": "./stall_pics/06Under the Rose 守密者團體照.jpg",
        "name": "Under the Rose 守密者",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A7": {
        "url": "./stall_pics/07存在証明和風主視覺.jpg",
        "name": "存在証明",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A8": {
        "url": "./stall_pics/08虹綿菓子宣傳照.png",
        "name": "虹綿菓子",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A9": {
        "url": "./stall_pics/09Nomona-宣傳照片.JPG",
        "name": "Nomona",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A10": {
        "url": "./stall_pics/10薄荷彈珠汽水宣傳照.JPG",
        "name": "薄荷彈珠汽水",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A11": {
        "url": "./stall_pics/11悠洛YoLo-OvO宣傳照.png",
        "name": "悠洛",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A12": {
        "url": "./stall_pics/12羅曼史少女＆白星夢.jpg",
        "name": "羅曼史少女＆白星夢",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "C1": {
        "url": "./blank.png",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "C2": {
        "url": "./blank.png",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "C3": {
        "url": "./blank.png",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C4": {
        "url": "./blank.png",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C5": {
        "url": "./blank.png",
        "name": "楓玥小築",
        "stall": "1",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C6": {
        "url": "./blank.png",
        "name": "EYE就是愛玩金屬書籤",
        "stall": "1",
        "day": "2",
        "type": "女性向(刀劍亂舞)"
    },
    "D1 & D2": {
        "url": "./blank.png",
        "name": "動漫貓宅屋&繪閣攝影棚",
        "stall": "2",
        "day": "1",
        "type": "女性向(vtuber)"
    },
    "D16": {
        "url": "./stall_pics/同人社團-葉子貓-場刊圖.png",
        "name": "同人社團-葉子貓",
        "stall": "1",
        "day": "2",
        "type": ""
    },
    "D17": {
        "url": "./stall_pics/今天也要吃飯糰嗎-場刊圖.png",
        "name": "今天也要吃飯糰嗎",
        "stall": "1",
        "day": "1",
        "type": "女性向（餅國 新世界狂歡)"
    },
    "D3": {
        "url": "./stall_pics/微光創造-場刊圖.png",
        "name": "微光創造",
        "stall": "2",
        "day": "2",
        "type": "女性向(niji en)"
    },
    "D18": {
        "url": "./stall_pics/阿金金的骷髏攤攤-場刊圖.png",
        "name": "阿金金的骷髏攤攤",
        "stall": "1",
        "day": "1",
        "type": "女性向（偶像夢幻祭 催麥 迪士尼扭曲仙境 無期迷途 東方)"
    },
    "D4": {
        "url": "./stall_pics/Mafu莫芙-場刊圖.png",
        "name": "Mafu莫芙",
        "stall": "1",
        "day": "1",
        "type": "女性向（餅國 新世界狂歡)"
    },
    "D19 & D20": {
        "url": "./stall_pics/班妮動漫-場刊圖.png",
        "name": "班妮動漫",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "D5 & D6": {
        "url": "./stall_pics/妄秋香-場刊圖.png",
        "name": "妄秋香",
        "stall": "2",
        "day": "2",
        "type": "一般向"
    },
    "D21 & D22": {
        "url": "./stall_pics/MOEMOE-場刊圖.png",
        "name": "Moe*Moe",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 陰陽 劍三）"
    },
    "D7 & D8": {
        "url": "./stall_pics/神奇山羊飛起來-場刊圖.png",
        "name": "神奇山羊飛起來",
        "stall": "2",
        "day": "2",
        "type": "一般向"
    },
    "D23 & D24": {
        "url": "./stall_pics/手殘黨-場刊圖.png",
        "name": "手殘黨",
        "stall": "2",
        "day": "1",
        "type": ""
    },
    "D9 & D10": {
        "url": "./stall_pics/恐怖白果醬-場刊圖.png",
        "name": "恐怖白果醬",
        "stall": "2",
        "day": "2",
        "type": "一般向（孤獨"
    },
    "D25 & D26": {
        "url": "./stall_pics/Tabibito-場刊圖.png",
        "name": "Tabibito",
        "stall": "2",
        "day": "2",
        "type": "一般向(niji en)"
    },
    "D11": {
        "url": "./stall_pics/紫乃沒有乃-場刊圖.png",
        "name": "紫乃沒有乃",
        "stall": "1",
        "day": "1",
        "type": "女性向(成人)（原二）"
    },
    "D12": {
        "url": "./stall_pics/清野君後援會-場刊圖.png",
        "name": "青野君後援會",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "D27": {
        "url": "./stall_pics/炸蝦加工廠-場刊圖.png",
        "name": "炸蝦加工廠",
        "stall": "1",
        "day": "1",
        "type": "女性向(成人)"
    },
    "D13": {
        "url": "./stall_pics/Shizu-場刊圖.png",
        "name": "Shizu",
        "stall": "1",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "D28": {
        "url": "./stall_pics/卯卯島的卯卯君-場刊圖.png",
        "name": "卯卯島的卯卯君",
        "stall": "1",
        "day": "1",
        "type": "男性向(成人)"
    },
    "D29": {
        "url": "./stall_pics/關於蕉民肝硬化那件事-場刊圖.png",
        "name": "關於蕉民肝硬化那件事",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "D30 & D31": {
        "url": "./stall_pics/野清記事-場刊圖.png",
        "name": "野清記事",
        "stall": "2",
        "day": "1",
        "type": ""
    },
    "D14": {
        "url": "./stall_pics/藥屋找左邊剩下右邊-場刊圖.png",
        "name": "藥屋找左邊剩下右邊",
        "stall": "1",
        "day": "1",
        "type": "彩虹 holo "
    },
    "D15": {
        "url": "./stall_pics/甲卍甲甲卍-場刊圖.png",
        "name": "甲卍甲甲卍",
        "stall": "1",
        "day": "2",
        "type": ""
    },
    "D32": {
        "url": "./stall_pics/海帶阿海帶-場刊圖.png",
        "name": "海帶阿海帶",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "E1 & E2": {
        "url": "./stall_pics/A_D-場刊圖.png",
        "name": "【A&D】Angels&Devils",
        "stall": "2",
        "day": "2",
        "type": "女性向(成人)"
    },
    "E3": {
        "url": "./stall_pics/一般路過天五推-場刊圖.png",
        "name": "一般路過天五推",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "E4 & E5": {
        "url": "./stall_pics/有害蕈類集會所-場刊圖.png",
        "name": "有害蕈類集會所",
        "stall": "2",
        "day": "1",
        "type": ""
    },
    "F8 & F9": {
        "url": "stall_0.png",
        "name": "可可貓的房子",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "F10": {
        "url": "./stall_pics/歐洲人的社團-場刊圖.png",
        "name": "歐洲人的社團",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "F11": {
        "url": "./stall_pics/海苔遊戲工房-場刊圖.png",
        "name": "海苔遊戲工房",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "F12": {
        "url": "./stall_pics/小祭 幻想精靈工坊-場刊圖.png",
        "name": "小祭 - 幻想妖精工坊",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "F13": {
        "url": "./stall_pics/好朋友工作室-場刊圖.png",
        "name": "好朋友工作室",
        "stall": "1",
        "day": "1",
        "type": ""
    },
    "F1 & F2": {
        "url": "./stall_pics/紡雲織坊-場刊圖.png",
        "name": "紡雲織坊",
        "stall": "2",
        "day": "1",
        "type": ""
    },
    "F3": {
        "url": "./stall_pics/山根書店-場刊圖.png",
        "name": "山根書店",
        "stall": "1",
        "day": "2",
        "type": ""
    },
    "F4": {
        "url": "./stall_pics/魚吃草-場刊圖.png",
        "name": "魚吃草的日常風景",
        "stall": "1",
        "day": "2",
        "type": "一般向（明信片)"
    },
    "F5": {
        "url": "./stall_pics/慢慢鳥-場刊圖.png",
        "name": "慢慢鳥",
        "stall": "1",
        "day": "2",
        "type": ""
    },
    "F6 & F7": {
        "url": "./stall_pics/旋轉馬鈴薯-場刊圖.png",
        "name": "旋轉馬鈴薯",
        "stall": "2",
        "day": "1",
        "type": ""
    },
    "H1": {
        "url": "./blank.png",
        "name": "嫣媣居 、杜恩恩的魔法衣櫥 、遙之雪",
        "stall": "3",
        "day": "2",
        "type": "古風服飾出租"
    },
    "H2": {
        "url": "./blank.png",
        "name": "寧淵閣、宇宙薔薇",
        "stall": "2",
        "day": "2",
        "type": "漢服造型工作室、情境攝影工作室"
    },
    "H3": {
        "url": "./blank.png",
        "name": "菟·手伯 、影閣、尋他記工作室",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H4": {
        "url": "./blank.png",
        "name": "木顏手花 、妘飾所、媠媠",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H5 & H6": {
        "url": "./blank.png",
        "name": "愛花妍工作室 、 奈何奈生手作坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H7 & H8": {
        "url": "./blank.png",
        "name": "幀實作、あ今A-Jin",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H9 & H10": {
        "url": "./blank.png",
        "name": "墨書皇章、鏡花園",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H11 & H12": {
        "url": "./blank.png",
        "name": "貓月亮、貓語醉古風",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H13": {
        "url": "./blank.png",
        "name": "墨染閣寫真攝影棚 、 中華傳統文化藝文協會",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H14 & H15": {
        "url": "./blank.png",
        "name": "鋁孩會館、懿植花手作花坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H16": {
        "url": "./blank.png",
        "name": "MAX工作室",
        "stall": "2",
        "day": "2",
        "type": ""
    }
}
const day2_info = {
    "A1": {
        "url": "./stall_pics/01もりトピアLOGO.png",
        "name": "もりトピア",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A3": {
        "url": "./stall_pics/03社畜也想跳舞-宣傳照.jpg",
        "name": "社畜也想跳舞",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A4": {
        "url": "./stall_pics/04無限のスターダスト.jpg",
        "name": "無限のスターダスト",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A5": {
        "url": "./stall_pics/05同担拒否團體照.jpg",
        "name": "同担拒否",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A6": {
        "url": "./stall_pics/06Under the Rose 守密者團體照.jpg",
        "name": "Under the Rose 守密者",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A7": {
        "url": "./stall_pics/07存在証明和風主視覺.jpg",
        "name": "存在証明",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A8": {
        "url": "./stall_pics/08虹綿菓子宣傳照.png",
        "name": "虹綿菓子",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A9": {
        "url": "./stall_pics/09Nomona-宣傳照片.JPG",
        "name": "Nomona",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A10": {
        "url": "./stall_pics/10薄荷彈珠汽水宣傳照.JPG",
        "name": "薄荷彈珠汽水",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A11": {
        "url": "./stall_pics/11悠洛YoLo-OvO宣傳照.png",
        "name": "悠洛",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "A12": {
        "url": "./stall_pics/12羅曼史少女＆白星夢.jpg",
        "name": "羅曼史少女＆白星夢",
        "stall": "1",
        "day": "2",
        "type": "-詳情洽超連結-"
    },
    "C1": {
        "url": "./blank.png",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "C2": {
        "url": "./blank.png",
        "name": "大江戶外萌",
        "stall": "2",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "C3": {
        "url": "./blank.png",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C4": {
        "url": "./blank.png",
        "name": "W&amp;Y Costudio 攝影窩",
        "stall": "2",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C5": {
        "url": "./blank.png",
        "name": "楓玥小築",
        "stall": "1",
        "day": "2",
        "type": "一般向(Hololive)"
    },
    "C6": {
        "url": "./blank.png",
        "name": "EYE就是愛玩金屬書籤",
        "stall": "1",
        "day": "2",
        "type": "女性向(刀劍亂舞)"
    },
    "D1": {
        "url": "./stall_pics/Shizu-場刊圖.png",
        "name": "Shizu",
        "stall": "1",
        "day": "2",
        "type": "一般向(商業攤)（原神 崩鐵 holo)"
    },
    "D16": {
        "url": "./stall_pics/同人社團-葉子貓-場刊圖.png",
        "name": "同人社團-葉子貓",
        "stall": "1",
        "day": "2",
        "type": "一般向（孤獨 明日 夢想成為魔法少女)"
    },
    "D2 & D3": {
        "url": "./stall_pics/Tabibito-場刊圖.png",
        "name": "Tabibito",
        "stall": "2",
        "day": "2",
        "type": "一般向(niji en)"
    },
    "D17": {
        "url": "./stall_pics/微光創造-場刊圖.png",
        "name": "微光創造",
        "stall": "1",
        "day": "1",
        "type": "一般向(鬼滅 魔道)"
    },
    "D18": {
        "url": "./stall_pics/慢慢鳥-場刊圖.png",
        "name": "慢慢鳥",
        "stall": "1",
        "day": "2",
        "type": "一般向（原創鳥鳥)"
    },
    "D4": {
        "url": "./stall_pics/不透船屋-場刊圖.png",
        "name": "不透船屋",
        "stall": "1",
        "day": "1",
        "type": "一般向(芙莉蓮 holo 扳機社)"
    },
    "D19": {
        "url": "./stall_pics/魚吃草-場刊圖.png",
        "name": "魚吃草的日常風景",
        "stall": "1",
        "day": "2",
        "type": "一般向（明信片)"
    },
    "D5 & D6": {
        "url": "./stall_pics/神奇山羊飛起來-場刊圖.png",
        "name": "神奇山羊飛起來",
        "stall": "2",
        "day": "2",
        "type": "一般向(彩虹 光戀 崩鐵 原神 賽馬娘)"
    },
    "D20": {
        "url": "./stall_pics/山根書店-場刊圖.png",
        "name": "山根書店",
        "stall": "1",
        "day": "2",
        "type": "一般向（畫集明信片 花）"
    },
    "D21 & D22": {
        "url": "./blank.png",
        "name": "可可貓的房子",
        "stall": "2",
        "day": "2",
        "type": "一般向（手作）"
    },
    "D7 & D8": {
        "url": "./stall_pics/妄秋香-場刊圖.png",
        "name": "妄秋香",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 holo 原創小說）"
    },
    "D23 & D24": {
        "url": "./blank.png",
        "name": "+喵耳園+",
        "stall": "2",
        "day": "2",
        "type": "一般向"
    },
    "D9": {
        "url": "./stall_pics/Mafu莫芙-場刊圖.png",
        "name": "Mafu莫芙",
        "stall": "1",
        "day": "2",
        "type": "一般向（原神)"
    },
    "D10 & D11": {
        "url": "./stall_pics/班妮動漫-場刊圖.png",
        "name": "班妮動漫",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 墨三）"
    },
    "D25": {
        "url": "./blank.png",
        "name": "嘟嚕啦咘嗒",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D26": {
        "url": "./blank.png",
        "name": "小宛手作工作坊",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D27": {
        "url": "./blank.png",
        "name": "南方四重奏",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D28": {
        "url": "./blank.png",
        "name": "Ncku manga club",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D29": {
        "url": "./blank.png",
        "name": "都進來鏟屎",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D30": {
        "url": "./blank.png",
        "name": "喇密時區入境處",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D31": {
        "url": "./blank.png",
        "name": "吐血貓小P",
        "stall": "1",
        "day": "1",
        "type": "一般向"
    },
    "D12 & D13": {
        "url": "./stall_pics/MOEMOE-場刊圖.png",
        "name": "Moe*Moe",
        "stall": "2",
        "day": "2",
        "type": "一般向（原神 崩鐵 陰陽 劍三）"
    },
    "D14 & D15": {
        "url": "./stall_pics/恐怖白果醬-場刊圖.png",
        "name": "恐怖白果醬",
        "stall": "2",
        "day": "2",
        "type": "一般向（孤獨）"
    },
    "E1 & E2": {
        "url": "./stall_pics/A_D-場刊圖.png",
        "name": "【A&D】Angels&Devils",
        "stall": "2",
        "day": "2",
        "type": "女性向(成人)"
    },
    "H1": {
        "url": "./blank.png",
        "name": "嫣媣居 、杜恩恩的魔法衣櫥 、遙之雪",
        "stall": "3",
        "day": "2",
        "type": "古風服飾出租"
    },
    "H2": {
        "url": "./blank.png",
        "name": "寧淵閣、宇宙薔薇",
        "stall": "2",
        "day": "2",
        "type": "漢服造型工作室、情境攝影工作室"
    },
    "H3": {
        "url": "./blank.png",
        "name": "菟·手伯 、影閣、尋他記工作室",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H4": {
        "url": "./blank.png",
        "name": "木顏手花 、妘飾所、媠媠",
        "stall": "3",
        "day": "2",
        "type": ""
    },
    "H5 & H6": {
        "url": "./blank.png",
        "name": "愛花妍工作室 、 奈何奈生手作坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H7 & H8": {
        "url": "./blank.png",
        "name": "幀實作、あ今A-Jin",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H9 & H10": {
        "url": "./blank.png",
        "name": "墨書皇章、鏡花園",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H11 & H12": {
        "url": "./blank.png",
        "name": "貓月亮、貓語醉古風",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H13": {
        "url": "./blank.png",
        "name": "墨染閣寫真攝影棚 、 中華傳統文化藝文協會",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H14 & H15": {
        "url": "./blank.png",
        "name": "鋁孩會館、懿植花手作花坊",
        "stall": "2",
        "day": "2",
        "type": ""
    },
    "H16": {
        "url": "./blank.png",
        "name": "MAX工作室",
        "stall": "2",
        "day": "2",
        "type": ""
    }
}

info.style.display = "none";

window.addEventListener('resize', function(){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    info.style.top = 120 - (911 - height)/2 + 'px';
    info.style.left = 425 - (1920 - width)/2 + 'px';
})

btn.onmousedown = function(){
    if(!day){
        btn_name.textContent = "切換時間 (4/21->4/20)";
        background.src = "./map_d2.png";
        stalls_1.forEach(function(stall){
            stall.style.display = "block";
        })
        stalls.forEach(function(stall){
            stall.style.display = "none";
        })
    }
    else{
        btn_name.textContent = "切換時間 (4/20->4/21)";
        background.src = "./map_d1.png";
        stalls_1.forEach(function(stall){
            stall.style.display = "none";
        })
        stalls.forEach(function(stall){
            stall.style.display = "block";
        })
    }
    day = !day;
};

map.addEventListener('mousedown', function(e){
    if(info.style.display == "none") dragging = true;
    else dragging = false;

    offset.x = e.clientX - map.getBoundingClientRect().left;
    offset.y = e.clientY - map.getBoundingClientRect().top;
})

map.addEventListener('mouseup', function(){
    dragging = false;
    map.style.cursor = 'grab';
})

map.addEventListener('mousemove', function(e){
    if(!dragging) return;

    var x = e.clientX - offset.x;
    var y = e.clientY - offset.y;

    map.style.left = x + "px";
    map.style.top = y + "px";
})

info.onmousedown = function() {
    info.style.display = "none";
};

stalls.forEach(function(stall){
    stall.addEventListener('mousedown', function(){
        var num = stall.id;
        var name = day1_info[num].name;
        var src = day1_info[num].url;
        var date = day1_info[num].day;
        var type = day1_info[num].type;

        stall_name.textContent = name;
        stall_name.style.left = 262 - (name.length * 48) / 2 + "px";
        stall_num.textContent = num;
        stall_date.textContent = date;
        stall_type.textContent = type;
        stall_pic.src = src;
        info.style.display = "block";
    })
})

stalls_1.forEach(function(stall){
    stall.style.display = "none";
    stall.addEventListener('mousedown', function(){
        var num = stall.id;
        var name = day2_info[num].name;
        var src = day2_info[num].url;
        var date = day2_info[num].day;
        var type = day2_info[num].type;

        stall_name.textContent = name;
        stall_name.style.left = 262 - (name.length * 48) / 2 + "px";
        stall_num.textContent = num;
        stall_date.textContent = date;
        stall_type.textContent = type;
        stall_pic.src = src;
        info.style.display = "block";
    })
})