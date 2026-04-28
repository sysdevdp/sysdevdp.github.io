import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="#" className="home__social-link" >
        <i class="fa-solid fa-home"></i></a>

        <a href="https://www.x.com" className="home__social-link" target="_blank">
    <i class="fa-brands fa-x"></i>
</a>

        <a href="https://www.github.com/dkkumar77" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i></a>

        <a href="https://www.linkedin.com/in/dkkumar77" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i></a>
        <a href="/repo.html" className="home__social-link" target="_blank">
    <i class="fa-solid fa-terminal"></i>
    </a>


    </div>
  )
}

export default HeaderSocials
