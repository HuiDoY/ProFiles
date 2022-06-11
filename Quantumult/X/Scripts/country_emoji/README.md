# country_emoji
根据节点关键字判断国家对应的Emoji国旗图标

## 识别逻辑
按照节点名从左到右识别，选择最左边识别到的关键字作为结果。

## 已适配
- DlerCloud
- CordCloud
- MunCloud
- rixCloud
- CCCAT （由[Thelordtao](https://t.me/Thelordtao)适配）
- liangchenyun （由[Thelordtao](https://t.me/Thelordtao)适配）

## 无法识别
目前仅对少部分机场进行适配，如果无法识别，请自行添加后发起Pull Request。

格式如下：
```
[
    [
        ...
    ],
    [
        "🇨🇳", // emoji
        "CN", // 关键字1
        "中国", // 关键字2
        "上海" // 关键字3
    ],
    [
        ...
    ]
]
```

> 中转节点请使用起始地点作为关键字
