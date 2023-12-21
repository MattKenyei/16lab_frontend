$(document).ready(function() {
    $('#selectgroup').click(function() {
        $.ajax({
            url: 'http://localhost:5129/api/Kind/select',
            method: 'GET',
            success: function(response) {
                console.log(response);
                var ulgroup = $('#ulgroup')
                ulgroup.empty()
                response.forEach(function(group) {
                    var li = $('<li>').text('Id: ' + group.id + ' Name: ' + group.name)
                    ulgroup.append(li)
                })
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#insertgroup').click(function(event) {
        event.preventDefault()

        var name = $('#insertgroupName').val()

        $.ajax({
            url: 'http://localhost:5129/api/Kind/insert?name=' + name,
            method: 'POST',
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
    $('#updategroup').click(function(event) {
        event.preventDefault()

        var id = $('#updategroupId').val()
        var name = $('#updategroupName').val()

        $.ajax({
            url: 'http://localhost:5129/api/Kind/update?id=' + id + '&name=' + name,
            method: 'PUT',
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
    $('#deletegroup').click(function(event) {
        event.preventDefault()

        var id = $('#deletegroupId').val()

        $.ajax({
            url: 'http://localhost:5129/api/Kind/delete?id=' + id,
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