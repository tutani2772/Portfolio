$(function () {

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.6,
    });
  });
  $('a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    });
  });

  // スクロールしたときにTOPに戻るボタンを表示させる
  const pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 500);
  });

  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]:not([href="#"])').click(function() {
    let target = $($(this).attr('href')).offset().top;
    $('html,body').animate({
      scrollTop: target,
    },500);
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function() {
    $('section').each(function() {
      const imgpos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight  = $(window).height();

      if(scroll > imgpos - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  // 画像クリック時のモーダル表示
  $('.worksimg').on('click', function() {
    const imgSrc = $(this).attr('src');
    $('#modal-img').attr('src', imgSrc);
    $('#modal').fadeIn();
  });

  // モーダル閉じるボタンによるモーダル非表示
  $('#modal-close').on('click', function () {
    $('#modal').fadeOut();
  });

  // モーダル外クリックで非表示
  $('#modal').on('click', function(event) {
    if($(event.target).is('#modal')) {
      $('#modal').fadeOut();
    }
  });
});