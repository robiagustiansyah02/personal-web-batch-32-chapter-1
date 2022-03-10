let blogs = [];
let dummy_data = {
  title: 'Penyebaran Covid-19 di Indonesia',
  content: 'Hingga 24 November  2021, Pemerintah Republik Indonesia telah melaporkan  4.254.443 orang terkonfirmasi positif COVID-19 dan ada 143.766 kematian (CFR:  3,4%) terkait COVID-19 yang dilaporkan dan 4.102.700 pasien telah sembuh dari penyakit tersebut,Kementerian Kesehatan Republik Indonesia telah mengambil tindakan untuk meningkatkan upaya penanggulangan COVID-19 di Indonesia, mengacu pada pedoman sementara WHO tentang novel Coronavirus.',
  image: 'assets/covid19.jpg',
  author: 'Robi Agustiansyah',
  postedAt: new Date()
};

// DUMMY DATA
for(let i = 0;i < 3; i++){
  blogs.push(dummy_data)
}

renderBlog();

function addBlog() {

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image').files[0];

  image = URL.createObjectURL(image)

  let blog = {
    title: title,
    content: content,
    image: image,
    author: 'Robi Agustiansyah',
    postedAt: new Date()
  }


  blogs.push(blog)

  renderBlog()
}


function renderBlog() {

  let blogContainer = document.getElementById('contents')
  blogContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
        
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
          </div>
          <div style="text-align: left; color: grey; font-size: small;">
            ${getDistanceTime(blogs[i].postedAt)}
          </div>
          <p>${blogs[i].content}</p>
          
          <div class="btn-group">
            <a href="#" class="btn-edit">Edit Project</a>
            <a href="#" class="btn-post">Delete Project</a>
          </div>
        </div>
      </div>`
  }
}

function getFullTime(time) {
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

  if (dayDistance != 0) {
    return dayDistance + ' day ago'
  } else {
    let hourDistance = Math.floor(distance / (60 * 60 * 1000))

    if (hourDistance != 0) {
      return hourDistance + ' hours ago'
    } else {
      let minuteDistance = Math.floor(distance / (60 * 1000))

      if (minuteDistance != 0) {
        return minuteDistance + ' minutes ago'
      } else {
        let secondsDistance = Math.floor(distance / 1000)

        return secondsDistance + ' second ago'
      }
    }
  }
}

$(document).ready(function(){
   $("#fromDate").datepicker({
       format: 'dd-mm-yyyy',
       autoclose: true,
   }).on('changeDate', function (selected) {
       var minDate = new Date(selected.date.valueOf());
       $('#toDate').datepicker('setStartDate', minDate);
   });

   $("#toDate").datepicker({
       format: 'dd-mm-yyyy',
       autoclose: true,
   }).on('changeDate', function (selected) {
           var minDate = new Date(selected.date.valueOf());
           $('#fromDate').datepicker('setEndDate', minDate);
   });
});

// setInterval(function(){
//   renderBlog()
// }, 1000)