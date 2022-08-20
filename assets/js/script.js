let formData = $('#urlform');
let urlCreateCount = $('#count');
let urlform = $('#addUrl');
console.log(urlform);


formData.submit(function(e){
    e.preventDefault();
    
    $.ajax({
        type: 'post',
        url:'/urls',
        data: formData.serialize(),
        success: function(data){
            // console.log(data)
            urlform[0].value = '';
            let newURL =  addNewURL(data.data.url);
            $('.urlContainer').prepend(newURL);
            let count = parseInt(urlCreateCount[0].innerText) +1
            urlCreateCount[0].innerText = count;

        },error: function(error){
            console.log(error.responseText)
        }
    })
})


function addNewURL(url) {
    return $(`  <div class="url-boxes">
                    <p>
                        <a href="${url.fullUrl}" target="_blank" class="Url">${url.fullUrl}</a>
                    </p>
                    <p>
                        <a href="${url.shortUrl}" target="_blank" class="Url">${url.shortUrl}</a>
                    </p>
                </div>`)
}


