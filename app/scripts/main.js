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
    $(this).parents(".dropdown").toggleClass(active);
    $(this).toggleClass(active);
  });

  $dropdownItem.click(function () {
    $(this).parents(".dropdown").find(".dropdown__name").html($(this).text());
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
    // $(this).next().find(".profile__link").not(".has-dropdown").removeClass("active")
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

  // $('.media-list').on('click', '.fa-play', function() {
  //   $(this).hide();
  //   $(this).parents(".tbl-profile__media").find("video").get(0).play();
  // });

  // $(".media-list").on('click', '.myvideo', function(){
  //   $(this).parents(".tbl-profile__media").find(".fa-play").show();
  //   $(this).get(0).pause();
  // })

  $('.profile__txt').bind('mouseenter', function(){
    var $this = $(this);

    if(this.offsetWidth < this.scrollWidth && !$this.attr('title')){
        $this.attr('title', $this.text());
    }
  });
  // com js show text full

  $('.profile__txt').bind('mouseenter', function(){
    var $this = $(this);

    if(this.offsetWidth < this.scrollWidth && !$this.attr('title')){
        $this.attr('title', $this.text());
    }
  });

  $('.js-hover-full').bind('mouseenter', function(){
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
    $(".profile__nav").not(".--bdr-none").css("height", heightProfileNav+"px");

    $(".popup-detail__body").css("height", heightPopupBody+"px");
    if ($("body").hasClass("no-scroll")) {
       // tagrget page
        var heightTargerHead = $(".targer-main__head").innerHeight();
        var heightTargerNav = $(".targer-nav.js-targer-nav").outerHeight(true);
        // var heightPaddingTargerBody = parseInt( $(".targer-main__body").css("padding").substring(-2,2))

        var heightTblBody = heigthScreen - heightHeadApp - heightMenuApp - heightTargerHead - heightTargerNav - heightFuntion - heightTblHead - heightScrollBar;
        $(".tbl-profile__body").css("height", heightTblBody+"px");
        $(".profile__nav").css("height", heightProfileNav+"px");
    }
    if ($(".profile ").hasClass("--setting")) {
      var heightProfileNav = heigthScreen - heightHeadApp ;
      $(".profile__nav").css("height", (heightProfileNav - 2)+"px");
    }
    // profile__sidebar has header-app menu-app
    if ($(".profile").get(0).hasAttribute("data-heightSidebar")) {
      var heightProfileNav = heigthScreen - heightHeadApp - heightMenuApp;
      $(".profile__sidebar").css("height", (heightProfileNav - 2)+"px");
    }
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
 
  $(".popup-menu, .profile__more, .media-list ").click(function(e) {
    e.stopPropagation();
  })
 
  $("body").click(function(){
    $(".popup-menu").removeClass("active-menu");
  });

  // add class to hover
  $(".tooltip-menu").parents(".profile__link").addClass("has-more")

  // chartjs
  const Utils = ChartUtils.init()
  Chart.defaults.backgroundColor = '#fff';
Chart.defaults.borderColor = 'rgba(255,255,255, 0.15)';
  Chart.defaults.color = '#fff';
  var NUM_DATA = 130;
  var NUM_CFG = {count: NUM_DATA, min: 0, max: 0.2};

  var dataMonthly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["Jul 2024"],
    // labels: Utils.months({count: NUM_DATA}),
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var dataYearly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["2024"],
    // labels: Utils.months({count: NUM_DATA}),
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var dataDaily = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["Jul 2024"],
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var NUM_DATA_HOURS = 130;
  var NUM_CFG_HOURS = {count: NUM_DATA, min: 0, max: 0.2};
  var dataHourly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    // labels: ["Jul 2024"],
    labels: ["00 - 01", "01 - 02", "02 - 03", "03 - 04",  "04 - 05","05 - 06", "06 - 07", "07 - 08", "08 - 09","09 - 10", "10 - 11", "11 - 12", "12 - 13", "13 - 14", "14 - 15", "15 - 16", "16 - 17", "17 - 18", "18 - 19","19 - 20", "20 - 21", "21 - 22", "22 - 23", "23 - 24"],
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
    ]
  };

  

  var optionsMonthly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        // stacked: true,
        grid: {
          display: true,
          // color: "#f7f7f7",
          // drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        },
             
      },
      x: {
        grid: {
          display: true,
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly',
        align: 'start'
      }
    }
  };

  var optionsYearly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",          
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        }        
      },
      x: {
        grid: {
          display: true
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Yearly',
        align: 'start'
      }
    }
  };

  var optionsDaily = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        }        
      },
      x: {
        grid: {
          display: true
        },
        ticks: {
          maxRotation: 30,
          minRotation: 30,            
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Daily',
        align: 'start'
      }
    }
  };

  var optionsHourly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",
          drawTicks: false,
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        },
             
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          maxRotation: 30,
          minRotation: 30,
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Hourly',
        align: 'start'
      }
    }
  };
  

  
 
  // if($(".chart-date").length) {
  //   new Chart('chartMonthly', {
  //     type: 'bar',
  //     options: optionsMonthly,
  //     data: dataMonthly
  //   });
  //   new Chart('chartYearly', {
  //     type: 'bar',
  //     options: optionsYearly,
  //     data: dataYearly
  //   });

  //   new Chart('chartDaily', {
  //     type: 'bar',
  //     options: optionsDaily,
  //     data: dataDaily
  //   });

  //   new Chart('chartHourly', {
  //     type: 'bar',
  //     options: optionsHourly,
  //     data: dataHourly
  //   });
  // }

  

  // tab
  $(".js-targer-nav .targer-nav__item").not(".--dropdown").click(function() {
    $('.js-targer-nav .targer-nav__item').removeClass('active');
   
    $(this).addClass('active');
    $('.targer-content__item').hide();
    
    // var activeTab = $(this).attr('data-tab');
    // $("#"+activeTab).fadeIn();
    var index = $(this).index();
    $(".targer-content__item").eq(index).fadeIn()
    $("body").removeClass("no-scroll")
  });

  $(".js-targer-nav .dropdown__item").click(function(e) {
    e.preventDefault()
      $('.js-targer-nav .targer-nav__item').removeClass('active');
      $('.js-targer-nav .targer-nav__item.--dropdown').addClass("active");
      $('.targer-content__item').hide();
      $(".targer-content__item#tab-dropdown").fadeIn();
      $(this).parents(".dropdown").toggleClass("--active")
      $("body").addClass("no-scroll")

      setheightScroll();
  })
  
  $(".js-targer-nav .dropdown__list").click(function(e) {
    e.stopPropagation();
  })

  // pagination
  $(".pagination .pagination__item").not(".--next, .--prev,.--dot").click(function(e) {
    $('.pagination .pagination__item').removeClass("active");
    $(this).addClass('active')
  })

  // modal
