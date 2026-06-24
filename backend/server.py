from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Kotzinons Studio API", version="1.0.0")
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ============== MODELS ==============
class Character(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    name: str
    color: str  # red, blue, gold, green, leader
    color_hex: str
    role: str  # e.g., "Crimson Vanguard", "Storm Sentinel"
    tagline: str
    description: str
    weapon: str
    abilities: List[str]
    image_url: str
    is_leader: bool = False
    order: int = 0


class TeamMember(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    title: str
    bio: str
    responsibilities: List[str]
    avatar_initials: str
    avatar_color: str  # which Kotzinon color to use for avatar
    order: int = 0


class GalleryItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str  # 'concept-art', 'toy-photos', 'posters', 'digital-renders'
    description: Optional[str] = ""
    image_url: str
    order: int = 0


class Video(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    youtube_id: str  # the YouTube video/short ID
    is_short: bool = False
    featured: bool = False
    order: int = 0


class ContactMessageCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    inquiry_type: str = Field(default="general")  # general, partnership, press, licensing
    subject: Optional[str] = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=2000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    inquiry_type: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    email: EmailStr


class NewsletterSubscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============== HELPERS ==============
def serialize_doc(doc: Optional[dict]) -> Optional[dict]:
    """Convert MongoDB doc to JSON-safe dict (removes ``_id``, ISO-formats datetimes)."""
    if doc is None:
        return doc
    doc.pop('_id', None)
    for k, v in list(doc.items()):
        if isinstance(v, datetime):
            doc[k] = v.isoformat()
    return doc


# ============== SEED DATA ==============
SEED_CHARACTERS = [
    {
        "slug": "goldon",
        "name": "Goldon",
        "color": "gold",
        "color_hex": "#F59E0B",
        "role": "Supreme Commander",
        "tagline": "Heart of the Kotzinons \u2014 leader, strategist, protector.",
        "description": "The undisputed leader of the Kotzinons, Goldon wears the legendary Crystal Cell armor \u2014 a chest-mounted energy core ringed with golden launchers. With unmatched courage and a mind for battle, he guides the team across galaxies, defending the innocent from cosmic threats.",
        "weapon": "Crystal Cell Chest Cannon",
        "abilities": ["Tactical Command", "Energy Burst", "Cosmic Sight", "Unbreakable Will"],
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/tmex48wh_23c51e9b-2f7b-4cd7-870e-89569b63ab2c.jpg",
        "is_leader": True,
        "order": 1,
    },
    {
        "slug": "crimson",
        "name": "Crimson",
        "color": "red",
        "color_hex": "#DC2626",
        "role": "Crimson Vanguard",
        "tagline": "The first into battle, the last to fall.",
        "description": "Forged in the fires of the Red Nebula, Crimson charges into every fight with twin spiked clubs and a heart of pure courage. His armor glows like molten steel, striking fear into anyone who threatens the peace of the Kotzinons' world.",
        "weapon": "Twin Spike Clubs (Crimson Steel)",
        "abilities": ["Fearless Charge", "Heat Resistance", "Battle Fury", "Spike Burst"],
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/q0bt34vi_3e65384a-5c4e-4f6a-be0e-429d44cdf8b9.jpg",
        "is_leader": False,
        "order": 2,
    },
    {
        "slug": "azure",
        "name": "Azure",
        "color": "blue",
        "color_hex": "#1E40AF",
        "role": "Storm Sentinel",
        "tagline": "Cool head, lightning reflexes.",
        "description": "Azure is the calm before the storm. Wielding twin lightning rods of cobalt energy, he can unleash thunderclaps that shake the ground. A master tactician, he keeps the Kotzinons one step ahead of every villain.",
        "weapon": "Lightning Rod Clubs",
        "abilities": ["Lightning Strike", "Storm Shield", "Tactical Vision", "Sonic Boom"],
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/bwy6av0k_9fd1951a-b584-4935-ab62-2971b347a8ef.jpg",
        "is_leader": False,
        "order": 3,
    },
    {
        "slug": "viridian",
        "name": "Viridian",
        "color": "green",
        "color_hex": "#16A34A",
        "role": "Forest Guardian",
        "tagline": "Nature's protector with the Looping Vine.",
        "description": "Viridian carries the legendary Looping Vine \u2014 a circular emerald weapon that bends time and trees alike. He speaks with animals, runs through forests at impossible speed, and is the guardian of every living thing the Kotzinons swear to defend.",
        "weapon": "Looping Vine Ring",
        "abilities": ["Nature Speak", "Forest Speed", "Vine Whip", "Regeneration"],
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/a7cidtry_f654a2ab-24bf-4231-b155-bfe5a435a9fb.jpg",
        "is_leader": False,
        "order": 4,
    },
    {
        "slug": "ruby",
        "name": "Ruby",
        "color": "red",
        "color_hex": "#E11D48",
        "role": "Ruby Blade",
        "tagline": "Grace, speed, and a heart of fire.",
        "description": "Ruby is the heart of the team \u2014 the only female Kotzinon and the swiftest of them all. Her ruby-tipped spear and crowned helm mark her royal lineage. She is as brilliant in strategy as she is unstoppable in motion.",
        "weapon": "Ruby-Tipped Spear",
        "abilities": ["Royal Command", "Blade Dance", "Healing Touch", "Crown Pulse"],
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/t0mvwdio_WhatsApp%20Image%202026-06-24%20at%2015.58.59%20%281%29.jpeg",
        "is_leader": False,
        "order": 5,
    },
]

# Featured cinematic image (Goldon + Viridian in spaceship)
SPACESHIP_HERO_URL = "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/e5uk8vdi_WhatsApp%20Image%202026-06-24%20at%2015.58.59.jpeg"
# Group of three (Viridian + Ruby + Goldon)
GROUP_TRIO_URL = "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/5lu5oxb2_WhatsApp%20Image%202026-06-24%20at%2015.59.00.jpeg"

SEED_TEAM = [
    {
        "name": "Uri Eini",
        "role": "Creator & Executive Producer",
        "title": "Copyright Holder of Kotzinons",
        "bio": "Visionary artist and creator of the Kotzinons universe. From original drawings to the first hand-crafted prototype toy, Uri has been the driving creative force shaping every corner of the Kotzinons world.",
        "responsibilities": ["Creative Direction", "Story & Lore", "Character Design", "Brand Stewardship"],
        "avatar_initials": "UE",
        "avatar_color": "gold",
        "order": 1,
    },
    {
        "name": "Daniel Olaleye",
        "role": "Software Engineer",
        "title": "Technology & Sales",
        "bio": "Software engineer powering the digital side of Kotzinons. Daniel manages the technology stack behind the brand and drives sales strategy to bring Kotzinons to fans across the globe.",
        "responsibilities": ["Technology Strategy", "Sales", "Digital Platforms", "Partnerships"],
        "avatar_initials": "DO",
        "avatar_color": "blue",
        "order": 2,
    },
    {
        "name": "Tolu Olaleye",
        "role": "Head of Animation",
        "title": "Animation Director",
        "bio": "Leader of the Kotzinons animation team. Tolu transforms Uri\u2019s drawings into living, moving stories \u2014 directing every frame to bring the Kotzinons to life on screen.",
        "responsibilities": ["Animation Direction", "Team Leadership", "Production Pipeline", "Quality Control"],
        "avatar_initials": "TO",
        "avatar_color": "green",
        "order": 3,
    },
    {
        "name": "Joy Eini Olaleye",
        "role": "VP of Operations",
        "title": "Schedules & Team Coordination",
        "bio": "Master of motion behind the scenes. Joy keeps every department \u2014 from art to animation to sales \u2014 moving in perfect rhythm. She is the heartbeat that keeps Kotzinons on schedule.",
        "responsibilities": ["Operations", "Scheduling", "Team Coordination", "Project Management"],
        "avatar_initials": "JO",
        "avatar_color": "red",
        "order": 4,
    },
]

SEED_GALLERY = [
    {
        "title": "The Kotzinons \u2014 Aboard the Command Vessel",
        "category": "digital-renders",
        "description": "Goldon and Viridian on the bridge of the Kotzinons command ship, scanning a distant city skyline.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/e5uk8vdi_WhatsApp%20Image%202026-06-24%20at%2015.58.59.jpeg",
        "order": 1,
    },
    {
        "title": "The Royal Lineup \u2014 Viridian, Ruby, Goldon",
        "category": "digital-renders",
        "description": "Three heroes stand together \u2014 Forest Guardian, Ruby Blade, and the Supreme Commander.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/5lu5oxb2_WhatsApp%20Image%202026-06-24%20at%2015.59.00.jpeg",
        "order": 2,
    },
    {
        "title": "Ruby \u2014 Royal Lineage on the Cliffs",
        "category": "digital-renders",
        "description": "Ruby Blade, the only female Kotzinon, surveys her world from a high cliff.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/t0mvwdio_WhatsApp%20Image%202026-06-24%20at%2015.58.59%20%281%29.jpeg",
        "order": 3,
    },
    {
        "title": "Goldon \u2014 Supreme Commander Render",
        "category": "digital-renders",
        "description": "3D render of Goldon, leader of the Kotzinons, in his iconic Crystal Cell armor.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/tmex48wh_23c51e9b-2f7b-4cd7-870e-89569b63ab2c.jpg",
        "order": 4,
    },
    {
        "title": "Crimson \u2014 The Crimson Vanguard",
        "category": "digital-renders",
        "description": "Crimson with his twin spike clubs of Crimson Steel.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/q0bt34vi_3e65384a-5c4e-4f6a-be0e-429d44cdf8b9.jpg",
        "order": 5,
    },
    {
        "title": "Azure \u2014 Storm Sentinel",
        "category": "digital-renders",
        "description": "Azure with his twin Lightning Rod clubs, ready for the storm.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/bwy6av0k_9fd1951a-b584-4935-ab62-2971b347a8ef.jpg",
        "order": 6,
    },
    {
        "title": "Viridian \u2014 The Forest Guardian",
        "category": "digital-renders",
        "description": "Viridian with the Looping Vine ring weapon arching behind him.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/a7cidtry_f654a2ab-24bf-4231-b155-bfe5a435a9fb.jpg",
        "order": 7,
    },
    {
        "title": "Concept \u2014 The Goldon Pose Study",
        "category": "concept-art",
        "description": "Pose study of Goldon, leader of the Kotzinons, with the Crystal Cell chest emblem.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/tmex48wh_23c51e9b-2f7b-4cd7-870e-89569b63ab2c.jpg",
        "order": 8,
    },
    {
        "title": "Concept \u2014 Ruby in Motion",
        "category": "concept-art",
        "description": "Ruby Blade study \u2014 royal lineage, grace, and the cliffs of her homeworld.",
        "image_url": "https://customer-assets.emergentagent.com/job_kotzinons-studio/artifacts/t0mvwdio_WhatsApp%20Image%202026-06-24%20at%2015.58.59%20%281%29.jpeg",
        "order": 9,
    },
]

SEED_VIDEOS = [
    {
        "title": "Kotzinons \u2014 Animation Short",
        "description": "An exclusive look at the Kotzinons in motion. Watch the heroes leap into action.",
        "youtube_id": "diZbJpeyo6o",
        "is_short": True,
        "featured": True,
        "order": 1,
    },
]


async def seed_database() -> None:
    """Seed the database with initial data (idempotent)."""
    try:
        # Characters
        if await db.characters.count_documents({}) == 0:
            docs: list[dict] = []
            for c in SEED_CHARACTERS:
                obj = Character(**c)
                docs.append(obj.model_dump())
            await db.characters.insert_many(docs)
            logger.info(f"Seeded {len(docs)} characters")

        # Team
        if await db.team.count_documents({}) == 0:
            docs = []
            for t in SEED_TEAM:
                obj = TeamMember(**t)
                docs.append(obj.model_dump())
            await db.team.insert_many(docs)
            logger.info(f"Seeded {len(docs)} team members")

        # Gallery
        if await db.gallery.count_documents({}) == 0:
            docs = []
            for g in SEED_GALLERY:
                obj = GalleryItem(**g)
                docs.append(obj.model_dump())
            await db.gallery.insert_many(docs)
            logger.info(f"Seeded {len(docs)} gallery items")

        # Videos
        if await db.videos.count_documents({}) == 0:
            docs = []
            for v in SEED_VIDEOS:
                obj = Video(**v)
                docs.append(obj.model_dump())
            await db.videos.insert_many(docs)
            logger.info(f"Seeded {len(docs)} videos")
    except Exception as e:
        logger.error(f"Seeding error: {e}")


# ============== ROUTES ==============
@api_router.get("/")
async def root() -> dict[str, str]:
    return {"message": "Kotzinons Studio API", "version": "1.0.0"}


@api_router.get("/stats")
async def get_stats() -> dict[str, int]:
    characters_count = await db.characters.count_documents({})
    team_count = await db.team.count_documents({})
    gallery_count = await db.gallery.count_documents({})
    videos_count = await db.videos.count_documents({})
    return {
        "characters": characters_count,
        "team": team_count,
        "gallery": gallery_count,
        "videos": videos_count,
    }


@api_router.get("/characters", response_model=List[Character])
async def list_characters() -> List[Character]:
    docs = await db.characters.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return [Character(**d) for d in docs]


@api_router.get("/characters/{slug}", response_model=Character)
async def get_character(slug: str) -> Character:
    doc = await db.characters.find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Character not found")
    return Character(**doc)


@api_router.get("/team", response_model=List[TeamMember])
async def list_team() -> List[TeamMember]:
    docs = await db.team.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return [TeamMember(**d) for d in docs]


@api_router.get("/gallery", response_model=List[GalleryItem])
async def list_gallery(category: Optional[str] = None) -> List[GalleryItem]:
    query: dict = {}
    if category and category != "all":
        query["category"] = category
    docs = await db.gallery.find(query, {"_id": 0}).sort("order", 1).to_list(500)
    return [GalleryItem(**d) for d in docs]


@api_router.get("/videos", response_model=List[Video])
async def list_videos() -> List[Video]:
    docs = await db.videos.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return [Video(**d) for d in docs]


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input: ContactMessageCreate) -> ContactMessage:
    obj = ContactMessage(**input.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.contact_messages.insert_one(doc)
    logger.info(f"Contact message received from {obj.email} ({obj.inquiry_type})")
    return obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages() -> List[ContactMessage]:
    docs = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return [ContactMessage(**d) for d in docs]


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def newsletter_signup(input: NewsletterCreate) -> NewsletterSubscriber:
    existing = await db.newsletter.find_one({"email": input.email})
    if existing:
        existing.pop("_id", None)
        if isinstance(existing.get("created_at"), str):
            existing["created_at"] = datetime.fromisoformat(existing["created_at"])
        return NewsletterSubscriber(**existing)
    obj = NewsletterSubscriber(email=input.email)
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.newsletter.insert_one(doc)
    logger.info(f"Newsletter signup: {obj.email}")
    return obj


@api_router.get("/newsletter", response_model=List[NewsletterSubscriber])
async def list_newsletter() -> List[NewsletterSubscriber]:
    docs = await db.newsletter.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [NewsletterSubscriber(**d) for d in docs]


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks() -> List[StatusCheck]:
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return [StatusCheck(**d) for d in status_checks]


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event() -> None:
    await seed_database()
    logger.info("Kotzinons API ready")


@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    client.close()
