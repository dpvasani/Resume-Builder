dpvasani/Resume-Builder
## Folder Structure

The project directory is organized as follows:

```plaintext
D:\MY PROJECTS\RESUME_BUILDER
│   .gitignore
│   folder_structure
│   package-lock.json
│   package.json
│   README.md
│
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
└── src
    │   App.js
    │   index.css
    │   index.js
    │   Store.js
    │
    ├── Components
    │   │   CheckSelectedId.js
    │   │
    │   ├── BackNextBtn
    │   │   ├── BackNextBtnComponent.css
    │   │   └── BackNextBtnComponent.js
    │   │
    │   ├── BlackScreen
    │   │   ├── BlackScreen.css
    │   │   └── BlackScreen.js
    │   │
    │   ├── DetailFillingSidebar
    │   │   ├── DetailFillingSidebar.js
    │   │   └── DetailsFillingSideBar.css
    │   │
    │   ├── Education
    │   │   ├── EducationComponent.css
    │   │   └── EducationComponent.js
    │   │
    │   ├── Header
    │   │   ├── TemplateHeader.css
    │   │   └── TemplateHeader.js
    │   │
    │   ├── Heading
    │   │   ├── TemplateHeading.css
    │   │   └── TemplateHeading.js
    │   │
    │   ├── Input
    │   │   ├── InputComponent.css
    │   │   └── InputComponent.js
    │   │
    │   ├── KeySkills
    │   │   ├── KeySkillsComponent.css
    │   │   └── KeySkillsComponent.js
    │   │
    │   ├── MainBar
    │   │   ├── Navbar.css
    │   │   └── Navbar.js
    │   │
    │   ├── PersonalInfo
    │   │   ├── PersonalInfoComponent.css
    │   │   └── PersonalInfoComponent.js
    │   │
    │   ├── Preview
    │   │   ├── PreviewComponent.css
    │   │   └── PreviewComponent.js
    │   │
    │   ├── Select
    │   │   ├── SelectComponent.css
    │   │   └── SelectComponent.js
    │   │
    │   ├── TemplateEducation
    │   │   ├── TemplateEducationComponent.css
    │   │   └── TemplateEducationComponent.js
    │   │
    │   ├── TemplateKeySkill
    │   │   ├── TemplateKeySkillComponent.css
    │   │   └── TemplateKeySkillComponent.js
    │   │
    │   ├── TemplateOneExperience
    │   │   ├── TemplateOneExperienceComponent.css
    │   │   └── TemplateOneExperienceComponent.js
    │   │
    │   └── WorkExperience
    │           WorkExperienceComponent.css
    │           WorkExperienceComponent.js
    │
    ├── Pages
    │   │   AboutUs.js
    │   │   DetailsFilling.js
    │   │   Home.js
    │   │   index.js
    │   │   MyResumes.js
    │   │
    │   └── Styles
    │           DetailsFilling.css
    │           Home.css
    │           MyResumes.css
    │
    ├── Redux
    │   ├── Actions
    │   │       actions.js
    │   │
    │   └── Reducers
    │           combinedReducers.js
    │           reducers.js
    │
    └── Utils
        │   inputChecks.js
        │
        ├── Data
        │   ├── data.js
        │   └── templates.js
        │
        ├── Images
        │   ├── aboutCV.jpg
        │   ├── sample_1.jpg
        │   ├── sample_2.jpg
        │   ├── sample_3.jpg
        │   └── sample_4.jpg
        │
        └── Templates
                Template.css
                Template1.js
                Template2.js
                Template3.js
                Template4.js
                Template5.js
                Template6.js
```

### Overview:

- **public/**: Contains static files such as icons, the main HTML file, and other assets needed during the build.
- **src/**: The main source code directory for the application.
  - **Components/**: Contains individual React components, each with its respective CSS and JS files.
  - **Pages/**: Holds different page components like About Us, Home, etc., with their associated styles.
  - **Redux/**: Manages state through actions and reducers.
  - **Utils/**: Contains utility functions and additional resources like data files, images, and templates.

This structure provides a clear organization of the project's assets and components, making it easy to manage and scale.

