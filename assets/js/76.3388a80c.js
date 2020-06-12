(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{270:function(a,t,s){"use strict";s.r(t);var e=s(28),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[a._v("#")]),a._v(" 接口")]),a._v(" "),s("p",[a._v("引擎创建后，可获取的相关周期函数以及可调用API")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示💡")]),a._v(" "),s("p",[a._v("如引擎版本大于 engine >= 0.5.5 可在引擎完成初始化后，立即跳转场景，无需加载首个场景。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("player.play(url);\nplayer.switchToSceneId(sceneId); // switchToSceneIndex(index)\n")])])])]),a._v(" "),s("h2",{attrs:{id:"周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#周期函数"}},[a._v("#")]),a._v(" 周期函数")]),a._v(" "),s("h3",{attrs:{id:"日志与错误时的回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志与错误时的回调"}},[a._v("#")]),a._v(" 日志与错误时的回调")]),a._v(" "),s("p",[a._v("onError(evt: IEvent): void;")]),a._v(" "),s("h3",{attrs:{id:"初始化完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化完成"}},[a._v("#")]),a._v(" 初始化完成")]),a._v(" "),s("p",[a._v("onInit(): void;")]),a._v(" "),s("h3",{attrs:{id:"数据初始化完成（资源加载完成）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据初始化完成（资源加载完成）"}},[a._v("#")]),a._v(" 数据初始化完成（资源加载完成）")]),a._v(" "),s("p",[a._v("onReady(): void;")]),a._v(" "),s("h3",{attrs:{id:"场景创建开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景创建开始"}},[a._v("#")]),a._v(" 场景创建开始")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示💡")]),a._v(" "),s("p",[a._v("engine >= 0.5.5")])]),a._v(" "),s("p",[a._v("onSceneCreate(): void;")]),a._v(" "),s("h3",{attrs:{id:"场景创建完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景创建完成"}},[a._v("#")]),a._v(" 场景创建完成")]),a._v(" "),s("p",[a._v("onSceneLoad(): void;")]),a._v(" "),s("h3",{attrs:{id:"消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息"}},[a._v("#")]),a._v(" 消息")]),a._v(" "),s("p",[a._v("onMessage(msg: IEvent): void;")]),a._v(" "),s("h3",{attrs:{id:"卸载时触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载时触发"}},[a._v("#")]),a._v(" 卸载时触发")]),a._v(" "),s("p",[a._v("onDispose(): void;")]),a._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),s("h3",{attrs:{id:"播放（播放地址-播放数据-恢复播放）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#播放（播放地址-播放数据-恢复播放）"}},[a._v("#")]),a._v(" 播放（播放地址|播放数据|恢复播放）")]),a._v(" "),s("p",[a._v("play(src?: any): void;")]),a._v(" "),s("h3",{attrs:{id:"播放携带动态数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#播放携带动态数据"}},[a._v("#")]),a._v(" 播放携带动态数据")]),a._v(" "),s("p",[a._v("playData(src?: any, data:any): void;")]),a._v(" "),s("h3",{attrs:{id:"卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[a._v("#")]),a._v(" 卸载")]),a._v(" "),s("blockquote",[s("p",[a._v("如果参数为true，卸载canvas标签")])]),a._v(" "),s("p",[a._v("dispose(boolean?: boolean): void;")]),a._v(" "),s("h3",{attrs:{id:"暂停"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂停"}},[a._v("#")]),a._v(" 暂停")]),a._v(" "),s("p",[a._v("pause(): void;")]),a._v(" "),s("h3",{attrs:{id:"恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[a._v("#")]),a._v(" 恢复")]),a._v(" "),s("p",[a._v("resume(): void;")]),a._v(" "),s("h3",{attrs:{id:"重置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置"}},[a._v("#")]),a._v(" 重置")]),a._v(" "),s("p",[a._v("reset(): void;")]),a._v(" "),s("h3",{attrs:{id:"发送消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送消息"}},[a._v("#")]),a._v(" 发送消息")]),a._v(" "),s("p",[a._v("message(msg: IEvent): void;")]),a._v(" "),s("h3",{attrs:{id:"切换下一个场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换下一个场景"}},[a._v("#")]),a._v(" 切换下一个场景")]),a._v(" "),s("p",[a._v("switchToNextScene(transition?: ITransitionData): void;")]),a._v(" "),s("h3",{attrs:{id:"切换上一个场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换上一个场景"}},[a._v("#")]),a._v(" 切换上一个场景")]),a._v(" "),s("p",[a._v("switchToPrevScene(transition?: ITransitionData): void;")]),a._v(" "),s("h3",{attrs:{id:"id切换场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id切换场景"}},[a._v("#")]),a._v(" ID切换场景")]),a._v(" "),s("p",[a._v("switchToSceneId(sceneId: string, transition?: ITransitionData): void;")]),a._v(" "),s("h3",{attrs:{id:"索引切换场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引切换场景"}},[a._v("#")]),a._v(" 索引切换场景")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示💡")]),a._v(" "),s("p",[a._v("engine >= 0.5.5")])]),a._v(" "),s("p",[a._v("switchToSceneIndex(index: number, transition?: ITransitionData): void;")])])}),[],!1,null,null,null);t.default=v.exports}}]);