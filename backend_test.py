import requests
import sys
from datetime import datetime

class KotzinonsAPITester:
    def __init__(self, base_url="https://kotzinons-studio.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, validation_fn=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            if success and validation_fn:
                try:
                    response_data = response.json()
                    validation_result = validation_fn(response_data)
                    if not validation_result:
                        success = False
                        print(f"❌ Failed - Validation failed")
                        self.failed_tests.append(f"{name}: Validation failed")
                except Exception as e:
                    success = False
                    print(f"❌ Failed - Validation error: {str(e)}")
                    self.failed_tests.append(f"{name}: Validation error - {str(e)}")
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                return True, response.json() if response.text else {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                self.failed_tests.append(f"{name}: Expected {expected_status}, got {response.status_code}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append(f"{name}: {str(e)}")
            return False, {}

    def test_get_characters(self):
        """Test GET /api/characters - should return 5 characters and Goldon's image_url contains 'tmex48wh' (NOT 'br97rzjk')"""
        def validate(data):
            if not isinstance(data, list):
                print(f"Expected list, got {type(data)}")
                return False
            if len(data) != 5:
                print(f"Expected 5 characters, got {len(data)}")
                return False
            # Check required fields
            required_fields = ['id', 'slug', 'name', 'color', 'role', 'weapon', 'abilities', 'image_url']
            for char in data:
                for field in required_fields:
                    if field not in char:
                        print(f"Missing field '{field}' in character")
                        return False
            
            # PHASE 3 CRITICAL: Check Goldon's image_url
            goldon = next((c for c in data if c.get('slug') == 'goldon'), None)
            if not goldon:
                print("❌ CRITICAL: Goldon character not found!")
                return False
            
            if 'tmex48wh' not in goldon.get('image_url', ''):
                print(f"❌ CRITICAL: Goldon's image_url does NOT contain 'tmex48wh'. Got: {goldon.get('image_url')}")
                return False
            
            if 'br97rzjk' in goldon.get('image_url', ''):
                print(f"❌ CRITICAL: Goldon's image_url contains OLD PROTOTYPE 'br97rzjk'. This MUST be removed! Got: {goldon.get('image_url')}")
                return False
            
            print(f"✓ Found {len(data)} characters with all required fields")
            print(f"✓ PHASE 3 CHECK PASSED: Goldon's image_url contains 'tmex48wh' (new render)")
            return True
        
        return self.run_test(
            "GET /api/characters (Phase 3: Goldon image check)",
            "GET",
            "characters",
            200,
            validation_fn=validate
        )

    def test_get_character_by_slug(self):
        """Test GET /api/characters/{slug} with valid slug"""
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            if data.get('slug') != 'goldon':
                print(f"Expected slug 'goldon', got {data.get('slug')}")
                return False
            if data.get('name') != 'Goldon':
                print(f"Expected name 'Goldon', got {data.get('name')}")
                return False
            print(f"✓ Character 'goldon' retrieved successfully")
            return True
        
        return self.run_test(
            "GET /api/characters/goldon",
            "GET",
            "characters/goldon",
            200,
            validation_fn=validate
        )

    def test_get_character_invalid_slug(self):
        """Test GET /api/characters/{slug} with invalid slug - should return 404"""
        success, _ = self.run_test(
            "GET /api/characters/invalid-slug (404)",
            "GET",
            "characters/invalid-slug-xyz",
            404
        )
        return success

    def test_get_team(self):
        """Test GET /api/team - should return 4 team members"""
        def validate(data):
            if not isinstance(data, list):
                print(f"Expected list, got {type(data)}")
                return False
            if len(data) != 4:
                print(f"Expected 4 team members, got {len(data)}")
                return False
            # Check for specific team members
            names = [member.get('name') for member in data]
            expected_names = ['Uri Eini', 'Daniel Olaleye', 'Tolu Olaleye', 'Joy Eini Olaleye']
            for name in expected_names:
                if name not in names:
                    print(f"Missing team member: {name}")
                    return False
            print(f"✓ Found all 4 team members")
            return True
        
        return self.run_test(
            "GET /api/team",
            "GET",
            "team",
            200,
            validation_fn=validate
        )

    def test_get_gallery(self):
        """Test GET /api/gallery - should return 9 gallery items and NONE contain 'csyvb5r6' or 'br97rzjk'"""
        def validate(data):
            if not isinstance(data, list):
                print(f"Expected list, got {type(data)}")
                return False
            if len(data) != 9:
                print(f"❌ Expected 9 gallery items (Phase 3), got {len(data)}")
                return False
            
            # PHASE 3 CRITICAL: Check that NO gallery items contain old URLs
            print("\n  🔍 Checking all gallery image URLs for Phase 3 compliance...")
            for i, item in enumerate(data, 1):
                image_url = item.get('image_url', '')
                print(f"  [{i}] {item.get('title', 'Untitled')}: {image_url}")
                
                if 'csyvb5r6' in image_url:
                    print(f"  ❌ CRITICAL: Gallery item contains OLD WALL POSTER 'csyvb5r6'. This MUST be removed!")
                    print(f"     Item: {item.get('title')}")
                    return False
                
                if 'br97rzjk' in image_url:
                    print(f"  ❌ CRITICAL: Gallery item contains OLD PROTOTYPE 'br97rzjk'. This MUST be removed!")
                    print(f"     Item: {item.get('title')}")
                    return False
            
            print(f"✓ Found {len(data)} gallery items")
            print(f"✓ PHASE 3 CHECK PASSED: NO old URLs (csyvb5r6 or br97rzjk) found in gallery")
            return True
        
        return self.run_test(
            "GET /api/gallery (Phase 3: 9 items, no old URLs)",
            "GET",
            "gallery",
            200,
            validation_fn=validate
        )

    def test_get_gallery_filtered(self):
        """Test GET /api/gallery?category=digital-renders"""
        def validate(data):
            if not isinstance(data, list):
                print(f"Expected list, got {type(data)}")
                return False
            # All items should be digital-renders
            for item in data:
                if item.get('category') != 'digital-renders':
                    print(f"Expected category 'digital-renders', got {item.get('category')}")
                    return False
            print(f"✓ Found {len(data)} digital-renders items")
            return True
        
        return self.run_test(
            "GET /api/gallery?category=digital-renders",
            "GET",
            "gallery?category=digital-renders",
            200,
            validation_fn=validate
        )

    def test_get_videos(self):
        """Test GET /api/videos - should return at least 1 video with youtube_id='diZbJpeyo6o'"""
        def validate(data):
            if not isinstance(data, list):
                print(f"Expected list, got {type(data)}")
                return False
            if len(data) < 1:
                print(f"Expected at least 1 video, got {len(data)}")
                return False
            # Check for the specific YouTube video
            found = False
            for video in data:
                if video.get('youtube_id') == 'diZbJpeyo6o':
                    found = True
                    break
            if not found:
                print(f"Expected video with youtube_id='diZbJpeyo6o' not found")
                return False
            print(f"✓ Found video with youtube_id='diZbJpeyo6o'")
            return True
        
        return self.run_test(
            "GET /api/videos",
            "GET",
            "videos",
            200,
            validation_fn=validate
        )

    def test_get_stats(self):
        """Test GET /api/stats - should return counts (Phase 3: gallery=9)"""
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            expected = {
                'characters': 5,
                'team': 4,
                'gallery': 9,  # Phase 3: updated to 9
                'videos': 1
            }
            for key, expected_value in expected.items():
                if key not in data:
                    print(f"Missing key '{key}' in stats")
                    return False
                if data[key] != expected_value:
                    print(f"❌ Expected {key}={expected_value}, got {data[key]}")
                    return False
            print(f"✓ Stats correct: {data}")
            return True
        
        return self.run_test(
            "GET /api/stats (Phase 3: gallery=9)",
            "GET",
            "stats",
            200,
            validation_fn=validate
        )

    def test_post_contact(self):
        """Test POST /api/contact with general inquiry"""
        test_data = {
            "name": "Test User",
            "email": f"test_{datetime.now().strftime('%H%M%S')}@example.com",
            "inquiry_type": "general",
            "subject": "Test Subject",
            "message": "This is a test message from automated testing."
        }
        
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            if 'id' not in data:
                print("Missing 'id' field in response")
                return False
            if data.get('email') != test_data['email']:
                print(f"Email mismatch: expected {test_data['email']}, got {data.get('email')}")
                return False
            print(f"✓ Contact message created with id: {data.get('id')}")
            return True
        
        return self.run_test(
            "POST /api/contact (general)",
            "POST",
            "contact",
            200,
            data=test_data,
            validation_fn=validate
        )
    
    def test_post_contact_investment(self):
        """Test POST /api/contact with 'investment' inquiry type (Phase 3)"""
        test_data = {
            "name": "Investor Test",
            "email": f"investor_{datetime.now().strftime('%H%M%S')}@example.com",
            "inquiry_type": "investment",
            "subject": "Investment Inquiry",
            "message": "Testing investment inquiry type for Phase 3."
        }
        
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            if data.get('inquiry_type') != 'investment':
                print(f"❌ Expected inquiry_type='investment', got {data.get('inquiry_type')}")
                return False
            print(f"✓ PHASE 3 CHECK PASSED: Contact accepts 'investment' inquiry type")
            return True
        
        return self.run_test(
            "POST /api/contact (investment inquiry - Phase 3)",
            "POST",
            "contact",
            200,
            data=test_data,
            validation_fn=validate
        )
    
    def test_post_contact_licensing(self):
        """Test POST /api/contact with 'licensing' inquiry type (Phase 3)"""
        test_data = {
            "name": "Licensing Test",
            "email": f"licensing_{datetime.now().strftime('%H%M%S')}@example.com",
            "inquiry_type": "licensing",
            "subject": "Licensing Inquiry",
            "message": "Testing licensing inquiry type for Phase 3."
        }
        
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            if data.get('inquiry_type') != 'licensing':
                print(f"❌ Expected inquiry_type='licensing', got {data.get('inquiry_type')}")
                return False
            print(f"✓ PHASE 3 CHECK PASSED: Contact accepts 'licensing' inquiry type")
            return True
        
        return self.run_test(
            "POST /api/contact (licensing inquiry - Phase 3)",
            "POST",
            "contact",
            200,
            data=test_data,
            validation_fn=validate
        )

    def test_post_newsletter(self):
        """Test POST /api/newsletter"""
        test_email = f"newsletter_{datetime.now().strftime('%H%M%S')}@example.com"
        
        def validate(data):
            if not isinstance(data, dict):
                print(f"Expected dict, got {type(data)}")
                return False
            if 'id' not in data:
                print("Missing 'id' field in response")
                return False
            if data.get('email') != test_email:
                print(f"Email mismatch: expected {test_email}, got {data.get('email')}")
                return False
            print(f"✓ Newsletter subscription created with id: {data.get('id')}")
            return True
        
        success, response = self.run_test(
            "POST /api/newsletter",
            "POST",
            "newsletter",
            200,
            data={"email": test_email},
            validation_fn=validate
        )
        
        # Test idempotency - submit same email again
        if success:
            print("\n🔍 Testing newsletter idempotency (duplicate email)...")
            success2, response2 = self.run_test(
                "POST /api/newsletter (duplicate)",
                "POST",
                "newsletter",
                200,
                data={"email": test_email},
                validation_fn=lambda d: d.get('email') == test_email
            )
            if success2:
                print("✓ Newsletter idempotency working correctly")
        
        return success

def main():
    print("=" * 60)
    print("🚀 Kotzinons Studio API Test Suite - Phase 3")
    print("=" * 60)
    
    tester = KotzinonsAPITester()
    
    # Run all tests
    tester.test_get_characters()
    tester.test_get_character_by_slug()
    tester.test_get_character_invalid_slug()
    tester.test_get_team()
    tester.test_get_gallery()
    tester.test_get_gallery_filtered()
    tester.test_get_videos()
    tester.test_get_stats()
    tester.test_post_contact()
    tester.test_post_contact_investment()
    tester.test_post_contact_licensing()
    tester.test_post_newsletter()
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    print("=" * 60)
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"  - {failed}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
