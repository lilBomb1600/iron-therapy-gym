export type Review = {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  featured?: boolean;
};

// Real customer reviews, sourced from Yelp. Do not invent or edit these.
export const reviews: Review[] = [
  {
    name: "Lupita B.",
    location: "Bay Point, CA",
    rating: 5,
    date: "November 30, 2022",
    text: "I've been part of ITG for a little over a year now. It has been hands down the best decision I could've made. I've lost about 50lbs so far with their style of training and I've learned to love fitness. Coach Bob is amazing, he truly cares and takes his time to correct your form even with 10+ other people in the gym. When I've gotten injured, he's helped me modify the workouts as well. If you're looking to lose weight, tone up, be part of a true gym family, and have coaches who care about you... SIGN UP!!",
    featured: true,
  },
  {
    name: "Jessica N.",
    location: "Concord, CA",
    rating: 5,
    date: "April 22, 2026",
    text: "This review is long overdue. I went to this gym about 3 years ago and I went for almost a year. Although I've moved on because I moved out of the area, I've taken the lessons Bob taught me with me. He is truly knowledgeable in proper form and the training I acquired from him have transcended across time and gyms I have gone to since. If you're looking for a gym that is really going to slow things down, teach the basics, and push you to be the strongest you can be, I recommend ITG.",
  },
  {
    name: "Vanessa C.",
    location: "Pittsburg, CA",
    rating: 5,
    date: "December 1, 2022",
    text: "I have been going to ITG for 2 years now and I love it! I can literally consider my coaches as family and the friendships I've made from just going to class are unbreakable. Every moment I fell off or wanted to quit, there was Bob and Blanca trying to get me to come back. They really do treat you like family! They push and push and you will see the results day in day out. Consistency really is key! Love you guys both!",
    featured: true,
  },
  {
    name: "Graciela C.",
    location: "Concord, CA",
    rating: 5,
    date: "November 29, 2022",
    text: "I have been a member of ITG since last December, going on my 1 year! Absolutely the best gym I have been to by far. The coaches are AMAZING!!! I was very skeptical when starting as it looks intimidating, but with all the great people that work out there it makes it more comfortable. Coaches Bob and Blanca keep a very close eye on everything to make sure we are properly training and correcting our form as we continue to improve. #BodiesByBobSoula",
  },
  {
    name: "Henry P.",
    location: "Pleasant Hill, CA",
    rating: 5,
    date: "November 29, 2022",
    text: "It's hard to put into words how thankful I am to have found my way to Iron Therapy! From the intense, rewarding workouts, to the awesome, super knowledgeable and uplifting owner/coach Bob Soula & coach Blanca! Not only have I found a newfound love for fitness and exercise, but I've been lucky enough to build a gym fam! Un gimnasio muy bueno para mi gente que hablan español también!",
  },
  {
    name: "Olga G.",
    location: "Concord, CA",
    rating: 5,
    date: "November 29, 2022",
    text: "I have been a part of ITG for 3 years now! Before ITG, I was afraid to step foot in a gym, but Bob & Blanca really take the time to teach correct form, & push you to reach your goals. This place really made me love working out & has allowed me to push for my goals! PS — se habla español, así que sin miedo al éxito!! Aquí los esperamos!!",
  },
  {
    name: "Erika I.",
    location: "San Francisco, CA",
    rating: 5,
    date: "December 3, 2022",
    text: "I'm eternally grateful that I found Iron Therapy as my weekly gym. This is where I learned how to bench press, deadlift and squat properly. Starting with only being able to lift the bar alone, to now adding heavier weights and becoming stronger over time. Bob and Blanca are amazing coaches that really know their craft. Thanks guys!!!",
  },
  {
    name: "Marisa A.",
    location: "Berkeley, CA",
    rating: 5,
    date: "October 17, 2023",
    text: "I just started my classes last week but so far I have had a great first impression. It's good vibes & the other members have all been super welcoming and very helpful. Everyone is really supportive and looks out for each other, and I love all the advice and help given by coach Blanca and coach Bob. Of course I also get an amazing workout in as well!!!",
  },
];

export const averageRating = 5.0;
export const reviewCount = 33;
