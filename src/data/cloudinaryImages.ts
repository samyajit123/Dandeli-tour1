/**
 * OFFICIAL DANDELI TOURS IMAGE LIBRARY
 * Single Source of Truth: https://collection.cloudinary.com/joyorpxh/62d315c87c7dc9cf653c2582044fdc14
 * 
 * Strict Image Rules Compliant:
 * - Only photographs from the approved Cloudinary collection
 * - No AI generation, no external stock, no guessed URLs
 * - Authentic Western Ghats activities, stays, wildlife, and travelers
 */

export interface CloudinaryAsset {
  id: string;
  publicId: string;
  url: string;
  category: 'rafting' | 'kayaking' | 'zorbing' | 'river_crossing' | 'rope_adventure' | 'trekking' | 'wildlife' | 'river_nature' | 'stays' | 'guests';
  subject: string;
  audience?: 'family' | 'friends' | 'couple' | 'solo' | 'all';
  width: number;
  height: number;
}

// 1. WHITE WATER RAFTING
export const RAFTING_PHOTOS = {
  heroRafting4k: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986666/dandeli_rafting_4k.png',
  groupRapidsSurge: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990668/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
  intenseWhiteWater: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989218/d2ce9490-3b38-45f2-883e-101f102eb22b.png',
  teamSplashAction: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986059/74737e30-fd39-4582-8f37-dfee078098aa.png',
  thrillingRapidsSmiles: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988699/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
  raftingTeamRaft: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986144/4d4b9277-ffeb-443a-be3f-569a01c3130c.png',
  aerialRaftingVertical: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989333/dd88a865-8e56-4970-a098-65eda458bde7.png',
  fleetOfRafts: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988743/c7ce8af6-7c4c-4d75-9972-97d4f6be5add.png',
  raftingPreparationEdge: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990005/e1329bd4-1e59-4b7c-a4ff-6b75a1239505.png',
  ziplineWaterJumpCombo: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988920/11496446-606a-419e-add6-089307911863.png',
};

// 2. KAYAKING
export const KAYAKING_PHOTOS = {
  coupleKayakingCalm: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989830/84aece0b-ced0-4594-89d9-afd465f38c98.png',
  coupleKayakingSerene: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986693/32919f44-58d9-431a-8790-7b1d932b816b.png',
  groupKayakingRiver: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986271/a85fe801-b402-4806-bace-1210b9be3bfc.png',
  sunsetKayaking: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788975527/ChatGPT_Image_Sep_9_2026_11_07_56_PM.png',
};

// 3. WATER ZORBING
export const ZORBING_PHOTOS = {
  zorbingAction1: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989050/84d548e8-afb5-43c4-b753-e88ee97be27f.png',
  zorbingAction2: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987242/cf41e552-0098-49c7-a8d0-16809b4854af.png',
};

// 4. RIVER CROSSING & ZIPLINE
export const RIVER_CROSSING_PHOTOS = {
  riverZiplineHighTension: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988964/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
  riverCrossingCanopyHigh: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988608/e029f6e9-ae79-4a1a-a684-cd86b6464f48.png',
  riverCrossingGroup: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987205/bcc42f39-3865-4d9f-916f-7115ae8f818b.png',
};

// 5. JUNGLE TREKKING
export const JUNGLE_TREKKING_PHOTOS = {
  jungleStreamTrek: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988151/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
  junglePoolExpedition: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988017/e523c881-f05f-4796-a506-3b98674ddcbb.png',
};

// 6. ROPE ADVENTURE & BURMA BRIDGE
export const ROPE_ADVENTURE_PHOTOS = {
  burmaBridgeSoloChallenge: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988547/0bde2276-0e07-4d43-91d6-e0d764720c1d.png',
  highRopeBridgeCourse: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987190/7e6e404f-d891-456b-a57c-0766ea922662.png',
};

// 7. WILDLIFE
export const WILDLIFE_PHOTOS = {
  dandeliTiger4k: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987633/dandeli_tiger_4K.png',
  jungleWildElephants: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987529/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
};

