<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>エロ川柳メーカー</h1>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <div id="app">
        <h1 align="center" class="my-5">エロ川柳を作る</h1>

      
        <v-card
          class="mx-auto my-5"
          max-width="450"
        >
        <v-layout wrap>
          <v-btn
          class="pa-5"
          depressed
          color="primary"
           @click="change1()">
           チェンジ1</v-btn>
          <p v-if="msg1.length > 0">{{ msg1[random1] }}</p>
          <p v-else>判定してください</p>
        </v-layout>
        </v-card>

        <v-card
        class="mx-auto my-5"
        max-width="450"
        >
        <v-layout wrap>
          <v-btn
          class="pa-5"
          depressed
          color="primary"
           @click="change2()">
           チェンジ2</v-btn>
          <p v-if="msg2.length > 0">{{ msg2[random2] }}</p>
          <p v-else>判定してください</p>
        </v-layout>
        </v-card>

        <v-card
        class="mx-auto my-5"
        max-width="450"
        >
        <v-layout wrap>
          <v-btn
          class="pa-5"
          depressed
          color="primary"
           @click="change3()">
           チェンジ3</v-btn>
          <p v-if="msg3.length > 0">{{ msg3[random3] }}</p>
          <p v-else>判定してください</p>
        </v-layout>
        </v-card>

        <v-card
        class="mx-auto"
        max-width="344"
        >
          <v-col>
          <v-btn
          class="pa-5 ml-3"
          depressed
          color="primary"
           @click="reload()">
           更新
           </v-btn>
           

          
           <v-btn
          class="pa-5 ml-10 font-weight-bold"
          depressed
          color="blue lighten-4"
           @click="tweet()">
           ツイートする
           </v-btn>
           </v-col>

         </v-card>

       </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
      msg1: ['愛液の','青姦と','生理には','朝立ちに','麻縄で','足コキの','性欲の','陰毛と','イラマチオ','飲尿を','陰部にて','エネマグラ','オーガズム','おにぎりと','ナメクニが','おちんちん','オナホール','おっぱいが','オナニーとは','カテーテルは','我慢汁','顔射と','浣腸','騎乗位は','巨根だと','巨乳には','緊縛は','クスコにて','クリトリス','言葉攻め','強姦は','拘束具','ゴムフェラと','コンドームは','ザーメンは','3Pで','サディズムな','潮吹きと','射精した','熟女とは','獣姦は','素股から','精飲後','性行為','正常位','前戯から','早漏は','出会い系','ディルドから','ところてん','中出しで','縄師から','ナンパにて','肉便器','乳輪と','ニューハーフ','パイパンは','ハメ撮りは','ピル飲んで','夢精して','名器にて','ユルマンで','夜這いして','乱行か','輪姦で','レズビアン',], //5文字
      msg2: ['アダルトビデオ','アナルバイブと','アナルファック','アナルプラグに','イメージプレイ','蟻の門渡り','M男とS女','援助交際','オーラルセックス','おむつプレイ','お掃除フェラ','カーセックスで','拡張プレイ','仮性包茎','顔面騎乗で','強制オナニー','串刺し3P','クンニリングス','屈曲位では','挨拶プレイ','恋人と見る','口内射精','コスプレセックス','ご主人様と','ザーメン祭り','三角木馬','Gスポットで','四十八手','失禁プレイ','真性包茎','女装プレイ','女王さまが','スカトロジーで','スパンキングで','性行体位','セックスフレンド','前立腺を','ソフトSM','ダッチワイフが','同性愛は','妊娠線は','ハードSM','放置プレイで','勃起不全で','まんことちんこ','マルキドサドで','マングリ返し','幼児プレイが','凌辱プレイ'], //7文字
      msg3: ['楽しいな','最高だ','愛液か','青姦だ','生理には','朝立ちに','麻縄で','足コキの','性欲の','陰毛と','イラマチオ','飲尿を','陰部にて','エネマグラ','オーガズム','おにぎりと','ナメクニか','おちんちん','オナホール','おっぱいが','オナニーとは','カテーテルに','我慢汁','顔射と','浣腸','騎乗位は','巨根だと','巨乳には','緊縛か','クスコにて','クリトリス','言葉攻め','強姦か','拘束具','ゴムフェラと','コンドームか','ザーメンか','3Pで','サディズムな','潮吹きと','射精した','熟女とは','獣姦は','素股から','精飲後','性行為','正常位','前戯から','早漏は','出会い系','ディルドから','ところてん','中出しで','縄師から','ナンパにて','肉便器','乳輪と','ニューハーフ','パイパンか','ハメ撮りは','ピル飲んで','夢精して','名器にて','ユルマンで','夜這いして','乱行か','輪姦で','レズビアン'], //5文字
      random1: null,
      random2: null,
      random3: null
  }),
  methods: {
    reload() {
      this.random1 = Math.floor(Math.random() * this.msg1.length);
      this.random2 = Math.floor(Math.random() * this.msg2.length);
      this.random3 = Math.floor(Math.random() * this.msg3.length);
    },
    change1(){
      this.random1 = Math.floor(Math.random() * this.msg1.length);
    },
    change2(){
      this.random2 = Math.floor(Math.random() * this.msg2.length);
    },
    change3(){
      this.random3 = Math.floor(Math.random() * this.msg3.length);
    },
    tweet() {
      var shareURL = "https://twitter.com/intent/tweet?text=" + this.msg1[this.random1]+" "+this.msg2[this.random2]+" "+this.msg3[this.random3] + "%20%23エロ俳句"+'&url='+"https://ero-haiku-794a8.web.app/";
      location.href = shareURL
        // console.log(this.msg1[this.random1]+" "+this.msg2[this.random2]+" "+this.msg3[this.random3]);
      
    }
  }
};
</script>

<style>

</style>
