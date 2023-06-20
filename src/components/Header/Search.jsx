import React from 'react';
import img1 from './titile1.png';
const Search = ()=>{
    window.addEventListener("scroll",function(){
        const search = document.querySelector(".search")
        search.classList.toggle("active",window.scrollY>100)
    });
    return(
        <div>
            <section className='search'>
                    <span className='logo'><img src={img1}/></span>
                    <div class="box">
                        <input type="text" placeholder='Search for product...'/>
                        <a href='#'>
                            <i class="fas fa-search"></i>
                        </a>
                    </div>
                    <a href="https://en.wikipedia.org/wiki/FirstCry" className="contact">Contact Us</a>
            </section>
        </div>
    )
}
export default Search;