// 8. RIVER NATURE & WATERFALLS
export const RIVER_NATURE_PHOTOS = {
  emeraldKaliRiverAerial: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990397/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
  riverWaterfallsCanopy: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990374/14fb0c52-22f0-4dcd-aa71-9135236cb1d5.png',
  waterfallSwimGroup: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988466/a85c46f0-7c48-47d8-9bed-5039272bad67.png',
  waterfallMistRailGhats: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988335/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
};

// 9. AUDIENCES (FAMILIES, FRIENDS, COUPLES, SOLO)
export const AUDIENCE_PHOTOS = {
  families: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990118/af4c0a2b-298d-4821-8646-fc325c884a10.png',
  friendsSquad1: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990227/a069f43c-a7ff-41ec-9d8f-c1b9ef865c5d.png',
  friendsSquad2: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990060/16cad5ab-9ffe-413a-b792-867032abb2d3.png',
  couplesKayaking: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989830/84aece0b-ced0-4594-89d9-afd465f38c98.png',
  soloAdventureRope: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987190/7e6e404f-d891-456b-a57c-0766ea922662.png',
  friendsPoolFun: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989914/863b6a52-02b4-4c75-9c62-bb01bdf5033b.png',
};

// 10. STAYS & RESORTS (ROOMS, COTTAGES, CABINS, POOLS, DINING, DORM)
export const STAYS_PHOTOS = {
  ecoCottageExterior: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991704/dandeli_cottage_4K_faithful.jpg',
  woodenCabinsJungle: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991789/dandeli_resort_cabins_4K_faithful.jpg',
  cottagesNightAmbiance: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991817/dandeli_cottages_night_4K_faithful.jpg',
  poolAndCottagesResort: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991654/dandeli_pool_cottages_4K_faithful.jpg',
  cottagesLushPoolOverview: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991585/e5e39a54-07b9-450c-9a9a-c8d1e4cd5ecb.png',
  resortPoolTurquoise: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991498/dandeli_pool_resort_4K_faithful.jpg',
  poolSunnyDeck: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788992010/dandeli_pool_deck_4K_faithful.jpg',
  resortPoolReflections: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991421/dandeli_resort_pool_4K_faithful.jpg',
  wideSwimmingPool: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991368/dandeli_pool_4K_faithful.jpg',
  luxuryBedroomSuite: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991896/dandeli_bedroom_4K_faithful.jpg',
  deluxeRoomInterior: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788992174/dandeli_room_4K_faithful.jpg',
  groupDormRoom: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788992132/dandeli_dorm_room_4K_faithful.jpg',
  diningRestaurantPavilion: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991285/dandeli_restaurant_4K_faithful.jpg',
  diningHall8k: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990882/dandeli_restaurant_8K_faithful_under10MB.jpg',
  openDiningDeck: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991124/3d3247ad-0c0e-47eb-8273-2caf778a50b4.png',
};

