<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <title>ブログテンプレート for Bootstrap · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.jp/docs/5.0/examples/blog/">

    <br>

<link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
<link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico">
<meta name="theme-color" content="#7952b3">


    <!-- Custom styles for this template -->
    <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="blog.css" rel="stylesheet">
</head>
<main class="container">
  <div class="row rounded bg-dark mb-4 appear-element-case-minimum">
    <div class="col p-4 p-md-5 mb-4 text-white row">
      <div class="px-0">
        <h2 class="display-4 font-italic title-font-case-minimum">Welcome to Higuchi's <br> self-introduction page.</h2>
        <p class="lead my-3">著者の趣味を紹介するページです</p>
      </div>
    </div>
    <div class="col-md-4 offset-md-1 clear-element">
      <img src="./../../assets/Toyamayoko.jpg" width="428" height="350">
    </div>
  </div>

  <div class="row d-flex justify-content-around">
    <div class="col-md-6 row">
      <postCard class="col" :summary="'Indoor hobby'" :title="'読書'" p-none />
      <div class="col-md content_area">
        <img src="./../../assets/bookAndCofee.png" height="272" width="330" class="img">
      </div>
    </div>
    <div class="col-md-6 row">
     <postCard class="col" :summary="'Outdoor  hobby'" :title="'Frestyle Fottball'" p-none />
      <div class="col-md content_area">
        <video alt="freestyle"  autoplay  loop muted src="./../../assets/VID_36081025_093034_176.mp4" height="272" width="330" class="img"/>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 font-italic border-bottom img">
        From the Firehose
      </h3>

      <article class="blog-post">
        <h2 class="blog-post-title">サンプルブログポスト</h2>
        <p class="blog-post-meta">2014/01/01 by <a href="#">太郎</a></p>

        <p>このブログポストは Bootstrap のスタイルを用いて作られた数種類の異なるタイプのコンテンツを含んでいます。基本のタイポグラフィ、画像、コードはすべてサポートされています。</p>
        <hr>
        <p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも <a href="#">薄暗いじめじめした所</a>でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。</p>
        <blockquote>
          <p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ<strong>彼の掌に載せられてスーと持ち上げられた時</strong>何だかフワフワした感じがあったばかりである。</p>
        </blockquote>
        <p>掌の上で少し落ちついて書生の顔を見たのが<em>いわゆる人間というものの見始</em>であろう。この時妙なものだと思った感じが今でも残っている。</p>
        <h2>見出し</h2>
        <p>第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。</p>
        <h3>サブの見出し</h3>
        <pre><code>コードブロックの例</code></pre>
        <p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</p>
        <h3>サブの見出し</h3>
        <p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。</p>
        <ul>
          <li>この書生というのは時々我々を捕えて煮て食うという話である。</li>
          <li>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。</li>
          <li>ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</li>
        </ul>
        <p>掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。</p>
        <ol>
          <li>この時妙なものだと思った感じが今でも残っている。</li>
          <li>第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。</li>
          <li>その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。</li>
        </ol>
        <p>のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。</p>
      </article><!-- /.blog-post -->

      <article class="blog-post">
        <h2 class="blog-post-title">別のブログポスト</h2>
        <p class="blog-post-meta">2013/12/23 by <a href="#">次郎</a></p>

        <p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも <a href="#">薄暗いじめじめした所</a>でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。</p>
        <blockquote>
          <p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ<strong>彼の掌に載せられてスーと持ち上げられた時</strong>何だかフワフワした感じがあったばかりである。</p>
        </blockquote>
        <p>掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。</p>
        <p>第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。</p>
      </article><!-- /.blog-post -->

      <article class="blog-post">
        <h2 class="blog-post-title">新しい特徴</h2>
        <p class="blog-post-meta">2013/12/14 by <a href="#">三郎</a></p>

        <p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。</p>
        <ul>
          <li>この書生というのは時々我々を捕えて煮て食うという話である。</li>
          <li>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。</li>
          <li>ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</li>
        </ul>
        <p>掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。</p>
      </article><!-- /.blog-post -->

      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary" href="#">古い記事</a>
        <a class="btn btn-outline-secondary disabled" href="#">新しい記事</a>
      </nav>

    </div>

    <div class="col-md-4">
      <div class="p-4 mb-3 bg-light rounded">
        <h4 class="font-italic">ブログについて</h4>
        <p class="mb-0">吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも<em>薄暗いじめじめした所で</em>ニャーニャー泣いていた事だけは記憶している。</p>
      </div>

      <div class="p-4">
        <h4 class="font-italic">アーカイブ</h4>
        <ol class="list-unstyled mb-0">
          <li><a href="#">2014/03</a></li>
          <li><a href="#">2014/02</a></li>
          <li><a href="#">2014/01</a></li>
          <li><a href="#">2013/12</a></li>
          <li><a href="#">2013/11</a></li>
          <li><a href="#">2013/10</a></li>
          <li><a href="#">2013/09</a></li>
          <li><a href="#">2013/08</a></li>
          <li><a href="#">2013/07</a></li>
          <li><a href="#">2013/06</a></li>
          <li><a href="#">2013/05</a></li>
          <li><a href="#">2013/04</a></li>
        </ol>
      </div>

      <div class="p-4">
        <h4 class="font-italic">SNS</h4>
        <ol class="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </div>

  </div><!-- /.row -->

</main><!-- /.container -->

<footer class="blog-footer">
  <p>このブログテンプレートは<a href="https://getbootstrap.com/">Bootstrap</a>のために<a href="https://twitter.com/mdo">@mdo</a>によって作成されました。</p>
  <p>
    <a href="#">トップに戻る</a>
  </p>
</footer>
</template>

<script lang="ts">
import postCard from './../organisms/postCard.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'test3',
    components: {
    postCard
  },
})

</script>

<style lang="scss">
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    }

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }

    .ppear-element-case-minimum {
      display: none;
    }
}

@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
    .clear-element {
        display: none;
    }

    .appear-element-case-minimum {
      background-image: url("./../../assets/Toyamayoko.jpg");
      background-size: cover;
    }

    .title-font-case-minimum {
      color:rgb(40, 97, 255);
      font: bold italic weight;
    }
}

.img{
  background-color: black;
}

</style>