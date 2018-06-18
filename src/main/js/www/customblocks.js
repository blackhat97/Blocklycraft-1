/************************************************************************
## Blockly-Minecraft blocks
Lauro Canonica: Original author (Devoxx4kids Lugano 2015.04)

Contains the description of the Minecraft blocks for Blockly

***/

//Naturally generated and created material blocks http://minecraft.gamepedia.com/Block 
var materials = getObjNames(Blockly.Msg.OBJNAMES, [0, 1, 4, 5, 7, 8, 9, 12, 30, 33, 35, 35.1, 35.2, 35.3, 35.4, 37, 44, 47, 53, 55, 59, 60, 64, 66, 69.6, 70, 72, 81, 85, 89, 149, 154, 205, 218]);

/*
var materials = getObjNames(Blockly.Msg.OBJNAMES, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 26, 37, 38, 39, 40, 41, 42, 44, 46, 47, 48, 49, 50, 51, 56, 57, 57, 60, 66, 68, 69, 79, 80, 81, 82, 83, 85, 86, 92, 101, 103, 122, 127, 129, 140, 141, 142, 152, 165, 170, 213]);

//Naturally generated and created stair
var stairs = getObjNames(Blockly.Msg.OBJNAMES, [53, 108, 109, 128, 134, 135, 136]);

var others = getObjNames(Blockly.Msg.OBJNAMES, [0, 1, 2, 3, 4, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 24, 27, 31, 32, 37, 38, 39, 40, 41, 44, 46, 49, 51, 55, 56, 65, 66, 73, 78, 79, 80, 81, 82, 83, 85, 86, 93, 99, 100, 103, 106, 110, 111, 129, 152, 159, 161, 162, 172, 174, 175]);
*/

var farmland = getObjNames(Blockly.Msg.OBJNAMES, [8, 60, 59, 207, 142, 141]);

var train = getObjNames(Blockly.Msg.OBJNAMES, [66, 27, 28, 157, 152, 2]);

var fence = getObjNames(Blockly.Msg.OBJNAMES, [85, 107]);

//http://minecraft.gamepedia.com/Tools
var items_tools = getObjNames(Blockly.Msg.ITEMS_NAMES, ['diamondAxe', 'diamondHoe', 'diamondSpade', 'diamondPickaxe', 'shears', 'flintAndSteel', 'fishingRod', 'bed', 'torch', 'wood']);

//http://minecraft.gamepedia.com/Food -> Vegetarian diet :-)
var items_food = getObjNames(Blockly.Msg.ITEMS_NAMES, ['carrot', 'potato', 'cocoa', 'apple', 'melon', 'sugar', 'milkBucket', 'egg', 'wheat', 'pumpkin', 'sugarCane', 'seeds']);

//http://minecraft.gamepedia.com/Transportation
var items_transportation = getObjNames(Blockly.Msg.ITEMS_NAMES, ['rails', 'poweredRail', 'redstoneTorchOn', 'minecart', 'ladder', 'boat']);

//http://minecraft.gamepedia.com/Armor
var items_weapons_armor = getObjNames(Blockly.Msg.ITEMS_NAMES, ['bow', 'arrow', 'diamondSword', 'diamondBoots', 'diamondChestplate', 'diamondHelmet', 'diamondLeggings', 'tnt']);

//Spawn passive and pameable animals http://minecraft.gamepedia.com/Mob
var animals = getObjNames(Blockly.Msg.ANIMALS_NAMES, ['BAT', 'CHICKEN', 'COW', 'PIG', 'RABBIT', 'WOLF', 'SHEEP', 'HORSE', 'OCELOT']);

Blockly.BlockSvg.START_HAT = true;

var trees = getObjNames(Blockly.Msg.PLANTS_NAMES, ['TREE', 'BIG_TREE']);

