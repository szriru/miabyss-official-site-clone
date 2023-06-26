DEMO: [https://miabyss-official-site-clone.vercel.app/](https://miabyss-official-site-clone.vercel.app/)

## Run in dev environment

```bash
git clone https://github.com/szriru/miabyss-official-site-clone
cd miabyss-official-site-clone
npm i
npm run dev
```

## Known Issues

- sm以上のMain cover imageに対してそのswitchを右下に一定のview pointまで固定する挙動をtailwindの"sticky"でできない。代わりにreact-waypointを使っているが,"fix"と"absolute"の切り替え時にwidthが変わってしまう。

- landing時のloading screenがただのアニメーションであって、ページのローディング状況を把握しているものではない。

- 右下のtopに戻るボタンを実装し忘れている.

- sm:hiddenのように単純に非表示にするような実装方法を多用している。(?) 本家サイトはランディング時に一部のデザインは確定されていてchromeのdev toolなどでディスプレイサイズを変えても変わらない要素がある。（実装方法は分からないがこのように実装すべきだと思う。）

- フォント