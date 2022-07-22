# GuffRTBot
#ガフちゃんかわいい自動RTボットの中身

私が動かしてる[「#ガフちゃんかわいい自動RTボット」](https://twitter.com/guffrtbot)の中身のコードです。NodeJSでシンプルに書かれています！

`bot.js`のハッシュタグを変えれば好きなハッシュタグの自動RTボットができます！！

# 使い方

**TwitterAPIの"Elevated"高度API権限所得のアプリとそのキーが必要です**

**Node.JS16+をインストールしている必要があります**

`npm i twit`でモジュールをインストールする

`config.js`でデベロッパーポータルから以下のTwitterAPIキーを入れてください。

    consumer_key:         'APIコンシュマーキー',
    consumer_secret:      'APIコンシュマーシークレット',
    access_token:         'アクセストークン',
    access_token_secret:  'アクセスシークレット'
`bot.js`のハッシュタグを自動RTしたいハッシュタグに変える

`node bot.js`で起動する

`Success! Retweeted!`ってAPIの応答があれば成功しました！10分または設定した時間の間隔で自動RTがされます！
