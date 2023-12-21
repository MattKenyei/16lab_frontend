$(document).ready(function() {
    $('#selectnationality').click(function() {
        $.ajax({
            url: 'http://localhost:5129/api/Club/select',
            method: 'GET',
            success: function(response) {
                console.log(response);
                var ulnationality = $('#ulnationality')
                ulnationality.empty()
                response.forEach(function(club) {
                    var li = $('<li>').text('id: ' + club.clubId + ' name: ' + club.name + ' Name: ' + club.kindName + ' Image: ')
                    var img = new Image()
                    img.src = 'data:image/png;base64,' + club.photo
                    img.style.width = '300px'
                    img.style.height = 'auto'
                    li.append(img)
                    ulnationality.append(li)
                })
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#insertnationality').click(function(event) {
        event.preventDefault()

        var image = $('#insertnationalityImage')[0].files[0]
        var name = $('#insertnationalityName').val()
        var l_group_id = $('#insertnationalityl_group_id').val()
        var formData = new FormData()
        formData.append('photo', image)

        $.ajax({
            url: 'http://localhost:5129/api/Club/insert?name=' + name + '&kind_name=' + l_group_id,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#updatenationality').click(function(event) {
        event.preventDefault()

        var id = $('#updatenationalityId').val()
        var image = $('#updatenationalityImage')[0].files[0]
        var name = $('#updatenationalityName').val()
        var l_group_id = $('#updatenationalityl_group_id').val()
        var formData = new FormData()
        formData.append('photo', image)

        $.ajax({
            url: 'http://localhost:5129/api/Club/update?id=' + id +  '&name=' + name + '&kind_name=' + l_group_id,
            method: 'PUT',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#deletenationality').click(function(event) {
        event.preventDefault()

        var id = $('#deletenationalityId').val()

        $.ajax({
            url: 'http://localhost:5129/api/Club/delete?id=' + id,
            method: 'DELETE',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})