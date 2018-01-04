let $headerLis = $('#wrap .header .headerContent nav ul li')

let $contentFirstLi = $('#wrap .content .contentList li:first')[0]
let $contentLiHeight = $contentFirstLi.offsetHeight  // 578
let $contentTop = $("#wrap .content")[0].offsetTop // 60

let $sideNavLis = $("#wrap .content .sideNav li") // 小圆点 li标签

let $contentList = $('#wrap>.content>.contentList')

let $firstLi = $contentList.find('.firstLi>.first')
let $firstLiImg = $firstLi.children("img")[0]

let $secondLis = $contentList.find('.secondLi .left ul li')
let $secondLi1 = $($secondLis[0])
let $secondLi2 = $($secondLis[1])
let $secondLi3 = $($secondLis[2])
let $secondRight = $contentList.find('.secondLi .right')

let $thirdLis = $contentList.find('.thirdLi .left ul li')
let $thirdLi1 = $thirdLis[0]
let $thirdLi2 = $thirdLis[1]
let $thirdLi3 = $thirdLis[2]
let $thirdRight = $contentList.find('.thirdLi .right')

let $fourLis = $contentList.find('.fourLi .left ul li')
let $fourLi1 = $fourLis[0]
let $fourLi2 = $fourLis[1]
let $fourLi3 = $fourLis[2]
let $fourRight = $contentList.find('.fourLi .right')

let $fiveLis = $contentList.find('.fiveLi .left ul li')
let $fiveLi1 = $fiveLis[0]
let $fiveLi2 = $fiveLis[1]
let $fiveLi3 = $fiveLis[2]
let $fiveRight = $contentList.find('.fiveLi .right')

/* 导航点击事件 */
$headerLis.each((index, item) =>{
  $(item).click(() => {
    /* 导航区的变化 */
    $('#wrap .header .headerContent nav ul li[class]').removeAttr("class")
    $(item).attr("class", "active")
    // move(index)

    /* 内容区显示 */
      $("#wrap .content").animate({top: (-$contentLiHeight * index + $contentTop) + "px" }, 1000)
   /* 滚轮 */
    currentIndex = index
    // move(currentIndex)
    /* 内容区的动画效果 */


    /* 小圆点的变化 */
    $("#wrap .content .sideNav li[class]").removeAttr("class")
    $($sideNavLis[index]).attr('class', 'active')
  })
})

/* 小圆点的点击事件 */
$sideNavLis.each((index, item) => {
  $(item).click(() => {
    $("#wrap .content .sideNav li[class]").removeAttr("class")
    $(item).attr('class', 'active')

    $('#wrap .header .headerContent nav ul li[class]').removeAttr("class")
    $($headerLis[index]).attr("class", "active")

    $("#wrap .content").animate({top: (-$contentLiHeight * index + $contentTop) + "px", }, 1000)
  })
})

/* 滚轮事件 */
var currentIndex = 0
var preIndex = 0
let timer
$(document).on("mousewheel DOMMouseScroll", function (e) {
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

  clearTimeout(timer)
  timer = setTimeout(()=>{
    if (delta > 0) {
      // 向上滚
      console.log("wheelup");
      if (currentIndex > 0) {
        currentIndex--
      }
      move(currentIndex)
    } else if (delta < 0) {
      // 向下滚
      console.log("wheeldown");
      if (currentIndex < $contentList.children('li').length - 1){
        currentIndex++
        if ((currentIndex == 0 && delta < 0) || (currentIndex == $contentList.children('li').length && delta < 0)) {
          return
        }
        move(currentIndex)
      }
      preIndex = currentIndex
    }
  }, 200)
  window.event ? (window.event.returnValue = false) : e.preventDefault()
});

function move(index) {
  $headerLis.attr("class","")
  $headerLis.eq(index).addClass("active")

  $sideNavLis.attr("class", "")
  $sideNavLis.eq(index).addClass("active")

  $("#wrap .content").animate({top: (-$contentLiHeight * index + $contentTop) + "px" }, 1000)
}

