import img1 from "../images/a_img1.jpg";
import img2 from "../images/a_img2.jpg";
import img3 from "../images/a_img3.jpg";
import img4 from "../images/a_img4.jpg";

export default function About() {
    return (
        <>
            <div className="about-page">
                <div className="about-text">
                    <b>ABOUT US</b>
                    <hr />
                </div>
                <div className="images-container">
                    <img className="a_image1" src={img1} alt="a_img1" />
                    <div className="small-images">
                        <img className="a_image2" src={img2} alt="a_img2" />
                        <img className="a_image3" src={img3} alt="a_img3" />
                        <img className="a_image4" src={img4} alt="a_img4" />
                    </div>
                </div>
                <div className="a_overlay">
                    <p className="about_info">
                        <i>
                            Kirsten, Dominique, and Quian, three friends with a shared passion for coffee and web development, were nearing the end of their web development course. For their final project, they brainstormed ideas that combined their interests.
                            <br /><br />
                            They decided to create StepBIGBREW, an online coffee shop concept. Their goal was to build a website that not only showcased their web development skills but also provided a virtual space for coffee enthusiasts to connect and enjoy their favorite brews.
                            <br /><br />
                            Together, they collaborated on designing the website, ensuring it was user-friendly and visually appealing, handling the coding aspect, making sure all functionalities worked seamlessly, and taking charge of promoting StepBIGBREW on social media platforms.
                            <br /><br />
                            Their project aimed to bring people together over a shared love for coffee, even in the digital realm. With their combined efforts, they successfully launched StepBIGBREW, offering an inviting online space where anyone could experience the joy of a coffee break from the comfort of their own home.
                        </i>
                    </p>
                </div>
            </div>
            <footer className="footer-sbb bg-neutral text-white text-center lg:text-center">
                <p>© 2024 Step BigBrew</p>
            </footer>
        </>
    );
}
