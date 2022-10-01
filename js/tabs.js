window.addEventListener('DOMContentLoaded', function() {
    // вешаем на кнопку обработчик клика
    document.querySelector('#burger').addEventListener('click', function() {
        // добавляем или удаляем класс is-active
        document.querySelector('.menu').classList.toggle("is-active")

        // вешаем на открытое меню обработчик для его закрытия
        document.querySelector('.menu').addEventListener('click', function(){

            // удаляем класс is-active для того чтобы меню закрылось
            document.querySelector('.menu').classList.remove("is-active")

            // ВАЖНО!!! Удаляем обработчик закрытия (элемент оптимизации)
            document.querySelector('.menu').removeEventListener('click', this)
        })

    })

    // получаем массив элементов меню и на каждый пункт меню вешаем обработчик клика 
    document.querySelectorAll('.list__element').forEach(function(el){
        el.addEventListener('click', function(event) {

            // ВАЖНО!!! отменяем так называемое всплывание события (ссылку прекрепил в ответе сообщения)
            event.stopPropagation()
            
            // добавляем или удаляем класс, который окрашивает ссылку в красный цвет (для имитации)
            // Тут вы можете делать все что угодно: открывать другую вкладку, сайд эффект и т.д.
            event.target.classList.toggle('red')
        })
    })
})

// табы

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.step-btn').forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

const swiper = new Swiper('.swiper-container', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });