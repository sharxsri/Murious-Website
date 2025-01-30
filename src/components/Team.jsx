import React from 'react';
import TeamCard from '../components/TeamCard';
import '/css/Team.css';
import { mentors, teamleads, contributors } from '../constants/team.json';
import Section from './Section';
// import Animesh from "../images/Animesh.webp";
// import Mayank from "../images/Mayank.jpg";

const mentors = [
    {
        "id": 1,
        "name": "Srijan Saraswat ",
        "designation": "Mentor",
        "imageUrl": "./coordis/Srijan.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/srijan-saraswat/",
        "instagramUrl": ""
    },
    {
        "id": 2,
        "name": "Yash Khatri ",
        "designation": "Mentor",
        "imageUrl": "./coordis/Yash.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/yash--khatri/",
        "instagramUrl": "https://www.instagram.com/yashkhatri99/"
    },
    {
        "id": 3,
        "name": "Akshit Mahajan",
        "designation": "Mentor",
        "imageUrl": "./coordis/Akshit.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/akshit0mahajan/",
        "instagramUrl": "https://www.instagram.com/_akshitmahajan/"

    },
    {
        "id": 4,
        "name": "Ayush Rawat",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFEovmErAbKlw/profile-displayphoto-shrink_200_200/0/1688559988133?e=1710979200&v=beta&t=iYN8jD3jmIon91DeCnAvWjp91hqrVWBT1tiVUFJJWPA",
        "linkedinUrl": "https://www.linkedin.com/in/ayush-rawat-519b12255/",
        "instagramUrl": "https://www.instagram.com/ayusshh_rawat/"
    }
];

const teamleads = [
    {
        "id": 1,
        "name": "Nivi Jha",
        "designation": "Mentor",

        "imageUrl": "./team leads/nivi jha.webp",
        "linkedinUrl": "https://www.linkedin.com/in/nivi-jha/",
        "instagramUrl": "https://www.instagram.com/niv__._/"
    },
    {
        "id": 2,
        "name": "Aarya Gupta",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFt4sjXev7FDA/profile-displayphoto-shrink_200_200/0/1668584452288?e=1710979200&v=beta&t=uqJrnFogiTutstTwGaqnawUK9VhwmKFTqtZ2TVLQmlA",
        "linkedinUrl": "https://www.linkedin.com/in/aarya--gupta/",
        "instagramUrl": "https://www.instagram.com/aaryaa_.0/"
    },
    {
        "id": 3,
        "name": "Raavi Aggarwal",
        "designation": "Mentor",
        "imageUrl": "./team leads/raavi aggarwal.webp",
        "linkedinUrl": "https://www.linkedin.com/in/raavi-aggarwal-766ab32a4/",
        "instagramUrl": "https://www.instagram.com/raavi_aggarwal28/"
    },
    {
        "id": 4,
        "name": "Manas Bajpai",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFEovmErAbKlw/profile-displayphoto-shrink_200_200/0/1688559988133?e=1710979200&v=beta&t=iYN8jD3jmIon91DeCnAvWjp91hqrVWBT1tiVUFJJWPA",
        "linkedinUrl": "https://www.linkedin.com/in/manas-bajpai/",
        "instagramUrl": "https://www.instagram.com/manas.bajpai_1804/"
    }
];

