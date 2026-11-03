了解です！Step 5 までに出てきそうな単語を、まとめて表にしました。このまま変数名に使えます。

| 日本語 | 変数名の例 | 覚え方 |
| --- | --- | --- |
| 単価 | `unitPrice` | unit＝1単位、price＝値段 |
| 面積 | `area` | ラテン語の「広場」 |
| 合計面積 | `totalArea` | total＝全部まとめた |
| 部屋数 | `roomCount` | count＝数える |
| 部屋の番号 | `roomNumber` | number＝番号 |
| 築年数 | `buildingAge` | building＝建物、age＝年齢 |
| 予算 | `budget` | フランス語の「革の財布」が語源 |
| 工事費 | `constructionCost` | construction＝建設、cost＝費用 |
| 補修費 | `repairCost` | repair＝修理する |
| 小計 | `subtotal` | sub＝下の・部分の（subway＝地下鉄のsub） |
| 諸経費率 | `overheadRate` | rate＝割合 |
| 諸経費 | `overhead` | 本体以外に頭上にかかる費用 |
| 合計 | `total` | 全部足した最後の金額 |
| 残りの予算 | `remainingBudget` | remain＝残る |
| 超過額 | `overAmount` | over＝超える、amount＝金額 |
| オプション工事の単価 | `optionPrice` | option＝選べる追加 |
| オプション工事の件数 | `optionCount` | count＝数える |

補修費の基準値（築30年以上・20年以上）は、たとえば `repairCost30` と `repairCost20` のように、数字を付けて区別するとわかりやすいです。

あと、`prompt()` で受け取った**数値に変える前の文字**を一時的に入れる箱が欲しくなったら、`areaText` のように `Text` を付けると「これはまだ文字だよ」と自分で区別できて便利です。

これで名前を考える手間はなくなるので、Step 2 の中身に集中してください！