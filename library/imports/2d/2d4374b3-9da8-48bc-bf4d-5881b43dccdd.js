"use strict";
cc._RF.push(module, '2d437SznahIvL9NWIG0Pczd', 'bullet');
// scripts/bullet.js

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
        speed: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {},
    onHit: function onHit() {},


    onCollisionEnter: function onCollisionEnter(other, self) {
        this.game.gainScore();
        self.node.destroy();
    },

    update: function update(dt) {
        if (this.game.is_over || this.node.y > 400) {
            this.node.destroy();
        }
        this.node.y += this.speed * dt;
    }
});

cc._RF.pop();