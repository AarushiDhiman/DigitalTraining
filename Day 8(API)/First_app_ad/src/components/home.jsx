function Home() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://th.bing.com/th/id/R.6f95852f2c5992feb77722c02445ef83?rik=qh6LiLIhNJ8Fzw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fZ7i3ZDc.jpg&ehk=x9aAD0Tyk11oLKNGvPsSXqWOJyBl5ycynz5CC8qsFWQ%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="back1" height ='350'/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/736x/e3/68/a1/e368a1d55d20fbb93521a536e41864a8.jpg" 
                        class="d-block w-100" alt="back2" height ='350'/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.jfk40oT7z3aY6aGDP2sGEAHaEK?rs=1&pid=ImgDetMain" 
                        class="d-block w-100" alt="back3" height = '350'/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;