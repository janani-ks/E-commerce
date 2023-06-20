import React from 'react';
const Head = ()=>{
    return(
        <section className='head'>
                    <div className='left-row'>
                        <i className='fa fa-phone'></i>
                        <label> +88012 3456 7894</label>
                        <i className='fa fa-envelope'></i>
                        <label> firstcry@gmail.com</label>
                    </div>
                    <div className='right-row'>
                        <i className='fas fa-user-circle'></i>
                        <label>My Account</label>
                        <i className='fas fa-power-off'></i>
                        <label>Login</label>
                        <label className='theme'>Theme FAQ's</label>
                    </div>
            </section>
    )
}
export default Head;