// ---------------------------------------

const slickPre = document.getElementsByClassName(" fa-chevron-left");
const slickNext = document.getElementsByClassName(" fa-chevron-right");
const findSlickPrev = document.getElementsByClassName(" find-slick-left");
const findSlickNext = document.getElementsByClassName(" find-slick-right");

const pre1 = document.getElementsByClassName(" slick-prev");
const next1 = document.getElementsByClassName(" slick-next");

// ---------------------------------------------------

// const ss = document.querySelector.bind(document);
var sliderFind = document.getElementsByClassName("slides");
const api = "http://127.0.0.1:8000/api/ts/tour";

let htmls = "";
function getTours() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tours = data;
      htmls = tours.map((tour) => {
        return `
          <div class="find-container" data-id="${tour.id}" style="cursor: pointer">
                <div class="find-container-top">
                    <img src="../IMAGES/slides/slide-5.png" alt="">
                </div>
                <div class="find-container-bottom">
                    <h4 class="find-bottom-name">${tour.name}</h4>
                    <div class="find-bottom-address">
                        <div class="find-bottom-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p>${tour.address}</p>
                    </div>
                    <div class="find-bottom-time">
                        <div class="find-bottom-icon">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <p>${tour.from_date} - ${tour.to_date}</p>
                    </div>
                </div>
            </div>
      `;
      });
      sliderFind[0].innerHTML = htmls.join("");
      $(".slides").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
      });
      findSlickPrev[0].onclick = () => {
        pre1[0].click();
      };
      findSlickNext[0].onclick = () => {
        next1[0].click();
      };

      const findContainers = document.querySelectorAll(".find-container");
      findContainers.forEach((item) => {
        item.onclick = () => {
          const id = item.dataset.id;
          localStorage.setItem("page-detail", id);
          location.href = "detailFind.html";
        };
      });
    });
}

getTours();