//   var player = videojs('my-player');
// var ModalDialog = videojs.getComponent('ModalDialog');

// var modal = new ModalDialog(player, {

//   // We don't want this modal to go away when it closes.
//   temporary: false
// });

// player.addChild(modal);

// player.on('pause', function() {
//   modal.open();
// });

// player.on('play', function() {
//   modal.close();
// });

// modal.addClass('vjs-my-fancy-modal');
// player.controlBar.el().insertBefore(button.el(), player.controlBar.el().firstChild);


$('.media-list').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
    delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'media-popup',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
    image: {
      markup: '<div class="mfp-figure">'+
                '<div class="windown-nav">'+
                  '<div class="windown-nav__list">'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-window-minimize"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-window-restore"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-xmark"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="media-tools">'+
                  '<div class="media-tools__list">'+
                    '<div class="media-tools__item">'+
                      '<div class="media-tools__icon active">'+
                        '<i class="fa-solid fa-download"></i>'+
                      '</div>'+
                    '</div>'+
                    '<div class="media-tools__item">'+
                      '<div class="media-tools__icon">'+
                        '<i class="fa-solid fa-file-pdf"></i>'+
                      '</div>'+
                    '</div>'+
                    '<div class="media-tools__item">'+
                      '<div class="mfp-close"></div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="mfp-img"></div>'+
              // '<div class="mfp-bottom-bar">'+
              //   '<div class="mfp-title"></div>'+
              //   '<div class="mfp-counter"></div>'+
              // '</div>'+
            '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,  `.mfp-close` by close button
    
      // cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to   null to disable zoom out cursor. 
    
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    },

    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="windown-nav">'+
                  '<div class="windown-nav__list">'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-window-minimize"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-window-restore"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                    '<div class="windown-nav__item">'+
                      '<a class="windown-nav__link" href="#" title="">'+
                        '<div class="windown-nav__icon">'+
                          '<i class="fa-solid fa-xmark"></i>'+
                        '</div>'+
                      '</a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="media-tools">'+
                  '<div class="media-tools__list">'+
                    '<div class="media-tools__item">'+
                      '<div class="media-tools__icon active">'+
                        '<i class="fa-solid fa-download"></i>'+
                      '</div>'+
                    '</div>'+
                    '<div class="media-tools__item">'+
                      '<div class="media-tools__icon">'+
                        '<i class="fa-solid fa-file-pdf"></i>'+
                      '</div>'+
                    '</div>'+
                    '<div class="media-tools__item">'+
                      '<div class="mfp-close"></div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              // '<div class="mfp-bottom-bar">'+
              //   '<div class="mfp-title"></div>'+
              //   '<div class="mfp-counter"></div>'+
              // '</div>'+
            '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,  `.mfp-close` by close button
    
      // cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to   null to disable zoom out cursor. 
    
      tError: '<a href="%url%">The iframe</a> could not be loaded.' // Error message
    },
    
    
      // preloader: true,
    
    

    callbacks: {

      elementParse: function(item) {
        console.log("fdsf")
          if(item.el[0].className == 'video') {
              item.type = 'iframe';
          } else {
              item.type = 'image';
          }
          
      },
    },
  });
});