const contributors = [
    {
        "id": 1,
        "name": "Manik Kapoor",
        "designation": "Web Developer",
        "imageUrl": Animesh,
        "linkedinUrl": "https://www.linkedin.com/in/manik2375/",
        "instagramUrl": "https://www.instagram.com/manik_2375/"
    },
    {
        "id": 2,
        "name": "Rushil Sharma",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQE6lsn231fIBQ/profile-displayphoto-shrink_400_400/0/1692437738344?e=1715212800&v=beta&t=eGgHbk8pLDxRXUKHyD252CR6v5DGtbd4x9-Kld1B8ig",
        "linkedinUrl": "https://www.linkedin.com/in/codewithrushil/",
        "instagramUrl": "https://www.instagram.com/rushil.in/"
    },
    {
        "id": 3,
        "name": "Aarushi Kansal",
        "designation": "Web Developer",
        "imageUrl": "src/Screenshot 2025-01-29 234432.webp",
        "linkedinUrl": "https://www.linkedin.com/in/yash-khatri-29b956251/",
        "instagramUrl": "https://www.instagram.com/yashkhatri99/"
    },
    {
        "id": 4,
        "name": "Darshita Shukla",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQF1BuULR9V5mg/profile-displayphoto-shrink_200_200/0/1701590576619?e=1710374400&v=beta&t=hSxjiXydy4lWsehTaAU2PO-jh2igNLNlV1_L600aixc",
        "linkedinUrl": "https://www.linkedin.com/in/darshita-shukla-743510323/",
        "instagramUrl": "https://www.instagram.com/darshita_2006/"
    },
    {
        "id": 5,
        "name": "Sharanya ",
        "designation": "Web Developer",
        "imageUrl": "./src/assets/contributors/sharanya.photo.jpg",
        "linkedinUrl": "https://www.linkedin.com/in/sharanya-srivastava-9a1669313/",
        "instagramUrl": "https://www.linkedin.com/in/sharanya-srivastava-9a1669313/"
    },
    {
        "id": 6,
        "name": "Ananya",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D5603AQGpyEtKocU5fQ/profile-displayphoto-shrink_400_400/0/1705302782813?e=1710979200&v=beta&t=DhxdTHoClPvVzb8e6BZZKK3CWdAmrJub-7ieW5ei-8o",
        "linkedinUrl": "https://www.linkedin.com/in/ananya-soam-02b79231a/",
        "instagramUrl": "https://www.instagram.com/ananya_7467/"
    },
    {
        "id": 7,
        "name": "Shoaib Malik",
        "designation": "Web Developer",
        "imageUrl": "src/components/Shoaib .jpg",
        "linkedinUrl": "https://www.linkedin.com/in/shoaib-malik-7583682ba/",
        "instagramUrl": "https://www.instagram.com/shoaibmal_.k/"
    },
    {
        "id": 8,
        "name": "Jeetansh",
        "designation": "Web & App Dev",
        "imageUrl": "src/Screenshot 2025-01-29 235322.webp",
        "linkedinUrl": "https://www.linkedin.com/in/shivansh-mahajan-a04301252/",
        "instagramUrl": "https://www.instagram.com/shivansh2_55/"
    },
    {
        "id": 9,
        "name": "Kundan Krishna",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D5603AQEkev3uuKqTvQ/profile-displayphoto-shrink_200_200/0/1705420052014?e=1710979200&v=beta&t=GICuwAHHKssu2eFj3-YjnJBXPcnXoFV-OajyPiSjw7A",
        "linkedinUrl": "https://www.linkedin.com/in/kundan-krishna-991b88308/",
        "instagramUrl": "https://www.instagram.com/kundan._.krishna/"
    },
    {
        "id": 10,
        "name": "Hardik Mittal",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D4E03AQFdKE9C5IhPjg/profile-displayphoto-shrink_400_400/0/1698336771661?e=1711584000&v=beta&t=WGYpPYKK9wrzTI5YECEIE4fZZhd3-Vwvmq7wmtuONhI",
        "linkedinUrl": "https://www.linkedin.com/in/hardik-mittal-264ba3315/",
        "instagramUrl": "https://www.instagram.com/itz_hardikkk_/"
    },
    {
        "id": 11,
        "name": "Aditya Sharma",
        "designation": "Web & App Dev",
        "imageUrl": "https://media.licdn.com/dms/image/D5603AQHkJkp5SNR4KA/profile-displayphoto-shrink_800_800/0/1704624943244?e=1710374400&v=beta&t=hIQlxgXfoX0pTUur5b-uIaj-8IVKYaQiMtZaj4Epuo0",
        "linkedinUrl": "https://www.linkedin.com/in/aditya-sharma-4901952a8",
        "instagramUrl": "https://www.instagram.com/hey.ady_/"
    },
    {
        "id": 12,
        "name": "Arpit Sharma",
        "designation": "Web & App Dev",
        "imageUrl": "https://media.licdn.com/dms/image/D4E03AQE4IwSAiENJoA/profile-displayphoto-shrink_800_800/0/1704906819025?e=1710374400&v=beta&t=0zteZGeRU4p77OSdxpB0MuJNlYSV-Bf_LwHRc3y6UH4",
        "linkedinUrl": "https://www.linkedin.com/in/arpit-sharma-b1a2892a9/",
        "instagramUrl": "https://www.instagram.com/arpitsharma9960/"
    }
];

const Team = () => {
    return (
        <Section>
            <Heading
          tag="Lorem-ipsum"
          title="Team"
        />
        <div className="team-container">
            <div className="team-section">
                <h1>Mentors</h1>
                <div className="team-grid">
                    {mentors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <br />

            <div className="team-section">
                <h1>Team Leads</h1>
                <div className="team-grid">
                    {teamleads.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <div className="team-section">
                <h1>Contributors</h1>
                <div className="team-grid">
                    {contributors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
        </Section>
    );
};

export default Team;
