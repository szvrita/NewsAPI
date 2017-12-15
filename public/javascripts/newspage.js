$('body').on('click', '.btn.btn-outline-primary',
    function() {
        var outlet = $(this).parent().attr('newsid');

            $(this).parent().find('.pages').toggle();

                $.ajax({
                    type: 'get',
                    url: 'https://newsapi.org/v1/articles?source=' + $(this).parent().attr('newsid') + '&sortBy=top&apiKey=9305a472d4bc489ab116d5a8f3bd7f56',
                    success: function (data, next) {
                      var myData = data.articles;
                        for (var i = 0; i < myData.length; i++) {
                          var datas = myData[i];

                            $('.card-deck[pageid="'+ outlet +'"]').append($('<div class="col-md-4">')
                                .append($('<div class="card">')
                                    .append($('<img class="card-img-top" src=' + datas.urlToImage + '>'))
                                    .append($('<div class="card-block">').append($('<h5 class="card-title">').append(datas.title))
                                        .append($('<p class="card-text">').append(datas.description))
                                        .append($('<a target="_blank" href="' + datas.url + '" class="btn btn-info">Read...</a>')))
                                    .append($('<div class="card-footer card text-white bg-secondary">')
                                        .append($('<small>Published: </small>').append(datas.publishedAt)))));
                        }
                    }
                })
});
