// npmパッケージをインポート
const Twit = require("twit");

// コンフィグファイル
const twit = new Twit(require("./config.js"));

// #ガフちゃんかわいい のハッシュタグがある最新ツイートの検索をする検索ストリング ※ハッシュタグは任意に変更可能
const mediaArtsSearch = { q: "#ガフちゃんかわいい", count: 100, result_type: "recent" };

// 上の検索項目で見つかったツイートをリツイートする
const retweetLatest = async() => {
  try {
       twit.get("search/tweets", mediaArtsSearch, (error, data) => {
    // エラーがなければ次に進む
    if (error) {
      // エラーがあればキャッチしてコンソールにプリントする
      console.log(error.message);
    } else {
      // 見つかったツイートのIDを所得する
      const retweetId = data.statuses[0].id_str;
      // APIを使ってリツイートする
      twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
      
        // エラーがあればキャッチしてコンソールにプリントする
        if (error) {
          console.log(error.message);
        } else if (response) {
          console.log("Success! Retweeted!");
        }
      });
    }
  });
  } catch(error) {
     // エラーがあればキャッチしてコンソールにプリントする
    console.log(error)
  }
};

// 起動直後にリツイートを試みる
retweetLatest();
// 十分に一回リツイートを試みる
// 1000 ms = 1 秒, 1 秒 * 60 = 1 分, 1 分 * 60 = 1 時間 --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 10); //ここでは10分に設定されてる
