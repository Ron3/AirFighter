(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8efebYhrr5DTqfHVDAYCQS3', 'game', __filename);
// scripts/game.js

'use strict';

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
        planePrefab: {
            default: null,
            type: cc.Prefab
        },

        scoreDisplay: {
            default: null,
            type: cc.Label
        },

        bulletPrefab: {
            default: null,
            type: cc.Prefab
        },
        interval: 0,
        time_lapsed: 0,

        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },
        interval_enemy: 0,
        is_over: false,
        score: 0
    },

    begin: function begin() {
        this.is_over = false;
        this.score = 0;
        this.scoreDisplay.string = 'Score: ' + this.score;
        this.scoreDisplay.node.setPosition(cc.v2(-this.screen_width / 2 + 10, 325));
        this.scoreDisplay.node.setAnchorPoint(0, 0.5);

        var p = cc.instantiate(this.planePrefab);
        this.node.addChild(p, cc.macro.MAX_ZINDEX);
        p.getComponent('plane').game = this;
        this.plane = p;

        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.fly, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.begin, this);
    },

    fly: function fly(event) {
        var delta = event.getDelta();
        this.plane.x += delta.x;
        this.plane.y += delta.y;
    },

    gainScore: function gainScore() {
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var size = cc.view.getVisibleSize();
        this.screen_width = size.width;

        this.scoreDisplay.node.zIndex = cc.macro.MAX_ZINDEX;
        this.begin();
    },
    start: function start() {},


    fire: function fire() {
        var bl = cc.instantiate(this.bulletPrefab);
        this.node.addChild(bl);
        bl.getComponent('bullet').game = this;
        bl.setPosition(this.plane.getPosition());
    },

    spawnEnemy: function spawnEnemy() {
        var en = cc.instantiate(this.enemyPrefab);
        en.getComponent('enemy').game = this;
        this.node.addChild(en);
    },

    gameover: function gameover() {
        this.is_over = true;
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.fly, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.begin, this);

        this.scoreDisplay.node.setPosition(cc.v2(0, 0));
        this.scoreDisplay.node.setAnchorPoint(0.5, 0.5);
    },

    update: function update(dt) {
        if (!this.is_over) {
            // 发射子弹
            this.time_lapsed += dt;
            if (this.time_lapsed > this.interval) {
                this.time_lapsed = 0.8;
                this.fire();
            }

            // 产生敌机
            this.interval_enemy -= dt;
            if (this.interval_enemy < 0) {
                // this.interval_enemy = Math.random() * 2 + 0.5;
                this.interval_enemy = Math.random() * 2 + 0.0;
                this.spawnEnemy();
                this.spawnEnemy();
                this.spawnEnemy();
            }
        }
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
        //# sourceMappingURL=game.js.map
        