// $('.media-list').magnificPopup({
 
		

// 	});
  

  // $(document).on('click', '.mfp-arrow', function (e) {
  //   setTimeout(() => {
  //     $(".mfp-iframe").contents().find("video").attr("style","width:100%;height:100%;object-fit:cover")
  //   }, 100);
	// });

  // $(".media-list").click(function(){
  //   setTimeout(() => {
  //     $(".mfp-iframe").contents().find("video").attr("style","width:100%;height:100%;object-fit:cover")
  //   },100);
  // })
  // popup create data pool
  $(".popup-modal").click(function(){
    $(this).addClass("active")
  })
  $('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	});
	$(document).on('click', '.js-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
    $(".popup-modal").removeClass("active")

	});

  // hs 140
  $(".profile__link").not(".has-dropdown").click(function(){
    $(".profile__link").not(".has-dropdown").removeClass("active")
    $(this).addClass("active")
  })

  var catFilter = function() {
    var $catNav = $("[data-filter-nav]");
    var $catBtn = $catNav.find("[data-filter-btn]");
    var $catList = $("[data-filter-list]")
    var $catItem =  $catList.find("[data-filter-item]");
    
    $catBtn.click(function() {
      $catBtn.removeClass("active");
      $(this).addClass('active');
      var catValue = $(this).attr("data-cat");
      if(catValue == "all") {
       $catItem.removeClass("hide");
      } else {
       $catItem.removeClass("hide").filter(':not([data-val*="' + catValue + '"])' ).addClass( 'hide');
      }
    })
  }
  catFilter()

  // h147
  $(".form-password .fa-solid").click(function () {
    var passwordInput = $($(this).siblings(".form-control"));
    var icon = $(this);
    if (passwordInput.attr("type") == "password") {
        passwordInput.attr("type", "text");
        icon.removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
        passwordInput.attr("type", "password");
        icon.removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
  // h160
  // var quill = new Quill('#editor', {
  //   modules: {
  //     toolbar: '#toolbar'
  //   },
  //   theme: 'snow'
  // });

  // const quill = new Quill('#editor', {
  //   modules: {
  //     syntax: true,
  //     toolbar: '#toolbar-container',
  //   },
  //   placeholder: 'Compose an epic...',
  //   theme: 'snow',
  // });

  // h163_02
  $( ".calendar__datepicker" ).datepicker();
  $(".calendar__datepicker").hide();

  $(".calendar__icon").click(function(){
  
     $(".calendar__datepicker").toggle();
  }); 
  
  // $(".calendar__datepicker").datepicker({ 
  //   onSelect: function(value, date) { 
  //      //chose date
  //      $(".calendar__datepicker").hide(); 
  //      var dateAsString = dateText; //the first parameter of this function
  //      var dateAsObject = $(this).datepicker( 'getDate' ); //the getDate method
  //   } 
  // });
  $(".calendar__datepicker").on("change",function(){
    var date = $(this).datepicker('getDate');

		var $me = $(this),
    
				$selected = $me.val();

        console.log("value",date.getDate())
        $(".calendar__datepicker").hide();
        $(this).parents(".calendar").find('.calendar__day').html(date.getDate());

        $(this).parents(".calendar").find('.calendar__month').html(date.getMonth() + 1);

        $(this).parents(".calendar").find('.calendar__year').html(date.getFullYear());

		// 		$parent = $me.parents('.date-picker');
		// $parent.find('.result').children('span').html($selected);
	});

 

//   $('.calendar__datepicker').datepicker({
//     dateFormat: 'yy-m-d',
//     inline: true,
//     onSelect: function(dateText, inst) { 
//         var date = $(this).datepicker('getDate'),
//             day  = date.getDate(),  
//             month = date.getMonth() + 1,              
//             year =  date.getFullYear();
//         // alert(day + '-' + month + '-' + year);
//     }
// }).on("change",function(){
//   var $me = $(this),
//       $selected = $me.val();

//       console.log("value",$selected )
//       $(".calendar__datepicker").hide();
//       // $(this).parents(".calendar").find('.calendar__day').html()
//   // 		$parent = $me.parents('.date-picker');
//   // $parent.find('.result').children('span').html($selected);
// });

  // var currentDate = $( ".datepicker" ).datepicker( "getDate" );
  // console.log("currentDate", currentDate)
});
