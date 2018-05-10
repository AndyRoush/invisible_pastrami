$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchInput = $('#query').val();
        getRequest(searchInput);
    });
});

function getRequest(searchInput) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyAFJSf_-My_12R1h5pHH8SIgRSZm_wU0vA',
        q: searchInput
    };

    $.getJSON(url, params, function (searchInput) {
        showResults(searchInput);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        var videoId = value.id.videoId
        
        var vidContainer = $("<div>")
        vidContainer.addClass("vid-container col-lg-4")
        vidContainer.attr("id", "vid-" + index)
        
        // create iframe for video search result, append to video container
        var newVid = $("<iframe>")
        newVid.attr("width", "550")
        newVid.attr("height", "400")
        newVid.attr("frameborder", "0")
        newVid.attr("src", "http://www.youtube.com/embed/" + videoId)
        vidContainer.append(newVid)
 
        // append container to results div
        $('.results').append('<p>' + title + '</p>')
        $('.results').append(vidContainer)

    
    });

    $('#search-results').html(html);
}