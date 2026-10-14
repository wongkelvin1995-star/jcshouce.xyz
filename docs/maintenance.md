# 文章维护规范

内容源：content/*.md及各章Markdown；章节源：data/navigation.json；机场源：data/airports/*.json；SEO品牌源：docs/site-seo-profile.json；关键词映射由 scripts/sync-catalog.mjs 从正文派生。

每个任务只有一篇主要教程。新增前查现有标题和搜索意图，已存在时更新原页。步骤引用具体客户端官方资料；版本要求有明确来源，发行直链不伪称永久最新。

FAQ问答唯一源为data/faq.json，修改后执行node scripts/sync-faq.mjs，同步FAQ首页与对应专题正文，不手工双写。发布前verify检查数量。本站默认在FAQ首页显示100个答案，专题页也显示完整答案。专题页noindex用于减少重复索引，不隐藏用户内容。

测试结果只在实际执行后填写。品牌固定次序不是评分，不对空价格、地区、协议、限制和兼容进行乐观填充。AFF原URL不改，推广属性保留。更新前保存原来源和历史记录，更新后正式构建并验收。来源快照不通过网站public暴露，脱敏后才能公开。
