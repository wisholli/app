export let state = {
  testimonial: {
    data: [
      { id: 1, message: "Good food" },
      { id: 2, message: "I like it" },
      { id: 3, message: "Bad food" },
      { id: 4, message: "Good staf" },
      { id: 5, message: "50/50" },
    ],
  },
  chief: {
    data: [
      {
        id: 1,
        name: "Gordon Ramsay",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Funiversal-championship-wrestling-league%2Fimages%2F6%2F6f%2FGordon_Ramsay.jpg%2Frevision%2Flatest%3Fcb%3D20180923094909&f=1&nofb=1",
        description:
          "Gordon Ramsay is the most popular chef in the world. He is a British chef, restaurateur, television personality and writer.",
      },
      {
        id: 2,
        name: "Jamie Oliver",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnuvomagazine.scdn2.secure.raxcdn.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fnuvo_jamie_oliver_0168.jpg&f=1&nofb=1",
        description:
          "Jamie Oliver is a British chef, restaurateur, and cookbook author. He is known for his casual approach to cuisine, which has led him to front numerous television shows and open many restaurants.",
      },
    ],
  },
  menu: {
    data: [
        {
          id: 1,
          name: "Borsh",
          img: "",
          description: "",
          rating: 3,
          link: "borsh"
        },
        {
          id: 2,
          name: "Salat",
          img: "",
          description: "",
          rating: 2,
          link: "salat"
        },
        {
          id: 1,
          name: "Pasta",
          img: "",
          description: "",
          rating: 5,
          link: "pasta"
        }
    ]
  }
};

export let addTestimonial = (textTestimonial) => {
    let newTestimonial = {
        id: 6,
        message: textTestimonial
    };

    state.testimonial.data.push(newTestimonial);
}