/*function cssanimations(index) {
  // firstLi
  $firstLi.css({opacity:0}, 1000)
  if (index == 0){
    $firstLi.animate({opacity:1}, 1200)
  }
  // second Li
  $secondLi1.css({"transform":"translateY(500px)"})
  $secondLi2.css({transform:"translateY(500px)"})
  $secondLi3.css({transform:"translateY(500px)"})
  $secondRight.css({transform:"translateY(-500px)"})
  if (index == 1){
    $secondLi1.css({transform:"translateY(0px)"}, 800)
    $secondLi2.css({transform:"translateY(0px)"}, 800)
    $secondLi3.css({transform:"translateY(0px)"}, 800)
    $secondRight.css({transform:"translateY(0px)"}, 1200)
  }

}*/

/* 动画列表 */
/*let arr = [
  {
    in: cssAnimation($firstLi, {opacity:1}, 1000),
    out: cssAnimation($firstLi, {opacity:0}, 1000)
  },
  {
    in: function (){
      cssAnimation($secondLi1, {transform:"translateY(0px)"}, 800)()
      cssAnimation($secondLi2, {transform:"translateY(0px)"}, 1000)()
      cssAnimation($secondLi3, {transform:"translateY(0px)"}, 1200)()
      cssAnimation($secondRight, {transform:"translateY(0px)"}, 1200)()
    },
    out: function () {
      cssAnimation($secondLi1, {transform:"translateY(500px)"}, 800)()
      cssAnimation($secondLi2, {transform:"translateY(500px)"}, 1000)()
      cssAnimation($secondLi3, {transform:"translateY(500px)"}, 1200)()
      cssAnimation($secondRight, {transform:"translateY(-500px)"}, 1200)()
    }
  },
  {
    in: function (){
      cssAnimation($thirdLi2, {transform:"translateX(0px)"}, 1000)()
      cssAnimation($thirdLi3, {transform:"translateX(0px)"}, 1200)()
      cssAnimation($thirdRight, {transform:"translateX(0px)"}, 1200)()
    },
    out: function () {
      cssAnimation($thirdLi2, {transform:"translateX(-447px)"}, 1000)()
      cssAnimation($thirdLi3, {transform:"translateX(-894px)"}, 1000)()
      cssAnimation($thirdRight, {transform:"translateX(-161px)"}, 1000)()
    }
  },
  {
    in: function (){
      cssAnimation($fourLi1, {transform:"translateX(0px)"}, 1000)()
      cssAnimation($fourLi3, {transform:"translateX(0px)"}, 1000)()
      cssAnimation($fourRight, {opacity:1}, 1000)()
    },
    out: function () {
      cssAnimation($fourLi1, {transform:"translateX(-447px)"}, 1000)()
      cssAnimation($fourLi3, {transform:"translateX(447px)"}, 1000)()
      cssAnimation($fourRight, {opacity:0}, 1000)()
    }
  },
  {
    in: function (){
      cssAnimation($fiveLi1, {transform:"translate(0px, 0px)"}, 800)()
      cssAnimation($fiveLi2, {transform:"translate(0px, 0px)"}, 1000)()
      cssAnimation($fiveLi3, {transform:"translate(0px, 0px)"}, 1200)()
      cssAnimation($thirdRight, {opacity:1}, 1200)()
    },
    out: function () {
      cssAnimation($fiveLi1, {transform:"translate(-1000px, 500px)"}, 800)()
      cssAnimation($fiveLi2, {transform:"translate(-1000px, 500px)"}, 1000)()
      cssAnimation($fiveLi3, {transform:"translate(-1000px, 500px)"}, 1200)()
      cssAnimation($thirdRight, {opacity:0}, 1200)()
    }
  }
]*/

// function cssAnimation($el, css, time) {
//   return function ($el, css, time) {
//     setTimeout(() =>{
//       $el.css(css)
//     }, time)
//   }
// }