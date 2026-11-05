// ここにプログラムを書きます。
// 課題文（assignment.md）の「ステップ一覧」に沿って、Step 1 から順に作ってください。

//基準値
const price = 10000;//単価
const overheadrate = 10;//諸経費率
const optionPrice = 20000;//オプション単価

document.title = `【学習用】リフォーム見積もり`;
//タブの表示名を変更
document.body.style.backgroundColor = `aliceblue`;
//背景を変更

//合計部屋数の箱を用意
let roomCount = prompt(`部屋数を入力してください`, 0);
roomCount = Number(roomCount);


let totalArea = 0;
let roomArea;
for (let i = 1; i <= roomCount; i++) {
  roomArea = prompt(`${i}部屋目の面積（㎡）を入力してください`, 0);
  roomArea = Number(roomArea);
  if (roomArea <= 0 ) {
    break
  }
  totalArea = totalArea + roomArea;

};


let buildingAge = prompt('築年数（年）を入力してください', 35);
buildingAge = Number(buildingAge);
let budget = prompt('予算（円）を入力してください', 250000);
budget = Number(budget);



//入力エラーの際の対応
if (roomCount <= 0) {
  console.log(`部屋数は1以上で入力してください`);
}
else if (roomArea <= 0) {
  console.log(`面積は1以上で入力してください`);
}
else if (buildingAge < 0) {
  console.log(`築年数は0以上で入力してください`);
}
else if (budget <= 0) {
  console.log(`予算は1以上で入力してください`);
}
else {
  let repairCost;
  let ageMessage;
  if (buildingAge >= 30) {
    repairCost = 100000
    ageMessage = `築年数：${buildingAge}年（築30年以上のため補修費を加算）`;
  }
  else if (buildingAge >= 20) {
    repairCost = 50000
    ageMessage = `築年数：${buildingAge}年（築20年以上のため補修費を加算）`;
  }
  else {
    repairCost = 0
    ageMessage = `築年数：${buildingAge}年（補修費の加算なし）`;
  };
  //築年数による補修費の場合分け

  const constructionCost = totalArea * price;
  //工事費＝面積*単価

  const subtotal = constructionCost + repairCost;
  //小計＝工事費+補修費

  const overheadcost = subtotal * overheadrate / 100;
  //諸経費＝小計×諸経費率÷100

  const total = subtotal + overheadcost;
  //合計＝小計+諸経費

  console.log(`===== リフォーム費用 簡易見積もり（学習用） =====`);
  console.log(`部屋数：${roomCount}`);
  console.log(`合計面積：${totalArea}㎡`);
  console.log(`工事費：${constructionCost}円（${totalArea}㎡ × ${price}円）`);
  console.log(ageMessage);
  console.log(`補修費：${repairCost}円`);
  console.log(`小計：${subtotal}円`);
  console.log(`諸経費（${overheadrate}%）：${overheadcost}円`);
  console.log(`合計：${total}円`);


  //オプションのwhileの使用
  let remainingBudget = budget - total;
  let optionCount = 0;
  while (remainingBudget >= optionPrice) {
    remainingBudget = remainingBudget - optionPrice
    optionCount = optionCount + 1
  }


  if (total > budget) {
    document.title = `【学習用】リフォーム見積もり：予算超過`;
    document.body.style.backgroundColor = `mistyrose`;
    console.log(`予算：${budget}円 → 予算を超えています（超過${total - budget}円）`);
  }
  else {
    document.title = `【学習用】リフォーム見積もり：予算内`;
    document.body.style.backgroundColor = `honeydew`;
    console.log(`予算：${budget}円 → 予算内です（残り${budget - total}円）`);
  };
  //合計額が予算超過した場合のタブ名と背景の変更

  console.log(`追加できるオプション工事（1件${optionPrice}円）：${optionCount}件`);
};

