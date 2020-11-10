import {
  getRandomInteger,
  getRandomFloatingPointNumber
} from "../utils.js";
import {
  OfferType, CITIES
} from "../const";

const AVATAR_URL = `https://api.adorable.io/avatars/`;
const MIN_RAITING = 1;
const MAX_RAITING = 5;
const MIN_BEDROOMS_COUNT = 1;
const MAX_BEDROOMS_COUNT = 4;
const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 10;
const MIN_PRICE = 20;
const MAX_PRICE = 500;
const MAX_AVATAR_ID = 200;
const OFFERS_COUNT = 10;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generatePhoto = () => {
  return [
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `apartment-03.jpg`,
    `room.jpg`,
    `studio-01.jpg`,
    `apartment-01.jpg`
  ];
};

const generateTitle = () => {
  const titles = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Comfy Single Room Close to Central`,
    `Beatuniful room in E16 with Kingsize bed`,
    `Karine and Flora lovely room in Queens Park`
  ];

  return titles[getRandomInteger(0, titles.length - 1)];
};

const generateDescription = () => {
  const description = [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    `Dog living in this house just make sure before booking. She is super sweet and affectionate I work part time so she can stay a few hours without me at home. The room between Queens Park and Kensal Rise quick access to central London just a few minutes Oxford Circus, Piccadilly central London.`,
    `The room is spacious and airy and SMALL double bed wardrobe and a sofa and table for meals in the room. We have many pubs and restaurants around the house not allowed use kitchen`,
    `Small Friendly Room in a Friendly house located in London Zone 2 strategically located to get the most of the city, a cosy comfortable single bedroom with a large bed, including the regular facilities. House is in a quiet residential family area.`,
    `This single bedroom has wall to wall carpet on floors throughout, tastefully decorated and a shared bathroom. There is not a self catering option and no kitchen facilities apart from a mini fridge, kettle. Gray's Inn Road is located just 30 seconds away from King's Cross St Pancras Station with convenient access to St Pancras International.`,
    `These rooms come with a compact double bed, an en suite bathroom, private kitchenette, study area and storage space. The en suite bathroom includes a toilet, shower and sink. The kitchenette has a 2 ring induction hob, a combination microwave, an under-counter fridge with freezer drawer, and a sink. Kindly note a TV is not provided.`
  ];

  return description[getRandomInteger(0, description.length - 1)];
};

const generateType = () => {
  const types = Object.values(OfferType);
  return types[getRandomInteger(0, types.length - 1)];
};

const generateRating = () => {
  const rating = getRandomFloatingPointNumber(MIN_RAITING, MAX_RAITING);
  return Number(rating.toFixed(1));
};

const generateBedroomsCount = () => {
  return getRandomInteger(MIN_BEDROOMS_COUNT, MAX_BEDROOMS_COUNT);
};

const generateGuestsCount = () => {
  return getRandomInteger(MIN_GUESTS_COUNT, MAX_GUESTS_COUNT);
};

const generatePrice = () => {
  return getRandomInteger(MIN_PRICE, MAX_PRICE);
};

const generateStuff = () => {
  const stuff = [
    `Wi-Fi`,
    `Heating`,
    `Kitchen`,
    `Fridge`,
    `Washing machine`,
    `Coffee machine`,
    `Dishwasher`,
    `Towels`,
    `Baby seat`,
    `Cabel TV`,
    `Air conditioning`,
    `Iron`,
    `Smoke detector`,
    `Hair dryer`,
    `Hangers`,
    `Essentials`
  ];

  let count = getRandomInteger(0, stuff.length - 1);

  return stuff.slice(0, count);
};

const generateAvatar = () => {
  return AVATAR_URL + getRandomInteger(0, MAX_AVATAR_ID);
};

const generateName = () => {
  const names = [
    `Angelina`,
    `Leslie`,
    `Aditya`,
    `Ethelyn`,
    `Forrest`,
    `Estefania`
  ];

  return names[getRandomInteger(0, names.length - 1)];
};

const getCoord = () => {
  let latitude = `52.3` + getRandomInteger(0, 9);
  let longitude = `4.8` + getRandomInteger(0, 9);
  const currentCoord = [Number(latitude), Number(longitude)];

  return currentCoord;
};

const getCity = () => {
  return CITIES[getRandomInteger(0, CITIES.length - 1)];
};

const generateOffer = () => {
  return {
    id: generateId(),
    city: getCity(),
    coord: getCoord(),
    photo: generatePhoto(),
    title: generateTitle(),
    description: generateDescription(),
    premium: Boolean(getRandomInteger(0, 1)),
    type: generateType(),
    rating: generateRating(),
    bedroomsCount: generateBedroomsCount(),
    guestsCount: generateGuestsCount(),
    price: generatePrice(),
    stuff: generateStuff(),
    owner: {
      avatar: generateAvatar(),
      name: generateName(),
      badge: Boolean(getRandomInteger(0, 1)),
    }
  };
};

const generateOffers = (count = OFFERS_COUNT) => {
  return new Array(count).fill().map(generateOffer);
};

export default generateOffers();
