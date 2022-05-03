$(document).ready(function () {
  let isOpen = false;

  $(".j-burger").on("click", function () {
    $(".j-menu").slideToggle();
  });

  // табы в контактах

  $(".j-tabs-link").on("click", function (event) {
    event.preventDefault();

    $(".j-tabs-link").removeClass("active");
    $(this).addClass("active");

    let index = $(this).index(".j-tabs-link");

    $(".j-contacts-item").removeClass("active");
    $(".j-contacts-item").eq(index).addClass("active");
  });

  //фильтр работ//

  $(".j-catalog-search").on("click", function (event) {
    event.preventDefault();

    let filterData = $(this).data("filter");

    console.log(filterData);

    if (filterData === "all") {
      $(".features-card").show();
      return;
    }

    $(".features-card").each(function () {
      let typeData = $(this).data("type");

      if (filterData === typeData) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


  //faq

  let prevFaqBtn;

  $('.j-faq-btn').on('click', function(){

    if ( prevFaqBtn === this) {
      $(this).next().slideToggle();

      return;
    }

    $('.j-faq-btn').next().slideUp();
    $(this).next().slideDown();

    prevFaqBtn = this;

  });

  //карусель

  $(".j-carousel").slick({
  });

  //Все бабочки

  $('.j-btn-review').on('click', function () {
    
    
    $.ajax({
      type: 'POST',
      url: 'jsons/catalog.json',
      data: 'count=2',
      success: function(response) {
        const htmlString = createHtmlString(response.catalog);
        printToPage(htmlString);

        if (!response.isShowMore) {
          $('.j-btn-review').hide();
        }
      },
      error: function() {

      }
    });


    function createHtmlString(array) {
      let htmlString = '';
  
      array.forEach(function(arrayItem){
        htmlString = htmlString + `<div class="features-card" data-type="adults">
        <a href="#" class="card">
          <img src="${arrayItem.imgUrl}" alt="Бабочка сякая" />
          <span>${arrayItem.text}</span>
        </a>
      </div>`;
      });
  
      return htmlString;
    }
  
    function printToPage(string) {
      console.log(string);
      $('.j-features-list').append(string);
    }
  

  });

});
