let project = []

function addproject() {

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];

    image = URL.createObjectURL(image)

    let project = {
        title: title,
        content: content,
        image: image,
        author: 'Robi Agustiansyah',
        postedAt: new Date()
    }


    project.push(project)

    renderBlog()
}


function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = `<div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <a href="#" class="btn-edit">Edit Post</a>
        <a href="#" class="btn-post">Delete Blog</a>
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
      <div style="text-align: right; color: grey;">
        1 hour ago
      </div>
    </div>
  </div>`

    for(let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <a href="#" class="btn-edit">Edit Post</a>
            <a href="#" class="btn-post">Delete Blog</a>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
          </div>
          <p>${blogs[i].content}</p>
          <div style="text-align: right; color: grey;">
            ${getDistanceTime(blogs[i].postedAt)}
          </div>
        </div>
      </div>`
    }
}

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


function getFullTime(time) {
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hour = time.getHours()
  let minute = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

  return fullTime
}


function getDistanceTime(time) {
  let timeNow = new Date()
  let timeBlog = new Date(time)

  let distance = timeNow - timeBlog // miliseconds

  let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))

  if(dayDistance != 0){
    return dayDistance + ' day ago'
  }else {
    let hourDistance = Math.floor(distance / (60 * 60 * 1000))
    
    if(hourDistance != 0) {
      return hourDistance + ' hours ago'
    }else {
      let minuteDistance = Math.floor(distance / (60 * 1000))

      if(minuteDistance != 0){
        return minuteDistance + ' minutes ago'
      } else {
        let secondsDistance = Math.floor(distance / 1000)

        return secondsDistance + ' second ago'
      }
    }
  }
}

setInterval(function(){
  renderBlog()
}, 1000)