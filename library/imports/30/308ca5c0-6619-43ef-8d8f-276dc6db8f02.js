"use strict";
cc._RF.push(module, '308caXAZhlD742PJ23G248C', 'plane');
// scripts/plane.js

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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    update: function update(dt) {
        var w = this.game.screen_width / 2 - 40;
        if (this.node.x < -w) {
            this.node.x = -w;
        } else if (this.node.x > w) {
            this.node.x = w;
        }

        if (this.node.y < -320) {
            this.node.y = -320;
        } else if (this.node.y > 300) {
            this.node.y = 300;
        }
    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        this.game.gameover();
        self.node.destroy();
    }
});

cc._RF.pop();