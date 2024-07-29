$(document).ready(function () {
  var $body = $("body");
  var active = "--active";
  //anchor
  // $('a[href^="#"]').click(function () {
  //   var speed = 300;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? "html" : href);
  //   var position = target.offset().top;
  //   $("html, body").animate(
  //     {
  //       scrollTop: position,
  //     },
  //     speed,
  //     "swing"
  //   );
  //   return false;
  // });

  // header
  var $headerBurge = $(".header__burger");
  var headerActive = "active-header";
  $headerBurge.click(function () {
    $body.toggleClass(headerActive);
  });

  // .dropdown
  var $dropdown = $(".dropdown");
  var $dropdownItem = $(".dropdown__item");
  var $dropdownName = $(".dropdown__name");
  var isSelect = "--is-select";

  $dropdown.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass(active);
  });

  $dropdownItem.click(function () {
    $dropdownName.html($(this).text());
    $dropdownItem.removeClass(isSelect);
    $(this).addClass(isSelect);
  });

  // select lang
  var $selectLang = $(".select-lang");
  var $selectLangItem = $(".select-lang__item");
  var $selectLangCurrent = $(".select-lang__current");
  var dNone = "d-none";

  $selectLang.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass(active);
  });

  $selectLangItem.click(function () {
    $selectLangItem.removeClass(dNone);
    $(this).addClass(dNone);
    $selectLangCurrent.html($(this).html());
  });

  // backtop
  var $scrollTop = $(".scroll-top");
  $scrollTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // modal
  var show = "show";
  var modalOpen = "modal__open";
  var modalClass = ".modal";
  var $modal = $(".modal");
  var $modalClose = $(".modal__close");
  var $modalHandle = $("[data-toggle='modal']");

  $modalHandle.click(function (e) {
    e.preventDefault();
    var modalShow = $(this).data("target");
    $(modalShow).addClass(show);
    $body.addClass(modalOpen);
    $body.append("<div class='modal__backdrop show'></div>");
  });

  $modalClose.click(function (e) {
    e.preventDefault();
    closeModal();
  });

  function closeModal() {
    var $modalBackdrop = $(".modal__backdrop");
    $modal.removeClass(show);
    $body.removeClass(modalOpen);
    $modalBackdrop.removeClass(show);
    $modalBackdrop.remove();
  }

  //tab
  var hash = window.location.hash;
  var $tabNavItem = $(".tabs__nav li");
  var $tabContent = $(".tabs__content");
  if (hash) {
    $tabNavItem.removeClass(active);
    $('a[href="' + hash + '"]')
      .parents("li")
      .addClass(active);

    $tabContent.removeClass(active);
    $(hash).addClass(active);
  }

  $tabNavItem.click(function (e) {
    var itemShow = $(this).find("a").attr("href");
    $tabContent.removeClass(active);
    $(itemShow).addClass(active);
    $tabNavItem.removeClass(active);
    $(this).addClass(active);
  });

  $(document).click(function (e) {
    // .dropdown
    if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
      $dropdown.removeClass(active);
    }
    // .select-lang
    if (!$selectLang.is(e.target) && $selectLang.has(e.target).length === 0) {
      $selectLang.removeClass(active);
    }
    // modal
    if ($(e.target).is(modalClass)) {
      closeModal();
    }
  });

  // $(".has-dropdown").addClass("actitive")



  $('.has-dropdown').next().toggle();
  $('.has-dropdown').toggleClass("active")

  $('.has-dropdown').click(function() {
    $(this).next().toggle();
    $(this).toggleClass("active")
  })
  $('.sidebar__link').click(function() {
    $('.sidebar__link').removeClass("active")
    $(this).addClass("active")
    $(".profile__content").addClass("active")
    $(".profile__collapse").show();
  })

  $(".profile__collapse").click(function() {
    $(".profile__content").removeClass("active")
    $(this).hide();
  })

  $('.fa-play').on('click', function() {
    $(this).hide();
    $(this).parents(".tbl-profile__media").find("video").get(0).play(); 
  });

  $(".myvideo").click(function(){
    $(this).parents(".tbl-profile__media").find(".fa-play").show();
    $(this).get(0).pause(); 
  })

  $('.profile__txt').bind('mouseenter', function(){
    var $this = $(this);

    if(this.offsetWidth < this.scrollWidth && !$this.attr('title')){
        $this.attr('title', $this.text());
    }
  });

  // accordion
  // $(".accordion-main__head").removeClass("active")
  $(".accordion-main__head").click(function() {
    $(this).toggleClass("active")
    $(this).next().slideToggle(300);
  });

  var setheightScroll = function () {
    var heigthScreen = $(window).innerHeight()
    var heightHeadApp = $(".header-app").innerHeight();
    var heightMenuApp = $(".menu-app").innerHeight();
    var heightFuntion = $(".profile__funtion").innerHeight();
    var heightTblHead = $(".tbl-profile__head").innerHeight();
    var heightPopupHead = $(".popup-detail__head").innerHeight();
    var heightScrollBar = 18;
    
    var heightTblBody = heigthScreen - heightHeadApp - heightMenuApp - heightFuntion - heightTblHead - heightScrollBar;
    var heightProfileNav = heigthScreen - heightHeadApp - heightMenuApp ;

    var heightPopupBody = heigthScreen - heightHeadApp - heightMenuApp - heightPopupHead ;

    $(".tbl-profile__body").css("height", heightTblBody+"px");
    $(".profile__nav").css("height", heightProfileNav+"px");

    $(".popup-detail__body").css("height", heightPopupBody+"px");
  }

  $( window ).on( "resize", function() {
    setheightScroll()
  });

  setheightScroll()

  $(".popup-close").click(function() {
      $(this).parents(".profile__popup").removeClass("active")
      $(".tbl-profile__body input").prop( "checked", false );
      setheightScroll()
  });

  $(".tbl-profile__body .tbl-profile__row").click(function() {
    $(".tbl-profile__body .tbl-profile__row").removeClass("active");
    $(".tbl-profile__body input").prop( "checked", false );

    $(this).addClass("active");
    $(this).find("input").prop( "checked", true );
    $(".profile__popup").addClass("active")
  });

  $(".profile__more").click(function() {
    $(".popup-menu").not($(this).next()).removeClass("active-menu");
    $(this).next().toggleClass("active-menu");
    
  })
 
  $(".popup-menu, .profile__more").click(function(e) {
    e.stopPropagation();
  })
 
  $("body").click(function(){
    $(".popup-menu").removeClass("active-menu");
  });

  // add class to hover
  $(".tooltip-menu").parents(".profile__link").addClass("has-more")

});