// extract objects translation names from their ids/names
function getObjNames(list, ids) {
    var shortList = [];
    var id = '';
    if (list === undefined) {
        //TODO - switch to english translation file in case of a non-existent translation
        for (i = 0; i < ids.length; i++) {
            id = '';
            if (typeof (ids[i]) == "number") {
                id = "'" + ids[i] + "'";
            } else {
                id = ids[i];
            }
            shortList[i] = [ids[i], id];
        }
    } else {
        for (i = 0; i < ids.length; i++) {
            id = '';
            if (typeof (ids[i]) == "number") {
                id = "'" + ids[i] + "'";
            } else {
                id = ids[i];
            }
            shortList[i] = [list[ids[i]], id];
        }
    }
    return shortList;
}

Blockly.Blocks['drone'] = {
    init: function () {
        this.appendStatementInput("statements")
            .setCheck("")
            .appendField(Blockly.Msg.DRONE)
            .appendField(new Blockly.FieldTextInput(""), "param");
        this.setInputsInline(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DRONE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-plugin');
    }
};

Blockly.Blocks['materials'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Block');
    }
};

Blockly.Blocks['animals'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANIMALS)
            .appendField(new Blockly.FieldDropdown(animals), "animal");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_ANIMALS);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#entities-module');
    }
};

Blockly.Blocks['trees'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLANTS)
            .appendField(new Blockly.FieldDropdown(trees), "tree");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['drone_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOUVEMENT)
            .appendField(
            new Blockly.FieldDropdown([
                [Blockly.Msg.MOUVEMENT_UP, "up()"],
                [Blockly.Msg.MOUVEMENT_DOWN, "down()"],
                [Blockly.Msg.MOUVEMENT_FWD, "fwd()"],
                [Blockly.Msg.MOUVEMENT_BACK, "back()"],
                [Blockly.Msg.MOUVEMENT_RIGHT, "right()"],
                [Blockly.Msg.MOUVEMENT_LEFT, "left()"],
                [Blockly.Msg.MOUVEMENT_TURN_RIGHT, "turn()"],
                [Blockly.Msg.MOUVEMENT_TURN_LEFT, "turn(3)"],
		[Blockly.Msg.MOUVEMENT_TURN_BACK, "turn(2)"],
		[Blockly.Msg.MOUVEMENT_BACKTOSTART, "move('start')"],
                [Blockly.Msg.MOUVEMENT_SAVESTART, "chkpt('start')"]
            ]), "direction");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DRONEMOVE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-movement');
    }
};

Blockly.Blocks['drone_move_count'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOUVEMENT)
            .appendField(
            new Blockly.FieldDropdown([
                [Blockly.Msg.MOUVEMENT_UP, "up"],
                [Blockly.Msg.MOUVEMENT_DOWN, "down"],
                [Blockly.Msg.MOUVEMENT_FWD, "fwd"],
                [Blockly.Msg.MOUVEMENT_BACK, "back"],
                [Blockly.Msg.MOUVEMENT_RIGHT, "right"],
                [Blockly.Msg.MOUVEMENT_LEFT, "left"]
            ]), "direction");
        this.appendValueInput("COUNT")
          .setCheck(null)
          .appendField("칸수");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DRONEMOVE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-movement');
    }
};


Blockly.Blocks['rectangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RECTANGLE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.EMPTY, "0"],
                [Blockly.Msg.FULL, " "]
            ]), "fill");
        this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
        this.appendValueInput("length").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIAL)
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_RECTANGLE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronebox-method');
    }
};

Blockly.Blocks['circle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CIRCLE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.EMPTY, "0"],
                [Blockly.Msg.FULL, " "]
            ]), "fill");
        this.appendValueInput("radius").setCheck("Number")
            .appendField(Blockly.Msg.RADIUS);
	this.appendValueInput("height").setCheck("Number")
            .appendField(Blockly.Msg.HEIGHT);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_CIRCLE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronecylinder-method');
    }
};

