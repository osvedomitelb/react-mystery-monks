import headerLogo from '../assets/header_logo.png';
import headerBurgerMenu from '../assets/menu_icon.png'
import sectionOneImg from '../assets/section_one_background.png';


/**************SectionTwoImages****************/
import sectionTwoOne from '../assets/sectionTwo/sectionTwoOne.png';
import sectionTwoTwo from '../assets/sectionTwo/sectionTwoTwo.png';
import sectionTwoThree from '../assets/sectionTwo/sectionTwoThree.png';
import sectionTwoFour from '../assets/sectionTwo/sectionTwoFour.png';
import sectionTwoFive from '../assets/sectionTwo/sectionTwoFive.png';
import sectionTwoSix from '../assets/sectionTwo/sectionTwoSix.png';
import sectionTwoSeven from '../assets/sectionTwo/sectionTwoSeven.png';
import sectionTwoEight from '../assets/sectionTwo/sectionTwoEight.png';
import sectionTwoNine from '../assets/sectionTwo/sectionTwoNine.png';
import sectionTwoTen from '../assets/sectionTwo/sectionTwoTen.png';


/**************SectionThreeImages****************/
import sectionThreeOne from '../assets/sectionThree/sectionThreeOne.png';
import sectionThreeTwo from '../assets/sectionThree/sectionThreeTwo.png';
import sectionThreeThree from '../assets/sectionThree/sectionThreeThree.png';
import sectionThreeFour from '../assets/sectionThree/sectionThreeFour.png';
import sectionThreeFive from '../assets/sectionThree/sectionThreeFive.png';
import sectionThreeSix from '../assets/sectionThree/sectionThreeSix.png';
import sectionThreeSeven from '../assets/sectionThree/sectionThreeSeven.png';
import sectionThreeEight from '../assets/sectionThree/sectionThreeEight.png';


/**************SectionFiveImages****************/

import sectionFiveOne from '../assets/sectionFive/sectionFiveIconOne.png';
import sectionFiveTwo from '../assets/sectionFive/sectionFiveIconTwo.png';
import sectionFiveThree from '../assets/sectionFive/sectionFiveIconThree.png';
import sectionFiveFour from '../assets/sectionFive/sectionFiveIconFour.png';


/**************SectionSixVideos****************/
import animatedExplainerVideo from '../assets/sectionSix/animatedExplainerVideo.mp4';
import productExplainerVideo from '../assets/sectionSix/productExplainerVideo.mp4';
import whiteBoardExplainerVideo from '../assets/sectionSix/whiteBoadExplainerVideo.mp4';
import liveShoot from '../assets/sectionSix/liveShoot.mp4';

/**************FooterImages****************/
import youtube from '../assets/footer/youtube.jpg';
import facebook from '../assets/footer/facebook.jpg';
import instagram from '../assets/footer/instagram.jpg';

