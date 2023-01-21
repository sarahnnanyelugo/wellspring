export const navMenus = {
  about: [
    {
      title: "Welcome Address",
      path: "/about/administrators-message",
      cName: "dropdown-link",
    },
    
    {
      title: "About Evergreen",
      path: "/about/history",
      cName: "dropdown-link",
    },
    {
      title: "Parents Code of Conduct",
      path: "/about/Conduct",
      cName: "dropdown-link",
    },

    { title: "Contact Us", path: "/about/contact-us", cName: "dropdown-link" },
  ],

  admission: [
    // {
    //     title: 'Academics',
    //     description: `At ${process.env.REACT_APP_SITE_NAME}, we aim to provide an innovative learning program that promotes our values of Respect, Diversity, Sustainability and Excellence.`,
    //     path: '/academic',
    //     cName: 'dropdown-link',
    // },
    {
      title: "How to Apply",
      path: "/academics/how_to_apply",
      cName: "dropdown-link",
      description: "",
    },

    {
      title: "International Application",
      path: "/academics/international",
      cName: "dropdown-link",
      description: "",
    },

    
    {
      title: "Transfer",
      path: "/academics/result_&_scholarships",
      cName: "dropdown-link",
    },
  ],
  learn: [
    // {
    //     title: 'Welcome',
    //     description: `We are delighted that you are interested in applying to ${process.env.REACT_APP_SITE_NAME}`,
    //     path: '/learn',
    //     cName: 'dropdown-link'
    // },
    {
      title: "Early Years",
      path: "/learn/early-years",
      cName: "dropdown-link",
    },
    {
      title: "Primary",
      path: "/learn/primary_school",
      cName: "dropdown-link",
    },

    // { title: "Junior school", path: "/learn/nursery", cName: "dropdown-link" },
    {
      title: "College",
      path: "/learn/secondary_school",
      cName: "dropdown-link",
    },
    {
      title: "Curriculum",
      path: "/learn/school_module",
      cName: "dropdown-link",
    },
  ],
  school: [
    { title: "Curriculum", path: "/school/curriculum", cName: "dropdown-link" },

    {
      title: "Academic Structure",
      path: "/school/academic-structure",
      cName: "dropdown-link",
    },
    {
      title: "Academic Probation",
      path: "/school/academic-probation",
      cName: "dropdown-link",
    },
  ],
  news: [
    { title: "school news", path: "/news/school_news", cName: "dropdown-link" },
    {
      title: "school activities",
      path: "/news/school_activities",
      cName: "dropdown-link",
    },
  ],
};

export default navMenus;
