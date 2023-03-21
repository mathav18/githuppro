

let JoinedDate;
let data;
function getData(){
   
let name=document.getElementById('name').value

fetch(` https://api.github.com/users/${name}`)
.then((response)=>{
    return response.json();
  })


  


  .then((data)=>{
             if(data.message==undefined){
              joinedDate=data.created_at.split("T")[0].split("-");
              joinedDate=dateCOnverter(joinedDate);    
              print(data,joinedDate);  
             }else{
                errPrint();
             }   
  })
}





let locate;
let twitter;
function print(data,joinedDate){

  if(data.location==null){
   locate="Not Available"
  }else{
     locate=data.location
  }
    
  if(data.twitter_username==null){
    twitter="Not Available"
   }else{
      twitter=data.twitter_username;
   }
    let parent=document.getElementById("contentArae")
    parent.innerHTML=`
    <div id="fst">
                <div id="box" style="width:30%">
                    <img src=${data.avatar_url}>
                </div>
                <div id="box" style="width:50%">
                    <div>
                        <h1 style="color: white;">${data.login}</h1>
                    <a style="color: #0079FF;" href=${data.html_url}>@${data.login}</a>
                    <h4 style="color: #697C9A;">This profile has no bio</h4>
                    </div>
                    
                </div>
                <div id="box" style="width:30%">
                    <h4 style="color: #8e9cb3;">${joinedDate}</h4>
                    </div>
            </div>

            <div id="second">
                <div id="list_parent">
                    <div id="smallBox">
                        <span id="title">Repos</span><br>
                        <span id="num">${data.public_repos}</span>
                    </div>
                    <div id="smallBox">
                        <span id="title" id="smallBox">Followers</span><br>
                        <span id="num">${data.followers}</span>
                    </div>
                    <div id="smallBox">
                    <span id="title" id="smallBox">Following</span><br>
                        <span id="num">${data.following}</span>
                    </div>
                </div>
                </div>


                <div id="second">
                <div id="list_parent2" >

                <div id="social">
                <i class="fa-solid fa-location-dot"></i>
                <h5>${locate}</h5>
                </div>
                <div id="social">
                <i class="fa-brands fa-twitter"></i>
              
                <h5>${twitter}</h5></div>
                
                <div id="social">
                <i class="fa-solid fa-link"></i>
                <h5>https://github.blog</h5></div>

                <div id="social">
                <i class="fa-solid fa-building"></i>
                <h5>@github</h5></div>
               
                </div>
                </div>
             
                </div>`
}

function dateCOnverter(date){
  
   let month=0; 
   let arr=["jan","feb","mar","apr","may","june","July","aug","sep","oct","nov","dec"];
   for(let i=0;i<arr.length;i++){
    if(i+1==date[1]){
   month=arr[i];
   break;
    }
   }

   return "joined "+date[2]+" "+month+" "+date[0];
}



function themeChange(){
    
document.getElementById("whole").style.background="#F2F2F2";
document.getElementById("contentArae").style.background="#ffffff";
document.getElementById("list_parent").style.background="#F2F2F2";
console.log(document.getElementById("searchDiv"));
// document.getElementById("searchDiv").style.background="#F2F2F2";

}

function errPrint(){
    let parent=document.getElementById("contentArae")
    parent.innerHTML=`<div class="err__div">
    <h1 class="err__h1">User Not Found<h1>
    </div>`
}