const data = {
    header: {
        links: [
            {id: 1, link: "#", name: "Home"},
            {id: 2, link: "#", name: "Our Client"},
            {id: 3, link: "#", name: "Our Portfolio"},
            {id: 4, link: "#", name: "About us"},
            {id: 5, link: "#", name: "Why us"},
            {id: 6, link: "#", name: "Types of videos"},
            {id: 7, link: "#", name: "Reviews"},
        ],
        logo: headerLogo,
        logo2: headerBurgerMenu
    },
    section1: {
        img: sectionOneImg,
    },
    section2: {
        images: [
            {id: 1, img: sectionTwoOne},
            {id: 2, img: sectionTwoTwo},
            {id: 3, img: sectionTwoThree},
            {id: 4, img: sectionTwoFour},
            {id: 5, img: sectionTwoFive},
            {id: 6, img: sectionTwoSix},
            {id: 7, img: sectionTwoSeven},
            {id: 8, img: sectionTwoEight},
            {id: 9, img: sectionTwoNine},
            {id: 10, img: sectionTwoTen},
        ]
    },
    section3: {
        links: [
            {id: 1, link: "#", name: "All"},
            {id: 2, link: "#", name: "Finance"},
            {id: 3, link: "#", name: "Technology"},
            {id: 4, link: "#", name: "Education"},
            {id: 5, link: "#", name: "Manufacturing"},
            {id: 6, link: "#", name: "Retail"},
        ],
        images: [
            {id: 1, img: sectionThreeOne},
            {id: 2, img: sectionThreeTwo},
            {id: 3, img: sectionThreeThree},
            {id: 4, img: sectionThreeFour},
            {id: 5, img: sectionThreeFive},
            {id: 6, img: sectionThreeSix},
            {id: 7, img: sectionThreeSeven},
            {id: 8, img: sectionThreeEight},
        ]
    },
    section4: {
        elements: [
            {
                id: 1,
                number: "2000+",
                title: "Clients Served",
                description: "We’ve been doing this for years and will be doing it for many more! Our client count has touched the 2k bar and continues to grow with uninterrupted momentum!"
            },
            {
                id: 2,
                number: "17+",
                title: "Countries served",
                description: "Not one, not two….we’ve gone global exorbitantly! We’ve served more than 7 countries and are excited to add new names to our list!"
            },
            {
                id: 3,
                number: "10+",
                title: "Video styles Mastered",
                description: "Yes! We’re the Jack of all trades and masters of all as well! With over 10 video styles mastered, we can guarantee perfection, elegance and sharpness in our video production services!"
            },
            {
                id: 4,
                number: "98%",
                title: "Satisfaction Ratio",
                description: "Don’t trust us? Well...trust the ones who we’ve worked for. A whooping 98% satisfaction ratio says it all!"
            },
        ]
    },
    section5: {
        elements: [
            {
                id: 1,
                img: sectionFiveOne,
                title: "Error Free Delivery",
                description: "Our Creative Directors ensure thorough quality checks before any deliverable (script, voice over, renders, animation, etc.) goes out to you."
            },
            {
                id: 2,
                img: sectionFiveTwo,
                title: "All Inclusive Packages",
                description: "Our packages include an end to end service which means a client only needs to tell us about their product/service and our team takes care of the rest."
            },
            {
                id: 3,
                img: sectionFiveThree,
                title: "Creative Direction",
                description: "Every single project is managed by a highly skilled and experienced Creative Director to ensure a great concept, quality and timely delivery."
            },
            {
                id: 4,
                img: sectionFiveFour,
                title: "On Time Delivery",
                description: "We use advanced project planning software to ensure that you get your video delivered in the time committed by us."
            },
        ],
    },
    section6: {
        elements: [
            {
                id: 1,
                title: "Animated Explainer Video",
                description: "It’s about time that we throw out the old ways of communicating with our prospects. Be it a document, an image or a presentation….there’s always something amiss. Catch up with the current era! Animated explainer videos not only get your brand message across, but also give the extra little push to convert a maybe to a definite yes! Be it a 2D or a 3D video produced by our explainer video company, the ensemble of attractive visuals, a breathtaking voice over with a mind blowing concept is unbeatable!",
                link: animatedExplainerVideo,
            },
            {
                id: 1,
                title: "Product Explainer Video",
                description: "What influences people to buy one product but not the other? Is it its composition, its features...or maybe its appearance? We as a explainer video company think how you market your product is what determines how well it sells. And a 2D or 3D product explainer video showcasing your product’s features, appearance and composition can build your sales from level zero to infinity. Don’t just advertise for the sake of doing it….be a pro with a unique product explainer video!",
                link: productExplainerVideo,
            },
            {
                id: 1,
                title: "Whiteboard Explainer Video",
                description: "Keep it simple. Whiteboard explainer videos give your audience a ride back through Nostalgia lane. Remember how your teacher could solve a complex Physics equation on the board and make it look so simple? Well a whiteboard explainer video does the same for your business. Get your brand message across in the most understandable way possible. And enjoy the topping of mouthwatering swiftness and eye-catching visuals! Your next pit stop should definitely be our explainer video company!",
                link: whiteBoardExplainerVideo,
            },
            {
                id: 1,
                title: "Live Shoot",
                description: "Impressions are important! And nothing can help you introduce your brand to the world better than a world-class corporate video! Pump up the hype, poke at the curiosity and generate a sense of connection within your masses. How you present yourself to the world matters….and a perfectly shot video is a great step to ensure your brand’s success.",
                link: liveShoot,
            }
        ]
    },
    section7: {
        element:
            {
                id: 1,
                title: "Ready to start your video?",
                description: "Let`s talk",
            }
    },
    footer: {
        element1: [
            {
                id: 1,
                title: "Follow us on Social Media",
                link1: "https://www.youtube.com/",
                img1: youtube,
                link2: "https://www.facebook.com/",
                img2: facebook,
                link3: "https://www.instagram.com/",
                img3: instagram,
            },
        ],
        element2: [
            {
                id: 1,
                title: "Contact us",
                email: "sales@mysterymonks.com",
                phone: "+91 9643313012",
            },
        ],


        links: [
            {
                id: 1,
                title: "Company",
                link1: "About us",
                link2: "Our Work",
                link3: "Our Blog",
                link4: "Track Order",
            },
            {
                id: 2,
                title: "Industries",
                link1: "E-Commerce",
                link2: "Education",
                link3: "Entertainment",
                link4: "Financial Services",
            },
            {
                id: 3,
                title: "Industries",
                link1: "Healthcare",
                link2: "Information Technology",
                link3: "Marketing & Advertising",
                link4: "Travel",
            },
        ]
    }
}


export default data;