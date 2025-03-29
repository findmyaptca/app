import json
import asyncio
from pathlib import Path

async def filter_and_save_json():
    try:
        # 1️⃣  Read the original JSON file
        file_path = Path("./findMyApt.json")
        output_path = Path("./filteredData.json")

        raw_data = await asyncio.to_thread(file_path.read_text, encoding="utf-8")
        data = json.loads(raw_data)

        # 2️⃣ Select the JSON fields to be filtered
        filtered_data = [
            {
                "id": item.get("id"),
                "primary_listing_photo": item.get("primary_listing_photo"),
                "listing_price": item.get("listing_price"),
                "location": item.get("location"),
                "is_hidden": item.get("is_hidden"),
                "is_live": item.get("is_live"),
                "is_pending": item.get("is_pending"),
                "is_sold": item.get("is_sold"),
                "marketplace_listing_title": item.get("marketplace_listing_title"),
                "listingUrl": item.get("listingUrl"),
                "redacted_description": item.get("redacted_description"),
                "pdp_display_sections": item.get("pdp_display_sections"),
                "bike_score_info": item.get("bike_score_info"),
                "transit_score_info": item.get("transit_score_info"),
                "walk_score_info": item.get("walk_score_info"),
                "nearby_transits": item.get("nearby_transits"),
                "unit_room_info": item.get("unit_room_info"),
                "listing_photos": item.get("listing_photos"),
                "pre_recorded_videos": item.get("pre_recorded_videos")
            }
            for item in data
        ]

        # 3️⃣ Write the new JSON with the filtered data
        await asyncio.to_thread(output_path.write_text, json.dumps(filtered_data, indent=2, ensure_ascii=False), encoding="utf-8")

        print("✅ Fichier filtré enregistré sous 'filteredData.json'")

    except Exception as error:
        print("❌ Erreur :", error)

# LAUNCH FUNCTION
asyncio.run(filter_and_save_json())
