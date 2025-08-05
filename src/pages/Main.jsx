import React, { useRef, useEffect, useState } from 'react'
import bunny from '../assets/images/bunny.png'
import beach from '../assets/images/beach.png'
import hbday1 from '../assets/images/hbday1.jpg'
import ezhik from '../assets/images/ezhik.jpg'
import pickmeboy from '../assets/images/pickmeboy.jpg'
import cutebunny from '../assets/images/cutebunny.jpeg'
import musicat from '../assets/images/musicat.jpeg'
import cathb from '../assets/images/cathb.jpeg'
import catsdrink from '../assets/images/catsdrink.jpeg'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpeg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpeg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpeg'
import img11 from '../assets/images/img11.jpeg'
import img13 from '../assets/images/img13.jpg'
import img14 from '../assets/images/img14.jpg'
import img15 from '../assets/images/img15.jpeg'
import img16 from '../assets/images/img16.jpeg'
import img17 from '../assets/images/img17.jpeg'
import img18 from '../assets/images/img18.jpeg'
import img19 from '../assets/images/img19.jpeg'
import img20 from '../assets/images/img20.jpeg'
import img21 from '../assets/images/img21.jpeg'
import img22 from '../assets/images/img22.jpg'
import img23 from '../assets/images/img23.jpg'
import img24 from '../assets/images/img24.jpg'
import img25 from '../assets/images/img25.jpg'
import img26 from '../assets/images/img26.jpeg'
import img29 from '../assets/images/img29.jpeg'
import img30 from '../assets/images/img30.jpg'
import arrowImage from '../assets/images/arrow.png'
import ticket from '../assets/images/ticket.png'
import B from '../assets/images/B.png'
import D from '../assets/images/D.png'
import A from '../assets/images/A.png'
import Y from '../assets/images/Y.png'
import ticket_mobile from '../assets/images/ticket_mobile.png'
import ScrollableRectangle from '../components/ScrollableRectangle'

const Main = () => {
  const leftDoorRef = useRef(null)
  const rightDoorRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const rectangle1Images = [
    img1,
    img2,
    img6,
    img11,
    img3,
    img7,
    img8,
    img10,
    img9,
    img15,
  ]
  const rectangle2Images = [
    img13,
    img4,
    img5,
    img19,
    img17,
    img30,
    img20,
    img21,
    img22,
  ]
  const rectangle3Images = [
    img24,
    img23,
    img16,
    img18,
    img14,
    img26,
    img29,
    img25,
  ]
  const scrollRef = useRef(null)

  const handleScroll = event => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const leftDoor = leftDoorRef.current
      const rightDoor = rightDoorRef.current
      const windowHeight = window.innerHeight

      if (leftDoor) {
        const leftRect = leftDoor.getBoundingClientRect()
        if (leftRect.top < windowHeight && leftRect.bottom > 0) {
          setIsLeftDoorOpen(true)
        }
      }

      if (rightDoor) {
        const rightRect = rightDoor.getBoundingClientRect()
        if (rightRect.top < windowHeight && rightRect.bottom > 0) {
          setIsRightDoorOpen(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="root">
      <div>
        <div className="grey-rectangle">
          <div className="black-strip top-strip"></div>
          <p className="grey-rectangle-text">6 августа</p>
          <div className="photos-container">
            <img src={bunny} alt="Photo 1" />
            <img src={beach} alt="Photo 2" />
            <img src={bunny} alt="Photo 3" />
            <img src={beach} alt="Photo 4" />
            <img src={B} alt="Photo 6" />
            <img src={D} alt="Photo 7" />
            <img src={A} alt="Photo 8" />
            <img src={Y} alt="Photo 9" />
            <img src={bunny} alt="Photo 1" />
            <img src={beach} alt="Photo 2" />
            <img src={bunny} alt="Photo 3" />
            <img src={beach} alt="Photo 4" />
          </div>
          <p className="grey-rectangle-text">summertime</p>
          <div className="black-strip bottom-strip"></div>
        </div>
      </div>
      <p className="small-text">
        {' '}
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday
      </p>
      <div className="info">
        <div className="info-value">
          <div className="info-value-first">
            <img
              src={catsdrink}
              alt="Image 021"
              className="info-image"
              style={{ width: '300px' }}
            />
            <p className="info-text">
              Это особенный день, когда собираются друзья,
              <br />
              шары взлетают в небо, а музыка играет для тебя.
              <br />
              Приготовься к веселью и незабываемым моментам.
            </p>
          </div>
          <div className="info-value-second">
            <img
              src={cathb}
              alt="Image 022"
              className="info-image"
              style={{ width: '300px' }}
            />
            <p className="info-value-second-text">
              Загадывай желания и они все обязательно сбудутся!!!
            </p>
          </div>
        </div>
      </div>
      <p className="small-text">
        {' '}
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday
      </p>
      <div className="info">
        <div className="info-blocks-container">
          <div className="info-block-1">
            <img src={hbday1} alt={''} className="info-block-image" />
            <p className="info-block-text"></p>
          </div>
          <div className="info-block-2">
            <img src={ezhik} alt={''} className="info-block-image" />
            <p className="info-block-text">
              Улыбнись и загадай желание — сегодня всё можно!
            </p>
          </div>
          <div className="info-block-3">
            <img src={cutebunny} alt={''} className="info-block-image" />
            <p className="info-block-text">
              Желаю больше ярких эмоций, новых друзей и крутых воспоминаний в
              твою коллекцию
            </p>
          </div>
          <div className="info-block-4">
            <img src={musicat} alt={''} className="info-block-image" />
            <p className="info-block-text">
              Don’t let anyone ever dull your sparkle
            </p>
          </div>
          <div className="info-block-5">
            <img src={pickmeboy} alt={''} className="info-block-image" />
          </div>
        </div>
      </div>
      <p className="small-text">
        {' '}
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday
      </p>

      <ScrollableRectangle
        images={rectangle1Images}
        width="100%"
        height="300px"
        skew={1}
        widthP="250px"
        heightP="170px"
      />
      <ScrollableRectangle
        images={rectangle2Images}
        width="100%"
        height="450px"
        skew={0}
        widthP="400px"
        heightP="280px"
      />
      <ScrollableRectangle
        images={rectangle3Images}
        width="100%"
        height="300px"
        skew={-1}
        widthP="250px"
        heightP="170px"
      />
      <p className="small-text">
        {' '}
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday · happy birthday · happy birthday · happy birthday ·
        happy birthday
      </p>
      <div
        className="info"
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div className="info-ticket">
          <img
            src={window.innerWidth <= 768 ? ticket_mobile : ticket}
            alt="ticket"
          />
        </div>
      </div>
      <div>
        <div className="scroll-to-top">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <img
              src={arrowImage}
              alt="Scroll to top"
              onClick={scrollToTop}
              style={{ cursor: 'pointer', width: '75px' }}
            />
            <p
              onClick={scrollToTop}
              style={{ cursor: 'pointer', textAlign: 'center' }}>
              Наверх
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
