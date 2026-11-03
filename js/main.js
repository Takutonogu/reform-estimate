// ここにプログラムを書きます。
// 課題文（assignment.md）の「ステップ一覧」に沿って、Step 1 から順に作ってください。

//基準値
const price = 10000;//単価
const overheadrate = 10;//諸経費率

document.title = `【学習用】リフォーム見積もり`;
//タブの表示名を変更
document.body.style.backgroundColor = `aliceblue`;
//背景を変更

let area = prompt("面積（㎡）を入力してください", 20);
area = Number(area);

const constructionCost = area * price;
//工事費＝面積*単価

const overheadcost = constructionCost * overheadrate / 100;
//諸経費＝工事費×諸経費率÷100

const subtotal = constructionCost;
//小計＝工事費（STEP2のみ）

const total = subtotal + overheadcost;
//合計＝小計+諸経費

console.log(`===== リフォーム費用 簡易見積もり（学習用） =====`);
console.log(`工事費：${constructionCost}円（${area}㎡ × ${price}円）`);
console.log(`諸経費（${overheadrate}%）：${overheadcost}円`);
console.log(`合計：${total}円`);