Blockly.Blocks['prism'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("각기둥")
        .appendField(new Blockly.FieldDropdown([["가득찬"," "], ["텅빈","0"]]), "SHAPE");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("너비");
    this.appendValueInput("length")
        .setCheck(null)
        .appendField("길이");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["돌","1"], ["나무계단","53"], ["물블록","9"]]), "MATERIAL");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delete'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELETE);
        this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
        this.appendValueInput("height").setCheck("Number")
            .appendField(Blockly.Msg.HEIGHT);
        this.appendValueInput("length").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DELETE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronebox-method');
    }
};

Blockly.Blocks['door'] = { /*문 종류및 재료*/
  init: function() {
    this.appendDummyInput()
        .appendField("문");
    this.appendDummyInput()
        .appendField("종류")
        .appendField(new Blockly.FieldDropdown([["한쪽문","door"], ["양쪽문","door2"]]), "TYPE");
    this.appendDummyInput()
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["철","_iron"],["나무",""]]), "MATERIAL");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ladder'] = {  /*사다리*/
  init: function() {
    this.appendDummyInput()
        .appendField("사다리");
    this.appendValueInput("HEIGHT")
        .setCheck(null)
        .appendField("높이");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['torch'] = { /*횃불*/
  init: function() {
    this.appendDummyInput()
        .appendField("횃불");
    this.appendDummyInput()
        .appendField("종류")
        .appendField(new Blockly.FieldDropdown([["횃불","0"], ["레드스톤횃불","1"]]), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_direction'] = { /*플레이어가 바라보고 있는 방향*/
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 방향");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("0:동쪽,1:서쪽,2:남쪽,3:북쪽\n드론함수필요");
    }
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['spiral_stair'] = { /*나선형 계단(탑내부에 계단만들때 사용)*/
  init: function() {
    this.appendDummyInput()
        .appendField("나선형계단");
    this.appendDummyInput()
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["나무계단","oak"], ["돌계단","stone"], ["벽돌계단","brick"], ["모래계단","sandstone"]]), "MATERIAL");
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("너비");
    this.appendValueInput("FLIGHTS")
        .setCheck(null)
        .appendField("층수");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*
 * 인벤토리
 */
Blockly.Blocks['inventory'] = {
    init: function () {
        this.appendStatementInput("statements")
            .setCheck("")
            .appendField(Blockly.Msg.INVENTORY)
            .appendField(new Blockly.FieldTextInput(""), "param");
        this.setInputsInline(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_INVENTORY);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#inventory-module');
    }
};

Blockly.Blocks['tools'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_TOOLS)
            .appendField(new Blockly.FieldDropdown(items_tools), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_TOOLS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Tools');
    }
};

Blockly.Blocks['food'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_FOOD)
            .appendField(new Blockly.FieldDropdown(items_food), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_FOOD);
        this.setHelpUrl('http://minecraft.gamepedia.com/Food');
    }
};

Blockly.Blocks['transportation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_TRANSPORTATION)
            .appendField(new Blockly.FieldDropdown(items_transportation), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_TRANSPORTATION);
        this.setHelpUrl('http://minecraft.gamepedia.com/Transportation');
    }
};

Blockly.Blocks['weapons_armor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_WEAPONS_ARMOR)
            .appendField(new Blockly.FieldDropdown(items_weapons_armor), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_WEAPONS_ARMOR);
        this.setHelpUrl('http://minecraft.gamepedia.com/Armor');
    }
};

