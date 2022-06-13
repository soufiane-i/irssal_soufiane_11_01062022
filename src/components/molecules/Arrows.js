import "./Arrows.css"

export default function Arrows() {
    return (
      <>
        <div className="arrows">
            <img className="arrow leftArrow" src={"/assets/arrow.png"} onClick={prevImg}/>
            <img className="arrow rightArrow" src={"/assets/arrow.png"} onClick={nextImg}/>
        </div>
      </>
    )
}

function nextImg() {
  const imgs = document.querySelectorAll(".photo")
  const imgOn = document.querySelector(".on")
  const imgNext = imgOn.nextElementSibling

  if (imgNext == null) {
    imgs[0].classList.add("on")
    imgs[0].classList.remove("off")
  } else {
    imgNext.classList.add("on")
    imgNext.classList.remove("off")
  }
  
  imgOn.classList.add("off")
  imgOn.classList.remove("on")
}

function prevImg() {
  const imgs = document.querySelectorAll(".photo")
  const imgOn = document.querySelector(".on")
  const imgNext = imgOn.previousElementSibling
  
  if (imgNext == null) {
    imgs[imgs.length - 1].classList.add("on")
    imgs[0].classList.remove("off")
  } else {
    imgNext.classList.add("on")
    imgNext.classList.remove("off")
  }
  
  imgOn.classList.add("off")
  imgOn.classList.remove("on")
}