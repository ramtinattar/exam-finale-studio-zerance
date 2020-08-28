// review

var button1 = document.createElement("div");
button1.classList.add("close-button1");

var button2 = document.createElement("div");
button2.classList.add("close-button2");

document.getElementById('shopify-product-reviews').onclick = function() {
  document.getElementsByClassName('spr-content')[0].appendChild(button1).appendChild(button2);
};


$(document).ready(function() {
  $('body').on('click', '.spr-summary-actions-togglereviews', function() {
    $('.spr-content').addClass('spr-content__new');
    $('#reviews_5552989438117').css('display', 'block');
    $('#form_5552989438117').css('display', 'none');
    console.log('add reviews');
  });
});

$(document).ready(function() {
  $('body').on('click', '.spr-summary-actions-newreview', function() {
    $('.spr-content').addClass('spr-content__new');
    $('#form_5552989438117').css('display', 'block');
    $('#reviews_5552989438117').css('display', 'none');
    console.log('add new review');
  });
});

$(document).ready(function() {
  $('body').on('click', '.close-button1', function() {
    $('.spr-content').removeClass('spr-content__new');
    console.log('delete');
  });
});

// add to cart

$(document).ready(function () {
  $("[this-option]").on("change", function () {
    let option2 = $("[this-option2]").val(),
        option3 = $("[this-option3]").val();
    $("[this-option1]").val(option2 + ' / ' + option3);
  });
});

$(document).ready(function () {
    $('[this-option4]').on("change", function () {
      let option4 = $("[this-option4]:checked").val();
      $("[this-option2]").val(option4);
      let option2 = $("[this-option2]").val(),
          option3 = $("[this-option3]").val();
      $("[this-option1]").val(option2 + ' / ' + option3);
    });
});

$(document).ready(function() {
  $('.product-examen__form--btn').on('click', function() {
    var id = $('[data-variant-id]:selected').data('variant-id');
    $('option[name="ramtin"]').val(id);
  });
})

// disable options (not working)

$("select[this-option1] option:disabled").each(function () {
  let ramtin = $(this).val().split("/");
  let ramtin2 = ramtin[0];
  let ramtin3 = ramtin[1];

  if ($('[this-option2]:selected').val(ramtin2)) {
    $("select[this-option3]").find('option[value="' + ramtin2.value + '"]').prop("disabled", true);
  }

});

// product photos

var x = window.matchMedia("(min-width: 851px)");

function myFunction(x) {

  if (x.matches) {
    $('[data-banner]').slick('unslick');
  }

  else {
    $('[data-banner]').slick({
        prevArrow:'<button type="button" class="prev_arrow arrow">←</button>',
        nextArrow:'<button type="button" class="next_arrow arrow">→</button>',
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
  };
};

myFunction(x);
x.addListener(myFunction);

//
































$(function () {
  var top = $("#sidebar").offset().top - parseFloat($("#sidebar").css("marginTop").replace(/auto/, 0));
  var footTop = $("#section-news-letter-examen").offset().top - parseFloat($("#section-news-letter-examen").css("marginTop").replace(/auto/, 0));

  var maxY = footTop - $("#sidebar").outerHeight();

  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();
    if (y >= top) {
      if (y < maxY) {
        $("#sidebar").addClass("fixed").removeAttr("style");
      } else {
        $("#sidebar").removeClass("fixed").css({ position: "absolute", top: maxY - top + "px"});
      }
    } else {
      $("#sidebar").removeClass("fixed");
    }
  });
});
