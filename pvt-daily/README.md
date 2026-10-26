# PVT Daily — 睡眠与注意力实验室

这是一个基于浏览器的个人 PVT（精神运动警觉性）跟踪应用，包含 1 分钟练习、10 分钟正式测试、KSS 自评、趋势图和 CSV / JSON 数据导出。

线上地址： https://ybyllc.github.io/pvt-daily/

## 使用建议

- 尽量使用同一设备、相同测试时间与操作方式。
- 连续记录睡眠时长与测试结果，不要为了测试故意熬夜。
- 数据仅保存在当前浏览器 localStorage，请定期导出 JSON。
- 浏览器/触屏计时精度无法与经过校准的实验室 PVT 设备等同，不能用于临床诊断。
- 如果感觉明显嗜睡，或休息充分仍持续疲劳，应咨询专业医生。

## 部署

此目录部署在 `ybyllc/ybyllc.github.io` 的 `main` 分支，作为 GitHub Pages 的独立子路径，不修改网站首页。

PWA 包含 `manifest.webmanifest`、`icon.svg`、`sw.js`，通过 HTTPS 访问后可尝试添加到 Android 主屏幕。各浏览器的安装支持可能有所不同。