Blockly.Blocks['onchat'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("다음 채팅명령어를 입력하면:");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(210);
 this.setTooltip("게임 채팅에 특정 메시지를 입력하면 코드를 실행합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['spawn_animal'] = {
  init: function() {
    this.appendValueInput("animal")
        .setCheck("AnimalMob")
        .appendField("소환");
     this.appendDummyInput()
        .appendField("나이")
        .appendField(new Blockly.FieldDropdown([["어른","setAdult()"], ["새끼","setBaby()"]]), "AGE");
    this.appendDummyInput()
        .appendField("안장")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "SADDLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("동물을 생성합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['animalmob'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("동물")
        .appendField(new Blockly.FieldDropdown([["닭","CHICKEN"], ["젖소","COW"], ["돼지","PIG"], ["양","SHEEP"], ["늑대","WOLF"],["말","HORSE"]]), "ANIMAL");
    this.setOutput(true, "AnimalMob");
    this.setColour(230);
 this.setTooltip("게임에서 동물을 나타냅니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['onmobkilled'] = {
  init: function() {
    this.appendValueInput("Mob")
        .setCheck("AnimalMob")
        .appendField("몹");
    this.appendDummyInput()
        .appendField("이 죽었다면 실행");
    this.appendStatementInput("command")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("특정 유형의 생명체를 죽이면 코드를 실행합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['teleport_location'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("location")
        .appendField("해당 좌표로 텔레포트");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("현재 플레이어를 다른 위치로 텔레포트합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['relative_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("상대 좌표");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("~");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("~");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("~");
    this.setInputsInline(true);
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['absolute_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("월드 좌표");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_chat'] = {
  init: function() {
    this.appendValueInput("chat")
        .setCheck(["Number", "String", "Boolean", "Array"])
        .appendField("채팅창에 말하기 :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("게임 채팅에 메시지를 기록합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_chatcommand'] = {
  init: function() {
    this.appendValueInput("chatcommand")
        .setCheck(null)
        .appendField("다음 채팅명령어를 실행 :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("사용자의 코드로 채팅 명령을 실행합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveforward'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("숫자만큼 앞으로 이동");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['directforward'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("앞으로 이동 : ");
    this.appendDummyInput()
        .appendField("d");
    this.setInputsInline(true);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['facing'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("방향 바라보기 명령 : ");
    this.appendDummyInput()
        .appendField("각도");
    this.setColour(230);
 this.setTooltip("설정한 명령어와 바라 볼 각도를 입력하세요. 예) /jsp 명령어 각도");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("일시 정지 ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "second")
        .appendField("초");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['name_location'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("위치 이름");
    this.appendValueInput("location")
        .setCheck(null)
        .appendField("좌표");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['save_teleport'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("저장한 위치로 이동 : ");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['savelocation'] = {
  init: function() {
    this.appendValueInput("location")
        .setCheck(null)
        .appendField("숫자가 ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "number")
        .appendField("이면");
    this.appendDummyInput()
        .appendField("으로 이동");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 X 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 Y 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 Z 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 절대좌표");
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['notice_standing_block'] = {
  init: function() {
    this.appendValueInput("player")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(이)가 있는 지역 정보 알리기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['transform_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("내 발 밑을 5초 간")
        .appendField(new Blockly.FieldDropdown([["돌","1"], ["잔디","2"], ["흙","3"], ["조약돌","4"]]), "material")
        .appendField("(으)로 만들기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['target_teleport'] = {
  init: function() {
    this.appendValueInput("player")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("을(를)");
    this.appendValueInput("location")
        .setCheck("location");
    this.appendDummyInput()
        .appendField("로 텔레포트");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['onentitydamage'] = {
  init: function() {
    this.appendValueInput("player")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("를 치면 실행");
    this.appendStatementInput("command")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['random_teleport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("60초 뒤 랜덤한 위치로 텔레포트");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['materials_limited'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown([["돌","'1'"], ["흙","'3'"], ["참나무","'5'"], ["유리","'20'"], ["하얀색 양털","'35'"], ["금","'41'"], ["벽돌","'45'"], ["얼음","'79'"], ["하얀색 색유리","'95'"]]), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['plant'] = {
  init: function() {
    this.appendValueInput("location")
        .setCheck("location");
    this.appendDummyInput()
        .appendField("위에");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["밀","CROPS"], ["당근","CARROT"], ["감자","POTATO"], ["수박","MELON_STEM"], ["호박","PUMPKIN_STEM"]]), "plant")
        .appendField("심기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("농지 위에 식물을 심습니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['place_block'] = {
  init: function() {
    this.appendValueInput("location")
        .setCheck("location");
    this.appendDummyInput()
        .appendField("에");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["잔디","2"], ["물","8"], ["농지","60"], ["참나무 울타리","188"], ["참나무 울타리 문","183"]]), "block")
        .appendField("놓기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("블록을 원하는 좌표에 놓습니다.");
 this.setHelpUrl("");
  }
};

/**
 * 농사짓기 블록
 */
Blockly.Blocks['dispenser_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("투척기")
        .appendField("아이템")
        .appendField(new Blockly.FieldDropdown([["화살","262"], ["화염구","385"], ["뼛가루","351:15"], ["TNT","46"]]), "ITEM");
    this.appendValueInput("ITEM_COUNT")
        .setCheck(null)
        .appendField("개수");
    this.appendValueInput("BLOCK_LOCATION")
        .setCheck(null)
        .appendField("좌표");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["아래","0"], ["위","1"], ["북쪽","2"], ["남쪽","3"], ["서쪽","4"], ["동쪽","5"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dispenser_drone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("투척기")
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["화살","262"], ["화염구","385"], ["뼛가루","351:15"], ["다이너마이트","46"]]), "MATERIAL");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["아래","0"], ["위","1"], ["북쪽","2"], ["남쪽","3"], ["서쪽","4"], ["동쪽","5"]]), "DIRECTION");
    this.appendValueInput("number")
        .setCheck(null)
        .appendField("개수");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["피스톤","33"], ["끈끈이피스톤","29"],["관측기","218"]]), "ITEM");
    this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput("length").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["아래","0"], ["위","1"], ["북쪽","2"], ["남쪽","3"], ["서쪽","4"], ["동쪽","5"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['material_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["물","8"], ["고인물","9"], ["용암","10"], ["판석","44"]]), "MATERIAL");
    this.appendValueInput("POSITION")
        .setCheck(null)
        .appendField("위치");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
 * 승마, 보트
 */

Blockly.Blocks['two_dimension'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("이차원배열")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.appendValueInput("i")
        .setCheck(null);
    this.appendValueInput("j")
        .setCheck(null);
    this.appendValueInput("k")
        .setCheck(null)
        .appendField("를");
    this.appendDummyInput()
        .appendField("로 설정");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("재료");
    this.appendValueInput("material")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
 * 마을짓기, 폭격
 */

Blockly.Blocks['redstone_comparator'] = { /*레드스톤 비교기 블록 방향, 불켜짐 조정가능*/
  init: function() {
    this.appendDummyInput()
        .appendField("레드스톤비교기");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["북쪽","0"], ["동쪽","1"], ["남쪽","2"], ["서쪽","3"]]), "DIRECTION");
    this.appendDummyInput()
        .appendField("라이트")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delay_time'] = { /*시간 지연 블록*/
  init: function() {
    this.appendValueInput("SECOND")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("초 정지 후");
    this.appendStatementInput("DELAY")
        .setCheck(null)
        .appendField("실행");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("시간 지연 안에 블록이 다 포함되어야함.\n시간지연 바깥에 블록이 오면 순서와 관계없이 바로실행됨.");
    }	  
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['redstone_repeater'] = { /*레드스톤 중계기 블록. 간격, 방향 조정가능*/
  init: function() {
    this.appendDummyInput()
        .appendField("레드스톤중계기");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["북쪽","12"], ["남쪽","13"], ["동쪽","14"], ["서쪽","15"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['four_direction'] = {   /*재료의 방향이 동서남북일때 ex)계단*/
  init: function() {
    this.appendDummyInput()
        .appendField("재료")
        .appendField(new Blockly.FieldDropdown([["나무계단","53"], ["돌계단","67"]]), "ITEM");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("가로");
    this.appendValueInput("length")
        .setCheck(null)
        .appendField("세로");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["동쪽","0"], ["서쪽","1"], ["남쪽","2"], ["북쪽","3"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_attached'] = {  /*버튼 블록(다른 블록과 합칠때)*/
  init: function() {
    this.appendDummyInput()
        .appendField("버튼")
        .appendField(new Blockly.FieldDropdown([["돌버튼","STONE_BUTTON"], ["나무버튼","WOODEN_BUTTON"]]), "BUTTON_MATERIAL");
    this.appendDummyInput()
        .appendField("부착될 블록")
        .appendField(new Blockly.FieldDropdown([["돌","1"], ["목재","5"]]), "BLOCK_MATERIAL");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["동쪽","EAST"], ["서쪽","WEST"], ["남쪽","SOUTH"], ["북쪽","NORTH"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['door_drone'] = {  /*문 64:0 동쪽 64:1 남쪽 64:2 서쪽 64:3 북쪽 손잡이 왼
쪽*/
  init: function() {
    this.appendDummyInput()
        .appendField("문")
        .appendField(new Blockly.FieldDropdown([["나무문","64"], ["철문","71"]]), "material");
    this.appendDummyInput()
        .appendField("방향")
        .appendField(new Blockly.FieldDropdown([["동쪽","0"], ["남쪽","1"], ["서쪽","2"], ["북쪽","3"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['flower_choice'] = {  /*꽃종류 변수*/
  init: function() {
    this.appendDummyInput()
        .appendField("꽃")
        .appendField(new Blockly.FieldDropdown([["민들레","'37'"], ["양귀비","'38'"], ["파란색난초","'38:1'"], ["보라색꽃","'38:2'"], ["파란색꽃","'38:3'"], ["빨간튤립","'38:4'"], ["주황튤립","'38:5'"], ["하얀튤립","'38:6'"], ["연보라튤립","'38:7'"], ["국화","'38:8'"]]), "FLOWERS");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_around_information'] = { /*해당 블록 주위에 정보를 가져온다.*/
  init: function() {
    this.appendDummyInput()
        .appendField("해당블록 주위에 정보가져오기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_around'] = {  /*해당블록 주위에 해당 블록이 있는지 없는지 조건블록*/
  init: function() {
    this.appendDummyInput()
        .appendField("해당블록 주위에")
        .appendField(new Blockly.FieldDropdown([["물","STATIONARY_WATER"], ["option","OPTIONNAME"]]), "MATERIAL");
    this.appendDummyInput()
        .appendField("이")
        .appendField(new Blockly.FieldDropdown([["있을때","=="], ["없을때","!="]]), "EXIST");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_try'] = {  /*예외처리 블록*/
  // Try
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL);

    this.setColour(120);
    this.appendStatementInput('TRY')
        .appendField('실행');
    this.appendStatementInput('CATCH')
        .appendField('예외처리');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Standard try { } carch (err) {..} you must provide an error handler to consume the error message');
  }
};


Blockly.Blocks['copy_place'] = {   /*해당 좌표에 건축물과 블록을 복사한다.*/
  init: function() {
    this.appendDummyInput()
        .appendField("복사");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("변수이름");
    this.appendValueInput("LENGTH")
        .setCheck(null)
        .appendField("가로");
    this.appendValueInput("HEIGHT")
        .setCheck(null)
        .appendField("높이");
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("세로");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['paste_place'] = {   /*해당 좌표에 복사한 건축물과블록을 붙여넣는다.*/
  init: function() {
    this.appendDummyInput()
        .appendField("붙여넣기");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("변수이름");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
 * 텔레포트 사용하기
 */
Blockly.Blocks['teleport_command'] = { /* 텔레포트 함수 */
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("입력한 좌표로 텔레포트 : ");
    this.appendDummyInput()
        .appendField("x y z");
    this.setInputsInline(true);
    this.setColour(210);
    this.setTooltip("");
 this.setHelpUrl("");
  }
};

/**
 * 예제 블록들
 */
Blockly.Blocks['block_type_example'] = {  /*블록에서 텍스트를 만듬. 게임 내 표지판*/
  init: function() {
    this.appendDummyInput()
        .appendField("블록표지판");
    this.appendValueInput("MESSAGE")
        .setCheck(null)
        .appendField("쓸 문구(영어)");
    this.appendDummyInput()
        .appendField("블록")
        .appendField(new Blockly.FieldDropdown([["돌","blocks.stone"], ["물블록","blocks.water_still"], ["용암블록","blocks.lava_still"]]), "MATERIAL");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['castle_example'] = {  /*캐슬 자동생성 예제*/
  init: function() {
    this.appendDummyInput()
        .appendField("성(캐슬)");
    this.appendValueInput("LENGTH")
        .setCheck(null)
        .appendField("너비");
    this.appendValueInput("HEIGHT")
        .setCheck(null)
        .appendField("높이");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("최소 너비 20이상 최소 높이 8이상");
    }   	  
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['house_example'] = {    /*cottage 집과 집+길 생성 예제블록*/
  init: function() {

    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown([["집","cottage"], ["마을","cottage_road"]], function(newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendDummyInput()
        .appendField("집짓기");
    this.appendDummyInput()
	.appendField("선택")
        .appendField(dropdown, "OPTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  updateType_: function(newOp) {
    if (newOp == 'cottage') {
      this.removeInput("NUMBER");
    } else if(newOp == 'cottage_road') {
      this.appendValueInput("NUMBER")
        .setCheck(null)
	.appendField("집개수");
    }
  },
  // storing output type
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('op', this.getFieldValue('OP'));
    return container;
  },
  // retrieving output type
  domToMutation: function(xmlElement) {
    //var villageInput = (xmlElement.getAttribute('op') == 'true');
    this.updateType_(xmlElement.getAttribute('op'));
  }
};

Blockly.Blocks['temple_example'] = {  /*신전예제블록*/
  init: function() {
    this.appendDummyInput()
        .appendField("신전");
    this.appendValueInput("LENGTH")
        .setCheck(null)
        .appendField("너비");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("최소 너비 6이상 짝수값\n6일때 1층");
    }
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['maze_example'] = { /*미로예제블록*/
  init: function() {
    this.appendDummyInput()
        .appendField("미로");
    this.appendValueInput("LENGTH")
        .setCheck(null)
        .appendField("가로/2");
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("세로/2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("입력한 가로·세로길이 2배길이로 생성");
    }	  
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rainbow_example'] = {  /*무지개 예제*/
  init: function() {
    this.appendDummyInput()
        .appendField("무지개");
    this.appendValueInput("RADIUS")
        .setCheck(null)
        .appendField("반지름");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("반지름 최소 8이상");
    }
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['garden_example'] = {  /*정원예제*/
  init: function() {
    this.appendDummyInput()
        .appendField("정원");
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("가로");
    this.appendValueInput("LENGTH")
        .setCheck(null)
        .appendField("세로");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments))) {
      this.setCommentText("가로·세로 넓이만큼 랜덤으로 꽃 생성");
    }
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['firework'] = { /*폭죽*/
  init: function() {
    this.appendDummyInput()
        .appendField("폭죽");
    this.appendDummyInput()
        .appendField("색깔")
        .appendField(new Blockly.FieldDropdown([["검정색","1"], ["파란색","2"], ["회색","4"], ["초록색","5"], ["노란색","6"], ["주황색","10"], ["보라색","11"], ["빨간색","12"], ["흰색","15"]]), "COLOR");
    this.appendDummyInput()
        .appendField("종류")
        .appendField(new Blockly.FieldDropdown([["공모양","0"], ["큰공모양","1"], ["폭발
","2"], ["넝쿨모양","3"], ["별모양","4"]]), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
 * 대규모 밀밭 만들기
 */
Blockly.Blocks['farmland_material'] = { /* 밀밭 만들기 재료 */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown(farmland), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Block');
    }
};

/*
 * 롤러코스터 만들기
 */
Blockly.Blocks['rail_material'] = { /* 롤러코스터 재료 */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown(train), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Block');
    }
};

/*
 * 울타리 만들기
 */
Blockly.Blocks['fence_material'] = { /* 울타리 재료 */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown(fence), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Block');
    }
};
