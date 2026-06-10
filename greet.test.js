// greet 関数の簡単なテスト（Node 標準の assert のみ使用、依存なし）
const assert = require("assert");
const { greet } = require("./greet");

// 通常の名前
assert.strictEqual(greet("世界"), "こんにちは、世界さん！");

// 別の名前でも正しく組み立てられる
assert.strictEqual(greet("Claude"), "こんにちは、Claudeさん！");

console.log("✓ すべてのテストに合格しました");
