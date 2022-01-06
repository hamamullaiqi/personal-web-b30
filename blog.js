//variable untuk manampung inputan ketika funtion di jalankan
let blogs = []

function addBlog(event) {
    event.preventDefault()

    //variable untuk menampung nilai pada inputan
    let title = document.getElementById('input-blog-title').value 
    let content = document.getElementById('input-blog-content').value

    //untuk menampung file gambar  dan otomatif akan membuat object file list, index dimulai dari 0 kembali
    let image = document.getElementById('input-blog-image').files


    //untuk mengakses gambar menggunakan url
    image = URL.createObjectURL(image[0])
    


    //variable untuk  menampung isi variable dalam object
    let blog = {
        title: title,
        content: content,
        image: image,
        author : "hamamullaiqi",
        postAt : new Date(),
        
    }

    //menambah isi array blogs dengan isi object blog
    blogs.push(blog)
    


    
    
    //memanggil function
    renderBlogs()
    
}

//function untuk membuat data post baru dari inputan menggunakan DOM
function renderBlogs() { 
    let contentContainer = document.getElementById('contents')

    contentContainer.innerHTML = creatNewBlog()

     for ( let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += ` 
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >"${blogs[i].title}"</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
          ${blogs[i].content}
          </p>
          <div class="post-ago">
              <span>${getDistanceTime(blogs[i].postAt)}</span>
            </div>
        </div>
      </div>`
    }

    
    
}

function creatNewBlog (){
  return `<div class="blog-list-item">
  <div class="blog-image">
    <img src="assets/blog-img.png" alt="" />
  </div>
  <div class="blog-content">
    <div class="btn-group">
      <button class="btn-edit">Edit Post</button>
      <button class="btn-post">Post Blog</button>
    </div>
    <h1>
      <a href="blog-detail.html" target="_blank"
        >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
      >
    </h1>
    <div class="detail-blog-content">
      12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
    </div>
    <p>
      Ketimpangan sumber daya manusia (SDM) di sektor digital masih
      menjadi isu yang belum terpecahkan. Berdasarkan penelitian
      ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
      meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Quam, molestiae
      numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
      eligendi debitis?
    </p>
    <div class="post-ago">
      <span>1 minutes ago</span>
    </div>
  </div>
</div>`
}



// let waktu = new Date()



// console.log(waktu.getDate());//tanggal
// console.log(waktu.getMonth());//bulan
// console.log(waktu.getFullYear());//tahun
// console.log(waktu.getHours());//jam
// console.log(waktu.getMinutes());//menit
// console.log(waktu.getSeconds());//detik



//function Fulltime 

let mouth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'november', 'Desember']

function getFullTime (time) {

let date = time.getDate()
let mouthIndex = time.getMonth()
let yaer = time.getFullYear()
let hours = time.getHours()
let minutes = time.getMinutes()


let fullTime = `${date} ${mouth[mouthIndex]} ${yaer} ${hours}:${minutes} WIB `

return fullTime

}


function getDistanceTime(time){

  let timePost = time
  let timeNow = new Date()

  

  let distance = timeNow - timePost 
  

  //convert menjadi hari  => milisecond dalam 1 hari 
  let milisecond = 1000 // dalam 1 detik
  let secondInHouse = 3600 //dalam 1  jam
  let hoursInDay = 23  // jam dalam 1 hari 

  let minutes = 60
  let second = 60
  let distanceDay =  Math.floor((distance) / (milisecond * secondInHouse * hoursInDay))



//variable penampung 
// jam
let distanceHours = Math.floor(distance / (milisecond * minutes * second)) //milisecond*detik*menit
//menit
let distanceMinutes = Math.floor(distance / (milisecond * minutes))
//detik
let distanceSeconds = Math.floor(distance / (milisecond))



  // kondisi untuk menampilkan hari 
  if (distanceDay >= 1) {
    return `${distanceDay} Day ago`
  } else {
    //menampilakn jam
    if  (distanceHours >= 1 ) {
      return`${distanceHours} Hourse ago`
    } else {
      //menampilakan  meenit
      if (distanceMinutes >= 1){
        return`${distanceMinutes} Minutes ago`
      } else {
        //menampilkan detik  
         (distanceSeconds >= 1)
          return` ${distanceSeconds} Second ago`
        }
        
      }
    }
    
  }
  setInterval (() => {
    // console.log("heloo");
    renderBlogs();
  }, 60000)



 




