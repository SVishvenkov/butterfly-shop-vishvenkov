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



  $(".j-faq-burger1").on("click", function () {
    $(".j-desc1").slideToggle();
  });
  
  $(".j-faq-burger2").on("click", function () {
    $(".j-desc2").slideToggle();
  });

  $(".j-faq-burger3").on("click", function () {
    $(".j-desc3").slideToggle();
  });
});
