import React from 'react'

const Home = () => {
    return (
        <section className='main-container'>
            <div className="inner-container">
                <div className="left-container">
                <h2>Welcome back!</h2>
                <p>To keep connected with us please <br /> login with your personal info</p>
                <button>sign in</button>
                </div>
                <div className="right-container">
                    <h2>Create An Account</h2>
                    <div className='right-icons'>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-google-plus-g"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                    <p>or use your email for registration</p>
                <div className='form-input'>
                    <i class="far fa-user"></i>
                    <input placeholder='Name' />
                </div>
                <div className='form-input'>
                    <i class="far fa-envelope"></i>
                    <input placeholder='Email' />
                </div>
                <div className='form-input'>
                    <i class="fas fa-lock"></i>
                    <input placeholder='Password' />
                </div>
                <button>sign up</button>
                </div>
            </div>  
        </section>
    )
}

export default Home
