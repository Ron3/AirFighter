(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4a7820Y6JZI74tMJCtfeR04', 'enemy', __filename);
// scripts/enemy.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
        speed_min: 0,
        speed_max: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.speed = Math.random() * (this.speed_max - this.speed_min) + this.speed_min;
        var w = this.game.screen_width - 80;
        this.node.setPosition(Math.random() * w - w / 2, 380);
    },
    start: function start() {},


    onCollisionEnter: function onCollisionEnter(other, self) {
        self.node.destroy();
    },

    update: function update(dt) {
        if (this.game.is_over || this.node.y < -400) {
            this.node.destroy();
        }
        this.node.y -= this.speed * dt;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=enemy.js.map
        