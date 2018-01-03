let $headerLis = $('#wrap .header .headerContent nav ul li')
let $contentFirstLi = $('#wrap .content .contentList li:first')[0]
let $contentLiHeight = $contentFirstLi.offsetHeight  // 578
let $contentTop = $("#wrap .content")[0].offsetTop // 60

let $sideNavLis = $("#wrap .content .sideNav li")

$headerLis.each((index, item) =>{
  $(item).click(() => {
    $('#wrap .header .headerContent nav ul li[class]').removeAttr("class")
    $(item).attr("class", "active")

    $("#wrap .content").css("top", (-$contentLiHeight * index + $contentTop) + "px")
    $("#wrap .content .sideNav li[class]").removeAttr("class")
    $($sideNavLis[index]).attr('class', 'active')
  })
})

