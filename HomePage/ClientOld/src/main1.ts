

//$(function () {
//    setNavigation();

//});

//function setNavigation() {
//    var path = window.location.pathname;
//    path = path.replace(/\/$/, "");
//    path = decodeURIComponent(path);

//    $(".nav a").each(function (linkit) {
//        var href = $(linkit).attr('href');
//        if (path.substring(0, href.length) === href) {
//            $(linkit).closest('li').addClass('active');
//        }
//    });

//    if (path == '/Projects') {
//        var container = document.querySelector("#sideNav");
//        var anchorlinks = container.querySelectorAll("a[href^='#']")
//        anchorlinks.forEach((item) => {

//            item.addEventListener('click', (e) => {
//                e.preventDefault();
//                var curItem = $(e.currentTarget);
//                var hashval = curItem.attr('href');
//                document.querySelector("#sideNav").querySelectorAll(".active")
//                    .forEach((item) => {
//                    $(item).removeClass('active');
//                });
                     
//                    curItem.closest('li').addClass('active');

                      
//                        var target = document.querySelector(hashval);

//                        target.scrollIntoView({
//                            block: 'start',
//                            inline: 'start'
//                        });

//                        history.pushState(null, '', hashval);
//                    }
//                );

//            });
//    $(anchorlinks[0]).click();  
       

        


//    };


//    $.validator.setDefaults({
//        highlight: function (element) {
//            $(element).addClass('is-invalid');
//        },
//        unhighlight: function (element) {
//            $(element).removeClass('is-invalid');
//        }
//    });

    
//}
