from bs4 import BeautifulSoup
import json

html_content = '''
                        <img class="stall_2" style="width: 27px; height: 20px; left: 633px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/Shizu-場刊圖.png" draggable="false" id="D1" name="Shizu"/>
            <img class="stall_2" style="width: 27px; height: 20px; left: 633px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/同人社團-葉子貓-場刊圖.png" draggable="false" id="D16" name="同人社團-葉子貓"/>
            <img class="stall_2" style="width: 54px; height: 20px; left: 660px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/Tabibito-場刊圖.png" draggable="false" id="D2 & D3" name="Tabibito"/>
            <img class="stall_2" style="width: 25px; height: 20px; left: 660px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/微光創造-場刊圖.png" draggable="false" id="D17" name="微光創造"/>
            <img class="stall_2" style="width: 27px; height: 20px; left: 685px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/慢慢鳥-場刊圖.png" draggable="false" id="D18" name="慢慢鳥"/>
            <img class="stall_2" style="width: 27px; height: 20px; left: 712px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/不透船屋-場刊圖.png" draggable="false" id="D4" name="不透船屋" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 712px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/魚吃草的日常風景-場刊圖.png" draggable="false" id="D19" name="魚吃草的日常風景" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 738px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/神奇山羊飛起來-場刊圖.png" draggable="false" id="D5 & D6" name="神奇山羊飛起來" />
            <img class="stall_2" style="width: 29px; height: 20px; left: 738px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/山根書店-場刊圖.png" draggable="false" id="D20" name="山根書店" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 767px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/可可貓的房子-場刊圖.png" draggable="false" id="D21 & D22" name="可可貓的房子" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 793px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/妄秋香-場刊圖.png" draggable="false" id="D7 & D8" name="妄秋香" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 820px; top: 386px; position: absolute; border: 1px #001956 solid" src="stall_0.png" draggable="false" id="D23 & D24" name="+喵耳園+" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 847px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/Mafu莫芙-場刊圖.png" draggable="false" id="D9" name="Mafu莫芙" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 873px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/班妮動漫-場刊圖.png" draggable="false" id="D10 & D11" name="班妮動漫" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 873px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/嘟嚕啦咘嗒-場刊圖.png" draggable="false" id="D25" name="嘟嚕啦咘嗒" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 899px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/小宛手作工作坊-場刊圖.png" draggable="false" id="D26" name="小宛手作工作坊" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 925px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/南方四重奏-場刊圖.png" draggable="false" id="D27" name="南方四重奏" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 953px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/Ncku manga club-場刊圖.png" draggable="false" id="D28" name="Ncku manga club" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 980px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/都進來鏟屎-場刊圖.png" draggable="false" id="D29" name="都進來鏟屎" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 1006px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/喇密時區入境處-場刊圖.png" draggable="false" id="D30" name="喇密時區入境處" />
            <img class="stall_2" style="width: 27px; height: 20px; left: 1033px; top: 386px; position: absolute; border: 1px #001956 solid" src="./stall_pics/吐血貓小P-場刊圖.png" draggable="false" id="D31" name="吐血貓小P" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 925px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/Moe*Moe-場刊圖.png" draggable="false" id="D12 & D13" name="Moe*Moe" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 1030px; top: 342px; position: absolute; border: 1px #001956 solid" src="./stall_pics/恐怖白果醬-場刊圖.png" draggable="false" id="D14 & D15" name="恐怖白果醬" />
            <img class="stall_2" style="width: 54px; height: 20px; left: 1095px; top: 318px; position: absolute; border: 1px #001956 solid" src="./stall_pics/A_D-場刊圖.png" draggable="false" id="E1 & E2" name="【A&D】Angels&Devils" />
'''

soup = BeautifulSoup(html_content, 'html.parser')

data = {}
for img_tag in soup.find_all('img'):
    img_id = img_tag['id']
    img_url = img_tag['src']
    img_name = img_tag['name']
    data[img_id] = {
        "url": "." + img_url,
        "name": img_name,
        "stall": "",
        "day": "",
        "type":""
    }

json_data = json.dumps(data, indent=4, ensure_ascii=False)
print(json_data)