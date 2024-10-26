// Food Gallery
const healthyFoods = [
    {
        foodName: "Protein and Fruit Smoothie",
        imageUrl: "images/smoothie.jpg"
    },
    {
        foodName: "Quinoa Salad with Vegetables and Chickpeas",
        imageUrl: "images/quinoa-salad.jpg"
    },
    {
        foodName: "Whole-Grain Toast with Egg, Avocado, and Spinach",
        imageUrl: "images/egg-toast.jpg"
    }
];

let currentIndex = 0;

// Elements
const foodImage = document.getElementById("food-image");
const foodCaption = document.getElementById("food-caption");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function displayImage(index) {
    const food = healthyFoods[index];
    foodImage.src = food.imageUrl;
    foodImage.alt = food.foodName;
    foodCaption.textContent = food.foodName;
}

displayImage(currentIndex);

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + healthyFoods.length) % healthyFoods.length;
    displayImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 + healthyFoods.length) % healthyFoods.length;
    displayImage(currentIndex);
});

// Skills Gallery

const calisthenicsSkills = [
    {
        skillName: "Front Lever",
        imageUrl: "images/front-lever.jpg",
        difficultLevel: 7
    },
    {
        skillName: "Human Flag",
        imageUrl: "images/human-flag.jpg",
        difficultLevel: 4
    },
    {
        skillName: "Full Planche",
        imageUrl: "images/full-planche.jpg",
        difficultLevel: 9
    },
    {
        skillName: "Handstand",
        imageUrl: "images/handstand.jpg",
        difficultLevel: 3
    },
    {
        skillName: "Back Lever",
        imageUrl: "images/back-lever.jpg",
        difficultLevel: 5
    },
    {
        skillName: "One-arm Pull-up",
        imageUrl: "images/one-arm-pull-up.jpg",
        difficultLevel: 8
    }
];

// Call create cards
createSkillsCard(calisthenicsSkills);

// Create cards
function createSkillsCard(skills) {
    
    const container = document.getElementById("gallery-skills");
    container.innerHTML = "";

    skills.forEach(skill => {
        let skillCard = document.createElement("figure");
        skillCard.setAttribute("class", "skill-card")

        let image = document.createElement("img");
        image.setAttribute("src", skill.imageUrl);
        image.setAttribute("class", "image-skill");
        image.setAttribute("alt", skill.skillName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "350");
        image.setAttribute("height", "350");

        let caption = document.createElement("figcaption");
        caption.textContent = skill.skillName;

        container.appendChild(skillCard);
        skillCard.appendChild(image);
        skillCard.appendChild(caption);
    });
};

// Select the <select> element
const sortSelect = document.getElementById("sort-select");

// Add change event to the <select> element
sortSelect.addEventListener("change", () => {
    let sortedSkills;

    if (sortSelect.value == "low-to-high") {
        sortedSkills = calisthenicsSkills.slice().sort((a, b) => a.difficultLevel - b.difficultLevel);
    } else if (sortSelect.value === "high-to-low") {
        sortedSkills = calisthenicsSkills.slice().sort((a, b) => b.difficultLevel - a.difficultLevel);
    }

    createSkillsCard(sortedSkills);
});