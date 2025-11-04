function demo_javascript_method() {
    const url = 'http://localhost:8989/access_with_javascript'
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            document.getElementById("demo").innerHTML = JSON.stringify(json)
        })
}

function demo_get_ajax() {
    $.ajax({
        // URL to the Vercel production deployment (vercel --prod will give you this link)
        url: 'https://exercise-pearl.vercel.app/access_with_javascript',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) { 
            console.log(data);
            document.getElementById("demo").innerHTML = JSON.stringify(data)
        },
        error: function (data) { console.log(data); },
    });
}

function demo_post_ajax() {
    var users = {
        username: "Gta_user",
        password: 1234
      };
    $.ajax({
        // URL to the Vercel production deployment (vercel --prod will give you this link)
        url: 'https://exercise-pearl.vercel.app/using_post',
        type: 'POST',
        dataType: 'JSON',
        data: JSON.stringify(users),
        success: function (data) { console.log(data);},
        error: function (data) { console.log(data); },
    });
}

// TODO TASK 2 - call Python backend for decreasing or increasing the value
// function decrease_value() {
//     ...
// }

// function increase_value() {
//     ...
// }

// TASK 3
function post_sum_of_list() {
    // Given frontend code for TASK 3 --> complete app.py to make it work!
    // This is data that we want to pass in the message body to the backend
    var number_list = [1, 2, 3, 4, 5];
    $.ajax({
        // URL to the Vercel production deployment (vercel --prod will give you this link)
        url: 'http://localhost:8989/compute_sum',
        type: 'POST',
        dataType: 'JSON',
        data: JSON.stringify(number_list),
        success: function (data) { 
            console.log(data);
            document.getElementById("sum").innerHTML = JSON.stringify(data)
        },
        error: function (data) { console.log(data); },
    });
}
