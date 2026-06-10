// 名前を受け取って挨拶メッセージを返す
function greet(name) {
  return `こんにちは、${name}さん！`;
}

// このファイルが直接実行されたときだけ動かす
if (require.main === module) {
  console.log(greet("世界"));
}

module.exports = { greet };
