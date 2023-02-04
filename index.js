var saintswitch = document.getElementById("saintswitch");
var tree = document.getElementById("tree");
var snow = document.getElementById("snow");
saintswitch.onclick = function (){
    document.body.classList.toggle("sainttheme");
    if(document.body.classList.contains("sainttheme")){
        tree.style.display="block";
        snow.style.display="flex";
    }
    else{
        tree.style.display="none";
        snow.style.display="none";
    }
}

const elements = [
    {
  
    userimg: "./images/users/john.jpeg",
    user: "John Doe",
    city: "Szczecin, Polska",
    postimg: "./images/photos/gielda.jpeg",
    like: "Liczba polubień: 2",
    usernamecomment: "Will Smith: ",
    usercomment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! ",
    more:"więcej",
    },
    {
        userimg: "./images/users/lisa.jpeg",
        user: "Lisa",
        city: "Kraków, Polska",
        postimg: "./images/photos/stoisko.jpeg",
        like: "Liczba polubień: 2",
        usernamecomment: "Will Smith: ",
        usercomment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! ",
        more:"więcej",
        },
    
        {
  
            userimg: "./images/users/cristiano.jpeg", 
            user: "Cristiano",
            city: "Kraków, Polska",
            postimg: "./images/photos/presentation.jpeg",
            like: "Liczba polubień: 2",
            usernamecomment: "Will Smith: ",
            usercomment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! ",
            more:"więcej",
            },
    ];
    
    const root = document.querySelector("#root");
    
    elements.map(function(element, index){
    
    

    const article = document.createElement("article");
    article.setAttribute("class", "post");
    root.appendChild(article);

    const post__header = document.createElement("div");
    post__header.setAttribute("class", "post__header");
    article.appendChild(post__header);

    const userdetails = document.createElement("div");
    userdetails.setAttribute("class", "user-details");
    post__header.appendChild(userdetails);

    const userdetails__img = document.createElement("div");
    userdetails__img.setAttribute("class", "user-details__img");
    userdetails.appendChild(userdetails__img);
 
    const userdetails__content = document.createElement("div");
    userdetails__content.setAttribute("class", "user-details__content");
    userdetails.appendChild(userdetails__content);

    const imagesquareimagesquaresmallisactive = document.createElement("div");
    imagesquareimagesquaresmallisactive.setAttribute("class", "image-square image-square--small is-active");
    userdetails__img.appendChild(imagesquareimagesquaresmallisactive);
    
    
    
    
    
    
    const post__content = document.createElement("div");
    post__content.setAttribute("class", "post__content");
    article.appendChild(post__content);


    const post__img = document.createElement("div");
    post__img.setAttribute("class", "post__img");
    post__content.appendChild(post__img);

    const post__details = document.createElement("div");
    post__details.setAttribute("class", "post__details");
    post__content.appendChild(post__details);

    const post__comments = document.createElement("div");
    post__comments.setAttribute("class", "post__comments");
    post__details.appendChild(post__comments);




    const post__commentscomment = document.createElement("p");
    post__commentscomment.setAttribute("class", "post__comments-comment");
    post__details.appendChild(post__commentscomment);






    const userimg = document.createElement("img");
    userimg.setAttribute("src", elements[index].userimg);
    imagesquareimagesquaresmallisactive.appendChild(userimg);

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = elements[index].user;
    p.innerText = elements[index].city;
  
    userdetails__content.appendChild(h3);
    userdetails__content.appendChild(p);





    const postimg = document.createElement("img");
    postimg.setAttribute("src", elements[index].postimg);
    post__img.appendChild(postimg);

    
    
    const strong = document.createElement("strong");
    strong.innerText = elements[index].like;
    post__comments.appendChild(strong);


    const strong2 = document.createElement("strong");
    strong2.innerText = elements[index].usernamecomment;
    post__commentscomment.appendChild(strong2);

    const usercomment = document.createElement("usercomment");
    usercomment.innerText = elements[index].usercomment;
    post__commentscomment.appendChild(usercomment);

    const more = document.createElement("a");
    more.setAttribute("href", "#");
    more.innerText = elements[index].more;
    post__commentscomment.appendChild(more);























    
    


    
    
    
    

    
    
    
    

    });