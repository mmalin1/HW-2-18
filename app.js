fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => response.json())
  .then(data => 
    data.forEach((i,k) => {

        document.getElementById('id').innerHTML +='<p>' + i.id + '</p>';
        document.getElementById('title').innerHTML +='<p>' + i.title + '</p>';
        document.getElementById('body').innerHTML +='<p>' + i.body + '</p>';

    }))
    
    

fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(test => test.json())
    .then(two => 
        two.forEach((p,r) => {
            document.getElementById('q2').innerHTML += '<p>' + p.body.substring(0,50) + '</p>';
        }))


var myObj , x;
fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(next => next.json())
    .then(four =>
        four.forEach((m,n) => {

            
            rand1 = Math.floor((Math.random() * 3) + 1);
            rand2 = Math.floor((Math.random() * 100) + 100);

            myObj = {
                "id": [rand1+rand2],
                "title": [m.body.substring(0,5)+rand1],
                "body": [m.body.substring(m.body.length/2, m.body.length)]

             };
           
        })

    )

    fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(qu5 => qu5.json())
    .then(posts => 
        posts.forEach((i,k) => {
            document.getElementById('q5').innerHTML += "<li> " + i.title.substring(0,50) + "</li>"
        }))

    fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(last => last.json())
    .then(arrange => 
        arrange.forEach((m,n) => {
            if (m.id % 2 == 0){
                document.getElementById('even').innerHTML += '<p>' + m.title + '</p>';
            }
            else{
                document.getElementById('odd').innerHTML += '<p>' + m.title + '</p>';
            }
        })
    )

   

 