// review

var button1 = document.createElement("div");
button1.classList.add("close-button1");

var button2 = document.createElement("div");
button2.classList.add("close-button2");

document.getElementById('shopify-product-reviews').onclick = function() {
  document.getElementsByClassName('spr-content')[0].appendChild(button1).appendChild(button2)
};


$(document).ready(function() {
  $('#shopify-product-reviews').click(function() {
    $('.spr-content').addClass('peg');
    console.log('add');
  });
});

$(document).ready(function() {
  $(button1).click(function() {
    $('.spr-content').removeClass('peg');
    console.log('delete');
  });
});

// add to cart

$(document).ready(function() {

  var form = $('form[action="/cart/add"]');

  $(form).find('[data-variant-id]').on('click', function() {
    var id = $(this).data('variant-id');
    console.log(id);
    $(form).find('input[name="id"]').val(id);
  });


  var hiddenInput = $('[data-variant-id]');

  $("input[type='radio']").click(function () {
    for (i = 1; i <= hiddenInput.index; i++) {
     $(i).select();
    }
  });
})

// product photos

jQuery(window).on('resize', function() {

    var viewportWidth = jQuery(window).width();

    var settings = {
      bannerSelector : '[data-banner]',
      arrows: true,
      dots: false,
      dotsClass: 'slick-dots'
      };

    if (viewportWidth > 850) {
        $(settings.bannerSelector).slick('unslick');
    }

    else {
      $(settings.bannerSelector).slick({
          prevArrow:'<button type="button" class="prev_arrow arrow">￩</button>',
          nextArrow:'<button type="button" class="next_arrow arrow">￫</button>',
          arrows: settings.arrows,
          dots: settings.dots,
          adaptiveHeight: true
        })
    }
});
