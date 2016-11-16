//kiválasztások
/*console.log($('li'))
console.log($('[class|=col]'))
console.log($('.list-group > .list-group-item'))
console.log($('.list-group').children('.list-group-item'))
console.log($('.list-group > .list-group-item:nth-child(1)'))
console.log($('[id]'))*/

//bejárások
//1 kattintott link kategóriájának neve
/*const $li = $('.list-group-item').eq(2)
console.log( $li.parent().prev().children().text())*/

const $panels = $('.panel')
$panels.each(function (){
    const $panel = $(this)
    const db = $panel.find('.list-group-item').length
    const $label = $('<span>')
})