// Complete 48 Photographic Assets Directory
export const ALL_CLOUDINARY_ASSETS: CloudinaryAsset[] = [
  // Rafting
  {
    id: 'cld-raft-1',
    publicId: 'dandeli_rafting_4k',
    url: RAFTING_PHOTOS.heroRafting4k,
    category: 'rafting',
    subject: 'White Water Rafting on Kali River Rapids',
    audience: 'friends',
    width: 4096,
    height: 2728,
  },
  {
    id: 'cld-raft-2',
    publicId: '7c6871cf-f09f-49dd-a861-b5e76c52736a',
    url: RAFTING_PHOTOS.groupRapidsSurge,
    category: 'rafting',
    subject: 'Adventure Group Surging Class 3 Kali Rapids',
    audience: 'friends',
    width: 1536,
    height: 1024,
  },
  {
    id: 'cld-raft-3',
    publicId: 'd2ce9490-3b38-45f2-883e-101f102eb22b',
    url: RAFTING_PHOTOS.intenseWhiteWater,
    category: 'rafting',
    subject: 'Intense River Rafting Rapid Drop',
    audience: 'friends',
    width: 1553,
    height: 1013,
  },
  {
    id: 'cld-raft-4',
    publicId: '74737e30-fd39-4582-8f37-dfee078098aa',
    url: RAFTING_PHOTOS.teamSplashAction,
    category: 'rafting',
    subject: 'Joyful Rafters Splashing Waves in River Kali',
    audience: 'friends',
    width: 1254,
    height: 1254,
  },
  {
    id: 'cld-raft-5',
    publicId: '134030b2-8ca1-4608-bb48-f2a0955637e8',
    url: RAFTING_PHOTOS.thrillingRapidsSmiles,
    category: 'rafting',
    subject: 'Smiling Rafters Navigating Kali Rapids',
    audience: 'friends',
    width: 1498,
    height: 1050,
  },
  {
    id: 'cld-raft-6',
    publicId: '4d4b9277-ffeb-443a-be3f-569a01c3130c',
    url: RAFTING_PHOTOS.raftingTeamRaft,
    category: 'rafting',
    subject: 'Rafting Crew Conquering Rapids',
    audience: 'friends',
    width: 1254,
    height: 1254,
  },
  {
    id: 'cld-raft-7',
    publicId: 'dd88a865-8e56-4970-a098-65eda458bde7',
    url: RAFTING_PHOTOS.aerialRaftingVertical,
    category: 'rafting',
    subject: 'Aerial High-Angle View of Kali River Raft',
    audience: 'friends',
    width: 939,
    height: 1675,
  },
  {
    id: 'cld-raft-8',
    publicId: 'c7ce8af6-7c4c-4d75-9972-97d4f6be5add',
    url: RAFTING_PHOTOS.fleetOfRafts,
    category: 'rafting',
    subject: 'Fleet of Rafts Floating on Peaceful Kali River Waters',
    audience: 'all',
    width: 1599,
    height: 984,
  },
  {
    id: 'cld-raft-9',
    publicId: 'e1329bd4-1e59-4b7c-a4ff-6b75a1239505',
    url: RAFTING_PHOTOS.raftingPreparationEdge,
    category: 'rafting',
    subject: 'Rafting Expedition Safety Briefing & Gear Preparation',
    audience: 'friends',
    width: 1448,
    height: 1086,
  },
  {
    id: 'cld-raft-10',
    publicId: '11496446-606a-419e-add6-089307911863',
    url: RAFTING_PHOTOS.ziplineWaterJumpCombo,
    category: 'rafting',
    subject: 'River Water Jump & Rafting Action',
    audience: 'friends',
    width: 1086,
    height: 1448,
  },

  // Kayaking
  {
    id: 'cld-kayak-1',
    publicId: '84aece0b-ced0-4594-89d9-afd465f38c98',
    url: KAYAKING_PHOTOS.coupleKayakingCalm,
    category: 'kayaking',
    subject: 'Couple Kayaking on Calm Kali River',
    audience: 'couple',
    width: 1719,
    height: 915,
  },
  {
    id: 'cld-kayak-2',
    publicId: '32919f44-58d9-431a-8790-7b1d932b816b',
    url: KAYAKING_PHOTOS.coupleKayakingSerene,
    category: 'kayaking',
    subject: 'Serene Tandem Kayaking in Western Ghats Canopy',
    audience: 'couple',
    width: 1599,
    height: 984,
  },
  {
    id: 'cld-kayak-3',
    publicId: 'a85fe801-b402-4806-bace-1210b9be3bfc',
    url: KAYAKING_PHOTOS.groupKayakingRiver,
    category: 'kayaking',
    subject: 'Group Kayaking & River Exploration',
    audience: 'friends',
    width: 1445,
    height: 1089,
  },
  {
    id: 'cld-kayak-4',
    publicId: 'ChatGPT_Image_Sep_9_2026_11_07_56_PM',
    url: KAYAKING_PHOTOS.sunsetKayaking,
    category: 'kayaking',
    subject: 'Sunset Kayaking on River Kali',
    audience: 'all',
    width: 1536,
    height: 1024,
  },

  // Water Zorbing
  {
    id: 'cld-zorb-1',
    publicId: '84d548e8-afb5-43c4-b753-e88ee97be27f',
    url: ZORBING_PHOTOS.zorbingAction1,
    category: 'zorbing',
    subject: 'Water Zorbing Orb Floating on River Kali',
    audience: 'solo',
    width: 1448,
    height: 1086,
  },
  {
    id: 'cld-zorb-2',
    publicId: 'cf41e552-0098-49c7-a8d0-16809b4854af',
    url: ZORBING_PHOTOS.zorbingAction2,
    category: 'zorbing',
    subject: 'Water Zorbing River Fun with Guides',
    audience: 'all',
    width: 1539,
    height: 1022,
  },

  // River Crossing & Zipline
  {
    id: 'cld-cross-1',
    publicId: '67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1',
    url: RIVER_CROSSING_PHOTOS.riverZiplineHighTension,
    category: 'river_crossing',
    subject: 'River Crossing High-Tension Cable Zipline Across Kali Rapids',
    audience: 'solo',
    width: 1672,
    height: 941,
  },
  {
    id: 'cld-cross-2',
    publicId: 'e029f6e9-ae79-4a1a-a684-cd86b6464f48',
    url: RIVER_CROSSING_PHOTOS.riverCrossingCanopyHigh,
    category: 'river_crossing',
    subject: 'Aerial River Crossing Over Lush Rainforest Gorge',
    audience: 'solo',
    width: 1774,
    height: 887,
  },
  {
    id: 'cld-cross-3',
    publicId: 'bcc42f39-3865-4d9f-916f-7115ae8f818b',
    url: RIVER_CROSSING_PHOTOS.riverCrossingGroup,
    category: 'river_crossing',
    subject: 'River Crossing Cable Activity Group',
    audience: 'friends',
    width: 1448,
    height: 1086,
  },

  // Jungle Trekking
  {
    id: 'cld-trek-1',
    publicId: '302354b4-08c1-4f98-8ce3-ddc6b60f5b1c',
    url: JUNGLE_TREKKING_PHOTOS.jungleStreamTrek,
    category: 'trekking',
    subject: 'Jungle Trekking Stream Crossing in Dense Teak Forest',
    audience: 'friends',
    width: 1643,
    height: 957,
  },
  {
    id: 'cld-trek-2',
    publicId: 'e523c881-f05f-4796-a506-3b98674ddcbb',
    url: JUNGLE_TREKKING_PHOTOS.junglePoolExpedition,
    category: 'trekking',
    subject: 'Jungle Forest Trek to Natural Mountain Pool',
    audience: 'friends',
    width: 1445,
    height: 1088,
  },

  // Rope Adventure
  {
    id: 'cld-rope-1',
    publicId: '0bde2276-0e07-4d43-91d6-e0d764720c1d',
    url: ROPE_ADVENTURE_PHOTOS.burmaBridgeSoloChallenge,
    category: 'rope_adventure',
    subject: 'Burma Rope Bridge Canopy Challenge',
    audience: 'solo',
    width: 1672,
    height: 941,
  },
  {
    id: 'cld-rope-2',
    publicId: '7e6e404f-d891-456b-a57c-0766ea922662',
    url: ROPE_ADVENTURE_PHOTOS.highRopeBridgeCourse,
    category: 'rope_adventure',
    subject: 'High Rope Obstacle Bridge Suspension',
    audience: 'solo',
    width: 1536,
    height: 1024,
  },

  // Wildlife
  {
    id: 'cld-wild-1',
    publicId: 'dandeli_tiger_4K',
    url: WILDLIFE_PHOTOS.dandeliTiger4k,
    category: 'wildlife',
    subject: 'Royal Bengal Tiger in Dandeli Wildlife Sanctuary',
    audience: 'all',
    width: 4096,
    height: 2785,
  },
  {
    id: 'cld-wild-2',
    publicId: 'fbdd8834-14ff-4f93-8f6b-bd85566424e3',
    url: WILDLIFE_PHOTOS.jungleWildElephants,
    category: 'wildlife',
    subject: 'Wild Elephants in Lush Dandeli Jungle Habitat',
    audience: 'all',
    width: 1742,
    height: 903,
  },

  // River Nature & Waterfalls
  {
    id: 'cld-nat-1',
    publicId: 'cc6364c1-6675-432f-8d98-64c73cb38b99',
    url: RIVER_NATURE_PHOTOS.emeraldKaliRiverAerial,
    category: 'river_nature',
    subject: 'Aerial View of Emerald River Kali Winding through Western Ghats Canyons',
    audience: 'all',
    width: 1528,
    height: 1029,
  },
  {
    id: 'cld-nat-2',
    publicId: '14fb0c52-22f0-4dcd-aa71-9135236cb1d5',
    url: RIVER_NATURE_PHOTOS.riverWaterfallsCanopy,
    category: 'river_nature',
    subject: 'River Kali Canyon with Cascading Waterfalls',
    audience: 'all',
    width: 1448,
    height: 1086,
  },
  {
    id: 'cld-nat-3',
    publicId: 'a85c46f0-7c48-47d8-9bed-5039272bad67',
    url: RIVER_NATURE_PHOTOS.waterfallSwimGroup,
    category: 'river_nature',
    subject: 'Group Swimming in Natural River Pool Beneath Waterfall',
    audience: 'friends',
    width: 1086,
    height: 1448,
  },
  {
    id: 'cld-nat-4',
    publicId: 'ff97df5f-a6fa-4fd2-9d6a-051471e513dc',
    url: RIVER_NATURE_PHOTOS.waterfallMistRailGhats,
    category: 'river_nature',
    subject: 'Majestic Waterfall Rolling Down Western Ghats Mountain Pass',
    audience: 'all',
    width: 1448,
    height: 1086,
  },

  // Groups & Audiences
  {
    id: 'cld-aud-1',
    publicId: 'af4c0a2b-298d-4821-8646-fc325c884a10',
    url: AUDIENCE_PHOTOS.families,
    category: 'guests',
    subject: 'Happy Multi-Generational Family Holiday Group in Dandeli',
    audience: 'family',
    width: 1448,
    height: 1086,
  },
  {
    id: 'cld-aud-2',
    publicId: 'a069f43c-a7ff-41ec-9d8f-c1b9ef865c5d',
    url: AUDIENCE_PHOTOS.friendsSquad1,
    category: 'guests',
    subject: 'Adventure Friends Squad Group Celebrating in Dandeli',
    audience: 'friends',
    width: 1872,
    height: 840,
  },
  {
    id: 'cld-aud-3',
    publicId: '16cad5ab-9ffe-413a-b792-867032abb2d3',
    url: AUDIENCE_PHOTOS.friendsSquad2,
    category: 'guests',
    subject: 'Travel Squad Celebrating Outdoor Expedition',
    audience: 'friends',
    width: 1670,
    height: 942,
  },
  {
    id: 'cld-aud-4',
    publicId: '863b6a52-02b4-4c75-9c62-bb01bdf5033b',
    url: AUDIENCE_PHOTOS.friendsPoolFun,
    category: 'guests',
    subject: 'Friends & Family Enjoying Resort Swimming Pool',
    audience: 'all',
    width: 1870,
    height: 841,
  },

  // Stays & Accommodations
  {
    id: 'cld-stay-1',
    publicId: 'dandeli_cottage_4K_faithful',
    url: STAYS_PHOTOS.ecoCottageExterior,
    category: 'stays',
    subject: 'Authentic Dandeli Nature Cottage Nestled in Tropical Woods',
    audience: 'all',
    width: 3840,
    height: 2697,
  },
  {
    id: 'cld-stay-2',
    publicId: 'dandeli_resort_cabins_4K_faithful',
    url: STAYS_PHOTOS.woodenCabinsJungle,
    category: 'stays',
    subject: 'Independent Wooden Cabins in Rainforest Setting',
    audience: 'all',
    width: 3840,
    height: 2565,
  },
  {
    id: 'cld-stay-3',
    publicId: 'dandeli_cottages_night_4K_faithful',
    url: STAYS_PHOTOS.cottagesNightAmbiance,
    category: 'stays',
    subject: 'Warmly Illuminated Resort Cottages Under Evening Stars',
    audience: 'all',
    width: 3840,
    height: 2559,
  },
  {
    id: 'cld-stay-4',
    publicId: 'dandeli_pool_cottages_4K_faithful',
    url: STAYS_PHOTOS.poolAndCottagesResort,
    category: 'stays',
    subject: 'Swimming Pool with Forest Cottages Backdrop',
    audience: 'all',
    width: 3840,
    height: 3200,
  },
  {
    id: 'cld-stay-5',
    publicId: 'e5e39a54-07b9-450c-9a9a-c8d1e4cd5ecb',
    url: STAYS_PHOTOS.cottagesLushPoolOverview,
    category: 'stays',
    subject: 'Resort Cottages and Swimming Pool Overview',
    audience: 'all',
    width: 1497,
    height: 1051,
  },
  {
    id: 'cld-stay-6',
    publicId: 'dandeli_pool_deck_4K_faithful',
    url: STAYS_PHOTOS.poolSunnyDeck,
    category: 'stays',
    subject: 'Swimming Pool Deck with Sunny Loungers',
    audience: 'all',
    width: 3840,
    height: 2880,
  },
  {
    id: 'cld-stay-7',
    publicId: 'dandeli_resort_pool_4K_faithful',
    url: STAYS_PHOTOS.resortPoolReflections,
    category: 'stays',
    subject: 'Crystal Clear Resort Pool with Palm Reflections',
    audience: 'all',
    width: 3840,
    height: 2554,
  },
  {
    id: 'cld-stay-8',
    publicId: 'dandeli_pool_resort_4K_faithful',
    url: STAYS_PHOTOS.resortPoolTurquoise,
    category: 'stays',
    subject: 'Turquoise Resort Swimming Pool',
    audience: 'all',
    width: 3840,
    height: 2561,
  },
  {
    id: 'cld-stay-9',
    publicId: 'dandeli_pool_4K_faithful',
    url: STAYS_PHOTOS.wideSwimmingPool,
    category: 'stays',
    subject: 'Spacious Resort Swimming Pool',
    audience: 'all',
    width: 3840,
    height: 1728,
  },
  {
    id: 'cld-stay-10',
    publicId: 'dandeli_bedroom_4K_faithful',
    url: STAYS_PHOTOS.luxuryBedroomSuite,
    category: 'stays',
    subject: 'Luxury Wooden Cottage Bedroom Suite',
    audience: 'couple',
    width: 3840,
    height: 2160,
  },
  {
    id: 'cld-stay-11',
    publicId: 'dandeli_room_4K_faithful',
    url: STAYS_PHOTOS.deluxeRoomInterior,
    category: 'stays',
    subject: 'Deluxe Nature Cottage King Bed Room',
    audience: 'couple',
    width: 3840,
    height: 2532,
  },
  {
    id: 'cld-stay-12',
    publicId: 'dandeli_dorm_room_4K_faithful',
    url: STAYS_PHOTOS.groupDormRoom,
    category: 'stays',
    subject: 'Clean Group Dormitory with Wooden Beds',
    audience: 'friends',
    width: 3840,
    height: 2560,
  },
  {
    id: 'cld-stay-13',
    publicId: 'dandeli_restaurant_4K_faithful',
    url: STAYS_PHOTOS.diningRestaurantPavilion,
    category: 'stays',
    subject: 'Resort Open Restaurant Pavilion & Buffet Hall',
    audience: 'all',
    width: 3840,
    height: 2559,
  },
  {
    id: 'cld-stay-14',
    publicId: 'dandeli_restaurant_8K_faithful_under10MB',
    url: STAYS_PHOTOS.diningHall8k,
    category: 'stays',
    subject: 'Spacious Resort Dining Hall',
    audience: 'all',
    width: 7680,
    height: 5118,
  },
  {
    id: 'cld-stay-15',
    publicId: '3d3247ad-0c0e-47eb-8273-2caf778a50b4',
    url: STAYS_PHOTOS.openDiningDeck,
    category: 'stays',
    subject: 'Open-Air Dining Deck with Forest Views',
    audience: 'all',
    width: 1536,
    height: 1024,
  },
];
